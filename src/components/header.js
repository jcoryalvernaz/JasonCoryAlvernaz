import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Nav from "./nav"
import logo from "../images/JasonCoryAlvernaz.jpg"
import menu from "../images/hamburgerMenu.svg"

const StyledHeader = styled.header`
  background: ${props => props.theme.purple};
  margin-bottom: 1.45rem;
  border-bottom: 2px solid ${props => props.theme.black};
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-template-columns: 1fr 1fr;
  input[aria-expanded="true"] ~ ul {
    @media (max-width: 630px) {
      height: auto;
    }
  }
`

const Avatar = styled.img`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: -15rem;
  position: relative;
  width: 24rem;
  box-shadow: ${props => props.theme.bs};
  border-radius: 13rem;
  filter: ${props => (props.theme.isDark ? "sepia(20%) contrast(100%)" : "")};
  transition: all 0.8s ease-in-out;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    width: 9rem;
    border-radius: 6rem;
  }
  @media (max-width: 630px) {
    margin-bottom: -5rem;
  }
`

const MenuButton = styled.input`
  border-radius: 0;
  outline: none;
  display: none;
  max-width: 3rem;
  @media (max-width: 630px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end;
    display: block;
    margin: 1rem;
  }
`

const Header = () => {
  const toggleNav = e => {
    const expanded = e.target.getAttribute("aria-expanded") === "true" || false
    e.target.setAttribute("aria-expanded", !expanded)
  }
  return (
    <StyledHeader>
      <Avatar src={logo} alt="Jason Cory Alvernaz" />
      <MenuButton
        type="image"
        src={menu}
        aria-expanded="false"
        aria-label="menu"
        onClick={toggleNav}
      />
      <Nav />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
