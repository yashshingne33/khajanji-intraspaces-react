// src/data/site.js
// Global site configuration — name, nav, social, contact info.

export const siteInfo = {
  name:        'Khajanji infraspaces',
  studioName:  'H. Architects',
  tagline:     'Beyond Architecture. Creating Experiences.',
  description: 'An award-winning architecture studio based in Zürich, working across residential, commercial, and cultural typologies worldwide.',
  email:       'hello@khajanjiinfraspaces.com',
  phone:       '+41 44 123 45 67',
  address: {
    street: 'Bahnhofstrasse 42',
    city:   'Zürich',
    zip:    '8001',
    country:'Switzerland',
  },
  social: {
    instagram: 'https://instagram.com',
    linkedin:  'https://linkedin.com',
    behance:   'https://behance.net',
  },
}

export const navLinks = [
  { label: 'H.',            to: '/' },
  { label: 'About',         to: '/about' },
  { label: 'Portfolio',     to: '/portfolio' },
  {
    label: 'Services',
    to:    '/services',
    sub: [
      { label: 'Construction',    to: '/services/construction' },
      { label: 'Interior design', to: '/services/interior-design' },
      { label: 'Lighting design', to: '/services/lighting-design' },
    ]
  },
  { label: 'Media & Awards',to: '/media' },
]

// ── Static pages ─────────────────────────────────────────────────────────────

export const pages = {
  about: {
    slug:  'about',
    title: 'About the studio',
    content: `
      <p>H. Architects was founded in 2008 by Anna Hoffmann and Marco Senn with a single conviction: that architecture has the power to shape not just space, but experience, community, and the long arc of a place's identity.</p>
      <h2>The studio</h2>
      <p>We are a team of eighteen architects, landscape designers, and researchers based in Zürich, Switzerland. We work across scales — from intimate private residences to large-scale urban interventions — in over eighteen countries.</p>
      <p>Our process is rigorous and unhurried. We spend time with sites, with clients, and with the communities that will inhabit our buildings before we draw a single line. We believe the best architecture emerges from deep listening.</p>
      <h2>Awards & recognition</h2>
      <p>Our work has been recognised by the Aga Khan Award for Architecture, the Mies van der Rohe Award, and the Swiss Architecture Prize, among others. We have been published in Architectural Record, Domus, and El Croquis.</p>
    `,
  },
  portfolio: {
    slug:  'portfolio',
    title: 'Selected works',
    content: '<p>A selection of projects completed between 2010 and the present day.</p>',
  },
  services: {
    slug:  'services',
    title: 'What we do',
    content: `
      <p>We offer a full range of architectural services, from initial feasibility and concept design through to construction administration and post-occupancy evaluation.</p>
      <h2>Architecture</h2>
      <p>Complete architectural services for new buildings across residential, commercial, cultural, and mixed-use typologies.</p>
      <h2>Interior design</h2>
      <p>Integrated interior design that extends the architectural vision into the detail of materials, light, and furnishing.</p>
      <h2>Urban planning</h2>
      <p>Masterplanning and urban design for neighbourhoods, campuses, and public spaces.</p>
      <h2>Heritage & adaptive reuse</h2>
      <p>Conservation, restoration, and sensitive adaptation of historically significant buildings and landscapes.</p>
    `,
  },
  media: {
    slug:  'media',
    title: 'Media & Awards',
    content: `
      <p>We have received thirty-two awards over the course of our practice, and our work has been featured in the leading architecture and design publications worldwide.</p>
      <h2>Selected awards</h2>
      <p>Aga Khan Award for Architecture (2022), Mies van der Rohe Award shortlist (2021), Swiss Architecture Prize (2020, 2023), Architizer A+ Award (2019, 2022, 2024).</p>
      <h2>Press</h2>
      <p>Architectural Record, Domus, El Croquis, Wallpaper*, Dezeen, ArchDaily.</p>
    `,
  },
  contact: {
    slug:  'contact',
    title: 'Get in touch',
    content: '<p>We welcome enquiries from clients, collaborators, and journalists. Please reach out through the contact details below or via the form.</p>',
  },
}
