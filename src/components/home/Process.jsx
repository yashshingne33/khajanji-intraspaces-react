import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Process.module.css'

const PROCESS_ITEMS = [
  {
    title: 'Step 1',
    body: 'Consultation – We begin by understanding your vision, space requirements, budget, and functional goals to create the right design direction.',
  },
  {
    title: 'Step 2',
    body: 'Concept Planning – We develop initial layouts, design ideas, and architectural concepts that align with your style and project purpose.',
  },
  {
    title: 'Step 3',
    body: '3D Visualization – We turn ideas into realistic 3D views and design presentations so you can clearly see the final outcome before execution.',
  },
  {
    title: 'Step 4',
    body: 'Design Development – We refine materials, details, space planning, and technical aspects to make the design practical, beautiful, and build-ready.',
  },
  {
    title: 'Step 5',
    body: 'Execution Support – We guide the implementation process to help ensure the final space matches the approved design with quality and clarity.',
  },
]

export default function Process({ fadeUp, items = PROCESS_ITEMS }) {
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
              Our expertise includes house planning, bungalow design, apartment layouts, office interiors, showroom interiors, 3D exterior design, 3D floor plans, and customized architectural solutions tailored to local market needs and Indian design preferences.
            </p>

            <div className={styles.accordion}>
              {items.map((item, index) => {
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