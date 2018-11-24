import { h, Component } from 'preact'
import uniqBy from 'lodash.uniqby'
import { route } from 'preact-router'
import { Pulsate } from '../../components/loading'
import { Subtitle, Flex, Anchor } from './elements'
import { fixNameB } from '../../utils/fixName'
import { search } from '../../utils/algolia'

class Search extends Component {
  state = {
    cities: [],
    loaded: false,
  }

  search = city => {
    search(city, (err, content) => {
      if (err) {
        this.setState({
          loaded: true,
        })
        console.error(err)
        return
      }

      this.setState(
        {
          cities: content.hits,
          loaded: true,
        },
        () => {
          if (uniqBy(content.hits, 'name').length > 1) {
            content.hits.map(city => this.getFlag(city))
          }
        }
      )
    })
  }

  selectCity = city => {
    this.search(fixNameB(city))
    route(`/${fixNameB(city)}`, true)
  }

  getFlag = ({ name = '', objectID }) => {
    fetch(
      `http://api.geonames.org/searchJSON?q=${name}&style=short&maxRows=1&username=saravieira`
    )
      .then(data => data.json())
      .then(({ geonames }) =>
        this.setState({
          [objectID]: geonames[0].countryCode,
        })
      )
  }

  componentDidMount() {
    this.search(this.props.city)
  }

  render({ city }, { cities, loaded }) {
    if (!loaded) {
      return (
        <Flex>
          <Pulsate color="white" />
        </Flex>
      )
    }

    if (uniqBy(cities, 'name').length <= 1) {
      this.selectCity(city)
    }

    return (
      <Flex style={{ textAlign: 'center' }}>
        <Subtitle>More than one city matches your search</Subtitle>
        <Subtitle>What city did you mean ?</Subtitle>
        <ul>
          {uniqBy(cities, 'name').map(city => (
            // eslint-disable-next-line
            <Anchor onClick={() => this.selectCity(city.name)}>
              {city.name}
              {this.state[city.objectID] ? (
                <img
	src={`https://www.countryflags.io/${
                    this.state[city.objectID]
                  }/flat/32.png`}
                />
              ) : null}
            </Anchor>
          ))}
        </ul>
      </Flex>
    )
  }
}

export default Search
