import styled from "styled-components"

const PostStyles = styled.article`
  max-width: ${props => props.theme.maxWidth};
  justify-self: center;
  margin: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  display: grid;
  grid-gap: 1rem 5rem;
  grid-template-columns: 3fr 12fr 5fr;
  > * {
    grid-column: 2 / -2;
  }
  img {
    width: 100%;
  }
  figure {
    margin: 0;
    grid-column: 1 / -1;
  }
  figcaption {
    font-size: 1rem;
  }
  blockquote {
    grid-column: 1 / -1;
    border-bottom: 0.2rem solid ${props => props.theme.orange};
  }
  blockquote > p {
    font-size: 5rem;
    font-style: italic;
    text-align: center;
    margin: 0;
    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }
  a {
    border-bottom: 0.2rem solid ${props => props.theme.green};
  }
  p {
    font-size: 2rem;
    line-height: 1.8;
  }
  h1 {
    font-size: 6rem;
    margin-left: 1rem;
    margin-right: 1rem;
    justify-self: center;
    text-align: center;
    grid-column: 1 / -1;
    display: grid;
    text-shadow: -2px 2px 3px rgba(0, 0, 0, 0.1);
    :after {
      content: "";
      height: 0.5rem;
      margin-top: 1rem;
      background: ${props => props.theme.blue};
      width: 100%;
      box-shadow: ${props => props.theme.bs};
    }
    @media (max-width: 500px) {
      font-size: 4rem;
    }
  }
  pre {
    background: ${props => props.theme.green + "4D"};
    padding: 1rem;
    border-radius: 2px;
  }
  pre code {
    background: none;
  }
  code {
    font-size: 1.5rem;
    display: inline-block;
    background: ${props => props.theme.green + "4D"};
    color: ${props =>
      props.theme.isDark ? props.theme.blue : props.theme.purple};
    border-radius: 2px;
    padding: 0 1rem;
  }
  .tip {
    background: ${props => props.theme.green + "4D"};
    padding: 1rem;
    grid-row: span 5;
    align-self: flex-start;
    margin: 3rem 0;
  }
  .tip-left {
    grid-column: 1 / span 1;
    text-align: right;
    border-right: 1rem solid ${props => props.theme.green};
  }
  .tip-right {
    grid-column: span 1 / -1;
    border-left: 1rem solid ${props => props.theme.green};
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
    > * {
      grid-column: 1 / -1;
    }
  }
`

export default PostStyles
