import React from "react"
import { graphql, Link } from "gatsby"
import slugify from "slugify"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import HeadingStyles from "../styles/HeadingStyles"
import ParagraphStyles from "../styles/ParagraphStyles"
import ListStyles from "../styles/ListStyles"

const ProjectsPage = ({ data }) => {
  const projects = [...data.allProjectItemsJson.edges]
  return (
    <Layout>
      <SEO title="Projects" />
      <HeadingStyles>Projects</HeadingStyles>
      <ParagraphStyles>
        I have worked on varying projects over my career. Some for professional
        purposes and others for personal growth. Here is a short list of some of
        the projects that I have developed.
      </ParagraphStyles>
      <ListStyles>
        {projects.map(project => {
          return (
            <li key={project.node.id}>
              <a href={project.node.link} className="featured-image">
                <Img
                  fluid={project.node.image.childImageSharp.fluid}
                  alt={project.node.imageAlt}
                />
              </a>
              <a className="title" href={project.node.link}>
                {project.node.name}
              </a>
              <p>{project.node.description}</p>
              <p>
                <strong>Built wilth: </strong>
                {project.node.technologies.map((tag, i) => (
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
      edges {
        node {
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
  }
`

export default ProjectsPage
