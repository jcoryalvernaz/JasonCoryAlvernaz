import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import PageHeader from "../components/page-header"
import ParagraphStyles from "../styles/ParagraphStyles"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageHeader>404: Not Found</PageHeader>
    <ParagraphStyles>Oops! This page doesn&#39;t exist... yet.</ParagraphStyles>
    <ParagraphStyles>
      Don't worry, there are plenty of other pages to visit. Head up to the
      navigation and take a look around.
    </ParagraphStyles>
    <Social />
  </Layout>
)

export default NotFoundPage
