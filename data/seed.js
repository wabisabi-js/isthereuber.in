// const osmosis = require('osmosis')

// const uber = []
// const cabify = []
// const lyft = []
// const taxify = []
// const mytaxi = []
// const grab = []

// const substitutions = {
//   uber: {
//     'Southern Netherlands': 'Rotterdam',
//   },
// }

// const fixCityName = (city, company) =>
//   substitutions[company] && substitutions[company][city]
//     ? substitutions[company][city]
//     : city

// osmosis
//   .get('https://www.uber.com/en-GB/cities/')
//   .find('h3 + div a')
//   .set('city')
//   .data(data => {
//     uber.push({
//       name: fixCityName(data.city, 'uber'),
//     })
//   })
//   .error(error => error)
//   .done(() => console.log(uber))

// osmosis
//   .get('https://cabify.com/en#cities-list')
//   .find('.countries-list--cities li a')
//   .set('city')
//   .data(data => {
//     cabify.push({
//       name: data.city,
//     })
//   })
//   .done(() => console.log(cabify))

// osmosis
//   .get('https://www.lyft.com/cities')
//   .find('h6 + button + ul li a')
//   .set('city')
//   .data(data => {
//     lyft.push({
//       name: data.city,
//     })
//   })
//   .done(() => console.log(lyft))

// osmosis
//   .get('https://taxify.eu/cities/')
//   .find('.list-inline li h4')
//   .set('city')
//   .data(data => {
//     taxify.push({
//       name: data.city,
//     })
//   })
//   .done(() => console.log(taxify))

// osmosis
//   .get('http://ie.mytaxi.com/europeanavailability')
//   .find('.content__body p')

//   .data(data => {
//     console.log(data)
//     mytaxi.push({
//       name: data,
//     })
//   })
// // .done(() => console.log(mytaxi))

// osmosis
//   .get('https://www.grab.com/sg/where-we-are/')
//   .find('.city')
//   .set('city')
//   .data(data => {
//     grab.push({
//       name: data.city,
//       company: 'Grab',
//     })
//   })
//   .done(() => console.log(JSON.stringify(grab)))
