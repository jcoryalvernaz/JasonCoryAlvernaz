import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import SocialIconStyles from "../styles/SocialIconStyles"

import twitter from "../assets/icons/twitter.svg"
import facebook from "../assets/icons/facebook.svg"
import linkedin from "../assets/icons/linkedin.svg"
import rss from "../assets/icons/rss.svg"

const ShareWrapper = styled.div`
  display: grid;
  position: relative;
  justify-self: center;
  justify-items: center;
  grid-template-columns: repeat(4, minmax(5rem, 15rem));
  grid-column-gap: 1rem;
  grid-row-gap: 4rem;
  max-width: 70rem;
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
  h2 {
    grid-column: 1 / -1;
    margin-bottom: 0;
    font-size: 2.5rem;
    border-bottom: 0.2rem solid ${props => props.theme.orange};
    padding-bottom: 0.5rem;
  }
`

const PostShare = ({ slug, title }) => {
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
      <h2>Share this post: </h2>
      <SocialIconStyles
        href={`https://twitter.com/intent/tweet/?text=${title}&url=${siteUrl}${slug}%2F&via=jcoryalvernaz`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <object className="icon" type="image/svg+xml" data={twitter}>
          Twitter
        </object>
      </SocialIconStyles>
      <SocialIconStyles
        href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${slug}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <object className="icon" type="image/svg+xml" data={facebook}>
          Facebook
        </object>
      </SocialIconStyles>
      <SocialIconStyles
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}${slug}&title=${title}&source=${title}`}
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
        <object className="icon" type="image/svg+xml" data={rss}>
          RSS Feed
        </object>
      </SocialIconStyles>
    </ShareWrapper>
  )
}

PostShare.defaultProps = {
  slug: "",
  title: "",
}

PostShare.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
}

export default PostShare
