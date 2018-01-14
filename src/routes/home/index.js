import { h, Component } from 'preact'
import { route } from 'preact-router'
import styled from 'styled-components'
import { Row } from 'react-styled-flexboxgrid'
import Logo from '../../assets/logo.svg'

const Wrapper = styled(Row)`
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`

const Title = styled.h1`
  color: ${props => props.theme.secondary};
  font-size: 80px;
  margin: 0;
  margin-top: 40px;

  @media (max-width: 1030px) {
    font-size: 55px;
  }

  @media (max-width: 435px) {
    font-size: 40px;
  }
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

  @media (max-width: 1030px) {
    font-size: 55px;
    height: 55px;
  }

  @media (max-width: 435px) {
    font-size: 40px;
    height: 40px;
    margin-top: 20px;
  }

  &:hover,
  &:active {
    outline: none;
  }
`

const Form = styled.form`
  display: inline;
`
const fixName = name =>
  name
    .split(' ')
    .join('-')
    .toLowerCase()

export default class Home extends Component {
  state = {
    value: '',
  }

  handleChange = e => this.setState({ value: fixName(e.target.value) })

  handleSubmit = e => {
    const { value } = this.state
    e.preventDefault()
    this.setState({ value: '' }, () => route(value, true))
  }

  render({}, { value }) {
    return (
      <Wrapper>
        <img src={Logo} alt="Is There Uber In" height="150" />
        <Title>
          Is there Uber in
          <Form onSubmit={this.handleSubmit}>
            <Input type="text" value={value} onChange={this.handleChange} />
          </Form>
          ?
        </Title>
      </Wrapper>
    )
  }
}
