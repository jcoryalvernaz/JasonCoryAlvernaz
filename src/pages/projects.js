import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingStyles from "../styles/HeadingStyles"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <HeadingStyles>Hi from the Projects page</HeadingStyles>
    <p>Welcome to page 4</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage
