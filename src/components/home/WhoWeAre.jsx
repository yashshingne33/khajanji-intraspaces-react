import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function WhoWeAre({ fadeUp }) {
  return (
    <motion.section className="who-we-are" {...fadeUp}>
      <div className="who-we-are__inner">
        <div className="who-we-are__kicker">WHO WE ARE</div>
        
        <div className="who-we-are__content">
          <h2 className="who-we-are__text">
            Khajanji Infraspaces is an award-winning modern<br className="desktop-break" />
            architecture firm based in India. We specialize<br className="desktop-break" />
            in contemporary design through our signature<br className="desktop-break" />
            Natural Modern approach.
          </h2>
          
          <div className="who-we-are__link-wrapper">
            <Link to="/about" className="who-we-are__link">
              More about us <span className="arrow">&#8594;</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .who-we-are {
          background: #ffffff;
          padding: 120px 40px 80px 40px;
          max-width: 1400px;
          margin: 0 auto;
          color: #000;
          font-family: var(--font-body), sans-serif;
        }

        .who-we-are__inner {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .who-we-are__kicker {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 500;
          color: #000000;
        }

        .who-we-are__content {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
        }

        .who-we-are__text {
          font-size: clamp(32px, 3.5vw, 42px);
          font-weight: 300;
          line-height: 1.35;
          letter-spacing: -0.01em;
          margin: 0;
          color: #000000;
        }

        .who-we-are__link-wrapper {
          padding-bottom: 8px; /* Optically aligns with bottom line of text */
        }

        .who-we-are__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 500;
          color: #000;
          text-decoration: none;
          border-bottom: 1px solid #dcdcdc;
          padding-bottom: 4px;
          transition: border-color 0.3s ease;
          white-space: nowrap;
        }
        
        .who-we-are__link .arrow {
          font-size: 16px;
          font-weight: 300;
        }

        .who-we-are__link:hover {
          border-color: #000;
        }

        @media (max-width: 1000px) {
          .who-we-are__content {
            flex-direction: column;
            align-items: flex-start;
          }
          .desktop-break {
            display: none;
          }
        }
      `}</style>
    </motion.section>
  )
}
