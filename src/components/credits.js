import Credit from './credit'
import PropTypes from 'prop-types'
import React from 'react'
import SmallList from 'styles/SmallList'

function Credits({ credits }) {
  return <SmallList>
    {credits.map(credit => (
      <Credit credit={credit} key={credit.id} />
    ))}
  </SmallList>
}

Credits.propTypes = {
  credits: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Credits
