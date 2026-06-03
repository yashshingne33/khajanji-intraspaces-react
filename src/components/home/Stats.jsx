import { motion } from 'framer-motion'
import styles from '../../pages/HomePage.module.css'
import StatItem from './shared/StatItem'

const STATS = [
  { value: '10+', label: 'Years of design and planning experience.' },
  { value: '20+', label: 'Projects across multiple real estate segments.' },
  { value: '',  label: 'Expertise in Residential, Commercial, Plotted Projects, and Townships.' },
  { value: '',  label: 'Focus on architecture, planning, and 3D visualization.' },
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
