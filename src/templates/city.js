import React from 'react'
import Confetti from 'react-confetti'
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
import edgeCases from '../utils/edgeCases'
import ReactCountryFlag from 'react-country-flag'
import { getAppStoreLink } from '../utils/appStores'
import Layout from '../components/layout'

export default ({ pageContext: { city } }) => {
  return (
    <Layout>
      <Wrapper>
        <Flex>
          {city.company.includes('uber') ? (
            [
              <Wrapper>
                <Confetti
                  width={
                    typeof window !== 'undefined' ? window.innerWidth : '100%'
                  }
                  height={
                    typeof window !== 'undefined' ? window.innerHeight : '100%'
                  }
                />
              </Wrapper>,
              <a
                style={{ textDecoration: 'none' }}
                href={`https://www.uber.com${city.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Title>
                  YES{' '}
                  <span role="img" aria-label="car">
                    🚗
                  </span>{' '}
                  <ReactCountryFlag code={city.info.country.short_name} />
                </Title>
              </a>,
              <Message>{edgeCases(city)}</Message>,
            ]
          ) : (
            <Title>
              NO{' '}
              <span role="img" aria-label="sad face">
                😕
              </span>
            </Title>
          )}
          {city.company.filter(item => item !== 'uber').length ? (
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
                    <Company key={c} href={getAppStoreLink(c)} target="_blank">
                      {c}
                    </Company>
                  ))}
              </Alternative>
            </div>
          ) : null}
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
