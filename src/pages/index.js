import React, { Component } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const PageHeading = styled.h1`
  font-size: 6rem;
`
const Message = styled.p`
  font-size: 4rem;
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
    margin-top: -5rem;
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
    items: ["Developer", "Teacher", "Entrepreneur", "Designer"],
    currentItem: "",
  }

  componentDidMount() {
    const { items } = this.state
    let currentItem = items[0]
    this.setState({ currentItem })
    this.interval = setInterval(() => {
      let nextItem = ""
      if (items.indexOf(currentItem) < items.length - 1) {
        nextItem = items[items.indexOf(currentItem) + 1]
        currentItem = nextItem
      } else {
        nextItem = items[0]
        currentItem = nextItem
      }
      this.setState({ currentItem: nextItem })
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
            <StyledSpan>{this.state.currentItem}</StyledSpan>
          </FlashSpan>{" "}
          <br />
          and I love building fast, responsive, modern websites. Take a look at{" "}
          <Link to="/projects">my work</Link>,{" "}
          <Link to="/blog">read my blog</Link>, or{" "}
          <Link to="/contact">get in touch</Link>!
        </Message>
      </Layout>
    )
  }
}

export default IndexPage
