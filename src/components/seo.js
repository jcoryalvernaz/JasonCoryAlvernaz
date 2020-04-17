import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import {
  BooleanType,
  ObjectType,
  StringType,
} from 'types'
import {
  graphql,
  useStaticQuery,
} from 'gatsby'

const defaultProps = {
  description: '',
  image: {},
  imageAlt: '',
  isBlogPost: false,
  lang: 'en',
  meta: [],
}

const propTypes = {
  description: StringType,
  image: ObjectType,
  imageAlt: StringType,
  isBlogPost: BooleanType,
  lang: StringType,
  meta: PropTypes.arrayOf(ObjectType),
  title: StringType.isRequired,
}

const SEO = ({
  description,
  imageAlt,
  isBlogPost,
  lang,
  meta,
  image: metaImage,
  title,
}) => {
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
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(', '),
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: isBlogPost ? 'article' : 'website',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
              { property: 'og:image', content: image },
              {
                property: 'og:image:alt',
                content: imageAlt,
              },
              {
                property: 'og:image:width',
                content: metaImage.width,
              },
              {
                property: 'og:image:height',
                content: metaImage.height,
              },
              {
                name: 'twitter:image',
                content: image,
              },
              {
                name: 'twitter:image:alt',
                content: imageAlt,
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
            ]
            : [
              {
                name: 'twitter:card',
                content: 'summary',
              },
            ]
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  )
}

SEO.propTypes = propTypes
SEO.defaultProps = defaultProps

export default SEO
