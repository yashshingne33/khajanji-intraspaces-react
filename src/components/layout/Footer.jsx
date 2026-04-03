import styles from './Footer.module.css'
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa'
import { SiHouzz } from 'react-icons/si'

export default function Footer() {
  const hoverIn = e => { e.currentTarget.style.opacity = '0.7' }
  const hoverOut = e => { e.currentTarget.style.opacity = '1' }

  const handleContactClick = e => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-top']}>
        <div className={styles['footer-col']}>
          <div className={styles['footer-contact']}>
            <a href="mailto:HELLO@KHAJANJIINFRASPACES.COM" className={styles['footer-underline']}>HELLO@KHAJANJIINFRASPACES.COM</a>
            <a href="tel:+919284149958" className={styles['footer-underline']}>+91 928 414 9958</a>
            <p className={styles['footer-address']}>
              Nagpur<br />
              Maharashtra
            </p>
            <a
              href="#"
              className={styles['footer-underline']}
              onClick={handleContactClick}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
              style={{ cursor: 'pointer' }}
            >
              Contact us &rarr;
            </a>
          </div>
        </div>

        <div className={`${styles['footer-col']} ${styles['footer-col-center']}`}>
          <div className={styles['footer-brand']}>
            <img
              className={styles['footer-logo']}
              src="/assets/logo.jpeg"
              alt="Khajanji infraspaces logo"
            />
            <div className={styles['footer-title']}>Khajanji infraspaces</div>
            <div className={styles['footer-subtitle']}>architects</div>
          </div>
        </div>

        <div className={`${styles['footer-col']} ${styles['footer-col-right']}`}>
          <div className={styles['footer-menu-grid']}>
            <ul className={styles['footer-menu']}>
              <li>ABOUT</li>
              <li>PEOPLE</li>
              <li>CAREER</li>
              <li>OUR PROCESS</li>
            </ul>
            <ul className={styles['footer-menu']}>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>REVIEWS</li>
              <li>MEDIA &amp; AWARDS</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <div className={styles['footer-bottom-left']}>&copy; @2026 ROYALSWEBTECH.PVT.LTD</div>
        <div className={styles['footer-social']}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles['footer-icon']}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
            style={{ cursor: 'pointer' }}
          >
            <FaInstagram size={14} />
          </a>
          <a
            href="https://houzz.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Houzz"
            className={styles['footer-icon']}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
            style={{ cursor: 'pointer' }}
          >
            <SiHouzz size={14} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles['footer-icon']}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
            style={{ cursor: 'pointer' }}
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className={styles['footer-icon']}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
            style={{ cursor: 'pointer' }}
          >
            <FaPinterestP size={14} />
          </a>
        </div>
        <div
          className={styles['footer-arrow']}
          onClick={handleTopClick}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label="Back to top"
        >
          &uarr;
        </div>
      </div>
    </footer>
  )
}
