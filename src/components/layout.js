import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import { Grid } from 'react-emotion-flexboxgrid'
import '../utils/global'

const theme = {
  primary: '#4a0072',
  secondary: '#e8eaf6',
  white: '#fafafa',
  black: '#3a3a3a'
}

const Wrapper = styled.main`
  height: 100%;
  overflow: auto;
`

const System = styled(Grid)`
  height: 100%;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'keywords', content: 'uber, ride sharing' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' }
          ]}
        >
          <html lang="en" />
          <meta charset="utf-8" />
          <meta
            name="description"
            content="Look for ride sharing services in a city"
          />
          <meta
            name="image"
            content="https://rawcdn.githack.com/SaraVieira/uber-cities/3a8b69c4c8f8792e53584c73e005d4bec16c814b/src/assets/favicon.png"
          />
          <meta itemProp="name" content="Is there uber in ?" />
          <meta
            itemProp="description"
            content="Look for ride sharing services in a city"
          />
          <meta
            itemProp="image"
            content="https://rawcdn.githack.com/SaraVieira/uber-cities/3a8b69c4c8f8792e53584c73e005d4bec16c814b/src/assets/favicon.png"
          />
          <meta name="og:title" content="Is there uber in ?" />
          <meta
            name="og:description"
            content="Look for ride sharing services in a city"
          />
          <meta
            name="og:image"
            content="https://rawcdn.githack.com/SaraVieira/uber-cities/3a8b69c4c8f8792e53584c73e005d4bec16c814b/src/assets/favicon.png"
          />
          <meta name="og:url" content="http://isthereuber.in" />
          <meta name="og:site_name" content="Is there uber in ?" />
          <meta name="og:type" content="website" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <System>{children}</System>
          </Wrapper>
        </ThemeProvider>
      </Fragment>
    )}
  />
)

export default Layout
