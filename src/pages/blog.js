import React from "react"
import { graphql, Link } from "gatsby"
import slugify from "slugify"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingStyles from "../styles/HeadingStyles"
import ParagraphStyles from "../styles/ParagraphStyles"
import ListStyles from "../styles/ListStyles"

const BlogPage = ({ data }) => {
  const posts = [...data.allMarkdownRemark.edges]
  return (
    <Layout>
      <SEO title="Blog" />
      <HeadingStyles>Blog & Tutorials</HeadingStyles>
      <ParagraphStyles>
        Here you can find a wealth of information relating to web development
        topics. I love to teach, so if there is something you would like to see
        reach out to me from the <Link to="/contact">contact page.</Link> For
        even more learning opportunities, check out my{" "}
        <a href="https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w">
          YouTube channel
        </a>{" "}
        to see all the video tutorials I have available!
      </ParagraphStyles>
      <ListStyles>
        {posts.map(post => {
          return (
            <li key={post.node.id}>
              <Link className="featured-image" to={post.node.frontmatter.path}>
                <Img
                  fluid={
                    post.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                  alt={post.node.frontmatter.featuredAlt}
                />
              </Link>
              <Link className="title" to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
              <p>{post.node.frontmatter.description}</p>
              <p>
                <strong>Categories: </strong>
                {post.node.frontmatter.tags.map((tag, i) => (
                  <Link
                    key={i}
                    className="tag"
                    to={`/tags/${slugify(tag, { lower: true })}`}
                  >
                    {tag}
                  </Link>
                ))}
              </p>
            </li>
          )
        })}
      </ListStyles>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            description
            tags
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
      }
    }
  }
`

export default BlogPage
