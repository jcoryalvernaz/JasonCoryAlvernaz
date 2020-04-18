import React from 'react'
import { SocialIconStyles } from 'styles'
import { StringType } from 'types'
import facebook from 'assets/icons/facebook.svg'
import linkedin from 'assets/icons/linkedin.svg'
import rss from 'assets/icons/rss.svg'
import styled from 'styled-components'
import twitter from 'assets/icons/twitter.svg'
import {
  graphql,
  useStaticQuery,
} from 'gatsby'

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

const propTypes = {
  slug: StringType.isRequired,
  title: StringType.isRequired,
}

const Share = ({
  slug,
  title,
}) => {
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
        rel="noopener noreferrer"
        target="_blank"
      >
        <object className="icon" data={twitter} type="image/svg+xml">
          Twitter
        </object>
      </SocialIconStyles>
      <SocialIconStyles
        href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${slug}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <object className="icon" data={facebook} type="image/svg+xml">
          Facebook
        </object>
      </SocialIconStyles>
      <SocialIconStyles
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}${slug}&title=${title}&source=${title}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <object className="icon" data={linkedin} type="image/svg+xml">
          LinkedIn
        </object>
      </SocialIconStyles>
      <SocialIconStyles
        href={`${siteUrl}/rss.xml`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <object className="icon" data={rss} type="image/svg+xml">
          RSS Feed
        </object>
      </SocialIconStyles>
    </ShareWrapper>
  )
}

Share.propTypes = propTypes

export default Share
