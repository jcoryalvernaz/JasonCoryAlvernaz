import { Link } from 'gatsby'
import { ObjectType } from 'types'
import { PostNavigationStyles } from 'styles'
import React from 'react'
import {
  LeftArrow,
  RightArrow,
} from 'assets/icons'

const defaultProps = {
  next: null,
  prev: null,
}

const propTypes = {
  next: ObjectType,
  prev: ObjectType,
}

const PostNavigation = ({
  prev,
  next,
}) => {
  return (
    <PostNavigationStyles>
      {prev && (
        <Link className="prev" to={prev.fields.slug}>
          <h4>Previous</h4>
          <span>
            {' '}
            <LeftArrow />
            {' '}
            {prev.frontmatter.title}
          </span>
        </Link>
      )}
      {next && (
        <Link className="next" to={next.fields.slug}>
          <h4>Next</h4>
          <span>
            {next.frontmatter.title}{' '}
            <RightArrow />
          </span>
        </Link>
      )}
    </PostNavigationStyles>
  )
}

PostNavigation.propTypes = propTypes
PostNavigation.defaultProps = defaultProps

export default PostNavigation
