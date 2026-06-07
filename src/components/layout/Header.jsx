import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/site.js'
import styles from './Header.module.css'

// Routes that have a white/light background (no hero image).
// On these pages the navbar should immediately appear in its solid white style.
const WHITE_BG_ROUTES = ['/contact', '/media', '/about', '/portfolio', '/services']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  // Detect if current route has a white background — apply solid style immediately
  const isWhiteBgPage = WHITE_BG_ROUTES.some(
    route => location.pathname === route || location.pathname.startsWith(route + '/')
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    // Initialise on mount (in case page is already scrolled on load)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Build class string — forceScrolled takes priority over scroll detection
  const headerClass = [
    styles.header,
    isWhiteBgPage ? styles.forceScrolled : (scrolled ? styles.scrolled : ''),
  ].filter(Boolean).join(' ')

  return (
    <>
      <header className={headerClass}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img
            className={styles.logoImage}
            src="/assets/logo.jpeg"
            alt="Khajanji infraspaces logo"
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          <ul>
            {navLinks.reduce((acc, currentLink) => {
              const { label, to, sub } = currentLink
              const displayLabel = label.toLowerCase() === 'services' ? 'Services & Expertise' : label
              const isServices = label.toLowerCase() === 'services'

              acc.push(
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
              )

              if (isServices) {
                acc.push(
                  <li key="media-desktop">
                    <NavLink
                      to="/media"
                      className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                      }
                    >
                      Media
                    </NavLink>
                  </li>
                )
              }

              return acc
            }, [])}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link to="/contact" className={styles.headerBtn}>
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

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
        <nav>
          <ul>
            {navLinks.reduce((acc, currentLink) => {
              const { label, to, sub } = currentLink
              const displayLabel = label.toLowerCase() === 'services' ? 'Services & Expertise' : label
              const isServices = label.toLowerCase() === 'services'

              acc.push(
                <li key={`mobile-${label}`}>
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
              )

              if (isServices) {
                acc.push(
                  <li key="media-mobile">
                    <Link to="/media" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                      Media
                    </Link>
                  </li>
                )
              }

              return acc
            }, [])}
          </ul>
        </nav>
        <Link to="/contact" className={styles.mobileContactBtn} onClick={() => setMenuOpen(false)}>
          Contact us →
        </Link>
      </div>
    </>
  )
}