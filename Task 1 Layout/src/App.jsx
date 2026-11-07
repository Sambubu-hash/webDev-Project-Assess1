/* ==========================================================================
   App
   My top-level component. It builds the page from top to bottom and passes
   each section the data it needs as props.
   ========================================================================== */

import Header from './components/Header.jsx'
import Article from './components/Article.jsx'
import AlbumGrid from './components/AlbumGrid.jsx'
import Author from './components/Author.jsx'
import Comments from './components/Comments.jsx'
import Footer from './components/Footer.jsx'
import { albums, article, author, comments, copyright, navLinks, socialLinks } from './data/content.js'
import './App.css'

function App() {
  return (
    <>
      {/* Logo and navigation at the top */}
      <Header links={navLinks} />

      {/* My white content column, centred on the grey page */}
      <main className="content">
        {/* I spread the article object so each property becomes its own prop */}
        <Article {...article} />
        <AlbumGrid albums={albums} />
        <Author {...author} socials={socialLinks} />
        <Comments comments={comments} />
      </main>

      {/* The footer reuses the same nav links and social links as above */}
      <Footer links={navLinks} socials={socialLinks} copyright={copyright} />
    </>
  )
}

export default App
