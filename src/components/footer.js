import PropTypes from 'prop-types'
import ToggleStyles from 'styles/ToggleStyles'
import heart from 'assets/icons/heart.svg'
import moon from 'assets/icons/moon.svg'
import sun from 'assets/icons/sun.svg'
import React, {
  useContext,
} from 'react'
import styled, {
  ThemeContext,
} from 'styled-components'

const StyledFooter = styled.footer`
  margin-top: 10rem;
  padding: 2rem;
  background: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid ${props => props.theme.borderColor};
  justify-items: center;
  a {
    color: ${props => props.theme.white};
  }
  .heart {
    margin-bottom: -0.2rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    height: 1.5rem;
  }
  .pipe {
    color: ${props =>
    props.theme.isDark ? props.theme.green : props.theme.blue};
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-weight: bold;
  }
`

function Footer({ toggleTheme, isChecked }) {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Jason Cory Alvernaz
      <p>
        Made With <img alt="love heart" className="heart" src={heart} /> in Reno
      </p>
      <br />
      <ToggleStyles>
        <input
          aria-label="Change Between Light and Dark Site Theme"
          checked={isChecked}
          className="switch"
          onChange={toggleTheme}
          type="checkbox"
        />
        <span className="slider">
          <img
            alt={themeContext.isDark ? 'Moon' : 'Sun'}
            src={themeContext.isDark ? moon : sun}
          />
        </span>
      </ToggleStyles>
      <p>
        Built with <a href="https://gatsbyjs.org">Gatsby</a>
        <span className="pipe"> | </span>
        Hosted on <a href="https://netlify.com">Netlify</a>
      </p>
    </StyledFooter>
  )
}

Footer.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Footer
