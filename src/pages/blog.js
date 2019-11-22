import React from "react"
import { graphql, Link } from "gatsby"
import slugify from "slugify"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import ParagraphStyles from "../styles/ParagraphStyles"
import ListStyles from "../styles/ListStyles"

const BlogPage = ({ data }) => {
  const posts = [...data.allMarkdownRemark.nodes]
  return (
    <Layout>
      <SEO title="Blog" />
      <PageHeader>Blog & Tutorials</PageHeader>
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
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
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
`

export default BlogPage
