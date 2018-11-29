import React, { Component } from 'react'
import { navigate } from 'gatsby'
import uniqBy from 'lodash.uniqby'
import Pulsate from '../../components/loading'
import { Subtitle, Flex, List, Anchor } from '../search.elements'
import { fixNameB } from '../../utils/fixName'
import { search } from '../../utils/algolia'
import ReactCountryFlag from 'react-country-flag'
import Layout from '../../components/layout'

export default class Search extends Component {
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

      this.setState({
        cities: content.hits,
        loaded: true,
      })
    })
  }

  selectCity = city => {
    this.search(fixNameB(city))
    return navigate(`/${fixNameB(city)}`)
  }

  componentDidMount() {
    const city = (this.props.location.state || { city: '' }).city

    this.search(city)
  }

  render() {
    const { loaded, cities } = this.state
    const city = (this.props.location.state || { city: '' }).city

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
      <Layout>
        <Flex
          style={{
            textAlign: 'center',
          }}
        >
          <Subtitle>More than one city matches your search</Subtitle>
          <Subtitle>What city did you mean ?</Subtitle>
          <ul>
            {uniqBy(cities, 'name').map(city => (
              <List>
                <Anchor to={`/${fixNameB(city.name)}`}>
                  {city.name}
                  <ReactCountryFlag code={city.info.country.short_name} />
                </Anchor>
              </List>
            ))}
          </ul>
        </Flex>
      </Layout>
    )
  }
}
