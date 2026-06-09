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
        /* Premium Serif Font Import */

        .cta-banner {
          position: relative;
          min-height: 50vh; /* Section height ko medium aur standard kiya */
          display: flex;
          align-items: center; /* Vertically middle align */
          justify-content: center; /* Horizontally center align */
          background-image: url('/assets/cta-background.jpg');
          background-size: cover;
          background-position: center;
          padding: 80px 40px;
          color: #fff;
          font-family: 'Outfit', sans-serif;
        }

        .cta-banner__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45); /* High-end contrast ke liye subtle dark overlay */
          z-index: 1;
        }

        .cta-banner__content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column; /* Content ko image box ke hisab se stacking di */
          align-items: center;    /* Horizontally bilkul center */
          text-align: center;     /* Text lines middle-aligned */
          gap: 32px;
          max-width: 800px;
          width: 100%;
        }

        .cta-banner__text {
          width: 100%;
        }

        .cta-banner__kicker {
          font-size: 11px;
          letter-spacing: 0.18em; /* Image jaisa elegant spread space */
          text-transform: uppercase;
          font-weight: 300;
          margin-bottom: 16px;
          color: rgba(255, 255, 255, 0.6);
        }

        .cta-banner__headline {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 300; /* Serif styling ke liye delicate light weight */
          line-height: 1.2;
          margin: 0;
          color: #ffffff;
        }

        .cta-banner__button {
          font-family: 'Outfit', sans-serif;
          background: #ffffff;
          color: #000000;
          padding: 14px 36px;
          text-decoration: none;
          border: 1px solid #ffffff;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase; /* Button ko minimalist luxury look dene ke liye */
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .cta-banner__button:hover {
          background: transparent;
          color: #ffffff;
          border-color: #ffffff;
        }

        @media (max-width: 768px) {
          .cta-banner {
            min-height: 40vh;
            padding: 60px 20px;
          }

          .cta-banner__content {
            gap: 24px;
          }
        }
      `}</style>
    </motion.section>
  )
}