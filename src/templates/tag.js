import Layout from 'components/layout'
import PageHeader from 'components/page-header'
import ParagraphStyles from 'styles/ParagraphStyles'
import PostPreviewList from 'components/post-preview-list'
import React from 'react'
import SEO from 'components/seo'
import {
  Link,
  graphql,
} from 'gatsby'

export default function TagPage({ pageContext, data }) {
  const { tag } = pageContext
  const posts = [...data.allMarkdownRemark.nodes]
  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO title={`${tag} Blog Posts`} />
      <PageHeader>{tag} Blog Posts</PageHeader>
      <ParagraphStyles>
        Here you will find all the posts that I have written on the topic of{' '}
        {tag}. If you would like to see a post on a topic that you don't see,
        <Link to="/contact"> reach out</Link> and I will see what I can do. You
        can also find videos on other web development topics on my{' '}
        <a href="https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w">
          YouTube channel
        </a>
        .
      </ParagraphStyles>
      <PostPreviewList posts={posts} />
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
