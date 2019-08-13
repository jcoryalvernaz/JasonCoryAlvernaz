/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

import lightBackground from "../images/lightBackground.svg"
import darkBackground from "../images/darkBackground.svg"

const lightTheme = {
  purple: "#4C2A85",
  green: "#4ECDC4",
  black: "#000013",
  white: "#FFFFFA",
  grey: "#292F36",
  orange: "#FA8334",
  blue: "#5386E4",
  bs: "0 6px 12px 0 rgba(0, 0, 0, 0.10)",
  textColor: "#000013",
  maxWidth: "1200px",
  backgroundImage: lightBackground,
}

const darkTheme = {
  purple: "#22133D",
  green: "#4ECDC4",
  black: "#000013",
  white: "#FFFFFA",
  grey: "#292F36",
  orange: "#FA8334",
  blue: "#5386E4",
  bs: "0 6px 12px 0 rgba(0, 0, 0, 0.10)",
  maxWidth: "1200px",
  textColor: "#FFFFFA",
  backgroundImage: darkBackground,
}

const SiteWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  background-image: url(${props => props.theme.backgroundImage});
  color: ${props => props.theme.textColor};
`

const StyledMain = styled.main`
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  min-height: 80vh;
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  justify-self: center;
  margin-top: 10rem;
  transition: all 0.8s ease-in-out;
  @media (max-width: 800px) {
    margin-top: 5rem;
  }
`

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <SiteWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <StyledMain>{children}</StyledMain>
          <Footer toggleTheme={toggleTheme} />
        </SiteWrapper>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func,
}

export default Layout
