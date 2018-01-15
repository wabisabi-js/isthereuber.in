import uber from './uber.json'
import lyft from './lyft.json'
import cabify from './cabify.json'
import taxify from './taxify.json'
import easytaxi from './easytaxi.json'

export default [
  ...uber.cities.map(u => ({ ...u, company: 'uber' })),
  ...lyft.cities.map(u => ({ ...u, company: 'lyft' })),
  ...cabify.cities.map(u => ({ ...u, company: 'cabify' })),
  ...taxify.cities.map(u => ({ ...u, company: 'taxify' })),
  ...easytaxi.cities.map(u => ({ ...u, company: 'easytaxi' })),
]
