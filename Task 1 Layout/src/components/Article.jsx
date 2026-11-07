/* ==========================================================================
   Article
   My main blog post: the big title, a larger intro paragraph, then the
   body text flowing across three columns.
   Props: title, subtitle, intro, sections (array of { heading, paragraphs })
   ========================================================================== */

import './Article.css'

function Article({ title, subtitle, intro, sections }) {
  return (
    <article className="article">
      {/* I put the subtitle in a span inside the h1 so it's one heading,
          but I can style it on its own line at a smaller size */}
      <h1 className="article__title">
        {title}
        <span className="article__subtitle">{subtitle}</span>
      </h1>

      {/* The intro paragraph, styled bigger than the rest */}
      <p className="article__intro">{intro}</p>

      {/* The body text: CSS splits this into three columns */}
      <div className="article__columns">
        {/* One <section> per heading, each with its own paragraphs */}
        {sections.map((section, index) => (
          <section className="article__section" key={index}>
            <h2 className="article__heading">{section.heading}</h2>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p className="article__paragraph" key={pIndex}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  )
}

export default Article
