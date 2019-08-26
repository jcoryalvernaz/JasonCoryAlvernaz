import styled from "styled-components"

const FormStyles = styled.form`
  max-width: 80rem;
  width: 100%;
  padding: 5rem 1rem;
  margin-top: 3rem;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  :before {
    content: "";
    height: 0.2rem;
    background: ${props => props.theme.orange};
    position: relative;
    width: 100%;
    grid-column: 1 / -1;
  }
  > * {
    font-family: inherit;
    transition: all 0.2s ease-in;
  }
  input,
  textarea {
    position: relative;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.15);
    border: 0.1rem solid ${props => props.theme.green};
    color: ${props => props.theme.white};
    padding-left: 1rem;
    outline: none;
    font-size: 2rem;
    box-shadow: none;
    ::placeholder {
      color: ${props => props.theme.white};
    }
    :hover,
    :focus {
      border-color: ${props => props.theme.orange};
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
    position: relative;
    color: ${props => props.theme.white};
    background: transparent;
    border: 0.3rem solid ${props => props.theme.green};
    border-radius: 3rem;
    padding: 1.5rem;
    margin-top: 1rem;
    max-width: 20rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    :hover,
    :focus {
      transform: translateY(-3%);
      box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.1);
      filter: brightness(95%);
    }
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
