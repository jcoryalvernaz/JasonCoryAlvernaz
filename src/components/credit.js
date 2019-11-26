import React from "react"

const Credit = ({ credit }) => (
  <li key={credit.id}>
    "
    <a target="_blank" rel="noopener noreferrer" href={credit.link}>
      {credit.icon}
    </a>
    " icon by {credit.author} from{" "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://thenounproject.com"
    >
      the Noun Project.
    </a>
  </li>
)

export default Credit
