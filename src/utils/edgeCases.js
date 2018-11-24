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
]

export default city =>
  city &&
  (cases.filter(c => c.name.toLowerCase() === city.toLowerCase())[0] || {})
    .message
