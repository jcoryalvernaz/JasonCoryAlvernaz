import Footer from './Footer'
import { GlobalStyles } from 'styles'
import Header from './Header'
import { NodeType } from 'types'
import React, {
  Fragment,
  useLayoutEffect,
  useState,
} from 'react'
import {
  animated,
  config,
  useSpring,
} from 'react-spring'
import {
  darkTheme,
  lightTheme,
} from 'themes'
import styled, {
  ThemeProvider,
} from 'styled-components'

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

const propTypes = {
  children: NodeType.isRequired,
}

const Layout = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useLayoutEffect(() => {
    const stored = localStorage.getItem('isDarkMode')
    setIsDarkMode(stored === 'true' ? true : false)
  })

  const toggleTheme = () => {
    localStorage.setItem('isDarkMode', !isDarkMode)
    setIsDarkMode(!isDarkMode)
  }

  const mainProps = useSpring({
    config: config.slow,
    delay: 200,
    from: { opacity: 0, transform: 'translate3d(0, 80px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })

  return (
    <ThemeProvider
      theme={isDarkMode ? darkTheme : lightTheme}
    >
      <Fragment>
        <GlobalStyles />
        <SiteWrapper>
          <Header />
          {/* eslint-disable react/forbid-component-props */}
          <StyledMain
            style={mainProps}
          >
            {children}
          </StyledMain>
          {/* eslint-enable react/forbid-component-props */}
          {/* eslint-disable react/jsx-no-bind */}
          <Footer
            isChecked={isDarkMode}
            toggleTheme={toggleTheme}
          />
          {/* eslint-enable react/jsx-no-bind */}
        </SiteWrapper>
      </Fragment>
    </ThemeProvider>
  )
}

Layout.propTypes = propTypes

export default Layout
