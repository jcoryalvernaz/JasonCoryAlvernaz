import React from "react"
import PropTypes from "prop-types"

import PostPreview from "./post-preview"
import LargeList from "../styles/LargeList"

const PostPreviewList = ({ posts }) => (
  <LargeList>
    {posts.map(post => (
      <PostPreview key={post.id} post={post} />
    ))}
  </LargeList>
)

PostPreviewList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostPreviewList
