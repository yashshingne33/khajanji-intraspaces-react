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
        .founder-quote {
          background: #000000; 
          color: #ffffff;
          padding: clamp(60px, 8vw, 120px) clamp(24px, 5vw, 60px);
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .founder-quote__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr; 
          gap: clamp(40px, 6vw, 100px);
          align-items: center;
        }

        .founder-quote__col {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .founder-quote__col--left {
          overflow: hidden;
          background: #000000; 
        }

        .founder-quote__img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 5; 
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .founder-quote__col--right {
          height: 100%;
          justify-content: space-between;
          padding: 20px 0;
        }

        .founder-quote__quote {
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: -0.01em;
          margin: 0;
          color: #e5e5e5; 
        }

        .founder-quote__text-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: clamp(40px, 5vw, 80px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 24px;
        }

        .founder-quote__identity {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .founder-quote__name {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #ffffff;
        }

        .founder-quote__title {
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #8e8e93;
        }

        .founder-quote__link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
        }

        .founder-quote__link .arrow {
          font-size: 16px;
          transition: transform 0.3s ease;
        }

        .founder-quote__link:hover {
          color: #cccccc;
          border-bottom: 1px solid #ffffff;
        }

        .founder-quote__link:hover .arrow {
          transform: translateX(4px);
        }

        /* Responsive Breakpoints Fix */
        @media (max-width: 1024px) {
          .founder-quote {
            padding: 50px 32px;
          }

          .founder-quote__inner {
            grid-template-columns: 1fr; /* Stacks layout to single column */
            gap: 36px;
          }

          .founder-quote__col--left {
            /* Pulls image out slightly to align look on sub-desktop devices */
            margin-left: -12px;
            margin-right: -12px;
            width: calc(100% + 24px);
          }

          .founder-quote__img {
            width: 100%;
            height: auto;
            max-height: 45vh;      /* Limits height so the image doesn't drown out the screen */
            aspect-ratio: auto;    /* FIX: Removes the forced 16/10 landscape constraint cutting the head */
            object-fit: contain;   /* FIX: Forces the entire image file to be fully visible */
            object-position: center center;
          }

          .founder-quote__col--right {
            padding: 0;
          }
        }

        @media (max-width: 640px) {
          .founder-quote {
            padding: 40px 24px;
          }

          .founder-quote__inner {
            gap: 28px;
          }

          .founder-quote__col--left {
            margin-left: -24px;
            margin-right: -24px;
            width: calc(100% + 48px);
          }

          .founder-quote__img {
            max-height: 40vh; /* Scaled perfectly for small mobile viewports */
          }

          .founder-quote__quote {
            font-size: 18px;
            line-height: 1.55;
          }

          .founder-quote__text-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            margin-top: 24px;
            padding-top: 20px;
          }

          .founder-quote__link {
            align-self: flex-start;
          }
        }
      `}</style>
    </motion.section>
  )
}