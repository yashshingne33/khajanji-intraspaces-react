import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function FounderQuote({ fadeUp }) {
  return (
    <motion.section className="founder-quote" {...fadeUp}>
      <div className="founder-quote__inner">
        
        {/* Left Column - Portrait Image Container */}
        <div className="founder-quote__col founder-quote__col--left">
          <img 
            src="/assets/founder.jpg" 
            alt="Piyush Khajanji - Head of Architecture & Design" 
            className="founder-quote__img"
          />
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
              <span className="founder-quote__title">Head of Architecture & Design</span>
            </div>
            <Link to="/about" className="founder-quote__link">
              Learn more <span className="arrow">&#8594;</span>
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        /* Premium Serif Font Import */
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&display=swap');

        .founder-quote {
          background: #E6E0D8; /* Even Darker Sophisticated Taupe/Warm Grey Accent */
          color: #111111; 
          padding: clamp(50px, 6vw, 80px) clamp(24px, 5vw, 60px); /* Reduced padding to make section short */
          font-family: 'Cormorant Garamond', Garamond, 'Didot', 'Playfair Display', serif;
        }

        .founder-quote__inner {
          max-width: 1100px; /* Locked down width slightly for a tighter block */
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.3fr; 
          gap: clamp(30px, 4vw, 60px); /* Tighter spacing */
          align-items: center;
        }

        .founder-quote__col {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .founder-quote__col--left {
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .founder-quote__img {
          width: 100%;
          max-width: 360px; /* Made image slightly more compact to keep section short */
          height: auto;
          aspect-ratio: 4 / 5; 
          object-fit: cover;
          object-position: top center;
          display: block;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06); 
        }

        .founder-quote__col--right {
          height: 100%;
          justify-content: center; 
          padding: 10px 0;
        }

        .founder-quote__quote {
          font-size: clamp(20px, 2.2vw, 25px); /* Balanced text sizing */
          font-weight: 300; 
          line-height: 1.5;
          letter-spacing: -0.01em;
          margin: 0;
          color: #111111; 
          font-style: italic; 
        }

        .founder-quote__text-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: clamp(24px, 3.5vw, 40px); /* Reduced top margin to save height */
          border-top: 1px solid rgba(0, 0, 0, 0.12); /* Slightly darker line for the new background contrast */
          padding-top: 16px;
        }

        .founder-quote__identity {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .founder-quote__name {
          font-size: 17px;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: #000000;
        }

        .founder-quote__title {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.25em; 
          text-transform: uppercase;
          color: #5E5D5A; /* High contrast muted shade */
        }

        .founder-quote__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 400;
          color: #000000;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
          letter-spacing: 0.05em;
        }

        .founder-quote__link .arrow {
          font-size: 15px;
          transition: transform 0.3s ease;
        }

        .founder-quote__link:hover {
          color: #444444;
          border-color: #000000;
        }

        .founder-quote__link:hover .arrow {
          transform: translateX(4px);
        }

        /* Responsive UI Optimization */
        @media (max-width: 1024px) {
          .founder-quote {
            padding: 50px 32px;
          }

          .founder-quote__inner {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .founder-quote__col--left {
            margin: 0 auto;
          }

          .founder-quote__img {
            max-height: 35vh; /* Reduced mobile height to keep it snappy */
            object-fit: cover;
          }

          .founder-quote__text-bottom {
            flex-direction: column;
            align-items: center;
            gap: 16px;
            margin-top: 24px;
          }
          
          .founder-quote__link {
            align-self: center;
          }
        }

        @media (max-width: 640px) {
          .founder-quote {
            padding: 40px 20px;
          }

          .founder-quote__quote {
            font-size: 19px;
            line-height: 1.5;
          }
        }
      `}</style>
    </motion.section>
  )
}