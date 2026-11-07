/* ==========================================================================
   Comment
   A single comment: I show the username in bold above the text.
   Its styles live in Comments.css, together with the list.
   Props: username, text
   ========================================================================== */

function Comment({ username, text }) {
  return (
    <li className="comment">
      <p className="comment__username">{username}</p>
      <p className="comment__text">{text}</p>
    </li>
  )
}

export default Comment
