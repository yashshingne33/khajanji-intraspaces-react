// src/pages/LightingDesignPage.jsx
import { Navbar, Footer, GLOBAL_CSS, useReveal, PullQuote, ProcessSection, ImagePair, CommitmentSection, BestDesignersSection, ExploreSection } from '../components/shared/SharedComponents'
import { Helmet } from 'react-helmet-async'

const STEPS = [
  { title: 'Discovery & consultation',       desc: 'We begin by understanding your vision, space, and lifestyle. Through an in-depth consultation, we assess your lighting needs, preferences, and functional goals—ensuring our design aligns perfectly with the ambiance and mood you want to create.' },
  { title: 'Concept development',            desc: 'Our team develops a tailored lighting concept based on your architecture, interior design, and personal style. We explore lighting types, layering strategies, and highlight focal areas to enhance atmosphere and functionality.' },
  { title: 'Lighting plan & fixture selection', desc: 'We create detailed lighting plans and reflected ceiling plans (RCPs), specifying fixture types, locations, and control systems. Then we curate a selection of lighting fixtures—combining aesthetics, performance, and efficiency to elevate every room.' },
  { title: 'Coordination with project team', desc: 'We work closely with your architect, builder, and electricians to ensure accurate implementation. Our coordination ensures that all lighting specifications are properly integrated during construction or renovation, avoiding costly changes later.' },
  { title: 'Final review & adjustments',     desc: 'Once installed, we conduct a full lighting review to fine-tune placement, brightness, and control settings. We make sure each fixture performs beautifully and complements your space, delivering a final result that feels balanced, warm, and inviting.' },
]

const COMMITMENT = [
  {
    title: 'Design Quality',
    // desc: 'We partner with only the most skilled artisans and tradespeople in India and from around the world.',
    bullets: ['Photorealistic rendering with accurate lighting, textures, and materials.', 'Modern architectural styles tailored to client preferences and local context.', 'Precise elevation details that align with construction feasibility.'],
  },
  {
    title: 'Visualization Excellence',
    // desc: 'We source from exclusive design galleries, top private brands and global suppliers.',
    bullets: ['Multiple viewing angles and perspectives for complete project understanding.', '3D floor plans and walkthrough concepts for spatial clarity.', 'Fast turnaround with revision support until satisfaction.'],
  },
  {
    title: 'Client Confidence',
    // desc: 'Our designs are strategically tailored to maximise your property\'s appeal in the Indian luxury market.',
    bullets: ['Clear visual communication that helps clients make informed decisions.', 'Design presentations that help builders market projects effectively.', 'Documentation support for approvals and tendering processes.'],
  },
]

const EXPLORE = [
 { name: 'Lonavala Valley Estate', img: '/assets/service-project1.jpg' },
 { name: 'The Heritage Dwelling', img: '/assets/service-project2.jpg' },
 { name: 'Skyline Penthouse', img: '/assets/service-project3.jpg' },
]

export default function LightingDesignPage() {
  useReveal()

  return (
    <>
      <style>{GLOBAL_CSS}{`
        @media (max-width: 900px) {
          .two-colHero {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .two-colHero > div:first-child {
            padding: 110px 24px 40px !important;
            order: 1;
          }
          .two-colHero > div:last-child {
            height: 50vh !important;
            order: 2;
          }

          .section-pad { padding: 40px 16px !important; }
          .pad { padding: 0 16px !important; }

          /* Process section: kill extra inner padding/maxWidth on mobile */
          .pad > div,
          .pad [style*="maxWidth"] {
            max-width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }

          /* If step numbers (01,02..) sit in a separate column, stack them */
          .pad [style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }

          .process-grid img, [class*="process"] img {
            width: 100% !important;
            height: 40vh !important;
            object-fit: cover !important;
          }
        }

        @media (max-width: 600px) {
          .section-pad { padding: 28px 14px !important; }
          .pad { padding: 0 14px !important; }
          .two-colHero > div:first-child { padding: 100px 16px 32px !important; }
          .two-colHero > div:last-child { height: 38vh !important; }
        }
      `}</style>
      
      <Helmet>
        <title>Interior Design Services in Nagpur, Amravati, Chandrapur | Khajanji Infraspaces</title>
        <meta name="description" content="Khajanji Infraspaces offers architecture, 3D design, sanction planning & interior design services in Nagpur, Amravati, Chandrapur & Wardha." />
      </Helmet>

      {/* ── HERO ── */}
      <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'78vh' }} className="two-colHero">
        <div className="pad" style={{ display:'flex', flexDirection:'column', justifyContent:'center', paddingTop:120, paddingBottom:80 }}>
          <h1 className="fu1" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(2.2rem,3.8vw,3.4rem)', fontWeight:400, lineHeight:1.13, letterSpacing:'-0.01em', marginBottom:28, color:'#0a0a0a' }}>
            3D Architecture & Elevation
          </h1>
          <p className="fu2" style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.78, color:'#555', fontWeight:400, maxWidth:320 }}>
            Whether you're building new, renovating, or refreshing a single space, we bring expert guidance and technical precision to illuminate your home or business beautifully.
          </p>
        </div>
        <div className="iz" style={{ minHeight:'100vh' }}>
          <img src="/assets/service-interior-design.jpg" alt="Lighting design" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }} />
        </div>
      </section>

      {/* ── OUR APPROACH ───────────────────────── */}
      <section className="section-pad">
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingTop: 24
          }}
        >
          <p
            className="sr"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#555',
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
        heading="Our signature lighting design process"
        steps={STEPS}
        image="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=700&h=900&fit=crop"
      />

      {/* ── IMAGE PAIR ── */}
      <div className="pad" style={{ paddingTop: 64 }}>
        <ImagePair
          left="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop"
          right="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=900&h=500&fit=crop"
        />
      </div>

      {/* ── COMMITMENT ── */}
      <CommitmentSection columns={COMMITMENT} />

      {/* ── FULL WIDTH IMAGE ── */}
      <div className="iz" style={{ width:'100%', height:'clamp(280px,40vw,540px)' }}>
        <img src="/assets/service-interior-design.jpg" alt="Lighting" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>

      {/* ── BEST DESIGNERS ── */}
      <BestDesignersSection />

      {/* ── EXPLORE ── */}
      <ExploreSection projects={EXPLORE} />

      {/* Internal Footer removed — global layout Footer is used */}
    </>
  )
}