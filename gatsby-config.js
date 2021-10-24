/* eslint-disable no-undef */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
          quality: process.env.GATSBY_STATIC_IMAGE_QUALITY || 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: 'transparent',
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-build-newrelic',
      options: {
        NR_LICENSE_KEY: process.env.GATSBY_NR_LICENSE_KEY || '',
        NR_ACCOUNT_ID: process.env.GATSBY_NR_ACCOUNT_ID || '',
        SITE_NAME: 'djowo-klaten',
        customTags: {
          gatsbySite: 'djowo-klaten',
        },
      },
    },
  ],
  siteMetadata: {
    title: 'Rumah Makan Penyetan dan Mie Jawa - Djowo Klaten',
    siteUrl: 'https://djowoklaten.id',
  },
};
