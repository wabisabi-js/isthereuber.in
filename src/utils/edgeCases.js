const cases = [
  {
    type: 'price',
    message: 'The price for getting an Uber is the same as getting a taxi',
    city: ['berlin']
  },
  {
    type: 'price',
    message:
      'A ride from Charles de Gaule Airport to Paris is legally set at 50-55€, and 30-35€ from Orly Airport. Beware of frauds.',
    city: ['paris']
  },
  {
    type: 'safety',
    message: 'Be aware! Some taxi drivers may attack your uber driver.',
    city: ['porto', 'istanbul']
  },
  {
    type: 'price',
    message:
      "Uber drivers only take payment by cash. If they think you'll pay by card then they'll cancel the ride",
    city: ['san salvador', 'buenos aires']
  },
  {
    type: 'service',
    message: 'Only Uber Black is available in Seoul.',
    city: ['seoul']
  },
  {
    type: 'service',
    message: 'It is preferred to take Yandex Taxi',
    country: ['russia']
  },
  {
    type: 'service',
    message: 'There are really few cars',
    city: ['helsinki']
  }
]

export default ({ name, info: { country = { long_name: '' } } }) => {
  const match = cases.find(
    c =>
      (c.city && c.city.includes(name.toLowerCase())) ||
      (c.country && c.country.includes(country.long_name.toLowerCase()))
  )
  if (match) {
    return match.message
  }
}
