/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled, { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import GlobalStyles from "../styles/GlobalStyles"

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

class Layout extends React.Component {
  state = {
    isDarkMode: false,
  }

  componentDidMount() {
    const stored = localStorage.getItem("isDarkMode")
    const isDarkMode = stored === "true" ? true : false
    this.setState({ isDarkMode })
  }

  toggleTheme = () => {
    localStorage.setItem("isDarkMode", !this.state.isDarkMode)
    this.setState({ isDarkMode: !this.state.isDarkMode })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.isDarkMode ? darkTheme : lightTheme}>
        <>
          <GlobalStyles />
          <StaticQuery
            query={graphql`
              query {
                site {
                  siteMetadata {
                    title
                  }
                }
              }
            `}
            render={data => (
              <SiteWrapper>
                <Header siteTitle={data.site.siteMetadata.title} />
                <StyledMain>{this.props.children}</StyledMain>
                <Footer
                  toggleTheme={this.toggleTheme}
                  isChecked={this.state.isDarkMode}
                />
              </SiteWrapper>
            )}
          />
        </>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func,
  isChecked: PropTypes.bool,
}

export default Layout
