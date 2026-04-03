import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
function useReveal(dep) {
  useEffect(() => {
    const run = () => {
      const els = document.querySelectorAll('.sr')
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('sr-on')),
        { threshold: 0.07 }
      )
      els.forEach((el) => io.observe(el))
      return () => io.disconnect()
    }
    const t = setTimeout(run, 60)
    return () => clearTimeout(t)
  }, [dep])
}

/* ─────────────────────────────────────────────
   PROJECT DATA  (8 cards, 4×2 grid)
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    name: 'Bawly Modern House',
    location: 'San Diego, California',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=660&h=520&fit=crop',
    badge: 'Custom Homes',
  },
  {
    id: 2,
    name: 'Holis Passive House',
    location: 'Washington, D.C.',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=660&h=520&fit=crop',
    badge: 'Passive Design',
  },
  {
    id: 3,
    name: 'GG Art Gallery',
    location: 'Vancouver, British Columbia',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=660&h=520&fit=crop',
    badge: 'Public & Cultural',
  },
  {
    id: 4,
    name: 'Heise',
    location: 'Bodø, Norway',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=660&h=520&fit=crop',
    badge: 'Residential',
  },
  {
    id: 5,
    name: 'Kaave Academy',
    location: 'Stockholm, Sweden',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=660&h=520&fit=crop',
    badge: 'Education',
  },
  {
    id: 6,
    name: 'Casa Palermo',
    location: 'Palermo, Italy',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=660&h=520&fit=crop',
    badge: 'Villa & Estate',
  },
  {
    id: 7,
    name: 'Tower',
    location: 'Lyon, France',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=660&h=520&fit=crop&crop=bottom',
    badge: 'Commercial',
  },
  {
    id: 8,
    name: 'Grand Terra',
    location: 'Hanoi, Vietnam',
    img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=660&h=520&fit=crop',
    badge: 'Landscape',
  },
]

const SOCIAL_PATHS = [
  { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'Houzz',     d: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z' },
  { label: 'Facebook',  d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Pinterest', d: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
]

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
/* Internal Navbar and Footer removed in favor of global components */

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function PortfolioPage() {
  useReveal()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; background: #fff; color: #0a0a0a; }

        /* Scroll reveal */
        .sr     { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(.25,.46,.45,.94), transform 0.7s cubic-bezier(.25,.46,.45,.94); }
        .sr-on  { opacity: 1 !important; transform: translateY(0) !important; }
        .sr-d1  { transition-delay: 0.05s; }
        .sr-d2  { transition-delay: 0.12s; }
        .sr-d3  { transition-delay: 0.19s; }
        .sr-d4  { transition-delay: 0.26s; }

        /* Hero fade-up */
        .fu1 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.1s both; }
        .fu2 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.25s both; }
        @keyframes fu { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }

        /* Project card image zoom */
        .card-img-wrap { overflow: hidden; }
        .card-img-wrap img {
          display: block;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.75s cubic-bezier(.25,.46,.45,.94);
        }
        .project-card:hover .card-img-wrap img { transform: scale(1.05); }

        /* Badge hover */
        .project-card:hover .portfolio-img {
          transform: scale(1.1);
        }
        .project-card:hover .hover-badge {
          opacity: 1 !important;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .portfolio-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 720px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .page-pad       { padding-left: 20px !important; padding-right: 20px !important; }
          .footer-cta-grid{ grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Navbar removed — global layout Header is used */}

      <section className="pad" style={{ paddingTop: 92, paddingBottom: 52 }}>
        <h1
          className="fu1 slideInUp"
          style={{
            fontFamily: "34px 'Outfit', sans-serif",
            fontSize: '60px',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '48px',
            color: '#0a0a0a',
          }}
        >
          Portfolio architecture
        </h1>

        <p className="fu2" style={{
          fontFamily: "34px 'Outfit', sans-serif",
          fontSize: 'clamp( 2vw, 1.35rem)',
          lineHeight: 1.6,
          color: '#4a4a4a',
          fontWeight: 300,
          maxWidth: '500px',
          letterSpacing: '-0.01em',
        }}>
          At Khajanji Infraspaces, we approach each project with a thoughtful
          blend of environmental psychology, art, architecture, and cultural
          insight — all grounded in meticulous project management.
        </p>
      </section>

      <main className="pad portfolio-grid" style={{
        paddingBottom: 72,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px 20px',
      }}>
        {PROJECTS.map((p, i) => (
          <article
            key={p.id}
            className={`project-card sr sr-d${(i % 4) + 1}`}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-img-wrap" style={{
              aspectRatio: '3 / 4',
              marginBottom: 14,
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* White Badge - shows on hover, unique per card */}
              <div className="hover-badge" style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                backgroundColor: '#fff',
                color: '#000',
                padding: '10px 18px',
                fontSize: '11px',
                fontWeight: 400,
                fontFamily: "'DM Sans', sans-serif",
                zIndex: 10,
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
              }}>
                {p.badge}
              </div>

              <img
                src={p.img}
                alt={p.name}
                className="portfolio-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
                onError={(e) => {
                  e.target.src = `https://placehold.co/600x800/e4e2dc/8a8880?text=${encodeURIComponent(p.name)}`
                }}
              />
            </div>

            <p style={{
              fontFamily: "34px 'Outfit', sans-serif",
              fontSize: 15,
              fontWeight: 400,
              color: '#0a0a0a',
              marginBottom: 5,
              lineHeight: 1.3,
            }}>
              {p.name}
            </p>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              fontWeight: 300,
              color: '#8a8880',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              lineHeight: 1.4,
            }}>
              {p.location}
            </p>
          </article>
        ))}
      </main>

      {/* Footer removed — global layout Footer is used */}
    </>
  )
}