const removeAccents = require('remove-accents')
const fs = require('fs')
const prettier = require('prettier')
const getLocation = require('./utils/getLocation')
const path = require('path')

module.exports = async (arr, company) => {
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
          place_id: data.place_id
        }
      }
    }

    return {
      ...a,
      info: null
    }
  })

  const all = await Promise.all(map).then(completed => completed)

  const code = prettier.format(
    `
    module.exports = ${JSON.stringify(all)}
  `,
    { semi: false, parser: 'babylon' }
  )

  await fs.writeFile(path.resolve(__dirname, `single/${company}.js`), code, err => {
    if (err) {
      return console.log(err)
    }

    console.log('The file was saved!')
  })
}
