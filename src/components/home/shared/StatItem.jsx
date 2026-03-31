import { motion } from 'framer-motion'
import styles from '../../../pages/HomePage.module.css'

export default function StatItem({ stat, index }) {
  return (
    <motion.div
      className={styles.stat}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        background: '#ffffff',
        border: '1px solid #e5e5e5',
        borderRadius: '14px',
        padding: '44px 40px',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '10px',
        transition:
          'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease',
      }}
      whileHover={{
        scale: 1.03,
        backgroundColor: '#f1f1f1',
        borderColor: '#cfcfcf',
        boxShadow: '0 18px 34px rgba(0, 0, 0, 0.10)',
      }}
    >
      <span className={styles.statValue} style={{ fontWeight: 700, color: '#000000' }}>
        {stat.value}
      </span>
      <span className={styles.statLabel} style={{ color: '#555555' }}>
        {stat.label}
      </span>
    </motion.div>
  )
}
