import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"

import ToggleStyles from "../styles/ToggleStyles"
import heart from "../images/heart.svg"
import moon from "../images/moon.svg"
import sun from "../images/sun.svg"

const StyledFooter = styled.footer`
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
    margin-bottom: -0.2rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    height: 1.5rem;
  }
  span {
    color: ${props => props.theme.green};
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`

const Footer = ({ toggleTheme, isChecked }) => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Jason Cory Alvernaz
      <p>
        Made With <img className="heart" src={heart} alt="love heart" /> in Reno
      </p>
      <br />
      <ToggleStyles>
        <input
          aria-label="Change Between Light and Dark Site Theme"
          className="switch"
          type="checkbox"
          onChange={toggleTheme}
          checked={isChecked}
        />
        <span className="slider">
          <img
            src={themeContext.isDark ? moon : sun}
            alt={themeContext.isDark ? "Moon" : "Sun"}
          />
        </span>
      </ToggleStyles>
      <p>
        Built with <a href="https://gatsbyjs.org">Gatsby</a>
        <span> | </span>
        Hosted on <a href="https://netlify.com">Netlify</a>
      </p>
    </StyledFooter>
  )
}

export default Footer
