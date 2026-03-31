// Maps to: single.php
import { useParams } from 'react-router-dom'
import { usePost, useComments, useSidebarData, useRelatedPosts } from '../hooks/usePosts'
import SubHeader from '../components/layout/SubHeader'
import PostMeta from '../components/post/PostMeta'
import Comment from '../components/post/Comment'
import PostCard from '../components/post/PostCard'
import Sidebar from '../components/ui/Sidebar'
import NotFound from './NotFound'
import styles from './BlogPost.module.css'

export default function BlogPost() {
  const { slug }     = useParams()
  const post         = usePost(slug)
  const comments     = useComments(slug)
  const related      = useRelatedPosts(slug, 3)
  const { recentPosts, categories } = useSidebarData()

  if (!post) return <NotFound />

  return (
    <div>
      <SubHeader title={post.title} breadcrumb="Blog" />

      <div className={`section ${styles.layout}`}>
        {/* Main article */}
        <article className={styles.article}>
          {post.featuredImage && (
            <img src={post.featuredImage} alt={post.title} className={styles.featuredImage} />
          )}

          <PostMeta
            author={post.author}
            date={post.date}
            categories={post.categories}
            tags={post.tags}
            commentCount={post.commentCount}
          />

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related posts */}
          {related.length > 0 && (
            <section className={styles.related}>
              <h2 className={styles.relatedTitle}>Related projects</h2>
              <div className={styles.relatedGrid}>
                {related.map(p => <PostCard key={p.id} post={p} />)}
              </div>
            </section>
          )}

          {/* Comments */}
          <section className={styles.comments}>
            <h2 className={styles.commentsTitle}>
              {comments.length} Comment{comments.length !== 1 ? 's' : ''}
            </h2>

            {comments.length > 0 && (
              <div className={styles.commentList}>
                {comments.map(c => <Comment key={c.id} comment={c} />)}
              </div>
            )}

            <div className={styles.commentForm}>
              <h3 className={styles.formTitle}>Leave a comment</h3>
              <div className={styles.formRow}>
                <input className={styles.input} type="text"  placeholder="Name *" required />
                <input className={styles.input} type="email" placeholder="Email *" required />
              </div>
              <textarea className={styles.textarea} rows={5} placeholder="Your comment…" />
              <button className="btn">Post comment</button>
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <Sidebar recentPosts={recentPosts} categories={categories} />
        </aside>
      </div>
    </div>
  )
}
