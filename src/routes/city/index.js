import { h, Component } from 'preact'
import Confetti from 'react-confetti'
import Pulsate from '../../components/loading'
import {
  Alternative,
  Title,
  Subtitle,
  Wrapper,
  Flex,
  Company,
  GoBack,
  Message,
} from './elements'
import { search } from '../../utils/algolia'
import edgeCases from '../../utils/edgeCases'
import ReactCountryFlag from 'react-country-flag'
import { getAppStoreLink } from '../../utils/appStores'
import uberData from '../../../data/single/uber'

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

  render({}, { cities, loaded }) {
    const city = cities[0]
    const match =
      city && uberData.find(a => a.info.place_id === city.info.place_id)

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
            {city && city.company.includes('uber') ? (
              [
                <Wrapper>
                  <Confetti
	width={window.innerWidth}
	height={window.innerHeight}
                  />
                </Wrapper>,
                <a
	style={{ textDecoration: 'none' }}
	href={match ? `https://www.uber.com${match.link}` : null}
	target="_blank"
	rel="noopener noreferrer"
                >
                  <Title>
                    YES 🚗{' '}
                    <ReactCountryFlag code={city.info.country.short_name} />
                  </Title>
                </a>,
                <Message>{edgeCases(cities[0])}</Message>,
              ]
            ) : (
              <Title>NO 😕</Title>
            )}
            {city && city.company.filter(item => item !== 'uber').length ? (
              <div>
                {city.company.includes('uber') ? (
                  <Subtitle>There is also</Subtitle>
                ) : (
                  <Subtitle>But there is</Subtitle>
                )}

                <Alternative row>
                  {city.company
                    .filter(item => item !== 'uber')
                    .map(c => (
                      <Company href={getAppStoreLink(c)} target="_blank">
                        {c}
                      </Company>
                    ))}
                </Alternative>
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
