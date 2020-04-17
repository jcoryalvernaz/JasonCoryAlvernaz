import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  font-size: 6rem;
  padding: 2rem;
  justify-self: center;
  display: grid;
  text-align: center;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.2);
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
`

function PageHeader({ children }) {
  return (
    <Header>{children}</Header>
  )
}

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageHeader
