import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Nav from "./nav"
import logo from "../images/JasonCoryCircle.png"

const StyledHeader = styled.header`
  background: ${props => props.theme.purple};
  margin-bottom: 1.45rem;
  border-bottom: 2px solid ${props => props.theme.black};
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Avatar = styled.img`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: -15rem;
  position: relative;
  width: 24rem;
  box-shadow: ${props => props.theme.bs};
  border-bottom: 1px solid ${props => props.theme.black};
  border-radius: 13rem;
  transition: all 1s ease-in-out;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    width: 9rem;
    border-radius: 6rem;
  }
`

const Header = () => (
  <StyledHeader>
    <Avatar src={logo} alt="Jason Cory Alvernaz" />
    <Nav />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
