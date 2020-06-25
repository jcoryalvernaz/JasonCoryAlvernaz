import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { ObjectType } from 'types'
import React from 'react'
import slugify from 'slugify'

const propTypes = {
  project: ObjectType.isRequired,
}

const Project = ({
  project,
}) => {
  return (
    <li>
      <a className="featured-image" href={project.link}>
        <Img alt={project.imageAlt} fluid={project.image.childImageSharp.fluid} />
      </a>
      <a className="title" href={project.link}>
        {project.name}
      </a>
      <p>{project.description}</p>
      <p>
        {/* eslint-disable react/no-array-index-key */}
        <strong>Built with: </strong>
        {project.technologies.map((tag, i) => (
          <Link
            className="tag"
            key={i}
            to={`/tags/${slugify(tag, { lower: true })}`}
          >
            {tag}
          </Link>
        ))}
      </p>
    </li>
  )
}

Project.propTypes = propTypes

export default Project
