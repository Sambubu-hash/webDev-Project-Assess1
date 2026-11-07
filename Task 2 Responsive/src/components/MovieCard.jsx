/* ==========================================================================
   MovieCard
   One movie: poster, title, description and a WATCH NOW button.
   I use the same markup for every card. The layout prop just adds a
   class, and that class only changes the arrangement on desktop.
   Props:
     title, year, poster, description - the movie's data
     layout - 'standard' | 'featured' | 'wide'
   ========================================================================== */

import Button from './Button.jsx'
import './MovieCard.css'

function MovieCard({ title, year, poster, description, layout = 'standard' }) {
  return (
    // The layout prop becomes a modifier class, e.g. movie-card--featured
    <article className={`movie-card movie-card--${layout}`}>
      <img className="movie-card__poster" src={poster} alt={`${title} poster`} loading="lazy" />

      {/* I group the title and description so they share one grid area */}
      <div className="movie-card__info">
        <h2 className="movie-card__title">
          {title} <span className="movie-card__year">({year})</span>
        </h2>
        <p className="movie-card__description">{description}</p>
      </div>

      {/* I reuse my Button component here */}
      <Button className="movie-card__button">Watch now</Button>
    </article>
  )
}

export default MovieCard
