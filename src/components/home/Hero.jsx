import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from '../../pages/HomePage.module.css'

export default function Hero({ slide, slides, current, fading, goTo, fadeUp }) {
  return (
    <motion.section className={styles.hero} {...fadeUp}>
      {/* Background images — render all, fade active one in */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`${styles.slideBg} ${i === current ? styles.bgActive : ''}`}
          style={{ backgroundImage: `url(${s.bg})` }}
          aria-hidden="true"
        />
      ))}

      <div className={styles.overlay} />

      {/* Subtle panel dividers like the screenshot */}
      <div className={styles.panelLines} aria-hidden="true">
        <span /><span />
      </div>

      {/* Main content */}
      <div className={`${styles.heroContent} ${fading ? styles.fadeOut : ''}`}>
        <p className={styles.heroTag}>{slide.tag}</p>
        <h1 className={styles.heroTitle}>{slide.title}</h1>
      </div>

      <p className={`${styles.heroSubtitle} ${fading ? styles.fadeOut : ''}`}>
        {slide.subtitle}
      </p>

      <Link to={slide.href} className={styles.viewProject}>
        {slide.cta}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>

      {/* Slide dots */}
      <div className={styles.dots} role="tablist" aria-label="Slides">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </motion.section>
  )
}
