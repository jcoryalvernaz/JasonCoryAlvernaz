import { DownArrow } from 'assets/icons'
import React from 'react'
import { SocialIconStyles } from 'styles'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import {
  graphql,
  useStaticQuery,
} from 'gatsby'

const SocialWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  position: relative;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 4rem;
  grid-template-columns: repeat(5, minmax(5rem, 15rem));
  justify-self: center;
  justify-items: center;
  h2 {
    grid-column: 1 / -1;
    margin-bottom: 0;
    font-size: 2.5rem;
    border-bottom: 0.2rem solid ${props => props.theme.orange};
    padding-bottom: 0.5rem;
  }
  .arrow {
    fill: ${props =>
    props.theme.isDark ? props.theme.blue : props.theme.purple};
    height: 4.5rem;
    width: 4.5rem;
  }
  .active {
    grid-column: 1 / -1;
    animation-name: bounce;
    animation-duration: 1.8s;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation-iteration-count: 3;
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0px);
      }
      40% {
        transform: translateY(-15px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialLinksQuery {
      allSocialLinksJson {
        nodes {
          id
          name
          image {
            publicURL
          }
          url
        }
      }
    }
  `)

  const links = [...data.allSocialLinksJson.nodes]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  })

  return (
    <SocialWrapper>
      <h2>Where to Find Me</h2>
      <div className={inView ? 'active' : ''} ref={ref}>
        <DownArrow />
      </div>
      {links.map(link => {
        return (
          <SocialIconStyles
            href={link.url}
            key={link.id}
            rel="noopener noreferrer"
            target="_blank"
          >
            <object
              className="icon"
              data={link.image.publicURL}
              type="image/svg+xml"
            >
              {link.name}
            </object>
          </SocialIconStyles>
        )
      })}
    </SocialWrapper>
  )
}

export default Social
