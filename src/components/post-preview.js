import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import slugify from "slugify"
import PropTypes from "prop-types"

const PostPreview = ({ post }) => (
  <li>
    <Link className="featured-image" to={post.fields.slug}>
      <Img
        fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        alt={post.frontmatter.featuredAlt}
      />
    </Link>
    <Link className="title" to={post.fields.slug}>
      {post.frontmatter.title}
    </Link>
    <p>{post.frontmatter.description}</p>
    <p>
      <strong>Categories: </strong>
      {post.frontmatter.tags.map((tag, i) => (
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

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostPreview
