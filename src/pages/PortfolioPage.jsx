import { useEffect, useState } from 'react'

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
function useReveal(dep = null) {
  useEffect(() => {
    const els = document.querySelectorAll('.sr')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('sr-on')),
      { threshold: 0.07 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}

/* ─────────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1, name: 'Prospera', location: 'Nagpur, Maharashtra', subtitle: 'MODERN LIVING',
    img: '/assets/project1.jpg', badge: 'Residential', category: 'Residential',
    description: 'Prospera is a thoughtfully designed residential development that blends contemporary architecture with practical living. Each unit is crafted to maximise natural light, ventilation, and spatial efficiency — creating homes that feel expansive and grounded at the same time.',
  },
  {
    id: 2, name: 'Cascade', location: 'Nagpur, Maharashtra', subtitle: 'LAYERED DESIGN',
    img: '/assets/project2.jpg', badge: 'Residential', category: 'Residential',
    description: 'Cascade is a modern residential complex that draws inspiration from fluid, layered forms. The design prioritises community spaces and green buffers, resulting in a living environment that balances privacy with connectivity.',
  },
  {
    id: 3, name: 'Sursangam', location: 'Nagpur, Maharashtra', subtitle: 'CULTURAL RESIDENCE',
    img: '/assets/project3.jpg', badge: 'Residential', category: 'Residential',
    description: 'Sursangam is a curated residential project that celebrates cultural richness through its architectural language. Detailed facade work, well-proportioned floor plans, and quality material selection define this landmark development.',
  },
  {
    id: 4, name: 'White Villa', location: 'Nagpur, Maharashtra', subtitle: 'VILLA & ESTATE',
    img: '/assets/project4.jpg', badge: 'Villa & Estate', category: 'Residential',
    description: 'White Villa is a premium private residence that exemplifies understated luxury. Clean white volumes, open-plan interiors, and seamless indoor-outdoor flow come together to form a home that is both serene and sophisticated.',
  },
  {
    id: 5, name: "Jerry's Home", location: 'Nagpur, Maharashtra', subtitle: 'CUSTOM HOME',
    img: '/assets/project5.jpg', badge: 'Custom Home', category: 'Residential',
    description: "Jerry's Home is a bespoke residence designed around the unique lifestyle and preferences of its owners. Every spatial decision — from room orientation to material palette — was made in close collaboration with the client to deliver a truly personal home.",
  },
  {
    id: 6, name: 'City Center Mall Katol', location: 'Katol, Maharashtra', subtitle: 'RETAIL LANDMARK',
    img: '/assets/project6.jpg', badge: 'Commercial', category: 'Commercial',
    description: 'City Center Mall Katol is a mixed-use commercial destination designed to serve the evolving retail and lifestyle needs of the Katol region. The design focuses on footfall circulation, tenant visibility, and a welcoming public environment.',
  },
  {
    id: 7, name: "Dubai's Icaverse", location: 'Dubai, UAE', subtitle: 'CORPORATE INFRASTRUCTURE',
    img: '/assets/project7.jpg', badge: 'Commercial', category: 'Commercial',
    description: "Dubai's Icaverse is a forward-thinking commercial development conceived for the high-density urban context of Dubai. The project integrates bold facade design, flexible floor plates, and smart building principles to meet international commercial standards.",
  },
  {
    id: 8, name: 'Mumbai Enclave', location: 'Mumbai, Maharashtra', subtitle: 'MIXED-USE ARCHITECTURE',
    img: '/assets/project8.jpg', badge: 'Commercial', category: 'Commercial',
    description: "Mumbai Enclave is a premium commercial complex that responds to the fast-paced demands of one of India's most competitive real estate markets. The design delivers efficient workspaces, high-quality lobbies, and a strong street presence.",
  },
  {
    id: 9, name: 'Naman Lounge', location: 'Nagpur, Maharashtra', subtitle: 'HOSPITALITY DESIGN',
    img: '/assets/project9.jpg', badge: 'Commercial', category: 'Commercial',
    description: 'Naman Lounge is a boutique commercial space designed to serve as a premium hospitality and business hub. The interiors balance warmth and professionalism, with carefully selected finishes that elevate the everyday experience.',
  },
  {
    id: 10, name: "Dubai's Luxeverse", location: 'Dubai, UAE', subtitle: 'LUXURY COMMERCIAL',
    img: '/assets/project10.jpg', badge: 'Commercial', category: 'Commercial',
    description: "Dubai's Luxeverse represents Khajanji Infraspaces' ambition in the international luxury commercial segment. A refined architectural expression, premium material specification, and attention to experiential detail define this flagship project.",
  },
  {
    id: 11, name: 'Greenfield Township', location: 'Nagpur, Maharashtra', subtitle: 'MASTER PLANNING',
    img: '/assets/project11.jpg', badge: 'Township', category: 'Plotted',
    description: 'Greenfield Township is a large-scale master-planned development that integrates residential plots, commercial zones, and open green corridors. The layout prioritises walkability, community infrastructure, and long-term liveability.',
  },
  {
    id: 12, name: 'Horizon Plots', location: 'Nagpur, Maharashtra', subtitle: 'PLOTTED DEVELOPMENT',
    img: '/assets/project12.jpg', badge: 'Plotted', category: 'Plotted',
    description: 'Horizon Plots is a well-planned plotted development offering flexible ownership in a thoughtfully designed layout. Wide internal roads, utility provisions, and landscaped boundaries make this a premier address for custom home builders.',
  },
]

const TABS = [
  { key: 'All',        label: 'All Developments' },
  { key: 'Residential',label: 'Residential Projects' },
  { key: 'Commercial', label: 'Commercial Projects' },
  { key: 'Plotted',    label: 'Plotted & Township Projects' },
]

/* ─────────────────────────────────────────────
   PROJECT MODAL
───────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(10,10,10,0.6)',
        zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        animation: 'fadeOverlay 0.25s ease both',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-inner"
        style={{
          background: '#fff', width: '100%', maxWidth: 900,
          maxHeight: '90vh', overflowY: 'auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          animation: 'slideModal 0.3s cubic-bezier(.25,.46,.45,.94) both',
        }}
      >
        {/* Left: Image */}
        <div style={{ position: 'relative', minHeight: 480 }}>
          <img
            src={project.img} alt={project.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => { e.currentTarget.src = `https://placehold.co/600x800/e4e2dc/8a8880?text=${encodeURIComponent(project.name)}` }}
          />
          <div style={{
            position: 'absolute', top: 20, left: 20, background: '#fff',
            padding: '6px 14px', fontFamily: "'Outfit', sans-serif",
            fontSize: 10, fontWeight: 400, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#0a0a0a',
          }}>
            {project.badge}
          </div>
        </div>

        {/* Right: Content */}
        <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <button
              onClick={onClose}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 0, marginBottom: 40,
                display: 'flex', alignItems: 'center', gap: 8,
                fontFamily: "'Outfit', sans-serif", fontSize: 11,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a8880',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <line x1="1" y1="1" x2="13" y2="13" stroke="#8a8880" strokeWidth="1.2"/>
                <line x1="13" y1="1" x2="1" y2="13" stroke="#8a8880" strokeWidth="1.2"/>
              </svg>
              Close
            </button>

            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8a8880', fontWeight: 300, marginBottom: 14 }}>
              {project.subtitle}
            </p>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: 400, lineHeight: 1.2, color: '#0a0a0a', marginBottom: 10 }}>
              {project.name}
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a8880', marginBottom: 32 }}>
              {project.location}
            </p>
            <div style={{ height: 1, background: '#e4e2dc', marginBottom: 28 }} />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, lineHeight: 1.8, color: '#444', fontWeight: 300 }}>
              {project.description}
            </p>
          </div>

          <div style={{ marginTop: 40 }}>
            <div style={{ height: 1, background: '#e4e2dc', marginBottom: 28 }} />
            <a
              href={`mailto:khajanjiinfraspaces@gmail.com?subject=Project Enquiry: ${project.name}`}
              style={{
                display: 'inline-block', padding: '11px 28px',
                background: '#0a0a0a', color: '#fff',
                fontFamily: "'Outfit', sans-serif", fontSize: 12,
                fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#333'}
              onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
function ProjectCard({ project, index, onClick }) {
  return (
    <article
      className={`project-card sr sr-d${(index % 3) + 1}`}
      onClick={() => onClick(project)}
      style={{ cursor: 'pointer' }}
    >
      <div style={{ overflow: 'hidden', marginBottom: 14, position: 'relative', aspectRatio: '4/3' }}>
        <div className="hover-badge" style={{
          position: 'absolute', top: 16, left: 16,
          background: '#fff', color: '#0a0a0a',
          padding: '7px 14px', fontSize: 10, fontWeight: 400,
          fontFamily: "'Outfit', sans-serif", letterSpacing: '0.1em',
          textTransform: 'uppercase', zIndex: 10, opacity: 0,
          transition: 'opacity 0.3s ease', pointerEvents: 'none',
        }}>
          {project.badge}
        </div>
        <img
          src={project.img} alt={project.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.75s cubic-bezier(.25,.46,.45,.94)' }}
          onError={(e) => { e.currentTarget.src = `https://placehold.co/800x600/e4e2dc/8a8880?text=${encodeURIComponent(project.name)}` }}
        />
      </div>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 400, color: '#0a0a0a', marginBottom: 6, lineHeight: 1.3 }}>
        {project.name}
      </p>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 300, color: '#8a8880', letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: 1.4 }}>
        {project.subtitle}
      </p>
    </article>
  )
}

/* ─────────────────────────────────────────────
   SECTION BLOCK
───────────────────────────────────────────── */
function ProjectSection({ label, projects, onCardClick }) {
  if (!projects.length) return null
  return (
    <div>
      <div style={{ padding: '56px 48px 24px', borderTop: '1px solid #e4e2dc' }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8a8880', fontWeight: 300 }}>
          {label}
        </p>
      </div>
      <div
        className="portfolio-grid"
        style={{ padding: '0 48px 64px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 24px' }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onClick={onCardClick} />
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function PortfolioPage() {
  const [activeTab, setActiveTab]       = useState('All')
  const [activeProject, setActiveProject] = useState(null)
  useReveal(activeTab)

  const filtered    = activeTab === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeTab)
  const residential = filtered.filter(p => p.category === 'Residential')
  const commercial  = filtered.filter(p => p.category === 'Commercial')
  const plotted     = filtered.filter(p => p.category === 'Plotted')

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; background: #fff; color: #0a0a0a; }

        .sr    { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(.25,.46,.45,.94), transform 0.7s cubic-bezier(.25,.46,.45,.94); }
        .sr-on { opacity: 1 !important; transform: translateY(0) !important; }
        .sr-d1 { transition-delay: 0.05s; }
        .sr-d2 { transition-delay: 0.12s; }
        .sr-d3 { transition-delay: 0.19s; }

        .fu1 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.1s both; }
        .fu2 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.25s both; }
        @keyframes fu         { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeOverlay { from { opacity:0; } to { opacity:1; } }
        @keyframes slideModal  { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }

        .project-card:hover img          { transform: scale(1.05) !important; }
        .project-card:hover .hover-badge { opacity: 1 !important; }

        .filter-tab {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 300;
          background: none;
          border: none;
          border-bottom: 1px solid transparent;
          cursor: pointer;
          padding: 20px 0 16px;
          color: #8a8880;
          transition: color 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .filter-tab:hover  { color: #0a0a0a; }
        .filter-tab.active { color: #0a0a0a; border-bottom: 1px solid #0a0a0a; }

        @media (max-width: 900px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sp { padding-left: 24px !important; padding-right: 24px !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .modal-inner { grid-template-columns: 1fr !important; }
          .filter-row  { gap: 20px !important; overflow-x: auto; padding-bottom: 2px; }
        }
        @media (max-width: 480px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ───────────────────────────── */}
      <section className="sp" style={{ padding: '145px 48px 52px' }}>
        <h1 className="fu1" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(2.8rem, 5vw, 4rem)',
          fontWeight: 400, lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: 28, color: '#0a0a0a',
        }}>
          Our Portfolio
        </h1>
        <p className="fu2" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
          lineHeight: 1.75, color: '#666',
          fontWeight: 300, maxWidth: 520,
        }}>
          At Khajanji Infraspaces, we approach each project with a thoughtful
          blend of environmental psychology, art, architecture, and cultural
          insight — all grounded in meticulous project management.
        </p>
      </section>

      {/* ── FILTER TABS ────────────────────── */}
      <div style={{ borderTop: '1px solid #e4e2dc', borderBottom: '1px solid #e4e2dc' }}>
        <div className="filter-row sp" style={{ padding: '0 48px', display: 'flex', gap: 36 }}>
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`filter-tab${activeTab === t.key ? ' active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── SECTIONS ───────────────────────── */}
      <div style={{ paddingTop: 8 }}>
        <ProjectSection label="Residential Projects"        projects={residential} onCardClick={setActiveProject} />
        <ProjectSection label="Commercial Projects"         projects={commercial}  onCardClick={setActiveProject} />
        <ProjectSection label="Plotted & Township Projects" projects={plotted}     onCardClick={setActiveProject} />
      </div>

      {/* ── FOOTER CTA ─────────────────────── */}
      <section style={{ borderTop: '1px solid #e4e2dc', background: '#fff' }}>
        <div className="footer-grid sp" style={{ padding: '52px 48px 44px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 400, lineHeight: 1.2, marginBottom: 28 }}>
              Have something in mind?<br />Let's talk.
            </h2>
            <button
              style={{ padding: '10px 22px', background: 'transparent', border: '1px solid #0a0a0a', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 400, cursor: 'pointer', transition: 'background 0.2s, color 0.2s', color: '#0a0a0a' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a' }}
            >Request a call back</button>
          </div>
          <div>
            <a href="mailto:khajanjiinfraspaces@gmail.com"
              style={{ display: 'block', fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '1px solid #0a0a0a', paddingBottom: 1, marginBottom: 10, width: 'fit-content' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >khajanjiinfraspaces@gmail.com</a>
            <div style={{ height: 1, background: '#e4e2dc', marginBottom: 10 }} />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 10 }}>+91 93228 15523</p>
            <div style={{ height: 1, background: '#e4e2dc', marginBottom: 10 }} />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.65 }}>
              NAGPUR<br />MAHARASHTRA
            </p>
          </div>
        </div>
        <div style={{ height: 1, background: '#e4e2dc' }} />
      </section>

      {/* ── MODAL ──────────────────────────── */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  )
}