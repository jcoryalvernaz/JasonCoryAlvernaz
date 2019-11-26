import React from "react"

import PostPreview from "./post-preview"
import LargeList from "../styles/LargeList"

const PostPreviewList = ({ posts }) => (
  <LargeList>
    {posts.map(post => (
      <PostPreview post={post} />
    ))}
  </LargeList>
)

export default PostPreviewList
