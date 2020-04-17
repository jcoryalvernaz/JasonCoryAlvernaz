/* eslint-disable */
import PropTypes from 'prop-types'
import React from 'react'

function Credit({ credit }) {
  return <li key={credit.id}>
    &quot;
    <a href={credit.link} rel="noopener noreferrer" target="_blank">
      {credit.icon}
    </a>
    &quot; icon by {credit.author} from{' '}
    <a
      href="https://thenounproject.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      the Noun Project.
    </a>
  </li>
}

Credit.propTypes = {
  credit: PropTypes.object.isRequired,
}

export default Credit
