import { Link } from 'gatsby'
import PostNavigationStyles from 'styles/PostNavigationStyles'
import PropTypes from 'prop-types'
import React from 'react'

function PostNavigation({ prev, next }) {
  return <PostNavigationStyles>
    {prev && (
      <Link className="prev" to={prev.fields.slug}>
        <h4>Previous</h4>
        <span>
          {' '}
          <svg
            className="arrow"
            version="1.1"
            viewBox="0 0 100 70.85"
            x="0px"
            xmlns="http://www.w3.org/2000/svg"
            y="0px"
          >
            <g>
              <g>
                {/* eslint-disable react/jsx-max-depth */}
                <path d="m3.5 52.5 31.9 31.9c1.4 1.4 3.6 1.4 4.9 0 1.4-1.4 1.4-3.6 0-4.9l-26-26h79.7c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5h-79.6l26-26c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.8 0.3-2.5 1l-31.9 31.9c-0.7 0.7-1 1.5-1 2.5s0.4 1.8 1 2.5z" />
              </g>
            </g>
          </svg>{' '}
          {prev.frontmatter.title}
        </span>
      </Link>
    )}
    {next && (
      <Link className="next" to={next.fields.slug}>
        <h4>Next</h4>
        <span>
          {next.frontmatter.title}{' '}
          <svg
            className="arrow"
            version="1.1"
            viewBox="0 0 100 70.85"
            x="0px"
            xmlns="http://www.w3.org/2000/svg"
            y="0px"
          >
            <g>
              <g>
                <path d="m96.5 47.5-31.9-31.9c-1.4-1.4-3.6-1.4-4.9 0-1.4 1.4-1.4 3.6 0 4.9l26 26h-79.7c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h79.7l-26 26c-1.4 1.4-1.4 3.6 0 4.9 0.7 0.7 1.6 1 2.5 1s1.8-0.3 2.5-1l31.9-31.9c0.7-0.7 1-1.5 1-2.5s-0.5-1.8-1.1-2.5z" />
              </g>
            </g>
          </svg>
        </span>
      </Link>
    )}
  </PostNavigationStyles>
}

PostNavigation.defaultProps = {
  next: null,
  prev: null,
}

PostNavigation.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
}

export default PostNavigation
