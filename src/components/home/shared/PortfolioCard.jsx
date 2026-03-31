import { Link } from 'react-router-dom'
import styles from '../../../pages/HomePage.module.css'

export default function PortfolioCard({ item }) {
  return (
    <Link to="/portfolio" className={styles.portfolioItem}>
      <div className={styles.portfolioImgWrap}>
        <img src={item.img} alt={item.title} className={styles.portfolioImg} />
      </div>
      <div className={styles.portfolioOverlay} />
      <div className={styles.portfolioInfo}>
        <p className={styles.portfolioCategory}>{item.category}</p>
        <p className={styles.portfolioTitle}>{item.title}</p>
        <p className={styles.portfolioYear}>{item.year}</p>
      </div>
    </Link>
  )
}
