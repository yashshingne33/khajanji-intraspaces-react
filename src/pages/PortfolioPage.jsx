import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
function useReveal(dep) {
  useEffect(() => {
    const run = () => {
      const els = document.querySelectorAll('.sr')
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('sr-on')),
        { threshold: 0.07 }
      )
      els.forEach((el) => io.observe(el))
      return () => io.disconnect()
    }
    const t = setTimeout(run, 60)
    return () => clearTimeout(t)
  }, [dep])
}

/* ─────────────────────────────────────────────
   PROJECT DATA  (8 cards, 4×2 grid)
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    name: 'Bawly Modern House',
    location: 'San Diego, California',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=660&h=520&fit=crop',
  },
  {
    id: 2,
    name: 'Holis Passive House',
    location: 'Washington, D.C.',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=660&h=520&fit=crop',
  },
  {
    id: 3,
    name: 'GG Art Gallery',
    location: 'Vancouver, British Columbia',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=660&h=520&fit=crop',
  },
  {
    id: 4,
    name: 'Heise',
    location: 'Bodø, Norway',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=660&h=520&fit=crop',
  },
  {
    id: 5,
    name: 'Kaave Academy',
    location: 'Stockholm, Sweden',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=660&h=520&fit=crop',
  },
  {
    id: 6,
    name: 'Casa Palermo',
    location: 'Palermo, Italy',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=660&h=520&fit=crop',
  },
  {
    id: 7,
    name: 'Tower',
    location: 'Lyon, France',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=660&h=520&fit=crop&crop=bottom',
  },
  {
    id: 8,
    name: 'Grand Terra',
    location: 'Hanoi, Vietnam',
    img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=660&h=520&fit=crop',
  },
]

const SOCIAL_PATHS = [
  { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'Houzz',     d: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z' },
  { label: 'Facebook',  d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Pinterest', d: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
]

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const NAV = [
    { label: 'Studio',    to: '/about' },
    { label: 'Services',  to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Reviews',   to: '/reviews' },
    { label: 'Journal',   to: '/journal' },
  ]

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 48px',
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,1)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #e4e2dc' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <Link to="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', color:'#0a0a0a' }}>
          <span style={{ display:'inline-block', width:18, height:18, background:'#0a0a0a', clipPath:'polygon(0 100%, 50% 0, 100% 100%)' }} />
          <span style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:500, fontSize:15, letterSpacing:'0.02em' }}>Minnaro</span>
          <span style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:300, fontSize:11, color:'#8a8880', letterSpacing:'0.1em', marginLeft:2 }}>· interiors</span>
        </Link>
        <button onClick={() => setOpen(!open)} aria-label="Menu"
          style={{ background:'none', border:'none', cursor:'pointer', padding:4, display:'flex', flexDirection:'column', gap:5 }}>
          <span style={{ display:'block', width:22, height:1, background:'#0a0a0a', transform: open ? 'rotate(45deg) translate(3px,3px)' : 'none', transition:'transform 0.3s', transformOrigin:'center' }} />
          <span style={{ display:'block', width:16, height:1, background:'#0a0a0a', transform: open ? 'rotate(-45deg) translate(3px,-2px)' : 'none', transition:'transform 0.3s', transformOrigin:'center' }} />
        </button>
      </header>

      {/* Overlay menu */}
      <div style={{
        position:'fixed', inset:0, zIndex:190, background:'#fff',
        display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 48px',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition:'opacity 0.4s ease',
      }}>
        {NAV.map((l, i) => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
            style={{
              fontFamily:"'DM Serif Display',serif", fontSize:'clamp(2rem,6vw,4.5rem)',
              fontWeight:400, lineHeight:1.2, color:'#0a0a0a', textDecoration:'none',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              transition:`opacity 0.4s ease ${i*70}ms, transform 0.4s ease ${i*70}ms`,
            }}
            onMouseEnter={e => e.currentTarget.style.opacity='0.35'}
            onMouseLeave={e => e.currentTarget.style.opacity='1'}
          >{l.label}</Link>
        ))}
        <div style={{ marginTop:40, display:'flex', gap:24 }}>
          {SOCIAL_PATHS.map(s => (
            <a key={s.label} href="#"
              style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8a8880', textDecoration:'none' }}
              onMouseEnter={e => e.currentTarget.style.color='#0a0a0a'}
              onMouseLeave={e => e.currentTarget.style.color='#8a8880'}
            >{s.label}</a>
          ))}
        </div>
      </div>
    </>
  )
}

/* ─────────────────────────────────────────────
   FOOTER  — matches portfolio page PNG exactly:
   • White top section: logo row + divider + nav/social row
   • Below: full-width "Have something in mind? / Let's talk." left
             + Interior Design Awards badge + contact right
   • Bottom: back-to-top arrow left | copyright + terms right
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background:'#fff' }}>

      {/* ── Logo-only row (light gray bg, matches PNG) ── */}
      <div style={{ background:'#f5f4f0', padding:'28px 48px', display:'flex', alignItems:'center', gap:10 }}>
        <span style={{ display:'inline-block', width:18, height:18, background:'#0a0a0a', clipPath:'polygon(0 100%, 50% 0, 100% 100%)' }} />
        <span style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:500, fontSize:15, letterSpacing:'0.02em' }}>Minnaro</span>
        <span style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:300, fontSize:11, color:'#8a8880', letterSpacing:'0.1em', marginLeft:2 }}>· interiors</span>
      </div>

      {/* ── Divider ── */}
      <div style={{ height:1, background:'#e4e2dc' }} />

      {/* ── Nav + Social row ── */}
      <div style={{ padding:'20px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
        <nav style={{ display:'flex', gap:40, flexWrap:'wrap' }}>
          {[['Studio','/about'],['Services','/services'],['Portfolio','/portfolio'],['Reviews','/reviews'],['Journal','/journal']].map(([label, to]) => (
            <Link key={to} to={to}
              style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:300, color:'#0a0a0a', textDecoration:'none', opacity:0.75, letterSpacing:'0.01em' }}
              onMouseEnter={e => e.currentTarget.style.opacity='1'}
              onMouseLeave={e => e.currentTarget.style.opacity='0.75'}
            >{label}</Link>
          ))}
        </nav>
        <div style={{ display:'flex', gap:18, alignItems:'center' }}>
          {SOCIAL_PATHS.map(s => (
            <a key={s.label} href="#" aria-label={s.label}
              style={{ color:'#8a8880', display:'flex', alignItems:'center', textDecoration:'none' }}
              onMouseEnter={e => e.currentTarget.style.color='#0a0a0a'}
              onMouseLeave={e => e.currentTarget.style.color='#8a8880'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
            </a>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height:1, background:'#e4e2dc' }} />

      {/* ── Main CTA + contact row ── */}
      <div style={{
        padding:'52px 48px 44px',
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        gap:40,
        alignItems:'start',
      }}>
        {/* Left: "Have something in mind?" stacked above "Let's talk." + button */}
        <div>
          <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:'clamp(2rem,4vw,3.2rem)', fontWeight:400, lineHeight:1.18, marginBottom:28 }}>
            Have something in mind?<br />Let's talk.
          </h2>
          <button
            style={{
              padding:'10px 22px', background:'transparent',
              border:'1px solid #0a0a0a',
              fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:400,
              cursor:'pointer', letterSpacing:'0.01em',
              transition:'background 0.2s, color 0.2s',
              color:'#0a0a0a',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='#0a0a0a'; e.currentTarget.style.color='#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#0a0a0a' }}
          >
            Request a call back
          </button>
        </div>

        {/* Right: Interior Design Awards badge + contact details */}
        <div>
          {/* Awards badge */}
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:24 }}>
            {/* Matches the "iac Interior Design Awards" badge in the PNG */}
            <svg width="36" height="28" viewBox="0 0 44 32" fill="none">
              <rect x="1" y="1" width="42" height="30" stroke="#0a0a0a" strokeWidth="1.2"/>
              <text x="8"  y="12" style={{ fontFamily:'sans-serif', fontSize:7, fontWeight:700, fill:'#0a0a0a' }}>i</text>
              <text x="14" y="12" style={{ fontFamily:'sans-serif', fontSize:7, fontWeight:700, fill:'#0a0a0a' }}>a</text>
              <text x="20" y="12" style={{ fontFamily:'sans-serif', fontSize:7, fontWeight:700, fill:'#0a0a0a' }}>c</text>
              <text x="5"  y="22" style={{ fontFamily:'sans-serif', fontSize:5.5, fill:'#0a0a0a' }}>Interior</text>
              <text x="5"  y="28" style={{ fontFamily:'sans-serif', fontSize:5.5, fill:'#0a0a0a' }}>Design Awards</text>
            </svg>
          </div>

          {/* Email */}
          <a href="mailto:hello@minnaro.com"
            style={{ display:'block', fontFamily:"'DM Sans',sans-serif", fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0a0a0a', textDecoration:'none', marginBottom:2, borderBottom:'1px solid #0a0a0a', paddingBottom:1, width:'fit-content' }}
            onMouseEnter={e => e.currentTarget.style.opacity='0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity='1'}
          >hello@minnaro.com</a>

          {/* Divider line */}
          <div style={{ height:1, background:'#e4e2dc', margin:'10px 0' }} />

          {/* Phone */}
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0a0a0a', marginBottom:2 }}>
            +1 2030 4050 10
          </p>

          {/* Divider line */}
          <div style={{ height:1, background:'#e4e2dc', margin:'10px 0' }} />

          {/* Address */}
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'#0a0a0a', lineHeight:1.65 }}>
            New York, Seventh Ave, 20th<br />Floor, NY 10018
          </p>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height:1, background:'#e4e2dc' }} />

      {/* ── Copyright row ── */}
      <div style={{ padding:'16px 48px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        {/* Back to top arrow */}
        <button
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          aria-label="Back to top"
          style={{ background:'none', border:'none', cursor:'pointer', padding:4, display:'flex', alignItems:'center' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 13V1M2 6l5-5 5 5" stroke="#0a0a0a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div style={{ display:'flex', gap:24, alignItems:'center' }}>
          <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8a8880' }}>
            © 2009 – 2026 VAMTAM
          </span>
          <a href="#"
            style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8a8880', textDecoration:'none' }}
            onMouseEnter={e => e.currentTarget.style.color='#0a0a0a'}
            onMouseLeave={e => e.currentTarget.style.color='#8a8880'}
          >TERMS</a>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function PortfolioPage() {
  useReveal()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; background: #fff; color: #0a0a0a; }

        /* Scroll reveal */
        .sr     { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(.25,.46,.45,.94), transform 0.7s cubic-bezier(.25,.46,.45,.94); }
        .sr-on  { opacity: 1 !important; transform: translateY(0) !important; }
        .sr-d1  { transition-delay: 0.05s; }
        .sr-d2  { transition-delay: 0.12s; }
        .sr-d3  { transition-delay: 0.19s; }
        .sr-d4  { transition-delay: 0.26s; }

        /* Hero fade-up */
        .fu1 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.1s both; }
        .fu2 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.25s both; }
        @keyframes fu { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }

        /* Project card image zoom */
        .card-img-wrap { overflow: hidden; }
        .card-img-wrap img {
          display: block;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.75s cubic-bezier(.25,.46,.45,.94);
        }
        .project-card:hover .card-img-wrap img { transform: scale(1.05); }

        /* Responsive */
        @media (max-width: 1024px) {
          .portfolio-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 720px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .page-pad       { padding-left: 20px !important; padding-right: 20px !important; }
          .footer-cta-grid{ grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Navbar />

      {/* ══════════════════════════════════════════
          HEADER — title + intro text
          No filter bar. Matches PNG exactly.
      ══════════════════════════════════════════ */}
      <section className="page-pad" style={{ padding:'92px 48px 52px' }}>
        <h1 className="fu1" style={{
          fontFamily:"'DM Serif Display',serif",
          fontSize:'clamp(2rem,4.5vw,3.4rem)',
          fontWeight:400,
          lineHeight:1.15,
          letterSpacing:'-0.01em',
          marginBottom:28,
          color:'#0a0a0a',
        }}>
          Portfolio architecture
        </h1>
        <p className="fu2" style={{
          fontFamily:"'DM Sans',sans-serif",
          fontSize:14,
          lineHeight:1.78,
          color:'#555',
          fontWeight:300,
          maxWidth:340,
        }}>
          At Minnaro Interiors Studio, we approach each project with a thoughtful blend of environmental psychology, art, architecture, and cultural insight — all grounded in meticulous project management.
        </p>
      </section>

      {/* ══════════════════════════════════════════
          PROJECT GRID — 4 columns × 2 rows
          Image ratio: ~3:2.4 (wider than portrait)
          No overlays, no labels on images
          Name below image (normal weight)
          Location below name (tiny, all-caps, tracked, gray)
      ══════════════════════════════════════════ */}
      <main className="page-pad portfolio-grid" style={{
        padding:'0 48px 72px',
        display:'grid',
        gridTemplateColumns:'repeat(4, 1fr)',
        gap:'40px 20px',
      }}>
        {PROJECTS.map((p, i) => (
          <article
            key={p.id}
            className={`project-card sr sr-d${(i % 4) + 1}`}
            style={{ cursor:'pointer' }}
          >
            {/* Image */}
            <div className="card-img-wrap" style={{ aspectRatio:'3 / 2.45', marginBottom:14 }}>
              <img
                src={p.img}
                alt={p.name}
                onError={(e) => {
                  e.target.src = `https://placehold.co/660x520/e4e2dc/8a8880?text=${encodeURIComponent(p.name)}`
                }}
              />
            </div>

            {/* Project name */}
            <p style={{
              fontFamily:"'DM Sans',sans-serif",
              fontSize:15,
              fontWeight:400,
              color:'#0a0a0a',
              marginBottom:5,
              lineHeight:1.3,
            }}>
              {p.name}
            </p>

            {/* Location */}
            <p style={{
              fontFamily:"'DM Sans',sans-serif",
              fontSize:10,
              fontWeight:300,
              color:'#8a8880',
              letterSpacing:'0.14em',
              textTransform:'uppercase',
              lineHeight:1.4,
            }}>
              {p.location}
            </p>
          </article>
        ))}
      </main>

      <Footer />
    </>
  )
}