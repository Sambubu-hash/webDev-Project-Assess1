/* ==========================================================================
   AlbumGrid
   My grid of album covers. The first album is the featured one and takes
   up a 2x2 block; the other four fill the rest of the grid.
   Props: albums - array of { src, alt }
   ========================================================================== */

import './AlbumGrid.css'

function AlbumGrid({ albums }) {
  return (
    <section className="album-grid" aria-label="Featured albums">
      {/* I loop over the albums and add the "featured" class to the first one only */}
      {albums.map((album, index) => (
        <figure
          key={album.src}
          className={`album-grid__item ${index === 0 ? 'album-grid__item--featured' : ''}`}
        >
          {/* loading="lazy" means images only load when they're near the screen */}
          <img className="album-grid__image" src={album.src} alt={album.alt} loading="lazy" />
        </figure>
      ))}
    </section>
  )
}

export default AlbumGrid
