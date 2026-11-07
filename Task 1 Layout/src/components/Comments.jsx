/* ==========================================================================
   Comments
   My comments section: a heading and a list built from my Comment component.
   Props: comments - array of { username, text }
   ========================================================================== */

import Comment from './Comment.jsx'
import './Comments.css'

function Comments({ comments }) {
  return (
    <section className="comments">
      <h2 className="comments__heading">Comments</h2>
      <ul className="comments__list">
        {/* One Comment component per item in the array */}
        {comments.map((comment) => (
          <Comment key={comment.username} {...comment} />
        ))}
      </ul>
    </section>
  )
}

export default Comments
