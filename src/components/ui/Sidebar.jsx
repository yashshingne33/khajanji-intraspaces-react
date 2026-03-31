import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'
import styles from './Sidebar.module.css'

export default function Sidebar({ recentPosts = [], categories = [] }) {
  return (
    <aside className={styles.sidebar}>
      {/* Search */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>Search</h3>
        <SearchForm />
      </div>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>Recent Posts</h3>
          <ul className={styles.recentList}>
            {recentPosts.map(post => (
              <li key={post.slug} className={styles.recentItem}>
                <Link to={`/blog/${post.slug}`} className={styles.recentLink}>
                  {post.title}
                </Link>
                <time className={styles.recentDate}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', year: 'numeric',
                  })}
                </time>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>Categories</h3>
          <ul className={styles.catList}>
            {categories.map(cat => (
              <li key={cat.slug}>
                <Link to={`/blog?category=${cat.slug}`} className={styles.catLink}>
                  <span>{cat.name}</span>
                  <span className={styles.catCount}>{cat.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  )
}
