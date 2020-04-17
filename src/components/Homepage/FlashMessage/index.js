import styled from 'styled-components'
import useInterval from 'react-useinterval'
import React, {
  useState,
} from 'react'

const StyledMessage = styled.p`
  font-size: 3rem;
  margin: 0;
  padding: 2rem;
  max-width: 70rem;
  width: 100%;
  justify-self: center;
  line-height: 1.8;
`

const StyledSpan = styled.span`
  display: grid;
  transform: rotate(-1deg);
  margin-left: 1rem;
  width: fit-content;
  color: ${props => props.theme.black};
  &:after {
    content: "";
    height: 3.5rem;
    background: ${props => props.theme.orange};
    margin-top: -4.2rem;
    z-index: -1;
    width: 105%;
    justify-self: center;
    transform: skew(4deg);
    box-shadow: ${props => props.theme.bs};
  }
  @media (max-width: 388px) {
    margin-left: 0;
  }
`

const FlashSpan = styled.span`
  display: inline-block;
  width: 25rem;
  text-align: center;
`

const FlashMessage = () => {
  const [titles] = useState([
    'Developer!',
    'Teacher!',
    'Entrepreneur!',
    'Designer!',
  ])
  const [currentTitle, setCurrentTitle] = useState(titles[0])

  const incrementTitle = index => {
    if (index < titles.length - 1) {
      setCurrentTitle(titles[index + 1])
    } else {
      setCurrentTitle(titles[0])
    }
  }

  useInterval(() => {
    incrementTitle(titles.indexOf(currentTitle))
  }, 1000)

  return (
    <StyledMessage>
      I am a{' '}
      <FlashSpan>
        <StyledSpan>{currentTitle}</StyledSpan>
      </FlashSpan>{' '}
    </StyledMessage>
  )
}

export default FlashMessage
