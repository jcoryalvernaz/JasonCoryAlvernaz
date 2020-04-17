import Layout from 'components/layout'
import PageHeader from 'components/page-header'
import ParagraphStyles from 'styles/ParagraphStyles'
import Projects from 'components/projects'
import React from 'react'
import SEO from 'components/seo'
import Social from 'components/social'
import { graphql } from 'gatsby'

function ProjectsPage({ data }) {
  const projects = [...data.allProjectItemsJson.nodes]
  return (
    <Layout>
      <SEO title="Projects" />
      <PageHeader>Projects</PageHeader>
      <ParagraphStyles>
        I have worked on varying projects over my career. Some for professional
        purposes and others for personal growth. Here is a short list of some of
        the projects that I have developed.
      </ParagraphStyles>
      <Projects projects={projects} />
      <Social />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectItemsQuery {
    allProjectItemsJson {
      nodes {
        id
        name
        description
        link
        technologies
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAlt
      }
    }
  }
`

export default ProjectsPage
