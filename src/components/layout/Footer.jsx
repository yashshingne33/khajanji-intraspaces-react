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
            <a href="mailto: khajanjiinfraspaces@gmail.com" className={styles['footer-underline']}> khajanjiinfraspaces@gmail.com</a>
            <a href="tel:+919322815523" className={styles['footer-underline']}>+91 93228 15523</a>
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
          </div>
        </div>

        <div className={`${styles['footer-col']} ${styles['footer-col-right']}`}>
          <div className={styles['footer-menu-grid']}>
            <ul className={styles['footer-menu']}>
              <li>ABOUT</li>
              <li>OUR PROCESS</li>
            </ul>
            <ul className={styles['footer-menu']}>
              <li>SERVICES & Expertise</li>
              <li>PORTFOLIO</li>
              {/* <li>REVIEWS</li> */}
              
            </ul>
          </div>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        {/* <div className={styles['footer-bottom-left']}>&copy; @2026 ROYALSWEBTECH.PVT.LTD</div> */}
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
