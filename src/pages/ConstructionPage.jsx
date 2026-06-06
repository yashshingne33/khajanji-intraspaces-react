// src/pages/ConstructionPage.jsx
import { Navbar, Footer, GLOBAL_CSS, useReveal, PullQuote, ProcessSection, ImagePair, CommitmentSection, BestDesignersSection, ExploreSection } from '../components/shared/SharedComponents'

const STEPS = [
  { title: 'Initial consultation & planning',   desc: 'We begin by understanding your goals, budget, and timeline. Our team assesses the site, reviews requirements, and works with you to develop a clear, detailed project plan that aligns with your vision.' },
  { title: 'Design & permitting',               desc: 'Collaborating with architects and engineers, we finalise design plans and ensure all necessary permits and approvals are secured. This stage lays the foundation for a smooth build by addressing technical and regulatory requirements early on.' },
  { title: 'Procurement & scheduling',          desc: 'We carefully select quality materials and skilled subcontractors, creating a detailed project schedule. By managing resources effectively, we prepare to execute the construction phase efficiently and without delay.' },
  { title: 'Construction & quality control',    desc: 'Our experienced team oversees every aspect of the build, maintaining rigorous quality standards and safety protocols. Regular site inspections and progress updates keep the project on track, within budget, and aligned with your expectations.' },
  { title: 'Final inspection & handover',       desc: 'Upon completion, we conduct thorough inspections to ensure every detail meets our high standards and your satisfaction. We then hand over the finished space, along with all necessary documentation and a commitment to support you after project completion.' },
]

const COMMITMENT = [
  {
    title: 'Quality Execution',
    // desc: 'We partner with only the most skilled artisans and tradespeople in India and from around the world.',
    bullets: ['Structured construction process with strict quality checks at every stage.', 'Use of certified materials and skilled labor for durability and safety.', 'Adherence to timelines with transparent progress updates.'],
  },
  {
    title: 'Project Management',
    // desc: 'We source from exclusive design galleries, top private brands and global suppliers.',
    bullets: ['Dedicated project coordination from start to handover.', 'Budget tracking and cost optimization without compromising quality.', 'Coordination with architects, engineers, and vendors for seamless delivery.'],
  },
  {
    title: 'Client Trust',
    // desc: 'Our designs are strategically tailored to maximise your property\'s appeal in the Indian luxury market.',
    bullets: ['•	Transparent communication with regular site updates and documentation.', 'Professional supervision ensuring safety standards and compliance.', 'Post-completion support for warranty and maintenance guidance.'],
  },
]

const EXPLORE = [
  { name: 'Pune Hillside Residence',     img: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&h=580&fit=crop' },
  { name: 'The Royal Enclave', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop' },
  { name: 'Vasant Vihar Modern',        img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop' },
]

export default function ConstructionPage() {
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
          <h1 className="fu1" style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(2.2rem,3.8vw,3.4rem)', fontWeight:400, lineHeight:1.13, letterSpacing:'-0.01em', marginBottom:28, color:'#0a0a0a' }}>
            Construction 
          </h1>
          <p className="fu2" style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.78, color:'#555', fontWeight:300, maxWidth:320 }}>
            Khajanji Infraspaces offers a comprehensive and fully integrated range of building and construction services—covering everything from expertly executed basement conversions and elegant house extensions to premium, high-spec fit-outs.
          </p>
        </div>
        <div className="iz" style={{ minHeight:'78vh' }}>
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=1000&fit=crop" alt="Construction" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }} />
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
        heading="Delivering excellence from concept to completion"
        steps={STEPS}
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=900&fit=crop&crop=center"
      />

      {/* ── IMAGE PAIR ── */}
      <div className="pad" style={{ paddingTop: 64 }}>
        <ImagePair
          left="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
          right="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900&h=500&fit=crop"
        />
      </div>

      {/* ── COMMITMENT ── */}
      <CommitmentSection columns={COMMITMENT} />

      {/* ── FULL WIDTH IMAGE ── */}
      <div className="iz" style={{ width:'100%', height:'clamp(280px,38vw,520px)' }}>
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=700&fit=crop" alt="Interior" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>

      {/* ── BEST DESIGNERS ── */}
      <BestDesignersSection />

      {/* ── EXPLORE ── */}
      <ExploreSection projects={EXPLORE} />

      {/* Internal Footer removed — global layout Footer is used */}
    </>
  )
}