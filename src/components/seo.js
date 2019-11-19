/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  image: metaImage,
  imageAlt,
  title,
  isBlogPost,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords.join(`, `),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: isBlogPost ? `article` : `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                { property: `og:image`, content: image },
                {
                  property: `og:image:alt`,
                  content: imageAlt,
                },
                {
                  property: `og:image:width`,
                  content: metaImage.width,
                },
                {
                  property: `og:image:height`,
                  content: metaImage.height,
                },
                {
                  name: `twitter:image`,
                  content: image,
                },
                {
                  name: `twitter:image:alt`,
                  content: imageAlt,
                },
                {
                  name: `twitter:card`,
                  content: `summary_large_image`,
                },
              ]
            : [
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
              ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: {},
  imageAlt: ``,
  isBlogPost: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  imageAlt: PropTypes.string,
  image: PropTypes.object,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  isBlogPost: PropTypes.bool,
}

export default SEO
