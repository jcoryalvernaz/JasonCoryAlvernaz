import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `#4c2a85`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
