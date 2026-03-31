import { Link } from 'react-router-dom'
import styles from './PostMeta.module.css'

export default function PostMeta({ author, date, categories, tags, commentCount }) {
  return (
    <div className={styles.meta}>
      {author && (
        <div className={styles.item}>
          <span className={styles.label}>By</span>
          <Link to={`/author/${author.slug}`} className={styles.value}>
            {author.name}
          </Link>
        </div>
      )}

      {date && (
        <div className={styles.item}>
          <span className={styles.label}>Published</span>
          <time className={styles.value} dateTime={date}>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </time>
        </div>
      )}

      {categories?.length > 0 && (
        <div className={styles.item}>
          <span className={styles.label}>In</span>
          <span className={styles.value}>
            {categories.map((cat, i) => (
              <span key={cat}>
                <Link to={`/blog?category=${cat}`} className={styles.link}>{cat}</Link>
                {i < categories.length - 1 && ', '}
              </span>
            ))}
          </span>
        </div>
      )}

      {commentCount !== undefined && (
        <div className={styles.item}>
          <span className={styles.label}>Comments</span>
          <span className={styles.value}>{commentCount}</span>
        </div>
      )}

      {tags?.length > 0 && (
        <div className={`${styles.item} ${styles.tags}`}>
          {tags.map(tag => (
            <Link key={tag} to={`/blog?tag=${tag}`} className={styles.tag}>#{tag}</Link>
          ))}
        </div>
      )}
    </div>
  )
}
