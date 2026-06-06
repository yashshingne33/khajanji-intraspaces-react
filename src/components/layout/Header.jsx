import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/site.js'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  // const location = useLocation()
  const location = useLocation()

  // Media page par bhi dark font apply karne ke liye array mein add kiya
  
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
<header 
  className={`${styles.header} ${styles.scrolled}`}
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
            {navLinks.reduce((acc, currentLink) => {
              const { label, to, sub } = currentLink;
              const displayLabel = label.toLowerCase() === 'services' ? 'Services & Expertise' : label;
              const isServices = label.toLowerCase() === 'services';

              // 1. Pehle current link ko push karein
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
              );

              // 2. Agar current link "Services" hai, toh uske turant baad Media li push karein (same level par)
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
                );
              }

              return acc;
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

      {/* Mobile Menu Code */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
        <nav>
          <ul>
            {navLinks.reduce((acc, currentLink) => {
              const { label, to, sub } = currentLink;
              const displayLabel = label.toLowerCase() === 'services' ? 'Services & Expertise' : label;
              const isServices = label.toLowerCase() === 'services';

              // Mobile list item push karein
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
              );

              // Mobile mein bhi Services ke just baad Media item push karein
              if (isServices) {
                acc.push(
                  <li key="media-mobile">
                    <Link to="/media" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                      Media
                    </Link>
                  </li>
                );
              }

              return acc;
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