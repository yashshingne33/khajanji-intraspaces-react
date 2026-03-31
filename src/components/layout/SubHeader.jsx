import styles from './SubHeader.module.css'

export default function SubHeader({ title, breadcrumb }) {
  return (
    <div className={styles.subHeader}>
      <div className={styles.inner}>
        {breadcrumb && <p className={styles.breadcrumb}>{breadcrumb}</p>}
        {title && <h1 className={styles.title}>{title}</h1>}
      </div>
    </div>
  )
}
