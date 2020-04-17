import Nav from './nav'
import logo from 'assets/images/JasonCoryAlvernaz.jpg'
import menu from 'assets/icons/hamburgerMenu.svg'
import styled from 'styled-components'
import React, {
  useCallback,
  useState,
} from 'react'

const StyledHeader = styled.header`
  background: ${props => props.theme.purple};
  margin-bottom: 1.45rem;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  input[aria-expanded="true"] ~ ul {
    @media (max-width: 630px) {
      height: auto;
    }
  }
`

const Avatar = styled.img`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: -12rem;
  position: relative;
  width: 24rem;
  box-shadow: ${props => props.theme.bs};
  border-radius: 50%;
  filter: contrast(120%) brightness(0.9);
  transition: all 0.8s ease-in-out;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    width: 9rem;
  }
  @media (max-width: 630px) {
    margin-bottom: -3rem;
  }
`

const MenuButton = styled.input`
  border-radius: 0;
  outline: none;
  display: none;
  max-width: 3rem;
  align-self: center;
  @media (max-width: 630px) {
    grid-column: span 1 / -1;
    grid-row: span 1 / -1;
    justify-self: end;
    display: block;
    margin: 1rem;
  }
`

function Header() {
  const [expanded, setExpanded] = useState(false)

  const toggleNav = useCallback(
    () => {
      setExpanded(!expanded)
    },
    [setExpanded]
  )

  return (
    <StyledHeader>
      <Avatar alt="Jason Cory Alvernaz" src={logo} />
      <MenuButton
        aria-expanded={expanded}
        aria-label="menu"
        onClick={toggleNav}
        src={menu}
        type="image"
      />
      <Nav />
    </StyledHeader>
  )
}

export default Header
