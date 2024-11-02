import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument,UpdateCommand } from '@aws-sdk/lib-dynamodb'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { v4 as uuidv4 } from 'uuid'
import { getUserId } from '../../utils/utils.mjs'

const dynamoDbClient = DynamoDBDocument.from(new DynamoDB())
const s3Client = new S3Client()

const urlExpiration = parseInt(process.env.SIGNED_URL_EXPIRATION)
const todosTable = process.env.TODOS_TABLE
const imagesTable = process.env.IMAGES_TABLE
const bucketName = process.env.IMAGES_S3_BUCKET

export async function handler(event) {
  const authorization = event.headers.Authorization
  const userId = getUserId(authorization)

  const todoId = event.pathParameters.todoId  

  const validGroupId = await todoExists(todoId, userId)

  if (!validGroupId) {
    return {
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        error: 'Todo does not exist'
      })
    }
  }

  const imageId = uuidv4()
  // const newItem = await createImage(todoId, imageId, event)
  const url = await getUploadUrl(imageId)

  await updatedTodo(todoId, userId, imageId)
  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      todoId: todoId,
      imageId: imageId,
      uploadUrl: url
      // newItem
    })
  }
}

async function todoExists(todoId, userId) {
  const result = await dynamoDbClient.get({
    TableName: todosTable,
    Key: {
      userId: userId,
      todoId: todoId
    }
  })

  console.log('Get todo: ', result)
  return !!result.Item
}

async function getUploadUrl(imageId) {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: imageId
  })
  const url = await getSignedUrl(s3Client, command, {
    expiresIn: urlExpiration
  })
  return url
}

async function createImage(todoId, imageId, event) {
  const timestamp = new Date().toISOString()
  const newImage = JSON.parse(event.body)

  const newItem = {
    todoId,
    timestamp,
    imageId,
    imageUrl: `https://${bucketName}.s3.amazonaws.com/${imageId}`,
    ...newImage
  }
  console.log('Storing new item: ', newItem)

  await dynamoDbClient.put({
    TableName: imagesTable,
    Item: newItem,
  })

  return newItem
}


async function updatedTodo(todoId, userId, imageId) {
  const timestamp = new Date().toISOString()
  const link = `https://${bucketName}.s3.amazonaws.com/${imageId}`

  await dynamoDbClient.send(
    new UpdateCommand({
      TableName: todosTable,
      Key: {
        userId: userId,    // Partition key
        todoId: todoId,                 // Sort key
      },
      UpdateExpression: "set attachmentUrl = :attachmentUrl",
  
      ExpressionAttributeValues: {
        ":attachmentUrl": link
      },
      ReturnValues: "ALL_NEW",
    })
  );  

  return todoId
}