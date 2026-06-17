// src/pages/Media.jsx
import { title } from 'framer-motion/client'
import { useState, useEffect } from 'react'

/* ── Scroll Reveal Hook — matches ContactPage debounced pattern ── */
// Replace your useReveal hook with this:
function useReveal(dep) {
  useEffect(() => {
    // Reset all .sr elements first (removes sr-on from old cards)
    document.querySelectorAll('.sr').forEach(el => el.classList.remove('sr-on'))

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
  }, [dep]) // ← re-runs whenever dep changes
}

const MEDIA_ITEMS = [
  {
    id: 1,
    type: 'video',
    category: 'ads',
    title: 'Luxury Commercial Property in Katol | Business Space 3D Visualization',
    description: 'Experience an unmatched standard of design innovation and premium infrastructure execution across central India.',
    videoUrl: 'https://www.youtube.com/embed/HVH6Edno3xo',
    thumbnail: 'https://img.youtube.com/vi/HVH6Edno3xo/maxresdefault.jpg',
    featured: true
  },
  {
    id: 2,
    type: 'video',
    category: 'walkthrough',
    title: 'Premium 3 Storey Apartment Project in Nagpur | Real Estate Walkthrough',
    description: 'A comprehensive interior and spatial design walkthrough curated by our leading space engineers.',
    videoUrl: 'https://www.youtube.com/embed/PJSSTQFR_3w',
    thumbnail: 'https://img.youtube.com/vi/PJSSTQFR_3w/maxresdefault.jpg',
    featured: true
  },
  {
    id: 3,
    type: 'video',
    category: 'ads',
    title: 'Best Interior Designers in Nagpur | Luxury Home 3D Visualization Tour',
    description: 'Step into a world of modern luxury, elegant interiors, and smart space planning — contemporary home designs crafted for stylish and comfortable living.',
    videoUrl: 'https://www.youtube.com/embed/3WuMmSREpyQ',
    thumbnail: 'https://img.youtube.com/vi/3WuMmSREpyQ/maxresdefault.jpg',
    featured: true
  },
  {
    id: 4,
    type: 'video',
    category: 'walkthrough',
    title: 'Premium Residential Plots in Nagpur | 3D Township Walkthrough',
    description: 'Explore our modern township and residential plot development through this stunning 3D walkthrough — designed for smart investors and future homeowners.',
    videoUrl: 'https://www.youtube.com/embed/jgT-Vq8i-98',
    thumbnail: 'https://img.youtube.com/vi/jgT-Vq8i-98/maxresdefault.jpg',
    featured: false
  },
  {
    id: 5,
    type: 'press',
    category: 'Nagpur Real Estate Design Trends 2026',
    title: 'Architecture, 3D Visualization & Modern Interior Design Insights',
    image: '/assets/media-living.jpg',
    link: '/media'
  },
  {
    id: 6,
    type: 'press',
    category: 'Plotted & Township Projects',
    title: 'How Photorealistic 3D Elevation Designs Boost Property Sales in Nagpur',
    image: '/assets/design-awards.png',
    link: '/media'
  },
  {
    id: 7,
    type: 'press',
    category: 'Turnkey Interior Projects in Nagpur',
    title: 'From Concept to Completion by Khajanji Infraspaces',
    image: '/assets/luxury.jpg',
    link: '/media'
  },
  {
    id: 8,
    type: 'image',
    category: 'gallery',
    imageUrl: '/assets/gallery1.jpg',
    title: 'Cascade'
  },
  {
    id: 9,
    type: 'image',
    category: 'gallery',
    imageUrl: '/assets/gallery2.jpg',
    title: 'City Centre Mall'
  },
  {
    id: 10,
    type: 'image',
    category: 'gallery',
    imageUrl: '/assets/gallery3.jpg',
    title: 'Prospera'
  }
]

const FILTERS = [
  { key: 'all',     label: 'All Coverage' },
  { key: 'video',   label: 'Videos' },
  { key: 'press',   label: 'Articles' },
  { key: 'gallery', label: 'Gallery' },
]

export default function Media() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [playingVideoId, setPlayingVideoId] = useState(null)

  useReveal(activeFilter) // ← pass the filter as dependency

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleFilterChange = filter => {
    setActiveFilter(filter)
    setPlayingVideoId(null)
  }

  const filtered = activeFilter === 'all'
    ? MEDIA_ITEMS
    : MEDIA_ITEMS.filter(item => item.type === activeFilter || item.category === activeFilter)

  return (
    <>
      <style>{`
        /* ── Base ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Outfit', sans-serif;
          -webkit-font-smoothing: antialiased;
          background: #f9f8f5;
          color: #0a0a0a;
        }

        /* ── Reveal Animations — matches ContactPage exactly ── */
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

        /* ── Shared Layout Tokens ── */
        .sec-label {
          font-size: 11px;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: #8a8880;
          font-weight: 400;
          display: block;
        }

        /* ══════════════════════════════
           HERO SECTION
        ══════════════════════════════ */
        .media-hero {
          padding: 140px 64px 72px;
          background: #f9f8f5;
          border-bottom: 1px solid #e4e2dc;
          text-align: center;
        }
        .media-hero h1 {
          font-size: clamp(2.2rem, 3.5vw, 3.2rem);
          font-weight: 400;
          line-height: 1.13;
          letter-spacing: -0.02em;
          color: #0a0a0a;
          margin-bottom: 20px;
        }
        .media-hero h1 em {
          font-style: italic;
          font-weight: 400;
          color: #555;
        }
        .media-hero p {
          font-size: clamp(0.9rem, 1.4vw, 1rem);
          font-weight: 300;
          line-height: 1.8;
          color: #555;
          max-width: 560px;
          margin: 0 auto;
        }

        /* ══════════════════════════════
           FILTER TABS — same as PortfolioPage
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
           MEDIA GRID
        ══════════════════════════════ */
        .media-grid-section {
          background: #f9f8f5;
          padding: 0 64px 80px;
        }

        .media-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 56px 24px;
          padding-top: 56px;
        }

        /* ── Media Card ── */
        .media-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        /* Visual container — same aspect ratio as portfolio cards */
        .card-visual {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #e4e2dc;
          margin-bottom: 16px;
        }

        /* ── Video card ── */
        .card-thumb-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .card-thumb-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          background: #e4e2dc;
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.75s cubic-bezier(.25,.46,.45,.94);
        }
        .card-thumb-wrap img.loaded {
          opacity: 1;
        }
        .card-thumb-wrap:hover img { transform: scale(1.05); }

        .video-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        /* Play button — dark pill matching brand */
        .play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0);
          transition: background .3s ease;
        }
        .card-thumb-wrap:hover .play-overlay { background: rgba(0,0,0,0.15); }

        .play-btn {
          width: 52px;
          height: 36px;
          background: rgba(10,10,10,0.85);
          border-radius: 4px;
          position: relative;
          transition: background .2s, transform .2s;
        }
        .play-btn::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 55%;
          transform: translate(-50%, -50%);
          border-style: solid;
          border-width: 6px 0 6px 10px;
          border-color: transparent transparent transparent #fff;
        }
        .card-thumb-wrap:hover .play-btn {
          background: #002ca3;
          transform: scale(1.05);
        }

        /* ── Image card ── */
        .card-img-wrap {
          width: 100%;
          height: 100%;
        }
        .card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .75s cubic-bezier(.25,.46,.45,.94);
        }
        .media-card:hover .card-img-wrap img { transform: scale(1.05); }

        /* ── Press / article card ── */
        .press-placeholder {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
        }

        /* Gradient overlay to ensure text readability without blurring/fading the whole image */
        .press-overlay-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%);
          z-index: 1;
        }
        .press-publication {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #0a0a0a;
          line-height: 1.35;
        }
        .press-date {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: #8a8880;
          text-transform: uppercase;
          letter-spacing: .12em;
        }

        /* ── Card metadata — mirrors PortfolioPage card-name / card-subtitle ── */
        .card-meta { padding: 0; }

        .card-title {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #0a0a0a;
          line-height: 1.35;
          margin-bottom: 6px;
        }
        .card-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #8a8880;
          line-height: 1.6;
          letter-spacing: normal;
          text-transform: none;
        }

        /* ══════════════════════════════
           RESPONSIVE — Tablet 1024px
        ══════════════════════════════ */
        @media (max-width: 1024px) {
          .media-hero { padding: 120px 40px 60px; }
          .filter-row { padding: 0 40px; gap: 28px; justify-content: flex-start; }
          .media-grid-section { padding: 0 40px 72px; }
          .media-grid { grid-template-columns: repeat(2, 1fr); gap: 48px 20px; }
        }

        /* ══════════════════════════════
           RESPONSIVE — Tablet 768px
        ══════════════════════════════ */
        @media (max-width: 768px) {
          .media-hero { padding: 100px 28px 52px; }
          .media-hero h1 { font-size: clamp(2rem, 6vw, 2.8rem); margin-bottom: 14px; }
          .media-hero p  { font-size: 13px; }

          .filter-row { padding: 0 28px; gap: 20px; }

          .media-grid-section { padding: 0 28px 64px; }
          .media-grid { gap: 40px 16px; }
        }

        /* ══════════════════════════════
           RESPONSIVE — Mobile 480px
        ══════════════════════════════ */
        @media (max-width: 480px) {
          .media-hero { padding: 88px 20px 44px; }
          .media-hero h1 { font-size: clamp(1.9rem, 7.5vw, 2.4rem); }

          .filter-row { padding: 0 20px; gap: 16px; }
          .filter-tab { font-size: 10px; padding: 16px 0 12px; }

          .media-grid-section { padding: 0 20px 56px; }
          .media-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            padding-top: 40px;
          }
        }

        /* ══════════════════════════════
           RESPONSIVE — Small 390px
        ══════════════════════════════ */
        @media (max-width: 390px) {
          .media-hero { padding: 80px 16px 40px; }
          .filter-row { padding: 0 16px; }
          .media-grid-section { padding: 0 16px 48px; }
          .media-grid { gap: 28px; }
        }

        /* ══════════════════════════════
           LANDSCAPE MOBILE
        ══════════════════════════════ */
        @media (max-width: 768px) and (max-height: 500px) and (orientation: landscape) {
          .media-hero { padding: 72px 40px 40px; }
          .media-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* ══════════════ HERO ══════════════ */}
      <section className="media-hero">
        <h1 className="fu1">
          Media & Press
        </h1>
        <p className="fu2">
          Videos, walkthroughs, and editorial coverage showcasing Khajanji Infraspaces
          across residential, commercial, and township developments.
        </p>
      </section>

      {/* ══════════════ FILTER TABS ══════════════ */}
      <div className="filter-row-container">
        <div className="filter-row">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filter-tab${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => handleFilterChange(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════ MEDIA GRID ══════════════ */}
      <section className="media-grid-section">
        <div className="media-grid">
          {filtered.map((item, index) => (
            <div key={item.id} className={`media-card sr sr-d${(index % 4) + 1}`}>

              {/* Visual block */}
              <div className="card-visual">

                {item.type === 'video' && (
                  playingVideoId === item.id ? (
                    <iframe
                      className="video-iframe"
                      src={`${item.videoUrl}?autoplay=1`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="card-thumb-wrap" onClick={() => setPlayingVideoId(item.id)}>
                      <img src={item.thumbnail} alt={item.title} onLoad={e => e.target.classList.add('loaded')} />
                      <div className="play-overlay">
                        <div className="play-btn" />
                      </div>
                    </div>
                  )
                )}

                {item.type === 'image' && (
                  <div className="card-img-wrap">
                    <img src={item.imageUrl} alt="Gallery" />
                  </div>
                )}

                {item.type === 'press' && (
                  <div className="press-placeholder">
                    {/* Sharp Background Image */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                      }} 
                    />
                    <div className="press-overlay-bg" />

                    {/* Text contents brought to the top layer with crisp white contrast */}
                    <span className="press-publication" style={{ position: 'relative', zIndex: 2, color: '#ffffff' }}>
                      {item.publication}
                    </span>
                    <span className="press-date" style={{ position: 'relative', zIndex: 2, color: '#e4e2dc' }}>
                      {item.date}
                    </span>
                  </div>
                )}
              </div>

              {/* Metadata */}
              {(item.title || item.description) && (
                <div className="card-meta">
                  {item.title       && <h3 className="card-title">{item.title}</h3>}
                  {item.description && <p  className="card-desc">{item.description}</p>}
                </div>
              )}

            </div>
          ))}
        </div>
      </section>
    </>
  )
}