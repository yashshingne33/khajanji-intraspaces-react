// src/pages/ServicesPage.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer, GLOBAL_CSS, useReveal } from '../components/shared/SharedComponents'
import Process from '../components/home/Process'

/* ─────────────────────────────────────────────
   SERVICE SECTIONS DATA
───────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'architecture',
    title: '3D Architecture & Elevation',
    to: '/services/architecture',
    body: [
      'We create photorealistic 3D architectural renderings, exterior elevation designs, and 3D floor plans that help homeowners, builders, and developers visualize projects before construction begins. Our designs combine modern aesthetics, functional layouts, and accurate detailing for residential, commercial, and real estate projects across Nagpur and India.'
    ],
    fullWidthImg: '/assets/service-interior-design.jpg',
    projectsLabel: 'Architecture Design Projects',
    projects: [
      { name: 'Prospera (Besa Square, Nagpur)', img: '/assets/service-project1.jpg' },
      { name: 'Prospera (Besa Square, Nagpur)', img: '/assets/cascade-project.jpg' },
      { name: 'Prospera (Besa Square, Nagpur)', img: '/assets/service-project3.jpg' },
    ],
  },
  {
    id: 'construction',
    title: 'Construction & Development',
    to: '/services/construction',
    body: [
      'Our construction services cover end-to-end project execution from structural work to final finishes, ensuring quality, safety, and timely delivery. We partner with builders, developers, and homeowners to deliver residential homes, commercial buildings, and renovation projects with precision, transparency, and professional project management.',
    ],
    fullWidthImg: '/assets/construction.jpg',
    projectsLabel: 'Construction Projects',
    projects: [
      { name: 'The Nest (Dhaba Area, Nagpur)', img: '/assets/service-project4.jpg' },
      { name: 'Cascade ( Chhatrapati Nagar, Nagpur)', img: '/assets/service-project5.jpg' },
      { name: 'The Orchid (Mihan, Nagpur)', img: '/assets/service-project6.jpg' },
    ],
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    to: '/services/interior',
    body: [
      'We design functional, aesthetically elevated interiors for homes, offices, showrooms, and hospitality spaces. From space planning and material selection to furniture, lighting, and decor, our interior solutions balance style, comfort, and practicality—tailored to your lifestyle, business needs, and budget.',
    ],
    fullWidthImg: '/assets/interior-design.jpg',
    projectsLabel: 'Interior Design Projects',
    projects: [
      { name: "Jerry's Home", img: '/assets/project11-jerryhome.jpg' },
      { name: 'The White Villa',     img: '/assets/service-project8.jpg' },
      { name: 'Naman Lounge',           img: '/assets/service-project9.jpg' },
    ],
  },
]

const SERVICE_PROCESS_ITEMS = [
  { title: 'Step 1', body: 'Consultation – We understand your vision, requirements, budget, and timeline to set the right direction.' },
  { title: 'Step 2', body: 'Concept Planning – We develop initial layouts, design ideas, and architectural concepts aligned with your goals.' },
  { title: 'Step 3', body: '3D Visualization – We create realistic 3D views and presentations so you can see the outcome before execution.' },
  { title: 'Step 4', body: 'Design Development – We refine materials, details, and technical specifications to make the design build-ready.' },
  { title: 'Step 5', body: 'Execution & Delivery – We guide implementation with quality control, ensuring the final space matches the approved design.' },
]

/* ─────────────────────────────────────────────
   MAIN SERVICES PAGE
───────────────────────────────────────────── */
export default function ServicesPage() {
  useReveal()

  return (
    <>
      <style>{GLOBAL_CSS}{`
        /* Standard Desktop Layout */
        .svc-body-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .svc-proj-grid  { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; align-items: start; }
        .section-pad { padding: 72px 48px; }

        @media (max-width: 900px) {
          .svc-body-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .svc-proj-grid { grid-template-columns: 1fr 1fr !important; }

          .two-colHero { 
            grid-template-columns: 1fr !important; 
            min-height: auto !important;
          }
          
          /* Hero text block formatting */
          .two-colHero > div:first-child {
            padding: 120px 24px 48px !important;
            order: 1;
          }
          
          /* Hero image container adjustments */
          .two-colHero > div:last-child {
            height: auto !important;
            max-height: none !important;
            padding: 0 24px 48px !important;
            order: 2;
          }

          .section-pad { padding: 48px 24px !important; }
        }

        @media (max-width: 600px) {
          .svc-proj-grid { grid-template-columns: 1fr !important; }
          
          .two-colHero > div:first-child {
            padding: 100px 20px 36px !important;
          }
          .two-colHero > div:last-child {
            padding: 0 20px 36px !important;
          }
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '90vh', 
          fontFamily: "'Outfit', sans-serif", // Ensured proper string formatting for the font family
          background: 'var(--color-background-primary)',
          alignItems: 'stretch'
        }}
        className="two-colHero"
      >
        {/* Left Column: Text (Positioned higher up to match the screenshot layout) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Changed from center to push text elegantly upwards
            padding: '160px 64px 80px',   // Increased top padding to anchor it cleanly in the upper third
            boxSizing: 'border-box'
          }}
          className="pad"
        >
          <h1
            className="sr"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', // Matches the bold, prominent size in the screenshot
              fontWeight: 400,                         // Slightly heavier weight for editorial emphasis
              lineHeight: 1.15,
              letterSpacing: '-0.03em',                // Clean, premium kerning
              margin: '0 0 32px',                      // Creates comfortable space before the description
              color: '#0a0a0a',                        // Rich black text color
              maxWidth: 520                            // Keeps the heading beautifully balanced across 2 lines
            }}
          >
            Services & Expertise
          </h1>
          <p
            className="sr sr-d1"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 16,                            // Clean, crisp reading size
              lineHeight: 1.75,
              color: '#555',                        // Muted dark gray for premium hierarchy
              fontWeight: 300,
              maxWidth: 440,                           // Line-break optimization matching the screenshot scale
              margin: 0
            }}
          >
           From concept to completion, Khajanji Infraspaces delivers expert guidance
          across every phase of a project — from creative direction and detailed
          construction drawings to the full installation of rooms or entire buildings.
          We offer professional, experienced interior design services for homes,
          multi-family residences, lobbies, offices, medical spaces, retail stores,
          showrooms, and boutique hotels.
          </p>
        </div>

        {/* Right Column: Complete Uncropped Image */}
        <div 
          style={{ 
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'stretch'
          }} 
          className="iz sr sr-d2"
        >
          <img
            src="/assets/service-hero.jpg"
            alt="Khajanji Architectural Tower Elevation"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {SERVICES.map((svc, idx) => (
        <div key={svc.id} style={{ borderTop: idx > 0 ? '1px solid #e4e2dc' : 'none' }}>
          {/* Service heading + body text */}
          <section className="section-pad">
            <div className="svc-body-grid">
              {/* Left: title + link */}
              <div>
                <h2 className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.7rem, 2.8vw, 2.5rem)', fontWeight:400, lineHeight:1.26, marginBottom:24, color:'#0a0a0a' }}>
                  {svc.title}
                </h2>
                <Link
                  to={svc.to}
                  className="sr sr-d1"
                  style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:"'Outfit', sans-serif", fontSize:13, color:'#0a0a0a', textDecoration:'none', borderBottom:'1px solid #0a0a0a', paddingBottom:2, transition:'opacity 0.2s', width:'fit-content' }}
                  onMouseEnter={e => e.currentTarget.style.opacity='0.5'}
                  onMouseLeave={e => e.currentTarget.style.opacity='1'}
                >
                  Learn more →
                </Link>
              </div>
              {/* Right: body paragraphs */}
              <div className="sr sr-d1">
                {svc.body.map((para, i) => (
                  <p key={i} style={{ fontFamily:"'Outfit', sans-serif", fontSize:13.5, lineHeight:1.8, color:'#666', fontWeight:300, marginBottom: i < svc.body.length - 1 ? 20 : 0, textAlign: 'justify' }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Full width feature image */}
          <div className="iz sr" style={{ width:'100%', marginBottom: '40px' }}>
            <img
              src={svc.fullWidthImg}
              alt={svc.title}
              style={{ width:'100%', height:'auto', display: 'block' }}
            />
          </div>

          {/* Projects Lineup Grid */}
          <section className="section-pad" style={{ paddingTop: 24, paddingBottom: 80 }}>
            <p className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'#8a8880', fontWeight:300, marginBottom:24 }}>
              {svc.projectsLabel}
            </p>
            <div className="svc-proj-grid">
              {svc.projects.map((p, i) => (
                <div key={i} className={`sr sr-d${(i % 3) + 1}`} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="iz" style={{ aspectRatio: '3/4', width: '100%', overflow: 'hidden', background: '#f5f5f3', marginBottom: 16 }}>
                    <img
                      src={p.img}
                      alt={p.name}
                      style={{ width:'100%', height:'100%', objectFit:'cover', transition: 'transform 0.8s cubic-bezier(.25,.46,.45,.94)' }}
                      onError={e => { e.target.src=`https://placehold.co/400x500/e4e2dc/8a8880?text=${encodeURIComponent(p.name)}` }}
                    />
                  </div>
                  <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, fontWeight:400, color:'#0a0a0a', letterSpacing:'0.02em', margin:0 }}>{p.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      ))}

      {/* ── PROCESS SECTION ── */}
      <Process fadeUp={{}} items={SERVICE_PROCESS_ITEMS} />

      <Footer />
    </>
  )
}