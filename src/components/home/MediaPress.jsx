import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MEDIA_ITEMS = [
  {
    id: 1,
    category: 'Media',
    title: 'How Khajanji became a model for affordable, sustainable living',
    image: '/assets/media-living.jpg',
    link: '/blog/sustainable-living'
  },
  {
    id: 2,
    category: 'Announcements',
    title: '2025 Design Awards Recap',
    image: '/assets/design-awards.png',
    link: '/blog/awards-recap'
  },
  {
    id: 3,
    category: 'Media',
    title: 'Industrial Luxury Style, explained by Khajanji Design',
    image: '/assets/luxury.jpg',
    link: '/blog/industrial-luxury'
  }
]

export default function MediaPress({ fadeUp }) {
  return (
    <motion.section className="media-press" {...fadeUp}>
      <div className="media-press__inner">
        
        <div className="media-press__header">
          <div className="media-press__kicker">MEDIA</div>
          <h2 className="media-press__title">Media and press releases</h2>
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&display=swap');

        .media-press {
          background: #ffffff;
          padding: 100px 40px;
          color: #000000;
          font-family: 'Cormorant Garamond', Garamond, 'Didot', 'Playfair Display', serif;
        }

        .media-press__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .media-press__header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }

        .media-press__kicker {
          font-size: 13px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 400;
          color: #000000;
        }

        .media-press__title {
          font-size: clamp(34px, 4.5vw, 48px);
          font-weight: 300;
          line-height: 1.2;
          margin: 0;
          color: #000000;
        }

        .media-press__read-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 15px;
          font-weight: 400;
          color: #000;
          text-decoration: none;
          border-bottom: 1px solid #dcdcdc;
          padding-bottom: 4px;
          transition: border-color 0.3s ease;
          white-space: nowrap;
          margin-top: 8px;
          letter-spacing: 0.05em;
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
          align-items: center; /* Content ko image box ke horizontally center karne ke liye */
          text-align: center;   /* Text lines ko center align karne ke liye */
          gap: 16px;
        }

        .media-card__img-wrapper {
          display: block;
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 10;
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
          align-items: center; /* Inner components ke liye safe-guard center alignment */
          gap: 6px;
        }

        .media-card__category {
          font-size: 12px;
          color: #888888;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .media-card__title {
          font-size: 21px;
          font-weight: 400;
          line-height: 1.4;
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
          .media-press {
            padding: 60px 20px;
          }
          .media-press__inner {
            gap: 40px;
          }
          .media-press__grid {
            grid-template-columns: 1fr;
            gap: 32px;
            max-width: 450px;
            margin: 0 auto;
          }
        }
      `}</style>
    </motion.section>
  )
}