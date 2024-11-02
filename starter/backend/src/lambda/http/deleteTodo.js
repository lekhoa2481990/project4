import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'
import { v4 as uuidv4 } from 'uuid'
import { getUserId } from '../../utils/utils.mjs'
// import { getUserId } from '../utils/logger.mjs'
// import { createLogger } from '../../utils/logger.mjs'


const dynamoDbClient = DynamoDBDocument.from(new DynamoDB())
const todosTable = process.env.TODOS_TABLE

export async function handler(event) {
  const todoId = event.pathParameters.todoId
  // const updatedTodo = JSON.parse(event.body)

  console.log('Processing event: ', 'Create Todo')
  // const itemId = uuidv4()

  // const parsedBody = JSON.parse(event.body)

  const authorization = event.headers.Authorization
  const userId = getUserId(authorization)

  // const updateItem = {
  //   todoId: todoId,
  //   userId,
  //   ...parsedBody
  // }

  //   var fileItem = {
//     Key: {
//       question_id: 1234
//     },
//     TableName: tableName,
// };

  await dynamoDbClient.delete({
    TableName: todosTable,
    Key: {
      todoId,
      userId
    }
  })

//   var fileItem = {
//     Key: {
//       question_id: 1234
//     },
//     TableName: tableName,
// };

//   await dynamoDbClient.send({
//     TableName: todosTable,
//     Key: { path: { S: event.path } },
//     UpdateExpression: 'ADD hits :incr',
//     ExpressionAttributeValues: { ':incr': { N: '1' } }
// })

// await ddbDocClient.send(
//   new UpdateCommand({
//     TableName: todosTable,
//     Key: {
//       pk: userId,    // Partition key
//       sk: todoId,                 // Sort key
//     },
//     ExpressionAttributeNames: {
//       "#n": "name",
//     },
//     UpdateExpression: "set #n = :nm",
//     ExpressionAttributeValues: {
//       ":nm": "Big Jim Bob",
//     },
//     ReturnValues: "ALL_NEW",
//   })
// );
  
  // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      todoId
    })
  }
}
