/* ==========================================================================
   Page data
   I keep my movie and genre data here, separate from the components,
   so I can build the page by mapping over these arrays.
   The text comes from the provided assets/text-content.md.
   ========================================================================== */

// I import the posters so Vite bundles them and gives me their file paths
import rogerRabbit from '../assets/roger-rabbit.jpg'
import hook from '../assets/hook.jpg'
import laLaLand from '../assets/la-la-land.jpg'
import hiddenFigures from '../assets/hidden-figures.jpg'
import palmSprings from '../assets/palm-springs.jpg'
import barbie from '../assets/barbie.jpg'

/* The genre links in my header */
export const genres = ['Action', 'Comedy', 'Romance', 'Drama']

/* One object per movie, in the same order as the text file.
   The id gives React a unique key for each card. */
export const movies = [
  {
    id: 'roger-rabbit',
    title: 'Who Framed Roger Rabbit',
    year: 1988,
    poster: rogerRabbit,
    description:
      'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
  },
  {
    id: 'hook',
    title: 'Hook',
    year: 1991,
    poster: hook,
    description:
      'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
  },
  {
    id: 'la-la-land',
    title: 'La La Land',
    year: 2016,
    poster: laLaLand,
    description:
      'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
  },
  {
    id: 'hidden-figures',
    title: 'Hidden Figures',
    year: 2016,
    poster: hiddenFigures,
    description:
      "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
  {
    id: 'palm-springs',
    title: 'Palm Springs',
    year: 2020,
    poster: palmSprings,
    description:
      'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
  },
  {
    id: 'barbie',
    title: 'Barbie',
    year: 2023,
    poster: barbie,
    description:
      'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
  },
]
