import styled from "styled-components"

const ListStyles = styled.ul`
  max-width: 80rem;
  width: 100%;
  justify-self: center;
  margin-top: 3rem;
  padding: 1rem;
  list-style: none;
  li {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    border-top: 0.3rem solid ${props => props.theme.orange};
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  p {
    font-size: 2rem;
  }
  .featured-image {
    grid-column: 1 / span 1;
    grid-row: 1 / -1;
  }
  .title {
    color: ${props =>
      props.theme.isDark ? props.theme.blue : props.theme.purple};
    font-weight: bold;
    font-size: 2.5rem;
  }
  @media (max-width: 630px) {
    li {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
`

export default ListStyles
