import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import HeadingStyles from "../styles/HeadingStyles"
import ParagraphStyles from "../styles/ParagraphStyles"

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <HeadingStyles>Thanks!</HeadingStyles>
    <ParagraphStyles>
      I will reply to your inquiry soon. In the meantime, make sure to check me
      out on social media by visiting the links below.
    </ParagraphStyles>
    <Social></Social>
  </Layout>
)

export default ThanksPage
