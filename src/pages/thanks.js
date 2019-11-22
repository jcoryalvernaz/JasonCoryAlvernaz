import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import PageHeader from "../components/page-header"
import ParagraphStyles from "../styles/ParagraphStyles"

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <PageHeader>Thanks!</PageHeader>
    <ParagraphStyles>
      I will reply to your inquiry as quickly as possible. In the meantime, make
      sure to check me out on social media by visiting the links below.
    </ParagraphStyles>
    <Social></Social>
  </Layout>
)

export default ThanksPage
