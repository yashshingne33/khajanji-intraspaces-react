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
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" 
          alt="Architectural space" 
          className="build-promo__bg-img"
        />
        <div className="build-promo__overlay"></div>

        <div className="build-promo__content">
          <div className="build-promo__text-container">
            <h2 className="build-promo__title">
              The best builds start<br />before the build
            </h2>
          </div>

          <div className="build-promo__right-container">
            <div className="build-promo__inset-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" 
                alt="Collin College, Technical Campus" 
                className="build-promo__inset-img"
              />
              <span className="build-promo__inset-caption">
                Collin College, Technical Campus
              </span>
            </div>
            
            <Link to="/contact" className="build-promo__cta">
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .build-promo {
          width: 100%;
          position: relative;
          background: #fff;
          padding: 0;
          overflow: hidden;
        }

        .build-promo__bg {
          position: relative;
          width: 100%;
          height: 80vh; /* Adjust height as needed */
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
        }

        .build-promo__overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%);
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
        }

        .build-promo__right-container {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 40px;
          position: relative;
        }

        .build-promo__inset-wrapper {
          position: absolute;
          bottom: 120%; /* Pushes it up from the bottom of the container */
          right: 0;
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
          font-weight: 500;
          text-decoration: none;
          position: relative;
          transition: transform 0.3s ease;
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
          .build-promo__content {
            flex-direction: column;
            align-items: flex-start;
          }

          .build-promo__right-container {
            width: 100%;
            align-items: flex-start;
          }
          
          .build-promo__inset-wrapper {
            position: relative;
            bottom: auto;
            width: 80%;
            max-width: 400px;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </motion.section>
  )
}
