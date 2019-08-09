/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled, { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

const lightTheme = {
  purple: "#4C2A85",
  green: "#4ECDC4",
  black: "#000013",
  white: "#FFFFFA",
  grey: "#292F36",
  orange: "#FA8334",
  blue: "#5386E4",
  bs: "0 6px 12px 0 rgba(0, 0, 0, 0.10)",
  maxWidth: "1200px",
}

const SiteWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
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
    <SiteWrapper>
      <ThemeProvider theme={lightTheme}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} />

          <StyledMain>{children}</StyledMain>
          <Footer />
        </>
      </ThemeProvider>
    </SiteWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
