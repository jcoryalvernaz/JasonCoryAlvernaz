import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import slugify from "slugify"
import PropTypes from "prop-types"

const Project = ({ project }) => (
  <li>
    <a href={project.link} className="featured-image">
      <Img fluid={project.image.childImageSharp.fluid} alt={project.imageAlt} />
    </a>
    <a className="title" href={project.link}>
      {project.name}
    </a>
    <p>{project.description}</p>
    <p>
      <strong>Built with: </strong>
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

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export default Project
