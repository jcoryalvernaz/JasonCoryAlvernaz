import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import slugify from "slugify"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeadingStyles from "../styles/HeadingStyles"
import ListStyles from "../styles/ListStyles"
import ParagraphStyles from "../styles/ParagraphStyles"

export default function TagPage({ pageContext, data }) {
  const { tag } = pageContext
  const posts = [...data.allMarkdownRemark.edges]
  return (
    <Layout>
      <SEO title={`${tag} Blog Posts`} />
      <HeadingStyles>{tag} Blog Posts</HeadingStyles>
      <ParagraphStyles>
        Here you will find all the posts that I have written on the topic of{" "}
        {tag}. If you would like to see a post on a topic that you don't see,
        <Link to="/contact"> reach out</Link> and I will see what I can do. You
        can also find videos on other web development topics on my{" "}
        <a href="https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w">
          YouTube channel
        </a>
        .
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
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            featuredAlt
            path
            published
            tags
            title
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
