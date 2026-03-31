import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'

export default function PostCard({ post }) {
  const { slug, title, excerpt, date, author, categories, featuredImage } = post

  return (
    <article className={styles.card}>
      {featuredImage && (
        <Link to={`/blog/${slug}`} className={styles.imageWrap}>
          <img src={featuredImage} alt={title} className={styles.image} />
        </Link>
      )}

      <div className={styles.body}>
        {categories?.length > 0 && (
          <div className={styles.cats}>
            {categories.map(cat => (
              <Link key={cat} to={`/blog?category=${cat}`} className={styles.cat}>
                {cat}
              </Link>
            ))}
          </div>
        )}

        <h2 className={styles.title}>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h2>

        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}

        <div className={styles.meta}>
          {author && (
            <Link to={`/author/${author.slug}`} className={styles.author}>
              {author.name}
            </Link>
          )}
          {date && <time className={styles.date} dateTime={date}>{formatDate(date)}</time>}
        </div>
      </div>
    </article>
  )
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}
