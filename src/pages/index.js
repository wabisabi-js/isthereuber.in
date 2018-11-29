import React, { Component } from 'react'
import { navigate } from 'gatsby'
import Logo from '../components/Planet'
import AlgoliaLogo from '../images/algolia.svg'
import Layout from '../components/layout'
import {
  Wrapper,
  Title,
  Algolia,
  AlgoliaLink,
  Input,
  Form,
} from './_index.elements'
import { fixNameB as fixName } from '../utils/fixName'

export default class Home extends Component {
  state = {
    value: '',
    isSearching: false,
  }

  handleChange = e => {
    if (e.target.value) {
      this.setState({ isSearching: true, value: e.target.value })
    } else {
      this.setState({ isSearching: false, value: e.target.value })
    }
  }

  handleSubmit = e => {
    const { value } = this.state
    e.preventDefault()
    this.setState({ value: '' }, () =>
      navigate(`search/${fixName(value)}`, { state: { city: value } })
    )
  }

  render() {
    const { value, isSearching } = this.state
    return (
      <Layout>
        <Wrapper>
          <Logo isSearching={isSearching} />
          <Title>
            <label htmlFor="search">Is there Uber in</label>
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
      </Layout>
    )
  }
}
