import React from "react"

export const SocialLinks = ({ links }) => {
  return (
    <div>
      {links.map((link, i) => {
        return (
          <a key={i} target="_blank" rel="noopener noreferrer" href={link.url}>
            <img src={link.logo} alt={link.text} />
          </a>
        )
      })}
    </div>
  )
}
