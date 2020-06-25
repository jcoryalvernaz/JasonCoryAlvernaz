import { LargeListStyles } from 'styles'
import { ObjectType } from 'types'
import Project from './Project'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  projects: PropTypes.arrayOf(ObjectType).isRequired,
}

const Projects = ({
  projects,
}) => {
  return (
    <LargeListStyles>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </LargeListStyles>
  )
}

Projects.propTypes = propTypes

export default Projects
