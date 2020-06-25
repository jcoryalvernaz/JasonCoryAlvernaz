import Layout from 'components/Layout'
import PageHeader from 'components/Layout/PageHeader'
import { ParagraphStyles } from 'styles'
import PostPreviewList from 'components/Post/List'
import { PostType } from 'types'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from 'components/Seo'
import {
  Link,
  graphql,
} from 'gatsby'

const propTypes = {
  data: PropTypes.shape({
    allPosts: PropTypes.shape({
      posts: PropTypes.arrayOf(PostType),
    }),
  }).isRequired,
}

const BlogPage = ({
  data: {
    allPosts: {
      posts,
    },
  },
}) => {
  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO title="Blog" />
      <PageHeader>Blog & Tutorials</PageHeader>
      <ParagraphStyles>
        Here you can find a wealth of information relating to web development
        topics. I love to teach, so if there is something you would like to see
        reach out to me from the <Link to="/contact">contact page.</Link> For
        even more learning opportunities, check out my{' '}
        <a href="https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w">
          YouTube channel
        </a>{' '}
        to see all the video tutorials I have available!
      </ParagraphStyles>
      <PostPreviewList posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allPosts: allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      posts: nodes {
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

BlogPage.propTypes = propTypes

export default BlogPage
