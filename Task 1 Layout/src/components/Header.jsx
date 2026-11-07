/* ==========================================================================
   Header
   My header shows the logo in the centre with the nav underneath.
   ========================================================================== */

import Nav from './Nav.jsx'
import logo from '../assets/logo.svg'
import './Header.css'

function Header({ links }) {
  return (
    <header className="header">
      {/* The logo links back to the home page */}
      <a href="#" aria-label="Erased Tapes home">
        <img className="header__logo" src={logo} alt="Erased Tapes logo" />
      </a>

      {/* I reuse my Nav component and give it a class for the header layout */}
      <Nav links={links} className="header__nav" />
    </header>
  )
}

export default Header
