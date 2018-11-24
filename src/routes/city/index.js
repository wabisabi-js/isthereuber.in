import { h, Component } from 'preact'
import uniqBy from 'lodash.uniqby'
import Confetti from 'react-confetti'
import capitalize from 'capitalize'

import { Pulsate } from 'styled-loaders'
import { Title, Subtitle, Wrapper, Flex, Company, GoBack } from './elements'
import { search } from '../../utils/algolia'

class City extends Component {
  state = {
    cities: [],
    loaded: false,
  }

  search = city => {
    if (city.length > 3) {
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
    } else {
      this.setState({
        loaded: true,
      })
    }
  }

  componentDidMount() {
    const { city } = this.props
    this.search(city)
  }

  render({ city }, { cities, loaded }) {
    const uber = cities.filter(c => c.company === 'uber')
    const other = cities.filter(c => c.company !== 'uber')

    if (!loaded) {
      return (
        <Flex>
          <Pulsate color="white" />
        </Flex>
      )
    }
    return (
      <Wrapper>
        {loaded ? (
          <Flex>
            {uber.length ? (
              [
                <Wrapper>
                  <Confetti
	width={window.innerWidth}
	height={window.innerHeight}
                  />
                </Wrapper>,
                <Title>YES 🚗</Title>,
              ]
            ) : (
              <Title>NO 😕</Title>
            )}
            {other.length ? (
              <div>
                {uber.length ? (
                  <Subtitle>There is also</Subtitle>
                ) : (
                  <Subtitle>But there is</Subtitle>
                )}

                <Flex row>
                  {uniqBy(other, 'company').map(c => (
                    <Company>{capitalize(c.company)}</Company>
                  ))}
                </Flex>
              </div>
            ) : null}
            <GoBack href="/">Search Again 🔎</GoBack>
          </Flex>
        ) : null}
      </Wrapper>
    )
  }
}

export default City
