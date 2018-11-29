import React from 'react'
import { Title, Wrapper, Flex, GoBack } from '../templates/_city.elements'
import Layout from '../components/layout'

export default ({ pageContext: { city } }) => {
  return (
    <Layout>
      <Wrapper>
        <Flex>
          <Title>
            NO{' '}
            <span role="img" aria-label="sad face">
              😕
            </span>
          </Title>
          <GoBack to="/">
            Search Again{' '}
            <span role="img" aria-label="search">
              🔎
            </span>
          </GoBack>
        </Flex>
      </Wrapper>
    </Layout>
  )
}
