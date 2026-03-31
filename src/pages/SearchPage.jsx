// Maps to: search.php
import { useSearchParams } from 'react-router-dom'
import { usePostsFromUrl } from '../hooks/usePosts'
import PostCard from '../components/post/PostCard'
import Pagination from '../components/ui/Pagination'
import SearchForm from '../components/ui/SearchForm'
import SubHeader from '../components/layout/SubHeader'
import styles from './SearchPage.module.css'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const page  = Number(searchParams.get('page') ?? 1)

  const { posts, total, totalPages } = usePostsFromUrl(9)

  return (
    <div>
      <SubHeader
        title={query ? `Search: "${query}"` : 'Search'}
        breadcrumb="Search"
      />

      <div className={`section ${styles.wrap}`}>
        <div className={styles.searchBar}>
          <SearchForm placeholder="Search again…" />
        </div>

        {query && (
          <p className={styles.count}>{total} result{total !== 1 ? 's' : ''} found</p>
        )}

        {posts.length === 0 ? (
          <p className={styles.status}>
            No results for <strong>"{query}"</strong>. Try different keywords.
          </p>
        ) : (
          <>
            <div className={styles.grid}>
              {posts.map(post => <PostCard key={post.id} post={post} />)}
            </div>
            <Pagination currentPage={page} totalPages={totalPages} />
          </>
        )}
      </div>
    </div>
  )
}
