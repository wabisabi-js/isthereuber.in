require('dotenv').config()
let algoliasearch = require('algoliasearch')
const data = require('./utils/combine-files')

let client = algoliasearch('UEHWANDHH2', process.env.ALGOLIA_KEY)
let index = client.initIndex('cities')

index.addObjects(data, (err, content) => {
  console.log(content)
})
