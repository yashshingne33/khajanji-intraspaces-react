// src/components/shared/SharedComponents.jsx
// Shared Navbar, Footer, styles and hooks used by all pages

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* ─────────────────────────────────────────────
   GLOBAL STYLES (injected inside Navbar/Global layout)
───────────────────────────────────────────── */
export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; background: #fff; color: #0a0a0a; }

  /* Scroll reveal matching aboutus */
  .sr     { opacity: 0; transform: translateY(28px); transition: opacity 0.75s cubic-bezier(.25,.46,.45,.94), transform 0.75s cubic-bezier(.25,.46,.45,.94); }
  .sr-on  { opacity: 1 !important; transform: translateY(0) !important; }
  .sr-d1  { transition-delay: 0.10s; }
  .sr-d2  { transition-delay: 0.20s; }
  .sr-d3  { transition-delay: 0.30s; }
  .sr-d4  { transition-delay: 0.40s; }

  /* Hero fade-up */
  .fu1 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.15s both; }
  .fu2 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.30s both; }
  .fu3 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.45s both; }
  @keyframes fu { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }

  /* Image hover zoom */
  .iz { overflow: hidden; }
  .iz img { display: block; transition: transform 0.75s cubic-bezier(.25,.46,.45,.94); }
  .iz:hover img { transform: scale(1.05); }

  /* Uniform section padding token */
  .section-pad { padding: 72px 48px; }

  /* Responsive helpers */
  @media (max-width: 900px) {
    .two-col  { grid-template-columns: 1fr !important; }
    .three-col{ grid-template-columns: 1fr !important; gap: 48px !important; }
    .pad      { padding-left: 24px !important; padding-right: 24px !important; }
    .section-pad { padding: 48px 24px !important; }
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
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('sr-on')
          }
        }),
        { threshold: 0.05 }
      )
      els.forEach((el) => io.observe(el))
      return () => io.disconnect()
    }
    const t = setTimeout(run, 100)
    return () => clearTimeout(t)
  }, [dep])
}

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
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
      <style>{GLOBAL_CSS}</style>
      <style>{`
        .nav-link:hover { opacity: 1 !important; }
        .dropdown-item:hover { background: #f5f4f0 !important; }
      `}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 var(--header-pad, 48px)',
        height: 72,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid #e4e2dc' : '1px solid transparent',
        transition: 'padding 0.3s, background 0.3s, border-bottom 0.3s',
      }}>

        {/* Logo */}
        <Link to="/" style={{ display:'flex', alignItems:'center', textDecoration:'none', color:'#0a0a0a', flexShrink:0 }}>
          <img
            src="/assets/logo.jpeg"
            alt="Khajanji Infraspaces"
            style={{ maxWidth: '140px', width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display:'flex', alignItems:'center', gap:36 }} className="desktop-nav">
          <Link to="/" className="nav-link" style={navLinkStyle(location.pathname === '/')}>Home</Link>
          <Link to="/about" className="nav-link" style={navLinkStyle(location.pathname === '/about')}>About</Link>
          <Link to="/portfolio" className="nav-link" style={navLinkStyle(location.pathname === '/portfolio')}>Portfolio</Link>

          {/* Services Dropdown */}
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

            <div style={{
              position:'absolute', top:'100%', left:'50%',
              marginTop: 8,
              background:'#fff',
              border:'1px solid #e4e2dc',
              boxShadow:'0 8px 32px rgba(0,0,0,0.06)',
              minWidth: 190,
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
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
          <Link
            to="/contact"
            className="nav-contact-btn"
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
          { label:'Home',           to:'/' },
          { label:'About',          to:'/about' },
          { label:'Portfolio',      to:'/portfolio' },
          { label:'Services',       to:'/services' },
          { label:'Contact us',     to:'/contact' },
        ].map((l, i) => (
          <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)}
            style={{
              fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.8rem,5vw,3.2rem)',
              fontWeight:400, lineHeight:1.25, color:'#0a0a0a', textDecoration:'none',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(16px)' : 'translateY(0)',
              transition:`opacity 0.4s ease ${i*60}ms, transform 0.4s ease ${i*60}ms`,
            }}
          >{l.label}</Link>
        ))}
        <div style={{ marginTop:16, paddingLeft:2 }}>
          {[
            { label:'Construction',    to:'/services/construction' },
            { label:'Interior design', to:'/services/interior-design' },
            { label:'Lighting design', to:'/services/lighting-design' },
          ].map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)}
              style={{ display:'block', fontFamily:"'Outfit', sans-serif", fontSize:14, fontWeight:300, color:'#8a8880', textDecoration:'none', marginBottom:10, paddingLeft:16 }}
            >→ {l.label}</Link>
          ))}
        </div>
      </div>

      <style>{`
        :root { --header-pad: 48px; }
        @media (max-width: 900px) {
          :root { --header-pad: 24px; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .nav-contact-btn { display: none !important; }
        }
        @media (max-width: 400px) {
          :root { --header-pad: 16px; }
        }
      `}</style>
    </>
  )
}

/* ─────────────────────────────────────────────
   FOOTER (Direct sync with aboutus.jsx rules)
───────────────────────────────────────────── */
export function Footer() {
  return (
    <footer style={{ background:'#fff', borderTop:'1px solid #e4e2dc' }}>
      <div style={{ borderTop:'1px solid #e4e2dc' }} />

     {/* Have something in mind + contact */}
       <style>{`
         .footer-cta-grid {
           padding: 48px 48px 40px;
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 40px;
           align-items: start;
         }
         @media (max-width: 768px) {
           .footer-cta-grid {
             grid-template-columns: 1fr;
             padding: 40px 24px 32px;
           }
         }
         @media (max-width: 480px) {
           .footer-cta-grid {
             padding: 32px 16px 28px;
           }
         }
       `}</style>
       <div className="footer-cta-grid">
         <div>
           <h2 style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:400, lineHeight:1.2, marginBottom:24 }}>
             Have something in mind?<br />Let's talk.
           </h2>
           <button
             style={{ padding:'10px 22px', background:'transparent', border:'1px solid #0a0a0a', fontFamily:"'Outfit', sans-serif", fontSize:13, fontWeight:400, cursor:'pointer', transition:'background 0.2s, color 0.2s', color:'#0a0a0a' }}
             onMouseEnter={e => { e.currentTarget.style.background='#0a0a0a'; e.currentTarget.style.color='#fff' }}
             onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#0a0a0a' }}
           >Request a call back</button>
         </div>

        <div>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:24 }}></div>
          <a href="mailto: khajanjiinfraspaces@gmail.com"
            style={{ display:'block', fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0a0a0a', textDecoration:'none', marginBottom:2, borderBottom:'1px solid #0a0a0a', paddingBottom:1, width:'fit-content' }}
            onMouseEnter={e => e.currentTarget.style.opacity='0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity='1'}
          >khajanjiinfraspaces@gmail.com</a>

          <div style={{ height:1, background:'#e4e2dc', margin:'10px 0' }} />
          <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0a0a0a', marginBottom:2 }}>
            +91 93228 15523
          </p>

          <div style={{ height:1, background:'#e4e2dc', margin:'10px 0' }} />
          <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'#0a0a0a', lineHeight:1.65 }}>
            NAGPUR<br/>MAHARASHTRA
          </p>
        </div>
      </div>
      <div style={{ height:1, background:'#e4e2dc' }} />
    </footer>
  )
}

/* ─────────────────────────────────────────────
   REUSABLE SUB-PAGE SECTIONS
───────────────────────────────────────────── */

// Centered pull-quote
export function PullQuote({ text }) {
  return (
    <section className="section-pad" style={{ display:'flex', justifyContent:'center' }}>
      <p className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.3rem, 2.4vw, 1.85rem)', fontWeight:400, lineHeight:1.58, maxWidth:680, textAlign:'center', color:'#0a0a0a' }}>
        {text}
      </p>
    </section>
  )
}

// Left photo + right process steps (gray layout background matching project tokens)
export function ProcessSection({ label, heading, steps, image }) {
  return (
    <section style={{ background:'#f0efeb', margin:'0' }}>
      <div className="two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:500 }}>
        {/* Left image */}
        <div className="iz" style={{ minHeight:420 }}>
          <img src={image} alt={heading} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        </div>
        {/* Right content box */}
        <div className="section-pad" style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <p className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:'#8a8880', fontWeight:400, marginBottom:20 }}>
            {label}
          </p>
          <h2 className="sr sr-d1" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.6rem,2.6vw,2.3rem)', fontWeight:400, lineHeight:1.25, marginBottom:44, color:'#0a0a0a' }}>
            {heading}
          </h2>
          {steps.map((step, i) => (
            <div key={i} className={`sr sr-d${(i % 3) + 1}`} style={{ marginBottom:36 }}>
              <div style={{ display:'flex', alignItems:'baseline', gap:12, marginBottom:8, borderBottom:'1px solid #dddbd5', paddingBottom:10 }}>
                <span style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, color:'#8a8880', fontWeight:300, letterSpacing:'0.04em', minWidth:20 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1rem,1.6vw,1.25rem)', fontWeight:400, color:'#0a0a0a' }}>
                  {step.title}
                </h3>
              </div>
              <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:13.5, lineHeight:1.75, color:'#666', fontWeight:300, paddingLeft:32 }}>
                {step.desc}
              </p>
            </div>
          ))}
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

// Two-column image pair
export function ImagePair({ left, right }) {
  return (
    <section style={{ padding:'0 48px', display:'grid', gridTemplateColumns:'1fr 2.4fr', gap:24, alignItems:'start' }} className="pad">
      <div className="iz" style={{ height:320, background: '#f5f5f3' }}>
        <img src={left} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>
      <div className="iz" style={{ height:320, background: '#f5f5f3' }}>
        <img src={right} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>
    </section>
  )
}

// Commitment Section
export function CommitmentSection({ columns }) {
  return (
    <section className="section-pad" style={{ maxWidth: '1440px', margin: '0 auto', margin: '24px auto' }}>
      <div style={{ borderBottom: '1px solid #e4e2dc', paddingBottom: '24px', marginBottom: '24px', textAlign: 'center' }}>
        <h2 className="sr" style={{ 
          fontFamily: "'Outfit', sans-serif", 
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', 
          fontWeight: 400, 
          lineHeight: 1.2, 
          margin: '0 auto',
          color: '#0a0a0a'
        }}>
          Our commitment to excellence
        </h2>
      </div>

      <div className="three-col" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '48px', 
        alignItems: 'start' 
      }}>
        {columns.map((col, i) => (
          <div key={i} className={`sr sr-d${(i % 3) + 1}`} style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ 
              fontFamily: "'Outfit', sans-serif", 
              fontSize: 15, 
              fontWeight: 400, 
              marginBottom: 20, 
              color: '#0a0a0a',
              letterSpacing: '0.02em'
            }}>
              {col.title}
            </h3>

            {col.desc && (
              <p style={{ 
                fontFamily: "'Outfit', sans-serif", 
                fontSize: 14, 
                lineHeight: 1.8, 
                color: '#555', 
                fontWeight: 300, 
                marginBottom: 16 
              }}>
                {col.desc}
              </p>
            )}

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {col.bullets && col.bullets.map((b, j) => (
                <li key={j} style={{ 
                  fontFamily: "'Outfit', sans-serif", 
                  fontSize: 13.5, 
                  lineHeight: '1.6', 
                  color: '#555', 
                  fontWeight: 300, 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 10 
                }}>
                  <span style={{ 
                    marginTop: '7px', 
                    width: 4, 
                    height: 4, 
                    borderRadius: '50%', 
                    background: '#8a8880', 
                    flexShrink: 0 
                  }} />
                  <span style={{ flex: 1 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

// Best interior designers section
export function BestDesignersSection() {
  return (
    <section className="section-pad">
      <div className="two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, alignItems:'start' }}>
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
        <p className="sr sr-d1" style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.8, color: '#444', fontWeight:300, textAlign:'justify' }}>
          From day one, our passionate team is by your side—guiding and advising you through every step of the design journey. We start by getting to know you personally, visiting your space and discussing your wants, needs, lifestyle, values, and aspirations. Based on those insights, we create mood boards and share initial design concepts. Together, we refine the direction, narrowing down design schemes and presenting carefully curated options for your feedback. Once the final design is approved, we bring it to life—managing and coordinating every detail from the first consultation to the final installation, ensuring a seamless and inspiring transformation.
        </p>
      </div>
    </section>
  )
}

// Explore Section
export function ExploreSection({ projects }) {
  return (
    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div style={{ borderTop:'1px solid #e4e2dc', paddingTop:24, marginBottom:20 }} />
      <h2 className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:400, lineHeight:1.2, marginBottom:36 }}>
        Explore the world of Khajanji Infraspaces
      </h2>
      <div className="three-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:24, alignItems:'start' }}>
        {projects.map((p, i) => (
          <div key={i} className={`sr sr-d${(i % 3) + 1}`}>
            <div className="iz" style={{ aspectRatio: '4/5', marginBottom:12, background: '#f5f5f3' }}>
              <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            </div>
            <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, fontWeight:400, color:'#0a0a0a', letterSpacing: '0.01em' }}>{p.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}