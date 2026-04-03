// src/pages/ContactPage.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.sr')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('sr-on')),
      { threshold: 0.07 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ─────────────────────────────────────────────
   SOCIAL ICON PATHS
───────────────────────────────────────────── */
const SOCIAL = [
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
   FORM FIELD COMPONENT
───────────────────────────────────────────── */
function Field({ label, type='text', placeholder, isTextarea=false, value, onChange, name }) {
  const base = {
    width:'100%',
    padding:'11px 14px',
    fontFamily:"'Outfit', sans-serif",
    fontSize:13,
    fontWeight:300,
    color:'#0a0a0a',
    background:'#fff',
    border:'1px solid #d0cdc7',
    outline:'none',
    resize: isTextarea ? 'vertical' : 'none',
    transition:'border-color 0.2s',
    fontStyle:'normal',
  }
  return (
    <div style={{ marginBottom:18 }}>
      <label style={{ display:'block', fontFamily:"34px 'Outfit', sans-serif", fontSize:12, fontWeight:400, color:'#0a0a0a', marginBottom:6, letterSpacing:'0.01em' }}>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={5}
          style={{ ...base }}
          onFocus={e => e.target.style.borderColor='#0a0a0a'}
          onBlur={e  => e.target.style.borderColor='#d0cdc7'}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ ...base }}
          onFocus={e => e.target.style.borderColor='#0a0a0a'}
          onBlur={e  => e.target.style.borderColor='#d0cdc7'}
        />
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ContactPage() {
  useReveal()

  const [form, setForm]   = useState({ name:'', email:'', city:'', phone:'', message:'' })
  const [sent, setSent]   = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email and message.')
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: '34px 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; background: #fff; color: #0a0a0a; }

        .sr    { opacity: 0; transform: translateY(24px); transition: opacity 0.75s cubic-bezier(.25,.46,.45,.94), transform 0.75s cubic-bezier(.25,.46,.45,.94); }
        .sr-on { opacity: 1 !important; transform: translateY(0) !important; }
        .sr-d1 { transition-delay: 0.1s; }
        .sr-d2 { transition-delay: 0.2s; }
        .sr-d3 { transition-delay: 0.3s; }

        .fu1 { animation: fu 0.8s cubic-bezier(.25,.46,.45,.94) 0.1s both; }
        .fu2 { animation: fu 0.8s cubic-bezier(.25,.46,.45,.94) 0.28s both; }
        .fu3 { animation: fu 0.8s cubic-bezier(.25,.46,.45,.94) 0.44s both; }
        @keyframes fu { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }

        /* Placeholder styling */
        ::placeholder { color: #b0ada8; font-weight: 300; font-size: 13px; }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-right { min-height: 50vh !important; margin-top: 0 !important; }
          .pad { padding-left: 24px !important; padding-right: 24px !important; }
          .form-card { 
            position: relative !important; 
            top: 0 !important; left: 0 !important; transform: none !important; 
            width: 100% !important; margin-top: -80px !important; 
            z-index: 10 !important; 
          }
        }
      `}</style>

      {/* Navbar removed — global layout Header is used */}

      {/* ══════════════════════════════════════════
          MAIN CONTACT SECTION
          Left col: heading + contact info
          Right col: background image + floating white form card
      ══════════════════════════════════════════ */}
      <section
        className="contact-grid pad"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
          paddingTop: 64,
        }}
      >
        {/* ── LEFT ─────────────────────────────── */}
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', padding:'80px 48px 80px' }}>

          {/* Page heading */}
          <h1 className="fu1" style={{
            fontFamily:"34px 'Outfit', sans-serif",
            fontSize:'clamp(2.4rem,4vw,3.8rem)',
            fontWeight:400,
            lineHeight:1.12,
            letterSpacing:'-0.01em',
            marginBottom:28,
            color:'#0a0a0a',
          }}>
            Get in touch
          </h1>

          {/* Subtitle */}
          <p className="fu2" style={{
            fontFamily:"34px 'Outfit', sans-serif",
            fontSize:14,
            lineHeight:1.75,
            color:'#555',
            fontWeight:300,
            maxWidth:300,
            marginBottom:48,
          }}>
            Don't hesitate to get in touch with Khajanji Infraspaces if you want to find out about design services that incorporate luxurious living and timeless interiors.
          </p>

          {/* GET IN TOUCH */}
          <div className="fu3" style={{ marginBottom:36 }}>
            <p style={{ fontFamily:"34px 'Outfit', sans-serif", fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'#8a8880', fontWeight:300, marginBottom:14 }}>
              Get in touch
            </p>
            <a href="mailto:hello@khajanjiinfraspaces.com"
              style={{
                display:'block',
                fontFamily:"34px 'Outfit', sans-serif",
                fontSize:14, fontWeight:400,
                color:'#0a0a0a', textDecoration:'none',
                borderBottom:'1px solid #0a0a0a',
                paddingBottom:1,
                marginBottom:10,
                width:'fit-content',
                transition:'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity='0.5'}
              onMouseLeave={e => e.currentTarget.style.opacity='1'}
            >
              hello@khajanjiinfraspaces.com
            </a>
            <a href="tel:+12030405010"
              style={{
                display:'block',
                fontFamily:"34px 'Outfit', sans-serif",
                fontSize:14, fontWeight:400,
                color:'#0a0a0a', textDecoration:'none',
                borderBottom:'1px solid #0a0a0a',
                paddingBottom:1,
                width:'fit-content',
                transition:'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity='0.5'}
              onMouseLeave={e => e.currentTarget.style.opacity='1'}
            >
              +91 928 414 9958
            </a>
          </div>

          {/* SCOPE OF WORK / Address */}
          <div className="fu3" style={{ transitionDelay:'0.12s' }}>
            <p style={{ fontFamily:"34px 'Outfit', sans-serif", fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'#8a8880', fontWeight:300, marginBottom:14 }}>
              Scope of work
            </p>
            <p style={{ fontFamily:"34px 'Outfit', sans-serif", fontSize:14, fontWeight:400, color:'#0a0a0a', lineHeight:1.65 }}>
              NAGPUR<br/>MAHARASHTRA
            </p>
          </div>
        </div>

        {/* ── RIGHT — image + overlaid form card ── */}
        <div
          className="contact-right"
          style={{
            position: 'relative',
            minHeight: '100vh',
          }}
        >
          {/* Background image fills the entire right column */}
          <img
            src="https://images.unsplash.com/photo-1758551038941-a67e29026bff?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Interior"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />

          {/* White form card — floats over the image, inset from edges */}
          <div className="form-card" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'calc(100% - 48px)',
            maxWidth: 580,
            background: '#8C7226',
            
            padding: '32px 32px 28px',
            boxShadow: '0 2px 24px rgba(0,0,0,0.10)',
          }}>
            {sent ? (
              /* Success state */
              <div style={{ textAlign:'center', padding:'40px 0' }}>
                <p style={{ fontFamily:"34px 'Outfit', sans-serif", fontSize:'1.6rem', fontWeight:400, marginBottom:12 }}>Thank you.</p>
                <p style={{ fontFamily:"34px 'Outfit', sans-serif", fontSize:13, color:'#555', fontWeight:300, lineHeight:1.7 }}>
                  We'll be in touch within 1–2 business days.
                </p>
              </div>
            ) : (
              <>
                {/* Intro text inside card */}
                <p style={{
                  fontFamily:"34px 'Outfit', sans-serif",
                  fontSize:13,
                  lineHeight:1.72,
                  color:'#0a0a0a',
                  fontWeight:300,
                  marginBottom:24,
                  fontStyle:'italic',
                }}>
                  If you have an interesting project or commission you want to discuss, please complete the form and we will contact you to discuss your project.
                </p>

                {/* Error */}
                {error && (
                  <p style={{ fontFamily:"34px 'Outfit', sans-serif", fontSize:12, color:'#c0392b', marginBottom:14 }}>{error}</p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate>
                  <Field
                    label="Your name"
                    name="name"
                    placeholder="e.g. John Smith"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <Field
                    label="Email address"
                    type="email"
                    name="email"
                    placeholder="e.g. john@youremail.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <Field
                    label="City"
                    name="city"
                    placeholder="e.g. Nagpur"
                    value={form.city}
                    onChange={handleChange}
                  />
                  <Field
                    label="Phone number"
                    type="tel"
                    name="phone"
                    placeholder="e.g. +1 200 300 40"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <Field
                    label="Your message"
                    name="message"
                    placeholder="Add here"
                    isTextarea={true}
                    value={form.message}
                    onChange={handleChange}
                  />

                  {/* Send button */}
                  <button
                    type="submit"
                    style={{
                      padding:'10px 28px',
                      background:'transparent',
                      border:'1px solid #0a0a0a',
                      fontFamily:"34px 'Outfit', sans-serif",
                      fontSize:13,
                      fontWeight:400,
                      color:'#0a0a0a',
                      cursor:'pointer',
                      letterSpacing:'0.02em',
                      transition:'background 0.2s, color 0.2s',
                      marginTop:4,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background='#0a0a0a'; e.currentTarget.style.color='#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#0a0a0a' }}
                  >
                    Send
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer removed — global layout Footer is used */}
    </>
  )
}