import { h, Component } from 'preact'
import uniqBy from 'lodash.uniqby'
import styled from 'styled-components'
import is from 'styled-is'
import removeAccents from 'remove-accents'
import algoliasearch from 'algoliasearch'
import { route } from 'preact-router'
import { Pulsate } from 'styled-loaders'

const Subtitle = styled.h2`
  color: ${props => props.theme.secondary};
  font-size: 40px;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  p:not(:last-child) {
    padding-right: 20px;
  }

  ${is('row')`
		flex-direction: row;
	`};
`

const Anchor = styled.li`
  list-style: none;
  text-decoration: underline;
  font-size: 24px;
  margin-bottom: 20px;
  cursor: pointer;
`

const fixName = name =>
  name
    .split('-')
    .join(' ')
    .toLowerCase()

const fixNameB = name =>
  removeAccents(name)
    .split(' ')
    .join('-')
    .toLowerCase()

class Search extends Component {
  state = {
    cities: [],
    diff: null,
    loaded: false,
  }

  search = city => {
    const client = algoliasearch(
      '3OO1FYFEBH',
      'c6bc7348d7d5c62908beb5e8827248ed'
    )
    const index = client.initIndex('cities')

    index.search({ query: fixName(city) }, (err, content) => {
      if (err) {
        this.setState({
          loaded: true,
        })
        console.error(err)
        return
      }

      this.setState({
        cities: content.hits,
        loaded: true,
      })
    })
  }

  selectCity = city => {
    this.search(fixNameB(city))
    route(`/${fixNameB(city)}`, true)
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
            </Anchor>
          ))}
        </ul>
      </Flex>
    )
  }
}

export default Search
