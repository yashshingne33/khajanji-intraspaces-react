// src/pages/InteriorDesignPage.jsx
import { Navbar, Footer, GLOBAL_CSS, useReveal, PullQuote, ProcessSection, ImagePair, CommitmentSection, BestDesignersSection, ExploreSection } from '../components/shared/SharedComponents'

const STEPS = [
  { title: 'Initial concept',                           desc: 'Our first meeting is dedicated entirely to listening—your vision, goals, favourite styles, and budget are at the heart of everything we do. We ask plenty of questions because our design process revolves completely around you. If you\'re unsure about your style, don\'t worry—we\'ll guide you by exploring details in photos together, helping you discover what resonates and what doesn\'t. This way, we quickly gain a clear understanding of your preferences and ensure every design choice reflects your unique taste.' },
  { title: 'Schematic design',                          desc: 'At Khajanji Infraspaces, our interior designers develop comprehensive Schematic Designs, Furniture Plans, and Ceiling Plans to optimise the use of space in your house, townhouse, or condo. This strong foundation enables us to thoughtfully select the perfect furniture, finishes, and lighting that complement your home\'s layout and style.' },
  { title: 'Drawing and specification documentation',   desc: 'Once you approve the Schematic Design, we move forward with finalising detailed drawings, selecting materials and finishes, and choosing furnishings. Our comprehensive design process covers every element of your home—from lighting and window treatments to artwork and accessories—ensuring a cohesive and personalised result.' },
  { title: 'Construction coordination and management',  desc: 'Khajanji Infraspaces\'s design experts meticulously review construction bid proposals and detailed shop drawings, facilitating smooth coordination between the general contractor and all involved trades. We ensure every detail is executed exactly as designed. Additionally, our team manages material and furnishing orders—from placement and delivery tracking to overseeing installations—guaranteeing that everything arrives on time and is perfectly installed in your home.' },
  { title: 'Final touches',                             desc: 'Our first meeting is dedicated entirely to listening—your vision, goals, favourite styles, and budget are at the heart of everything we do. We ask plenty of questions because our design process revolves completely around you. If you\'re unsure about your style, don\'t worry—we\'ll guide you by exploring details in photos together, helping you discover what resonates and what doesn\'t.' },
]

const COMMITMENT = [
  {
    title: 'Design Excellence',
    // desc: 'We partner with only the most skilled artisans and tradespeople in India and from around the world.',
    bullets: ['Custom space planning optimized for functionality and flow.', 'Thoughtful material, color, and finish selection suited to lifestyle and budget.', 'Lighting, furniture, and decor integration for cohesive aesthetics.'],
  },
  {
    title: 'Functionality & Comfort',
    // desc: 'We source from exclusive design galleries, top private brands and global suppliers.',
    bullets: ['Ergonomic layouts that enhance daily living.', 'Smart storage solutions and multi-functional design for modern living.', 'Climate-appropriate material choices for Nagpur\'s weather conditions.'],
  },
  {
    title: 'Client Satisfaction',
    // desc: 'Our designs are strategically tailored to maximise your property\'s appeal in the Indian luxury market.',
    bullets: ['Collaborative design process with regular client feedback and revisions.', 'Detailed execution drawings and vendor coordination for accurate implementation.', 'End-to-end project support from concept to final handover and styling.'],  },
]

const EXPLORE = [
  { name: 'Lonavala Valley Estate', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=580&fit=crop' },
  { name: 'The Heritage Dwelling',        img: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=400&h=260&fit=crop' },
  { name: 'Somersby villa',       img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=260&fit=crop' },
]

export default function InteriorDesignPage() {
  useReveal()

  return (
    <>
      <style>{GLOBAL_CSS}{`
        @media (max-width: 900px) {
          .two-colHero { grid-template-columns: 1fr !important; }
          .two-colHero > div:last-child { height: 50vh !important; order: -1; }
          .pad { padding: 80px 24px 60px !important; }
        }
      `}</style>
      {/* Internal Navbar removed — global layout Header is used */}

      {/* ── HERO ── */}
      <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'78vh' }} className="two-colHero">
        <div className="pad" style={{ display:'flex', flexDirection:'column', justifyContent:'center', paddingTop:120, paddingBottom:80 }}>
          <h1 className="fu1" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(2rem,3.8vw,3.4rem)', fontWeight:400, lineHeight:1.13, letterSpacing:'-0.01em', marginBottom:28, color:'#0a0a0a' }}>
            Interior Design
          </h1>
          <p className="fu2" style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.78, color:'#555', fontWeight:300, maxWidth:320 }}>
            We offer interior design services for both residential and commercial spaces, ranging from small-scale updates to large, full-scope projects. We work exclusively with licensed contractors and are happy to provide free estimates.
          </p>
        </div>
        <div className="iz" style={{ minHeight:'78vh' }}>
          <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=1000&fit=crop&crop=top" alt="Interior design" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }} />
        </div>
      </section>

      {/* ── OUR APPROACH ───────────────────────── */}
      <section className="section-pad">
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingTop: 64
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
              We start by listening deeply to understand your vision, functional needs, and budget, then translate those insights into thoughtful design and execution plans. Our multidisciplinary team combines architectural intelligence, 3D visualization, and construction expertise to ensure every project is beautiful, practical, and built to last. Through clear communication, detailed planning, and quality-focused execution, we deliver spaces that exceed expectations.
            </p>
          </div>
        </div>
      </section>
      
      {/* ── PROCESS SECTION ── */}
      <div className="pad" style={{ paddingTop: 64 }}></div>
      <ProcessSection
        label="The process"
        heading="Process of our interior renovation work"
        steps={STEPS}
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=900&fit=crop"
      />

      {/* ── IMAGE PAIR ── */}
      <div className="pad" style={{ paddingTop:64 }}>
        <ImagePair
          left="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop"
          right="https://images.unsplash.com/photo-1618219944342-824e40a13285?w=900&h=500&fit=crop"
        />
      </div>

      {/* ── COMMITMENT ── */}
      <CommitmentSection columns={COMMITMENT} />

      {/* ── FULL WIDTH IMAGE ── */}
      <div className="iz" style={{ width:'100%', height:'clamp(280px,40vw,540px)' }}>
        <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1600&h=700&fit=crop" alt="Interior" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>

      {/* ── BEST DESIGNERS ── */}
      <BestDesignersSection />

      {/* ── EXPLORE ── */}
      <ExploreSection projects={EXPLORE} />

      {/* Internal Footer removed — global layout Footer is used */}
    </>
  )
}