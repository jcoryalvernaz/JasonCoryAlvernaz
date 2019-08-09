import styled from "styled-components"

const ParagraphStyles = styled.p`
  max-width: 70rem;
  width: 100%;
  justify-self: center;
  font-size: 2rem;
  margin: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  line-height: 1.8;
  a {
    color: ${props => props.theme.black};
    border-bottom: 0.2rem solid ${props => props.theme.green};
  }
`

export default ParagraphStyles
