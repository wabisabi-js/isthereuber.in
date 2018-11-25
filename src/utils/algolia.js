import algoliasearch from 'algoliasearch'
import { fixName } from './fixName'

const start = () => {
  const client = algoliasearch('UEHWANDHH2', 'e930d02e3899db88f80b01a000521d56')
  return client.initIndex('cities')
}

export const search = (city, cb) => {
  start().search({ query: fixName(city) }, cb)
}
