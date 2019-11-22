import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

import Project from "./project"
import ListStyles from "../styles/ListStyles"

const ALL_PROJECTS_QUERY = gql`
  query allProjectsQuery {
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

const Projects = () => {
  const { data, loading, error } = useQuery(ALL_PROJECTS_QUERY)
  //const projects = [...data.allProjectItemsJson.nodes]
  return (
    <ListStyles>
      {data.allProjectItemsJson.nodes.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ListStyles>
  )
}

export default Projects
