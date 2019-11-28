import React from "react"
import PropTypes from "prop-types"

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

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Projects
