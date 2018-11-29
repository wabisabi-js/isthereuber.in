const osmosis = require('osmosis')
const createFile = require('./createFile')

const substitutions = {
  uber: {
    'Southern Netherlands': 'Rotterdam'
  }
}

const fixCityName = (city, company) =>
  substitutions[company] && substitutions[company][city]
    ? substitutions[company][city]
    : city

module.exports = async ({ url, selector, company }) => {
  const arr = []
  await osmosis
    .get(url)
    .find(selector)
    .set('city')
    .data(data => {
      arr.push({
        name: fixCityName(data.city, company),
        company
      })
    })
    .log(console.log)
    .error(console.log)
    .debug(console.log)
    .done(() => arr)

  createFile(arr, company)
}
