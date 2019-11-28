import React from "react"
import PropTypes from "prop-types"

import Credit from "./credit"
import SmallList from "../styles/SmallList"

const Credits = ({ credits }) => (
  <SmallList>
    {credits.map(credit => (
      <Credit key={credit.id} credit={credit} />
    ))}
  </SmallList>
)

Credits.propTypes = {
  credits: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Credits
