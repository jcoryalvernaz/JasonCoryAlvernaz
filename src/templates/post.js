import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import Post from "../styles/Post"
import PostShare from "../components/post-share"
import Comments from "../components/comments"
import PostNavigation from "../components/post-navigation"

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
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.featuredImage.childImageSharp.fluid}
        imageAlt={post.frontmatter.featuredAlt}
        isBlogPost={true}
      />
      <PageHeader>{post.frontmatter.title}</PageHeader>
      <PostDate>
        {moment(post.frontmatter.date).format("dddd, MMM Do YYYY")}
      </PostDate>
      <Post dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostShare title={post.frontmatter.title} slug={post.fields.slug} />
      <Comments
        comments={state.comments}
        slug={post.fields.slug}
        postTitle={post.frontmatter.title}
      />
      <PostNavigation prev={prev} next={next} />
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
