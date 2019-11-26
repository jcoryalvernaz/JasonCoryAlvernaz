import styled from "styled-components"

const PostNavigationStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem;
  span {
    color: ${props =>
      props.theme.isDark ? props.theme.blue : props.theme.purple};
    font-size: 2.5rem;
  }
  h4 {
    margin-bottom: 1rem;
  }
  .arrow {
    fill: ${props =>
      props.theme.isDark ? props.theme.blue : props.theme.purple};
    height: 2.5rem;
    width: 2.5rem;
    transition: transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .prev {
    grid-column: 1 / span 1;
    justify-self: start;
    &:hover,
    &:focus {
      .arrow {
        transform: translateX(-1rem);
      }
    }
  }
  .next {
    text-align: right;
    grid-column: span 1 / -1;
    justify-self: flex-end;
    &:hover,
    &:focus {
      .arrow {
        transform: translateX(1rem);
      }
    }
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`

export default PostNavigationStyles
