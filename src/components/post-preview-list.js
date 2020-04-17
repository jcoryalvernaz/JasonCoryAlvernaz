import LargeList from 'styles/LargeList'
import PostPreview from './post-preview'
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
    <LargeList>
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </LargeList>
  )
}

PostPreviewList.propTypes = propTypes

export default PostPreviewList
