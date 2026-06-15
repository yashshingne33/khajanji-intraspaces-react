import { useState, useEffect, useRef } from 'react'
import styles from './HomePage.module.css'
import Hero from '../components/home/Hero'
import WhoWeAre from '../components/home/WhoWeAre'
import Services from '../components/home/Services'
import Process from '../components/home/Process'
import BuildPromo from '../components/home/BuildPromo'
import Stats from '../components/home/Stats'
import Portfolio from '../components/home/Portfolio'
import CTABanner from '../components/home/CTABanner'
import FounderQuote from '../components/home/FounderQuote'
import MediaPress from '../components/home/MediaPress'

const SLIDES = [
  {
    tag: 'FEATURED PROJECT / 2024',
    title: 'Architectural',
    subtitle: 'Beyond Architecture. Creating Experiences.',
    cta: 'View Our Portfolio',
    href: '/portfolio',
    bg: '/assets/hero1.jpg',
  },
  {
    tag: 'RECENT PROJECT / 2024',
    title: '3D Design',
    subtitle: 'Where Form Meets Function.',
    cta: 'Explore Our Services',
    href: '/portfolio',
    bg: '/assets/hero2.jpg',
  },
  {
    tag: 'AWARD WINNER / 2023',
    title: 'Construction',
    subtitle: 'Designing Tomorrow, Today.',
    cta: 'Schedule a Consultation',
    href: '/portfolio',
    bg: '/assets/hero3.jpg',
  },
]

const AUTO_PLAY_MS = 5000
const FADE_MS      = 450

export default function HomePage() {
  const [current, setCurrent] = useState(0)
  const [fading,  setFading]  = useState(false)
  const intervalRef = useRef(null)

  /** Restart the auto-play timer */
  function resetTimer() {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(advance, AUTO_PLAY_MS)
  }

  /** Navigate to a specific slide index */
  function goTo(index) {
    if (index === current) return
    setFading(true)
    resetTimer()
    setTimeout(() => {
      setCurrent(index)
      setFading(false)
    }, FADE_MS)
  }

  /** Advance to the next slide */
  function advance() {
    setFading(true)
    setTimeout(() => {
      setCurrent(c => (c + 1) % SLIDES.length)
      setFading(false)
    }, FADE_MS)
  }

  useEffect(() => {
    intervalRef.current = setInterval(advance, AUTO_PLAY_MS)
    return () => clearInterval(intervalRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const slide   = SLIDES[current]
  const fadeUp  = {}   // kept for parity with child components

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <Hero
        slide={slide}
        slides={SLIDES}
        current={current}
        fading={fading}
        goTo={goTo}
        fadeUp={{
          initial:    { opacity: 0 },
          animate:    { opacity: 1 },
          transition: { duration: 0.8 },
        }}
      />

      <WhoWeAre   fadeUp={fadeUp} />
      <Services   fadeUp={fadeUp} />
      <Portfolio  fadeUp={fadeUp} />
      <Process    fadeUp={fadeUp} />
      <BuildPromo fadeUp={fadeUp} />
      <Stats      fadeUp={fadeUp} />
      <FounderQuote fadeUp={fadeUp} />
      <MediaPress   fadeUp={fadeUp} />
      <CTABanner    fadeUp={fadeUp} />
    </div>
  )
}













