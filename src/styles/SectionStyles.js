import styled from "styled-components"

const SectionStyles = styled.section`
  margin-top: 8rem;
  margin-bottom: 10rem;
  position: relative;
  display: grid;
  .inner {
    position: relative;
    display: grid;
  }
  .inner h2 {
    text-align: center;
    justify-self: center;
    position: relative;
    font-size: 2.5rem;
    color: ${props => props.theme.black};
  }
  .inner p {
    color: ${props => props.theme.black};
    position: relative;
    display: grid;
    :before {
      content: "";
      height: 0.2rem;
      margin-bottom: 2rem;
      background: ${props => props.theme.orange};
      width: 100%;
      grid-column: 1 / -1;
    }
  }
`

export default SectionStyles
