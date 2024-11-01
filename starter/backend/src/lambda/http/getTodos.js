import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'
import { getUserId } from '../../utils/utils.mjs'

// export function handler(event) {
//   // TODO: Get all TODO items for a current user
//   return undefined
// }


const dynamoDbClient = DynamoDBDocument.from(new DynamoDB())

const todosTable = process.env.TODOS_TABLE
const todosIndex = process.env.TODOS_CREATED_AT_INDEX

export async function handler(event) {
  // console.log('Processing event: ', event)

  const authorization = event.headers.Authorization
  const userId = getUserId(authorization)

  // console.log('userId: ', userId)
  // console.log('table: ', todosTable)
  // console.log('index: ', todosIndex)

  // const scanCommand = {
  //   TableName: todosTable
  // }
  // const result = await dynamoDbClient.scan(scanCommand)
  // const items = result.Items

  const result = await dynamoDbClient.query({
    TableName: todosTable,
    // IndexName: todosIndex,
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': userId
    }
  })

  const items = result.Items
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      items
    })
  }
}