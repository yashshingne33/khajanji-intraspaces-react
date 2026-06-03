import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import servicesStyles from './Services.module.css'
import ServiceCard from './shared/ServiceCard'

const services = [
  {
    title: 'Structure & Arch Planning Services',
    desc: 'Efficient structural and architectural planning ensuring durability, aesthetics, and functionality.',
    icon: (
      <svg className="service-icon" viewBox="0 0 120 48" aria-hidden="true">
        <path d="M12 34h96" />
        <path d="M26 34V18" />
        <path d="M46 34V14" />
        <path d="M66 34V20" />
        <path d="M86 34V16" />
      </svg>
    ),
  },
  {
    title: '3D Design and Elevation Services',
    desc: 'We create realistic 3D designs and elevations that bring architectural ideas to life with precision and creativity.',
    icon: (
      <svg className="service-icon" viewBox="0 0 120 48" aria-hidden="true">
        <path d="M8 30h104" />
        <path d="M18 30l22-12 24 0 22 12" />
        <path d="M30 30v-8" />
        <path d="M60 30v-10" />
        <path d="M88 30v-6" />
      </svg>
    ),
  },
  {
    title: 'Rendering & Walkthrough Services',
    desc: 'High-quality rendering and walkthroughs to visualize projects before execution with immersive experiences.',
    icon: (
      <svg className="service-icon" viewBox="0 0 120 48" aria-hidden="true">
        <rect x="18" y="14" width="84" height="22" rx="2" />
        <path d="M26 30h20" />
        <circle cx="84" cy="25" r="4" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing and Branding Services',
    desc: 'Strategic digital solutions to enhance brand presence and reach the right audience effectively.',
    icon: (
      <svg className="service-icon" viewBox="0 0 120 48" aria-hidden="true">
        <path d="M18 34h84" />
        <path d="M28 34v-8" />
        <path d="M48 34v-14" />
        <path d="M68 34v-18" />
        <path d="M88 34v-10" />
      </svg>
    ),
  },
  {
    title: 'Mobile App Integration Services (iOS & Android)',
    desc: 'Seamless mobile app integration to extend business capabilities across iOS and Android platforms.',
    icon: (
      <svg className="service-icon" viewBox="0 0 120 48" aria-hidden="true">
        <rect x="34" y="10" width="52" height="28" rx="4" />
        <circle cx="60" cy="32" r="2" />
        <path d="M40 14h40" />
      </svg>
    ),
  },
]

export default function Services({ fadeUp }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationId
    const speed = 1

    const scroll = () => {
      container.scrollLeft += speed

      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    const stopScroll = () => cancelAnimationFrame(animationId)
    const restartScroll = () => {
      cancelAnimationFrame(animationId)
      animationId = requestAnimationFrame(scroll)
    }

    container.addEventListener('mouseenter', stopScroll)
    container.addEventListener('mouseleave', restartScroll)
    container.addEventListener('touchstart', stopScroll)
    container.addEventListener('touchend', restartScroll)

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener('mouseenter', stopScroll)
      container.removeEventListener('mouseleave', restartScroll)
      container.removeEventListener('touchstart', stopScroll)
      container.removeEventListener('touchend', restartScroll)
    }
  }, [])

  return (
    <motion.section className={servicesStyles.services} id="our-services" {...fadeUp}>
      <p className="section-label-centered">OUR SERVICES</p>

      <div className="services-scroll-wrap">
        <div className="services-scroll" ref={scrollRef}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
          {services.slice(0, 2).map((service, index) => (
            <ServiceCard key={`${service.title}-clone-${index}`} service={service} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        #our-services {
          padding-top: 16px;
          padding-bottom: 24px;
          margin-top: 0;
          margin-bottom: 0;
        }

        /* "OUR SERVICES" हेडिंग को बड़ा और बोल्ड (High Highlight) किया गया */
        .section-label-centered {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(20px, 2.5vw, 30px); /* स्क्रीन के हिसाब से रेस्पॉन्सिव बड़ा साइज */
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 700; /* एक्स्ट्रा डार्क और बोल्ड लुक */
          color: #000000;
          text-align: center;
          margin-top: 0;
          margin-bottom: 36px; /* बड़े टेक्स्ट को बैलेंस करने के लिए नीचे का मार्जिन थोड़ा बढ़ाया */
          width: 100%;
        }

        .services-scroll-wrap {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .services-scroll {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          padding: 12px 2px 20px;
        }

        .services-scroll::-webkit-scrollbar {
          height: 0;
        }

        .services-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .service-card {
          min-width: 340px;
          border: 1px solid #e5e5e5;
          padding: 28px 28px 36px;
          background: #fff;
          border-radius: 0;
          box-shadow: none;
          transition: transform 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          border-color: rgba(0, 0, 0, 0.18);
        }

        .service-icon {
          width: 120px;
          height: 48px;
          stroke: #000;
          stroke-width: 1.5;
          fill: none;
          margin-bottom: 18px;
        }

        .service-divider {
          height: 1px;
          background: #e5e5e5;
          margin-bottom: 24px;
        }

        .service-card h3 {
          font-size: 20px;
          font-weight: 500;
          margin: 0 0 12px;
          color: #000;
        }

        .service-card p {
          margin: 0;
          font-size: 15px;
          color: #444;
          line-height: 1.7;
        }

        @media (max-width: 600px) {
          #our-services {
            padding-top: 12px;
            padding-bottom: 16px;
          }

          .section-label-centered {
            font-size: 18px; /* मोबाइल स्क्रीन पर भी अच्छा दिखेगा */
            margin-bottom: 24px;
          }

          .service-card {
            min-width: 280px;
          }
        }
      `}</style>
    </motion.section>
  )
}