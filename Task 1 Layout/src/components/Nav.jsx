/* ==========================================================================
   Nav
   I made the nav its own component so I can reuse it in the header and
   the footer instead of writing the links twice.
   Props:
     links     - array of { label, href }
     className - optional extra class so each parent can style it differently
   ========================================================================== */

import './Nav.css'

function Nav({ links, className = '' }) {
  return (
    <nav className={`nav ${className}`}>
      <ul className="nav__list">
        {/* I loop over the links array to create one list item per link */}
        {links.map((link) => (
          <li key={link.label}>
            <a className="nav__link" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
