import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThanksPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Thanks for getting in contact!</h1>
    <p>I will reply to your inquiry soon.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThanksPage
