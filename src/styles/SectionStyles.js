import styled from "styled-components"

const SectionStyles = styled.section`
  margin-top: 8rem;
  margin-bottom: 20rem;
  position: relative;
  display: grid;
  .inner {
    margin-top: 5rem;
    margin-bottom: 5rem;
    position: relative;
    display: grid;
  }
  .inner > h2 {
    text-align: center;
    justify-self: center;
    position: relative;
    font-size: 2.5rem;
    color: ${props => props.theme.black};
  }
  .inner > p {
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
  .values {
    list-style: none;
    display: grid;
    justify-self: center;
    text-align: center;
    grid-gap: 10rem;
    padding: 0;
    color: ${props => props.theme.black};
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
  li {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  li > p {
    font-size: 2rem;
    line-height: 1.8;
  }
  li > h3 {
    font-size: 2.5rem;
  }
`

export default SectionStyles
