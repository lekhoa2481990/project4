import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'
import { v4 as uuidv4 } from 'uuid'
import { getUserId } from '../../utils/utils.mjs'
// import { getUserId } from '../utils/logger.mjs'
import { createLogger } from '../../utils/logger.mjs'


const dynamoDbClient = DynamoDBDocument.from(new DynamoDB())
const todosTable = process.env.TODOS_TABLE

const logger = createLogger('create Todo')

export async function handler(event) {
  const newTodo = JSON.parse(event.body)

  console.log('Processing event: ', 'Create Todo')
  const itemId = uuidv4()

  // const parsedBody = JSON.parse(event.body)

  const authorization = event.headers.Authorization
  const userId = getUserId(authorization)
  // const done = new Boolean(true);

  // const userId = 'Khoa'
  const newItem = {
    todoId: itemId,
    userId,
    // done,
    ...newTodo
  }

  logger.info('new item', { newItem})


  await dynamoDbClient.put({
    TableName: todosTable,
    Item: newItem
  })

  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      newItem
    })
  }
}

