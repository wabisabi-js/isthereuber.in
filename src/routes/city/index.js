import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import data from '../../data/index.js'
import sizeMe from 'react-sizeme'
import styled from 'styled-components'
import Confetti from 'react-confetti'
import capitalize from 'capitalize'
import is from 'styled-is'
import uniqBy from 'lodash.uniqby'
import removeAccents from 'remove-accents'

const Title = styled.h1`
  color: ${props => props.theme.secondary};
  font-size: 80px;
`

const Subtitle = styled.h2`
  color: ${props => props.theme.secondary};
  font-size: 40px;
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

const Company = styled.p`
  color: white;
  font-size: 24px;
  padding: 0;
  margin: 0;
`

const GoBack = styled(Link)`
  color: white;
  z-index: 99;
  position: relative;
  font-size: 24px;
  text-decoration: none;
  position: absolute;
  bottom: 20px;
`

const fixName = name =>
  name
    .split('-')
    .join(' ')
    .toLowerCase()

const fixCity = name =>
  removeAccents(name)
    .toLowerCase()

class City extends Component {
  state = {
    cities: [],
  }

  componentDidMount() {
    const { city } = this.props

    const cities = data.filter(c =>
     fixCity(c.name).includes(fixName(city))
    )

    this.setState({ cities })
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ city, size }, { cities, loading }) {
    const uber = cities.filter(c => c.company === 'uber')
    const other = cities.filter(c => c.company !== 'uber')
    return (
      <Wrapper>
        <Flex>
          {uber.length ? (
            [
              <Wrapper>
                <Confetti {...size} />
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
      </Wrapper>
    )
  }
}

console.log(window)
export default sizeMe({
  monitorHeight: true,
  monitorWidth: true,
})(City)
