import { motion } from 'framer-motion'
import { useRef } from 'react'
import servicesStyles from './Services.module.css'
import ServiceCard from './shared/ServiceCard'

const services = [
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

  const scrollBy = direction => {
    if (!scrollRef.current) return
    const amount = 320
    scrollRef.current.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <motion.section className={servicesStyles.services} id="our-services" {...fadeUp}>
      <p className="section-label">OUR SERVICES</p>

      <div className="services-scroll-wrap">
        <button
          type="button"
          className="services-arrow services-arrow--left"
          onClick={() => scrollBy(-1)}
          aria-label="Scroll services left"
        >
          &#8592;
        </button>

        <div className="services-scroll" ref={scrollRef}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <button
          type="button"
          className="services-arrow services-arrow--right"
          onClick={() => scrollBy(1)}
          aria-label="Scroll services right"
        >
          &#8594;
        </button>
      </div>

      <style>{`
        .services-scroll-wrap {
          position: relative;
        }

        .services-scroll {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 12px 2px 20px;
          scroll-snap-type: x mandatory;
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
          scroll-snap-align: start;
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
          font-size: 14px;
          color: #444;
          line-height: 1.7;
        }

        .services-arrow {
          position: absolute;
          top: 12px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.18);
          background: rgba(255, 255, 255, 0.65);
          color: #000;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          z-index: 2;
          backdrop-filter: blur(6px);
        }

        .services-arrow--left {
          left: -6px;
        }

        .services-arrow--right {
          right: -6px;
        }

        .services-arrow:hover {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(0, 0, 0, 0.35);
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          .services-arrow {
            display: none;
          }

          .service-card {
            min-width: 85%;
          }
        }
      `}</style>
    </motion.section>
  )
}
