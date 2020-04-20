import Layout from 'components/Layout'
import PageHeader from 'components/page-header'
import ParagraphStyles from 'styles/ParagraphStyles'
import React from 'react'
import SEO from 'components/Seo'
import Social from 'components/Social'

const NotFoundPage = () => {
  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO title="404: Not found" />
      <PageHeader>404: Not Found</PageHeader>
      <ParagraphStyles>Oops! This page doesn&#39;t exist... yet.</ParagraphStyles>
      <ParagraphStyles>
        Don&apos;t worry, there are plenty of other pages to visit. Head up to the
        navigation and take a look around.
      </ParagraphStyles>
      <Social />
    </Layout>
  )
}

export default NotFoundPage
