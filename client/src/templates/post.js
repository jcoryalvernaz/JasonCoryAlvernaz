import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from "../components/share"
import Comments from "../components/comments"
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
  .arrow {
    fill: ${props =>
      props.theme.isDark ? props.theme.blue : props.theme.purple};
    height: 2.5rem;
    width: 2.5rem;
    transition: transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .prev {
    grid-column: 1 / span 1;
    justify-self: start;
    &:hover,
    &:focus {
      .arrow {
        transform: translateX(-1rem);
      }
    }
  }
  .next {
    text-align: right;
    grid-column: span 1 / -1;
    justify-self: flex-end;
    &:hover,
    &:focus {
      .arrow {
        transform: translateX(1rem);
      }
    }
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`

export default function Post({ data, pageContext }) {
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
      <PostStyles dangerouslySetInnerHTML={{ __html: post.html }} />
      <Share title={post.frontmatter.title} path={post.frontmatter.path} />
      <Comments
        comments={state.comments}
        slug={post.fields.slug}
        postTitle={post.frontmatter.title}
      />
      <PostNavigation>
        {prev && (
          <Link className="prev" to={prev.frontmatter.path}>
            <h4>Previous</h4>
            <span>
              {" "}
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 70.85"
              >
                <g>
                  <g>
                    <path d="m3.5 52.5 31.9 31.9c1.4 1.4 3.6 1.4 4.9 0 1.4-1.4 1.4-3.6 0-4.9l-26-26h79.7c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5h-79.6l26-26c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.8 0.3-2.5 1l-31.9 31.9c-0.7 0.7-1 1.5-1 2.5s0.4 1.8 1 2.5z"></path>
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
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 70.85"
              >
                <g>
                  <g>
                    <path d="m96.5 47.5-31.9-31.9c-1.4-1.4-3.6-1.4-4.9 0-1.4 1.4-1.4 3.6 0 4.9l26 26h-79.7c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h79.7l-26 26c-1.4 1.4-1.4 3.6 0 4.9 0.7 0.7 1.6 1 2.5 1s1.8-0.3 2.5-1l31.9-31.9c0.7-0.7 1-1.5 1-2.5s-0.5-1.8-1.1-2.5z"></path>
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

//TODO handle case with no comments for given slug
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      fields {
        slug
      }
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
