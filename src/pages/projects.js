import React from "react"
import { graphql, Link } from "gatsby"
import slugify from "slugify"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import PageHeader from "../components/page-header"
import ParagraphStyles from "../styles/ParagraphStyles"
import ListStyles from "../styles/ListStyles"

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
      <ListStyles>
        {projects.map(project => {
          return (
            <li key={project.id}>
              <a href={project.link} className="featured-image">
                <Img
                  fluid={project.image.childImageSharp.fluid}
                  alt={project.imageAlt}
                />
              </a>
              <a className="title" href={project.link}>
                {project.name}
              </a>
              <p>{project.description}</p>
              <p>
                <strong>Built wilth: </strong>
                {project.technologies.map((tag, i) => (
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
