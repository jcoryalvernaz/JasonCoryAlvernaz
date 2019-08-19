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
    color: ${props =>
      props.theme.isDark ? props.theme.blue : props.theme.purple};
    font-size: 2.5rem;
  }
  h4 {
    margin-bottom: 1rem;
  }
  svg {
    fill: ${props =>
      props.theme.isDark ? props.theme.blue : props.theme.purple};
    height: 2rem;
    width: 2rem;
  }
  .prev {
    grid-column: 1 / span 1;
    justify-self: start;
  }
  .prev-arrow {
    transform: rotate(180deg);
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
  console.log(post.frontmatter.featuredImage)
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.featuredImage.childImageSharp.fluid}
      />
      <PostStyles dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostNavigation>
        {prev && (
          <Link className="prev" to={prev.frontmatter.path}>
            <h4>Previous</h4>
            <span>
              {" "}
              <svg
                className="prev-arrow"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
              >
                <g>
                  <g>
                    <path d="M95.9,46.2L65.4,15.7c-2.1-2.1-5.5-2.1-7.5,0c-2.1,2.1-2.1,5.5,0,7.5l21.5,21.5H7.8c-2.9,0-5.3,2.4-5.3,5.3    c0,2.9,2.4,5.3,5.3,5.3h71.5L57.9,76.8c-2.1,2.1-2.1,5.5,0,7.5c1,1,2.4,1.6,3.8,1.6s2.7-0.5,3.8-1.6l30.6-30.6    c1-1,1.6-2.4,1.6-3.8C97.5,48.6,96.9,47.2,95.9,46.2z"></path>
                  </g>
                </g>
              </svg>{" "}
              {prev.frontmatter.title}
            </span>
          </Link>
        )}
        {next && (
          <Link className="next" to={next.frontmatter.path}>
            <h4>Next</h4>
            <span>
              {next.frontmatter.title}{" "}
              <svg
                className="next-arrow"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
              >
                <g>
                  <g>
                    <path d="M95.9,46.2L65.4,15.7c-2.1-2.1-5.5-2.1-7.5,0c-2.1,2.1-2.1,5.5,0,7.5l21.5,21.5H7.8c-2.9,0-5.3,2.4-5.3,5.3    c0,2.9,2.4,5.3,5.3,5.3h71.5L57.9,76.8c-2.1,2.1-2.1,5.5,0,7.5c1,1,2.4,1.6,3.8,1.6s2.7-0.5,3.8-1.6l30.6-30.6    c1-1,1.6-2.4,1.6-3.8C97.5,48.6,96.9,47.2,95.9,46.2z"></path>
                  </g>
                </g>
              </svg>
            </span>
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
      }
    }
  }
`
