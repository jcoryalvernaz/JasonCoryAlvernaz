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
    grid-template-rows: repeat(3, minmax(min-content, max-content));
    border-top: 0.3rem solid ${props => props.theme.orange};
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  p {
    line-height: 1.8;
    font-size: 2rem;
  }
  .featured-image {
    grid-column: 1 / span 1;
    grid-row: 1 / -1;
    display: grid;
    box-shadow: ${props => props.theme.bs};
  }
  .featured-image img {
    border-radius: 4px;
    border: 0.1rem solid ${props => props.theme.green};
  }
  .title {
    color: ${props =>
      props.theme.isDark ? props.theme.blue : props.theme.purple};
    font-weight: bold;
    font-size: 2.5rem;
  }
  .tag {
    font-size: 1.5rem;
    display: inline-block;
    margin-right: 1rem;
    background: ${props => props.theme.green + "4D"};
    color: ${props =>
      props.theme.isDark ? props.theme.blue : props.theme.purple};
    border-radius: 2px;
    padding: 0 1rem;
  }
  @media (max-width: 630px) {
    li {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
`

export default ListStyles
