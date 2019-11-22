import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import Contact from "../components/contact"
import PageHeader from "../components/page-header"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader>Contact</PageHeader>
    <Contact />
    <Social />
  </Layout>
)

export default ContactPage
