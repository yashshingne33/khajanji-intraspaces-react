import { motion } from 'framer-motion'
import styles from '../../pages/HomePage.module.css'
import StatItem from './shared/StatItem'

const STATS = [
  { value: '7+', label: 'Years of design and planning experience.' },
  { value: '20+', label: 'Projects across multiple real estate segments.' },
  { value: '3+',  label: 'Expertise in Residential, Commercial, Plotted Projects, and Townships.' },
  { value: '100+', label: 'Coffee Meetings to brainstorm ideas.' },
]

export default function Stats({ fadeUp }) {
  return (
    <>
      <motion.div
        className="premium-stats-grid"
        {...fadeUp}
      >
        {STATS.map((stat, index) => (
          <div className="premium-stats-cell" key={stat.label}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: '#0a0a0a',
              margin: '0 0 12px',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}>{stat.value}</p>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '13px',
              fontWeight: 300,
              color: '#8a8880',
              lineHeight: 1.68,
              margin: 0,
              maxWidth: '180px',        /* keeps text from stretching too wide */
            }}>{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <style>{`
        .premium-stats-grid {
          background: #ffffff;
          padding: 30px 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;                        /* was 32px — use dividers instead */
          border-top: 1px solid #e4e2dc;
          border-bottom: 1px solid #e4e2dc;
          width: 100%;
          box-sizing: border-box;
        }

        .premium-stats-cell {
          display: flex;
          flex-direction: column;
          align-items: center;           /* centers content horizontally */
          text-align: center;            /* centers text */
          padding: 40px 32px;            /* equal spacing inside each cell */
          border-right: 1px solid #e4e2dc;  /* divider between cells */
        }

        .premium-stats-cell:last-child {
          border-right: none;            /* remove last divider */
        }

        /* Senior Engineer Responsiveness adjustments */
        @media (max-width: 1024px) {
          .premium-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
            padding: 48px 32px;
          }
        }

        @media (max-width: 600px) {
          .premium-stats-grid {
            /* Side-by-side 2-column layout on tiny screens to avoid scrolling footprint */
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 40px 20px;
          }
        }
      `}</style>
    </>
  )
}