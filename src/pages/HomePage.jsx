import { useState, useEffect, useRef } from 'react'
import styles from './HomePage.module.css'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Process from '../components/home/Process'
import Stats from '../components/home/Stats'
import Portfolio from '../components/home/Portfolio'
import CTABanner from '../components/home/CTABanner'
import Awards from '../components/home/Awards'

const SLIDES = [
  {
    tag:      'FEATURED PROJECT / 2024',
    title:    'Heise',
    subtitle: 'Beyond Architecture. Creating Experiences.',
    cta:      'View Project',
    href:     '/portfolio',
    bg:       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
  },
  {
    tag:      'RECENT PROJECT / 2024',
    title:    'Nordvik',
    subtitle: 'Where Form Meets Function.',
    cta:      'View Project',
    href:     '/portfolio',
    bg:       'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80',
  },
  {
    tag:      'AWARD WINNER / 2023',
    title:    'Solaris',
    subtitle: 'Designing Tomorrow, Today.',
    cta:      'View Project',
    href:     '/portfolio',
    bg:       'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80',
  },
]

export default function HomePage() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const intervalRef = useRef(null)

  function goTo(indexOrFn) {
    setFading(true)
    clearInterval(intervalRef.current)
    setTimeout(() => {
      setCurrent(typeof indexOrFn === 'function' ? indexOrFn : () => indexOrFn)
      setFading(false)
    }, 450)
    intervalRef.current = setInterval(() => advance(), 6000)
  }

  function advance() {
    setFading(true)
    setTimeout(() => {
      setCurrent(c => (c + 1) % SLIDES.length)
      setFading(false)
    }, 450)
  }

  useEffect(() => {
    intervalRef.current = setInterval(advance, 6000)
    return () => clearInterval(intervalRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const slide = SLIDES[current]
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.3 },
  }

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <Hero
        slide={slide}
        slides={SLIDES}
        current={current}
        fading={fading}
        goTo={goTo}
        fadeUp={fadeUp}
      />

      <Services fadeUp={fadeUp} />
      <Portfolio fadeUp={fadeUp} />
      <Stats fadeUp={fadeUp} />
      <Process fadeUp={fadeUp} />
      <Awards />
      <CTABanner fadeUp={fadeUp} />
    </div>
  )
}
