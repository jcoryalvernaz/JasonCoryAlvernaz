import Credits from 'components/Credits'
import Layout from 'components/Layout'
import PageHeader from 'components/Layout/PageHeader'
import React from 'react'
import SEO from 'components/Seo'
import {
  graphql,
  useStaticQuery,
} from 'gatsby'

const CreditsPage = () => {
  const data = useStaticQuery(graphql`
    query CreditsQuery {
      allCreditsItemsJson {
        nodes {
          id
          icon
          author
          link
        }
      }
    }
  `)

  const credits = [...data.allCreditsItemsJson.nodes]
  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO title="Credits" />
      <PageHeader>Credits</PageHeader>
      <Credits credits={credits} />
    </Layout>
  )
}

export default CreditsPage
