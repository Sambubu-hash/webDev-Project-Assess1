/* ==========================================================================
   SocialIcons
   My reusable list of social links. I use it in the author section
   (as a column) and in the footer (as a row).
   Props:
     socials   - array of { name, label, href, icon }
     direction - 'row' (default) or 'column'
   ========================================================================== */

import './SocialIcons.css'

function SocialIcons({ socials, direction = 'row' }) {
  return (
    // The direction prop becomes a class, which switches the layout in CSS
    <ul className={`social-icons social-icons--${direction}`}>
      {socials.map((social) => (
        <li key={social.name}>
          {/* aria-label gives screen readers a name, since the link is only an image */}
          <a
            className={`social-icon social-icon--${social.name}`}
            href={social.href}
            aria-label={social.label}
          >
            {/* Empty alt because the link already has a label */}
            <img className="social-icon__image" src={social.icon} alt="" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialIcons
