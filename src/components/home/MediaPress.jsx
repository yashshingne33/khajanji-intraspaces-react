import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MEDIA_ITEMS = [
  {
    id: 1,
    category: 'Media',
    title: 'How Khajanji became a model for affordable, sustainable living',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80',
    link: '/blog/sustainable-living'
  },
  {
    id: 2,
    category: 'Announcements',
    title: '2025 Design Awards Recap',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
    link: '/blog/awards-recap'
  },
  {
    id: 3,
    category: 'Media',
    title: 'Industrial Luxury Style, explained by Khajanji Design',
    image: 'https://images.unsplash.com/photo-1481253127861-534498168948?w=800&auto=format&fit=crop&q=80',
    link: '/blog/industrial-luxury'
  }
]

export default function MediaPress({ fadeUp }) {
  return (
    <motion.section className="media-press" {...fadeUp}>
      <div className="media-press__inner">
        
        <div className="media-press__header">
          <div className="media-press__header-left">
            <div className="media-press__kicker">MEDIA</div>
            <h2 className="media-press__title">Media and press releases</h2>
          </div>
          <Link to="/blog" className="media-press__read-all">
            Read all <span className="arrow">&#8594;</span>
          </Link>
        </div>

        <div className="media-press__grid">
          {MEDIA_ITEMS.map((item, i) => (
            <motion.div 
              key={item.id} 
              className="media-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={item.link} className="media-card__img-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="media-card__img"
                />
              </Link>
              <div className="media-card__content">
                <div className="media-card__category">{item.category}</div>
                <h3 className="media-card__title">
                  <Link to={item.link}>{item.title}</Link>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .media-press {
          background: #ffffff;
          padding: 100px 40px;
          color: #000000;
          font-family: var(--font-body), sans-serif;
        }

        .media-press__inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .media-press__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid transparent; /* Aligning just cleanly */
        }

        .media-press__header-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .media-press__kicker {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 500;
          color: #000000;
        }

        .media-press__title {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 400;
          line-height: 1.1;
          margin: 0;
          color: #000000;
        }

        .media-press__read-all {
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
          margin-bottom: 8px; /* Optically align with title baseline */
        }

        .media-press__read-all .arrow {
          font-size: 16px;
          font-weight: 300;
        }

        .media-press__read-all:hover {
          border-color: #000;
        }

        .media-press__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .media-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .media-card__img-wrapper {
          display: block;
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 5;
          width: 100%;
          background: #f0f0f0;
        }

        .media-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .media-card:hover .media-card__img {
          transform: scale(1.03);
        }

        .media-card__content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .media-card__category {
          font-size: 12px;
          color: #888888;
        }

        .media-card__title {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.35;
          margin: 0;
        }

        .media-card__title a {
          color: inherit;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }

        .media-card__title a:hover {
          opacity: 0.7;
        }

        @media (max-width: 900px) {
          .media-press__header {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .media-press__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.section>
  )
}
