import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import useInterval from "react-useinterval"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import HeadingStyles from "../styles/HeadingStyles"
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

  return (
    <Layout>
      <SEO title="Home" />
      <HeadingStyles>Jason Cory Alvernaz</HeadingStyles>
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
          <ParagraphStyles>
            I am a web developer based out of Reno, NV, with a passion for
            building stunning sites for my clients. As a graduate from the
            University of Nevada, Reno with Bachelor's Degrees in both Business
            Management and Information Systems, I understand the technical and
            business needs for the websites I create and the businesses for
            which I work. My goal is to craft a site that is not only visually
            appealing but solves issues with your business processes and drives
            customers to your company. In order to build something that will
            compliment your brand, I must know the ins-and-outs of your business
            the way that you know your business. This concept is why I take the
            time to ask the questions and get the feedback that is necessary for
            me to create something that expresses your brand and its value
            proposition to your customers. So, reach out and let's build
            something beautiful together!
          </ParagraphStyles>
        </div>
      </SectionStyles>
      <Social></Social>
      <SectionStyles className="value">
        <div className="inner">
          <h2>Value</h2>
          <ParagraphStyles>
            I am a web developer based out of Reno, NV, with a passion for
            building stunning sites for my clients. As a graduate from the
            University of Nevada, Reno with Bachelor's Degrees in both Business
            Management and Information Systems, I understand the technical and
            business needs for the websites I create and the businesses for
            which I work. My goal is to craft a site that is not only visually
            appealing but solves issues with your business processes and drives
            customers to your company. In order to build something that will
            compliment your brand, I must know the ins-and-outs of your business
            the way that you know your business. This concept is why I take the
            time to ask the questions and get the feedback that is necessary for
            me to create something that expresses your brand and its value
            proposition to your customers. So, reach out and let's build
            something beautiful together!
          </ParagraphStyles>
        </div>
      </SectionStyles>
    </Layout>
  )
}

export default IndexPage
