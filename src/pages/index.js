import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageHeading = styled.h1`
  font-size: 6rem;
  margin-left: 1rem;
`

const Message = styled.p`
  font-size: 3rem;
  margin: 0;
  margin-left: 1rem;
  line-height: 2;
  a {
    color: ${props => props.theme.black};
    border-bottom: 0.5rem solid ${props => props.theme.green};
  }
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
        <PageHeading>Jason Cory Alvernaz</PageHeading>
        <Message>
          I am a{" "}
          <FlashSpan>
            <StyledSpan>{this.state.currentTitle}</StyledSpan>
          </FlashSpan>{" "}
        </Message>
        <Message>
          I love building fast, responsive, modern websites. Take a look at{" "}
          <Link to="/projects">my work</Link>,{" "}
          <Link to="/blog">read my blog</Link>, or{" "}
          <Link to="/contact">get in touch</Link>!
        </Message>
      </Layout>
    )
  }
}

export default IndexPage
