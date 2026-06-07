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
    body: [
      'We create photorealistic 3D architectural renderings, exterior elevation designs, and 3D floor plans that help homeowners, builders, and developers visualize projects before construction begins. Our designs combine modern aesthetics, functional layouts, and accurate detailing for residential, commercial, and real estate projects across Nagpur and India.'],
    fullWidthImg: '/assets/service-interior-design.jpg',
    projectsLabel: 'Architecture Design Projects',
    projects: [
      { name: 'Lonavala Valley Estate', img: '/assets/service-project1.jpg' },
      { name: 'The Heritage Dwelling', img: '/assets/service-project2.jpg' },
      { name: 'Skyline Penthouse', img: '/assets/service-project3.jpg' },
    ],
  },
  {
    id: 'construction',
    title: 'Construction & Development',
    body: [
      'Our construction services cover end-to-end project execution from structural work to final finishes, ensuring quality, safety, and timely delivery. We partner with builders, developers, and homeowners to deliver residential homes, commercial buildings, and renovation projects with precision, transparency, and professional project management.',
    ],
    fullWidthImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=500&fit=crop',
    projectsLabel: 'Construction Projects',
    projects: [
      { name: 'Pune Hillside Residence',     img: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&h=580&fit=crop' },
      { name: 'The Royal Enclave', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=380&h=260&fit=crop' },
      { name: 'Vasant Vihar Modern',        img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=380&h=260&fit=crop' },
    ],
  },
  {
    id: 'Interior Design',
    title: 'Interior Design',
    body: [
      'We design functional, aesthetically elevated interiors for homes, offices, showrooms, and hospitality spaces. From space planning and material selection to furniture, lighting, and decor, our interior solutions balance style, comfort, and practicality—tailored to your lifestyle, business needs, and budget.',
    ],
    fullWidthImg: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1400&h=500&fit=crop',
    projectsLabel: 'Interior Design Projects',
    projects: [
      { name: 'Mumbai Seaview Apartment', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=580&fit=crop' },
      { name: 'Colonial Heritage House',     img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=380&h=260&fit=crop' },
      { name: 'Goa Coastal Villa',       img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=380&h=260&fit=crop' },
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
        /* Service section responsive */
        /* Update layout tokens inside your <style> element */
        .svc-body-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .svc-proj-grid  { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; align-items: start; }
        .section-pad { padding: 72px 48px; }

        @media (max-width: 900px) {
          .svc-body-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .svc-proj-grid { grid-template-columns: 1fr 1fr !important; }
          .two-colHero { grid-template-columns: 1fr !important; }
          .two-colHero > div:last-child { height: 55vw !important; order: -1; }
          .section-pad { padding: 48px 24px !important; }
        }
        @media (max-width: 600px) {
          .svc-proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Navbar removed — global layout Header is used */}

      {/* ── HERO ── */}
      <section
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
        fontFamily: 'var(--font-sans)',
        background: 'var(--color-background-primary)'
      }}
      className="two-colHero"
    >
      {/* Left */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 48px'
        }}
        className="pad"
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
          Services & Expertise
        </h1>
        <p
          className="sr sr-d1"
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: 'var(--color-text-secondary)',
            fontWeight: 300,
            maxWidth: 465,
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

      {/* Right — hero photo */}
      <div style={{ overflow: 'hidden', height: '100vh' }} className="iz sr sr-d2">
        <img
          src="/assets/service-hero.jpg"
          alt="Interior design"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top'
          }}
        />
      </div>
    </section>

      {/* ── SERVICE SECTIONS  (repeat for each service) ── */}
      {SERVICES.map((svc, idx) => (
        <div key={svc.id} style={{ borderTop: idx > 0 ? '1px solid #e4e2dc' : 'none' }}>
          {/* ── Service heading + body text ── */}
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

          {/* ── Full width image wrapper ── */}
          <div className="iz sr" style={{ width:'100%', height:'clamp(300px, 45vw, 520px)', marginBottom: '40px' }}>
            <img
              src={svc.fullWidthImg}
              alt={svc.title}
              style={{ width:'100%', height:'100%', objectFit:'cover' }}
            />
          </div>

          {/* ── Projects grid label + 3-col lineup ── */}
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