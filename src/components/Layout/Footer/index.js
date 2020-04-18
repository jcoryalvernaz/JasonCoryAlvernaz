import { ToggleStyles } from 'styles'
import {
  BooleanType,
  FunctionType,
} from 'types'
import {
  HeartIcon,
  MoonIcon,
  Pipe,
  SunIcon,
} from 'assets/icons'
import React, {
  useContext,
} from 'react'
import styled, {
  ThemeContext,
} from 'styled-components'

const StyledFooter = styled.footer`
  margin-top: 10rem;
  padding: 2rem;
  background: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid ${props => props.theme.borderColor};
  justify-items: center;
  a {
    color: ${props => props.theme.white};
  }
  .heart {
    width: 1.5rem;
    margin-bottom: -0.2rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    height: 1.5rem;
  }
`

const propTypes = {
  isChecked: BooleanType.isRequired,
  toggleTheme: FunctionType.isRequired,
}

const Footer = ({
  isChecked,
  toggleTheme,
}) => {
  const themeContext = useContext(ThemeContext)
  const { isDark } = themeContext

  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Jason Cory Alvernaz
      <p>
        Made With <HeartIcon /> in Reno
      </p>
      <br />
      <ToggleStyles>
        <input
          aria-label="Change Between Light and Dark Site Theme"
          checked={isChecked}
          className="switch"
          onChange={toggleTheme}
          type="checkbox"
        />
        <span className="slider">
          {isDark ? <MoonIcon /> : <SunIcon />}
        </span>
      </ToggleStyles>
      <p>
        Built with <a href="https://gatsbyjs.org">Gatsby</a>
        <Pipe />
        Hosted on <a href="https://netlify.com">Netlify</a>
      </p>
    </StyledFooter>
  )
}

Footer.propTypes = propTypes

export default Footer
