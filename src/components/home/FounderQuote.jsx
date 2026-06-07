import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function FounderQuote({ fadeUp }) {
  return (
    <motion.section className="founder-quote" {...fadeUp}>
      <div className="founder-quote__inner">
        
        {/* Left Column - Portrait Image Container */}
        <div className="founder-quote__col founder-quote__col--left">
          <div className="founder-quote__img-frame">
            <img 
              src="/assets/founder.jpg" 
              alt="Piyush Khajanji - Head of Architecture & Design" 
              className="founder-quote__img"
            />
          </div>
        </div>

        {/* Right Column - Text block */}
        <div className="founder-quote__col founder-quote__col--right">
          <div className="founder-quote__text-top">
            <p className="founder-quote__quote">
              “At Khajanji Infraspaces, we do not simply design buildings; we shape possibilities. For me, architecture has always been more than form and structure — it is the art of turning ambition into space, ideas into identity, and vision into something people can truly experience.”
            </p>
          </div>
          
          <div className="founder-quote__text-bottom">
            <div className="founder-quote__identity">
              <span className="founder-quote__name">Piyush Khajanji</span>
              <span className="founder-quote__title">Founder & Design Director</span>
            </div>
            <Link to="/about" className="founder-quote__link">
              Learn more <span className="arrow">&#8594;</span>
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&display=swap');

        .founder-quote {
          background: #E6E0D8; 
          color: #111111; 
          padding: clamp(60px, 8vw, 100px) clamp(24px, 5vw, 60px);
          font-family: 'Cormorant Garamond', Garamond, 'Didot', 'Playfair Display', serif;
        }

        .founder-quote__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr; 
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }

        .founder-quote__col {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .founder-quote__col--left {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Locked Structural Framework Container */
        .founder-quote__img-frame {
          width: 100%;
          max-width: 380px;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.02);
          border-radius: 4px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .founder-quote__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .founder-quote__col--right {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .founder-quote__quote {
          font-size: clamp(22px, 2.4vw, 28px);
          font-weight: 300; 
          line-height: 1.55;
          letter-spacing: -0.01em;
          margin: 0;
          color: #111111; 
          font-style: italic; 
        }

        .founder-quote__text-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: clamp(32px, 4vw, 50px);
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding-top: 20px;
        }

        .founder-quote__identity {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .founder-quote__name {
          font-size: 19px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #000000;
        }

        .founder-quote__title {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em; 
          text-transform: uppercase;
          color: #5E5D5A;
        }

        .founder-quote__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 500;
          color: #000000;
          text-decoration: none;
          transition: all 0.25s ease;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
          letter-spacing: 0.03em;
        }

        .founder-quote__link .arrow {
          font-size: 15px;
          transition: transform 0.25s ease;
        }

        .founder-quote__link:hover {
          color: #0040df;
          border-color: #0040df;
        }

        .founder-quote__link:hover .arrow {
          transform: translateX(5px);
        }

        /* Mobile Layout Refinements */
        @media (max-width: 920px) {
          .founder-quote {
            padding: 60px 32px;
          }

          .founder-quote__inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          /* Keeping standard frame aspect ratios intact while completely showing portrait content */
          .founder-quote__img-frame {
            max-width: 340px;
          }
          
          .founder-quote__img {
            object-fit: contain; /* Displays the image fully without frame distortions */
          }

          .founder-quote__text-bottom {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
        }

        @media (max-width: 640px) {
          .founder-quote {
            padding: 50px 20px;
          }

          .founder-quote__quote {
            font-size: 20px;
            line-height: 1.5;
          }

          .founder-quote__text-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          
          .founder-quote__link {
            align-self: flex-start;
          }
        }
      `}</style>
    </motion.section>
  )
}