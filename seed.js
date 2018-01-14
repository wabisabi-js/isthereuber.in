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

osmosis
  .get('https://www.uber.com/en-GB/cities/')
  .find('h3 + ul li')
  .set({
    city: 'a',
    link: 'a@href'
  })
  .data(city => {
    uber.cities.push({
      city: city.city,
      link: city.link
    })
  })
  .error(error => error)
  .done(() =>
    jsonfile.writeFile(file, uber, err => {
      console.error(err)
    })
  )

osmosis
  .get('https://cabify.com/en#cities-list')
  .find('div.cities ul li')
  .set({
    name: 'a',
    link: 'a@href'
  })
  .data(city => {
    cabify.cities.push({
      name: city.name,
      link: city.link
    })
  })
  .done(() =>
    jsonfile.writeFile(fileCabify, cabify, err => {
      console.error(err)
    })
  )

osmosis
  .get('https://www.lyft.com/cities')
  .find('.list-unstyled .m-y-s')
  .set({
    name: 'a',
    link: 'a@href'
  })
  .data(city => {
    lyft.cities.push({
      name: city.name,
      link: city.link
    })
  })
  .done(() =>
    jsonfile.writeFile(fileLyft, lyft, err => {
      console.error(err)
    })
  )

osmosis
  .get('https://taxify.eu/cities/')
  .find('.list-inline li h4')
  .set({
    name: 'a',
    link: 'a@href'
  })
  .data(city => {
    taxify.cities.push({
      name: city.name,
      link: city.link
    })
  })
  .done(() =>
    jsonfile.writeFile(fileTaxify, taxify, err => {
      console.error(err)
    })
  )
