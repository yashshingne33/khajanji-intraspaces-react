import { useState, useEffect } from 'react'
import styles from './Media.module.css'

function useReveal() {
  useEffect(() => {
    const t = setTimeout(() => {
      const els = document.querySelectorAll('.sr')
      const io = new IntersectionObserver(
        entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('sr-on')),
        { threshold: 0.06 }
      )
      els.forEach(el => io.observe(el))
      return () => io.disconnect()
    }, 60)
    return () => clearTimeout(t)
  }, [])
}

export default function Media() {
  useReveal() 
  const [activeFilter, setActiveFilter] = useState('all')
  const [playingVideoId, setPlayingVideoId] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const mediaItems = [
    {
      id: 1,
      type: 'video',
      category: 'ads',
      title: 'Luxury Commercial Property in Katol | Business Space 3D Visualization',
      description: 'Experience an unmatched standard of design innovation and premium infrastructure execution across central India.',
      videoUrl: 'https://www.youtube.com/embed/HVH6Edno3xo',
      thumbnail: 'https://img.youtube.com/vi/HVH6Edno3xo/maxresdefault.jpg',
      featured: true
    },
    {
      id: 2,
      type: 'video',
      category: 'walkthrough',
      title: 'Premium 3 Storey Apartment Project in Nagpur | Real Estate Walkthrough ',
      description: 'A comprehensive interior and spatial design walkthrough curated by our leading space engineers.',
      videoUrl: 'https://www.youtube.com/embed/PJSSTQFR_3w',
      thumbnail: 'https://img.youtube.com/vi/PJSSTQFR_3w/maxresdefault.jpg',
      featured: true
    },
    {
      id: 3,
      type: 'video',
      category: 'ads',
      title: 'Best Interior Designers in Nagpur | Luxury Home 3D Visualization Tour',
      description: 'Step into a world of modern luxury, elegant interiors, and smart space planning. This premium 3D walkthrough showcases contemporary home interior designs crafted for stylish and comfortable living.',
      videoUrl: 'https://www.youtube.com/embed/3WuMmSREpyQ',
      thumbnail: 'https://img.youtube.com/vi/3WuMmSREpyQ/maxresdefault.jpg',
      featured: true
    },
    {
      id: 4,
      type: 'video',
      category: 'walkthrough',
      title: 'Premium Residential Plots in Nagpur | 3D Township Walkthrough',
      description: 'Explore our modern township and residential plot development through this stunning 3D walkthrough video. Designed for smart investors and future homeowners, this project offers premium plots in a rapidly developing location with excellent connectivity and future growth potential.',
      videoUrl: 'https://www.youtube.com/embed/jgT-Vq8i-98',
      thumbnail: 'https://img.youtube.com/vi/jgT-Vq8i-98/maxresdefault.jpg',
      featured: false
    },
    {
      id: 5,
      type: 'press',
      category: 'news',
      title: 'National Architecture Conclave 2026: Pioneers of Tomorrow',
      description: 'Recognized as the benchmark firm for integration of advanced technical aesthetics and sustainable structural foundations.',
      date: 'May 2026',
      publication: 'Urban Design Magazine'
    },
    {
      id: 6,
      type: 'image',
      category: 'gallery',
      imageUrl: '/assets/gallery1.jpg'
    },
    {
      id: 7,
      type: 'image',
      category: 'gallery',
      imageUrl: '/assets/gallery2.jpg'
    },
    {
      id: 8,
      type: 'image',
      category: 'gallery',
      imageUrl: '/assets/gallery3.jpg'
    }
  ]

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    setPlayingVideoId(null)
  }

  const getFilteredItems = () => {
    if (activeFilter === 'all') return mediaItems
    return mediaItems.filter(item => item.type === activeFilter || item.category === activeFilter)
  }

  return (
    <div className={styles.mediaPage}>
      
      {/* 1. Page Header */}
      <section className={styles.heroSection} style={{ padding: '92px 48px 52px', textAlign: 'center' }}>
        <div className={styles.container}>
          <h1
          className="sr"
          style={{
            fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
            fontWeight: 400,
            lineHeight: 1.13,
            letterSpacing: '-0.02em',
            margin: '0 0 28px',
            color: 'var(--color-text-primary)'
          }}
        >
          Media
        </h1>
        </div>
      </section>

      {/* 2. Navigation Filters with Edge-To-Edge Divider Lines */}
      <section className={`${styles.controlsSection} sr sr-d1`}>
        <div className={styles.filterDividerLine} />
        <div className={styles.container}>
          <div className={styles.filterBar}>
            {['all', 'video', 'press', 'gallery'].map((filter) => (
              <button
                key={filter}
                className={`${styles.filterLink} ${activeFilter === filter ? styles.activeLink : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter === 'all' ? 'All Coverage' : filter === 'video' ? 'Videos' : filter === 'press' ? 'Articles' : 'Gallery'}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.filterDividerLine} />
      </section>

      {/* 3. Media Presentation Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.mediaGrid}>
            {getFilteredItems().map((item, index) => (
              <div key={item.id} className={`${styles.gridCard} sr sr-d${(index % 4) + 1}`}>
                
                {/* Visual Content Block */}
                <div className={styles.cardVisualContainer}>
                  {item.type === 'video' && (
                    <>
                      {playingVideoId === item.id ? (
                        <iframe
                          className={styles.videoEmbedElement}
                          src={`${item.videoUrl}?autoplay=1`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div className={styles.coverImageWrapper} onClick={() => setPlayingVideoId(item.id)}>
                          <img src={item.thumbnail} alt={item.title} className={styles.cardImageAsset} />
                          <div className={styles.youtubePlayButtonOverlay}>
                            <div className={styles.youtubePlayIconShape}></div>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {item.type === 'image' && (
                    <div className={styles.coverImageWrapper}>
                      <img src={item.imageUrl} alt={item.title || "Gallery Asset"} className={styles.cardImageAsset} />
                    </div>
                  )}

                  {item.type === 'press' && (
                    <div className={styles.pressCardPlaceholder}>
                      <span className={styles.pressLabelBadge}>{item.publication}</span>
                      <span className={styles.pressDateBadge}>{item.date}</span>
                    </div>
                  )}
                </div>

                {/* Metadata Styling matches Portfolio precisely */}
                <div className={styles.cardContentMetadata}>
                  {item.title && <h3 className={styles.cardTitleText}>{item.title}</h3>}
                  {item.description && <p className={styles.cardDescriptionText}>{item.description}</p>}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}