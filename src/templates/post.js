/* eslint-disable */
import CommentSubmit from 'components/comment-submit'
import Comments from 'components/comments'
import Layout from 'components/layout'
import PageHeader from 'components/page-header'
import Post from 'styles/Post'
import PostNavigation from 'components/post-navigation'
import PostShare from 'components/post-share'
import SEO from 'components/seo'
import { graphql } from 'gatsby'
import moment from 'moment'
import styled from 'styled-components'
import React, {
  useState,
} from 'react'

const PostDate = styled.div`
  font-size: 2rem;
  font-weight: bold;
  justify-self: center;
  text-decoration: underline ${props => props.theme.green};
`

export default function PostPage({ data, pageContext }) {
  const { markdownRemark: post } = data
  const { next, prev } = pageContext
  const [state] = useState({
    comments: [...data.commentsApi.comments].filter(
      comment => comment.slug === post.fields.slug && comment.moderated
    ),
  })

  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO
        description={post.frontmatter.description}
        image={post.frontmatter.featuredImage.childImageSharp.fluid}
        imageAlt={post.frontmatter.featuredAlt}
        isBlogPost
        title={post.frontmatter.title}
      />
      <PageHeader>{post.frontmatter.title}</PageHeader>
      <PostDate>
        {moment(post.frontmatter.date).format('dddd, MMM Do YYYY')}
      </PostDate>
      <Post dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostShare slug={post.fields.slug} title={post.frontmatter.title} />
      <CommentSubmit count={state.comments.length} slug={post.fields.slug} />
      <Comments comments={state.comments} postTitle={post.frontmatter.title} />
      <PostNavigation next={next} prev={prev} />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
