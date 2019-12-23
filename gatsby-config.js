require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })
const fetch = require("isomorphic-fetch")
const { createHttpLink } = require("apollo-link-http")

module.exports = {
  siteMetadata: {
    title: `Jason Cory Alvernaz | Reno Website Development and Design`,
    description: `Beautifully crafted and customized websites for your business! Located in Reno, NV. Specialized in Web Development, Design, SEO, and Digital Marketing.`,
    author: `@jcoryalvernaz`,
    siteUrl: `https://jasoncoryalvernaz.com`,
    keywords: [
      `reno website design`,
      `reno website seo`,
      `reno website builders`,
      `reno website developers`,
      `websites reno nevada`,
      `web developer reno`,
      `web developer portfolio`,
      `web developer resume`,
      `learn javascript`,
      `learn react js`,
      `learn react online`,
      `learn react hooks`,
      `web design company`,
      `web design classes`,
      `web design services`,
      `web design agency`,
      `web designers near me`,
      `website designer`,
      `website developer`,
      `business website`,
      `javacript blog tutorial`,
      `javacript tutorials`,
      `react js blog`,
      `react js tutorials`,
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {published: {eq: true}}}
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Jason Cory Alvernaz's RSS Feed",
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              maxWidth: 800,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Cory Alvernaz | Reno Website Development and Design`,
        short_name: `Jason Cory Alvernaz`,
        description: `Beautifully crafted and customized websites for your business! Located in Reno, NV. Specialized in Web Development, Design, SEO, and Digital Marketing.`,
        start_url: `/`,
        background_color: `#000013`,
        theme_color: `#4c2a85`,
        display: `minimal-ui`,
        icon: `src/assets/images/JasonCoryCircle.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        //Add any options here
      },
    },
    //SEO plugins
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-144187594-1`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `hasura`,
        fieldName: `commentsApi`,
        createLink: () => {
          return createHttpLink({
            uri: process.env.GATSBY_COMMENTS_API,
            headers: {
              Authorization: `Bearer ${process.env.GATSBY_HASURA_TOKEN}`,
            },
            fetch,
          })
        },
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
