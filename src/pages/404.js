import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import HeadingStyles from "../styles/HeadingStyles"
import ParagraphStyles from "../styles/ParagraphStyles"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <HeadingStyles>404: Not Found</HeadingStyles>
    <ParagraphStyles>Oops! This page doesn&#39;t exist... yet.</ParagraphStyles>
    <ParagraphStyles>
      Don't worry, there are plenty of other pages to visit. Head up to the
      navigation and take a look around.
    </ParagraphStyles>
    <Social />
  </Layout>
)

export default NotFoundPage
