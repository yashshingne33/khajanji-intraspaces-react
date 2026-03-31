import { useState } from 'react'
import styles from './Comment.module.css'

export default function Comment({ comment, depth = 0 }) {
  const { id, author, date, content, avatar, approved, children = [] } = comment
  const [showReply, setShowReply] = useState(false)

  if (!approved) return null

  return (
    <div
      id={`comment-${id}`}
      className={`${styles.comment} ${depth > 0 ? styles.nested : ''}`}
    >
      <div className={styles.wrapper}>
        {avatar && (
          <div className={styles.avatar}>
            <img src={avatar} alt={author} width={48} height={48} />
          </div>
        )}

        <div className={styles.body}>
          <div className={styles.header}>
            <span className={styles.author}>{author}</span>
            <time className={styles.date} dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric',
              })}
            </time>
          </div>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <button
            className={styles.replyBtn}
            onClick={() => setShowReply(v => !v)}
          >
            {showReply ? 'Cancel' : 'Reply'}
          </button>

          {showReply && (
            <div className={styles.replyForm}>
              <p className={styles.replyTo}>Replying to <strong>{author}</strong></p>
              <textarea
                className={styles.textarea}
                placeholder="Write your reply…"
                rows={4}
              />
              <button className="btn" style={{ fontSize: 12 }}>Post reply</button>
            </div>
          )}
        </div>
      </div>

      {/* Nested children */}
      {children.length > 0 && (
        <div className={styles.children}>
          {children.map(child => (
            <Comment key={child.id} comment={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}
