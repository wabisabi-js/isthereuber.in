require('dotenv').config()
let algoliasearch = require('algoliasearch')
const path = require('path')
const removeAccents = require('remove-accents')

const fixNameB = name =>
  removeAccents(name)
    .split(' ')
    .join('-')
    .toLowerCase()

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  let client = algoliasearch('UEHWANDHH2', process.env.ALGOLIA_KEY)
  let index = client.initIndex('cities')

  var browser = index.browseAll()
  var hits = []

  browser.on('result', function onResult(content) {
    hits = hits.concat(content.hits)
  })

  browser.on('end', function onEnd() {
    hits.forEach(city => {
      createPage({
        path: `/${fixNameB(city.name)}`,
        component: path.resolve(`src/templates/city.js`),
        context: {
          city,
        },
      })
    })
  })
}
