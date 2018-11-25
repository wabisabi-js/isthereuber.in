const osmosis = require('osmosis')

const substitutions = {
  uber: {
    'Southern Netherlands': 'Rotterdam',
  },
}

const fixCityName = (city, company) =>
  substitutions[company] && substitutions[company][city]
    ? substitutions[company][city]
    : city

module.exports = ({ url, selector, company }) => {
  const arr = []
  osmosis
    .get(url)
    .find(selector)
    .set('city')
    .data(data => {
      arr.push({
        name: fixCityName(data.city, company),
        company,
      })
    })
    .error(error => error)
    .done(() => console.log(arr))
}
