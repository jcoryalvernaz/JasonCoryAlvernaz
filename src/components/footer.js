import React from "react"
import styled from "styled-components"

import ToggleStyles from "../styles/ToggleStyles"
import heart from "../images/heart.svg"

const StyledFooter = styled.footer`
  padding: 2rem;
  background: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  display: grid;
  grid-template-columns: 1fr;
  border-top: 2px solid ${props => props.theme.black};
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
`

const Footer = ({ toggleTheme, isChecked }) => (
  <StyledFooter>
    © {new Date().getFullYear()}, Jason Cory Alvernaz
    <p>
      Made With <img className="heart" src={heart} alt="love heart" /> in Reno
    </p>
    <br />
    <ToggleStyles>
      <input
        aria-label="Change Site Theme"
        className="switch"
        type="checkbox"
        onChange={toggleTheme}
        checked={isChecked}
      />
      <span className="slider"></span>
    </ToggleStyles>
  </StyledFooter>
)

export default Footer
