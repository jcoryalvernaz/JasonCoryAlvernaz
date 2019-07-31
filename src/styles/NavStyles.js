import styled from "styled-components"

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 13rem);
  justify-self: end;
  justify-items: center;
  font-size: 2rem;
  a {
    padding: 1rem 3rem;
    display: grid;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    &:after {
      height: 2px;
      background: ${props => props.theme.green};
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 3rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
`

export default NavStyles
