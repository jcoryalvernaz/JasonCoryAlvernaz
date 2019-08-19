import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import HeadingStyles from "../styles/HeadingStyles"
import ParagraphStyles from "../styles/ParagraphStyles"

const ProjectsList = styled.ul`
  max-width: 80rem;
  width: 100%;
  justify-self: center;
  margin-top: 3rem;
  padding: 1rem;
  list-style: none;
  li {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    border-top: 0.3rem solid ${props => props.theme.orange};
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  img {
    grid-column: 1 / span 1;
    grid-row: 1 / -1;
  }
  p {
    font-size: 2rem;
  }
  .title a {
    color: ${props =>
      props.theme.isDark ? props.theme.blue : props.theme.purple};
    font-size: 2.5rem;
  }
  @media (max-width: 500px) {
    li {
      grid-template-columns: 1fr;
      grid-template-rows: 3fr 1fr;
    }
  }
`

const ProjectsPage = () => {
  const [projects] = useState([
    {
      name: "Jason Cory Alvernaz Portfolio Site",
      description:
        "My personal site designed to showcase my work and allow new clients to contact me.",
      link: "https://jasoncoryalvernaz.com",
      technologies: ["Gatsby", "React", "GraphQL"],
      image: "",
      imageAlt: "",
    },
  ])
  return (
    <Layout>
      <SEO title="Projects" />
      <HeadingStyles>Projects</HeadingStyles>
      <ParagraphStyles>
        I have worked on varying projects over my career. Some for professional
        purposes and others for personal growth. Here is a short list of some of
        the projects that I have developed.
      </ParagraphStyles>
      <ProjectsList>
        {projects.map((project, i) => {
          return (
            <li key={i}>
              <img src={project.image} alt={project.imageAlt} />
              <h3 className="title">
                <a href={project.link}>{project.name}</a>
              </h3>
              <p>{project.description}</p>
              <p>Built with: {project.technologies.join(`, `)}</p>
            </li>
          )
        })}
      </ProjectsList>
      <Social></Social>
    </Layout>
  )
}

export default ProjectsPage
