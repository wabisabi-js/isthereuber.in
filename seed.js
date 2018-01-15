const osmosis = require('osmosis')
const jsonfile = require('jsonfile')

const file = 'src/data/uber.json'
const fileCabify = 'src/data/cabify.json'
const fileLyft = 'src/data/lyft.json'
const fileTaxify = 'src/data/taxify.json'

const uber = { cities: [] }
const cabify = { cities: [] }
const lyft = { cities: [] }
const taxify = { cities: [] }

const formatting = { spaces: 2, EOL: '\n' }

const substitutions = {
  uber: {
    'Southern Netherlands': 'Rotterdam',
  },
}

const fixCityName = (city, company) =>
  substitutions[company] && substitutions[company][city]
    ? substitutions[company][city]
    : city

osmosis
  .get('https://www.uber.com/en-GB/cities/')
  .find('h3 + ul li')
  .set({
    city: 'a',
    link: 'a@href',
  })
  .data(city => {
    uber.cities.push({
      name: fixCityName(city.city, 'uber'),
      link: city.link,
    })
  })
  .error(error => error)
  .done(() =>
    jsonfile.writeFile(file, uber, formatting, err => {
      console.error(err)
    })
  )

osmosis
  .get('https://cabify.com/en#cities-list')
  .find('div.cities ul li')
  .set({
    name: 'a',
    link: 'a@href',
  })
  .data(city => {
    cabify.cities.push({
      name: city.name,
      link: city.link,
    })
  })
  .done(() =>
    jsonfile.writeFile(fileCabify, cabify, formatting, err => {
      console.error(err)
    })
  )

osmosis
  .get('https://www.lyft.com/cities')
  .find('.list-unstyled .m-y-s')
  .set({
    name: 'a',
    link: 'a@href',
  })
  .data(city => {
    lyft.cities.push({
      name: city.name,
      link: city.link,
    })
  })
  .done(() =>
    jsonfile.writeFile(fileLyft, lyft, formatting, err => {
      console.error(err)
    })
  )

osmosis
  .get('https://taxify.eu/cities/')
  .find('.list-inline li h4')
  .set({
    name: 'a',
    link: 'a@href',
  })
  .data(city => {
    taxify.cities.push({
      name: city.name,
      link: city.link,
    })
  })
  .done(() =>
    jsonfile.writeFile(fileTaxify, taxify, formatting, err => {
      console.error(err)
    })
  )
