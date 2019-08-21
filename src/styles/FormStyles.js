import styled from "styled-components"

const FormStyles = styled.form`
  max-width: 80rem;
  width: 100%;
  padding: 2rem 1rem;
  margin-top: 3rem;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  :before {
    content: "";
    height: 0.3rem;
    background: ${props => props.theme.orange};
    width: 100%;
    grid-column: 1 / -1;
  }
  > * {
    font-family: inherit;
    transition: all 0.2s ease-in;
  }
  input,
  textarea {
    border-radius: 4px;
    background: transparent;
    border: 0.1rem solid
      ${props => (props.theme.isDark ? props.theme.blue : props.theme.purple)};
    color: ${props => props.theme.black};
    padding-left: 1rem;
    outline: none;
    font-size: 2rem;
    box-shadow: none;
    ::placeholder {
      color: ${props => props.theme.formTextColor};
    }
  }
  input {
    height: 4rem;
  }
  textarea {
    height: 8rem;
    padding-top: 1rem;
    resize: vertical;
  }
  .subject,
  .message {
    grid-column: 1 / -1;
  }
  button {
    color: ${props => props.theme.textColor};
    background: transparent;
    border: 0.2rem solid ${props => props.theme.green};
    border-radius: 3rem;
    padding: 1.5rem;
    margin-top: 1rem;
    max-width: 20rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
  }
  button:hover {
    filter: brightness(85%);
  }
  @media (max-width: 500px) {
    margin: 10px;
    > * {
      grid-column: 1 / -1;
    }
    button {
      max-width: 100%;
    }
  }
`

export default FormStyles
