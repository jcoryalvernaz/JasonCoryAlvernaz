import LargeList from 'styles/LargeList'
import Project from './project'
import PropTypes from 'prop-types'
import React from 'react'

function Projects({ projects }) {
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
