import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function FounderQuote({ fadeUp }) {
  return (
    <motion.section className="founder-quote" {...fadeUp}>
      <div className="founder-quote__inner">
        
        {/* Left Column - Portrait Image */}
        <div className="founder-quote__col founder-quote__col--left">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
            alt="Portrait of an architect" 
            className="founder-quote__img-left"
          />
        </div>

        {/* Middle Column - Text block */}
        <div className="founder-quote__col founder-quote__col--middle">
          <div className="founder-quote__text-top">
            <p className="founder-quote__quote">
              “Every project begins with questions and<br className="desktop-break" />
              expectations. Our role is to listen, explore<br className="desktop-break" />
              possibilities, and shape a built solution that<br className="desktop-break" />
              responds with clarity and purpose.”
            </p>
          </div>
          
          <div className="founder-quote__text-bottom">
            <div className="founder-quote__identity">
              <span className="founder-quote__name">Barbara Calas</span>
              <span className="founder-quote__title">Head of Architecture & Design</span>
            </div>
            <Link to="/about" className="founder-quote__link">
              Learn more <span className="arrow">&#8594;</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Drawing Image */}
        <div className="founder-quote__col founder-quote__col--right">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" 
            alt="Hand drafting architectural plans" 
            className="founder-quote__img-right"
          />
        </div>

      </div>

      <style>{`
        .founder-quote {
          background: #000000;
          color: #ffffff;
          padding: 100px 40px;
          font-family: var(--font-body), sans-serif;
        }

        .founder-quote__inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 60px;
          align-items: stretch;
        }

        .founder-quote__col {
          display: flex;
          flex-direction: column;
        }

        .founder-quote__img-left {
          width: 100%;
          height: auto;
          aspect-ratio: 3 / 4;
          object-fit: cover;
          display: block;
        }

        .founder-quote__img-right {
          width: 100%;
          height: auto;
          aspect-ratio: 1 / 1.1;
          object-fit: cover;
          display: block;
        }

        .founder-quote__col--middle {
          justify-content: space-between;
          padding: 20px 0;
        }

        .founder-quote__quote {
          font-size: clamp(22px, 2vw, 26px);
          font-weight: 300;
          line-height: 1.5;
          letter-spacing: -0.01em;
          margin: 0;
          color: #ffffff;
        }

        .founder-quote__text-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 60px;
        }

        .founder-quote__identity {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .founder-quote__name {
          font-size: 15px;
          font-weight: 500;
          color: #ffffff;
        }

        .founder-quote__title {
          font-size: 14px;
          font-weight: 300;
          color: #bbbbbb;
        }

        .founder-quote__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          text-decoration: none;
          transition: opacity 0.3s ease;
          white-space: nowrap;
        }

        .founder-quote__link .arrow {
          font-size: 16px;
          font-weight: 300;
        }

        .founder-quote__link:hover {
          opacity: 0.7;
        }

        @media (max-width: 1100px) {
          .founder-quote__inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .founder-quote__col--middle {
            order: -1;
            padding: 0;
            gap: 40px;
          }

          .desktop-break {
            display: none;
          }

          .founder-quote__img-left,
          .founder-quote__img-right {
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
    </motion.section>
  )
}
