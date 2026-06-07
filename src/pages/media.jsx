import { useState } from 'react'
import styles from './Media.module.css'

export default function Media() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [playingVideoId, setPlayingVideoId] = useState(null)

  const mediaItems = [
    {
      id: 1,
      type: 'video',
      category: 'ads',
      title: 'The Blueprint of Luxury - Khajanji Infraspaces Corporate Film',
      description: 'Experience an unmatched standard of design innovation and premium infrastructure execution across central India.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      featured: true
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
    setPlayingVideoId(null) // Reset videos when changing views
  }

  const getFilteredItems = () => {
    if (activeFilter === 'all') {
      // Return everything but let the featured item appear normally inside the main grid
      return mediaItems
    }
    return mediaItems.filter(item => item.type === activeFilter || item.category === activeFilter)
  }

  return (
    <div className={styles.mediaPage}>
      
      {/* 1. Page Header */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.pageMainHeading}>Media</h1>
        </div>
      </section>

      {/* 2. Navigation Filters */}
      <section className={styles.controlsSection}>
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
      </section>

      {/* 3. Media Presentation Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.mediaGrid}>
            {getFilteredItems().map((item) => (
              <div key={item.id} className={styles.gridCard}>
                
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
                          {/* Centered Video Play Action Trigger */}
                          <div className={styles.youtubePlayButtonOverlay}>
                            <div className={styles.youtubePlayIconShape}></div>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {item.type === 'image' && (
                    <div className={styles.coverImageWrapper}>
                      <img src={item.imageUrl} alt={item.title} className={styles.cardImageAsset} />
                    </div>
                  )}

                  {item.type === 'press' && (
                    <div className={styles.pressCardPlaceholder}>
                      <span className={styles.pressLabelBadge}>{item.publication}</span>
                      <span className={styles.pressDateBadge}>{item.date}</span>
                    </div>
                  )}
                </div>

                {/* Content Block Details positioned cleanly below */}
                <div className={styles.cardContentMetadata}>
                  <h3 className={styles.cardTitleText}>{item.title}</h3>
                  <p className={styles.cardDescriptionText}>{item.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}