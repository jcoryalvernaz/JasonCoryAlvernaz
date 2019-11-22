import React, { useState } from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import useInterval from "react-useinterval"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import PageHeader from "../components/page-header"
import ParagraphStyles from "../styles/ParagraphStyles"
import SectionStyles from "../styles/SectionStyles"

const StyledMessage = styled.p`
  font-size: 3rem;
  margin: 0;
  padding: 2rem;
  max-width: 70rem;
  width: 100%;
  justify-self: center;
  line-height: 1.8;
`

const StyledSpan = styled.span`
  display: grid;
  transform: rotate(-1deg);
  margin-left: 1rem;
  width: fit-content;
  color: ${props => props.theme.black};
  &:after {
    content: "";
    height: 3.5rem;
    background: ${props => props.theme.orange};
    margin-top: -4.2rem;
    z-index: -1;
    width: 105%;
    justify-self: center;
    transform: skew(4deg);
    box-shadow: ${props => props.theme.bs};
  }
  @media (max-width: 388px) {
    margin-left: 0;
  }
`

const FlashSpan = styled.span`
  display: inline-block;
  width: 25rem;
  text-align: center;
`

const ConsultWrapper = styled.div`
  display: grid;
  justify-self: center;
  justify-items: center;
  h2 {
    margin-bottom: 0;
    font-size: 2.5rem;
    border-bottom: 0.2rem solid ${props => props.theme.orange};
    padding-bottom: 0.5rem;
  }
`

const IndexPage = () => {
  const [titles] = useState([
    "Developer!",
    "Teacher!",
    "Entrepreneur!",
    "Designer!",
  ])
  const [currentTitle, setCurrentTitle] = useState(titles[0])

  const incrementTitle = index => {
    if (index < titles.length - 1) {
      setCurrentTitle(titles[index + 1])
    } else {
      setCurrentTitle(titles[0])
    }
  }

  useInterval(() => {
    incrementTitle(titles.indexOf(currentTitle))
  }, 1000)

  const data = useStaticQuery(graphql`
    query ValueItemsQuery {
      allValueItemsJson {
        nodes {
          id
          name
          image {
            publicURL
          }
          description
        }
      }
    }
  `)

  const values = [...data.allValueItemsJson.nodes]

  return (
    <Layout>
      <SEO title="Home" />
      <PageHeader>Jason Cory Alvernaz</PageHeader>
      <StyledMessage>
        I am a{" "}
        <FlashSpan>
          <StyledSpan>{currentTitle}</StyledSpan>
        </FlashSpan>{" "}
      </StyledMessage>
      <ParagraphStyles>
        I love building fast, responsive, modern websites and helping others
        grow in their careers. Whether you need a website for your growing
        business or looking to learn web development, you've come to the right
        place. Take a look at <Link to="/projects">my work</Link>,{" "}
        <Link to="/blog">read my blog</Link>, or{" "}
        <Link to="/contact">contact me</Link> for more information!
      </ParagraphStyles>
      <SectionStyles className="about">
        <div className="inner">
          <h2>About Me</h2>
          <br />
          <ParagraphStyles>
            I am a web developer based out of Reno, NV, with a passion for
            building beautiful sites for my clients. As a graduate from the
            University of Nevada, Reno with Bachelor of Science degrees in both
            Business Management and Information Systems, I understand the
            technical and business needs for the websites I create and the
            businesses for which I work. So, reach out and let me put my
            expertise to work for your business!
          </ParagraphStyles>
        </div>
      </SectionStyles>
      <ConsultWrapper>
        <h2>Free Consultations</h2>
        <br />
        <ParagraphStyles>
          Reach out for a completely free discussion on how we can improve the
          reach and impact of your brand by creating a stunning modern website
          for your business.
        </ParagraphStyles>
      </ConsultWrapper>
      <SectionStyles className="value">
        <div className="inner">
          <ul className="values">
            {values.map(value => {
              return (
                <li key={value.id}>
                  <object
                    className="icon"
                    type="image/svg+xml"
                    data={value.image.publicURL}
                  >
                    {value.name}
                  </object>
                  <h2>{value.name}</h2>
                  <p>{value.description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </SectionStyles>
      <Social></Social>
    </Layout>
  )
}

export default IndexPage
