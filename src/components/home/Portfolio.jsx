import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from '../../pages/HomePage.module.css'
import PortfolioCard from './shared/PortfolioCard'

const PORTFOLIO = [
  {
    title: '3 Tower Residence Nagpur',
    year: '2024',
    category: 'Residential',
    img: '/assets/portfolio1.jpg',
  },
  {
    title: 'Bungalow,Civil Line, Nagpur',
    year: '2023',
    category: 'Residential',
    img: '/assets/portfolio2.jpg',
  },
  {
    title: '7 Floor Pinnacle,Chatrapati Nagar,Nagpur',
    year: '2023',
    category: 'Mixed-Use',
    img: '/assets/portfolio3.jpg',
  },
]

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

export default function Portfolio({ fadeUp }) {
  return (
    <motion.section className={styles.portfolio} id="portfolio" {...fadeUp}>
      {/* हेडर को पूरी तरह सेंटर अलाइन किया */}
      <div className={styles.portfolioHead} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <p className="section-label-centered">Selected works</p>
      </div>

      {/* कार्ड्स की ओवरऑल साइज को छोटा रखने के लिए ग्रिड रैपर */}
      <div className="portfolio-grid-wrapper">
        <div className={styles.portfolioGrid}>
          {PORTFOLIO.map(item => (
            <PortfolioCard key={`${item.title}-${item.img}`} item={item} />
          ))}
        </div>
      </div>

      {/* 'View all projects' को नीचे सेंटर में 'More about us' जैसी स्टाइल के साथ शिफ्ट किया */}
      <div className="view-all-projects-wrapper">
        <Link to="/about" className="who-we-are__link">
          View all projects <span className="arrow">&#8594;</span> 
        </Link>
      </div>

      <style>{`
        /* "Selected works" का टेक्स्ट बड़ा, बोल्ड और सेंटर करने के लिए */
        .section-label-centered {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(20px, 2.5vw, 24px);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 400;
          color: #000000;
          text-align: center;
          margin-top: 0;
          margin-bottom: 36px;
        }

        /* कार्ड्स की विड्थ को थोड़ा छोटा और कस्टमाइज़ रखने के लिए */
        .portfolio-grid-wrapper {
          max-width: 1150px;
          margin: 0 auto;
          width: 100%;
        }

        /* 'More about us' जैसी लिंक की एकदम डार्क और थिक बॉर्डर वाली स्टाइलिंग */
        .view-all-projects-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 40px;
          margin-bottom: 20px;
        }

        .more-about-style-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display), sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #000000;
          text-decoration: none;
          border-bottom: 2px solid #000000;
          padding-bottom: 6px;
          transition: opacity 0.3s ease;
          white-space: nowrap;
        }

        .more-about-style-link:hover {
          opacity: 0.7;
        }

        /* कार्ड्स का ओरिजिनल होवर और ट्रांजिशन इफेक्ट */
        .${styles.portfolioGrid} :global(.${styles.portfolioItem}) {
          transition: transform 0.3s ease;
        }

        .${styles.portfolioGrid} :global(.${styles.portfolioItem}):hover {
          transform: scale(1.03);
        }

        @media (max-width: 600px) {
          .section-label-centered {
            font-size: 18px;
            margin-bottom: 24px;
          }
          .view-all-projects-wrapper {
            margin-top: 28px;
          }
        }
      `}</style>
    </motion.section>
  )
}