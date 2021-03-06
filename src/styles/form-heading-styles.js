import styled from 'styled-components'

const FormHeadingStyles = styled.h2`
  display: grid;
  text-align: center;
  justify-self: center;
  position: relative;
  margin: 0 2rem;
  padding: 1rem;
  font-size: 2.5rem;
  color: ${props => props.theme.white};
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: ${props => props.theme.bs};
  transform: rotate(-2deg);
  background-color: ${props => props.theme.green};
`

export default FormHeadingStyles
