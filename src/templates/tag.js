import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import slugify from "slugify"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import ListStyles from "../styles/ListStyles"
import ParagraphStyles from "../styles/ParagraphStyles"

export default function TagPage({ pageContext, data }) {
  const { tag } = pageContext
  const posts = [...data.allMarkdownRemark.nodes]
  return (
    <Layout>
      <SEO title={`${tag} Blog Posts`} />
      <PageHeader>{tag} Blog Posts</PageHeader>
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
            <li key={post.id}>
              <Link className="featured-image" to={post.fields.slug}>
                <Img
                  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                  alt={post.frontmatter.featuredAlt}
                />
              </Link>
              <Link className="title" to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <p>{post.frontmatter.description}</p>
              <p>
                <strong>Categories: </strong>
                {post.frontmatter.tags.map((tag, i) => (
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
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          date
          description
          featuredAlt
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
`