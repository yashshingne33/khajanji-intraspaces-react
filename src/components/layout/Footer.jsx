import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top Section: Brand & Navigation */}
        <div className={styles.topSection}>
          
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <img
              className={styles.logo}
              src="/assets/logo.jpeg"
              alt="Khajanji Infraspaces Logo"
            />
            <p className={styles.tagline}>
              Crafting premium spaces with architectural excellence and modern design engineering.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Explore</h4>
            <ul className={styles.menuList}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              {/* <li><Link to="/portfolio">Portfolio</Link></li> */}
            </ul>
          </div>

          {/* Services & Media Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>What We Do</h4>
            <ul className={styles.menuList}>
              <li><Link to="/services">Services & Expertise</Link></li>
              <li><Link to="/media">Media & Press</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <a href="mailto:khajanjiinfraspaces@gmail.com" className={styles.contactLink}>
                khajanjiinfraspaces@gmail.com
              </a>
              <a href="tel:+919322815523" className={styles.contactLink}>
                +91 93228 15523
              </a>
              <p className={styles.address}>
                Nagpur, Maharashtra, India
              </p>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <hr className={styles.divider} />

        {/* Bottom Section: Copyright, Socials & Top Arrow */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Khajanji Infraspaces. All Rights Reserved.
          </p>

          <div className={styles.footerActions}>
            <div className={styles.socialGroup}>
              <a href="https://www.instagram.com/stallion3dandco?igsh=Zmljamg3b2VmZDhz&utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram />
              </a>
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebookF />
              </a> */}
              <a href="https://www.linkedin.com/company/khajanji-infraspaces/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BpTJJV74ERFCo3cAc1t1IEw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>

            <button className={styles.scrollTopBtn} onClick={handleTopClick} aria-label="Scroll to top">
              &uarr;
            </button>
          </div>
        </div>

      </div>

      
    </footer>
  )
}