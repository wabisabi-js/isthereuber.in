const cases = [
  {
    type: 'price',
    message: 'The price for getting an Uber is the same as getting a taxi',
    name: 'berlin',
  },
  {
    type: 'safety',
    message:
      'Be careful getting an Uber in porto because of taxi drivers. Mainly in airports and train stations',
    name: 'porto',
  },
  {
    type: 'payment',
    message:
      'Uber drivers only take payment by cash. If they think you\'ll pay by card then they\'ll cancel the ride',
    name: 'buenos aires',
  },
]

export default city =>
  city &&
  (cases.filter(c => c.name.toLowerCase() === city.toLowerCase())[0] || {})
    .message
