import { motion } from 'framer-motion'
import styles from '../../pages/HomePage.module.css'
import StatItem from './shared/StatItem'

const STATS = [
  { value: '15+', label: 'Years of practice' },
  { value: '240', label: 'Projects completed' },
  { value: '32',  label: 'International awards' },
  { value: '18',  label: 'Countries' },
]

export default function Stats({ fadeUp }) {
  return (
    <motion.div
      className={styles.stats}
      {...fadeUp}
      style={{
        background: '#ffffff',
        padding: 'clamp(40px, 5vw, 60px) clamp(24px, 5vw, 60px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px',
        borderTop: 'none',
        borderBottom: 'none',
      }}
    >
      {STATS.map((stat, index) => (
        <StatItem key={stat.label} stat={stat} index={index} />
      ))}
    </motion.div>
  )
}
