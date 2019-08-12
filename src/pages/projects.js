import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import HeadingStyles from "../styles/HeadingStyles"
import ParagraphStyles from "../styles/ParagraphStyles"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <HeadingStyles>Projects</HeadingStyles>
    <ParagraphStyles>
      I have worked on varying projects over my career. Some for professional
      purposes and others for personal growth. Here is a short list of some of
      the projects that I have developed.
    </ParagraphStyles>
    <Social></Social>
  </Layout>
)

export default ProjectsPage
