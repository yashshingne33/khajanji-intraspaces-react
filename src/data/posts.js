// src/data/posts.js
// All blog post content lives here.
// To add a post: copy one object, change the fields, add it to the array.

export const posts = [
  {
    id: 1,
    slug: 'heise-residence',
    title: 'Heise Residence — A Study in Light and Form',
    excerpt:
      'The Heise Residence project challenged our studio to rethink how natural light can serve as the primary architectural material in a north-facing plot.',
    content: `
      <p>The Heise Residence project challenged our studio to rethink how natural light can serve as the primary architectural material in a north-facing plot in the Swiss Mittelland.</p>
      <h2>The brief</h2>
      <p>The client — a family of four — wanted a home that felt open and connected to the landscape while maintaining clear zones of privacy. The 420m² programme included living spaces, a home studio, and a guest suite.</p>
      <h2>Material palette</h2>
      <p>We limited the palette to raw concrete, Douglas fir, and large-format limestone to create a building that would age gracefully and read as a coherent whole.</p>
      <p>The facade is articulated by a rhythm of deep window reveals that modulate the harsh northern light and cast ever-changing shadow patterns across the interior walls throughout the day.</p>
      <h2>Landscape integration</h2>
      <p>The building is partially buried into the slope, reducing its visual mass from the street while creating a series of semi-subterranean garden rooms that blur the line between inside and out.</p>
    `,
    date: '2024-03-15',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    author: { name: 'Anna Hoffmann', slug: 'anna-hoffmann', avatar: 'https://i.pravatar.cc/96?img=47' },
    categories: ['Residential', 'Featured'],
    tags: ['concrete', 'minimalism', 'switzerland'],
    commentCount: 4,
  },
  {
    id: 2,
    slug: 'nordvik-office-campus',
    title: 'Nordvik Office Campus — Workplace for the Next Decade',
    excerpt:
      'Commissioned by a Scandinavian technology company, the Nordvik campus reimagines what a contemporary workplace can feel like when designed around human rhythm.',
    content: `
      <p>Commissioned by a Scandinavian technology company, the Nordvik campus reimagines what a contemporary workplace can feel like when designed around human rhythm rather than desk density.</p>
      <h2>Programme</h2>
      <p>The 6,400m² campus accommodates 320 employees across three interconnected buildings arranged around a central courtyard. The buildings step in height from south to north to preserve solar access to all workspaces throughout the year.</p>
      <h2>Biophilic design</h2>
      <p>Interior planting is not decorative but structural to the wellbeing strategy: every workstation is within 8 metres of a planting zone, and every meeting room has direct access to an outdoor terrace.</p>
    `,
    date: '2024-01-08',
    featuredImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    author: { name: 'Marco Senn', slug: 'marco-senn', avatar: 'https://i.pravatar.cc/96?img=12' },
    categories: ['Commercial'],
    tags: ['office', 'workplace', 'scandinavia'],
    commentCount: 2,
  },
  {
    id: 3,
    slug: 'solaris-mixed-use-tower',
    title: 'Solaris Tower — Vertical Mixed-Use in the City',
    excerpt:
      'The Solaris Tower stacks housing, co-working, retail, and public space into a single 28-storey form that attempts to be a vertical neighbourhood.',
    content: `
      <p>The Solaris Tower stacks housing, co-working, retail, and public space into a single 28-storey form that attempts to be a vertical neighbourhood.</p>
      <h2>Urban strategy</h2>
      <p>Located at the intersection of two major transit corridors, the tower was designed to activate its ground plane as a continuous extension of the public realm.</p>
      <h2>Structural innovation</h2>
      <p>A diagrid structural system allows column-free floor plates from level 4 upward, giving each programmatic layer maximum flexibility in its spatial organisation.</p>
    `,
    date: '2023-11-22',
    featuredImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80',
    author: { name: 'Anna Hoffmann', slug: 'anna-hoffmann', avatar: 'https://i.pravatar.cc/96?img=47' },
    categories: ['Mixed-Use', 'Featured'],
    tags: ['tower', 'urban', 'mixed-use'],
    commentCount: 7,
  },
  {
    id: 4,
    slug: 'villa-keller-adaptive-reuse',
    title: 'Villa Keller — Heritage Meets Contemporary Living',
    excerpt:
      'A 19th-century villa on Lake Zurich, painstakingly restored and extended with a contemporary pavilion that completes rather than competes with the original.',
    content: `
      <p>A 19th-century villa on Lake Zurich, painstakingly restored and extended with a contemporary pavilion that completes rather than competes with the original fabric.</p>
      <h2>Conservation approach</h2>
      <p>We worked closely with the cantonal heritage authority to establish a clear hierarchy of interventions: preserve, repair, reveal, and — only where necessary — add new.</p>
      <p>The new pavilion is set back from the main villa and connected by a glazed link, ensuring the historic silhouette reads cleanly from both the lake and the garden.</p>
    `,
    date: '2023-08-05',
    featuredImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80',
    author: { name: 'Marco Senn', slug: 'marco-senn', avatar: 'https://i.pravatar.cc/96?img=12' },
    categories: ['Heritage', 'Residential'],
    tags: ['heritage', 'restoration', 'lake-zurich'],
    commentCount: 3,
  },
  {
    id: 5,
    slug: 'moss-cultural-centre',
    title: 'Moss Cultural Centre — Architecture as Public Space',
    excerpt:
      'A new cultural centre for a mid-size Norwegian city, designed to be open, legible, and genuinely welcoming to all members of the community.',
    content: `
      <p>A new cultural centre for a mid-size Norwegian city, designed to be open, legible, and genuinely welcoming to all members of the community regardless of their familiarity with cultural institutions.</p>
      <h2>The open building</h2>
      <p>The ground floor is entirely public and free — a covered square that extends the city's existing pedestrian network through the building. Library, café, and exhibition spaces open directly onto this civic room.</p>
      <p>Upper floors house a 400-seat auditorium, artists' studios, and a rooftop garden accessible to all visitors.</p>
    `,
    date: '2023-05-17',
    featuredImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80',
    author: { name: 'Lena Baur', slug: 'lena-baur', avatar: 'https://i.pravatar.cc/96?img=32' },
    categories: ['Cultural'],
    tags: ['cultural', 'public', 'norway'],
    commentCount: 5,
  },
  {
    id: 6,
    slug: 'alpbach-mountain-retreat',
    title: 'Alpbach Retreat — Precision in the Alpine Landscape',
    excerpt:
      'A private mountain retreat that distils the Alpine vernacular to its essential geometry: pitched roof, thick walls, and a single carefully placed opening to the valley below.',
    content: `
      <p>A private mountain retreat that distils the Alpine vernacular to its essential geometry: pitched roof, thick walls, and a single carefully placed opening to the valley below.</p>
      <h2>Siting</h2>
      <p>The site sits at 1,600m elevation on a south-east facing slope. The building is oriented precisely to frame the peak of the Großer Rettenstein — a view that exists at exactly one point on the site.</p>
      <h2>Construction</h2>
      <p>All materials were sourced within 40km of the site. Load-bearing walls are traditional rubble masonry; the roof structure is hand-cut Douglas fir. The building is designed to last 200 years.</p>
    `,
    date: '2023-02-28',
    featuredImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    author: { name: 'Lena Baur', slug: 'lena-baur', avatar: 'https://i.pravatar.cc/96?img=32' },
    categories: ['Residential'],
    tags: ['alpine', 'retreat', 'vernacular'],
    commentCount: 1,
  },
]

export const categories = [
  { id: 1, name: 'Residential',  slug: 'residential',  count: 3 },
  { id: 2, name: 'Commercial',   slug: 'commercial',   count: 1 },
  { id: 3, name: 'Mixed-Use',    slug: 'mixed-use',    count: 1 },
  { id: 4, name: 'Heritage',     slug: 'heritage',     count: 1 },
  { id: 5, name: 'Cultural',     slug: 'cultural',     count: 1 },
  { id: 6, name: 'Featured',     slug: 'featured',     count: 2 },
]

export const authors = [
  {
    name: 'Anna Hoffmann',
    slug: 'anna-hoffmann',
    avatar: 'https://i.pravatar.cc/96?img=47',
    bio: 'Partner and co-founder of H. Architects. Anna leads the residential and cultural portfolios. She studied at the ETH Zürich and worked with Herzog & de Meuron before founding the studio.',
  },
  {
    name: 'Marco Senn',
    slug: 'marco-senn',
    avatar: 'https://i.pravatar.cc/96?img=12',
    bio: 'Partner responsible for commercial and urban projects. Marco holds a degree from the Accademia di Architettura Mendrisio and previously practised in London and Tokyo.',
  },
  {
    name: 'Lena Baur',
    slug: 'lena-baur',
    avatar: 'https://i.pravatar.cc/96?img=32',
    bio: 'Associate Director specialising in heritage and landscape. Lena brings deep expertise in conservation methodology and material research to every project.',
  },
]

export const comments = {
  'heise-residence': [
    {
      id: 1, parentId: 0,
      author: 'Thomas Müller', date: '2024-03-20',
      avatar: 'https://i.pravatar.cc/48?img=3',
      content: '<p>The way you describe the shadow play on the concrete walls really comes through even in the photographs. Outstanding work.</p>',
      approved: true, children: [],
    },
    {
      id: 2, parentId: 0,
      author: 'Sara Vogel', date: '2024-03-22',
      avatar: 'https://i.pravatar.cc/48?img=5',
      content: '<p>I am curious about the structural system for the partially buried section — is the retaining wall independent of the main building frame?</p>',
      approved: true,
      children: [
        {
          id: 3, parentId: 2,
          author: 'Anna Hoffmann', date: '2024-03-23',
          avatar: 'https://i.pravatar.cc/48?img=47',
          content: '<p>Great question Sara. Yes — the retaining wall is a separate reinforced concrete structure with a drained cavity between it and the main building. This also gives us a thermal buffer.</p>',
          approved: true, children: [],
        },
      ],
    },
  ],
}
