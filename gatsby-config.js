module.exports = {
  siteMetadata: {
    title: 'Is there Uber In ?',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Is there Uber In ?',
    //     short_name: 'Uber Cities',
    //     start_url: '/',
    //     display: 'standalone',
    //     orientation: 'portrait',
    //     background_color: '#430F6E',
    //     theme_color: '#430F6E',
    //     icons: [
    //       {
    //         src: '/icons/android-chrome-192x192.png',
    //         type: 'image/png',
    //         sizes: '192x192',
    //       },
    //       {
    //         src: '/icons/android-chrome-512x512.png',
    //         type: 'image/png',
    //         sizes: '512x512',
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-emotion`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/search/*`] },
    },
  ],
}
