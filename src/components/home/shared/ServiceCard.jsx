import { motion } from 'framer-motion'

export default function ServiceCard({ service, index }) {
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -5, scale: 1.02 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {service.icon}
      <div className="service-divider" aria-hidden="true" />
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </motion.article>
  )
}
