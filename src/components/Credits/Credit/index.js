import { ObjectType } from 'types'
import React from 'react'

const propTypes = {
  credit: ObjectType.isRequired,
}

const Credit = ({
  credit,
}) => {
  return (
    <li key={credit.id}>
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
  )
}

Credit.propTypes = propTypes

export default Credit
