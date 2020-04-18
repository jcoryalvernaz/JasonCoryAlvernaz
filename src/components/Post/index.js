import Comments from './Comments'
import Navigation from './Navigation'
import { PostBodyStyles } from 'styles'
import PropTypes from 'prop-types'
import Share from './Share'
import { format } from 'date-fns'
import styled from 'styled-components'
import {
  CommentType,
  ObjectType,
  StringType,
} from 'types'
import React,{
  Fragment,
} from 'react'

const PostDate = styled.div`
  font-size: 2rem;
  font-weight: bold;
  justify-self: center;
  text-decoration: underline ${props => props.theme.green};
`

const propTypes = {
  date: StringType.isRequired,
  html: StringType.isRequired,
  moderatedComments: PropTypes.arrayOf(CommentType).isRequired,
  next: ObjectType,
  prev: ObjectType,
  slug: StringType.isRequired,
  title: StringType.isRequired,
}

const defaultProps = {
  next: null,
  prev: null,
}

const Post = ({
  date,
  html,
  moderatedComments,
  next,
  prev,
  slug,
  title,
}) => {
  return (
    <Fragment>
      <PostDate>
        {format(new Date(date), 'EEEE, MMM do yyyy')}
      </PostDate>
      <PostBodyStyles
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Share
        slug={slug}
        title={title}
      />
      <Comments
        moderatedComments={moderatedComments}
        slug={slug}
        title={title}
      />
      <Navigation
        next={next}
        prev={prev}
      />
    </Fragment>
  )
}

Post.propTypes = propTypes
Post.defaultProps = defaultProps

export default Post
