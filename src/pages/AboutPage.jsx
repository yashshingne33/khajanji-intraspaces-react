import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const timer = setTimeout(() => {
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
    }, 100)

    return () => clearTimeout(timer)
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
  { Icon: IconArc,      title: 'Design with purpose',       accent: 'D', desc: 'Every line, form, and layout must serve a function and enhance the human experience. We avoid trends for the sake of trends.' },
  { Icon: IconTriangle, title: 'Create with integrity',    accent: 'C', desc: 'We honor materials, respect the environment, and build transparent, lasting relationships with our clients and partners.' },
  { Icon: IconArcSmall, title: 'Plan with precision',accent: 'P', desc: 'Good design relies on rigorous logistics. We map out structural realities, timelines, and spaces down to the millimeter.' },
  { Icon: IconDouble,   title: 'Visualize with clarity', accent: 'V', desc: 'We remove the guesswork. Through high-fidelity visualization, clients can confidently see, feel, and understand the future of their project.' },
  { Icon: IconDouble,   title: 'Deliver with commitment', accent: 'D', desc: 'A beautiful concept means nothing without execution. We stay in the trenches until the physical reality matches the initial promise.' },
]

const TEAM = [
  { name: 'Piyush Khajanji',   role: 'Founder & Design Director',    img: '/assets/founder.jpg' },
  { name: 'Ritesh Pande',  role: 'Business Development Manager',   img: '2.jpeg' },
  { name: 'Lokesh Naktode',  role: 'Principal Architect',              img: '1.jpeg' },
  { name: 'Ayush Tijare',   role: 'Interior designer',    img: '3.jpeg' },
]

const SOCIAL_ICONS = [
  { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'Houzz',     d: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z' },
  { label: 'Facebook',  d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Pinterest', d: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
]

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background:'#fff', borderTop:'1px solid #e4e2dc' }}>
      <div style={{ height:1, background:'#e4e2dc' }} />
      <div style={{
        padding:'52px 48px 44px',
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        gap:40,
        alignItems:'start',
      }} className="hg">
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

        /* Uniform section padding token */
        .section-pad { padding: 72px 48px; }

        @media (max-width: 900px) {
          .hg  { grid-template-columns: 1fr !important; }
          .hi  { height: 55vw !important; }
          .vg  { grid-template-columns: 1fr !important; }
          .gg  { grid-template-columns: 1fr !important; }
          .ag  { grid-template-columns: 1fr !important; }
          .tg  { grid-template-columns: 1fr !important; gap: 48px !important; }
          .awg { grid-template-columns: 1fr !important; }
          .section-pad { padding: 48px 24px !important; }
          /* Responsive Hero */
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image { height: 60vh !important; }
          .hero-content { padding: 120px 24px 60px !important; }
        }
      `}</style>

      {/* ── 1. HERO ─────────────────────────────── */}
      <section
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
        fontFamily: 'var(--font-sans)',
        background: 'var(--color-background-primary)'
      }}
      className="hero-grid"
    >
      {/* Left — text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 48px'
        }}
        className="hero-content"
      >
        <h1
          className="sr"
          style={{
            fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
            fontWeight: 400,
            lineHeight: 1.13,
            letterSpacing: '-0.02em',
            margin: '0 0 28px',
            color: 'var(--color-text-primary)'
          }}
        >
          Execution with Purpose
        </h1>
        <p
          className="sr sr-d1"
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: 'var(--color-text-secondary)',
            fontWeight: 300,
            color: '#555',  
            maxWidth: 465,
            margin: 0
          }}
        >
          Khajanji Infraspaces is an architecture and 3D designing firm in Nagpur,
          Central India committed to shaping meaningful, well-planned, and inspiring
          spaces for modern India. Built on a foundation of design integrity and
          practical understanding, the firm has spent over a half a decade delivering
          solutions that respond to both client aspirations and real-world development
          needs. With experience across 20+ projects, we have worked on residential
          apartments, commercial projects, plotted developments, and townships. Our
          portfolio reflects versatility, creativity, and the ability to adapt our
          design thinking to projects of different scales and purposes.
        </p>
      </div>

      {/* Right — image */}
      <div style={{ overflow: 'hidden', height: '100vh' }} className="iz sr sr-d2">
        <img
          src="/assets/about.png"
          alt="Designer at work"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top'
          }}
        />
      </div>
    </section>

      {/* ── 2. PULL QUOTE ───────────────────────── */}
      {/* ── OUR APPROACH ───────────────────────── */}
      <section className="section-pad">
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <p
            className="sr"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8a8880',
              marginBottom: '24px',
            }}
          >
            Our Approach
          </p>

          <div
            style={{
              borderLeft: '2px solid #e4e2dc',
              paddingLeft: '32px',
            }}
          >
            <p
              className="sr sr-d1"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(1.4rem, 2vw, 1.8rem)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#0a0a0a',
                marginBottom: '24px',
              }}
            >
              We are a design-driven firm that believes architecture is not just about structures, but about creating experiences. Every line, form, and space should have a purpose, and every design should reflect a deeper understanding of people, place, and progress. 
              Our practice combines architecture, spatial planning, facade design, and high-quality 3D visualization to help clients see the future of their project with clarity.
              We aim to turn concepts into compelling realities through a process that is thoughtful, collaborative, and detail-oriented.

            </p>
          </div>
        </div>
      </section>

      {/* ── 2b. VISION & MISSION SECTION ───────── */}
      <section className="section-pad" style={{ borderTop: '1px solid #e4e2dc' }}>
        <div className="hg" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          
          {/* Vision Block */}
          <div className="sr">
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8a8880', fontWeight: 400, marginBottom: 24 }}>
              Our Vision
            </p>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)', fontWeight: 400, lineHeight: 1.35, color: '#0a0a0a', marginBottom: 20, minHeight: '60px' }}>
              Timeless, intelligent, and transformative spaces.
            </h3>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13.5, lineHeight: 1.8, color: '#555', fontWeight: 300, textAlign: 'justify' }}>
              To become a trusted name in architecture and design by creating spaces that are timeless, intelligent, and transformative. We aspire to contribute to the built environment with work that improves living standards, enhances business presence, and supports community growth.
            </p>
          </div>

          {/* Mission Block */}
          <div className="sr sr-d1">
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8a8880', fontWeight: 400, marginBottom: 24 }}>
              Our Mission
            </p>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)', fontWeight: 400, lineHeight: 1.35, color: '#0a0a0a', marginBottom: 20, minHeight: '60px' }}>
              Uniting creativity, utility, and concrete value.
            </h3>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13.5, lineHeight: 1.8, color: '#666', fontWeight: 300, textAlign: 'justify' }}>
              To provide innovative architectural and 3D design solutions that unite creativity, utility, and value. We are committed to delivering designs that inspire confidence, communicate vision effectively, and support better decision-making for developers, businesses, and property stakeholders.
            </p>
          </div>

        </div>
      </section>

      {/* ── 3. VALUES ───────────────────────────── */}
      <section style={{ background:'#f0efeb' }}>
        <div className="vg" style={{ display:'grid', gridTemplateColumns:'1fr 1fr' }}>
          <div className="iz" style={{ minHeight:600 }}>
            <img src="/assets/studio-about.png" alt="Studio atmosphere" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          </div>
          <div className="section-pad">
            <p className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:'#8a8880', fontWeight:300, marginBottom:18 }}>Our Core Values</p>
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

     {/* ── 4. GALLERY & WHAT SETS US APART ──────────────────────────── */}
      <section className="section-pad">
        <div className="gg" style={{ display: 'grid', gridTemplateColumns: '1fr 1.85fr', gap: 48, alignItems: 'start' }}>
          
          {/* Left Column: Narrative Content */}
          <div className="sr" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8a8880', fontWeight: 300, marginBottom: 16 }}>
              What Sets Us Apart
            </p>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 400, lineHeight: 1.25, marginBottom: 24, color: '#0a0a0a' }}>
              Thinking beyond drawings to build narratives.
            </h3>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, lineHeight: 1.75, color: '#444', fontWeight: 300, marginBottom: 16 }}>
              What distinguishes Khajanji Infraspaces is our ability to think beyond drawings and create design narratives that connect concept, usability, and aspiration. We understand that in today's market, a project must not only be well-designed, but also well-presented and well-positioned.
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, lineHeight: 1.75, color: '#444', fontWeight: 300 }}>
              Our integrated approach helps clients move from idea to visualization with confidence. From layout planning to 3D presentation, we bring structure to vision and elegance to execution.
            </p>
          </div>

          {/* Right Column: Image Display Stack */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              { src: '/assets/about-team.png', alt: 'Team meeting' },
              { src: '/assets/about-consultation.png', alt: 'Design consultation' },
            ].map((img, i) => (
              <div key={i} className={`sr sr-d${i + 1}`}>
                <div className="iz" style={{ height: 380, background: '#f5f5f3' }}>
                  <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a8880', marginTop: 12, fontWeight: 300 }}>
                  Studio Process {i + 1}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. TEAM (All 4 Members in One Horizontal Line) ─────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: '1px solid #e4e2dc' }}>
        
        {/* Top Header Block: Centered & Premium Editorial Layout */}
        <div style={{ maxWidth: '720px', margin: '0 auto 64px', textAlign: 'center' }}>
          <p className="sr" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8a8880', fontWeight: 400, marginBottom: 20 }}>
            The team
          </p>
          <h2 className="sr sr-d1" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 400, lineHeight: 1.2, marginBottom: 24, letterSpacing: '-0.01em' }}>
            Meet the team behind the designs
          </h2>
          <p className="sr sr-d2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, lineHeight: 1.8, color: '#666', fontWeight: 300 }}>
            Our team blends creativity, expertise, and precision to craft interiors that feel as good as they look. With diverse backgrounds in design, architecture, and project management, we bring a collaborative spirit and a shared passion for thoughtful, elevated living. Every project is a partnership — and every detail, a reflection of our commitment to excellence.
          </p>
        </div>

        {/* Bottom Cards Block: 4 Columns Clean Horizontal Lineup */}
        <div className="team-grid-fixed" style={{ display: 'grid', gap: '24px', alignItems: 'start' }}>
          {TEAM.map((m, i) => (
            <div key={i} className={`sr sr-d${(i % 4) + 1}`} style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="iz" style={{ aspectRatio: '3/4', width: '100%', overflow: 'hidden', background: '#f5f5f3' }}>
                <img 
                  src={m.img.startsWith('/') || m.img.startsWith('http') ? m.img : `/${m.img}`} 
                  alt={m.name}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    filter: 'grayscale(100%)', 
                    transition: 'filter 0.5s ease, transform 0.8s cubic-bezier(.25,.46,.45,.94)' 
                  }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%)'}
                />
              </div>
              <div style={{ marginTop: 16, textAlign: 'left' }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 400, color: '#0a0a0a', letterSpacing: '0.02em', margin: 0 }}>
                  {m.name}
                </p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#8a8880', fontWeight: 300, marginTop: 4, letterSpacing: '0.01em' }}>
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .team-grid-fixed {
            grid-template-columns: repeat(4, 1fr);
          }
          @media (max-width: 1024px) {
            .team-grid-fixed {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            .team-grid-fixed {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      <Footer />
    </>
  )
}