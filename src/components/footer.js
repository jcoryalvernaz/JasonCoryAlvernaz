import React from "react"
import styled from "styled-components"

import hexagons from "../images/hexagons.svg"
import heart from "../images/heart.svg"

const StyledFooter = styled.footer`
  padding: 2rem;
  background: ${props => props.theme.purple};
  background-image: url(${hexagons});
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

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, Jason Cory Alvernaz
    <p>
      Made With <img className="heart" src={heart} alt="love heart" /> in Reno
    </p>
  </StyledFooter>
)

export default Footer
