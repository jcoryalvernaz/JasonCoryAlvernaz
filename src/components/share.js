import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const ShareWrapper = styled.div``
const ShareLabel = styled.label``
const ShareLink = styled.a``

const Share = ({ path, title }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <ShareWrapper>
      <ShareLabel>Share this post: </ShareLabel>
      <ShareLink
        href={`https://twitter.com/intent/tweet/?text=${title}&url=${siteUrl}${path}%2F&via=jcoryalvernaz`}
      >
        Twitter
      </ShareLink>
      <ShareLink
        href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${path}`}
      >
        Facebook
      </ShareLink>
      <ShareLink
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}${path}&title=${title}&source=${title}`}
      >
        LinkedIn
      </ShareLink>
      <ShareLink href={`${siteUrl}/rss.xml`}>RSS Feed</ShareLink>
    </ShareWrapper>
  )
}

export default Share
