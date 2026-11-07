/* ==========================================================================
   Footer
   My full-width dark footer with the nav, the copyright line and the
   social links. It reuses my Nav and SocialIcons components.
   Props: links, socials, copyright
   ========================================================================== */

import Nav from './Nav.jsx'
import SocialIcons from './SocialIcons.jsx'
import './Footer.css'

function Footer({ links, socials, copyright }) {
  return (
    <footer className="footer">
      {/* Same Nav as the header, with a footer class so it spreads wider */}
      <Nav links={links} className="footer__nav" />
      <p className="footer__copyright">{copyright}</p>
      {/* Same SocialIcons as the author section, but in a row */}
      <SocialIcons socials={socials} direction="row" />
    </footer>
  )
}

export default Footer
