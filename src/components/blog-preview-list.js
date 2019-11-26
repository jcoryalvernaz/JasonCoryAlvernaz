import React from "react"

import BlogPreview from "./blog-preview"
import ListStyles from "../styles/ListStyles"

const BlogPreviewList = ({ posts }) => (
  <ListStyles>
    {posts.map(post => (
      <BlogPreview post={post} />
    ))}
  </ListStyles>
)

export default BlogPreviewList
