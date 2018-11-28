import { h, Component } from 'preact'
import { route } from 'preact-router'
import Logo from '../../assets/logo.svg'
import AlgoliaLogo from '../../assets/algolia.svg'
import { Wrapper, LogoImg, Title, Algolia, AlgoliaLink, Input, Form } from './elements'
import { fixNameB as fixName } from '../../utils/fixName'

export default class Home extends Component {
  state = {
    value: '',
  }

  handleChange = e => {
    this.setState({ 
      value: e.target.value
        .toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ') 
      })
    }

  handleSubmit = e => {
    const { value } = this.state
    e.preventDefault()
    this.setState({ value: '' }, () => route(`search/${fixName(value)}`, true))
  }

  render({}, { value }) {
    return (
      <Wrapper>
        <LogoImg src={Logo} alt="Is There Uber In" height="150" />
        <Title>
          <label for="search">Is there Uber in</label>
          <Form onSubmit={this.handleSubmit}>
            <Input
	type="text"
	id="search"
	name="search"
	value={value}
	onChange={this.handleChange}
            />
          </Form>
          ?
        </Title>
        <AlgoliaLink
	href="https://www.algolia.com"
	target="_blank"
	rel="noopener noreferrer"
        >
          <Algolia src={AlgoliaLogo} aria-label="Search by Algolia" />
        </AlgoliaLink>
      </Wrapper>
    )
  }
}
