import styled from "styled-components"

const SectionStyles = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
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
    margin-bottom: 0;
    border-bottom: 0.2rem solid ${props => props.theme.orange};
    padding-bottom: 0.5rem;
  }
  .inner > p {
    color: ${props => props.theme.black};
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
  .icon {
    transition: 0.4s transform ease-in-out;
    :hover {
      filter: invert(0.45) sepia(1) saturate(6) hue-rotate(140deg);
      transform: scale(1.4);
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
  li > h2 {
    font-size: 2.5rem;
  }
`

export default SectionStyles
