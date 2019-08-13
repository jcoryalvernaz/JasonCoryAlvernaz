/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

import lightTheme from "../themes/light"
import darkTheme from "../themes/dark"

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
  const [isLightMode, setIsLightMode] = useState(undefined)

  useEffect(() => {
    const stored = localStorage.getItem("isLightMode")
    setIsLightMode(stored === "true" ? true : false)
  })

  const toggleTheme = () => {
    setIsLightMode(!isLightMode)
    localStorage.setItem("isLightMode", !isLightMode)
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
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <>
        <SiteWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <StyledMain>{children}</StyledMain>
          <Footer toggleTheme={toggleTheme} isChecked={!isLightMode} />
        </SiteWrapper>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func,
  isChecked: PropTypes.bool,
}

export default Layout
