import React from "react"

import PostPreview from "./post-preview"
import LargeList from "../styles/LargeList"

const PostPreviewList = ({ posts }) => (
  <LargeList>
    {posts.map(post => (
      <PostPreview key={post.ic} post={post} />
    ))}
  </LargeList>
)

export default PostPreviewList
