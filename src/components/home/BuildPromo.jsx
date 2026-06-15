import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function BuildPromo({ fadeUp }) {
  return (
    <motion.section 
      className="build-promo" 
      {...fadeUp}
    >
      <div className="build-promo__bg">
        {/* Main background image simulating the large concrete/wood room */}
        <img 
          src="/assets/build-main.jpg" 
          alt="Architectural space" 
          className="build-promo__bg-img"
        />
        <div className="build-promo__overlay"></div>

        <div className="build-promo__content">
          <div className="build-promo__text-container">
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '16px',
            }}>Architecture & Design</p>
            <h2 className="build-promo__title">
              The best builds start<br />before the build
            </h2>
          </div>
q
          <div className="build-promo__right-container">
            <div className="build-promo__inset-wrapper">
              <img 
                src="/assets/build-small.png" 
                alt="Collin College, Technical Campus" 
                className="build-promo__inset-img"
              />
              {/* <span className="build-promo__inset-caption">
                Collin College, Technical Campus
              </span> */}
            </div>
            
            <Link to="/contact" className="build-promo__cta" >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .build-promo {
          width: 100%;
          position: relative;
          background: #111111;
          padding: 0;
          overflow: hidden;
        }

        .build-promo__bg {
          position: relative;
          width: 100%;
          height: 80vh;
          min-height: 600px;
          display: flex;
          align-items: flex-end;
        }

        .build-promo__bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0.45;
        }

        .build-promo__overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%);
          z-index: 2;
        }

        .build-promo__content {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 40px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          height: 100%;
        }

        .build-promo__text-container {
          flex: 1;
        }

        .build-promo__title {
          color: #ffffff;
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 400;
          line-height: 1.2;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .build-promo__right-container {
          display: flex;
          flex-direction: column;
          align-items: center;        /* was flex-end */
          justify-content: flex-end;
          gap: 20px;                  /* was 40px */
        }

        .build-promo__inset-wrapper {
          position: relative;         /* was absolute */
          bottom: auto;               /* remove absolute positioning */
          right: auto;
          width: 350px;
          aspect-ratio: 1 / 1.1;
          background: #fff;
          z-index: 4;
        }

        .build-promo__inset-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .build-promo__inset-caption {
          position: absolute;
          bottom: -25px;
          right: 0;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
        }

        .build-promo__cta {
          display: inline-block;
          background: #ffffff;
          color: #000000;
          padding: 16px 32px;
          font-size: 15px;
          font-weight: 300;
          text-decoration: none;
          position: relative;
          transition: transform 0.3s ease;
          /* थोड़ा सा और नीचे खिसकाने के लिए मार्जिन सेट किया */
          margin-bottom: -0px; 
        }
        
        .build-promo__cta::after {
          content: '';
          position: absolute;
          bottom: 12px;
          left: 32px;
          right: 32px;
          height: 1px;
          background: #000;
        }

        .build-promo__cta:hover {
          transform: translateY(-2px);
        }

       @media (max-width: 900px) {
        .build-promo__bg {
          height: auto;
          min-height: unset;
        }

        .build-promo__bg-img {
          position: absolute;   /* ← back to absolute, NOT fixed */
          height: 100%;
          opacity: 0.7;         /* ← bump up from 0.45 so it's visible */
        }

        .build-promo__content {
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 60px 24px 40px;
          gap: 24px;
          height: auto;
        }

        .build-promo__right-container {
          width: 100%;
          align-items: flex-center;
          justify-content: flex-center;
          gap: 20px;
        }

        .build-promo__inset-wrapper {
          width: 100%;
          max-width: 100%;
          aspect-ratio: 4 / 3;
          margin-bottom: 0;
        }

        .build-promo__cta {
          width: auto;              /* shrink to text width */
          display: inline-block;
          text-align: center;
          padding: 14px 28px;       /* slightly tighter padding */
          box-sizing: border-box;
          margin-top: 0;
          margin-bottom: 0;
          white-space: nowrap;      /* prevent text wrapping */
        }
      }
      `}</style>
    </motion.section>
  )
}