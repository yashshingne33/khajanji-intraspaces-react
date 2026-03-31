import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Process.module.css'

const PROCESS_ITEMS = [
  {
    title: 'Step 1',
    body: 'Preparing sketch plans & finalizing plans after discussion with Stakeholders.',
  },
  {
    title: 'Step 2',
    body: 'Handshaking on the plan and strategizing on the scope of the Project',
  },
  {
    title: 'Step 3',
    body: 'Designing the 3D universe with Arrangement, Unique Assets and other vital accessories for the project',
  },
  {
    title: 'Step 4',
    body: 'Final Meeting with stakeholders and updating few bits and pieces',
  },
  {
    title: 'Step 5',
    body: 'Deployment and handing over the Project with required Renders and Promo Videos.',
  },
]

export default function Process({ fadeUp }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggle = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <motion.section className={styles.process} {...fadeUp}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className="section-label">OUR PROCESS</p>
            <p className={styles.heading}>
              Our process starts with the first conversation and continues through move-in, guided by a deep understanding of client goals and site-specific opportunities
            </p>

            <div className={styles.accordion}>
              {PROCESS_ITEMS.map((item, index) => {
                const isOpen = activeIndex === index
                const hasBody = Boolean(item.body)
                const contentId = `process-panel-${index}`
                const buttonId = `process-toggle-${index}`

                return (
                  <div key={item.title} className={styles.item}>
                    <button
                      type="button"
                      id={buttonId}
                      className={styles.trigger}
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className={styles.title}>{item.title}</span>
                      <span className={styles.symbol}>{isOpen ? '-' : '+'}</span>
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`${styles.content} ${isOpen && hasBody ? styles.open : ''}`}
                    >
                      {item.body && <p className={styles.body}>{item.body}</p>}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imageWrap}>
              <img
                className={styles.image}
                src="/assets/process.jpg"
                alt="Architectural line drawing"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
