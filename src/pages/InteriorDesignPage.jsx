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
            Tailored interior design services
          </h1>
          <p className="fu2" style={{ fontFamily:"'Outfit', sans-serif", fontSize:14, lineHeight:1.78, color:'#555', fontWeight:300, maxWidth:320 }}>
            We offer interior design services for both residential and commercial spaces, ranging from small-scale updates to large, full-scope projects. We work exclusively with licensed contractors and are happy to provide free estimates.
          </p>
        </div>
        <div className="iz" style={{ minHeight:'78vh' }}>
          <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=1000&fit=crop&crop=top" alt="Interior design" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }} />
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <PullQuote text="Our initial consultation includes a thoughtful discussion to understand how you plan to use the space, your style preferences, favourite colors, and overall vision. These insights guide every step of the design process to ensure a personalised and functional result." />

      {/* ── PROCESS SECTION ── */}
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