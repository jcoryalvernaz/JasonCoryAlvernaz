import styled from "styled-components"

const ToggleStyles = styled.label`
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 3rem;
  align-self: flex-end;
  margin-bottom: 1.5rem;
  img {
    margin-top: 0.5rem;
    margin-left: ${props => (props.theme.isDark ? "0.5rem" : "0")};
    margin-right: ${props => (props.theme.isDark ? "0" : "0.5rem")};
    justify-self: ${props => (props.theme.isDark ? "" : "flex-end")};
    height: 2rem;
  }
  .switch {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    display: grid;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.green};
    transition: 0.4s;
    border-radius: 3rem;
    &:before {
      position: absolute;
      content: "";
      height: 2rem;
      width: 2rem;
      left: 0.5rem;
      bottom: 0.5rem;
      background: ${props => props.theme.white};
      transition: 0.4s;
      border-radius: 50%;
    }
  }
  .switch:checked + .slider {
    background: ${props => props.theme.blue};
  }
  .switch:checked + .slider:before {
    transform: translateX(3rem);
  }
`

export default ToggleStyles
