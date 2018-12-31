import { cases } from '../utils/edgeCases'

export function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(cases)
  })
}
