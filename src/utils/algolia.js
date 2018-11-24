import algoliasearch from 'algoliasearch'
import { fixName } from './fixName'

const start = () => {
  const client = algoliasearch('3OO1FYFEBH', 'c6bc7348d7d5c62908beb5e8827248ed')
  return client.initIndex('cities')
}

export const search = (city, cb) => {
  start().search({ query: fixName(city) }, cb)
}
