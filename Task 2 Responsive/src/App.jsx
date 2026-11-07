/* ==========================================================================
   App
   My top-level component: the header, then the main container with one
   MovieCard per movie. I handle all the layout changes between devices
   in CSS.
   ========================================================================== */

import Header from './components/Header.jsx'
import MovieCard from './components/MovieCard.jsx'
import { genres, movies } from './data/movies.js'
import './App.css'

/* This picks which desktop layout each card gets, following the desktop
   wireframe: card 1 is featured, cards 2-3 are standard, the rest are wide.
   (On mobile and tablet all the cards look the same.) */
function getCardLayout(index) {
  if (index === 0) return 'featured'
  if (index < 3) return 'standard'
  return 'wide'
}

function App() {
  return (
    <>
      <Header genres={genres} />

      <main className="movie-list">
        {/* I loop over the movies, spread each one's data into a MovieCard
            and pass in its layout */}
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} {...movie} layout={getCardLayout(index)} />
        ))}
      </main>
    </>
  )
}

export default App
