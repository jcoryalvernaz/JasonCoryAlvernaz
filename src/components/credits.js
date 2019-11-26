import React from "react"

import Credit from "./credit"
import SmallList from "../styles/SmallList"

const Credits = ({ credits }) => (
  <SmallList>
    {credits.map(credit => (
      <Credit key={credit.id} credit={credit} />
    ))}
  </SmallList>
)

export default Credits
