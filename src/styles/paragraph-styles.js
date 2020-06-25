import styled from 'styled-components'

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
    border-bottom: 0.2rem solid ${props => props.theme.green};
    background-size: 100% 200%;
    background-image: linear-gradient(
      to top,
      ${props => props.theme.green + '4D'} 50%,
      transparent 50%
    );
    transition: background-position 0.5s;
    :hover {
      background-position: 0 80%;
    }
  }
`

export default ParagraphStyles
