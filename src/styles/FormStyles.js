import styled from "styled-components"

const FormStyles = styled.form`
  max-width: 80rem;
  width: 100%;
  padding: 2rem 1rem;
  margin-top: 3rem;
  border-top: 0.5rem solid ${props => props.theme.blue};
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  > * {
    font-family: inherit;
    transition: all 0.2s ease-in;
  }
  input,
  textarea {
    border-radius: 4px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.purple};
    color: ${props => props.theme.black};
    padding-left: 1rem;
    outline: none;
    font-size: 2rem;
    box-shadow: none;
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
    height: 4rem;
    background: ${props => props.theme.purple};
    color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.black};
    border-radius: 2rem;
    margin-top: 1rem;
    max-width: 15rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    box-shadow: -3px 4px 0 rgba(0, 0, 0, 0.2);
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
