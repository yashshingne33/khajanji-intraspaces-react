import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.sr')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('sr-on')),
      { threshold: 0.08 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ─────────────────────────────────────────────
   VALUE ICONS  (hand-traced from PDF)
───────────────────────────────────────────── */
const IconArc = () => (
  <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
    <path d="M4 28 Q26 4 48 28" stroke="#0a0a0a" strokeWidth="1" fill="none"/>
    <line x1="4" y1="28" x2="48" y2="28" stroke="#0a0a0a" strokeWidth="1"/>
  </svg>
)
const IconTriangle = () => (
  <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
    <path d="M4 30 L26 6 L48 30" stroke="#0a0a0a" strokeWidth="1" fill="none"/>
    <line x1="4" y1="30" x2="48" y2="30" stroke="#0a0a0a" strokeWidth="1"/>
  </svg>
)
const IconArcSmall = () => (
  <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
    <path d="M10 28 Q26 10 42 28" stroke="#0a0a0a" strokeWidth="1" fill="none"/>
    <line x1="4" y1="28" x2="48" y2="28" stroke="#0a0a0a" strokeWidth="1"/>
  </svg>
)
const IconDouble = () => (
  <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
    <path d="M4 30 L26 6 L48 30" stroke="#0a0a0a" strokeWidth="1" fill="none"/>
    <path d="M13 30 L26 12 L39 30" stroke="#0a0a0a" strokeWidth="1" fill="none"/>
    <line x1="4" y1="30" x2="48" y2="30" stroke="#0a0a0a" strokeWidth="1"/>
  </svg>
)

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const VALUES = [
  { Icon: IconArc,      title: 'Timeless quality',        accent: 'T', desc: 'We create enduring designs that outlast trends and remain relevant for years to come.' },
  { Icon: IconTriangle, title: 'Modern functionality',    accent: 'M', desc: 'Every space is thoughtfully designed to be both beautiful and perfectly livable.' },
  { Icon: IconArcSmall, title: 'Client-centered approach',accent: 'C', desc: 'Your vision leads the way — we listen, adapt, and design with your lifestyle in mind.' },
  { Icon: IconDouble,   title: 'Conscious craftsmanship', accent: 'C', desc: 'We value sustainability and partner with artisans who share our commitment to ethical design.' },
]

const TEAM = [
  { name: 'Mikaele Mora',  role: 'Founder',              img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&h=620&fit=crop&crop=face' },
  { name: 'Isabela Core',  role: 'Interior designer',    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=620&fit=crop&crop=face' },
  { name: 'Kevin Smith',   role: 'Interior designer',    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=620&fit=crop&crop=face' },
  { name: 'Claris Hofman', role: 'Architect',            img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=620&fit=crop&crop=face' },
  { name: 'Carmen Lopes',  role: 'Operations manager',   img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=620&fit=crop&crop=face' },
  { name: 'Jack McLoren',  role: 'Engineer constructor', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=620&fit=crop&crop=face' },
]

const AWARDS = [
  { year: '2025', title: 'Interior studio of the year' },
  { year: '2025', title: 'Modern Luxury Interiors studio of the year' },
  { year: '2025', title: 'Best luxury design' },
  { year: '2025', title: 'Residential design interior design awards' },
  { year: '2025', title: 'Residential interior design of the year' },
]

const SOCIAL_ICONS = [
  { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'Houzz',     d: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z' },
  { label: 'Facebook',  d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Pinterest', d: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
]

/* ─────────────────────────────────────────────
            src="/assets/logo.jpeg"
            alt="Khajanji Infraspaces"
            style={{ height: '32px', width: 'auto', display: 'block' }}
          />
        </Link>
        {NAV.map((l, i) => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
            style={{
              fontFamily:"'Outfit', sans-serif", fontSize:'clamp(2rem,6vw,4.5rem)',
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
          {SOCIAL_ICONS.map(s => (
            <a key={s.label} href="#"
              style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8a8880', textDecoration:'none' }}
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
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background:'#fff', borderTop:'1px solid #e4e2dc' }}>

      {/* Logo row */}
      <div style={{ padding:'44px 48px 0', display:'flex', alignItems:'center' }}>
        <img
          src="/assets/logo.jpeg"
          alt="Khajanji Infraspaces"
          style={{ height: '30px', width: 'auto', display: 'block' }}
        />
      </div>

      {/* Nav + social */}
      <div style={{ padding:'20px 48px 20px', borderTop:'1px solid #e4e2dc', marginTop:20, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
        <nav style={{ display:'flex', gap:28, flexWrap:'wrap' }}>
          {[['Studio','/about'],['Services','/services'],['Portfolio','/portfolio'],['Reviews','/reviews'],['Journal','/journal']].map(([l,to]) => (
            <Link key={to} to={to} style={{ fontFamily:"'Outfit', sans-serif", fontSize:13, fontWeight:300, color:'#0a0a0a', textDecoration:'none', opacity:0.75 }}
              onMouseEnter={e => e.currentTarget.style.opacity='1'}
              onMouseLeave={e => e.currentTarget.style.opacity='0.75'}
            >{l}</Link>
          ))}
        </nav>
        <div style={{ display:'flex', gap:16, alignItems:'center' }}>
          {SOCIAL_ICONS.map(s => (
            <a key={s.label} href="#" aria-label={s.label}
              style={{ color:'#8a8880', display:'flex', alignItems:'center' }}
              onMouseEnter={e => e.currentTarget.style.color='#0a0a0a'}
              onMouseLeave={e => e.currentTarget.style.color='#8a8880'}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={s.d}/></svg>
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
        <div>
          <h2 style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(2rem,4vw,3.2rem)', fontWeight:400, lineHeight:1.18, marginBottom:28 }}>
            Have something in mind?<br />Let's talk.
          </h2>
          <button
            style={{
              padding:'10px 22px', background:'transparent',
              border:'1px solid #0a0a0a',
              fontFamily:"'Outfit', sans-serif", fontSize:13, fontWeight:400,
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

        <div>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:24 }}>
            <svg width="36" height="28" viewBox="0 0 44 32" fill="none">
              <rect x="1" y="1" width="42" height="30" stroke="#0a0a0a" strokeWidth="1.2"/>
              <text x="8"  y="12" style={{ fontFamily:'sans-serif', fontSize:7, fontWeight:700, fill:'#0a0a0a' }}>i</text>
              <text x="14" y="12" style={{ fontFamily:'sans-serif', fontSize:7, fontWeight:700, fill:'#0a0a0a' }}>a</text>
              <text x="20" y="12" style={{ fontFamily:'sans-serif', fontSize:7, fontWeight:700, fill:'#0a0a0a' }}>c</text>
              <text x="5"  y="22" style={{ fontFamily:'sans-serif', fontSize:5.5, fill:'#0a0a0a' }}>Interior</text>
              <text x="5"  y="28" style={{ fontFamily:'sans-serif', fontSize:5.5, fill:'#0a0a0a' }}>Design Awards</text>
            </svg>
          </div>

          <a href="mailto:hello@khajanjiinfraspaces.com"
            style={{ display:'block', fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0a0a0a', textDecoration:'none', marginBottom:2, borderBottom:'1px solid #0a0a0a', paddingBottom:1, width:'fit-content' }}
            onMouseEnter={e => e.currentTarget.style.opacity='0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity='1'}
          >hello@khajanjiinfraspaces.com</a>

          <div style={{ height:1, background:'#e4e2dc', margin:'10px 0' }} />

          <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0a0a0a', marginBottom:2 }}>
            +91 928 414 9958
          </p>

          <div style={{ height:1, background:'#e4e2dc', margin:'10px 0' }} />

          <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'#0a0a0a', lineHeight:1.65 }}>
            NAGPUR<br/>MAHARASHTRA
          </p>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height:1, background:'#e4e2dc' }} />

      {/* ── Copyright row ── */}
      <div style={{ padding:'16px 48px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
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
          <span style={{ fontFamily:"'Outfit', sans-serif", fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8a8880' }}>
            © 2009 – 2026 ROYALSWEBTECH
          </span>
          <a href="#"
            style={{ fontFamily:"'Outfit', sans-serif", fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8a8880', textDecoration:'none' }}
            onMouseEnter={e => e.currentTarget.style.color='#0a0a0a'}
            onMouseLeave={e => e.currentTarget.style.color='#8a8880'}
          >TERMS</a>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────
   MAIN PAGE EXPORT
───────────────────────────────────────────── */
export default function AboutPage() {
  useReveal()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; background: #fff; color: #0a0a0a; }

        .sr  { opacity: 0; transform: translateY(28px); transition: opacity 0.75s cubic-bezier(.25,.46,.45,.94), transform 0.75s cubic-bezier(.25,.46,.45,.94); }
        .sr-on { opacity: 1 !important; transform: translateY(0) !important; }
        .sr-d1 { transition-delay: 0.10s; }
        .sr-d2 { transition-delay: 0.20s; }
        .sr-d3 { transition-delay: 0.30s; }
        .sr-d4 { transition-delay: 0.40s; }

        .fu1 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.15s both; }
        .fu2 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.30s both; }
        .fu3 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.45s both; }
        @keyframes fu { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }

        .iz { overflow: hidden; }
        .iz img { display:block; transition: transform 0.75s cubic-bezier(.25,.46,.45,.94); }
        .iz:hover img { transform: scale(1.05); }

        @media (max-width: 900px) {
          .hg  { grid-template-columns: 1fr !important; }
          .hi  { height: 55vw !important; }
          .vg  { grid-template-columns: 1fr !important; }
          .gg  { grid-template-columns: 1fr !important; }
          .ag  { grid-template-columns: 1fr !important; }
          .tg  { grid-template-columns: 1fr !important; }
          .awg { grid-template-columns: 1fr !important; }
          .pad { padding-left: 24px !important; padding-right: 24px !important; }
          /* Responsive Hero */
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image { height: 60vh !important; }
          .hero-content { padding: 120px 24px 60px !important; }
        }
      `}</style>

      {/* Navbar removed — global layout Header is used */}

      {/* ── 1. HERO ─────────────────────────────── */}

      <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'100vh', fontFamily:'var(--font-sans)', background:'var(--color-background-primary)' }} className="hero-grid">
      <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', padding:'80px 48px' }} className="hero-content">
        <h1 style={{ fontSize:'clamp(4rem,3.5vw,3.2rem)', fontWeight:400, lineHeight:1.13, letterSpacing:'-0.02em', margin:'0 0 28px', color:'var(--color-text-primary)' }}>
          Elevating interiors<br />
          with lasting quality<br />
          and modern vision
        </h1>
        <p style={{ fontSize:16, lineHeight:1.8, color:'var(--color-text-secondary)', fontWeight:300, maxWidth:465, margin:0 }}>
          Khajanji Infraspaces was founded out of a shared desire to create spaces that feel as good as they look — honest, balanced, and deeply personal. With a foundation in interior architecture and product design, the studio connects people to their environments through refined, purposeful design.
        </p>
      </div>
      <div style={{ overflow:'hidden', height:'100vh' }} className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&h=1200&fit=crop&crop=top"
          alt="Designer at work"
          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }}
        />
      </div>
    </section>

      {/* ── 2. PULL QUOTE ───────────────────────── */}
      <section className="pad" style={{ padding:'110px 48px', display:'flex', justifyContent:'center' }}>
        <p className="sr" style={{ fontFamily:"24px 'Outfit', sans-serif", fontSize:'clamp(1.3rem,2.4vw,1.85rem)', fontWeight:400, lineHeight:1.3, maxWidth:800, textAlign:'center' }}>
          Every project begins with listening. We take the time to understand daily rhythms, personal values, and individual style. From that, we shape tailored interiors that reflect who you are — spaces that work quietly, beautifully, &amp; intuitively.
        </p>
      </section>

      {/* ── 3. VALUES ───────────────────────────── */}
      <section style={{ background:'#f0efeb' }}>
        <div className="vg" style={{ display:'grid', gridTemplateColumns:'1fr 1fr' }}>
          <div className="iz" style={{ minHeight:600 }}>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop"
              alt="Studio atmosphere" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          </div>
          <div className="pad" style={{ padding:'64px 56px' }}>
            <p className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:'#8a8880', fontWeight:300, marginBottom:18 }}>Our values</p>
            <h2 className="sr sr-d1" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.7rem,2.8vw,2.5rem)', fontWeight:400, lineHeight:1.26, marginBottom:40 }}>
              Driven by purpose,<br />designed with passion.<br />Integrity in every detail.
            </h2>
            {VALUES.map((v, i) => (
              <div key={i} className={`sr sr-d${(i % 3) + 1}`} style={{ borderTop:'1px solid #dddbd5', padding:'24px 0' }}>
                <v.Icon />
                <div style={{ height:6 }} />
                <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, fontWeight:500, marginBottom:8 }}>
                  <span style={{ color:'#c8a97e' }}>{v.accent}</span>{v.title.slice(1)}
                </p>
                <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:13, lineHeight:1.68, color:'#666', fontWeight:300, maxWidth:340 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. GALLERY ──────────────────────────── */}
      <section className="pad" style={{ padding:'80px 48px' }}>
        <div className="gg" style={{ display:'grid', gridTemplateColumns:'1fr 1.85fr', gap:24 }}>
          {[
            { src:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=700&fit=crop', alt:'Team meeting' },
            { src:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&h=700&fit=crop', alt:'Design consultation' },
          ].map((img, i) => (
            <div key={i} className={`sr sr-d${i + 1}`}>
              <div className="iz" style={{ height:380 }}>
                <img src={img.src} alt={img.alt} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
              <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:'#8a8880', marginTop:12, fontWeight:300 }}>
                Implemented more than 600 projects
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. APPROACH ─────────────────────────── */}
      <section className="pad" style={{ padding:'0 48px 80px' }}>
        <div className="ag" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }}>
          <div>
            <h2 className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:400, lineHeight:1.2 }}>
              Our approach. From vision to reality.
            </h2>
            <Link to="/contact" className="sr sr-d1"
              style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:"'Outfit', sans-serif", fontSize:13, color:'#0a0a0a', textDecoration:'none', borderBottom:'1px solid #0a0a0a', paddingBottom:2, marginTop:28, transition:'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity='0.5'}
              onMouseLeave={e => e.currentTarget.style.opacity='1'}
            >Contact us →</Link>
          </div>
          <div className="sr sr-d1">
            <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.8, color:'#555', fontWeight:300, marginBottom:20 }}>
              We oversee every aspect of your interior design project — from initial concept to final installation. Our team delivers tailored design solutions, guides you through each decision with clarity, and manages every detail's sourcing, purchasing, and installation.
            </p>
            <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.8, color:'#555', fontWeight:300 }}>
              We collaborate closely with trusted industry partners — contractors, millworkers, wallpaper installers, carpet specialists, workrooms, and art consultants — to ensure your space is beautifully and seamlessly brought to life.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. FULL-WIDTH IMAGE ─────────────────── */}
      <div className="iz" style={{ width:'100%', height:'clamp(300px,40vw,520px)' }}>
        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=700&fit=crop&crop=center"
          alt="Designer working on plans" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 30%' }} />
      </div>

      {/* ── 7. TEAM ─────────────────────────────── */}
      <section className="pad" style={{ padding:'96px 48px' }}>
        <div className="tg" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'start' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }}>
            {TEAM.map((m, i) => (
              <div key={i} className={`sr sr-d${(i % 3) + 1}`}>
                <div className="iz" style={{ aspectRatio:'3/4' }}>
                  <img src={m.img} alt={m.name}
                    style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(100%)', transition:'filter 0.45s ease, transform 0.75s cubic-bezier(.25,.46,.45,.94)' }}
                    onMouseEnter={e => e.currentTarget.style.filter='grayscale(0%)'}
                    onMouseLeave={e => e.currentTarget.style.filter='grayscale(100%)'}
                  />
                </div>
                <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:12, fontWeight:400, marginTop:10 }}>
                  {m.name} / <span style={{ color:'#8a8880', fontWeight:300 }}>{m.role}</span>
                </p>
              </div>
            ))}
          </div>
          <div style={{ position:'sticky', top:120 }}>
            <p className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:'#8a8880', fontWeight:300, marginBottom:18 }}>The team</p>
            <h2 className="sr sr-d1" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.7rem,2.6vw,2.4rem)', fontWeight:400, lineHeight:1.25, marginBottom:22 }}>
              Meet the team behind the designs
            </h2>
            <p className="sr sr-d2" style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.8, color:'#555', fontWeight:300 }}>
              Our team blends creativity, expertise, and precision to craft interiors that feel as good as they look. With diverse backgrounds in design, architecture, and project management, we bring a collaborative spirit and a shared passion for thoughtful, elevated living. Every project is a partnership — and every detail, a reflection of our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. AWARDS ───────────────────────────── */}
      <section style={{ background:'#f0efeb' }}>
        <div className="pad" style={{ padding:'80px 48px' }}>
          <div className="awg" style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:80, alignItems:'start' }}>
            <div>
              <p className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:'#8a8880', fontWeight:300, marginBottom:18 }}>
                Awards &amp; Recognition
              </p>
              <h2 className="sr sr-d1" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.7rem,2.6vw,2.5rem)', fontWeight:400, lineHeight:1.25, marginBottom:22 }}>
                Recognition that reflects our purpose
              </h2>
              <p className="sr sr-d2" style={{ fontFamily:"'Outfit', sans-serif", fontSize:13, lineHeight:1.78, color:'#666', fontWeight:300, marginBottom:30 }}>
                When our work is honored or featured in leading publications, it reflects the creativity, care, and collaboration at the heart of Khajanji Infraspaces. These recognitions speak not just to aesthetics, but to the spaces that truly connect with our clients and the architectural community alike.
              </p>
              <Link to="/contact" className="sr sr-d3"
                style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:"'Outfit', sans-serif", fontSize:13, color:'#0a0a0a', textDecoration:'none', borderBottom:'1px solid #0a0a0a', paddingBottom:2, transition:'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity='0.5'}
                onMouseLeave={e => e.currentTarget.style.opacity='1'}
              >Contact us →</Link>
            </div>
            <ul style={{ listStyle:'none', padding:0, margin:0 }}>
              {AWARDS.map((a, i) => (
                <li key={i} className={`sr sr-d${(i % 3) + 1}`}
                  style={{ display:'grid', gridTemplateColumns:'72px 1fr', alignItems:'baseline', borderBottom:'1px solid #dddbd5', padding:'17px 0' }}>
                  <span style={{ fontFamily:"'Outfit', sans-serif", fontSize:12, color:'#8a8880', fontWeight:300 }}>{a.year}</span>
                  <span style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, fontWeight:400 }}>{a.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}