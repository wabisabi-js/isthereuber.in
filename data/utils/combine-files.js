const requireDir = require('require-dir')
const companies = requireDir('../single')

// eslint-disable-next-line
const data = [].concat.apply([], Object.values(companies))

module.exports = data.reduce((acc, curr) => {
  const newItem = {
    ...curr,
    objectID: curr.info.place_id,
    company: [curr.company]
  }

  if (acc.find(a => curr.info.place_id === a.info.place_id)) {
    const current = acc.find(a => curr.info.place_id === a.info.place_id)

    if (curr.link) {
      current.link = curr.link
    }

    if (!current.company.includes(curr.company)) { current.company.push(curr.company) }
  } else {
    acc.push(newItem)
  }

  return acc
}, [])
