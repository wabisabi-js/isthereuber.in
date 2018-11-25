const osmosis = require('osmosis')
const fetch = require('isomorphic-fetch')
const removeAccents = require('remove-accents')
const fs = require('fs')
const prettier = require('prettier')

const substitutions = {
  uber: {
    'Southern Netherlands': 'Rotterdam',
  },
}

const fixCityName = (city, company) =>
  substitutions[company] && substitutions[company][city]
    ? substitutions[company][city]
    : city

const leMap = async (arr, company) => {
  const map = arr.map(async a => {
    const data = await getLocation(removeAccents(a.name))

    if ((data || {}).address_components) {
      const country = data.address_components.find(a =>
        a.types.includes('country')
      )
      return {
        ...a,
        info: {
          formatted_address: data.formatted_address,
          country,
          place_id: data.place_id,
        },
      }
    }

    return {
      ...a,
      info: null,
    }
  })

  const all = await Promise.all(map).then(completed => completed)

  const code = prettier.format(
    `
    module.exports = ${JSON.stringify(all)}
  `,
    { semi: false, parser: 'babylon' }
  )

  await fs.writeFile(`./data/single/${company}.js`, code, err => {
    if (err) {
      return console.log(err)
    }

    console.log('The file was saved!')
  })
}

const getLocation = name =>
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=AIzaSyDMpDkPdvwEG9mxQ3sA6vaKrq64V7trj_4`
  )
    .then(data => data.json())
    .then(({ results }) => results[0] || { address_components: [] })
    .catch(console.log)

module.exports = async ({ url, selector, company }) => {
  const arr = []
  await osmosis
    .get(url)
    .find(selector)
    .set('city')
    .data(data => {
      arr.push({
        name: fixCityName(data.city, company),
        company,
      })
    })
    // .log(console.log)
    // .error(console.log)
    // .debug(console.log)
    .done(() => arr)

  leMap(arr, company)
}
