import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom' // <-- 1. useLocation import kiya
import { navLinks } from '../../data/site.js'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  const location = useLocation() // <-- 2. Current location get ki

  // 3. Check karein ki kya user current me in teen pages par hai
  const isDarkFontPage = ['/about', '/portfolio', '/services'].includes(location.pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      {/* 4. Yahan header ki className me conditions check karke styles.darkFont class ko append kiya */}
      <header 
        className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isDarkFontPage ? styles.darkFont : ''}`}
      >
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img
            className={styles.logoImage}
            src="/assets/logo.jpeg"
            alt="Khajanji infraspaces logo"
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          <ul>
            {navLinks.map(({ label, to, sub }) => {
              // Yahan check kar rahe hain agar label 'Services' hai toh use 'Services & Expertise' dikhayein
              const displayLabel = label.toLowerCase() === 'services' ? 'Services & Expertise' : label;
              
              return (
                <li key={label} className={sub ? styles.navItem : ''}>
                  {sub ? (
                    <div className={styles.dropdownTrigger}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                      >
                        {displayLabel}
                      </NavLink>
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className={styles.dropdownMenu}>
                        {sub.map(s => (
                          <Link key={s.to} to={s.to} className={styles.dropdownItem}>
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                      }
                    >
                      {displayLabel}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link to="/contact" className="btn">
            Contact us
          </Link>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu Code */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
        <nav>
          <ul>
            {navLinks.map(({ label, to, sub }) => {
              // Mobile menu me bhi same change apply kiya
              const displayLabel = label.toLowerCase() === 'services' ? 'Services & Expertise' : label;
              
              return (
                <li key={label}>
                  <Link to={to} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                    {displayLabel}
                  </Link>
                  {sub && (
                    <div className={styles.mobileSubMenu}>
                      {sub.map(s => (
                        <Link key={s.to} to={s.to} className={styles.mobileSubLink} onClick={() => setMenuOpen(false)}>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <Link to="/contact" className="btn" onClick={() => setMenuOpen(false)}>
          Contact us
        </Link>
      </div>
    </>
  )
}