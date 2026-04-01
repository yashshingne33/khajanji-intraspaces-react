import { motion } from 'framer-motion'

export default function StatItem({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        gap: '12px',
      }}
    >
      <span style={{ fontWeight: 400, color: '#000000', fontSize: 'clamp(36px, 4vw, 42px)', lineHeight: 1 }}>
        {stat.value}
      </span>
      <span style={{ color: '#666666', fontSize: '13px', lineHeight: 1.4, maxWidth: '180px' }}>
        {stat.label}
      </span>
    </motion.div>
  )
}
