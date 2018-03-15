import { h, Component } from 'preact'
import { route } from 'preact-router'
import styled, {  keyframes} from 'styled-components'
import { Row } from 'react-styled-flexboxgrid'
import removeAccents from 'remove-accents'
import Logo from '../../assets/logo.svg'
import AlgoliaLogo from '../../assets/algolia.svg'



const Wrapper = styled(Row)`
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  @media (max-width: 767px) and (max-height: 400px) {
    flex-direction: row;
  }

  @media (max-width: 360px) {
    top: 50%;
    position: relative;
    transform: translateY(-50%);
  }
`
const rotate = keyframes`
  from { transform: rotate(360deg);}
  to {transform: rotate(0deg)}
`

const LogoImg = styled.img`
  animation-name: ${rotate};
  animation-duration:3s; 
  animation-iteration-count:infinite;
  @media (max-width: 360px) {
    max-width: 100px;
  }
`



const Title = styled.h1`
  color: ${props => props.theme.secondary};
  font-size: 80px;
  margin: 0;
  margin-top: 40px;
  text-align: center;

  @media (max-width: 1030px) {
    font-size: 55px;
  }

  @media (max-width: 435px) {
    font-size: 30px;
  }

  @media (max-width: 767px) {
    font-size: 30px;
  }

  @media (max-width: 360px) {
    font-size: 30px;
    margin-top: 10px;
  }
`
const Algolia = styled.img`
  left: 50%;
  max-width: 150px;
  width: 40%;
  position: absolute;
  bottom: 30px;
  transform: translateX(-50%);
  cursor: pointer;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${props => props.theme.secondary};
  background: transparent;
  font-size: 80px;
  height: 80px;
  width: 300px;
  color: ${props => props.theme.secondary};
  outline: none;
  padding: 0 10px;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: bold;

  &:hover,
  &:active {
    outline: none;
  }

  @media (max-width: 1030px) {
    font-size: 55px;
    height: 55px;
  }

  @media (max-width: 435px) {
    font-size: 40px;
    height: 40px;
    margin-top: 20px;
  }

  @media (max-width: 360px) {
    font-size: 30px;
    height: 35px;
    margin-top: 10px;
  }
`

const Form = styled.form`
  display: inline;
`
const fixName = name =>
  removeAccents(name)
    .split(' ')
    .join('-')
    .toLowerCase()

export default class Home extends Component {
  state = {
    value: '',
  }

  handleChange = e => this.setState({ value: e.target.value })

  handleSubmit = e => {
    const { value } = this.state
    e.preventDefault()
    this.setState({ value: '' }, () => route(`search/${fixName(value)}`, true))
  }

  render({}, { value }) {
    return (<Wrapper>
        <audio autoPlay>
          <source src="./assets/pop.wav" type="audio/wav" />
        </audio>
        <LogoImg src={Logo} alt="Is There Uber In" height="150" />
        <Title>
          Is there Uber in
          <Form onSubmit={this.handleSubmit}>
            <Input type="text" value={value} onChange={this.handleChange} />
          </Form>
          ?
        </Title>
        <a href="https://www.algolia.com" target="_blank" rel="noopener noreferrer">
          <Algolia src={AlgoliaLogo} />
        </a>
      </Wrapper>)
  }
}
