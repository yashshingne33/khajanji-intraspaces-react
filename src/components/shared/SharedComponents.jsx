// src/components/shared/SharedComponents.jsx
// Shared Navbar, Footer, styles and hooks used by all pages

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* ─────────────────────────────────────────────
   GLOBAL STYLES (inject once per page)
───────────────────────────────────────────── */
export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; background: #fff; color: #0a0a0a; }

  /* Scroll reveal */
  .sr     { opacity: 0; transform: translateY(26px); transition: opacity 0.75s cubic-bezier(.25,.46,.45,.94), transform 0.75s cubic-bezier(.25,.46,.45,.94); }
  .sr-on  { opacity: 1 !important; transform: translateY(0) !important; }
  .sr-d1  { transition-delay: 0.08s; }
  .sr-d2  { transition-delay: 0.16s; }
  .sr-d3  { transition-delay: 0.24s; }
  .sr-d4  { transition-delay: 0.32s; }

  /* Hero fade-up */
  .fu1 { animation: fu 0.8s cubic-bezier(.25,.46,.45,.94) 0.1s both; }
  .fu2 { animation: fu 0.8s cubic-bezier(.25,.46,.45,.94) 0.25s both; }
  .fu3 { animation: fu 0.8s cubic-bezier(.25,.46,.45,.94) 0.4s both; }
  @keyframes fu { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }

  /* Image hover zoom */
  .iz { overflow: hidden; }
  .iz img { display: block; transition: transform 0.75s cubic-bezier(.25,.46,.45,.94); }
  .iz:hover img { transform: scale(1.04); }

  /* Responsive helpers */
  @media (max-width: 900px) {
    .two-col  { grid-template-columns: 1fr !important; }
    .three-col{ grid-template-columns: 1fr !important; }
    .pad      { padding-left: 24px !important; padding-right: 24px !important; }
  }
`

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────── */
export function useReveal(dep) {
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
   SOCIAL ICON PATHS
───────────────────────────────────────────── */
export const SOCIAL = [
  { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'Houzz',     d: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z' },
  { label: 'Facebook',  d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Pinterest', d: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
]

/* ─────────────────────────────────────────────
   NAVBAR  — horizontal links style (matches screenshot)
   H. | About | Portfolio | Services (dropdown) | Media & Awards | Contact us
───────────────────────────────────────────── */
export function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setServicesOpen(false)
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinkStyle = (active) => ({
    fontFamily: "'Outfit', sans-serif",
    fontSize: 14,
    fontWeight: 400,
    color: '#0a0a0a',
    textDecoration: 'none',
    letterSpacing: '0.01em',
    opacity: active ? 1 : 0.75,
    padding: '4px 0',
    borderBottom: active ? '1px solid #0a0a0a' : '1px solid transparent',
    transition: 'opacity 0.2s',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
  })

  const isServicesActive = location.pathname.startsWith('/services')

  return (
    <>
      <style>{`
        .nav-link:hover { opacity: 1 !important; }
        .dropdown-item:hover { background: #f5f4f0 !important; }
      `}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 var(--header-pad, 48px)',
        height: 64,
        background: '#fff',
        backdropFilter: 'none',
        borderBottom: '1px solid #e4e2dc',
        transition: 'padding 0.3s, background 0.3s',
      }}>

        {/* Logo */}
        <Link to="/" style={{ display:'flex', alignItems:'center', textDecoration:'none', color:'#0a0a0a', flexShrink:0 }}>
          <img
            src="/assets/logo.jpeg"
            alt="Khajanji Infraspaces"
            style={{ width: '160px', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display:'flex', alignItems:'center', gap:36 }} className="desktop-nav">
          {/* H. */}
          <Link to="/" className="nav-link" style={navLinkStyle(location.pathname === '/')}>H.</Link>
          <Link to="/about" className="nav-link" style={navLinkStyle(location.pathname === '/about')}>About</Link>
          <Link to="/portfolio" className="nav-link" style={navLinkStyle(location.pathname === '/portfolio')}>Portfolio</Link>

          {/* Services with dropdown */}
          <div style={{ position:'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="nav-link"
              style={{ ...navLinkStyle(isServicesActive), background:'none', border:'none', display:'flex', alignItems:'center', gap:4 }}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginTop:1 }}>
                <path d="M1 1l4 4 4-4" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Dropdown */}
            <div style={{
              position:'absolute', top:'100%', left:'50%',
              transform: 'translateX(-50%)',
              marginTop: 8,
              background:'#fff',
              border:'1px solid #e4e2dc',
              boxShadow:'0 8px 32px rgba(0,0,0,0.08)',
              minWidth: 180,
              opacity: servicesOpen ? 1 : 0,
              pointerEvents: servicesOpen ? 'auto' : 'none',
              transform: servicesOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-6px)',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
              zIndex: 300,
            }}>
              {[
                { label: 'Construction',    to: '/services/construction' },
                { label: 'Interior design', to: '/services/interior-design' },
                { label: 'Lighting design', to: '/services/lighting-design' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="dropdown-item"
                  style={{
                    display:'block',
                    padding:'14px 20px',
                    fontFamily:"'Outfit', sans-serif",
                    fontSize:14,
                    fontWeight:300,
                    color:'#0a0a0a',
                    textDecoration:'none',
                    borderBottom:'1px solid #f0efeb',
                    transition:'background 0.15s',
                    background: location.pathname === item.to ? '#f5f4f0' : '#fff',
                  }}
                >{item.label}</Link>
              ))}
            </div>
          </div>

          <Link to="/media" className="nav-link" style={navLinkStyle(location.pathname === '/media')}>Media &amp; Awards</Link>
        </nav>

        {/* Actions (Contact + Mobile Toggle) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
          <Link
            to="/contact"
            style={{
              padding:'10px 22px',
              border:'1px solid #0a0a0a',
              fontFamily:"'Outfit', sans-serif",
              fontSize:13,
              fontWeight:400,
              color:'#0a0a0a',
              textDecoration:'none',
              letterSpacing:'0.01em',
              transition:'background 0.2s, color 0.2s',
              background:'#fff',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='#0a0a0a'; e.currentTarget.style.color='#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background='#fff'; e.currentTarget.style.color='#0a0a0a' }}
          >
            Contact us
          </Link>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu"
            style={{ display:'none', background:'none', border:'none', cursor:'pointer', padding:4, flexDirection:'column', gap:5 }}
            className="mobile-menu-btn"
          >
            <span style={{ display:'block', width:22, height:1, background:'#0a0a0a', transform: mobileOpen ? 'rotate(45deg) translate(3px,3px)' : 'none', transition:'transform 0.3s' }} />
            <span style={{ display:'block', width:16, height:1, background:'#0a0a0a', transform: mobileOpen ? 'rotate(-45deg) translate(3px,-2px)' : 'none', transition:'transform 0.3s' }} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div style={{
        position:'fixed', inset:0, zIndex:190, background:'#fff',
        display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 32px',
        opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none',
        transition:'opacity 0.35s ease',
      }}>
        {[
          { label:'H.',              to:'/' },
          { label:'About',           to:'/about' },
          { label:'Portfolio',       to:'/portfolio' },
          { label:'Services',        to:'/services' },
          { label:'Media & Awards',  to:'/media' },
        ].map((l, i) => (
          <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)}
            style={{
              fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.8rem,5vw,3.5rem)',
              fontWeight:400, lineHeight:1.25, color:'#0a0a0a', textDecoration:'none',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
              transition:`opacity 0.4s ease ${i*60}ms, transform 0.4s ease ${i*60}ms`,
            }}
          >{l.label}</Link>
        ))}
        <div style={{ marginTop:8, paddingLeft:2 }}>
          {[
            { label:'Construction',    to:'/services/construction' },
            { label:'Interior design', to:'/services/interior-design' },
            { label:'Lighting design', to:'/services/lighting-design' },
          ].map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)}
              style={{ display:'block', fontFamily:"'Outfit', sans-serif", fontSize:14, fontWeight:300, color:'#8a8880', textDecoration:'none', marginBottom:8, paddingLeft:16 }}
            >→ {l.label}</Link>
          ))}
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        :root { --header-pad: 48px; }
        @media (max-width: 900px) {
          :root { --header-pad: 24px; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

/* ─────────────────────────────────────────────
   FOOTER  — matches all service page PDFs
───────────────────────────────────────────── */
export function Footer() {
  return (
    <footer style={{ background:'#fff' }}>

      {/* Logo row */}
      <div style={{ padding:'36px 48px 0', display:'flex', alignItems:'center' }}>
        <img
          src="/assets/logo.jpeg"
          alt="Khajanji Infraspaces"
          style={{ height: '30px', width: 'auto', display: 'block' }}
        />
      </div>

      <div style={{ margin:'20px 0 0', borderTop:'1px solid #e4e2dc' }} />

      {/* Nav + social */}
      <div style={{ padding:'18px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
        <nav style={{ display:'flex', gap:32, flexWrap:'wrap' }}>
          {[['Studio','/about'],['Services','/services'],['Portfolio','/portfolio'],['Reviews','/reviews'],['Journal','/journal']].map(([l,to]) => (
            <Link key={to} to={to}
              style={{ fontFamily:"'Outfit', sans-serif", fontSize:13, fontWeight:300, color:'#0a0a0a', textDecoration:'none', opacity:0.75 }}
              onMouseEnter={e => e.currentTarget.style.opacity='1'}
              onMouseLeave={e => e.currentTarget.style.opacity='0.75'}
            >{l}</Link>
          ))}
        </nav>
        <div style={{ display:'flex', gap:16, alignItems:'center' }}>
          {SOCIAL.map(s => (
            <a key={s.label} href="#" aria-label={s.label}
              style={{ color:'#8a8880', display:'flex', alignItems:'center', textDecoration:'none' }}
              onMouseEnter={e => e.currentTarget.style.color='#0a0a0a'}
              onMouseLeave={e => e.currentTarget.style.color='#8a8880'}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={s.d}/></svg>
            </a>
          ))}
        </div>
      </div>

      <div style={{ borderTop:'1px solid #e4e2dc' }} />

      {/* Have something in mind + contact */}
      <div style={{ padding:'48px 48px 40px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'start' }}>
        <div>
          <h2 style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:400, lineHeight:1.2, marginBottom:28 }}>
            Have something in mind?<br />Let's talk.
          </h2>
          <button
            style={{ padding:'10px 22px', background:'transparent', border:'1px solid #0a0a0a', fontFamily:"'Outfit', sans-serif", fontSize:13, fontWeight:400, cursor:'pointer', transition:'background 0.2s, color 0.2s', color:'#0a0a0a' }}
            onMouseEnter={e => { e.currentTarget.style.background='#0a0a0a'; e.currentTarget.style.color='#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#0a0a0a' }}
          >Request a call back</button>
        </div>
        <div>
          {/* Awards badge */}
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:20 }}>
            <svg width="32" height="24" viewBox="0 0 44 32" fill="none">
              <rect x="1" y="1" width="42" height="30" stroke="#0a0a0a" strokeWidth="1.2"/>
              <text x="5" y="12" style={{ fontFamily:'sans-serif', fontSize:7, fontWeight:700, fill:'#0a0a0a' }}>iac</text>
              <text x="5" y="20" style={{ fontFamily:'sans-serif', fontSize:5, fill:'#0a0a0a' }}>Interior</text>
              <text x="5" y="27" style={{ fontFamily:'sans-serif', fontSize:5, fill:'#0a0a0a' }}>Design Awards</text>
            </svg>
          </div>
          <a href="mailto:hello@khajanjiinfraspaces.com" style={{ display:'block', fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0a0a0a', textDecoration:'none', borderBottom:'1px solid #0a0a0a', paddingBottom:1, marginBottom:10, width:'fit-content' }}>
            hello@khajanjiinfraspaces.com
          </a>
          <div style={{ height:1, background:'#e4e2dc', marginBottom:10 }} />
          <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0a0a0a', marginBottom:10 }}>+91 928 414 9958</p>
          <div style={{ height:1, background:'#e4e2dc', marginBottom:10 }} />
          <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'#0a0a0a', lineHeight:1.65 }}>
            NAGPUR<br/>MAHARASHTRA
          </p>
        </div>
      </div>

      <div style={{ borderTop:'1px solid #e4e2dc' }} />

      {/* Copyright */}
      <div style={{ padding:'14px 48px 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })} style={{ background:'none', border:'none', cursor:'pointer', padding:4 }} aria-label="Back to top">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 13V1M2 6l5-5 5 5" stroke="#0a0a0a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div style={{ display:'flex', gap:20 }}>
          <span style={{ fontFamily:"'Outfit', sans-serif", fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8a8880' }}>© 2009 – 2026 ROYALSWEBTECH</span>
          <a href="#" style={{ fontFamily:"'Outfit', sans-serif", fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8a8880', textDecoration:'none' }}>TERMS</a>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────
   REUSABLE SUB-PAGE SECTIONS
───────────────────────────────────────────── */

// Centered pull-quote
export function PullQuote({ text }) {
  return (
    <section style={{ padding:'100px 48px', display:'flex', justifyContent:'center' }}>
      <p className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.3rem,2.4vw,1.85rem)', fontWeight:400, lineHeight:1.58, maxWidth:680, textAlign:'center', color:'#0a0a0a' }}>
        {text}
      </p>
    </section>
  )
}

// Gray box: left photo + right numbered process steps
export function ProcessSection({ label, heading, steps, image }) {
  return (
    <section style={{ background:'#f0efeb', margin:'0' }}>
      <div className="two-col pad" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:500 }}>
        {/* Left image */}
        <div className="iz" style={{ minHeight:400 }}>
          <img src={image} alt={heading} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        </div>
        {/* Right steps */}
        <div style={{ padding:'64px 56px' }}>
          <p className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:'#8a8880', fontWeight:300, marginBottom:20 }}>
            {label}
          </p>
          <h2 className="sr sr-d1" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.6rem,2.6vw,2.3rem)', fontWeight:400, lineHeight:1.25, marginBottom:44, color:'#0a0a0a' }}>
            {heading}
          </h2>
          {steps.map((step, i) => (
            <div key={i} className={`sr sr-d${(i % 4) + 1}`} style={{ marginBottom:36 }}>
              <div style={{ display:'flex', alignItems:'baseline', gap:12, marginBottom:8, borderBottom:'1px solid #dddbd5', paddingBottom:10 }}>
                <span style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, color:'#8a8880', fontWeight:300, letterSpacing:'0.04em', minWidth:20 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1rem,1.6vw,1.25rem)', fontWeight:400, color:'#0a0a0a' }}>
                  {step.title}
                </h3>
              </div>
              <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:13, lineHeight:1.75, color:'#666', fontWeight:300, paddingLeft:32 }}>
                {step.desc}
              </p>
            </div>
          ))}
          {/* Book consultation button */}
          <div style={{ paddingLeft:32, marginTop:8 }}>
            <button
              style={{ padding:'11px 24px', background:'transparent', border:'1px solid #0a0a0a', fontFamily:"'Outfit', sans-serif", fontSize:13, fontWeight:400, cursor:'pointer', transition:'background 0.2s, color 0.2s', color:'#0a0a0a' }}
              onMouseEnter={e => { e.currentTarget.style.background='#0a0a0a'; e.currentTarget.style.color='#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#0a0a0a' }}
            >Book a Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Two-column image pair (asymmetric — small left, large right)
export function ImagePair({ left, right }) {
  return (
    <section style={{ padding:'0 48px 0', display:'grid', gridTemplateColumns:'1fr 2.4fr', gap:20, alignItems:'start' }}>
      <div className="iz" style={{ height:280 }}>
        <img src={left} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>
      <div className="iz" style={{ height:280 }}>
        <img src={right} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>
    </section>
  )
}

// "Our commitment to excellence" — 3-col grid
export function CommitmentSection({ columns }) {
  return (
    <section style={{ padding:'80px 48px' }}>
      <h2 className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:400, lineHeight:1.2, marginBottom:48, maxWidth:360 }}>
        Our commitment to excellence
      </h2>
      <div style={{ borderTop:'1px solid #e4e2dc', paddingTop:40 }} />
      <div className="three-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:40 }}>
        {columns.map((col, i) => (
          <div key={i} className={`sr sr-d${i + 1}`}>
            <div style={{ borderTop:'1px solid #e4e2dc', paddingTop:20, marginBottom:16 }} />
            <h3 style={{ fontFamily:"'Outfit', sans-serif", fontSize:15, fontWeight:500, marginBottom:12 }}>{col.title}</h3>
            <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:13, lineHeight:1.72, color:'#555', fontWeight:300, marginBottom:16 }}>{col.desc}</p>
            <ul style={{ listStyle:'none', padding:0 }}>
              {col.bullets.map((b, j) => (
                <li key={j} style={{ fontFamily:"'Outfit', sans-serif", fontSize:13, color:'#555', fontWeight:300, marginBottom:6, display:'flex', alignItems:'flex-start', gap:8 }}>
                  <span style={{ marginTop:5, width:5, height:5, borderRadius:'50%', background:'#0a0a0a', flexShrink:0 }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

// "Best interior designers" section
export function BestDesignersSection() {
  return (
    <section style={{ padding:'80px 48px' }}>
      <div className="two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }}>
        <div>
          <h2 className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:400, lineHeight:1.2, marginBottom:24 }}>
            Best interior designers
          </h2>
          <Link to="/about"
            className="sr sr-d1"
            style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:"'Outfit', sans-serif", fontSize:13, color:'#0a0a0a', textDecoration:'none', borderBottom:'1px solid #0a0a0a', paddingBottom:2, transition:'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity='0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity='1'}
          >Meet the team →</Link>
        </div>
        <p className="sr sr-d1" style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.8, color:'#555', fontWeight:300 }}>
          From day one, our passionate team is by your side—guiding and advising you through every step of the design journey. We start by getting to know you personally, visiting your space and discussing your wants, needs, lifestyle, values, and aspirations. Based on those insights, we create mood boards and share initial design concepts. Together, we refine the direction, narrowing down design schemes and presenting carefully curated options for your feedback. Once the final design is approved, we bring it to life—managing and coordinating every detail from the first consultation to the final installation, ensuring a seamless and inspiring transformation.
        </p>
      </div>
    </section>
  )
}

// "Explore the world of Khajanji Infraspaces" — 3-col asymmetric project grid
export function ExploreSection({ projects }) {
  return (
    <section style={{ padding:'0 48px 80px' }}>
      <div style={{ borderTop:'1px solid #e4e2dc', paddingTop:56, marginBottom:40 }} />
      <h2 className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:400, lineHeight:1.2, marginBottom:36 }}>
        Explore the world of Khajanji Infraspaces<br />Interior Design
      </h2>
      {/* Asymmetric 3-col: col1 tall, col2+col3 have top image + title below */}
      <div className="three-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:20, alignItems:'start' }}>
        {projects.map((p, i) => (
          <div key={i} className={`sr sr-d${i + 1}`}>
            <div className="iz" style={{ aspectRatio: '4/5', marginBottom:10 }}>
              <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            </div>
            <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, fontWeight:400, color:'#0a0a0a' }}>{p.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}