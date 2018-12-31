import apps from '../utils/app-stores-links.json'

export function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(apps)
  })
}
