import React, { useState } from 'react'
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
  Form
} from './_index.elements'
import { fixNameB as fixName } from '../utils/fixName'

const Home = () => {
  const [value, setValue] = useState('')
  const [isSearching, setSearching] = useState(false)

  const handleChange = e => {
    setValue(e.target.value)
    if (e.target.value) {
      setSearching(true)
    } else {
      setSearching(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`search/${fixName(value)}`, { state: { city: value } })
  }

  return (
    <Layout>
      <Wrapper>
        <Logo isSearching={isSearching} />
        <Title>
          <label htmlFor="search">Is there Uber in</label>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              id="search"
              name="search"
              value={value}
              onChange={handleChange}
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

export default Home
