import { Link, useLocation } from 'react-router-dom'
import styles from './Pagination.module.css'

export default function Pagination({ currentPage, totalPages }) {
  const { pathname, search } = useLocation()

  function pageHref(page) {
    const params = new URLSearchParams(search)
    if (page === 1) { params.delete('page') }
    else { params.set('page', page) }
    const qs = params.toString()
    return `${pathname}${qs ? `?${qs}` : ''}`
  }

  if (totalPages <= 1) return null

  const pages = buildPageRange(currentPage, totalPages)

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      {/* Prev */}
      {currentPage > 1 ? (
        <Link to={pageHref(currentPage - 1)} className={`${styles.btn} ${styles.prev}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </Link>
      ) : (
        <span className={`${styles.btn} ${styles.prev} ${styles.disabled}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </span>
      )}

      {/* Page numbers */}
      <div className={styles.pages}>
        {pages.map((p, i) =>
          p === '…' ? (
            <span key={`ellipsis-${i}`} className={styles.ellipsis}>…</span>
          ) : (
            <Link
              key={p}
              to={pageHref(p)}
              className={`${styles.page} ${p === currentPage ? styles.active : ''}`}
              aria-current={p === currentPage ? 'page' : undefined}
            >
              {p}
            </Link>
          )
        )}
      </div>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link to={pageHref(currentPage + 1)} className={`${styles.btn} ${styles.next}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </Link>
      ) : (
        <span className={`${styles.btn} ${styles.next} ${styles.disabled}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </span>
      )}
    </nav>
  )
}

function buildPageRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  if (current <= 4) return [1, 2, 3, 4, 5, '…', total]
  if (current >= total - 3) return [1, '…', total-4, total-3, total-2, total-1, total]
  return [1, '…', current-1, current, current+1, '…', total]
}
