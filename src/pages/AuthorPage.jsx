// Maps to: author.php
import { useParams, useSearchParams } from 'react-router-dom'
import { useAuthorPosts } from '../hooks/usePosts'
import PostCard from '../components/post/PostCard'
import Pagination from '../components/ui/Pagination'
import SubHeader from '../components/layout/SubHeader'
import NotFound from './NotFound'
import styles from './AuthorPage.module.css'

export default function AuthorPage() {
  const { name } = useParams()
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page') ?? 1)

  const { posts, author, totalPages } = useAuthorPosts(name, { page, perPage: 9 })

  if (!author) return <NotFound />

  return (
    <div>
      <SubHeader title={author.name} breadcrumb="Author" />

      <div className={`section ${styles.wrap}`}>
        <div className={styles.authorCard}>
          {author.avatar && (
            <img src={author.avatar} alt={author.name} className={styles.avatar} />
          )}
          <div className={styles.authorInfo}>
            <h2 className={styles.authorName}>{author.name}</h2>
            {author.bio && <p className={styles.authorBio}>{author.bio}</p>}
          </div>
        </div>

        {posts.length === 0 ? (
          <p className={styles.status}>No posts by this author.</p>
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
