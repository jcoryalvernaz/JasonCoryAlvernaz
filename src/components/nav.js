import React from "react"
import { Link } from "gatsby"

import NavStyles from "../styles/NavStyles"

const Nav = () => (
  <NavStyles>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/blog">Blog</Link>
    </li>
    <li>
      <Link to="/projects">Projects</Link>
    </li>
  </NavStyles>
)

export default Nav
