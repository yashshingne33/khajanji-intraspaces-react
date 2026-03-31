import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CTABanner({ fadeUp }) {
  return (
    <motion.section className="cta-banner" {...fadeUp}>
      <div className="cta-banner__overlay" />
      <div className="cta-banner__content">
        <div className="cta-banner__text">
          <div className="cta-banner__kicker">
            A UNIQUE VISION WITH UNLIMITED POSSIBILITIES
          </div>
          <h2 className="cta-banner__headline">Let's work together</h2>
        </div>
        <Link to="/contact" className="cta-banner__button">
          Free Consultation
        </Link>
      </div>

      <style>{`
        .cta-banner {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: stretch;
          background-image: url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2000&q=80');
          background-size: cover;
          background-position: center;
          padding: 56px 6vw;
          color: #fff;
        }

        .cta-banner__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .cta-banner__content {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
        }

        .cta-banner__text {
          max-width: 520px;
        }

        .cta-banner__kicker {
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .cta-banner__headline {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 400;
          margin: 0;
        }

        .cta-banner__button {
          background: #fff;
          color: #000;
          padding: 12px 24px;
          text-decoration: none;
          border: 1px solid #fff;
          font-size: 14px;
          letter-spacing: 0.04em;
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .cta-banner__button:hover {
          background: rgba(255, 255, 255, 0.85);
          color: #000;
          border-color: rgba(255, 255, 255, 0.85);
        }

        @media (max-width: 768px) {
          .cta-banner {
            min-height: 70vh;
          }

          .cta-banner__content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
          }
        }
      `}</style>
    </motion.section>
  )
}
