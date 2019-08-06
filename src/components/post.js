import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledArticle = styled.article`
  margin: 1rem;
  display: grid;
  grid-gap: 1rem 5rem;
  grid-template-columns: 3fr 12fr 5fr;
  > * {
    grid-column: 2 / -2;
  }
  img {
    width: 100%;
    margin: 0;
    grid-column: 1 / -1;
  }
  figcaption {
    font-size: 1rem;
  }
  blockquote {
    grid-column: 1 / -1;
  }
  blockquote > p {
    font-size: 5rem;
    font-style: italic;
    text-align: center;
    margin: 0;
  }
  a {
    color: ${props => props.theme.black};
    border-bottom: 0.5rem solid ${props => props.theme.green};
  }
  p {
    font-size: 2rem;
    line-height: 1.8;
  }
  h1 {
    font-size: 6rem;
  }
  code {
    font-size: 1.5rem;
    display: inline-block;
    background: ${props => props.theme.green + "4D"};
    color: ${props => props.theme.purple};
    border-radius: 2px;
    padding: 0 1rem;
  }
  .tip {
    background: ${props => props.theme.green + "4D"};
    padding: 1rem;
    grid-row: span 5;
    align-self: flex-start;
  }
  .tip-left {
    grid-column: 1 / span 1;
    text-align: right;
    border-right: 1rem solid ${props => props.theme.green};
  }
  .tip-right {
    grid-column: span 1 / -1;
    border-left: 1rem solid ${props => props.theme.green};
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
    > * {
      grid-column: 1 / -1;
    }
  }
`

const PostNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .prev {
    grid-column: 1 / span 1;
    justify-self: start;
  }
  .next {
    grid-column: span 1 / -1;
    justify-self: flex-end;
  }
`

export default function Post({ data, pageContext }) {
  const { markdownRemark: post } = data
  const { next, prev } = pageContext
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <StyledArticle dangerouslySetInnerHTML={{ __html: post.html }} />
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
