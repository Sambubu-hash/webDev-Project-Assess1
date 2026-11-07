/* ==========================================================================
   Header
   My header: the watch.it logo, the genre links (hidden on mobile) and
   the SEARCH button.
   Props: genres - array of genre names
   ========================================================================== */

import Button from './Button.jsx'
import './Header.css'

function Header({ genres }) {
  return (
    <header className="header">
      {/* The logo is the page's main heading. I wrapped ".it" in a span
          so I can colour it teal. */}
      <h1 className="header__logo">
        <a href="#">
          watch<span className="header__logo-accent">.it</span>
        </a>
      </h1>

      {/* One link per genre, built from the genres array */}
      <nav className="header__nav" aria-label="Genres">
        <ul className="header__nav-list">
          {genres.map((genre) => (
            <li key={genre}>
              <a className="header__nav-link" href="#">
                {genre}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* I reuse my Button component for the search button */}
      <Button className="header__search">Search</Button>
    </header>
  )
}

export default Header
