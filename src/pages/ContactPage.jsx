// src/pages/ContactPage.jsx
import { useEffect, useState } from 'react'
import FounderQuote from '../components/home/FounderQuote'

function useReveal() {
  useEffect(() => {
    const t = setTimeout(() => {
      const els = document.querySelectorAll('.sr')
      const io = new IntersectionObserver(
        entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('sr-on')),
        { threshold: 0.06 }
      )
      els.forEach(el => io.observe(el))
      return () => io.disconnect()
    }, 60)
    return () => clearTimeout(t)
  }, [])
}

const PROJECT_TYPES = [
  'Residential Design', 'Commercial Space', 'Interior Design',
  '3D Visualization', 'Township / Plotted', 'Renovation', 'Other',
]

const SERVICES = [
  { num: '01', title: 'Residential Projects', body: 'Bespoke homes, apartments, and villas crafted for lifestyle and longevity.' },
  { num: '02', title: 'Commercial Developments', body: 'Offices, showrooms, and retail spaces designed for impact and productivity.' },
  { num: '03', title: 'Townships & Plotted Layouts', body: 'Masterplanned communities built around human scale and market intelligence.' },
  { num: '04', title: 'Design Consultation', body: 'Strategic advisory from concept brief to construction documentation.' },
]

export default function ContactPage() {
  useReveal()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    projectType: '',
    location: '',
    message: ''
  })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.message) {
      setError('Please complete name, phone and message.');
      return;
    }

    const whatsappNumber = "919284149958";

    const whatsappMessage = `
  NEW PROJECT ENQUIRY

  Client Name:
  ${form.name}

  Contact Number:
  ${form.phone}

  Project Type:
  ${form.projectType || "Not Specified"}

  Project Location:
  ${form.location || "Not Specified"}

  Project Requirements:
  ${form.message}

  Submitted via Website
  Khajanji Infraspaces
  `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");

    setSent(true);
    setError('');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; background: #f9f8f5; color: #0a0a0a; }

        /* ── Reveal Animations ── */
        .sr     { opacity: 0; transform: translateY(18px); transition: opacity 0.8s cubic-bezier(.25, 1, .5, 1), transform 0.8s cubic-bezier(.25, 1, .5, 1); }
        .sr-on  { opacity: 1 !important; transform: none !important; }
        .sr-d1  { transition-delay: .05s }
        .sr-d2  { transition-delay: .12s }
        .sr-d3  { transition-delay: .18s }
        .sr-d4  { transition-delay: .25s }

        /* ── Page Load Animations ── */
        .fu1 { animation: fadeUp .8s cubic-bezier(.25, 1, .5, 1) .05s both }
        .fu2 { animation: fadeUp .8s cubic-bezier(.25, 1, .5, 1) .15s both }
        .fu3 { animation: fadeUp .8s cubic-bezier(.25, 1, .5, 1) .25s both }
        .fu4 { animation: fadeUp .8s cubic-bezier(.25, 1, .5, 1) .35s both }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(15px) } to { opacity: 1; transform: none } }

        /* ── Layout Framework ── */
        .page-sec { padding: 80px 64px; background: #f9f8f5; }
        .sec-label { font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: #8a8880; font-weight: 400; display: block; margin-bottom: 24px; }
        .rule      { border: none; border-top: 1px solid #e4e2dc; margin: 0; }

        /* ── S1: HERO SECTION — viewport-fit, no overflow scroll ── */
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 100vh;
          max-height: 100vh;
          overflow: hidden;
          background: #f9f8f5;
        }
        .hero-l {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 32px 56px 32px 64px;
          overflow: hidden;
        }
        .hero-eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .hero-eyebrow-line { width: 24px; height: 1px; background: #555; flex-shrink: 0; }
        .hero-eyebrow .sec-label { margin-bottom: 0; }
        .hero-h1 {
          font-size: clamp(2.2rem, 3.5vw, 3.2rem);
          font-weight: 400;
          line-height: 1.13;
          letter-spacing: '-0.02em';
          margin-bottom: 18px;
        }
        .hero-h1 em { font-style: italic; font-weight: 400; color: #555; }
        .hero-sub {
          font-size: 13px;
          line-height: 1.8;
          color: #555;
          font-weight: 300;
          max-width: 420px;
          margin-bottom: 32px;
          color: 'var(--color-text-primary)'
        }
        .hero-meta { display: flex; flex-direction: column; gap: 10px; }
        .hero-meta a {
          font-size: 13px; font-weight: 400; color: #0a0a0a; text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px; width: fit-content; transition: color .2s;
        }
        .hero-meta a:hover { color: #555; }
        .hero-meta a::before { content: ''; display: block; width: 16px; height: 1px; background: currentColor; }

        /* Right image panel — constrained, no scroll */
        .hero-r {
          position: relative;
          overflow: hidden;
          height: 100%;
          margin: 24px 64px 24px 0;
          border-radius: 2px;
        }
        .hero-r img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }
        .hero-stamp {
          position: absolute; bottom: 24px; left: 24px;
          background: rgba(10,10,10,0.85); backdrop-filter: blur(8px);
          padding: 16px 20px; display: flex; flex-direction: column; gap: 2px;
          border-left: 2px solid #8C7226;
        }

        /* ── S2: CONTACT EXPERIENCE ── */
        .contact-grid { 
          display: grid; 
          grid-template-columns: 40% 60%; 
          background: #f5f5f5; 
          padding: 80px 64px;
          gap: 40px;
          border-top: 1px solid #e4e2dc;
        }
        
        .contact-left-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-card-l, .contact-card-r {
          background: #ffffff;
          padding: 48px;
          border-radius: 6px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
        }

        .form-title { 
          font-family: 'Outfit', sans-serif;
          font-size: 28px; 
          font-weight: 600; 
          margin-bottom: 32px; 
          color: #0a0a0a; 
        }

        /* Info Item Styles & Minimal Professional Indicators */
        .contact-info-item {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          align-items: flex-start;
        }
        .contact-info-item:last-child {
          margin-bottom: 0;
        }
        
        /* Sleek line accent replacing previous emojis */
        .contact-info-icon-line {
          width: 20px;
          height: 1px;
          background: #1a4fc4;
          margin-top: 10px;
          flex-shrink: 0;
        }
        
        .contact-info-text h4 { 
          font-family: 'Outfit', sans-serif;
          font-size: 13px; 
          font-weight: 500; 
          color: #888; 
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px; 
        }
        .contact-info-text p, .contact-info-text a { 
          font-family: 'Outfit', sans-serif;
          font-size: 15px; 
          color: #0a0a0a; 
          text-decoration: none; 
          line-height: 1.5;
        }
        .contact-info-text a:hover {
          color: #1a4fc4;
        }

        /* ── LIGHT GRID FORM ELEMENTS ── */
        .f-row { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 20px; 
          margin-bottom: 20px; 
        }
        .f-label-light { 
          font-family: 'Outfit', sans-serif;
          font-size: 13px; 
          font-weight: 500; 
          margin-bottom: 8px; 
          display: block; 
          color: #333; 
        }
        .f-input-light {
          width: 100%;
          padding: 12px 16px;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          border: 1px solid #e0e0e0;
          background: #ffffff;
          color: #0a0a0a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          border-radius: 6px;
        }
        .f-input-light:focus { 
          border-color: #1a4fc4; 
          box-shadow: 0 0 0 3px rgba(26, 79, 196, 0.1);
        }
        .f-input-light::placeholder {
          color: #bbb;
        }
        select.f-input-light {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23777' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 14px;
          padding-right: 40px;
        }

        /* Error Text State */
        .f-error-light {
          color: #e07070; 
          font-size: 13px; 
          font-weight: 500; 
          margin-bottom: 20px; 
          display: flex; 
          align-items: center; 
          gap: 6px;
        }

        /* ── INTERACTIVE BUTTONS & ROBUST HOVER ACTIONS ── */
        .cta-row { 
          display: flex; 
          gap: 16px; 
          margin-top: 32px; 
        }
        
        /* Primary #002ca3 "Send Message" Button */
        .btn-primary { 
          background: #002ca3; 
          color: #ffffff; 
          padding: 14px 32px; 
          border: 1px solid #002ca3; 
          font-family: 'Outfit', sans-serif;
          font-weight: 400; 
          font-size: 14px;
          cursor: pointer; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          gap: 8px;
          border-radius: 6px;
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-primary:hover { 
          background: #1a4fc4; 
          border-color: #1a4fc4; 
        }

        /* Custom Inverted "Call Instead" Button */
        .btn-secondary { 
          background: transparent; 
          color: #002ca3; 
          padding: 14px 32px; 
          border: 1px solid #002ca3; 
          font-family: 'Outfit', sans-serif;
          font-weight: 400; 
          font-size: 14px;
          cursor: pointer; 
          text-decoration: none;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        /* Completely adapts to fill up dynamically like the Send Message button */
        .btn-secondary:hover, .btn-secondary:active { 
          background: #002ca3; 
          color: #ffffff; 
          border-color: #002ca3;
        }

        /* ── S3: SERVICES CARD STRIP ── */
        .why-strip { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          background: #f5f5f5; 
          padding: 0 64px 64px 64px; 
          gap: 20px;
        }
        .why-cell { 
          background: #ffffff;
          padding: 32px 24px; 
          border: 1px solid #fff;
          border-radius: 2px;
          display: flex; 
          flex-direction: column; 
          gap: 12px; 
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .why-cell:hover { 
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.04);
        }
        .why-num { 
          font-family: 'Outfit', sans-serif;
          font-size: 16px; 
          font-weight: 400; 
          color: #002ca3; 
        }
        .why-title { 
          font-family: 'Outfit', sans-serif;
          font-size: 14px; 
          font-weight: 400; 
          color: #0a0a0a; 
          line-height: 1.3;
        }
        .why-body { 
          font-family: 'Outfit', sans-serif;
          font-size: 14px; 
          font-weight: 300; 
          color: #444; 
          line-height: 1.5; 
        }

        /* ── S4: LOCATION GRID AREA ── */
        .location-section {
          background: #f5f5f5;
          padding: 0 64px 80px 64px;
        }
        .location-header h2 { 
          font-family: 'Outfit', sans-serif;
          font-size: 28px; 
          font-weight: 400; 
          color: #0a0a0a;
          margin-bottom: 24px;
        }
        .map-container-box {
          width: 100%;
          background: #ffffff;
          padding: 16px;
          border: 1px solid #fff;
          border-radius: 4px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }
        .map-wrap { 
          width: 100%; 
          aspect-ratio: 21 / 9; 
          overflow: hidden; 
          position: relative; 
          border-radius: 2px;
        }
        .map-wrap iframe { 
          width: 100%; 
          height: 100%; 
          border: 0; 
          display: block; 
        }

        /* ── S4: STUDIO LOCATION ── */
        .location-header { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-bottom: 24px; align-items: end; }
        .location-header h2 { font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 300; line-height: 1.2; letter-spacing: -.02em; }
        .location-header h2 em { font-style: italic; font-weight: 400; color: #555; }
        .location-header p { font-size: 13px; line-height: 1.8; color: #666; font-weight: 300; }
        .map-wrap { width: 100%; aspect-ratio: 24/9; overflow: hidden; position: relative; background: #e4e2dc; border: 1px solid #e4e2dc; }
        .map-wrap iframe { width: 100%; height: 100%; border: 0; display: block; filter: grayscale(40%) contrast(1.02); }

        /* ── S6: FINAL CTA ── */
        .final-cta-section { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          text-align: center; 
          background: #ffffff;
          padding: 100px 20px;
          border-top: 1px solid #e4e2dc;
        }
        .final-cta-section h2 { 
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem); 
          font-weight: 300; 
          letter-spacing: -.02em; 
          line-height: 1.2; 
          color: #0a0a0a; 
          margin-bottom: 20px; 
        }
        .final-cta-section p { 
          font-family: 'Outfit', sans-serif;
          font-size: 15px; 
          font-weight: 300; 
          color: #444; 
          line-height: 1.7; 
          max-width: 540px; 
          margin-bottom: 36px; 
        }
        
        /* Brand matching button link */
        .cta-final-link {
          background: #002ca3; 
          color: #fff; 
          padding: 14px 36px; 
          border: 1px solid #002ca3; 
          font-family: 'Outfit', sans-serif;
          font-weight: 400; 
          font-size: 14px;
          cursor: pointer; 
          text-decoration: none;
          display: inline-flex; 
          align-items: center; 
          justify-content: center;
          gap: 10px;
          border-radius: 4px;
          transition: background 0.2s, border-color 0.2s;
        }
        .cta-final-link:hover {
          background: #1a4fc4;
          border-color: #1a4fc4;
        }

        /* ══════════════════════════════════════════════
           RESPONSIVE MEDIA QUERIES — FULLY UPDATED
           (rewritten to target the actual classes used
            in this version of the page)
        ══════════════════════════════════════════════ */

        /* ── Tablet landscape: 1024px and below ── */
        @media (max-width: 1024px) {
          .page-sec { padding: 60px 40px; }

          /* Hero: stack vertically, restore natural scroll */
          .hero {
            grid-template-columns: 1fr;
            height: auto;
            max-height: none;
            overflow: visible;
          }
          .hero-l { padding: 48px 40px 36px; }
          .hero-r { margin: 0 40px 40px; height: 52vh; }

          /* Contact grid: stack into single column */
          .contact-grid {
            grid-template-columns: 1fr;
            padding: 60px 40px;
            gap: 32px;
          }
          .contact-card-l, .contact-card-r { padding: 40px; }

          /* Services strip: 2 cols */
          .why-strip { grid-template-columns: 1fr 1fr; padding: 0 40px 40px; gap: 16px; }

          /* Location */
          .location-header { gap: 32px; }
          .map-wrap { aspect-ratio: 16/7; }
        }

        /* ── Tablet portrait: 768px and below ── */
        @media (max-width: 768px) {
          .page-sec { padding: 52px 28px; }

          /* Hero */
          .hero-l { padding-top: 100px; padding: 100px 28px 28px; }
          .hero-r { margin: 0 28px 28px; height: 44vh; }
          .hero-h1 { font-size: clamp(2rem, 6vw, 2.8rem); margin-bottom: 14px; }
          .hero-sub { font-size: 13px; margin-bottom: 24px; }

          /* Contact grid */
          .contact-grid { padding: 48px 24px; gap: 24px; }
          .contact-card-l, .contact-card-r { padding: 32px; }
          .form-title { font-size: 24px; margin-bottom: 24px; }

          /* Form fields: single column on tablet portrait */
          .f-row { grid-template-columns: 1fr; gap: 0; margin-bottom: 0; }
          .f-row > div { margin-bottom: 20px; }

          /* Services */
          .why-strip { padding: 0 24px 24px; }
          .why-cell { padding: 28px 20px; }

          /* Location */
          .location-header { grid-template-columns: 1fr; gap: 14px; }
          .map-wrap { aspect-ratio: 16/9; }

          /* Final CTA */
          .final-cta-section { padding: 70px 24px; }
        }

        /* ── Mobile: 480px and below (iPhone 14 Pro / most Android) ── */
        @media (max-width: 480px) {
          .page-sec { padding: 44px 20px; }

          /* Hero: tighter for small screens */
          .hero { height: auto; max-height: none; overflow: visible; }
          .hero-l { padding: 90px 20px 20px; }
          .hero-r {
            margin: 0 20px 24px;
            height: 36vh;
            min-height: 200px;
          }
          .hero-h1 { font-size: clamp(1.9rem, 7.5vw, 2.4rem); letter-spacing: -.025em; }
          .hero-sub { font-size: 13px; line-height: 1.7; margin-bottom: 20px; max-width: 100%; }
          .hero-stamp { padding: 12px 16px; bottom: 16px; left: 16px; }
          .hero-meta a { font-size: 12px; }

          /* Contact grid */
          .contact-grid { padding: 40px 16px; gap: 20px; }
          .contact-card-l, .contact-card-r { padding: 24px; }
          .form-title { font-size: 22px; margin-bottom: 20px; }

          /* Form fields: single column, tighter spacing */
          .f-row { grid-template-columns: 1fr; gap: 0; margin-bottom: 0; }
          .f-row > div { margin-bottom: 16px; }
          .f-input-light { padding: 12px 14px; font-size: 14px; min-height: 46px; }
          textarea.f-input-light { min-height: 110px; }

          /* CTA buttons: stack full width */
          .cta-row { flex-direction: column; gap: 12px; margin-top: 24px; }
          .btn-primary, .btn-secondary { width: 100%; padding: 15px 20px; }

          /* Services: single column */
          .why-strip { grid-template-columns: 1fr; padding: 0 16px 16px; gap: 14px; }
          .why-cell { padding: 24px 18px; }

          /* Location */
          .location-section { padding: 0 16px 60px; }
          .location-header { grid-template-columns: 1fr; gap: 12px; }
          .map-wrap { aspect-ratio: 4/3; }

          /* Final CTA */
          .final-cta-section { padding: 56px 20px; }
          .final-cta-section h2 { font-size: clamp(1.7rem, 7vw, 2.2rem); }
          .final-cta-section p { font-size: 13px; }
          .cta-final-link { width: 100%; padding: 14px 24px; }
        }

        /* ── Small mobile: 390px and below (iPhone SE, iPhone 12 mini) ── */
        @media (max-width: 390px) {
          .page-sec { padding: 40px 16px; }
          .hero-l { padding: 28px 16px 16px; }
          .hero-r { margin: 0 16px 20px; height: 32vh; min-height: 180px; }
          .hero-h1 { font-size: clamp(1.7rem, 8vw, 2.1rem); }
          .contact-grid { padding: 32px 12px; }
          .contact-card-l, .contact-card-r { padding: 20px; }
          .why-strip { padding: 0 12px 16px; }
          .final-cta-section { padding: 48px 16px; }
        }

        /* ── Landscape mobile: short viewport ── */
        @media (max-width: 768px) and (max-height: 500px) and (orientation: landscape) {
          .hero {
            height: auto;
            max-height: none;
            grid-template-columns: 1fr 1fr;
          }
          .hero-l { padding: 24px 32px; }
          .hero-r { margin: 16px 32px 16px 0; height: 80vw; max-height: 320px; }
          .hero-h1 { font-size: clamp(1.6rem, 4vw, 2.2rem); margin-bottom: 10px; }
          .hero-sub { margin-bottom: 14px; font-size: 12px; }
        }
      `}</style>

      {/* ══════════════════ S1 — HERO (viewport-height, no scroll) ══════════════════ */}
      <section className="hero">
        <div className="hero-l">
          <h1 className="fu1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '400', color: '#0a0a0a', marginBottom: '16px' }}>
            Contact Us
          </h1>

          <h2 className="fu2" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '400', color: '#0a0a0a', marginBottom: '24px', lineHeight: '1.2' }}>
            Let's shape your vision together.
          </h2>

          <p className="hero-sub fu3" style={{ fontSize: '14px', color: '#444', lineHeight: '1.6', maxWidth: '520px' }}>
            Every great project begins with a single design conversation. Reach out to translate your requirements into a space built for longevity
          </p>
        </div>

        {/* Image panel — margin creates padding, constrained to viewport height */}
        <div className="hero-r fu3">
          <img
            src="/assets/cascade-newproject.jpg"
            alt="Khajanji Studio Architecture"
          />
          <div className="hero-stamp">
            {/* <span style={{ fontSize:10, letterSpacing:'.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', fontWeight:400 }}>
              Est. 2014
            </span> */}
            <span style={{ fontSize:20, fontWeight:200, color:'#fff', letterSpacing:'-.01em', lineHeight:1.1 }}>
              7+ Years
            </span>
            <span style={{ fontSize:9, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', fontWeight:400 }}>
              Design Excellence
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════ S2 — CONTACT EXPERIENCE ══════════════════ */}
      <section className="contact-grid" id="enquiry-form">
        {/* LEFT SIDE: INFO CARD */}
        <div className="contact-left-wrapper">
          <div className="contact-card-l sr">
            <h2 className="form-title" style={{ fontSize: '28px', fontWeight: '400', marginBottom: '32px' }}>Get in Touch</h2>
            
            <div className="contact-info-item">
              <div className="contact-info-icon-line" />
              <div className="contact-info-text">
                <h4>Email</h4>
                <a href="mailto:khajanjiinfraspaces@gmail.com">khajanjiinfraspaces@gmail.com</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon-line" />
              <div className="contact-info-text">
                <h4>Phone</h4>
                <a href="tel:+919284149958">+91 9284149958</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon-line" />
              <div className="contact-info-text">
                <h4>Address</h4>
                <p>Plot No 7, Santaji Colony, Sawarkar Nagar, Deo Nagar, Nagpur, Maharashtra 440015</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon-line" />
              <div className="contact-info-text">
                <h4>Working Hours</h4>
                <p>Monday – Saturday | 10:00 AM – 7:00 PM IST</p>
              </div>
            </div>
          </div>
          <p style={{ marginTop: '24px', fontSize: '13px', fontWeight: '400', lineHeight: '1.5', color: '#0a0a0a', textAlign: 'center' }}>
            "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
          </p>
        </div>

        {/* RIGHT SIDE: FORM CARD */}
        <div className="contact-card-r sr sr-d1">
          <h2 className="form-title" style={{ fontSize: '28px', fontWeight: '400', marginBottom: '32px' }}>Send us a message</h2>
          <form onSubmit={onSubmit}>
            {/* ROW 1: NAME & EMAIL */}
            <div className="f-row">
              <div>
                <label className="f-label-light">Name*</label>
                <input className="f-input-light" name="name" placeholder="Your name" value={form.name} onChange={onChange} />
              </div>
              <div>
                <label className="f-label-light">Email*</label>
                <input className="f-input-light" name="email" placeholder="your@gmail.com" onChange={onChange} />
              </div>
            </div>

            {/* ROW 2: COMPANY & CONTACT NUMBER */}
            <div className="f-row">
              <div>
                <label className="f-label-light">Company (optional)</label>
                <input className="f-input-light" name="company" placeholder="Your company name" onChange={onChange} />
              </div>
              <div>
                <label className="f-label-light">Contact No.*</label>
                <input className="f-input-light" type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={onChange} />
              </div>
            </div>

            {/* ROW 3: SERVICES */}
            <div style={{ marginBottom: '20px' }}>
              <label className="f-label-light">Service Interested In</label>
              <select className="f-input-light" name="projectType" value={form.projectType} onChange={onChange}>
                <option value="">Select a service</option>
                {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* ROW 4: MESSAGE */}
            <div style={{ marginBottom: '20px' }}>
              <label className="f-label-light">Message*</label>
              <textarea className="f-input-light" name="message" rows={4} placeholder="Tell us about your project or question" value={form.message} onChange={onChange} />
            </div>

            {error && (
              <p style={{ color: '#e07070', fontSize: '14px', fontWeight: '400', marginBottom: '16px', display: 'flex', alignAtoms: 'center', gap: '4px' }}>
                {error}
              </p>
            )}

            <div className="cta-row">
              <button type="submit" className="btn-primary">Send Message →</button>
              <a href="tel:+919284149958" className="btn-secondary">Call Instead</a>
            </div>
          </form>
        </div>
      </section>

      {/* ══════════════════ S3 — SERVICES CARDS ══════════════════ */}
      <div className="why-strip">
        {SERVICES.map((s, i) => (
          <div key={s.num} className={`why-cell sr sr-d${i + 1}`}>
            <span className="why-num">{s.num}</span>
            <p className="why-title">{s.title}</p>
            <p className="why-body">{s.body}</p>
          </div>
        ))}
      </div>

      {/* ══════════════════ S4 — STUDIO LOCATION MAP ══════════════════ */}
      <section className="location-section">
        <div className="location-header">
          <h2 className="sr">Our Locations</h2>
        </div>

        <div className="map-container-box sr sr-d1">
          <div className="map-wrap">
            <iframe
              title="Khajanji Infraspaces — Studio Map Layout"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfb50019d40f%3A0xec4471d64e9c3788!2sKhajanji%20Infraspaces!5e0!3m2!1sen!2sin!4v1699000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════ S5 — FOUNDER'S MESSAGE ══════════════════ */}
      <FounderQuote />

      {/* ══════════════════ S6 — FINAL CTA ══════════════════ */}
      <section className="final-cta-section">
        <h2 className="sr sr-d1">
          Let's create something remarkable.
        </h2>
        <p className="sr sr-d2">
          From residential landmarks to corporate offices and masterplanned layouts—we combine design principles with functional execution.
        </p>
        <a href="#enquiry-form" className="cta-final-link sr sr-d3">
          Start a Conversation <span style={{ fontSize: 14 }}>→</span>
        </a>
      </section>
    </>
  )
}