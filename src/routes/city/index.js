import { h, Component } from 'preact'
import data from '../../data/index.js'
import sizeMe from 'react-sizeme'
import styled from 'styled-components'
import Confetti from 'react-confetti'
import capitalize from 'capitalize'
import is from 'styled-is'

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

  a:not(:last-child) {
    padding-right: 20px;
  }

  ${is('row')`
		flex-direction: row;
	`};
`

const Link = styled.a`
  color: white;
  z-index: 99;
  position: relative;
  font-size: 24px;
  text-decoration: none;
`

const fixName = name =>
  name
    .split('-')
    .join(' ')
    .toLowerCase()

const getLink = (link, company) => {
  if (company === 'taxify') {
    return `https://taxify.eu${link}`
  }

  if (company === 'cabify') {
    return `https://cabify.com${link}`
  }

  if (company === 'lyft') {
    return `https://www.lyft.com${link}`
  }
}

class City extends Component {
  state = {
    cities: [],
  }

  componentDidMount() {
    const { city } = this.props

    const cities = data.filter(c =>
      c.name.toLowerCase().includes(fixName(city))
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
                {other.map(c => (
                  <Link href={getLink(c.link, c.company)}>
                    {capitalize(c.company)}
                  </Link>
                ))}
              </Flex>
            </div>
          ) : null}
        </Flex>
      </Wrapper>
    )
  }
}

export default sizeMe({
  monitorHeight: true,
  monitorWidth: true,
})(City)
