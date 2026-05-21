import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'

/* ─────────────────────────────────────────────
   COMPLETE PROJECT DATA (All 8 Projects Detailed)
───────────────────────────────────────────── */
const PROJECTS_DATA = [
  {
    id: 1,
    name: 'Bawly Modern House',
    location: 'San Diego, California',
    img: '/assets/project1.jpg',
    badge: 'Custom Homes',
    year: '2024',
    area: '4,500 Sq. Ft.',
    client: 'Private Owner',
    description: 'A striking structural presence utilizing raw concrete, expansive floor-to-ceiling glass paneling, and natural teak wood tones. Designed to optimize daylight cycles while prioritizing thermodynamic efficiency and smooth indoor-outdoor living transitions.',
    details: [
      'Features high-efficiency solar integration paneling hidden along the split-level roofline.',
      'Custom smart home automation regulating shades, ambient underfloor heating, and security.',
      'Frameless architectural window systems bringing panoramic ocean views directly into living spaces.'
    ]
  },
  {
    id: 2,
    name: 'Holis Passive House',
    location: 'Washington, D.C.',
    img: '/assets/project2.jpg',
    badge: 'Passive Design',
    year: '2025',
    area: '3,200 Sq. Ft.',
    client: 'The Holis Trust',
    description: 'Engineered to meet rigorous international passive house standards, this residential structure achieves ultra-low energy consumption through premium airtight construction, an advanced energy recovery ventilator (ERV), and meticulous thermal-bridge-free detailing.',
    details: [
      'High-performance triple-glazed windows oriented strictly for optimal seasonal solar heat gain.',
      'Super-insulated building envelope wrapped completely in sustainable wood-fiber composites.',
      'A rainwater harvesting setup fueling a closed-loop graywater system for residential garden maintenance.'
    ]
  },
  {
    id: 3,
    name: 'GG Art Gallery',
    location: 'Vancouver, British Columbia',
    img: '/assets/project3.jpg',
    badge: 'Public & Cultural',
    year: '2023',
    area: '18,500 Sq. Ft.',
    client: 'GG Cultural Foundation',
    description: 'A monolithic, sculpted community hub designed around light-wells that funnel soft, diffused Canadian daylight deep into subterranean exhibition wings. Curated with raw stone floors and acoustics designed specifically for quiet reflection.',
    details: [
      'Expansive open-span exhibition rooms utilizing state-of-the-art post-tensioned concrete structural beams.',
      'Museum-grade climate zoning installations that carefully preserve delicate classical canvas paintings.',
      'An exterior living wall showcasing localized mosses and ferns native to the Pacific Northwest ecosystem.'
    ]
  },
  {
    id: 4,
    name: 'Heise',
    location: 'Bodø, Norway',
    img: '/assets/project4.jpg',
    badge: 'Residential',
    year: '2024',
    area: '2,100 Sq. Ft.',
    client: 'Nordic Stay Group',
    description: 'Perched on rugged coastal topography along the Arctic Circle, this cabin features a aerodynamic, sharply pitched roofline designed to displace extreme wind pressures while framing sweeping, uninterrupted views of the open Norwegian fjords.',
    details: [
      'Constructed on elevated structural steel stilts to preserve the local sub-arctic tundra landscape.',
      'Clad entirely in dark-charred timber using traditional Scandinavian wood-preservation techniques.',
      'An efficient central geothermic heat pump keeping interiors warm during harsh winter elements.'
    ]
  },
  {
    id: 5,
    name: 'Kaave Academy',
    location: 'Stockholm, Sweden',
    img: '/assets/project5.jpg',
    badge: 'Education',
    year: '2025',
    area: '34,000 Sq. Ft.',
    client: 'Stockholm Municipal Edu',
    description: 'A progressive educational environment focused entirely on flexibility and collaboration. The design breaks down conventional classroom barriers through moving acoustic walls, shared atrium spaces, and multi-tiered timber seating installations.',
    details: [
      'Constructed utilizing sustainable, cross-laminated timber (CLT) to offset carbon footprint marks.',
      'Optimized acoustic paneling setups made from recycled ocean plastics to dampen high-frequency noise.',
      'Expansive interactive outdoor learning courtyards promoting dynamic alternative study practices.'
    ]
  },
  {
    id: 6,
    name: 'Casa Palermo',
    location: 'Palermo, Italy',
    img: '/assets/project6.jpg',
    badge: 'Villa & Estate',
    year: '2022',
    area: '7,800 Sq. Ft.',
    client: 'DiMaggio Holdings',
    description: 'A meticulous restoration and expansion of an Italian country estate. The architecture links historic limestone foundations with lightweight modern glass extensions, bridging past heritage seamlessly with contemporary open-plan layouts.',
    details: [
      'Repurposed original volcanic tufa stone blocks to compose new interior highlight partitions.',
      'A dramatic 25-meter infinity lap pool lined with dark Sicilian marble mirroring the evening horizon.',
      'Shaded pergola walkways carefully lined with local olive trees for continuous natural cooling zones.'
    ]
  },
  {
    id: 7,
    name: 'Tower',
    location: 'Lyon, France',
    img: '/assets/project7.jpg',
    badge: 'Commercial',
    year: '2026',
    area: '125,000 Sq. Ft.',
    client: 'Rhône Development Corp',
    description: 'A landmark mixed-use mid-rise structure featuring a highly unique, kinetic breathing facade system. The external glass panels pivot dynamically automatically based on real-time solar tracking to reduce thermal glare and structural cooling costs.',
    details: [
      'A multi-level sky garden integrated every five floors to provide natural break environments for staff.',
      'Achieved a premium LEED Platinum certification through strict structural supply chain tracing.',
      'Integrated structural storm-water catchments capable of filtering millions of gallons for facility operation.'
    ]
  },
  {
    id: 8,
    name: 'Grand Terra',
    location: 'Hanoi, Vietnam',
    img: '/assets/project8.jpg',
    badge: 'Landscape',
    year: '2025',
    area: '45,000 Sq. Ft.',
    client: 'Infraspaces Urban Parks',
    description: 'An urban green lung built over a reclaimed industrial plaza. Terraced water features filter urban runoff organically through biological plant beds, while canopy walkways offer local communities a peaceful sanctuary floating high above city traffic noise.',
    details: [
      'Terraced wetland biology designed to process complex city rainfall naturally before returning it to local water tables.',
      'Open-air pavilions built using locally-sourced bamboo weaves engineered for extreme humidity resistance.',
      'Bespoke LED low-voltage accent lighting layouts calculated to preserve local bird and insect migratory behaviors.'
    ]
  }
]

/* ─────────────────────────────────────────────
   COMPONENT LOGIC
───────────────────────────────────────────── */
export default function ProjectDetailPage() {
  const { id } = useParams()
  
  // Scroll to top automatically when navigating to a new project
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Look up project details using the URL parameter id
  const project = PROJECTS_DATA.find((p) => p.id === parseInt(id || '1', 10))

  // Handle case where project ID doesn't exist in data array
  if (!project) {
    return (
      <div style={{ padding: '120px 48px', textAlign: 'center', fontFamily: "'Outfit', sans-serif" }}>
        <h2 style={{ fontWeight: 400, marginBottom: 16 }}>Project Not Found</h2>
        <p style={{ color: '#8a8880', marginBottom: 24 }}>The architectural record you requested does not exist.</p>
        <Link to="/portfolio" style={{ color: '#0a0a0a', textDecoration: 'underline' }}>Back to Portfolio</Link>
      </div>
    )
  }

  return (
    <>
      <style>{`
        .detail-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 64px; padding: 120px 48px 60px; }
        .spec-item { border-bottom: 1px solid #e4e2dc; padding: 16px 0; display: flex; justify-content: space-between; }
        .spec-label { font-family: 'DM Sans', sans-serif; font-size: 11px; text-transform: uppercase; color: #8a8880; letter-spacing: 0.1em; }
        .spec-value { font-family: 'Outfit', sans-serif; font-size: 14px; color: #0a0a0a; }
        .story-text { font-family: 'Outfit', sans-serif; font-size: clamp(1.1rem, 2vw, 1.5rem); line-height: 1.6; color: #2a2a2a; font-weight: 300; margin-bottom: 40px; }
        .bullet-list { list-style: none; padding: 0; }
        .bullet-list li { font-family: 'DM Sans', sans-serif; font-size: 15px; line-height: 1.7; color: #4a4a4a; margin-bottom: 16px; position: relative; padding-left: 24px; }
        .bullet-list li::before { content: "—"; position: absolute; left: 0; color: #8a8880; }
        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr; gap: 40px; padding: 100px 24px 40px; }
        }
      `}</style>

      <main className="detail-grid">
        {/* Left Side: Dynamic Meta Data Sidebar */}
        <div>
          <Link to="/portfolio" style={{ textDecoration: 'none', color: '#8a8880', fontSize: 12, fontFamily: "'Outfit', sans-serif", display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            ← BACK TO PORTFOLIO
          </Link>
          
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '42px', fontWeight: 400, lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>
            {project.name}
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#8a8880', marginBottom: 40 }}>
            {project.location}
          </p>

          <div style={{ borderTop: '1px solid #e4e2dc', marginTop: 20 }}>
            <div className="spec-item">
              <span className="spec-label">Typology</span>
              <span className="spec-value">{project.badge}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Year Completed</span>
              <span className="spec-value">{project.year}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Total Built Area</span>
              <span className="spec-value">{project.area}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Client Focus</span>
              <span className="spec-value">{project.client}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Deep Imagery & Architectural Overview */}
        <div>
          <div style={{ width: '100%', aspectRatio: '16 / 10', overflow: 'hidden', backgroundColor: '#f4f3ef', marginBottom: 48 }}>
            <img 
              src={project.img} 
              alt={project.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/1200x750/e4e2dc/8a8880?text=${encodeURIComponent(project.name)}`
              }}
            />
          </div>

          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 20 }}>
            Architectural Concept
          </h3>
          
          <p className="story-text">
            {project.description}
          </p>

          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 20, marginTop: 40 }}>
            Key Features & Project Execution
          </h3>

          <ul className="bullet-list">
            {project.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}