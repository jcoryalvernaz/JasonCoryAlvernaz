import CommentSubmit from 'components/comment-submit'
import Comments from 'components/comments'
import Layout from 'components/layout'
import PageHeader from 'components/page-header'
import Post from 'styles/Post'
import PostNavigation from 'components/post-navigation'
import PostShare from 'components/post-share'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from 'components/seo'
import { format } from 'date-fns'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import {
  CommentType,
  ObjectType,
} from 'types'

const PostDate = styled.div`
  font-size: 2rem;
  font-weight: bold;
  justify-self: center;
  text-decoration: underline ${props => props.theme.green};
`

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
      <PostDate>
        {format(new Date(date), 'dddd, MMM Do yyyy')}
      </PostDate>
      <Post dangerouslySetInnerHTML={{ __html: html }} />
      <PostShare
        slug={slug}
        title={title}
      />
      <CommentSubmit
        count={moderatedComments.length}
        slug={slug}
      />
      <Comments
        comments={moderatedComments}
        postTitle={ title}
      />
      <PostNavigation
        next={next}
        prev={prev}
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
