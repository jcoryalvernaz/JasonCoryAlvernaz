import Contact from 'components/contact'
import Layout from 'components/Layout'
import PageHeader from 'components/page-header'
import ParagraphStyles from 'styles/ParagraphStyles'
import React from 'react'
import SEO from 'components/seo'
import Social from 'components/social'

const ContactPage = () => {
  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO title="Contact" />
      <PageHeader>Contact</PageHeader>
      <ParagraphStyles>
        Do you need a new website for your growing business? Are you looking to
        learn to build websites yourself? If you answered yes to either of these
        questions, you are in luck. I love building fast performant websites and
        teaching others to do the same. Fill out the form below and let me know
        what I can do for you!
      </ParagraphStyles>
      <Contact />
      <Social />
    </Layout>
  )
}

export default ContactPage
