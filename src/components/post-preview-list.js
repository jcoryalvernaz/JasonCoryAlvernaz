import LargeList from 'styles/LargeList'
import PostPreview from './post-preview'
import PropTypes from 'prop-types'
import React from 'react'

function PostPreviewList({ posts }) {
  return <LargeList>
    {posts.map(post => (
      <PostPreview key={post.id} post={post} />
    ))}
  </LargeList>
}

PostPreviewList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostPreviewList
