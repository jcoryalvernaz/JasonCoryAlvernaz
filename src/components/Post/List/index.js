import { LargeListStyles } from 'styles'
import PostPreview from './Preview'
import { PostType } from 'types'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
}

const PostPreviewList = ({
  posts,
}) => {
  return (
    <LargeListStyles>
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </LargeListStyles>
  )
}

PostPreviewList.propTypes = propTypes

export default PostPreviewList
