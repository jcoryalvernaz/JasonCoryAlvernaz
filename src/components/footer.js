import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 2px solid ${props => props.theme.black};
  align-items: center;
  a {
    color: ${props => props.theme.white};
  }
  p {
    justify-self: end;
  }
`

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, Jason Cory Alvernaz
    <p>Made With love in Reno</p>
  </StyledFooter>
)

export default Footer
