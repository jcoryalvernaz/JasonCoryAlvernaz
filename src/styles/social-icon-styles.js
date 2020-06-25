import styled from 'styled-components'

const SocialIconStyles = styled.a`
  position: relative;
  display: inline-block;
  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  :hover,
  :focus {
    .icon {
      transform: translateY(-10%);
      filter: ${props =>
    props.theme.isDark
      ? 'drop-shadow(0px 6px 2px rgba(76, 42, 133, 1))'
      : 'drop-shadow(0px 6px 2px rgba(0, 0, 0, 0.2))'};
    }
  }
  .icon {
    width: 8rem;
    transition: 0.2s all ease-in;
  }
`

export default SocialIconStyles
