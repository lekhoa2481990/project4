import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument, UpdateCommand } from '@aws-sdk/lib-dynamodb'
import { v4 as uuidv4 } from 'uuid'
import { getUserId } from '../../utils/utils.mjs'
// import { getUserId } from '../utils/logger.mjs'
// import { createLogger } from '../../utils/logger.mjs'


const dynamoDbClient = DynamoDBDocument.from(new DynamoDB())
// const client = new DynamoDBClient({});
// const docClient = DynamoDBDocumentClient.from(client);
const todosTable = process.env.TODOS_TABLE

export async function handler(event) {
  const todoId = event.pathParameters.todoId
  const updatedTodo = JSON.parse(event.body)

 console.log('updatedTodo: ', updatedTodo)
  console.log('Processing event: ', 'Create Todo')
  // const itemId = uuidv4()

  // const parsedBody = JSON.parse(event.body)

  const authorization = event.headers.Authorization
  const userId = getUserId(authorization)

  // const newItem = {
  //   todoId: itemId,
  //   userId,
  //   // // done,
  //   ...updatedTodo
  // }

  // logger.info('new item', { newItem})

const done = updatedTodo.done
console.log('done: ', done)

//   await dynamoDbClient.put({
//     TableName: todosTable,
//     Item: updatedTodo
//   })


await dynamoDbClient.send(
  new UpdateCommand({
    TableName: todosTable,
    Key: {
      userId: userId,    // Partition key
      todoId: todoId,                 // Sort key
    },
    // ExpressionAttributeNames: {
    //   "#n": "name",
    // },
    // UpdateExpression: "set #n = :nm",
    UpdateExpression: "set done = :done",

    ExpressionAttributeValues: {
      ":done": done
    },
    ReturnValues: "ALL_NEW",
  })
);
  
  // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      updatedTodo
    })
  }
}
