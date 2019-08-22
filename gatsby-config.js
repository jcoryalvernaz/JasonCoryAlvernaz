module.exports = {
  siteMetadata: {
    title: `Jason Cory Alvernaz | Reno Website Development and Design`,
    description: `Beautifully crafted and customized websites for your business! Located in Reno, NV. Specialized in Web Development, Design, SEO, and Digital Marketing.`,
    author: `@JasonAlvernaz`,
    siteUrl: `https://practical-mahavira-fdb325.netlify.com`,
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
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#4c2a85`,
        display: `minimal-ui`,
        icon: `src/images/JasonCoryCircle.png`, // This path is relative to the root of the site.
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
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
