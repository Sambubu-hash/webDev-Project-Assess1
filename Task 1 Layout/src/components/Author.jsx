/* ==========================================================================
   Author
   My author section: a short bio, a round photo and a column of
   social links.
   Props: heading, bio, photo, photoAlt, socials
   ========================================================================== */

import SocialIcons from './SocialIcons.jsx'
import './Author.css'

function Author({ heading, bio, photo, photoAlt, socials }) {
  return (
    <section className="author">
      {/* Heading and bio grouped together */}
      <div className="author__text">
        <h2 className="author__heading">{heading}</h2>
        <p className="author__bio">{bio}</p>
      </div>

      <img className="author__photo" src={photo} alt={photoAlt} />

      {/* I reuse SocialIcons here, stacked vertically */}
      <SocialIcons socials={socials} direction="column" />
    </section>
  )
}

export default Author
