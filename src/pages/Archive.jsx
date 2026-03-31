// Maps to: archive.php + loop.php
import { useSearchParams } from 'react-router-dom'
import { usePostsFromUrl, useSidebarData } from '../hooks/usePosts'
import PostCard from '../components/post/PostCard'
import Pagination from '../components/ui/Pagination'
import Sidebar from '../components/ui/Sidebar'
import SubHeader from '../components/layout/SubHeader'
import styles from './Archive.module.css'

export default function Archive() {
  const [searchParams] = useSearchParams()
  const page     = Number(searchParams.get('page') ?? 1)
  const category = searchParams.get('category') ?? undefined
  const tag      = searchParams.get('tag')      ?? undefined

  const { posts, total, totalPages } = usePostsFromUrl(9)
  const { recentPosts, categories }  = useSidebarData()

  const title = category ? `Category: ${category}` : tag ? `Tag: ${tag}` : 'Blog'

  return (
    <div>
      <SubHeader title={title} breadcrumb="Blog" />

      <div className={`section ${styles.layout}`}>
        <div>
          {posts.length === 0 ? (
            <p className={styles.status}>No posts found.</p>
          ) : (
            <>
              <div className={styles.grid}>
                {posts.map(post => <PostCard key={post.id} post={post} />)}
              </div>
              <Pagination currentPage={page} totalPages={totalPages} />
            </>
          )}
        </div>

        <aside className={styles.sidebar}>
          <Sidebar recentPosts={recentPosts} categories={categories} />
        </aside>
      </div>
    </div>
  )
}
