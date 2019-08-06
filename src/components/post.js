import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostStyles from "../styles/PostStyles"

const PostNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem;
  span {
    font-size: 2.5rem;
  }
  .prev {
    grid-column: 1 / span 1;
    justify-self: start;
  }
  .next {
    text-align: right;
    grid-column: span 1 / -1;
    justify-self: flex-end;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`

export default function Post({ data, pageContext }) {
  const { markdownRemark: post } = data
  const { next, prev } = pageContext
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <PostStyles dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostNavigation>
        {prev && (
          <Link className="prev" to={prev.frontmatter.path}>
            <h4>Previous</h4>
            <span>⬅ {prev.frontmatter.title}</span>
          </Link>
        )}
        {next && (
          <Link className="next" to={next.frontmatter.path}>
            <h4>Next</h4>
            <span>{next.frontmatter.title} ➡</span>
          </Link>
        )}
      </PostNavigation>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        published
        date
      }
    }
  }
`
