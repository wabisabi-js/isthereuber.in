require('dotenv').config()
let algoliasearch = require('algoliasearch')
const data = require('./utils/combine-files')

let client = algoliasearch('UEHWANDHH2', process.env.ALGOLIA_KEY)
let index = client.initIndex('cities')

index.clearIndex(function(err, content) {
  if (err) throw err

  index.addObjects(data, (err, content) => {
    if (err) console.log(err)
    console.log(content)
  })
})
