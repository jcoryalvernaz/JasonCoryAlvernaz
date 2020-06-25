import Layout from 'components/Layout'
import PageHeader from 'components/Layout/PageHeader'
import Post from 'components/Post'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from 'components/Seo'
import { graphql } from 'gatsby'
import {
  CommentType,
  ObjectType,
} from 'types'

const propTypes = {
  data: PropTypes.shape({
    commentsApi: PropTypes.shape({
      comments: PropTypes.arrayOf(CommentType),
    }),
    post: PropTypes.object,
  }).isRequired,
  pageContext: PropTypes.shape({
    next: ObjectType,
    prev: ObjectType,
  }).isRequired,
}

const PostPage = ({
  data: {
    commentsApi: {
      comments,
    },
    post: {
      fields: {
        slug,
      },
      frontmatter: {
        date,
        description,
        featuredAlt,
        featuredImage,
        title,
      },
      html,
    },
  },
  pageContext: {
    next,
    prev,
  },
}) => {
  const moderatedComments = comments.filter(
    comment => comment.slug === slug && comment.moderated
  )

  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO
        description={description}
        image={featuredImage.childImageSharp.fluid}
        imageAlt={featuredAlt}
        isBlogPost
        title={title}
      />
      <PageHeader>
        {title}
      </PageHeader>
      <Post
        date={date}
        html={html}
        moderatedComments={moderatedComments}
        next={next}
        prev={prev}
        slug={slug}
        title={title}
      />
    </Layout>
  )
}

PostPage.propTypes = propTypes

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        published
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredAlt
      }
    }
    commentsApi {
      comments {
        id
        name
        date
        text
        parent_comment_id
        slug
        moderated
      }
    }
  }
`

export default PostPage
