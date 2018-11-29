module.exports = {
  siteMetadata: {
    title: 'Is there Uber In ?',
    siteUrl: 'http://isthereuber.in'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',

        appName: 'Is there Uber In ?',
        developerName: 'Sara Vieira',
        dir: 'auto',
        lang: 'en-US',
        orientation: 'portrait',
        background_color: '#181743',
        theme_color: '#181743',
        display: 'standalone',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-workbox',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/search/*'] }
    }
  ]
}
