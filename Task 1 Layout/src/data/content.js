/* ==========================================================================
   Page content
   I keep all my text and images here, separate from the components.
   That way my components only handle layout, and I can reuse one
   component (like Comment or Nav) by mapping over an array.
   The text comes from the provided assets/text-content.md.
   ========================================================================== */

// I import the images so Vite bundles them and gives me their file paths
import albumFeatured from '../assets/album-featured.jpg'
import album1 from '../assets/album-1.jpg'
import album2 from '../assets/album-2.jpg'
import album3 from '../assets/album-3.jpg'
import album4 from '../assets/album-4.jpg'
import authorPhoto from '../assets/author.jpg'
import facebookIcon from '../assets/facebook-icon.png'
import instagramIcon from '../assets/instagram-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'

/* My nav links, used by both the header and the footer */
export const navLinks = [
  { label: 'Our Blog', href: '#' },
  { label: 'Our Artists', href: '#' },
  { label: 'Our Story', href: '#' },
]

/* My social links, used by both the author section and the footer.
   I also use `name` as a CSS class (e.g. social-icon--twitter) to style one icon. */
export const socialLinks = [
  { name: 'facebook', label: 'Facebook', href: '#', icon: facebookIcon },
  { name: 'instagram', label: 'Instagram', href: '#', icon: instagramIcon },
  { name: 'twitter', label: 'X (Twitter)', href: '#', icon: twitterIcon },
]

/* The article: title, intro paragraph and the body sections */
export const article = {
  title: 'Erased Tapes:',
  subtitle: 'Exploring the Sonic Frontier',
  intro:
    'Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu scelerisque turpis posuere tempor? Leo condimentum himenaeos molestie elit; maximus iaculis proin nulla. Ullamcorper nibh cras conubia suscipit dapibus sagittis, facilisi habitant vivamus. Etiam fusce posuere himenaeos ipsum commodo sollicitudin himenaeos nec.',

  /* Each section is a heading followed by its paragraphs */
  sections: [
    {
      heading: 'Heading',
      paragraphs: [
        'Montes ridiculus mus tellus nunc vulputate. Cras facilisi congue et facilisis porttitor litora etiam praesent porttitor. Sollicitudin cubilia scelerisque diam taciti lacus. Dapibus penatibus augue dapibus sagittis; rhoncus accumsan. Accumsan urna et, ultrices placerat justo rutrum. Tristique mattis ante cras accumsan convallis phasellus fermentum magna. Rhoncus curabitur pharetra proin ante nam adipiscing accumsan hac. Rutrum efficitur nullam integer ut ex id. Pulvinar vel at vestibulum vivamus sed nascetur eget.',
        'Laoreet volutpat hendrerit est aliquam; fusce quam tempor. Nisi interdum praesent pellentesque non non blandit cubilia et. Aptent maximus vehicula nullam odio tempor. Placerat dis facilisis potenti iaculis, primis vivamus nec at magnis. Aadipiscing curabitur vestibulum imperdiet dolor primis. Inceptos penatibus inceptos eu habitasse aptent vehicula platea litora congue. Ultricies mauris fringilla rhoncus pharetra iaculis vitae. Venenatis himenaeos eget molestie dignissim consectetur tellus litora. Porta a iaculis mi primis rhoncus.',
        'Curae habitasse elementum amet nunc, natoque at. Tortor vel blandit sociosqu auctor aliquam maximus porta feugiat. Eros phasellus platea mauris condimentum natoque hendrerit tellus id. Ex imperdiet vitae maximus adipiscing neque quam tempor orci. Lobortis porta lacinia cubilia tellus vel placerat; facilisis mi euismod. Neque eu orci nulla penatibus elit nec.',
        'Parturient habitasse facilisis purus donec, enim platea maximus. Primis class varius augue sed class ultricies. Posuere curabitur tristique penatibus montes hac ac imperdiet. Risus per sociosqu, cursus leo condimentum ac fringilla. Nibh curabitur eros tempus nec; nam curae hendrerit. Mattis placerat maximus mollis praesent, eros adipiscing dui.',
      ],
    },
    {
      heading: 'Heading',
      paragraphs: [
        'Habitasse ornare fames facilisis montes pulvinar habitasse fringilla. Risus porta cursus duis vivamus quam adipiscing nec. Ante at posuere eget aptent natoque vivamus ante. Aenean enim dapibus viverra sem efficitur. Felis nam semper integer justo in. Facilisi augue urna torquent lacinia facilisi inceptos. Natoque varius feugiat massa scelerisque natoque, cras tempor inceptos.',
        'Amet ac leo, imperdiet hac litora auctor. Suscipit congue duis sociosqu auctor euismod vivamus urna diam. Nunc enim himenaeos litora facilisi, tincidunt torquent. Eros sapien laoreet duis, volutpat rutrum pulvinar. Natoque semper sapien aptent quis habitant aliquam condimentum luctus. Tempus pellentesque congue varius dapibus pharetra. Fermentum diam auctor bibendum rhoncus leo. Vestibulum tincidunt fames convallis ligula semper porttitor.',
        'Magnis maximus morbi, litora accumsan vivamus facilisi etiam pharetra. Platea congue orci sagittis purus scelerisque. Velit taciti maecenas praesent nam lobortis metus vehicula habitasse porttitor. Porta gravida placerat lobortis litora elit feugiat venenatis. Cras magna himenaeos consequat aliquet ad nec pharetra. Ligula eleifend imperdiet aptent primis placerat. Nec magnis tempus vulputate ipsum ad sagittis mus.',
      ],
    },
    {
      heading: 'Heading',
      paragraphs: [
        'Vulputate nullam tempus montes eu tellus integer adipiscing pulvinar. Pharetra eu luctus id a potenti. Pulvinar egestas conubia ante varius lobortis iaculis metus. Netus sem imperdiet hendrerit vehicula netus est gravida tortor. Nunc ridiculus per montes nulla, facilisis lacinia per leo. Hendrerit scelerisque nulla in suspendisse sit tortor sagittis. Suscipit dictumst ipsum laoreet cras egestas suscipit orci. Per molestie felis erat platea blandit commodo.',
        'Ad venenatis sapien habitant posuere donec porttitor vel nisi. Sodales laoreet donec diam rhoncus lectus euismod orci torquent curae. Fames rhoncus torquent sed convallis; potenti cras. Dictumst arcu libero nulla malesuada mi ridiculus platea. Interdum ullamcorper fringilla himenaeos mollis; in arcu pharetra massa. Nunc mauris taciti montes sapien molestie orci ac quis.',
      ],
    },
  ],
}

/* My album covers. The first one is shown large as the featured album. */
export const albums = [
  { src: albumFeatured, alt: 'Featured album cover: a striped, rainbow-coloured paper prism' },
  { src: album1, alt: 'Nils Frahm - All Encores album cover' },
  { src: album2, alt: 'Album cover: a white disc with a blue shape and dotted pattern' },
  { src: album3, alt: 'Nils Frahm - Encores 2 album cover' },
  { src: album4, alt: 'Album cover: a concrete hut in front of a misty Icelandic mountain' },
]

/* The author section: heading, short bio and photo */
export const author = {
  heading: 'The Author',
  bio: 'Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.',
  photo: authorPhoto,
  photoAlt: 'Portrait of the author',
}

/* Each comment is a username and the comment text */
export const comments = [
  {
    username: 'soundseeker92',
    text: "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?",
  },
  {
    username: 'Ted Baker',
    text: "I've been following the label for years—so glad someone's finally writing about their impact.",
  },
  {
    username: 'Queen_of_noise',
    text: 'I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling.',
  },
]

/* The copyright line shown in the footer */
export const copyright = 'Copyright © 2023 Erased Disks Ltd.'
