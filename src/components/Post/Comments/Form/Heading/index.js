import { FormHeadingStyles } from 'styles'
import { NodeType } from 'types'
import React from 'react'

const propTypes = {
  children: NodeType.isRequired,
}

const Heading = ({
  children,
}) => {
  return (
    <FormHeadingStyles>
      {children}
    </FormHeadingStyles>
  )
}

Heading.propTypes = propTypes

export default Heading
