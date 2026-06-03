// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// /* ─────────────────────────────────────────────
//    SCROLL REVEAL (Fixed to use a safe dependency default)
// ───────────────────────────────────────────── */
// function useReveal(dep = null) {
//   useEffect(() => {
//     const run = () => {
//       const els = document.querySelectorAll('.sr')
//       const io = new IntersectionObserver(
//         (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('sr-on')),
//         { threshold: 0.07 }
//       )
//       els.forEach((el) => io.observe(el))
//       return () => io.disconnect()
//     }
//     const t = setTimeout(run, 60)
//     return () => clearTimeout(t)
//   }, [dep])
// }

// /* ─────────────────────────────────────────────
//    PROJECT DATA  (8 cards, 4×2 grid)
// ───────────────────────────────────────────── */
// const PROJECTS = [
//   {
//     id: 1,
//     name: 'Bawly Modern House',
//     location: 'San Diego, California',
//     img: '/assets/project1.jpg',
//     badge: 'Custom Homes',
//   },
//   {
//     id: 2,
//     name: 'Holis Passive House',
//     location: 'Washington, D.C.',
//     img: '/assets/project2.jpg',
//     badge: 'Passive Design',
//   },
//   {
//     id: 3,
//     name: 'GG Art Gallery',
//     location: 'Vancouver, British Columbia',
//     img: '/assets/project3.jpg',
//     badge: 'Public & Cultural',
//   },
//   {
//     id: 4,
//     name: 'Heise',
//     location: 'Bodø, Norway',
//     img: '/assets/project4.jpg',
//     badge: 'Residential',
//   },
//   {
//     id: 5,
//     name: 'Kaave Academy',
//     location: 'Stockholm, Sweden',
//     img: '/assets/project5.jpg',
//     badge: 'Education',
//   },
//   {
//     id: 6,
//     name: 'Casa Palermo',
//     location: 'Palermo, Italy',
//     img: '/assets/project6.jpg',
//     badge: 'Villa & Estate',
//   },
//   {
//     id: 7,
//     name: 'Tower',
//     location: 'Lyon, France',
//     img: '/assets/project7.jpg',
//     badge: 'Commercial',
//   },
//   {
//     id: 8,
//     name: 'Grand Terra',
//     location: 'Hanoi, Vietnam',
//     img: '/assets/project8.jpg',
//     badge: 'Landscape',
//   },
// ]

// const SOCIAL_PATHS = [
//   { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
//   { label: 'Houzz',     d: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z' },
//   { label: 'Facebook',  d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
//   { label: 'Pinterest', d: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
// ]

// /* ─────────────────────────────────────────────
//    MAIN PAGE
// ───────────────────────────────────────────── */
// export default function PortfolioPage() {
//   useReveal()

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         body { font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; background: #fff; color: #0a0a0a; }

//         /* Scroll reveal */
//         .sr     { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(.25,.46,.45,.94), transform 0.7s cubic-bezier(.25,.46,.45,.94); }
//         .sr-on  { opacity: 1 !important; transform: translateY(0) !important; }
//         .sr-d1  { transition-delay: 0.05s; }
//         .sr-d2  { transition-delay: 0.12s; }
//         .sr-d3  { transition-delay: 0.19s; }
//         .sr-d4  { transition-delay: 0.26s; }

//         /* Hero fade-up */
//         .fu1 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.1s both; }
//         .fu2 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.25s both; }
//         @keyframes fu { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }

//         /* Project card wrapping adjustments */
//         .project-card-link {
//           text-decoration: none;
//           color: inherit;
//           display: block;
//         }

//         /* Project card image zoom */
//         .card-img-wrap { overflow: hidden; }
//         .card-img-wrap img {
//           display: block;
//           width: 100%; height: 100%;
//           object-fit: cover;
//           transition: transform 0.75s cubic-bezier(.25,.46,.45,.94);
//         }
//         .project-card-link:hover .card-img-wrap img { transform: scale(1.05); }

//         /* Badge hover */
//         .project-card-link:hover .portfolio-img {
//           transform: scale(1.1);
//         }
//         .project-card-link:hover .hover-badge {
//           opacity: 1 !important;
//         }

//         /* Responsive */
//         @media (max-width: 1024px) {
//           .portfolio-grid { grid-template-columns: repeat(3, 1fr) !important; }
//         }
//         @media (max-width: 720px) {
//           .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
//           .page-pad       { padding-left: 20px !important; padding-right: 20px !important; }
//           .footer-cta-grid{ grid-template-columns: 1fr !important; padding: 40px 24px 32px !important; }
//         }
//         @media (max-width: 480px) {
//           .portfolio-grid { grid-template-columns: 1fr !important; }
//           .footer-cta-grid{ padding: 32px 16px 28px !important; }
//         }
//       `}</style>

//       <section className="pad" style={{ paddingTop: 92, paddingBottom: 52 }}>
//         <h1
//           className="fu1 slideInUp"
//           style={{
//             fontFamily: "34px 'Outfit', sans-serif",
//             fontSize: '60px',
//             fontWeight: 400,
//             lineHeight: 1.1,
//             letterSpacing: '-0.03em',
//             marginBottom: '48px',
//             color: '#0a0a0a',
//           }}
//         >
//           Portfolio architecture
//         </h1>

//         <p className="fu2" style={{
//           fontFamily: "34px 'Outfit', sans-serif",
//           fontSize: 'clamp( 2vw, 1.35rem)',
//           lineHeight: 1.6,
//           color: '#4a4a4a',
//           fontWeight: 300,
//           maxWidth: '500px',
//           letterSpacing: '-0.01em',
//         }}>
//           At Khajanji Infraspaces, we approach each project with a thoughtful
//           blend of environmental psychology, art, architecture, and cultural
//           insight — all grounded in meticulous project management.
//         </p>
//       </section>

//       <main className="pad portfolio-grid" style={{
//         paddingBottom: 72,
//         display: 'grid',
//         gridTemplateColumns: 'repeat(4, 1fr)',
//         gap: '40px 20px',
//       }}>
//         {PROJECTS.map((p, i) => (
//           <Link 
//             key={p.id} 
//             to={`/portfolio/${p.id}`} 
//             className="project-card-link"
//           >
//             <article
//               className={`project-card sr sr-d${(i % 4) + 1}`}
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="card-img-wrap" style={{
//                 aspectRatio: '3 / 4',
//                 marginBottom: 14,
//                 position: 'relative',
//                 overflow: 'hidden'
//               }}>
//                 {/* White Badge - shows on hover, unique per card */}
//                 <div className="hover-badge" style={{
//                   position: 'absolute',
//                   top: '20px',
//                   left: '20px',
//                   backgroundColor: '#fff',
//                   color: '#000',
//                   padding: '10px 18px',
//                   fontSize: '11px',
//                   fontWeight: 400,
//                   fontFamily: "'DM Sans', sans-serif",
//                   zIndex: 10,
//                   opacity: 0,
//                   transition: 'opacity 0.3s ease',
//                   pointerEvents: 'none',
//                 }}>
//                   {p.badge}
//                 </div>

//                 <img
//                   src={p.img}
//                   alt={p.name}
//                   className="portfolio-img"
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
//                   }}
//                   onError={(e) => {
//                     e.currentTarget.src = `https://placehold.co/600x800/e4e2dc/8a8880?text=${encodeURIComponent(p.name)}`
//                   }}
//                 />
//               </div>

//               <p style={{
//                 fontFamily: "34px 'Outfit', sans-serif",
//                 fontSize: 15,
//                 fontWeight: 400,
//                 color: '#0a0a0a',
//                 marginBottom: 5,
//                 lineHeight: 1.3,
//               }}>
//                 {p.name}
//               </p>

//               <p style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 fontSize: 10,
//                 fontWeight: 300,
//                 color: '#8a8880',
//                 letterSpacing: '0.14em',
//                 textTransform: 'uppercase',
//                 lineHeight: 1.4,
//               }}>
//                 {p.location}
//               </p>
//             </article>
//           </Link>
//         ))}
//       </main>

//       {/* CTA Section Before Footer */}
//       <section style={{ borderTop:'1px solid #e4e2dc', background:'#fff' }}>

//         <div style={{ borderTop:'1px solid #e4e2dc' }} />

//         {/* Have something in mind + contact */}
//       <div className="footer-cta-grid" style={{ padding:'48px 48px 40px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'start' }}>
//         <div>
//           <h2 style={{ fontFamily:"'Outfit', sans-serif", fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:400, lineHeight:1.2, marginBottom:28 }}>
//             Have something in mind?<br />Let's talk.
//           </h2>
//           <button
//             style={{ padding:'10px 22px', background:'transparent', border:'1px solid #0a0a0a', fontFamily:"'Outfit', sans-serif", fontSize:13, fontWeight:400, cursor:'pointer', transition:'background 0.2s, color 0.2s', color:'#0a0a0a' }}
//             onMouseEnter={e => { e.currentTarget.style.background='#0a0a0a'; e.currentTarget.style.color='#fff' }}
//             onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#0a0a0a' }}
//           >Request a call back</button>
//         </div>
//         <div>
//           {/* Awards badge */}
//           <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:20 }}>
            
//           </div>
//           <a href="mailto: khajanjiinfraspaces@gmail.com" style={{ display:'block', fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0a0a0a', textDecoration:'none', borderBottom:'1px solid #0a0a0a', paddingBottom:1, marginBottom:10, width:'fit-content' }}>
//             khajanjiinfraspaces@gmail.com
//           </a>
//           <div style={{ height:1, background:'#e4e2dc', marginBottom:10 }} />
//           <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0a0a0a', marginBottom:10 }}>+91 928 414 9958</p>
//           <div style={{ height:1, background:'#e4e2dc', marginBottom:10 }} />
//           <p style={{ fontFamily:"'Outfit', sans-serif", fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'#0a0a0a', lineHeight:1.65 }}>
//             NAGPUR<br/>MAHARASHTRA
//           </p>
//         </div>
//       </div>


//         <div style={{ borderTop:'1px solid #e4e2dc' }} />
        
//       </section>
//     </>
//   )
// }












// import { useEffect, useState } from 'react'

// /* ─────────────────────────────────────────────
//    SCROLL REVEAL HOOK
// ───────────────────────────────────────────── */
// function useReveal(dependencies = []) {
//   useEffect(() => {
//     const els = document.querySelectorAll('.sr')
//     const io = new IntersectionObserver(
//       (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('sr-on')),
//       { threshold: 0.05 }
//     )
//     els.forEach((el) => io.observe(el))
//     return () => io.disconnect()
//   }, dependencies)
// }

// /* ─────────────────────────────────────────────
//    PORTFOLIO DATA (From Screenshot 2026-06-03 125619.png)
// ───────────────────────────────────────────── */
// const PORTFOLIO_DATA = [
//   {
//     category: 'Residential Projects',
//     projects: [
//       { id: 'prospera', title: 'Prospera', tag: 'Apartment Architecture', img: '/assets/portfolio/prospera.jpg', desc: 'A sophisticated multi-family residential space showcasing premium structural design, efficient spatial transitions, and high-fidelity facade planning engineered for modern lifestyle balances.' },
//       { id: 'cascade', title: 'Cascade', tag: 'Luxury Residential', img: '/assets/portfolio/cascade.jpg', desc: 'Designed to merge structural presence with flowing interior layout plans, this residential concept focuses heavily on organic light access and premium natural materiality.' },
//       { id: 'sursangam', title: 'Sursangam', tag: 'Premium Housing', img: '/assets/portfolio/sursangam.jpg', desc: 'A deep architectural practice in residential layouts combining traditional scale dynamics with premium minimalism, tailored to client lifestyle requirements.' },
//       { id: 'white-villa', title: 'White Villa', tag: 'Bespoke Bungalow', img: '/assets/portfolio/white-villa.jpg', desc: 'An elite residential landmark prioritizing striking monolithic geometry, flawless white plaster textures, and high-fidelity architectural rendering profiles.' },
//       { id: 'jerrys-home', title: "Jerry's Home", tag: 'Private Residence', img: '/assets/portfolio/jerry.jpg', desc: 'An intimate interior design and architectural execution project emphasizing personalized ambient lighting controls, minimal materials, and optimized floor-plan layouts.' }
//     ]
//   },
//   {
//     category: 'Commercial Projects',
//     projects: [
//       { id: 'city-center-katol', title: 'City Center Mall Katol', tag: 'Retail Landmark', img: '/assets/portfolio/katol.jpg', desc: 'A major commercial destination engineering complex multi-tier visitor logistics, high-volume retail structural designs, and an iconic contemporary street-front presence.' },
//       { id: 'dubai-icaverse', title: "Dubai's Icaverse", tag: 'Corporate Infrastructure', img: '/assets/portfolio/icaverse.jpg', desc: 'A conceptual premium office setting that pushes the boundaries of corporate environments by integrating architectural clarity with ultra-modern 3D visual storytelling.' },
//       { id: 'mumbai-enclave', title: 'Mumbai Enclave', tag: 'Mixed-Use Architecture', img: '/assets/portfolio/mumbai.jpg', desc: 'Maximizing vertical and horizontal urban spatial distribution to assemble high-efficiency retail zones and corporate floors within a premium facade design frame.' },
//       { id: 'naman-lounge', title: 'Naman Lounge', tag: 'Hospitality & Leisure', img: '/assets/portfolio/naman.jpg', desc: 'An exquisite hospitality venue built to deliver unforgettable atmospheric impressions through rich tone combinations, high-end finishing details, and structural flow.' },
//       { id: 'dubai-luxeverse', title: "Dubai's Luxeverse", tag: 'Premium Commercial Hub', img: '/assets/portfolio/luxeverse.jpg', desc: 'A landmark high-tier commercial ecosystem built around fluid futuristic silhouettes, complex structural balance calculations, and uncompromising premium quality.' }
//     ]
//   },
//   {
//     category: 'Plotted & Township Projects',
//     projects: [
//       { id: 'township-alpha', title: 'Plotted Development Phase I', tag: 'Township Masterplanning', img: '/assets/portfolio/township1.jpg', desc: 'A comprehensive land-use layout modeling highly organized plotted allocations, deep contextual green spaces, and future-ready road connectivity graphs.' },
//       { id: 'township-beta', title: 'Elite Township Infrastructure', tag: 'Urban Community Planning', img: '/assets/portfolio/township2.jpg', desc: 'Masterplanned civil architecture executing seamless community landscape integration, structured community amenities, and an premium, unified neighborhood visual layout.' }
//     ]
//   }
// ]

// /* ─────────────────────────────────────────────
//    FOOTER COMPONENT
// ───────────────────────────────────────────── */
// function Footer() {
//   return (
//     <footer style={{ background: '#fff', borderTop: '1px solid #e4e2dc' }}>
//       <div className="global-layout-box" style={{ padding: '80px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
//         <div>
//           <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, lineHeight: 1.18, marginBottom: 24, color: '#0a0a0a' }}>
//             Have something in mind?<br />Let's talk.
//           </h2>
//           <button
//             style={{
//               padding: '10px 22px', background: 'transparent',
//               border: '1px solid #0a0a0a',
//               fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 400,
//               cursor: 'pointer', letterSpacing: '0.01em',
//               transition: 'background 0.2s, color 0.2s',
//               color: '#0a0a0a',
//             }}
//             onMouseEnter={e => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#fff' }}
//             onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a' }}
//           >
//             Request a call back
//           </button>
//         </div>

//         <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
//           <a href="mailto:khajanjiinfraspaces@gmail.com"
//             style={{ display: 'block', fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '1px solid #0a0a0a', paddingBottom: 2, width: 'fit-content' }}
//             onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
//             onMouseLeave={e => e.currentTarget.style.opacity = '1'}
//           >
//             khajanjiinfraspaces@gmail.com
//           </a>
//           <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', margin: 0 }}>
//             +91 93228 15523
//           </p>
//           <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.65, margin: 0 }}>
//             NAGPUR<br/>MAHARASHTRA
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// /* ─────────────────────────────────────────────
//    MAIN PORTFOLIO PAGE
// ───────────────────────────────────────────── */
// export default function PortfolioPage() {
//   const [activeProject, setActiveProject] = useState(null)
//   const [activeCategory, setActiveCategory] = useState('All')

//   useReveal([activeCategory])

//   // ESC key listener to safely drop modal view
//   useEffect(() => {
//     const handleKeyDown = (e) => e.key === 'Escape' && setActiveProject(null)
//     window.addEventListener('keydown', handleKeyDown)
//     return () => window.removeEventListener('keydown', handleKeyDown)
//   }, [])

//   // Freeze background page scroll context while modal overlay tracks actively
//   useEffect(() => {
//     document.body.style.overflow = activeProject ? 'hidden' : 'unset'
//     return () => { document.body.style.overflow = 'unset' }
//   }, [activeProject])

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         body { font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; background: #fff; color: #0a0a0a; }

//         /* Absolute Linear Alignment Core Rule */
//         .global-layout-box {
//           max-width: 1320px;
//           margin: 0 auto;
//           padding-left: 48px;
//           padding-right: 48px;
//           width: 100%;
//         }

//         /* Section Pacing Engine */
//         .section-space { 
//           padding-top: 120px; 
//           padding-bottom: 120px; 
//         }

//         /* Interaction Mechanics */
//         .project-card-link {
//           text-decoration: none;
//           color: inherit;
//           cursor: pointer;
//           display: block;
//         }

//         .iz { overflow: hidden; position: relative; }
//         .iz img { display: block; transition: transform 0.9s cubic-bezier(.25,.46,.45,.94); }
//         .project-card-link:hover .iz img { transform: scale(1.03); }

//         /* Scroll Revelations */
//         .sr { opacity: 0; transform: translateY(24px); transition: opacity 0.8s cubic-bezier(.25,.46,.45,.94), transform 0.8s cubic-bezier(.25,.46,.45,.94); }
//         .sr-on { opacity: 1 !important; transform: translateY(0) !important; }
//         .sr-d1 { transition-delay: 0.1s; }
//         .sr-d2 { transition-delay: 0.2s; }

//         /* Categorized Pill Sorting Filters */
//         .filter-pill {
//           background: transparent;
//           border: none;
//           font-family: 'Outfit', sans-serif;
//           font-size: 12px;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: #8a8880;
//           padding: 8px 0;
//           cursor: pointer;
//           position: relative;
//           transition: color 0.3s ease;
//         }
//         .filter-pill::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 0;
//           height: 1px;
//           background: #0a0a0a;
//           transition: width 0.3s ease;
//         }
//         .filter-pill.active { color: #0a0a0a; fontWeight: 500; }
//         .filter-pill.active::after { width: 100%; }

//         /* Premium Modal Transition Keyframing */
//         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//         @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

//         .modal-overlay {
//           position: fixed;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background: rgba(10, 10, 10, 0.45);
//           backdrop-filter: blur(8px);
//           -webkit-backdrop-filter: blur(8px);
//           z-index: 2000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 40px 24px;
//           animation: fadeIn 0.4s cubic-bezier(.25,.46,.45,.94) forwards;
//         }

//         .modal-window {
//           background: #fff;
//           width: 100%;
//           max-width: 1020px;
//           max-height: 85vh;
//           overflow-y: auto;
//           position: relative;
//           box-shadow: 0 30px 90px rgba(0,0,0,0.12);
//           animation: slideUp 0.5s cubic-bezier(.25,.46,.45,.94) forwards;
//         }

//         /* Custom Modal Scrollbar styling to maintain premium aesthetics */
//         .modal-window::-webkit-scrollbar { width: 6px; }
//         .modal-window::-webkit-scrollbar-track { background: #f5f5f3; }
//         .modal-window::-webkit-scrollbar-thumb { background: #d0cfcb; }

//         /* Layout Grid Queries */
//         @media (max-width: 1024px) {
//           .global-layout-box { padding-left: 24px !important; padding-right: 24px !important; }
//           .section-space { padding-top: 80px !important; padding-bottom: 80px !important; }
//           .portfolio-grid-layout { grid-template-columns: repeat(2, 1fr) !important; gap: 40px 24px !important; }
//           .modal-layout-split { grid-template-columns: 1fr !important; }
//           .modal-image-wrapper { height: 400px !important; }
//           .modal-text-panel { padding: 40px 32px !important; }
//         }

//         @media (max-width: 640px) {
//           .portfolio-grid-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
//           .filter-cluster { gap: 16px !important; overflow-x: auto; padding-bottom: 8px; width: 100%; }
//           .modal-window { max-height: 90vh !important; }
//           .modal-image-wrapper { height: 300px !important; }
//         }
//       `}</style>

//       {/* ── 1. HEADER & NAVIGATION FILTER SECTION ── */}
//       <section style={{ background: '#fff', paddingTop: '160px' }}>
//         <div className="global-layout-box">
//           <p className="sr" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8a8880', fontWeight: 400, marginBottom: 16 }}>
//             Our Portfolio
//           </p>
//           <h1 className="sr sr-d1" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 48px', color: '#0a0a0a' }}>
//             Selected Works
//           </h1>

//           {/* Dynamic Categorized Segment Pickers */}
//           <div className="sr sr-d2 filter-cluster" style={{ display: 'flex', gap: '32px', borderBottom: '1px solid #e4e2dc', paddingBottom: '12px' }}>
//             {['All', 'Residential Projects', 'Commercial Projects', 'Plotted & Township Projects'].map((cat) => (
//               <button 
//                 key={cat} 
//                 className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
//                 onClick={() => setActiveCategory(cat)}
//               >
//                 {cat === 'All' ? 'All Developments' : cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── 2. DATA GRID LAYOUT MODULE ───────────── */}
//       {PORTFOLIO_DATA.map((block, blockIndex) => {
//         // Validation check for user filtering selections
//         if (activeCategory !== 'All' && activeCategory !== block.category) return null

//         return (
//           <section key={blockIndex} className="section-space" style={{ borderBottom: '1px solid #e4e2dc' }}>
//             <div className="global-layout-box">
              
//               {/* Contextual Category Heading Indicator */}
//               <h2 className="sr" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8a8880', fontWeight: 400, marginBottom: '40px' }}>
//                 {block.category}
//               </h2>

//               {/* Grid Array Generation */}
//               <div className="portfolio-grid-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '64px 32px' }}>
//                 {block.projects.map((proj, projIndex) => (
//                   <div 
//                     key={proj.id} 
//                     className="sr" 
//                     style={{ transitionDelay: `${(projIndex % 3) * 0.1}s` }}
//                     onClick={() => setActiveProject(proj)}
//                   >
//                     <div className="project-card-link">
//                       <div className="iz" style={{ aspectRatio: '16/11', width: '100%', background: '#f5f5f3', marginBottom: '20px' }}>
//                         <img 
//                           src={proj.img} 
//                           alt={proj.title} 
//                           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                           onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" }}
//                         />
//                       </div>
//                       <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '17px', fontWeight: 400, color: '#0a0a0a', letterSpacing: '0.01em', marginBottom: '4px' }}>
//                         {proj.title}
//                       </h3>
//                       <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', color: '#8a8880', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
//                         {proj.tag}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//             </div>
//           </section>
//         )
//       })}

//       {/* ── 3. PREMIUM TOP-UP MODAL ENGINE ───────── */}
//       {activeProject && (
//         <div className="modal-overlay" onClick={() => setActiveProject(null)}>
//           <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            
//             {/* Close Trigger Button */}
//             <button 
//               onClick={() => setActiveProject(null)}
//               style={{
//                 position: 'absolute', top: '24px', right: '24px',
//                 background: '#fff', border: 'none', width: '40px', height: '40px',
//                 borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 cursor: 'pointer', zIndex: 10, shadow: '0 4px 20px rgba(0,0,0,0.08)',
//                 transition: 'transform 0.2s'
//               }}
//               onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
//               onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
//               aria-label="Close Pop-up"
//             >
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 1L13 13M13 1L1 13" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round"/>
//               </svg>
//             </button>

//             {/* Split Screen Modal Content */}
//             <div className="modal-layout-split" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', alignItems: 'stretch' }}>
              
//               {/* Asset Media Frame */}
//               <div className="modal-image-wrapper" style={{ width: '100%', height: '100%', minHeight: '520px', background: '#f5f5f3' }}>
//                 <img 
//                   src={activeProject.img} 
//                   alt={activeProject.title} 
//                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" }}
//                 />
//               </div>

//               {/* Copy Information Panel */}
//               <div className="modal-text-panel" style={{ padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff' }}>
//                 <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8a8880', marginBottom: '12px', fontWeight: 400 }}>
//                   {activeProject.tag}
//                 </p>
//                 <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 400, color: '#0a0a0a', lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-0.01em' }}>
//                   {activeProject.title}
//                 </h2>
//                 <div style={{ width: '40px', height: '1px', background: '#c8a97e', marginBottom: '24px' }}></div>
//                 <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14.5px', lineHeight: '1.75', color: '#555', fontWeight: 300, marginBottom: '40px' }}>
//                   {activeProject.desc}
//                 </p>

//                 {/* Direct Action Enquire Connection Trigger */}
//                 <button
//                   onClick={() => {
//                     alert(`Inquiry routing initialized for: ${activeProject.title}`)
//                     setActiveProject(null)
//                   }}
//                   style={{
//                     width: '100%', padding: '14px 28px', background: '#0a0a0a',
//                     border: '1px solid #0a0a0a', color: '#fff',
//                     fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 400,
//                     letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
//                     transition: 'background 0.2s, color 0.2s'
//                   }}
//                   onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a' }}
//                   onMouseLeave={e => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#fff' }}
//                 >
//                   Enquire Now
//                 </button>
//               </div>

//             </div>

//           </div>
//         </div>
//       )}

//       <Footer />
//     </>
//   )
// }









import { useEffect, useState } from 'react'

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
function useReveal(dep = null) {
  useEffect(() => {
    const els = document.querySelectorAll('.sr')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('sr-on')),
      { threshold: 0.07 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}

/* ─────────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1, name: 'Prospera', location: 'Nagpur, Maharashtra', subtitle: 'MODERN LIVING',
    img: '/assets/project1.jpg', badge: 'Residential', category: 'Residential',
    description: 'Prospera is a thoughtfully designed residential development that blends contemporary architecture with practical living. Each unit is crafted to maximise natural light, ventilation, and spatial efficiency — creating homes that feel expansive and grounded at the same time.',
  },
  {
    id: 2, name: 'Cascade', location: 'Nagpur, Maharashtra', subtitle: 'LAYERED DESIGN',
    img: '/assets/project2.jpg', badge: 'Residential', category: 'Residential',
    description: 'Cascade is a modern residential complex that draws inspiration from fluid, layered forms. The design prioritises community spaces and green buffers, resulting in a living environment that balances privacy with connectivity.',
  },
  {
    id: 3, name: 'Sursangam', location: 'Nagpur, Maharashtra', subtitle: 'CULTURAL RESIDENCE',
    img: '/assets/project3.jpg', badge: 'Residential', category: 'Residential',
    description: 'Sursangam is a curated residential project that celebrates cultural richness through its architectural language. Detailed facade work, well-proportioned floor plans, and quality material selection define this landmark development.',
  },
  {
    id: 4, name: 'White Villa', location: 'Nagpur, Maharashtra', subtitle: 'VILLA & ESTATE',
    img: '/assets/project4.jpg', badge: 'Villa & Estate', category: 'Residential',
    description: 'White Villa is a premium private residence that exemplifies understated luxury. Clean white volumes, open-plan interiors, and seamless indoor-outdoor flow come together to form a home that is both serene and sophisticated.',
  },
  {
    id: 5, name: "Jerry's Home", location: 'Nagpur, Maharashtra', subtitle: 'CUSTOM HOME',
    img: '/assets/project5.jpg', badge: 'Custom Home', category: 'Residential',
    description: "Jerry's Home is a bespoke residence designed around the unique lifestyle and preferences of its owners. Every spatial decision — from room orientation to material palette — was made in close collaboration with the client to deliver a truly personal home.",
  },
  {
    id: 6, name: 'City Center Mall Katol', location: 'Katol, Maharashtra', subtitle: 'RETAIL LANDMARK',
    img: '/assets/project6.jpg', badge: 'Commercial', category: 'Commercial',
    description: 'City Center Mall Katol is a mixed-use commercial destination designed to serve the evolving retail and lifestyle needs of the Katol region. The design focuses on footfall circulation, tenant visibility, and a welcoming public environment.',
  },
  {
    id: 7, name: "Dubai's Icaverse", location: 'Dubai, UAE', subtitle: 'CORPORATE INFRASTRUCTURE',
    img: '/assets/project7.jpg', badge: 'Commercial', category: 'Commercial',
    description: "Dubai's Icaverse is a forward-thinking commercial development conceived for the high-density urban context of Dubai. The project integrates bold facade design, flexible floor plates, and smart building principles to meet international commercial standards.",
  },
  {
    id: 8, name: 'Mumbai Enclave', location: 'Mumbai, Maharashtra', subtitle: 'MIXED-USE ARCHITECTURE',
    img: '/assets/project8.jpg', badge: 'Commercial', category: 'Commercial',
    description: "Mumbai Enclave is a premium commercial complex that responds to the fast-paced demands of one of India's most competitive real estate markets. The design delivers efficient workspaces, high-quality lobbies, and a strong street presence.",
  },
  {
    id: 9, name: 'Naman Lounge', location: 'Nagpur, Maharashtra', subtitle: 'HOSPITALITY DESIGN',
    img: '/assets/project9.jpg', badge: 'Commercial', category: 'Commercial',
    description: 'Naman Lounge is a boutique commercial space designed to serve as a premium hospitality and business hub. The interiors balance warmth and professionalism, with carefully selected finishes that elevate the everyday experience.',
  },
  {
    id: 10, name: "Dubai's Luxeverse", location: 'Dubai, UAE', subtitle: 'LUXURY COMMERCIAL',
    img: '/assets/project10.jpg', badge: 'Commercial', category: 'Commercial',
    description: "Dubai's Luxeverse represents Khajanji Infraspaces' ambition in the international luxury commercial segment. A refined architectural expression, premium material specification, and attention to experiential detail define this flagship project.",
  },
  {
    id: 11, name: 'Greenfield Township', location: 'Nagpur, Maharashtra', subtitle: 'MASTER PLANNING',
    img: '/assets/project11.jpg', badge: 'Township', category: 'Plotted',
    description: 'Greenfield Township is a large-scale master-planned development that integrates residential plots, commercial zones, and open green corridors. The layout prioritises walkability, community infrastructure, and long-term liveability.',
  },
  {
    id: 12, name: 'Horizon Plots', location: 'Nagpur, Maharashtra', subtitle: 'PLOTTED DEVELOPMENT',
    img: '/assets/project12.jpg', badge: 'Plotted', category: 'Plotted',
    description: 'Horizon Plots is a well-planned plotted development offering flexible ownership in a thoughtfully designed layout. Wide internal roads, utility provisions, and landscaped boundaries make this a premier address for custom home builders.',
  },
]

const TABS = [
  { key: 'All',        label: 'All Developments' },
  { key: 'Residential',label: 'Residential Projects' },
  { key: 'Commercial', label: 'Commercial Projects' },
  { key: 'Plotted',    label: 'Plotted & Township Projects' },
]

/* ─────────────────────────────────────────────
   PROJECT MODAL
───────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(10,10,10,0.6)',
        zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        animation: 'fadeOverlay 0.25s ease both',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-inner"
        style={{
          background: '#fff', width: '100%', maxWidth: 900,
          maxHeight: '90vh', overflowY: 'auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          animation: 'slideModal 0.3s cubic-bezier(.25,.46,.45,.94) both',
        }}
      >
        {/* Left: Image */}
        <div style={{ position: 'relative', minHeight: 480 }}>
          <img
            src={project.img} alt={project.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => { e.currentTarget.src = `https://placehold.co/600x800/e4e2dc/8a8880?text=${encodeURIComponent(project.name)}` }}
          />
          <div style={{
            position: 'absolute', top: 20, left: 20, background: '#fff',
            padding: '6px 14px', fontFamily: "'Outfit', sans-serif",
            fontSize: 10, fontWeight: 400, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#0a0a0a',
          }}>
            {project.badge}
          </div>
        </div>

        {/* Right: Content */}
        <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <button
              onClick={onClose}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 0, marginBottom: 40,
                display: 'flex', alignItems: 'center', gap: 8,
                fontFamily: "'Outfit', sans-serif", fontSize: 11,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a8880',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <line x1="1" y1="1" x2="13" y2="13" stroke="#8a8880" strokeWidth="1.2"/>
                <line x1="13" y1="1" x2="1" y2="13" stroke="#8a8880" strokeWidth="1.2"/>
              </svg>
              Close
            </button>

            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8a8880', fontWeight: 300, marginBottom: 14 }}>
              {project.subtitle}
            </p>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: 400, lineHeight: 1.2, color: '#0a0a0a', marginBottom: 10 }}>
              {project.name}
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a8880', marginBottom: 32 }}>
              {project.location}
            </p>
            <div style={{ height: 1, background: '#e4e2dc', marginBottom: 28 }} />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, lineHeight: 1.8, color: '#444', fontWeight: 300 }}>
              {project.description}
            </p>
          </div>

          <div style={{ marginTop: 40 }}>
            <div style={{ height: 1, background: '#e4e2dc', marginBottom: 28 }} />
            <a
              href={`mailto:khajanjiinfraspaces@gmail.com?subject=Project Enquiry: ${project.name}`}
              style={{
                display: 'inline-block', padding: '11px 28px',
                background: '#0a0a0a', color: '#fff',
                fontFamily: "'Outfit', sans-serif", fontSize: 12,
                fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#333'}
              onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
function ProjectCard({ project, index, onClick }) {
  return (
    <article
      className={`project-card sr sr-d${(index % 3) + 1}`}
      onClick={() => onClick(project)}
      style={{ cursor: 'pointer' }}
    >
      <div style={{ overflow: 'hidden', marginBottom: 14, position: 'relative', aspectRatio: '4/3' }}>
        <div className="hover-badge" style={{
          position: 'absolute', top: 16, left: 16,
          background: '#fff', color: '#0a0a0a',
          padding: '7px 14px', fontSize: 10, fontWeight: 400,
          fontFamily: "'Outfit', sans-serif", letterSpacing: '0.1em',
          textTransform: 'uppercase', zIndex: 10, opacity: 0,
          transition: 'opacity 0.3s ease', pointerEvents: 'none',
        }}>
          {project.badge}
        </div>
        <img
          src={project.img} alt={project.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.75s cubic-bezier(.25,.46,.45,.94)' }}
          onError={(e) => { e.currentTarget.src = `https://placehold.co/800x600/e4e2dc/8a8880?text=${encodeURIComponent(project.name)}` }}
        />
      </div>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 400, color: '#0a0a0a', marginBottom: 6, lineHeight: 1.3 }}>
        {project.name}
      </p>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 300, color: '#8a8880', letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: 1.4 }}>
        {project.subtitle}
      </p>
    </article>
  )
}

/* ─────────────────────────────────────────────
   SECTION BLOCK
───────────────────────────────────────────── */
function ProjectSection({ label, projects, onCardClick }) {
  if (!projects.length) return null
  return (
    <div>
      <div style={{ padding: '56px 48px 24px', borderTop: '1px solid #e4e2dc' }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8a8880', fontWeight: 300 }}>
          {label}
        </p>
      </div>
      <div
        className="portfolio-grid"
        style={{ padding: '0 48px 64px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 24px' }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onClick={onCardClick} />
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function PortfolioPage() {
  const [activeTab, setActiveTab]       = useState('All')
  const [activeProject, setActiveProject] = useState(null)
  useReveal(activeTab)

  const filtered    = activeTab === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeTab)
  const residential = filtered.filter(p => p.category === 'Residential')
  const commercial  = filtered.filter(p => p.category === 'Commercial')
  const plotted     = filtered.filter(p => p.category === 'Plotted')

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; background: #fff; color: #0a0a0a; }

        .sr    { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(.25,.46,.45,.94), transform 0.7s cubic-bezier(.25,.46,.45,.94); }
        .sr-on { opacity: 1 !important; transform: translateY(0) !important; }
        .sr-d1 { transition-delay: 0.05s; }
        .sr-d2 { transition-delay: 0.12s; }
        .sr-d3 { transition-delay: 0.19s; }

        .fu1 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.1s both; }
        .fu2 { animation: fu 0.75s cubic-bezier(.25,.46,.45,.94) 0.25s both; }
        @keyframes fu         { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeOverlay { from { opacity:0; } to { opacity:1; } }
        @keyframes slideModal  { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }

        .project-card:hover img          { transform: scale(1.05) !important; }
        .project-card:hover .hover-badge { opacity: 1 !important; }

        .filter-tab {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 300;
          background: none;
          border: none;
          border-bottom: 1px solid transparent;
          cursor: pointer;
          padding: 20px 0 16px;
          color: #8a8880;
          transition: color 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .filter-tab:hover  { color: #0a0a0a; }
        .filter-tab.active { color: #0a0a0a; border-bottom: 1px solid #0a0a0a; }

        @media (max-width: 900px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sp { padding-left: 24px !important; padding-right: 24px !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .modal-inner { grid-template-columns: 1fr !important; }
          .filter-row  { gap: 20px !important; overflow-x: auto; padding-bottom: 2px; }
        }
        @media (max-width: 480px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ───────────────────────────── */}
      <section className="sp" style={{ padding: '145px 48px 52px' }}>
        <h1 className="fu1" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(2.8rem, 5vw, 4rem)',
          fontWeight: 400, lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: 28, color: '#0a0a0a',
        }}>
          Our Portfolio
        </h1>
        <p className="fu2" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
          lineHeight: 1.75, color: '#666',
          fontWeight: 300, maxWidth: 520,
        }}>
          At Khajanji Infraspaces, we approach each project with a thoughtful
          blend of environmental psychology, art, architecture, and cultural
          insight — all grounded in meticulous project management.
        </p>
      </section>

      {/* ── FILTER TABS ────────────────────── */}
      <div style={{ borderTop: '1px solid #e4e2dc', borderBottom: '1px solid #e4e2dc' }}>
        <div className="filter-row sp" style={{ padding: '0 48px', display: 'flex', gap: 36 }}>
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`filter-tab${activeTab === t.key ? ' active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── SECTIONS ───────────────────────── */}
      <div style={{ paddingTop: 8 }}>
        <ProjectSection label="Residential Projects"        projects={residential} onCardClick={setActiveProject} />
        <ProjectSection label="Commercial Projects"         projects={commercial}  onCardClick={setActiveProject} />
        <ProjectSection label="Plotted & Township Projects" projects={plotted}     onCardClick={setActiveProject} />
      </div>

      {/* ── FOOTER CTA ─────────────────────── */}
      <section style={{ borderTop: '1px solid #e4e2dc', background: '#fff' }}>
        <div className="footer-grid sp" style={{ padding: '52px 48px 44px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 400, lineHeight: 1.2, marginBottom: 28 }}>
              Have something in mind?<br />Let's talk.
            </h2>
            <button
              style={{ padding: '10px 22px', background: 'transparent', border: '1px solid #0a0a0a', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 400, cursor: 'pointer', transition: 'background 0.2s, color 0.2s', color: '#0a0a0a' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a' }}
            >Request a call back</button>
          </div>
          <div>
            <a href="mailto:khajanjiinfraspaces@gmail.com"
              style={{ display: 'block', fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '1px solid #0a0a0a', paddingBottom: 1, marginBottom: 10, width: 'fit-content' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >khajanjiinfraspaces@gmail.com</a>
            <div style={{ height: 1, background: '#e4e2dc', marginBottom: 10 }} />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 10 }}>+91 93228 15523</p>
            <div style={{ height: 1, background: '#e4e2dc', marginBottom: 10 }} />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.65 }}>
              NAGPUR<br />MAHARASHTRA
            </p>
          </div>
        </div>
        <div style={{ height: 1, background: '#e4e2dc' }} />
      </section>

      {/* ── MODAL ──────────────────────────── */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  )
}