import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import PageHeader from "../components/page-header"
import Projects from "../components/projects"
import ParagraphStyles from "../styles/ParagraphStyles"

const ProjectsPage = ({ data }) => {
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
      <Social></Social>
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
