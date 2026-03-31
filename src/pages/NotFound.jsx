// Maps to: 404.php
import { Link } from 'react-router-dom'
import SearchForm from '../components/ui/SearchForm'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.errorNum}>404</div>
        <h1 className={styles.headline}>Holy guacamole!</h1>
        <p className={styles.sub}>
          Looks like this page is on vacation. Or just playing hard to get.
          At any rate… it is not here.
        </p>

        <div className={styles.actions}>
          <Link to="/" className="btn">
            ← Go to the home page
          </Link>
          <span className={styles.or}>or just search</span>
        </div>

        <div className={styles.search}>
          <SearchForm placeholder="Search the site…" autoFocus />
        </div>
      </div>
    </div>
  )
}
