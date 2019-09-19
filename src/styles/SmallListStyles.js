import styled from "styled-components"

const SmallListStyles = styled.ul`
  max-width: 80rem;
  width: 100%;
  justify-self: center;
  line-height: 1.8;
  font-size: 2rem;
  padding-right: 2rem;
  list-style-image: radial-gradient(
    ${props => props.theme.blue} 60%,
    ${props => props.theme.green}
  );
  li a {
    border-bottom: 0.2rem solid ${props => props.theme.green};
  }
`

export default SmallListStyles
