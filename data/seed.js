const scrape = require('./getData')

// //  uber
// scrape({
//   url: 'https://www.uber.com/en-GB/cities/',
//   selector: 'h3 + div a',
//   company: 'uber',
// })

// // cabify
// scrape({
//   url: 'https://cabify.com/en#cities-list',
//   selector: '.countries-list--cities li a',
//   company: 'cabify',
// })

// // lyft
// scrape({
//   url: 'https://www.lyft.com/cities',
//   selector: 'h6 + button + ul li a',
//   company: 'lyft',
// })

// // taxify
// scrape({
//   url: 'https://taxify.eu/cities/',
//   selector: '.list-inline li h4',
//   company: 'taxify',
// })

// // myTaxi
// scrape({
//   url: 'http://ie.mytaxi.com/europeanavailability',
//   selector: '.content__body p',
//   company: 'myTaxi',
// })

// // Grab
// scrape({
//   url: 'https://www.grab.com/sg/where-we-are/',
//   selector: '.city',
//   company: 'Grab',
// })

// // GO JEK
// scrape({
//   url:
//     'https://www.go-jek.com/faq/layanan/go-car/#di-kota-manakah-go-car-tersedia',
//   selector: '#in-which-cities-can-i-order-a-car ol li',
//   company: 'Go-JEK',
// })

// Gett

scrape({
  url: 'https://gett.com/uk/about',
  selector: '#section3',
  company: 'Gett',
})
