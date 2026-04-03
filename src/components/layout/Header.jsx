import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks } from '../../data/site.js'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img
            className={styles.logoImage}
            src="/assets/logo.jpeg"
            alt="Khajanji infraspaces logo"
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          <ul>
            {navLinks.map(({ label, to, sub }) => (
              <li key={label} className={sub ? styles.navItem : ''}>
                {sub ? (
                  <div className={styles.dropdownTrigger}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                      }
                    >
                      {label}
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
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
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

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
        <nav>
          <ul>
            {navLinks.map(({ label, to, sub }) => (
              <li key={label}>
                <Link to={to} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  {label}
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
            ))}
          </ul>
        </nav>
        <Link to="/contact" className="btn" onClick={() => setMenuOpen(false)}>
          Contact us
        </Link>
      </div>
    </>
  )
}
