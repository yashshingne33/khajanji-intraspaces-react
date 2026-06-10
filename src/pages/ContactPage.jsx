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

        /* ── S2: CONTACT GRID ── */
        .contact-grid { display: grid; grid-template-columns: 34% 66%; background: #f9f8f5; border-top: 1px solid #e4e2dc; }
        .contact-l { padding: 72px 40px 72px 64px; display: flex; flex-direction: column; gap: 28px; }
        .contact-l-block { display: flex; flex-direction: column; gap: 4px; }
        .contact-l-block a { font-size: 14px; font-weight: 400; color: #0a0a0a; text-decoration: none; transition: color .2s; width: fit-content; }
        .contact-l-block a:hover { color: #555; }
        .contact-l-val { font-size: 14px; font-weight: 300; color: #333; line-height: 1.6; }

        /* ── ENQUIRY FORM PANEL ── */
        .contact-r {
          background: #0c0c0b;
          padding: 56px 72px 56px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        /* Blue corner accent matching logo */
        .contact-r::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 140px; height: 140px;
          border-top: 1px solid rgba(26,79,196,0.3);
          border-left: 1px solid rgba(26,79,196,0.3);
          pointer-events: none;
        }
        .contact-r::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 100px; height: 100px;
          border-bottom: 1px solid rgba(26,79,196,0.15);
          border-right: 1px solid rgba(26,79,196,0.15);
          pointer-events: none;
        }

        /* Inner form uses full width — two-column layout on right side */
        .form-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 56px;
          width: 100%;
        }
        .form-left { display: flex; flex-direction: column; }
        .form-right { display: flex; flex-direction: column; justify-content: space-between; }

        .form-header { margin-bottom: 28px; }
        .form-header .sec-label { color: rgba(255,255,255,0.35); margin-bottom: 8px; }
        .form-header h3 { font-size: 22px; font-weight: 300; color: #fff; letter-spacing: -.01em; line-height: 1.25; }
        .form-header p { font-size: 12px; font-weight: 300; color: rgba(255,255,255,0.4); margin-top: 8px; line-height: 1.7; }

        /* Vertical divider between two form columns */
        .form-col-divider {
          display: none; /* handled by grid gap */
        }

        /* Field groups */
        .f-group {
          display: flex;
          flex-direction: column;
          position: relative;
          flex: 1;
          margin-bottom: 20px;
        }
        .f-group:last-child { margin-bottom: 0; }

        .f-label {
          font-size: 9px;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          font-weight: 500;
          display: block;
          margin-bottom: 8px;
        }
        /* Highly visible field borders */
        .f-input, .f-select, .f-textarea {
          width: 100%;
          padding: 11px 14px;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #fff;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.22);
          outline: none;
          resize: none;
          transition: border-color .25s, background .25s, box-shadow .25s;
          appearance: none;
          -webkit-appearance: none;
          border-radius: 0;
        }
        .f-input::placeholder, .f-textarea::placeholder { color: rgba(255,255,255,0.25); font-size: 12px; }
        .f-input:focus, .f-select:focus, .f-textarea:focus {
          border-color: #1a4fc4;
          background: rgba(26,79,196,0.08);
          box-shadow: 0 0 0 3px rgba(26,79,196,0.12);
        }
        .f-select { cursor: pointer; color: rgba(255,255,255,0.7); }
        .f-select option { background: #111; color: #fff; }
        .f-select.has-value { color: #fff; }

        /* Textarea fills remaining height on right column */
        .f-textarea-tall { flex: 1; min-height: 120px; }

        .f-sel-wrap { position: relative; display: flex; flex-direction: column; flex: 1; }
        .f-sel-wrap .f-select { flex: 1; }
        .f-sel-wrap::after {
          content: '▾'; position: absolute; right: 13px; top: calc(100% - 22px);
          color: rgba(255,255,255,0.4); pointer-events: none; font-size: 11px;
        }

        /* Thin blue accent line above form */
        .form-accent-line {
          width: 40px; height: 2px;
          background: #1a4fc4;
          margin-bottom: 20px;
        }

        /* Stats row inside form panel */
        .form-stats {
          display: flex; gap: 32px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .form-stat { display: flex; flex-direction: column; gap: 2px; }
        .form-stat-num { font-size: 20px; font-weight: 200; color: #fff; letter-spacing: -.02em; }
        .form-stat-label { font-size: 9px; letter-spacing: .15em; text-transform: uppercase; color: rgba(255,255,255,0.3); font-weight: 400; }

        /* CTA — logo blue */
        .cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 13px 28px;
          background: #1a4fc4; border: 1px solid #1a4fc4;
          font-family: 'outfit', sans-serif; font-size: 10px; font-weight: 500;
          letter-spacing: .18em; text-transform: uppercase; color: #fff;
          cursor: pointer; transition: background .25s, gap .25s, border-color .25s;
          width: fit-content;
        }
        .cta-btn:hover { background: #2558d8; border-color: #2558d8; gap: 18px; }
        .cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 28px;
          background: transparent; border: 1px solid rgba(255,255,255,0.18);
          font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 400;
          letter-spacing: .15em; text-transform: uppercase; color: rgba(255,255,255,0.5);
          cursor: pointer; transition: all .25s;
          margin-left: 12px;
        }
        .cta-btn-ghost:hover { border-color: rgba(255,255,255,0.4); color: rgba(255,255,255,0.8); }

        /* Error state */
        .f-error { font-size: 11px; color: #e07070; margin-bottom: 16px; display: flex; align-items: center; gap: 6px; }
        .f-error::before { content: '↳'; }

        /* ── S3: WHY CONNECT STRIP ── */
        .why-strip { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid #e4e2dc; border-bottom: 1px solid #e4e2dc; background: #f9f8f5; padding: 0 64px; }
        .why-cell { padding: 48px 32px; border-right: 1px solid #e4e2dc; display: flex; flex-direction: column; gap: 12px; transition: background .3s; }
        .why-cell:first-child { border-left: 1px solid #e4e2dc; }
        .why-cell:hover { background: #fff; }
        .why-num { font-size: 11px; font-weight: 400; color: #555; letter-spacing: .1em; }
        .why-title { font-size: 15px; font-weight: 400; color: #0a0a0a; }
        .why-body { font-size: 13px; font-weight: 400; color: #555; line-height: 1.6; }

        /* ── S4: STUDIO LOCATION ── */
        .location-header { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-bottom: 40px; align-items: end; }
        .location-header h2 { font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 300; line-height: 1.2; letter-spacing: -.02em; }
        .location-header h2 em { font-style: italic; font-weight: 400; color: #555; }
        .location-header p { font-size: 13px; line-height: 1.8; color: #666; font-weight: 300; }
        .map-wrap { width: 100%; aspect-ratio: 24/9; overflow: hidden; position: relative; background: #e4e2dc; border: 1px solid #e4e2dc; }
        .map-wrap iframe { width: 100%; height: 100%; border: 0; display: block; filter: grayscale(40%) contrast(1.02); }

        /* ── S6: FINAL CTA ── */
        .final-cta { display: flex; flex-direction: column; align-items: center; text-align: center; border-top: 1px solid #e4e2dc; }
        .final-cta h2 { font-size: clamp(2rem, 4vw, 3.8rem); font-weight: 300; letter-spacing: -.03em; line-height: 1.1; color: #0a0a0a; margin-bottom: 20px; }
        .final-cta h2 em { font-style: italic; font-weight: 400; color: #555; }
        .final-cta p { font-size: 14px; font-weight: 300; color: #666; line-height: 1.7; max-width: 480px; margin-bottom: 36px; }
        .ghost-btn { display: inline-flex; align-items: center; gap: 12px; padding: 14px 40px; background: transparent; border: 1px solid #0a0a0a; font-size: 11px; font-weight: 500; letter-spacing: .15em; text-transform: uppercase; color: #0a0a0a; cursor: pointer; transition: background .25s, color .25s, gap .25s; text-decoration: none; }
        .ghost-btn:hover { background: #0a0a0a; color: #fff; gap: 18px; }

        /* ══════════════════════════════════════════════
           RESPONSIVE MEDIA QUERIES — FULLY UPDATED
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

          /* Contact grid: stack */
          .contact-grid { grid-template-columns: 1fr; }
          .contact-l { padding: 56px 40px; }
          .contact-r { padding: 56px 40px; }

          /* Form inner keeps two columns on tablet */
          .form-inner { grid-template-columns: 1fr 1fr; gap: 0 40px; }

          /* Services strip: 2 cols */
          .why-strip { grid-template-columns: 1fr 1fr; padding: 0 40px; }
          .why-cell:first-child { border-left: none; }
          .why-cell:nth-child(2) { border-right: none; }
          .why-cell:nth-child(3), .why-cell:nth-child(4) { border-top: 1px solid #e4e2dc; }
          .why-cell:nth-child(4) { border-right: none; }

          /* Location */
          .location-header { gap: 32px; }
          .map-wrap { aspect-ratio: 16/7; }
        }

        /* ── Tablet portrait: 768px and below ── */
        @media (max-width: 768px) {
          .page-sec { padding: 52px 28px; }

          /* Hero */
          .hero-l { padding: 40px 28px 28px; }
          .hero-r { margin: 0 28px 28px; height: 44vh; }
          .hero-h1 { font-size: clamp(2rem, 6vw, 2.8rem); margin-bottom: 14px; }
          .hero-sub { font-size: 13px; margin-bottom: 24px; }

          /* Contact */
          .contact-l { padding: 48px 28px; gap: 22px; }
          .contact-r { padding: 48px 28px; }

          /* Form: single column on tablet portrait */
          .form-inner { grid-template-columns: 1fr; gap: 0; }
          .form-right { margin-top: 0; }
          .f-textarea-tall { min-height: 100px; }

          /* Form header badge: stack on narrow */
          .form-badge-row { flex-direction: column !important; align-items: flex-start !important; gap: 14px !important; }

          /* Buttons: side by side but let them wrap */
          .cta-btn, .cta-btn-ghost { padding: 13px 22px; }
          .cta-btn-ghost { margin-left: 8px; }

          /* Stats */
          .form-stats { gap: 24px; }

          /* Services */
          .why-strip { padding: 0 28px; }
          .why-cell { padding: 36px 20px; }

          /* Location */
          .location-header { grid-template-columns: 1fr; gap: 14px; }
          .map-wrap { aspect-ratio: 16/9; }

          /* Final CTA */
          .final-cta h2 { font-size: clamp(1.8rem, 5vw, 2.8rem); }
        }

        /* ── Mobile: 480px and below (iPhone 14 Pro / most Android) ── */
        @media (max-width: 480px) {
          .page-sec { padding: 44px 20px; }

          /* Hero: tighter for small screens */
          .hero { height: auto; max-height: none; overflow: visible; }
          .hero-l { padding: 32px 20px 20px; }
          .hero-r {
            margin: 0 20px 24px;
            height: 36vh;
            min-height: 200px;
          }
          .hero-h1 { font-size: clamp(1.9rem, 7.5vw, 2.4rem); letter-spacing: -.025em; }
          .hero-sub { font-size: 13px; line-height: 1.7; margin-bottom: 20px; max-width: 100%; }
          .hero-stamp { padding: 12px 16px; bottom: 16px; left: 16px; }
          .hero-meta a { font-size: 12px; }

          /* Contact info panel */
          .contact-l { padding: 40px 20px; gap: 20px; }
          .contact-l-val { font-size: 13px; }

          /* Form panel */
          .contact-r { padding: 36px 20px 40px; }
          .contact-r::before { width: 80px; height: 80px; }
          .contact-r::after { width: 60px; height: 60px; }

          .form-accent-line { margin-bottom: 16px; }

          /* Form header */
          .form-header h3 { font-size: 19px; }
          .form-badge-row { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }

          /* All fields single column */
          .form-inner { grid-template-columns: 1fr; gap: 0; }
          .f-group { margin-bottom: 16px; }
          .f-input, .f-select, .f-textarea { padding: 12px 12px; font-size: 14px; }
          /* Bigger touch targets on mobile */
          .f-input, .f-select { min-height: 46px; }
          .f-textarea-tall { min-height: 110px; }
          .f-sel-wrap::after { top: calc(100% - 25px); }

          /* Buttons: full width stack on mobile */
          .cta-btn-row { flex-direction: column !important; gap: 10px !important; }
          .cta-btn { width: 100%; justify-content: center; margin-top: 20px; padding: 15px 20px; }
          .cta-btn-ghost { width: 100%; justify-content: center; margin-left: 0; padding: 15px 20px; }

          /* Stats: compact */
          .form-stats { gap: 20px; margin-top: 24px; padding-top: 20px; flex-wrap: wrap; }
          .form-stat-num { font-size: 18px; }

          /* Services: single column */
          .why-strip { grid-template-columns: 1fr; padding: 0 20px; }
          .why-cell {
            padding: 28px 16px;
            border-right: none !important;
            border-left: none !important;
            border-top: 1px solid #e4e2dc;
          }
          .why-cell:first-child { border-top: none; }

          /* Location */
          .location-header { grid-template-columns: 1fr; gap: 12px; }
          .map-wrap { aspect-ratio: 4/3; }

          /* Final CTA */
          .page-sec.final-cta { padding: 48px 20px; }
          .final-cta h2 { font-size: clamp(1.7rem, 7vw, 2.2rem); }
          .final-cta p { font-size: 13px; }
          .ghost-btn { width: 100%; justify-content: center; padding: 14px 24px; }
        }

        /* ── Small mobile: 390px and below (iPhone SE, iPhone 12 mini) ── */
        @media (max-width: 390px) {
          .page-sec { padding: 40px 16px; }
          .hero-l { padding: 28px 16px 16px; }
          .hero-r { margin: 0 16px 20px; height: 32vh; min-height: 180px; }
          .hero-h1 { font-size: clamp(1.7rem, 8vw, 2.1rem); }
          .contact-l { padding: 36px 16px; }
          .contact-r { padding: 32px 16px 36px; }
          .why-strip { padding: 0 16px; }
          .page-sec.final-cta { padding: 40px 16px; }
          .form-stats { gap: 16px; }
          .cta-btn, .cta-btn-ghost { font-size: 9px; padding: 14px 16px; }
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
          <div className="hero-eyebrow fu1">
            <div className="hero-eyebrow-line" />
            <span className="sec-label">Contact Us</span>
          </div>

          <h1 className="hero-h1 fu2">
            Let's shape
            <em>your vision</em><br />
            together.
          </h1>

          <p className="hero-sub fu3">
            Every great project begins with a single design conversation. Reach out to translate your requirements into a space built for longevity.
          </p>

          <div className="hero-meta fu4">
            <a href="mailto:khajanjiinfraspaces@gmail.com">khajanjiinfraspaces@gmail.com</a>
            <a href="tel:+919284149958">+91 928 414 9958</a>
          </div>
        </div>

        {/* Image panel — margin creates padding, constrained to viewport height */}
        <div className="hero-r fu3">
          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&h=1600&fit=crop&q=85"
            alt="Khajanji Studio Architecture"
          />
          <div className="hero-stamp">
            <span style={{ fontSize:10, letterSpacing:'.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', fontWeight:400 }}>
              Est. 2014
            </span>
            <span style={{ fontSize:20, fontWeight:200, color:'#fff', letterSpacing:'-.01em', lineHeight:1.1 }}>
              10+ Years
            </span>
            <span style={{ fontSize:9, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', fontWeight:400 }}>
              Design Excellence
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════ S2 — CONTACT EXPERIENCE ══════════════════ */}
      <section className="contact-grid" id="enquiry-form">
        <div className="contact-l">
          <div>
            <span className="sec-label sr">Get in Touch</span>
            <h2 className="sr sr-d1" style={{ fontSize: '22px', fontWeight: 300, color: '#0a0a0a', lineHeight: 1.3 }}>
              We welcome every<br />architectural brief.
            </h2>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:20, marginTop:10 }}>
            <div className="contact-l-block sr sr-d1">
              <span className="sec-label" style={{ margin:0, fontSize:10, color:'#888' }}>Office Studio</span>
              <span className="contact-l-val">Nagpur, Maharashtra, India — 440 001</span>
            </div>
            <hr className="rule" />
            <div className="contact-l-block sr sr-d2">
              <span className="sec-label" style={{ margin:0, fontSize:10, color:'#888' }}>Business Hours</span>
              <span className="contact-l-val">Monday – Saturday | 10:00 AM – 7:00 PM IST</span>
            </div>
            <hr className="rule" />
            <p className="sr sr-d3" style={{ fontSize:13, lineHeight:1.7, color:'#777', fontWeight:300, fontStyle:'italic' }}>
              "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
            </p>
          </div>
        </div>

        {/* ── FORM PANEL ── */}
        <div className="contact-r">
          {sent ? (
            <div style={{ position:'relative', zIndex:1 }}>
              <div style={{ width:40, height:2, background:'#1a4fc4', marginBottom:28 }} />
              <h3 style={{ fontSize:'28px', fontWeight:300, color:'#fff', marginBottom:14 }}>Thank you.</h3>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.5)', fontWeight:300, lineHeight:1.7 }}>
                We have received your enquiry. Our design team will get back to you within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate style={{ width:'100%', position:'relative', zIndex:1 }}>

              {/* Form header — spans full width */}
              <div className="sr" style={{ marginBottom:32 }}>
                <div className="form-accent-line" />
                <div className="form-badge-row" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:12 }}>
                  <div>
                    <span className="sec-label" style={{ color:'rgba(255,255,255,0.35)', marginBottom:6 }}>Project Enquiry</span>
                    <h3 style={{ fontSize:22, fontWeight:300, color:'#fff', letterSpacing:'-.01em' }}>Start your design journey</h3>
                    <p style={{ fontSize:12, fontWeight:300, color:'rgba(255,255,255,0.4)', marginTop:6, lineHeight:1.7 }}>
                      Fill in the details and we'll prepare a tailored response.
                    </p>
                  </div>
                  {/* Response time badge */}
                  <div style={{ display:'flex', alignItems:'center', gap:8, padding:'8px 14px', border:'1px solid rgba(26,79,196,0.3)', background:'rgba(26,79,196,0.08)', flexShrink:0 }}>
                    <span style={{ width:6, height:6, borderRadius:'50%', background:'#4caf50', display:'block', flexShrink:0 }} />
                    <span style={{ fontSize:9, letterSpacing:'.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', fontWeight:400 }}>Responds in 24 hrs</span>
                  </div>
                </div>
              </div>

              {error && <p className="f-error">{error}</p>}

              {/* Two-column form layout */}
              <div className="form-inner">
                {/* LEFT COLUMN */}
                <div className="form-left">
                  <div className="f-group sr sr-d1">
                    <label className="f-label">Full Name *</label>
                    <input className="f-input" name="name" placeholder="e.g. Piyush Khajanji" value={form.name} onChange={onChange} />
                  </div>

                  <div className="f-group sr sr-d2">
                    <label className="f-label">Phone Number *</label>
                    <input className="f-input" type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={onChange} />
                  </div>

                  <div className="f-group sr sr-d2">
                    <label className="f-label">Project Type</label>
                    <div className="f-sel-wrap">
                      <select
                        className={`f-select${form.projectType ? ' has-value' : ''}`}
                        name="projectType"
                        value={form.projectType}
                        onChange={onChange}
                      >
                        <option value="" disabled>Select scope</option>
                        {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="f-group sr sr-d3">
                    <label className="f-label">Location</label>
                    <input className="f-input" name="location" placeholder="e.g. Nagpur" value={form.location} onChange={onChange} />
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="form-right">
                  <div className="f-group sr sr-d2" style={{ flex:1, display:'flex', flexDirection:'column' }}>
                    <label className="f-label">Your Message *</label>
                    <textarea className="f-textarea f-textarea-tall" name="message" rows={8}
                      placeholder={"Describe your vision,\ntimeline, site details,\nor budget range..."}
                      value={form.message} onChange={onChange}
                      style={{ flex:1, minHeight:180 }}
                    />
                  </div>

                  {/* Actions inside right column */}
                  <div className="cta-btn-row sr sr-d4" style={{ display:'flex', alignItems:'center', flexWrap:'wrap', gap:0, marginTop:16 }}>
                    <button type="submit" className="cta-btn">
                      Send Enquiry <span style={{ fontSize:13 }}>→</span>
                    </button>
                    <a href="tel:+919284149958" className="cta-btn-ghost">
                      Call Instead
                    </a>
                  </div>

                  <p style={{ fontSize:10, color:'rgba(255,255,255,0.2)', marginTop:14, letterSpacing:'.05em' }}>
                    * Required fields. Your information is kept strictly confidential.
                  </p>
                </div>
              </div>

              {/* Stats strip at bottom */}
              <div className="form-stats sr sr-d4">
                <div className="form-stat">
                  <span className="form-stat-num">10+</span>
                  <span className="form-stat-label">Years Active</span>
                </div>
                <div className="form-stat">
                  <span className="form-stat-num">200+</span>
                  <span className="form-stat-label">Projects Delivered</span>
                </div>
                <div className="form-stat">
                  <span className="form-stat-num">24h</span>
                  <span className="form-stat-label">Response Time</span>
                </div>
              </div>

            </form>
          )}
        </div>
      </section>

      {/* ══════════════════ S3 — WHY CONNECT ══════════════════ */}
      <div className="why-strip">
        {SERVICES.map((s, i) => (
          <div key={s.num} className={`why-cell sr sr-d${i + 1}`}>
            <span className="why-num">{s.num}</span>
            <p className="why-title">{s.title}</p>
            <p className="why-body">{s.body}</p>
          </div>
        ))}
      </div>

      {/* ══════════════════ S4 — STUDIO LOCATION ══════════════════ */}
      <section className="page-sec">
        <div className="location-header">
          <div>
            <span className="sec-label sr">Our Location</span>
            <h2 className="sr sr-d1">
              Based in Nagpur,<br />
              <em>serving clients nationwide.</em>
            </h2>
          </div>
        </div>

        <div className="map-wrap sr sr-d2" style={{ marginBottom: 40 }}>
          <iframe
            title="Khajanji Infraspaces — Studio Map Layout"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238196.6609989218!2d78.96880415!3d21.1458004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5c0e6f8cf%3A0x2f0a76a9afcd0f0!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000"
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ══════════════════ S5 — FOUNDER'S MESSAGE ══════════════════ */}
      <FounderQuote />

      {/* ══════════════════ S6 — FINAL CTA ══════════════════ */}
      <section className="page-sec final-cta">
        <span className="sec-label sr">Begin Your Development</span>
        <h2 className="sr sr-d1">
          Let's create something<br />
          <em>remarkable.</em>
        </h2>
        <p className="sr sr-d2">
          From residential landmarks to corporate offices and masterplanned layouts—we combine design principles with functional execution.
        </p>
        <a href="#enquiry-form" className="ghost-btn sr sr-d3">
          Start a Conversation <span style={{ fontSize:13 }}>→</span>
        </a>
      </section>
    </>
  )
}