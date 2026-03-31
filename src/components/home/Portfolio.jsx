import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from '../../pages/HomePage.module.css'
import PortfolioCard from './shared/PortfolioCard'

const PORTFOLIO = [
  {
    title: '3 Tower Residence Nagpur',
    year: '2024',
    category: 'Residential',
    img: '/assets/WhatsApp Image 2026-03-28 at 1.03.06 PM.jpeg',
  },
  {
    title: 'Bungalow,Civil Line, Nagpur',
    year: '2023',
    category: 'Residential',
    img: '/assets/WhatsApp Image 2026-03-28 at 1.03.06 PM (1).jpeg',
  },
  {
    title: '7 Floor Pinnacle,Chatrapati Nagar,Nagpur',
    year: '2023',
    category: 'Mixed-Use',
    img: '/assets/WhatsApp Image 2026-03-28 at 1.03.06 PM (2).jpeg',
  },
 
  
]

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

export default function Portfolio({ fadeUp }) {
  return (
    <motion.section className={styles.portfolio} id="portfolio" {...fadeUp}>
      <div className={styles.portfolioHead}>
        <p className="section-label" style={{ marginBottom: 0 }}>Selected works</p>
        <Link to="/portfolio" className={styles.seeAll}>
          View all projects
          <ArrowIcon />
        </Link>
      </div>

      <div className={styles.portfolioGrid}>
        {PORTFOLIO.map(item => (
          <PortfolioCard key={`${item.title}-${item.img}`} item={item} />
        ))}
      </div>

      <style>{`
        .${styles.portfolioGrid} :global(.${styles.portfolioItem}) {
          transition: transform 0.3s ease;
        }

        .${styles.portfolioGrid} :global(.${styles.portfolioItem}):hover {
          transform: scale(1.03);
        }
      `}</style>
    </motion.section>
  )
}
