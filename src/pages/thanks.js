import Layout from 'components/Layout'
import PageHeader from 'components/page-header'
import ParagraphStyles from 'styles/ParagraphStyles'
import React from 'react'
import SEO from 'components/Seo'
import Social from 'components/Social'

const ThanksPage = () => {
  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO title="Thanks" />
      <PageHeader>Thanks!</PageHeader>
      <ParagraphStyles>
        I will reply to your inquiry as quickly as possible. In the meantime, make
        sure to check me out on social media by visiting the links below.
      </ParagraphStyles>
      <Social />
    </Layout>
  )
}

export default ThanksPage
