require('dotenv').config()
const requireDir = require('require-dir')
const companies = requireDir('./single')
let algoliasearch = require('algoliasearch')
// eslint-disable-next-line
const data = [].concat.apply([], Object.values(companies))

const newArray = data.reduce((acc, curr) => {
  const newItem = {
    ...curr,
    objectID: curr.info.place_id,
    company: [curr.company],
  }

  if (acc.find(a => curr.info.place_id === a.info.place_id)) {
    const current = acc.find(a => curr.info.place_id === a.info.place_id)

    if (curr.link) {
      current.link = curr.link
    }

    if (!current.company.includes(curr.company))
      current.company.push(curr.company)
  } else {
    acc.push(newItem)
  }

  return acc
}, [])

let client = algoliasearch('UEHWANDHH2', process.env.ALGOLIA_KEY)
let index = client.initIndex('cities')

index.addObjects(newArray, (err, content) => {
  console.log(content)
})
