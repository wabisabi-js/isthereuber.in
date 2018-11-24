import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Home from 'async!../routes/home'
import City from 'async!../routes/city'
import Search from 'async!../routes/search'

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <City path="/:city" />
          <Search path="/search/:city" />
        </Router>
      </div>
    )
  }
}
