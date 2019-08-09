import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingStyles from "../styles/HeadingStyles"
import ParagraphStyles from "../styles/ParagraphStyles"

const BlogList = styled.ul`
  max-width: 80rem;
  width: 100%;
  justify-self: center;
  margin-top: 3rem;
  padding: 1rem;
  list-style: none;
  li {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    border-top: 0.3rem solid ${props => props.theme.blue};
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .title {
    color: ${props => props.theme.purple};
    font-size: 2.5rem;
  }
  @media (max-width: 500px) {
    li {
      grid-template-columns: 1fr;
      grid-template-rows: 3fr 1fr;
    }
  }
`

const BlogPage = ({ data }) => {
  const posts = [...data.allMarkdownRemark.edges]
  return (
    <Layout>
      <SEO title="Blog" />
      <HeadingStyles>Blog</HeadingStyles>
      <ParagraphStyles>
        Here you can find a wealth of information relating to web development
        topics. I love to teach, so if there is something you would like to see
        reach out to me from the <Link to="/contact">contact page.</Link> For
        even more learing opportunities, check out my{" "}
        <a href="https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w">
          YouTube channel
        </a>{" "}
        to see all the video tutorials I have available!
      </ParagraphStyles>
      <BlogList>
        {posts.map(post => {
          return (
            <li key={post.node.id}>
              <Link className="featured-image" to={post.node.frontmatter.path}>
                <Img
                  fluid={
                    post.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                />
              </Link>
              <Link className="title" to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </li>
          )
        })}
      </BlogList>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
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
    }
  }
`

export default BlogPage
