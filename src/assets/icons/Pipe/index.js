import React from 'react'
import styled from 'styled-components'

const StyledPipe = styled.span`
  color: ${props =>
    props.theme.isDark ? props.theme.green : props.theme.blue};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-weight: bold;
`

const Pipe = () => {
  return (
    <StyledPipe> | </StyledPipe>
  )
}

export default Pipe
