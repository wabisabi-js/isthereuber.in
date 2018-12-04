// fix for when cities have spaces

exports.onPrefetchPathname = () => {
  const path = location.pathname
  if (!path.includes('search')) {
    const cleanURL = decodeURI(path)
      .split(' ')
      .join('-')
      .toLowerCase()
      .trim()

    if (cleanURL !== path) {
      window.history.pushState('profile', null, '/')
      history.pushState(null, null, cleanURL)
      window.location.reload()
    }
  }
}
