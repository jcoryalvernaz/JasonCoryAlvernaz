import React from "react"

import Project from "./project"
import LargeList from "../styles/LargeList"

const Projects = ({ projects }) => {
  return (
    <LargeList>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </LargeList>
  )
}

export default Projects
