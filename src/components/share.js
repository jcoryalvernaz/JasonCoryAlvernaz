import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import SocialIconStyles from "../styles/SocialIconStyles"

import twitter from "../images/simple-icon-original-twitter.svg"
import linkedin from "../images/simple-icon-original-linkedin.svg"

const ShareWrapper = styled.div``
const ShareLabel = styled.label``

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
      <SocialIconStyles
        href={`https://twitter.com/intent/tweet/?text=${title}&url=${siteUrl}${path}%2F&via=jcoryalvernaz`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <object className="icon" type="image/svg+xml" data={twitter}>
          Twitter
        </object>
      </SocialIconStyles>
      <SocialIconStyles
        href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${path}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </SocialIconStyles>
      <SocialIconStyles
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}${path}&title=${title}&source=${title}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <object className="icon" type="image/svg+xml" data={linkedin}>
          LinkedIn
        </object>
      </SocialIconStyles>
      <SocialIconStyles
        href={`${siteUrl}/rss.xml`}
        target="_blank"
        rel="noopener noreferrer"
      >
        RSS Feed
      </SocialIconStyles>
    </ShareWrapper>
  )
}

export default Share
