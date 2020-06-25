import Credit from './Credit'
import { ObjectType } from 'types'
import PropTypes from 'prop-types'
import React from 'react'
import { SmallListStyles } from 'styles'

const propTypes = {
  credits: PropTypes.arrayOf(ObjectType).isRequired,
}

const Credits = ({
  credits,
}) => {
  return (
    <SmallListStyles>
      {credits.map(credit => (
        <Credit credit={credit} key={credit.id} />
      ))}
    </SmallListStyles>
  )
}

Credits.propTypes = propTypes

export default Credits
