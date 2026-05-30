import { useState } from 'react'
import styles from './Media.module.css'

export default function Media() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [playingVideoId, setPlayingVideoId] = useState(null) // Custom Click-to-Play state

  const mediaItems = [
    {
      id: 1,
      type: 'video',
      category: 'ads',
      title: 'The Blueprint of Luxury - Khajanji Infraspaces Corporate Film',
      description: 'Experience an unmatched standard of design innovation and premium infrastructure execution across central India.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // <-- Embed URL
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      featured: true // Yeh item top par bada dikhega
    },
    {
      id: 2,
      type: 'video',
      category: 'walkthrough',
      title: 'Elysium Penthouses: Exclusive Virtual Tour',
      description: 'A comprehensive interior and spatial design walkthrough curated by our leading space engineers.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
      featured: false
    },
    {
      id: 3,
      type: 'press',
      category: 'news',
      title: 'National Architecture Conclave 2026: Pioneers of Tomorrow',
      description: 'Recognized as the benchmark firm for integration of advanced technical aesthetics and sustainable structural foundations.',
      date: 'May 2026',
      publication: 'Urban Design Magazine'
    },
    {
      id: 4,
      type: 'image',
      category: 'gallery',
      title: 'Structural Geometry In Concrete & Glass',
      description: 'Raw minimal aesthetic framework shot during the final handover phase of our commercial landmark.',
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
    }
  ]

  const featuredItem = mediaItems.find(item => item.featured)
  const regularItems = mediaItems.filter(item => !item.featured)

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  const getFilteredItems = () => {
    if (activeFilter === 'all') return regularItems
    return mediaItems.filter(item => item.type === activeFilter || item.category === activeFilter)
  }

  return (
    <div className={styles.mediaPage}>
      
      {/* 1. Cinematic Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.geometricOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroHeader}>
            <span className={styles.badgeLine}>Press &amp; Media Center</span>
            <h1 className={styles.mainTitle}>Where Vision Meets <br /><span>Real Estate Reality</span></h1>
            <p className={styles.heroDescription}>
              Explore our commercial campaigns, broadcast networks, architectural journalism, and exclusive site updates.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Featured Spotlight Section (Sirf 'All' filter par dikhega) */}
      {activeFilter === 'all' && featuredItem && (
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Featured Spotlight</h2>
            </div>
            <div className={styles.featuredCard}>
              <div className={styles.featuredVisual}>
                {playingVideoId === featuredItem.id ? (
                  <iframe
                    src={`${featuredItem.videoUrl}?autoplay=1`}
                    title={featuredItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className={styles.coverWrapper} onClick={() => setPlayingVideoId(featuredItem.id)}>
                    <img src={featuredItem.thumbnail} alt={featuredItem.title} />
                    <div className={styles.playOverlay}>
                      <div className={styles.playButtonRipple}>
                        <span className={styles.playTriangle}></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.featuredDetails}>
                <span className={styles.categoryTag}>Main Commercial Ad</span>
                <h3 className={styles.featuredTitle}>{featuredItem.title}</h3>
                <p className={styles.featuredText}>{featuredItem.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Navigation Controls */}
      <section className={styles.controlsSection}>
        <div className={styles.container}>
          <div className={styles.filterBar}>
            {['all', 'video', 'press', 'gallery'].map((filter) => (
              <button
                key={filter}
                className={`${styles.filterLink} ${activeFilter === filter ? styles.activeLink : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter === 'all' ? 'All Coverage' : filter === 'video' ? 'Video Ads' : filter === 'press' ? 'Articles' : 'Gallery'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Assets Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.mediaGrid}>
            {getFilteredItems().map((item) => (
              <div key={item.id} className={`${styles.gridCard} ${styles[item.type + 'Card']}`}>
                
                {/* Video Block */}
                {item.type === 'video' && (
                  <div className={styles.cardVisual}>
                    {playingVideoId === item.id ? (
                      <iframe
                        src={`${item.videoUrl}?autoplay=1`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className={styles.coverWrapper} onClick={() => setPlayingVideoId(item.id)}>
                        <img src={item.thumbnail} alt={item.title} />
                        <div className={styles.miniPlayBtn}>
                          <span className={styles.playTriangleSmall}></span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Image Block */}
                {item.type === 'image' && (
                  <div className={styles.cardVisual}>
                    <img src={item.imageUrl} alt={item.title} className={styles.pureImg} />
                    <span className={styles.visualTag}>Visual Frame</span>
                  </div>
                )}

                {/* Press News Block */}
                {item.type === 'press' && (
                  <div className={styles.pressPaperBack}>
                    <div className={styles.pressHeaderRow}>
                      <span className={styles.pubName}>{item.publication}</span>
                      <span className={styles.pubDate}>{item.date}</span>
                    </div>
                    <div className={styles.pressIconQuotes}>“</div>
                  </div>
                )}

                {/* Common Card Footer description */}
                <div className={styles.cardMeta}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}