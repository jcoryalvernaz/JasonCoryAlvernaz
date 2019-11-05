import React, { useState, useLayoutEffect } from "react"
import styled, { ThemeProvider } from "styled-components"
import { useSpring, config, animated } from "react-spring"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

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

const StyledMain = styled(animated.main)`
  width: 100%;
  min-height: 80vh;
  display: grid;
  overflow: hidden;
  grid-auto-rows: minmax(min-content, max-content);
  justify-self: center;
  margin-top: 5rem;
  @media (max-width: 800px) {
    margin-top: 5rem;
  }
  .about {
    :before {
      background: ${props => props.theme.green};
      content: "";
      width: 120%;
      left: -2rem;
      height: 105%;
      position: absolute;
      transform: rotate(-2deg) translateX(-3%);
      box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.1),
        0 -10px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
  .value,
  .contact,
  .comments {
    :before {
      background: ${props => props.theme.blue};
      content: "";
      width: 150%;
      left: -5rem;
      height: 105%;
      position: absolute;
      transform: rotate(2deg) translateX(-3%);
      box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.1),
        0 -10px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
`

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useLayoutEffect(() => {
    const stored = localStorage.getItem("isDarkMode")
    setIsDarkMode(stored === "true" ? true : false)
  })

  const toggleTheme = () => {
    localStorage.setItem("isDarkMode", !isDarkMode)
    setIsDarkMode(!isDarkMode)
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

  const mainProps = useSpring({
    config: config.slow,
    delay: 200,
    from: { opacity: 0, transform: `translate3d(0, 80px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <SiteWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <StyledMain style={mainProps}>{children}</StyledMain>
          <Footer toggleTheme={toggleTheme} isChecked={isDarkMode} />
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
