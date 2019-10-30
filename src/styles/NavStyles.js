import styled from "styled-components"

const NavStyles = styled.ul`
  margin: 0;
  padding: 0 1rem 0 0;
  display: grid;
  grid-template-columns: repeat(4, 13rem);
  justify-self: end;
  justify-items: center;
  font-size: 2rem;
  li {
    list-style: none;
    align-self: flex-end;
    padding-bottom: 2rem;
  }
  a {
    padding: 1rem;
    position: relative;
    text-transform: uppercase;
    font-weight: 500;
    background: none;
    border: 0;
    color: ${props => props.theme.white};
    cursor: pointer;
    &:after {
      height: 2px;
      background: ${props => props.theme.green};
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      left: 50%;
      margin-top: 2.5rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 2rem);
      }
    }
  }
  @media (max-width: 630px) {
    height: 0;
    padding: 0;
    overflow: hidden;
    grid-template-columns: 1fr;
    justify-self: center;
    grid-column: 1 / -1;
  }
`

export default NavStyles
