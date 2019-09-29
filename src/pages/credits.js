import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingStyles from "../styles/HeadingStyles"
import SmallListStyles from "../styles/SmallListStyles"

const CreditsPage = () => {
  const data = useStaticQuery(graphql`
    query CreditsQuery {
      allCreditsItemsJson {
        edges {
          node {
            id
            icon
            author
            link
          }
        }
      }
    }
  `)

  const credits = [...data.allCreditsItemsJson.edges]
  return (
    <Layout>
      <SEO title="Credits" />
      <HeadingStyles>Credits</HeadingStyles>
      <SmallListStyles>
        {credits.map(credit => {
          return (
            <li key={credit.node.id}>
              "
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={credit.node.link}
              >
                {credit.node.icon}
              </a>
              " icon by {credit.node.author} from{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://thenounproject.com"
              >
                the Noun Project.
              </a>
            </li>
          )
        })}
      </SmallListStyles>
    </Layout>
  )
}

export default CreditsPage
