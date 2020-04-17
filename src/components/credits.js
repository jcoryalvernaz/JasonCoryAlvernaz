import Credit from './credit'
import { ObjectType } from 'types'
import PropTypes from 'prop-types'
import React from 'react'
import SmallList from 'styles/SmallList'

const propTypes = {
  credits: PropTypes.arrayOf(ObjectType).isRequired,
}

const Credits = ({
  credits,
}) => {
  return (
    <SmallList>
      {credits.map(credit => (
        <Credit credit={credit} key={credit.id} />
      ))}
    </SmallList>
  )
}

Credits.propTypes = propTypes

export default Credits
