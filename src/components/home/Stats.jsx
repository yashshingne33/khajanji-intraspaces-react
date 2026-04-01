import { motion } from 'framer-motion'
import styles from '../../pages/HomePage.module.css'
import StatItem from './shared/StatItem'

const STATS = [
  { value: '10+', label: 'Years of experience' },
  { value: '200+', label: 'Residential Projects Completed' },
  { value: '100+',  label: 'Commercial Spaces Transformed' },
  { value: '400+',  label: 'Serving Clients Nationwide' },
]

export default function Stats({ fadeUp }) {
  return (
    <motion.div
      className="new-stats-container"
      {...fadeUp}
      style={{
        background: '#ffffff',
        padding: '60px 40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px',
        borderBottom: '1px solid #e5e5e5',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      {STATS.map((stat, index) => (
        <StatItem key={stat.label} stat={stat} index={index} />
      ))}
    </motion.div>
  )
}
