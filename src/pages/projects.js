import Layout from 'components/Layout'
import { ObjectType } from 'types'
import PageHeader from 'components/page-header'
import ParagraphStyles from 'styles/ParagraphStyles'
import Projects from 'components/projects'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from 'components/seo'
import Social from 'components/social'
import { graphql } from 'gatsby'

const propTypes = {
  data: PropTypes.shape({
    allProjects: PropTypes.shape({
      projects: PropTypes.arrayOf(ObjectType),
    }),
  }).isRequired,
}

const ProjectsPage = ({
  data: {
    allProjects: {
      projects,
    },
  },
}) => {
  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
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
    allProjects: allProjectItemsJson {
      projects: nodes {
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

ProjectsPage.propTypes = propTypes

export default ProjectsPage
