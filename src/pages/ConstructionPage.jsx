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
    title: 'Superior Craftsmanship',
    desc: 'We partner with only the most skilled artisans and tradespeople in India and from around the world.',
    bullets: ['Over 1,000 businesses supported', 'Commitment to sustainability', 'Handmade furniture & human creations'],
  },
  {
    title: 'High-Quality Furnishings',
    desc: 'We source from exclusive design galleries, top private brands and global suppliers.',
    bullets: ['Global sourcing', 'Investment in quality', 'Discerning focus'],
  },
  {
    title: 'Investment Value',
    desc: 'Our designs are strategically tailored to maximise your property\'s appeal in the Indian luxury market.',
    bullets: ['Timeless elegance & lasting value', 'Prioritise value creation', 'Strategic design approach'],
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
      <style>{GLOBAL_CSS}</style>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'78vh' }} className="two-col">
        <div className="pad" style={{ display:'flex', flexDirection:'column', justifyContent:'center', padding:'120px 48px 80px' }}>
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

      {/* ── PULL QUOTE ── */}
      <PullQuote text="Our approach is grounded in the principles that define every successful build: exceptional project management, rigorous quality control, and a team of skilled, trusted contractors who take pride in their craft." />

      {/* ── PROCESS SECTION ── */}
      <ProcessSection
        label="The process"
        heading="Delivering excellence from concept to completion"
        steps={STEPS}
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=900&fit=crop&crop=center"
      />

      {/* ── IMAGE PAIR ── */}
      <div style={{ padding:'64px 48px 0' }}>
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

      <Footer />
    </>
  )
}