// src/pages/LightingDesignPage.jsx
import { Navbar, Footer, GLOBAL_CSS, useReveal, PullQuote, ProcessSection, ImagePair, CommitmentSection, BestDesignersSection, ExploreSection } from '../components/shared/SharedComponents'

const STEPS = [
  { title: 'Discovery & consultation',       desc: 'We begin by understanding your vision, space, and lifestyle. Through an in-depth consultation, we assess your lighting needs, preferences, and functional goals—ensuring our design aligns perfectly with the ambiance and mood you want to create.' },
  { title: 'Concept development',            desc: 'Our team develops a tailored lighting concept based on your architecture, interior design, and personal style. We explore lighting types, layering strategies, and highlight focal areas to enhance atmosphere and functionality.' },
  { title: 'Lighting plan & fixture selection', desc: 'We create detailed lighting plans and reflected ceiling plans (RCPs), specifying fixture types, locations, and control systems. Then we curate a selection of lighting fixtures—combining aesthetics, performance, and efficiency to elevate every room.' },
  { title: 'Coordination with project team', desc: 'We work closely with your architect, builder, and electricians to ensure accurate implementation. Our coordination ensures that all lighting specifications are properly integrated during construction or renovation, avoiding costly changes later.' },
  { title: 'Final review & adjustments',     desc: 'Once installed, we conduct a full lighting review to fine-tune placement, brightness, and control settings. We make sure each fixture performs beautifully and complements your space, delivering a final result that feels balanced, warm, and inviting.' },
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
  { name: 'Kodaikanal Retreat', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=580&fit=crop' },
  { name: 'Bandra Luxury Apartment',       img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=260&fit=crop' },
  { name: 'Contemporary Delhi Residence',         img: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?w=400&h=260&fit=crop' },
]

export default function LightingDesignPage() {
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
            Lighting design
          </h1>
          <p className="fu2" style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.78, color:'#555', fontWeight:300, maxWidth:320 }}>
            Whether you're building new, renovating, or refreshing a single space, we bring expert guidance and technical precision to illuminate your home or business beautifully.
          </p>
        </div>
        <div className="iz" style={{ minHeight:'78vh' }}>
          <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=900&h=1000&fit=crop&crop=top" alt="Lighting design" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }} />
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <PullQuote text="Lighting is one of the most powerful tools in interior design—it shapes mood, highlights architecture, and transforms how a space is experienced. Our lighting design services blend aesthetics with functionality to create tailored lighting schemes that enhance every room." />

      {/* ── PROCESS SECTION ── */}
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
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=700&fit=crop" alt="Lighting" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>

      {/* ── BEST DESIGNERS ── */}
      <BestDesignersSection />

      {/* ── EXPLORE ── */}
      <ExploreSection projects={EXPLORE} />

      {/* Internal Footer removed — global layout Footer is used */}
    </>
  )
}