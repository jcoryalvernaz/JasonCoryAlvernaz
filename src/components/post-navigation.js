import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import PostNavigationStyles from "../styles/PostNavigationStyles"

const PostNavigation = ({ prev, next }) => (
  <PostNavigationStyles>
    {prev && (
      <Link className="prev" to={prev.fields.slug}>
        <h4>Previous</h4>
        <span>
          {" "}
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 70.85"
          >
            <g>
              <g>
                <path d="m3.5 52.5 31.9 31.9c1.4 1.4 3.6 1.4 4.9 0 1.4-1.4 1.4-3.6 0-4.9l-26-26h79.7c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5h-79.6l26-26c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.8 0.3-2.5 1l-31.9 31.9c-0.7 0.7-1 1.5-1 2.5s0.4 1.8 1 2.5z"></path>
              </g>
            </g>
          </svg>{" "}
          {prev.frontmatter.title}
        </span>
      </Link>
    )}
    {next && (
      <Link className="next" to={next.fields.slug}>
        <h4>Next</h4>
        <span>
          {next.frontmatter.title}{" "}
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 70.85"
          >
            <g>
              <g>
                <path d="m96.5 47.5-31.9-31.9c-1.4-1.4-3.6-1.4-4.9 0-1.4 1.4-1.4 3.6 0 4.9l26 26h-79.7c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h79.7l-26 26c-1.4 1.4-1.4 3.6 0 4.9 0.7 0.7 1.6 1 2.5 1s1.8-0.3 2.5-1l31.9-31.9c0.7-0.7 1-1.5 1-2.5s-0.5-1.8-1.1-2.5z"></path>
              </g>
            </g>
          </svg>
        </span>
      </Link>
    )}
  </PostNavigationStyles>
)

PostNavigation.defaultProps = {
  prev: null,
  next: null,
}

PostNavigation.propTypes = {
  prev: PropTypes.object,
  next: PropTypes.object,
}

export default PostNavigation
