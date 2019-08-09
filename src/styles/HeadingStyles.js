import styled from "styled-components"

const HeadingStyles = styled.h1`
  font-size: 6rem;
  padding: 2rem;
  justify-self: center;
  display: grid;
  :after {
    content: "";
    height: 0.5rem;
    margin-top: 1rem;
    background: ${props => props.theme.blue};
    width: 100%;
    box-shadow: ${props => props.theme.bs};
  }
`
export default HeadingStyles
