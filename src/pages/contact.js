import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import Contact from "../components/contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Contact />
    <Social />
  </Layout>
)

export default ContactPage
