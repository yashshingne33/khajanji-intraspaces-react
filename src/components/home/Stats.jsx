// import { motion } from 'framer-motion'
// import styles from '../../pages/HomePage.module.css'
// import StatItem from './shared/StatItem'

// const STATS = [
//   { value: '10+', label: 'Years of design and planning experience.' },
//   { value: '20+', label: 'Projects across multiple real estate segments.' },
//   { value: '3+',  label: 'Expertise in Residential, Commercial, Plotted Projects, and Townships.' },
//   { value: '50+',  label: 'Focus on architecture, planning, and 3D visualization.' },
// ]

// export default function Stats({ fadeUp }) {
//   return (
//     <motion.div
//       className="new-stats-container"
//       {...fadeUp}
//       style={{
//         background: '#ffffff',
//         padding: '60px 40px',
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//         gap: '24px',
//         borderBottom: '1px solid #e5e5e5',
//         maxWidth: '1400px',
//         margin: '0 auto',
//       }}
//     >
//       {STATS.map((stat, index) => (
//         <StatItem key={stat.label} stat={stat} index={index} />
//       ))}
//     </motion.div>
//   )
// }

















import { motion } from 'framer-motion'
import styles from '../../pages/HomePage.module.css'
import StatItem from './shared/StatItem'

const STATS = [
  { value: '10+', label: 'Years of design and planning experience.' },
  { value: '20+', label: 'Projects across multiple real estate segments.' },
  { value: '3+',  label: 'Expertise in Residential, Commercial, Plotted Projects, and Townships.' },
  { value: '50+', label: 'Focus on architecture, planning, and 3D visualization.' },
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
            <StatItem stat={stat} index={index} />
          </div>
        ))}
      </motion.div>

      <style>{`
        .premium-stats-grid {
          background: #ffffff;
          padding: 60px 40px;
          display: grid;
          /* 4 columns on desktop, scaling cleanly down to 2 columns side-by-side on mobile */
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          border-bottom: 1px solid #e5e5e5;
          maxWidth: 1400px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .premium-stats-cell {
          display: flex;
          flex-direction: column;
          height: 100%;
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