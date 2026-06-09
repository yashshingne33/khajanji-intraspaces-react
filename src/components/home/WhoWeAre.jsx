import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function WhoWeAre({ fadeUp }) {
  return (
    <motion.section className="who-we-are" {...fadeUp}>
      <div className="who-we-are__inner">
        <div className="who-we-are__kicker">WHO WE ARE</div>
        
        <div className="who-we-are__content">
          <h2 className="who-we-are__text">
            Designing spaces that inspire growth, elevate lifestyles, and shape enduring communities. With 10+ years of industry experience and 20+ successfully delivered projects, Khajanji Infraspaces brings together architecture, planning, and 3D design expertise for residential apartments, commercial developments, plotted layouts, and integrated townships. 
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
          /* नीचे की स्पेसिंग (padding-bottom) को 20px से बढ़ाकर 50px किया ताकि लिंक के नीचे परफेक्ट गैप मिले */
          padding: 60px 40px 50px 40px;
          max-width: 1500px;
          margin: 0 auto;
          color: #000;
          font-family: 'Outfit', sans-serif; 
        
        }

        .who-we-are__inner {
          display: flex;
          flex-direction: column;
          align-items: center; 
          text-align: center;
          gap: 24px;
        }

        /* "WHO WE ARE" का फ़ॉन्ट साइज़ बढ़ाकर हाइलाइट किया */
        .who-we-are__kicker {
          font-size: clamp(20px, 2.5vw, 24px); /* मोबाइल पर 16px और डेस्कटॉप पर 20px */
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 400;
          color: #000000;
        }

        .who-we-are__content {
          display: flex;
          flex-direction: column; 
          align-items: center;
          justify-content: center;
          gap: 24px; 
          max-width: 1000px;
        }

        .who-we-are__text {
          font-family: outfit, sans-serif;
          font-size: clamp(18px, 2.2vw, 26px);
          font-weight: 100; 
          line-height: 1.5;
          letter-spacing: -0.015em;
          margin: 0;
          color: #444;
        }

        .who-we-are__link-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .who-we-are__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Outfit', sans-serif;   /* add this */
          font-size: 11px;                      /* was 15px */
          font-weight: 400;                     /* was 600 */
          letter-spacing: 0.1em;               /* add this */
          text-transform: uppercase;           /* add this */
          color: #0a0a0a;                       /* was #000 */
          text-decoration: none;
          border-bottom: 1px solid #0a0a0a;   /* was 2px solid #000000 */
          padding-bottom: 1px;                 /* was 6px */
          transition: opacity 0.3s ease;
          white-space: nowrap;
        }
        
        .who-we-are__link .arrow {
          font-size: 18px;
          font-weight: 400;
        }

        .who-we-are__link:hover {
          opacity: 0.7;
        }
        
        @media (max-width: 600px) {
          .who-we-are {
            /* मोबाइल के लिए भी नीचे का गैप बैलेंस किया */
            padding: 40px 24px 36px 24px;
          }
          .who-we-are__kicker {
            font-size: 16px;
          }
          .who-we-are__text {
            font-size: 16px;
          }
        }
      `}</style>
    </motion.section>
  )
}