import LargeList from 'styles/LargeList'
import { ObjectType } from 'types'
import Project from './project'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  projects: PropTypes.arrayOf(ObjectType).isRequired,
}

const Projects = ({
  projects,
}) => {
  return (
    <LargeList>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </LargeList>
  )
}

Projects.propTypes = propTypes

export default Projects
