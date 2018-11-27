const fetch = require('isomorphic-fetch')

module.exports = name =>
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=AIzaSyDMpDkPdvwEG9mxQ3sA6vaKrq64V7trj_4`
  )
    .then(data => data.json())
    .then(({ results }) => results[0] || { address_components: [] })
    .catch(console.log)
