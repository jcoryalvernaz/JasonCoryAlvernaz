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
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.10)",
}

const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
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
    <Wrapper>
      <ThemeProvider theme={lightTheme}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} />

          <main>{children}</main>
          <Footer />
        </>
      </ThemeProvider>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
