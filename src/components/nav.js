import React from "react"
import { Link } from "gatsby"

import NavStyles from "../styles/NavStyles"

const Nav = () => (
  <NavStyles>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/projects">Projects</Link>
  </NavStyles>
)

export default Nav
