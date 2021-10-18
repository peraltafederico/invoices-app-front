require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Invoices App`,
    description: `An amazing app to manage your invoices. Create, edit or delete them without any restriction.`,
    author: `@_pfederico`,
    siteUrl: process.env.GATSBY_BASE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/logo-desktop.inline.svg`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: 'gatsby-plugin-eslint',
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Spartan\:500,700`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'InvoicesAPI',
        fieldName: 'invoicesAPI',
        url: `${process.env.GATSBY_API_BASE_URL}/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'invoicesapp.peraltafedericomanuel.com',
      },
    },
    {
      resolve: `gatsby-plugin-force-trailing-slashes`,
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/invoices/`, `/invoices/*`, `/invoices/create/`, `/invoices/*/edit/`],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
