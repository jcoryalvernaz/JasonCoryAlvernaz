import Img from 'gatsby-image'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import slugify from 'slugify'

/* eslint-disable */
function PostPreview({ post }) {
  return <li>
    <Link className="featured-image" to={post.fields.slug}>
      <Img
        alt={post.frontmatter.featuredAlt}
        fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
      />
    </Link>
    <Link className="title" to={post.fields.slug}>
      {post.frontmatter.title}
    </Link>
    <p>{post.frontmatter.description}</p>
    <p>
      {/* eslint-disable react/no-array-index-key */}
      <strong>Categories: </strong>
      {post.frontmatter.tags.map((tag, i) => (
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
}

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostPreview
