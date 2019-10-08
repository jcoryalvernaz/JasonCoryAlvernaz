import React from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

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
  .icon {
    width: 8rem;
    transition: 0.2s all ease-in;
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
  a {
    position: relative;
    display: inline-block;
    :after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    :hover {
      .icon {
        transform: translateY(-10%);
        filter: ${props =>
          props.theme.isDark
            ? `drop-shadow(0px 6px 2px rgba(76, 42, 133, 1))`
            : `drop-shadow(0px 6px 2px rgba(0, 0, 0, 0.2))`};
      }
    }
  }
`

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialLinksQuery {
      allSocialLinksJson {
        edges {
          node {
            id
            name
            image {
              publicURL
            }
            url
          }
        }
      }
    }
  `)

  const links = [...data.allSocialLinksJson.edges]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  })

  return (
    <SocialWrapper>
      <h2>Where to Find Me</h2>
      <div ref={ref} className={inView ? "active" : ""}>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
        >
          <g>
            <g>
              <path d="m50 97.5c-26.3 0-47.6-21.3-47.6-47.6 0-24.9 19.1-45.3 43.5-47.4v54.4l-14.5-14.4c-1.6-1.6-4.2-1.6-5.8 0-0.8 0.8-1.2 1.8-1.2 2.9s0.4 2.1 1.2 2.9l21.5 21.5c1.6 1.6 4.2 1.6 5.8 0l21.5-21.5c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0l-14.5 14.4v-54.4c24.4 2.1 43.5 22.5 43.5 47.4 0 26.3-21.3 47.6-47.6 47.6z"></path>
            </g>
          </g>
        </svg>
      </div>
      {links.map(link => {
        return (
          <a
            key={link.node.id}
            target="_blank"
            rel="noopener noreferrer"
            href={link.node.url}
          >
            <object
              type="image/svg+xml"
              data={link.node.image.publicURL}
              className="icon"
            >
              {link.node.name}
            </object>
          </a>
        )
      })}
    </SocialWrapper>
  )
}

export default Social
