// src/pages/PortfolioPage.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK — matches ContactPage debounced pattern
───────────────────────────────────────────── */
function useReveal(dep = null) {
  useEffect(() => {
    const t = setTimeout(() => {
      const els = document.querySelectorAll('.sr')
      const io = new IntersectionObserver(
        entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('sr-on')),
        { threshold: 0.06 }
      )
      els.forEach(el => io.observe(el))
      return () => io.disconnect()
    }, 60)
    return () => clearTimeout(t)
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
    img: '/assets/cascade-newproject.jpg', badge: 'Residential', category: 'Residential',
    description: 'Cascade is a modern residential complex that draws inspiration from fluid, layered forms. The design prioritises community spaces and green buffers, resulting in a living environment that balances privacy with connectivity.',
  },
  {
    id: 3, name: 'Sursangam', location: 'Nagpur, Maharashtra', subtitle: 'CULTURAL RESIDENCE',
    img: '/assets/project3.jpg', badge: 'Residential', category: 'Residential',
    description: 'Sursangam is a curated residential project that celebrates cultural richness through its architectural language. Detailed facade work, well-proportioned floor plans, and quality material selection define this landmark development.',
  },
  {
    id: 4, name: 'The Nest', location: 'Dhaba Area, Nagpur', subtitle: 'Apartment Complex',
    img: '/assets/project4.jpg', badge: 'Residential', category: 'Residential',
    description: 'The Nest is a premium private residence that exemplifies understated luxury. Clean white volumes, open-plan interiors, and seamless indoor-outdoor flow come together to form a home that is both serene and sophisticated.',
  },
  {
    id: 5, name: "Club House", location: 'Pench, Maharashtra', subtitle: 'Commercial Estate',
    img: '/assets/project5.jpg', badge: 'Residential', category: 'Residential',
    description: "Club House is a bespoke residence designed around the unique lifestyle and preferences of its owners. Every spatial decision — from room orientation to material palette — was made in close collaboration with the client to deliver a truly personal home.",
  },
  {
    id: 6, name: 'City Centre Mall', location: 'Katol, Maharashtra', subtitle: 'RETAIL LANDMARK',
    img: '/assets/project6.jpg', badge: 'Residential', category: 'Residential',
    description: 'City Center Mall Katol is a mixed-use commercial destination designed to serve the evolving retail and lifestyle needs of the Katol region. The design focuses on footfall circulation, tenant visibility, and a welcoming public environment.',
  },
  {
    id: 7, name: "White Villa", location: 'Dubai, UAE', subtitle: 'CORPORATE INFRASTRUCTURE',
    img: '/assets/project7.jpg', badge: 'Interior', category: 'Interior',
    description: "Dubai's Icaverse is a forward-thinking commercial development conceived for the high-density urban context of Dubai. The project integrates bold facade design, flexible floor plates, and smart building principles to meet international commercial standards.",
  },
  {
    id: 8, name: "Dubai's IcaVerse", location: 'Mumbai, Maharashtra', subtitle: 'MIXED-USE ARCHITECTURE',
    img: '/assets/project8.jpg', badge: 'Interior', category: 'Interior',
    description: "Dubai's Icaverse is a futuristic commercial destination designed to blend retail, entertainment, and digital experiences. The project features a bold architectural identity, spacious public areas, and modern amenities, creating a vibrant hub for businesses and visitors alike.",
  },
  {
    id: 9, name: 'Naman Lounge', location: 'Nagpur, Maharashtra', subtitle: 'HOSPITALITY DESIGN',
    img: '/assets/project9.jpg', badge: 'Interior', category: 'Interior',
    description: 'Naman Lounge is a boutique commercial space designed to serve as a premium hospitality and business hub. The interiors balance warmth and professionalism, with carefully selected finishes that elevate the everyday experience.',
  },
  {
    id: 10, name: "Mumbai Enclave", location: 'Dubai, UAE', subtitle: 'LUXURY COMMERCIAL',
    img: '/assets/project10.jpg', badge: 'Interior', category: 'Interior',
    description: "Dubai's Luxeverse represents Khajanji Infraspaces' ambition in the international luxury commercial segment. A refined architectural expression, premium material specification, and attention to experiential detail define this flagship project.",
  },
  {
    id: 11, name: "Jerry's Home", location: 'Nagpur, Maharashtra', subtitle: 'MASTER PLANNING',
    img: '/assets/project11-jerryhome.jpg', badge: 'Interior', category: 'Interior',
    description: 'Greenfield Township is a large-scale master-planned development that integrates residential plots, commercial zones, and open green corridors. The layout prioritises walkability, community infrastructure, and long-term liveability.',
  },
  {
    id: 12, name: "Dubai's Icaverse", location: 'Nagpur, Maharashtra', subtitle: 'Commercial Complex',
    img: '/assets/project12.jpg', badge: 'Commercial', category: 'Commercial',
    description: "Dubai's Icaverse is a futuristic commercial destination designed to blend retail, entertainment, and digital experiences. The project features a bold architectural identity, spacious public areas, and modern amenities, creating a vibrant hub for businesses and visitors alike.",
  },
  {
    id: 13, name: "Cascade", location: 'Chhatrapati Nagar, Nagpur', subtitle: 'Commercial Complex',
    img: '/assets/project13.jpg', badge: 'Commercial', category: 'Commercial',
    description: "Cascade is a modern mixed-use development inspired by layered architectural forms. The design emphasizes natural light, open spaces, and contemporary aesthetics, delivering a sophisticated environment that balances functionality with visual appeal.",
  },
  {
    id: 14, name: "City Centre Mall ", location: 'Katol, Maharashtra', subtitle: 'Commercial Complex',
    img: '/assets/project14.jpg', badge: 'Commercial', category: 'Commercial',
    description: 'City Centre Mall is a contemporary commercial development crafted to enhance shopping, dining, and leisure experiences. Its modern façade, efficient spatial planning, and welcoming public spaces create a dynamic destination that serves both businesses and the local community.',
  },
  {
    id: 15, name: 'Anjeneya', location: 'Hingna, Nagpur', subtitle: 'PLOTTED DEVELOPMENT',
    img: '/assets/project15.jpg', badge: 'Plotted', category: 'Plotted',
    description: 'Horizon Plots is a well-planned plotted development offering flexible ownership in a thoughtfully designed layout. Wide internal roads, utility provisions, and landscaped boundaries make this a premier address for custom home builders.',
  },
  {
    id: 16, name: 'Ayodhya Estate', location: 'Gotal Panjiri, Nagpur', subtitle: 'PLOTTED DEVELOPMENT',
    img: '/assets/project16.jpg', badge: 'Plotted', category: 'Plotted',
    description: 'Horizon Plots is a well-planned plotted development offering flexible ownership in a thoughtfully designed layout. Wide internal roads, utility provisions, and landscaped boundaries make this a premier address for custom home builders.',
  },
  {
    id: 17, name: 'Kubber Nagri', location: 'Gondia Road, Nagpur', subtitle: 'PLOTTED DEVELOPMENT',
    img: '/assets/project17.jpg', badge: 'Plotted', category: 'Plotted',
    description: 'Horizon Plots is a well-planned plotted development offering flexible ownership in a thoughtfully designed layout. Wide internal roads, utility provisions, and landscaped boundaries make this a premier address for custom home builders.',
  },
  {
    id: 18, name: 'Moreshwar Park', location: 'Wardha Road, Near Jamtha Nagpur', subtitle: 'PLOTTED DEVELOPMENT',
    img: '/assets/project18.jpg', badge: 'Plotted', category: 'Plotted',
    description: 'Horizon Plots is a well-planned plotted development offering flexible ownership in a thoughtfully designed layout. Wide internal roads, utility provisions, and landscaped boundaries make this a premier address for custom home builders.',
  },
  {
    id: 19, name: 'The Orchid', location: 'Sondapar, Mihan,Nagpur', subtitle: 'PLOTTED DEVELOPMENT',
    img: '/assets/project19.jpg', badge: 'Plotted', category: 'Plotted',
    description: 'Horizon Plots is a well-planned plotted development offering flexible ownership in a thoughtfully designed layout. Wide internal roads, utility provisions, and landscaped boundaries make this a premier address for custom home builders.',
  },
  {
    id: 20, name: 'Samruddhi Garden', location: 'Sambhaji Nagar, Nagpur', subtitle: 'PLOTTED DEVELOPMENT',
    img: '/assets/project20.jpg', badge: 'Plotted', category: 'Plotted',
    description: 'Horizon Plots is a well-planned plotted development offering flexible ownership in a thoughtfully designed layout. Wide internal roads, utility provisions, and landscaped boundaries make this a premier address for custom home builders.',
  },
  {
    id: 21, name: 'Sovira One', location: 'Kalameshwar, Nagpur', subtitle: 'PLOTTED DEVELOPMENT',
    img: '/assets/project21.jpg', badge: 'Plotted', category: 'Plotted',
    description: 'Horizon Plots is a well-planned plotted development offering flexible ownership in a thoughtfully designed layout. Wide internal roads, utility provisions, and landscaped boundaries make this a premier address for custom home builders.',
  }
]

const TABS = [
  { key: 'All',         label: 'All Developments' },
  { key: 'Residential', label: 'Residential' },
  { key: 'Interior',    label: 'Interior Design' },
  { key: 'Commercial',  label: 'Commercial' },
  { key: 'Plotted',     label: 'Township & Land' },
]

/* ─────────────────────────────────────────────
   PROJECT MODAL
───────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div onClick={onClose} className="modal-overlay">
      <div onClick={e => e.stopPropagation()} className="modal-inner">

        {/* Left: Image */}
        <div className="modal-img-wrapper">
          <img
            src={project.img}
            alt={project.name}
            onError={e => { e.currentTarget.src = `https://placehold.co/600x800/e4e2dc/8a8880?text=${encodeURIComponent(project.name)}` }}
          />
          <div className="modal-badge">{project.badge}</div>
        </div>

        {/* Right: Content */}
        <div className="modal-content-wrapper">
          <div>
            <button onClick={onClose} className="modal-close-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <line x1="1" y1="1" x2="13" y2="13" stroke="#8a8880" strokeWidth="1.2" />
                <line x1="13" y1="1" x2="1" y2="13" stroke="#8a8880" strokeWidth="1.2" />
              </svg>
              Close
            </button>

            <p className="modal-subtitle">{project.subtitle}</p>
            <h2 className="modal-title">{project.name}</h2>
            <p className="modal-location">{project.location}</p>

            <div className="modal-rule" />

            <p className="modal-description">{project.description}</p>
          </div>

          <div className="modal-footer">
            <div className="modal-rule" />
            <Link
              to="/contact#enquiry-form"
              className="btn-enquire"
            >
              Enquire Now
            </Link>
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
    >
      <div className="card-img-wrap">
        <div className="card-badge">{project.badge}</div>
        <img
          src={project.img}
          alt={project.name}
          className="card-img"
          onError={e => { e.currentTarget.src = `https://placehold.co/800x600/e4e2dc/8a8880?text=${encodeURIComponent(project.name)}` }}
        />
      </div>
      <p className="card-name">{project.name}</p>
      <p className="card-subtitle">{project.subtitle}</p>
    </article>
  )
}

/* ─────────────────────────────────────────────
   SECTION BLOCK
───────────────────────────────────────────── */
function ProjectSection({ label, projects, onCardClick }) {
  if (!projects.length) return null
  return (
    <div className="project-section">
      <div className="section-header-wrap">
        <span className="sec-label">{label}</span>
      </div>
      <div className="portfolio-grid">
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
  const [activeTab, setActiveTab] = useState('All')
  const [activeProject, setActiveProject] = useState(null)
  useReveal(activeTab)

  const filtered    = activeTab === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeTab)
  const residential = filtered.filter(p => p.category === 'Residential')
  const interior    = filtered.filter(p => p.category === 'Interior')
  const commercial  = filtered.filter(p => p.category === 'Commercial')
  const plotted     = filtered.filter(p => p.category === 'Plotted')

  return (
    <>
      <style>{`
        /* ── Base Reset & Typography ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Outfit', sans-serif;
          -webkit-font-smoothing: antialiased;
          background: #f9f8f5;
          color: #0a0a0a;
        }

        /* ── Reveal Animations ── */
        .sr    { opacity: 0; transform: translateY(18px); transition: opacity 0.8s cubic-bezier(.25,1,.5,1), transform 0.8s cubic-bezier(.25,1,.5,1); }
        .sr-on { opacity: 1 !important; transform: none !important; }
        .sr-d1 { transition-delay: .05s; }
        .sr-d2 { transition-delay: .12s; }
        .sr-d3 { transition-delay: .18s; }
        .sr-d4 { transition-delay: .25s; }

        /* ── Page Load Animations ── */
        .fu1 { animation: fadeUp .8s cubic-bezier(.25,1,.5,1) .05s both; }
        .fu2 { animation: fadeUp .8s cubic-bezier(.25,1,.5,1) .15s both; }
        .fu3 { animation: fadeUp .8s cubic-bezier(.25,1,.5,1) .25s both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: none; } }
        @keyframes fadeOverlay { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideModal  { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }

        /* ── Shared Layout Tokens ── */
        .sec-label {
          font-size: 11px;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: #8a8880;
          font-weight: 400;
          display: block;
        }
        .rule { border: none; border-top: 1px solid #e4e2dc; margin: 0; }

        /* ══════════════════════════════
           HERO SECTION
        ══════════════════════════════ */
        .portfolio-hero {
          padding: 140px 64px 72px;
          background: #f9f8f5;
          border-bottom: 1px solid #e4e2dc;
          text-align: center;
        }
        .portfolio-hero h1 {
          font-size: clamp(2.2rem, 3.5vw, 3.2rem);
          font-weight: 400;
          line-height: 1.13;
          letter-spacing: -0.02em;
          color: #0a0a0a;
          margin-bottom: 20px;
        }
        .portfolio-hero h1 em {
          font-style: italic;
          font-weight: 400;
          color: #555;
        }
        .portfolio-hero p {
          font-size: clamp(0.9rem, 1.4vw, 1rem);
          font-weight: 300;
          line-height: 1.8;
          color: #555;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ══════════════════════════════
           FILTER TABS
        ══════════════════════════════ */
        .filter-row-container {
          background: #f9f8f5;
          border-bottom: 1px solid #e4e2dc;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .filter-row-container::-webkit-scrollbar { display: none; }

        .filter-row {
          display: flex;
          gap: 40px;
          justify-content: center;
          padding: 0 64px;
          min-width: max-content;
          margin: 0 auto;
        }

        .filter-tab {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          letter-spacing: .16em;
          text-transform: uppercase;
          font-weight: 400;
          background: none;
          border: none;
          border-bottom: 1px solid transparent;
          cursor: pointer;
          padding: 20px 0 16px;
          color: #8a8880;
          transition: color .2s, border-color .2s;
          white-space: nowrap;
        }
        .filter-tab:hover  { color: #0a0a0a; }
        .filter-tab.active { color: #0a0a0a; border-bottom-color: #0a0a0a; }

        /* ══════════════════════════════
           PROJECT SECTIONS & GRID
        ══════════════════════════════ */
        .project-section { background: #f9f8f5; }

        .section-header-wrap {
          padding: 56px 64px 24px;
          border-top: 1px solid #e4e2dc;
        }

        .portfolio-grid {
          padding: 0 64px 72px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px 24px;
        }

        /* ── Project Card ── */
        .project-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .card-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          margin-bottom: 16px;
          background: #e4e2dc;
        }
        .card-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: #fff;
          color: #0a0a0a;
          padding: 6px 14px;
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: .12em;
          text-transform: uppercase;
          z-index: 10;
          opacity: 0;
          transition: opacity .3s ease;
          pointer-events: none;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .75s cubic-bezier(.25,.46,.45,.94);
        }
        .project-card:hover .card-img   { transform: scale(1.05); }
        .project-card:hover .card-badge { opacity: 1; }

        .card-name {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #0a0a0a;
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .card-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 300;
          color: #8a8880;
          letter-spacing: .16em;
          text-transform: uppercase;
          line-height: 1.4;
        }

        /* ══════════════════════════════
           MODAL
        ══════════════════════════════ */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,10,10,0.6);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeOverlay .25s ease both;
        }
        .modal-inner {
          background: #fff;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          animation: slideModal .3s cubic-bezier(.25,.46,.45,.94) both;
          border-radius: 4px;
        }
        .modal-img-wrapper {
          position: relative;
          min-height: 480px;
          overflow: hidden;
        }
        .modal-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .modal-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #fff;
          color: #0a0a0a;
          padding: 6px 14px;
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .modal-content-wrapper {
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .modal-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #8a8880;
          transition: color .2s;
        }
        .modal-close-btn:hover { color: #0a0a0a; }

        .modal-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #8a8880;
          font-weight: 300;
          margin-bottom: 12px;
        }
        .modal-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          font-weight: 400;
          line-height: 1.15;
          color: #0a0a0a;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .modal-location {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #8a8880;
          margin-bottom: 28px;
        }
        .modal-rule {
          height: 1px;
          background: #e4e2dc;
          margin-bottom: 24px;
        }
        .modal-description {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: #444;
          font-weight: 300;
        }
        .modal-footer { margin-top: 40px; }

        .btn-enquire {
          display: inline-block;
          padding: 12px 28px;
          background: #0a0a0a;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: .08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background .2s;
          border-radius: 2px;
        }
        .btn-enquire:hover { background: #333; }

        /* ══════════════════════════════
           FOOTER CTA
        ══════════════════════════════ */
        .portfolio-footer {
          background: #fff;
          border-top: 1px solid #e4e2dc;
        }
        .portfolio-footer-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding: 72px 64px 64px;
          align-items: start;
        }
        .footer-cta-heading {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #0a0a0a;
          margin-bottom: 28px;
        }
        .btn-callback {
          padding: 12px 24px;
          background: transparent;
          border: 1px solid #0a0a0a;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 400;
          cursor: pointer;
          color: #0a0a0a;
          letter-spacing: .04em;
          transition: background .2s, color .2s;
          border-radius: 2px;
        }
        .btn-callback:hover { background: #0a0a0a; color: #fff; }

        .footer-contact-link {
          display: inline-block;
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #0a0a0a;
          text-decoration: none;
          border-bottom: 1px solid #0a0a0a;
          padding-bottom: 1px;
          margin-bottom: 12px;
          transition: opacity .2s;
        }
        .footer-contact-link:hover { opacity: 0.5; }

        .footer-divider {
          height: 1px;
          background: #e4e2dc;
          margin-bottom: 12px;
        }
        .footer-detail {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #0a0a0a;
          margin-bottom: 12px;
          line-height: 1.65;
        }

        /* ══════════════════════════════
           RESPONSIVE — Tablet 1024px
        ══════════════════════════════ */
        @media (max-width: 1024px) {
          .portfolio-hero { padding: 120px 40px 60px; }
          .filter-row { padding: 0 40px; gap: 28px; justify-content: flex-start; }
          .section-header-wrap { padding: 48px 40px 20px; }
          .portfolio-grid { padding: 0 40px 60px; grid-template-columns: repeat(2, 1fr); gap: 40px 20px; }
          .portfolio-footer-inner { padding: 60px 40px 56px; gap: 32px; }

          .modal-inner { max-width: 95%; }
          .modal-img-wrapper { min-height: 360px; }
        }

        /* ══════════════════════════════
           RESPONSIVE — Tablet 768px
        ══════════════════════════════ */
        @media (max-width: 768px) {
          .portfolio-hero { padding: 100px 28px 52px; }
          .portfolio-hero h1 { font-size: clamp(2rem, 6vw, 2.8rem); }

          .filter-row { padding: 0 28px; gap: 20px; }

          .section-header-wrap { padding: 40px 28px 16px; }
          .portfolio-grid { padding: 0 28px 52px; gap: 32px 16px; }

          .portfolio-footer-inner { grid-template-columns: 1fr; padding: 52px 28px 48px; gap: 36px; }
          .footer-cta-heading { font-size: clamp(1.7rem, 5vw, 2.4rem); }

          .modal-inner { grid-template-columns: 1fr; }
          .modal-img-wrapper { min-height: 260px; height: 35vh; }
          .modal-content-wrapper { padding: 32px 28px; }
        }

        /* ══════════════════════════════
           RESPONSIVE — Mobile 480px
        ══════════════════════════════ */
        @media (max-width: 480px) {
          .portfolio-hero { padding: 88px 20px 44px; }
          .portfolio-hero h1 { font-size: clamp(1.9rem, 7.5vw, 2.4rem); }
          .portfolio-hero p { font-size: 13px; }

          .filter-row { padding: 0 20px; gap: 16px; }
          .filter-tab { font-size: 10px; padding: 16px 0 12px; }

          .section-header-wrap { padding: 32px 20px 12px; }
          .portfolio-grid {
            padding: 0 20px 44px;
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .portfolio-footer-inner { padding: 44px 20px 40px; }
          .footer-cta-heading { font-size: clamp(1.6rem, 6vw, 2.1rem); margin-bottom: 20px; }
          .btn-callback { width: 100%; text-align: center; padding: 14px 20px; }

          .modal-inner { max-width: 100%; border-radius: 0; }
          .modal-img-wrapper { height: 30vh; min-height: 200px; }
          .modal-content-wrapper { padding: 24px 20px; }
          .modal-close-btn { margin-bottom: 28px; }
          .modal-title { font-size: clamp(1.4rem, 6vw, 1.9rem); }
        }

        /* ══════════════════════════════
           RESPONSIVE — Small 390px
        ══════════════════════════════ */
        @media (max-width: 390px) {
          .portfolio-hero { padding: 80px 16px 40px; }
          .filter-row { padding: 0 16px; }
          .section-header-wrap { padding: 28px 16px 12px; }
          .portfolio-grid { padding: 0 16px 40px; gap: 24px; }
          .portfolio-footer-inner { padding: 40px 16px 36px; }
          .modal-content-wrapper { padding: 20px 16px; }
        }

        /* ══════════════════════════════
           LANDSCAPE MOBILE
        ══════════════════════════════ */
        @media (max-width: 768px) and (max-height: 500px) and (orientation: landscape) {
          .portfolio-hero { padding: 72px 40px 40px; }
          .modal-inner { grid-template-columns: 1fr 1fr; }
          .modal-img-wrapper { min-height: 240px; height: 80vw; max-height: 280px; }
        }
      `}</style>

      {/* ══════════════ HERO ══════════════ */}
      <section className="portfolio-hero">
        <h1 className="fu1">
          Our Portfolio
        </h1>
        <p className="fu2">
          At Khajanji Infraspaces, we approach each project with a thoughtful
          blend of environmental psychology, art, architecture, and cultural
          insight — all grounded in meticulous project management.
        </p>
      </section>

      {/* ══════════════ FILTER TABS ══════════════ */}
      <div className="filter-row-container">
        <div className="filter-row">
          {TABS.map(t => (
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

      {/* ══════════════ PROJECT SECTIONS ══════════════ */}
      <div>
        <ProjectSection label="Residential Projects"          projects={residential} onCardClick={setActiveProject} />
        <ProjectSection label="Commercial Projects"           projects={commercial}  onCardClick={setActiveProject} />
        <ProjectSection label="Plotted & Township Projects"   projects={plotted}     onCardClick={setActiveProject} />
        <ProjectSection label="Interior Design"               projects={interior}    onCardClick={setActiveProject} />
      </div>

      {/* ══════════════ FOOTER CTA ══════════════ */}
      <section className="portfolio-footer">
        <div className="portfolio-footer-inner sr">
          <div>
            <h2 className="footer-cta-heading">
              Have something<br />in mind? Let's talk.
            </h2>
            <Link
              to="/contact#enquiry-form"
              style={{
                display: 'inline-block',
                padding: '10px 22px',
                background: 'transparent',
                border: '1px solid #0a0a0a',
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                cursor: 'pointer',
                letterSpacing: '0.01em',
                color: '#0a0a0a',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a' }}
            >
              Request a call back
            </Link>
          </div>
          <div>
            <a href="mailto:khajanjiinfraspaces@gmail.com" className="footer-contact-link">
              khajanjiinfraspaces@gmail.com
            </a>
            <div className="footer-divider" />
            <p className="footer-detail">+91 93228 15523</p>
            <div className="footer-divider" />
            <p className="footer-detail">
              Nagpur<br />Maharashtra
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ MODAL ══════════════ */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  )
}