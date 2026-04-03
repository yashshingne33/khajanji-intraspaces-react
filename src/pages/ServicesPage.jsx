// src/pages/ServicesPage.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer, GLOBAL_CSS, useReveal, SOCIAL } from '../components/shared/SharedComponents'

/* ─────────────────────────────────────────────
   SERVICE SECTIONS DATA
───────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'interior-design',
    title: 'Interior design',
    to: '/services/interior-design',
    body: [
      'Rooted in the heritage of Khajanji Infraspaces\'s product design and driven by a refined, intuitive eye for colour, our interior design team brings a unique, personal touch to every project. We specialise in creating spaces that are not only sophisticated and timeless, but also rich in texture, narrative, and meaning. Drawing inspiration from natural materials, harmonious palettes, and layered details, our award-winning interiors are designed to evoke emotion—each space carefully curated to feel lived-in, loved, and entirely bespoke.',
      'Every project begins with a deep understanding of our clients—their lifestyles, aspirations, and aesthetic sensibilities. With a strong foundation in simplicity and a natural sense of visual order, our design philosophy centres on originality, authenticity, and considered elegance. We don\'t follow trends; we create enduring design stories that evolve with time and use.',
      'At Khajanji Infraspaces, we live and breathe the belief that great design goes far beyond appearance. It has the power to improve lives—fostering well-being, sparking creativity, and cultivating spaces of calm, joy, and inspiration. Whether it\'s a quiet retreat or a vibrant family home, we design environments that support the way you live, work, and connect.',
    ],
    fullWidthImg: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1400&h=600&fit=crop',
    projectsLabel: 'Interior Design Projects',
    projects: [
      { name: 'Lonavala Valley Estate', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=580&fit=crop' },
      { name: 'The Heritage Dwelling',        img: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=380&h=260&fit=crop' },
      { name: 'Skyline Penthouse',        img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=380&h=260&fit=crop' },
    ],
  },
  {
    id: 'lighting-design',
    title: 'Lighting design',
    to: '/services/lighting-design',
    body: [
      'Lighting is one of the most powerful—and often underestimated—elements in interior design. It has the unique ability to shape atmosphere, influence mood, and define the way we experience and move through a space. At Khajanji Infraspaces, we see lighting not just as a functional necessity, but as a creative tool that brings interiors to life.',
      'Our bespoke lighting design services seamlessly blend aesthetics with performance, crafting tailored lighting schemes that complement the architecture, elevate the design narrative, and highlight the finer details of your space. Whether it\'s warm ambient lighting for a living room, dramatic accent lighting to showcase artwork, or precision task lighting for a kitchen, we create layers of light that enhance both the beauty and usability of each room.',
      'From new-build homes to thoughtful renovations or the redesign of a single room, we bring expertise, creativity, and technical know-how to every project. Working closely with you from concept to installation, our team ensures that every fixture, fitting, and light source contributes to a cohesive and beautifully lit environment—one that feels as good as it looks.',
    ],
    fullWidthImg: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1400&h=500&fit=crop',
    projectsLabel: 'Lighting Design Projects',
    projects: [
      { name: 'Kodaikanal Retreat', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=580&fit=crop' },
      { name: 'Bandra Luxury Apartment',       img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=380&h=260&fit=crop' },
      { name: 'Contemporary Delhi Residence',         img: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?w=380&h=260&fit=crop' },
    ],
  },
  {
    id: 'bespoke-furnishings',
    title: 'Bespoke furnishings',
    to: '/services/interior-design',
    body: [
      'At Khajanji Infraspaces, we see furniture not simply as objects within a room, but as vital components of a larger design story—expressions of personal taste, functional artistry, and architectural harmony. Our bespoke furnishings service is born from a deep understanding of how interiors work, feel, and flow. It allows us to create truly custom pieces, tailored in every detail to suit your lifestyle, your space, and your aesthetic.',
      'Whether it\'s a built-in library wall that transforms a study, a statement dining table designed for entertaining, or a perfectly proportioned sofa that completes your living room, each piece is conceived with intention and made to measure. No off-the-shelf solutions—just finely crafted, thoughtfully designed furniture that elevates everyday living.',
      'We collaborate closely with you throughout the process, translating your vision into tangible design. Our in-house team works alongside trusted craftspeople and specialist makers, combining traditional joinery, hand-finishing techniques, and the finest materials—from solid hardwoods and natural veneers to hand-dyed leathers and richly textured fabrics.',
      'The possibilities are limitless. From elegant integrated storage that blends seamlessly into the architecture to expressive, sculptural pieces that serve as focal points, our bespoke furnishings are built for beauty, purpose, and longevity.',
    ],
    fullWidthImg: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1400&h=500&fit=crop',
    projectsLabel: 'Bespoke Furnishings Projects',
    projects: [
      { name: 'Mumbai Seaview Apartment', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=580&fit=crop' },
      { name: 'Colonial Heritage House',     img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=380&h=260&fit=crop' },
      { name: 'Goa Coastal Villa',       img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=380&h=260&fit=crop' },
    ],
  },
  {
    id: 'construction',
    title: 'Construction',
    to: '/services/construction',
    body: [
      'Khajanji Infraspaces offers a comprehensive and fully integrated range of building and construction services—covering everything from expertly executed basement conversions and elegant house extensions to premium, high-spec fit-outs. Whether you\'re reimagining a single room or undertaking a large-scale structural transformation, we bring creativity, technical expertise, and an unwavering commitment to quality at every stage of the process.',
      'Our approach is grounded in the principles that define every successful build: exceptional project management, rigorous quality control, and a team of skilled, trusted contractors who take pride in their craft. With extensive experience across residential and commercial projects, we know that the foundation of excellence lies in planning, precision, and the ability to anticipate and solve challenges before they arise.',
      'At Khajanji Infraspaces, we deliberately limit the number of projects we take on simultaneously. This allows us to devote the time, attention, and resources each build deserves—ensuring that every detail is meticulously managed, every decision is well-informed, and every outcome exceeds expectations. From initial consultation through to final completion, our team maintains a hands-on, collaborative approach that keeps timelines on track and budgets firmly in place.',
    ],
    fullWidthImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=500&fit=crop',
    projectsLabel: 'Construction Projects',
    projects: [
      { name: 'Pune Hillside Residence',     img: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&h=580&fit=crop' },
      { name: 'The Royal Enclave', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=380&h=260&fit=crop' },
      { name: 'Vasant Vihar Modern',        img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=380&h=260&fit=crop' },
    ],
  },
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
        .svc-body-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .svc-proj-grid  { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; align-items: start; }
        @media (max-width: 900px) {
          .svc-body-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .svc-proj-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .svc-proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'80vh' }} className="two-col">
        {/* Left */}
        <div className="pad" style={{ display:'flex', flexDirection:'column', justifyContent:'center', padding:'120px 48px 80px' }}>
          <h1 className="fu1" style={{ fontFamily:"34px 'Outfit', sans-serif", fontSize:'clamp(2.2rem,3.8vw,3.4rem)', fontWeight:400, lineHeight:1.13, letterSpacing:'-0.01em', marginBottom:28, color:'#0a0a0a' }}>
            Our services
          </h1>
          <p className="fu2" style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.78, color:'#555', fontWeight:300, maxWidth:340 }}>
            From concept to completion, Khajanji Infraspaces delivers expert guidance across every phase of a project—from creative direction and detailed construction drawings to the full installation of rooms or entire buildings. We offer professional, experienced interior design services for homes, multi-family residences, lobbies, offices, medical spaces, retail stores, showrooms, and boutique hotels.
          </p>
        </div>
        {/* Right — hero photo */}
        <div className="iz" style={{ minHeight:'80vh' }}>
          <img
            src="https://images.unsplash.com/photo-1618219944342-824e40a13285?w=900&h=1000&fit=crop&crop=top"
            alt="Interior design"
            style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }}
          />
        </div>
      </section>

      {/* ── SERVICE SECTIONS  (repeat for each service) ── */}
      {SERVICES.map((svc, idx) => (
        <div key={svc.id}>
          {/* ── Service heading + body text ── */}
          <section className="pad" style={{ padding:'96px 48px 64px' }}>
            <div className="svc-body-grid">
              {/* Left: title + Learn more */}
              <div>
                <h2 className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:400, lineHeight:1.2, marginBottom:24, color:'#0a0a0a' }}>
                  {svc.title}
                </h2>
                <Link
                  to={svc.to}
                  className="sr sr-d1"
                  style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:"'Outfit', sans-serif", fontSize:13, color:'#0a0a0a', textDecoration:'none', borderBottom:'1px solid #0a0a0a', paddingBottom:2, transition:'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity='0.5'}
                  onMouseLeave={e => e.currentTarget.style.opacity='1'}
                >
                  Learn more →
                </Link>
              </div>
              {/* Right: body paragraphs */}
              <div className="sr sr-d1">
                {svc.body.map((para, i) => (
                  <p key={i} style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.8, color:'#555', fontWeight:300, marginBottom: i < svc.body.length - 1 ? 20 : 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* ── Full width image ── */}
          <div className="iz" style={{ width:'100%', height:'clamp(280px,35vw,480px)', margin:'0 0 64px' }}>
            <img
              src={svc.fullWidthImg}
              alt={svc.title}
              style={{ width:'100%', height:'100%', objectFit:'cover' }}
            />
          </div>

          {/* ── Projects grid label + 3-col asymmetric grid ── */}
          <section className="pad" style={{ padding:'0 48px 96px' }}>
            <p className="sr" style={{ fontFamily:"'Outfit', sans-serif", fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'#8a8880', fontWeight:300, marginBottom:24 }}>
              {svc.projectsLabel}
            </p>
            <div className="svc-proj-grid">
              {svc.projects.map((p, i) => (
                <div key={i} className={`sr sr-d${i + 1}`}>
                  <div className="iz" style={{ aspectRatio: '4/5', marginBottom:12 }}>
                    <img
                      src={p.img}
                      alt={p.name}
                      style={{ width:'100%', height:'100%', objectFit:'cover' }}
                      onError={e => { e.target.src=`https://placehold.co/400x400/e4e2dc/8a8880?text=${encodeURIComponent(p.name)}` }}
                    />
                  </div>
                  <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, fontWeight:400, color:'#0a0a0a' }}>{p.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      ))}

      <Footer />
    </>
  )
}