import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingStyles from "../styles/HeadingStyles"
import ParagraphStyles from "../styles/ParagraphStyles"

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
  width: fit-content;
  &:after {
    content: "";
    height: 2.5rem;
    background: ${props => props.theme.green};
    margin-top: -4rem;
    z-index: -1;
    transform: skew(4deg);
  }
`

const FlashSpan = styled.span`
  display: inline-block;
  width: 25rem;
  text-align: center;
`

class IndexPage extends Component {
  state = {
    titles: ["Developer!", "Teacher!", "Entrepreneur!", "Designer!"],
    currentTitle: "",
  }

  componentDidMount() {
    const { titles } = this.state
    let currentTitle = titles[0]
    this.setState({ currentTitle })
    this.interval = setInterval(() => {
      if (titles.indexOf(currentTitle) < titles.length - 1) {
        currentTitle = titles[titles.indexOf(currentTitle) + 1]
      } else {
        currentTitle = titles[0]
      }
      this.setState({ currentTitle })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <HeadingStyles>Jason Cory Alvernaz</HeadingStyles>
        <StyledMessage>
          I am a{" "}
          <FlashSpan>
            <StyledSpan>{this.state.currentTitle}</StyledSpan>
          </FlashSpan>{" "}
        </StyledMessage>
        <ParagraphStyles>
          I love building fast, responsive, modern websites.
        </ParagraphStyles>
        <ParagraphStyles>
          Take a look at <Link to="/projects">my work</Link>,{" "}
          <Link to="/blog">read my blog</Link>, or{" "}
          <Link to="/contact">get in touch</Link>!
        </ParagraphStyles>
      </Layout>
    )
  }
}

export default IndexPage
