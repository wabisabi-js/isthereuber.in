export default name =>
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=AIzaSyDMpDkPdvwEG9mxQ3sA6vaKrq64V7trj_4`
  )
    .then(data => data.json())
    .then(({ results }) => {
      const address = results[0].address_components
      const country = address.find(a => a.types.includes('country'))

      return country
    })
