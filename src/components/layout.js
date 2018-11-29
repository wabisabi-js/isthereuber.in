import React from 'react'
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
      <>'        \' \'
       '<Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: '"Look for ride sharing services in a city'
            },
            { name: 'keywords', content: 'uber, ride sharing' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' }
          ]}
        >
          <html lang="en" />
        </Helmet>'        \' \'
       '<ThemeProvider theme={theme}>
          <Wrapper>
            <System>{children}</System>
          </Wrapper>
        </ThemeProvider>'        \' \'
     '</>
    )}
  />
)

export default Layout
