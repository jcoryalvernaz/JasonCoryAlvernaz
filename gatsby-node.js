const path = require("path")
const slugify = require("slugify")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const value = `/${slugify(node.frontmatter.title, { lower: true })}`
    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            html
            id
            frontmatter {
              title
              published
              date
              tags
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    const posts = res.data.allMarkdownRemark.edges

    createPostPages({ posts, createPage })
    createTagsPages({ posts, createPage })
  })
}

createPostPages = ({ posts, createPage }) => {
  const postTemplate = path.resolve("src/templates/post.js")
  posts.forEach(({ node }, index) => {
    const slug = node.fields.slug
    createPage({
      path: slug,
      component: postTemplate,
      context: {
        prev:
          index === 0
            ? null
            : posts[index - 1].node.frontmatter.published
            ? posts[index - 1].node
            : null,
        next:
          index === posts.length - 1
            ? null
            : posts[index + 1].node.frontmatter.published
            ? posts[index + 1].node
            : null,
        slug,
      },
    })
  })
}

createTagsPages = ({ posts, createPage }) => {
  const tagTemplate = path.resolve("src/templates/tag.js")

  const allTags = new Set()
  posts.forEach(({ node: { frontmatter: { tags } } }) => {
    if (!Array.isArray(tags)) return
    tags.forEach(tag => allTags.add(tag))
  })

  allTags.forEach(tag => {
    createPage({
      path: `/tags/${slugify(tag, { lower: true })}`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}
