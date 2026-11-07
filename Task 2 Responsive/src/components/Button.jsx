/* ==========================================================================
   Button
   I made one reusable button for SEARCH and every WATCH NOW, so they
   all share the same style.
   Props:
     children  - the text inside the button
     className - optional extra class so the parent can position it
   ========================================================================== */

import './Button.css'

function Button({ children, className = '' }) {
  return (
    // type="button" stops it acting like a form submit button
    <button type="button" className={`button ${className}`}>
      {children}
    </button>
  )
}

export default Button
