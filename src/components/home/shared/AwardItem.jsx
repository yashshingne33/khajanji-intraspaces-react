import { motion } from 'framer-motion'

export default function AwardItem({ item, index }) {
  return (
    <motion.div
      className="awards__row"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <div className="awards__year">{item.year}</div>
      <div className="awards__title">{item.title}</div>
    </motion.div>
  )
}
