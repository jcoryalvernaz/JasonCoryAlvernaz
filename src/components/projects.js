import React from "react"

import Project from "./project"
import ListStyles from "../styles/ListStyles"

const Projects = ({ projects }) => {
  return (
    <ListStyles>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ListStyles>
  )
}

export default Projects
