// src/pages/MediaAwardsPage.jsx
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
      { threshold: 0.07 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ─────────────────────────────────────────────
   SOCIAL ICON PATHS
───────────────────────────────────────────── */
const SOCIAL = [
  { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'Houzz',     d: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z' },
  { label: 'Facebook',  d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Pinterest', d: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
]

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

// International awards categories with projects
const INT_AWARDS = [
  {
    category: 'Interior Design Best of Year (BOY) Awards',
    entries: [
      { project: 'West End Labs', location: 'Mumbai, Maharashtra', winner: 'Winner: Gold, Publicly Accessible Interiors—Education' },
    ],
  },
  {
    category: 'World Architecture News (WAN) Awards',
    entries: [
      { project: 'Dawes Road Library', location: 'Toronto, Ontario', winner: 'Winner: Future Projects—Publicly Accessible (Americas)' },
    ],
  },
  {
    category: 'World Interiors News (WIN) Awards',
    entries: [
      { project: 'Western University, Weldon Library Revitalization', location: 'London, Ontario', winner: 'Winner: Gold, Publicly Accessible Interiors—Education' },
    ],
  },
  {
    category: 'The Architecture MasterPrize (AMP)',
    entries: [
      { project: 'Réseau Express Métropolitain (REM) Montreal, Quebec', location: '', winner: 'Design of the Year Award: Transportation' },
    ],
  },
  {
    category: 'Metropolis Planet Positive Awards',
    entries: [
      { project: 'Austin Community College Highland Phase II', location: 'Austin, Texas', winner: 'Honorable Mention: Higher Education' },
    ],
  },
  {
    category: 'International Interior Design Association Awards',
    entries: [
      { project: 'Bambu Atmosfera', location: 'Ubatuba, Brazil', winner: 'Winner: Building of the Year—Residential' },
    ],
  },
]

// Awards over the years table
const AWARDS_TABLE = [
  { year: '2025', title: 'Society for College and University Planning (SCUP) Excellence Awards' },
  { year: '2025', title: 'American Society of Landscape Architects (ASLA) Professional Awards' },
  { year: '2024', title: 'ASID National Awards' },
  { year: '2024', title: 'AIA Education Facility Design Awards' },
  { year: '2023', title: 'Healthcare Facilities Symposium Distinction Awards' },
]

/* ─────────────────────────────────────────────
   AWARD BADGE SVG COMPONENTS
───────────────────────────────────────────── */
const BadgeBueno = () => (
  <div style={{ display:'flex', alignItems:'center', gap:8 }}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="1" y="1" width="30" height="30" stroke="#0a0a0a" strokeWidth="1"/>
      <path d="M8 10 L16 6 L24 10 L24 22 L16 26 L8 22 Z" stroke="#0a0a0a" strokeWidth="1" fill="none"/>
      <text x="16" y="17" textAnchor="middle" style={{ fontFamily:'sans-serif', fontSize:5, fontWeight:700, fill:'#0a0a0a' }}>BNA</text>
    </svg>
    <div>
      <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, fontWeight:500, color:'#0a0a0a', lineHeight:1.3 }}>Bueno Architecture</p>
      <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, fontWeight:300, color:'#8a8880' }}>Award &nbsp; 2025</p>
    </div>
  </div>
)

const BadgeIDA = () => (
  <div style={{ display:'flex', alignItems:'center', gap:8 }}>
    <svg width="32" height="26" viewBox="0 0 44 32" fill="none">
      <rect x="1" y="1" width="42" height="30" stroke="#0a0a0a" strokeWidth="1.2"/>
      <text x="7"  y="13" style={{ fontFamily:'sans-serif', fontSize:9, fontWeight:800, fill:'#0a0a0a' }}>iac</text>
      <text x="5"  y="21" style={{ fontFamily:'sans-serif', fontSize:5, fill:'#0a0a0a' }}>Interior</text>
      <text x="5"  y="27" style={{ fontFamily:'sans-serif', fontSize:5, fill:'#0a0a0a' }}>Design Awards</text>
    </svg>
  </div>
)

const BadgeAWA = () => (
  <div style={{ display:'flex', alignItems:'center', gap:8 }}>
    <svg width="22" height="28" viewBox="0 0 22 32" fill="none">
      <rect x="1" y="1" width="20" height="30" fill="#0a0a0a"/>
      <text x="11" y="12" textAnchor="middle" style={{ fontFamily:'sans-serif', fontSize:6, fontWeight:700, fill:'#fff' }}>AWA</text>
      <line x1="4" y1="15" x2="18" y2="15" stroke="#fff" strokeWidth="0.8"/>
      <text x="11" y="21" textAnchor="middle" style={{ fontFamily:'sans-serif', fontSize:4, fill:'#fff' }}>Architectural</text>
      <text x="11" y="27" textAnchor="middle" style={{ fontFamily:'sans-serif', fontSize:4, fill:'#fff' }}>Design Award</text>
    </svg>
    <div>
      <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, fontWeight:500, color:'#0a0a0a', lineHeight:1.3 }}>AWA Architectural</p>
      <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, fontWeight:300, color:'#8a8880' }}>Design Award</p>
    </div>
  </div>
)

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
/* Internal Navbar and Footer removed in favor of global components */

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function MediaAwardsPage() {
  useReveal()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Outfit', sans-serif;-webkit-font-smoothing:antialiased;background:#fff;color:#0a0a0a;}

        .sr    {opacity:0;transform:translateY(26px);transition:opacity 0.75s cubic-bezier(.25,.46,.45,.94),transform 0.75s cubic-bezier(.25,.46,.45,.94);}
        .sr-on {opacity:1!important;transform:translateY(0)!important;}
        .sr-d1 {transition-delay:0.08s;}
        .sr-d2 {transition-delay:0.16s;}
        .sr-d3 {transition-delay:0.24s;}
        .sr-d4 {transition-delay:0.32s;}

        .fu1{animation:fu 0.8s cubic-bezier(.25,.46,.45,.94) 0.1s both;}
        .fu2{animation:fu 0.8s cubic-bezier(.25,.46,.45,.94) 0.28s both;}
        @keyframes fu{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}

        .iz{overflow:hidden;}
        .iz img{display:block;transition:transform 0.75s cubic-bezier(.25,.46,.45,.94);}
        .iz:hover img{transform:scale(1.04);}

        .award-row:last-child{border-bottom:none!important;}

        @media(max-width:900px){
          .hero-grid   {grid-template-columns:1fr!important;}
          .hero-img    {height:55vw!important;}
          .int-grid    {grid-template-columns:1fr!important;}
          .gallery-grid{grid-template-columns:1fr!important;}
          .table-grid  {grid-template-columns:1fr!important;}
          .expand-grid {grid-template-columns:1fr!important;}
          .footer-grid {grid-template-columns:1fr!important;}
          .pad         {padding-left:24px!important;padding-right:24px!important;}
        }
      `}</style>

      {/* Navbar removed — global layout Header is used */}

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO
          Left: "2025 Design Awards Recap" + body
          Right: tall warm architectural photo
      ══════════════════════════════════════════ */}
      <section className="hero-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',minHeight:'82vh'}}>
        <div className="pad" style={{display:'flex',flexDirection:'column',justifyContent:'center', paddingTop:120, paddingBottom:80}}>
          <h1 className="fu1" style={{
            fontFamily:"34px 'Outfit', sans-serif",
            fontSize:'clamp(2.2rem,3.8vw,3.4rem)',
            fontWeight:400,lineHeight:1.1,letterSpacing:'-0.00em',
            marginBottom:28,color:'#0a0a0a',
          }}>
            2025 Design Awards<br/>Recap
          </h1>
          <p className="fu2" style={{fontFamily:"'Outfit', sans-serif",fontSize:14,lineHeight:1.78,color:'#555',fontWeight:300,maxWidth:340}}>
            With 2024 now behind us, we're celebrating the standout projects that earned top honors last year. From creating healthy, high-performing workplaces to shaping equitable, community-driven spaces, this global showcase of design excellence highlights how the built environment is transforming the way we live, work, play, and heal.
          </p>
        </div>
        <div className="iz hero-img" style={{minHeight:'82vh'}}>
          <img
            src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=900&h=1100&fit=crop&crop=top"
            alt="Award-winning architecture"
            style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — PULL QUOTE + BADGES
      ══════════════════════════════════════════ */}
      <section className="pad" style={{paddingTop:100, paddingBottom:60, maxWidth:1200, margin:'0 auto'}}>
        <p className="sr" style={{
          fontFamily:"34px 'Outfit', sans-serif",
          fontSize:'clamp(1.25rem,2.3vw,1.8rem)',
          fontWeight:400,lineHeight:1.6,
          textAlign:'center',color:'#0a0a0a',
          marginBottom:60,
        }}>
          A heartfelt thank you to our clients, teams, and partners for their passion, creativity, and collaboration. Your contributions continue to inspire a culture of learning and innovation, raising the bar for design both within our firm and across the profession.
        </p>

        {/* Award badges row */}
        <div className="sr sr-d1" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:56,flexWrap:'wrap'}}>
          <BadgeBueno />
          <BadgeIDA />
          <BadgeAWA />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — INTERNATIONAL AWARDS (gray box)
          Left: stacked project photos + caption
          Right: year + heading + award categories
      ══════════════════════════════════════════ */}
      <section style={{background:'#f0efeb',padding:'0 0 0 0'}}>
        <div className="int-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',minHeight:600}}>

          {/* Left — stacked photos */}
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            <div className="iz" style={{flex:1,minHeight:300}}>
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=400&fit=crop"
                alt="York University"
                style={{width:'100%',height:'100%',objectFit:'cover'}}
              />
            </div>
            <div className="iz" style={{flex:1,minHeight:300}}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=400&fit=crop"
                alt="Award project"
                style={{width:'100%',height:'100%',objectFit:'cover'}}
              />
            </div>
            {/* Caption below */}
            <div style={{padding:'16px 40px 32px'}}>
              <p style={{fontFamily:"'Outfit', sans-serif",fontSize:14,fontWeight:400,color:'#0a0a0a',marginBottom:4}}>York University School of Continuing Studies</p>
              <p style={{fontFamily:"'Outfit', sans-serif",fontSize:10,letterSpacing:'0.14em',textTransform:'uppercase',color:'#8a8880',fontWeight:300}}>Toronto, Ontario</p>
            </div>
          </div>

          {/* Right — awards list */}
          <div className="pad" style={{paddingTop:64, paddingBottom:64, paddingLeft:56, display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
            <p className="sr" style={{fontFamily:"'Outfit', sans-serif",fontSize:11,letterSpacing:'0.14em',textTransform:'uppercase',color:'#8a8880',fontWeight:300,marginBottom:16}}>
              2025
            </p>
            <h2 className="sr sr-d1" style={{fontFamily:"'Outfit', sans-serif",fontSize:'clamp(1.8rem,3vw,2.8rem)',fontWeight:400,lineHeight:1.2,marginBottom:48,color:'#0a0a0a'}}>
              International Awards
            </h2>

            {INT_AWARDS.map((award,i)=>(
              <div key={i} className={`sr sr-d${(i%4)+1}`} style={{marginBottom:36}}>
                <h3 style={{fontFamily:"'Outfit', sans-serif",fontSize:14,fontWeight:500,color:'#0a0a0a',marginBottom:10}}>
                  {award.category}
                </h3>
                <div style={{height:1,background:'#dddbd5',marginBottom:14}}/>
                {award.entries.map((entry,j)=>(
                  <div key={j}>
                    <p style={{fontFamily:"'Outfit', sans-serif",fontSize:12,fontWeight:400,color:'#0a0a0a',marginBottom:2}}>{entry.project}</p>
                    {entry.location && <p style={{fontFamily:"'Outfit', sans-serif",fontSize:12,fontWeight:300,color:'#555',marginBottom:2}}>{entry.location}</p>}
                    <p style={{fontFamily:"'Outfit', sans-serif",fontSize:12,fontWeight:300,color:'#555'}}>{entry.winner}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — 2-COL ASYMMETRIC IMAGE GALLERY
          Small left (portrait) + large right
          With project name + location caption below each
      ══════════════════════════════════════════ */}
      <section className="pad gallery-grid" style={{paddingTop:64, paddingBottom:64, display:'grid',gridTemplateColumns:'1fr 2.5fr',gap:20,alignItems:'start'}}>
        {/* Left — small portrait */}
        <div className="sr">
          <div className="iz" style={{height:540,marginBottom:12}}>
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&h=500&fit=crop"
              alt="Duce Campus"
              style={{width:'100%',height:'100%',objectFit:'cover'}}
            />
          </div>
          <p style={{fontFamily:"'Outfit', sans-serif",fontSize:14,fontWeight:400,color:'#0a0a0a',marginBottom:4}}>Duce Campus</p>
          <p style={{fontFamily:"'Outfit', sans-serif",fontSize:10,letterSpacing:'0.14em',textTransform:'uppercase',color:'#8a8880',fontWeight:300}}>Doral, Florida</p>
        </div>
        {/* Right — large landscape */}
        <div className="sr sr-d1">
          <div className="iz" style={{height:540,marginBottom:12}}>
            <img
              src="https://images.unsplash.com/photo-1618219944342-824e40a13285?w=900&h=600&fit=crop"
              alt="Hotel Kempinski"
              style={{width:'100%',height:'100%',objectFit:'cover'}}
            />
          </div>
          <p style={{fontFamily:"'Outfit', sans-serif",fontSize:14,fontWeight:400,color:'#0a0a0a',marginBottom:4}}>Hotel Kempinski Laje de Care</p>
          <p style={{fontFamily:"'Outfit', sans-serif",fontSize:10,letterSpacing:'0.14em',textTransform:'uppercase',color:'#8a8880',fontWeight:300}}>Charlottesville, Virginia</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — AWARDS OVER THE YEARS TABLE
          Left: small label
          Right: year | award name rows with dividers
      ══════════════════════════════════════════ */}
      <section className="pad table-grid" style={{paddingBottom:80, display:'grid',gridTemplateColumns:'260px 1fr',gap:60,alignItems:'start'}}>
        {/* Left label */}
        <div>
          <p className="sr" style={{fontFamily:"'Outfit', sans-serif",fontSize:12,letterSpacing:'0.16em',textTransform:'uppercase',color:'#8a8880',fontWeight:400,paddingTop:4}}>
            Our awards over the years
          </p>
        </div>
        {/* Right — rows */}
        <div>
          {AWARDS_TABLE.map((a,i)=>(
            <div key={i} className={`award-row sr sr-d${(i%4)+1}`}
              style={{display:'grid',gridTemplateColumns:'80px 1fr',alignItems:'baseline',borderBottom:'1px solid #e4e2dc',padding:'16px 0'}}>
              <span style={{fontFamily:"'Outfit', sans-serif",fontSize:12,color:'#8a8880',fontWeight:300}}>{a.year}</span>
              <span style={{fontFamily:"'Outfit', sans-serif",fontSize:14,fontWeight:400,color:'#0a0a0a'}}>{a.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — EXPANDING PORTFOLIO
          Left: large serif heading + "Explore portfolio →"
          Right: large tall architectural photo (bleeds to edge)
      ══════════════════════════════════════════ */}
      <section className="expand-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',minHeight:'70vh',alignItems:'stretch'}}>
        {/* Left */}
        <div className="pad" style={{display:'flex',flexDirection:'column',justifyContent:'center', paddingTop:80, paddingBottom:80}}>
          <h2 className="sr" style={{
            fontFamily:"34px 'Outfit', sans-serif",
            fontSize:'clamp(1.8rem,3.2vw,2.9rem)',
            fontWeight:400,lineHeight:1.22,
            marginBottom:32,color:'#0a0a0a',
          }}>
            Our expanding portfolio—from refined to experimental—shows how our creative vision shapes everything we do
          </h2>
          <Link
            to="/portfolio"
            className="sr sr-d1"
            style={{display:'inline-flex',alignItems:'center',gap:6,fontFamily:"'Outfit', sans-serif",fontSize:13,color:'#0a0a0a',textDecoration:'none',borderBottom:'1px solid #0a0a0a',paddingBottom:2,width:'fit-content',transition:'opacity 0.2s'}}
            onMouseEnter={e=>e.currentTarget.style.opacity='0.5'}
            onMouseLeave={e=>e.currentTarget.style.opacity='1'}
          >
            Explore our portfolio →
          </Link>
        </div>
        {/* Right — large photo */}
        <div className="iz" style={{minHeight:'70vh'}}>
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&h=1000&fit=crop&crop=center"
            alt="Architectural portfolio"
            style={{width:'100%',height:'100%',objectFit:'cover'}}
          />
        </div>
      </section>

      {/* Footer removed — global layout Footer is used */}
    </>
  )
}