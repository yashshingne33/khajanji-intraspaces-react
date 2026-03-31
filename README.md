# Minnaro Interiors — React + Vite

A fully standalone React website for Minnaro Interiors studio.
No backend. No CMS. Just React, Vite, React Router, and plain CSS-in-JS.

---

## Quick start

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` with hot reload.

```bash
npm run build    # production build → dist/
npm run preview  # preview the build locally
```

---

## Project structure

```
src/
├── components/
│   ├── layout/
│   │   └── Layout.jsx              ← Outlet wrapper (scroll-to-top on route change)
│   └── shared/
│       └── SharedComponents.jsx    ← Shared Navbar, Footer, hooks, reusable sections
│                                      used by ServicesPage sub-pages
├── pages/
│   ├── AboutPage.jsx               ← /about
│   ├── PortfolioPage.jsx           ← /portfolio
│   ├── ServicesPage.jsx            ← /services  (main services page)
│   ├── ConstructionPage.jsx        ← /services/construction
│   ├── InteriorDesignPage.jsx      ← /services/interior-design
│   ├── LightingDesignPage.jsx      ← /services/lighting-design
│   ├── MediaAwardsPage.jsx         ← /media
│   ├── ContactPage.jsx             ← /contact
│   └── NotFound.jsx                ← * (404)
├── App.jsx                         ← All routes
└── main.jsx                        ← Entry point
```

---

## Routes

| Path                          | Page                          |
|-------------------------------|-------------------------------|
| `/`                           | Home (or About as landing)    |
| `/about`                      | About page                    |
| `/portfolio`                  | Portfolio grid page           |
| `/services`                   | Services main page            |
| `/services/construction`      | Construction sub-page         |
| `/services/interior-design`   | Interior Design sub-page      |
| `/services/lighting-design`   | Lighting Design sub-page      |
| `/media`                      | Media & Awards page           |
| `/contact`                    | Contact Us page               |
| `*`                           | 404 Not Found                 |

---

## App.jsx — copy this exactly

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout               from './components/layout/Layout'
import AboutPage            from './pages/AboutPage'
import PortfolioPage        from './pages/PortfolioPage'
import ServicesPage         from './pages/ServicesPage'
import ConstructionPage     from './pages/ConstructionPage'
import InteriorDesignPage   from './pages/InteriorDesignPage'
import LightingDesignPage   from './pages/LightingDesignPage'
import MediaAwardsPage      from './pages/MediaAwardsPage'
import ContactPage          from './pages/ContactPage'
import NotFound             from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index                          element={<AboutPage />} />
          <Route path="about"                   element={<AboutPage />} />
          <Route path="portfolio"               element={<PortfolioPage />} />
          <Route path="services"                element={<ServicesPage />} />
          <Route path="services/construction"   element={<ConstructionPage />} />
          <Route path="services/interior-design" element={<InteriorDesignPage />} />
          <Route path="services/lighting-design" element={<LightingDesignPage />} />
          <Route path="media"                   element={<MediaAwardsPage />} />
          <Route path="contact"                 element={<ContactPage />} />
          <Route path="*"                       element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

---

## SharedComponents.jsx

Located at `src/components/shared/SharedComponents.jsx`.

Exports used by the 3 service sub-pages:

| Export              | Used by                                          |
|---------------------|--------------------------------------------------|
| `Navbar`            | All service sub-pages                            |
| `Footer`            | All service sub-pages                            |
| `GLOBAL_CSS`        | All service sub-pages (inject via `<style>`)     |
| `useReveal`         | All service sub-pages                            |
| `PullQuote`         | Construction, InteriorDesign, LightingDesign     |
| `ProcessSection`    | Construction, InteriorDesign, LightingDesign     |
| `ImagePair`         | Construction, InteriorDesign, LightingDesign     |
| `CommitmentSection` | Construction, InteriorDesign, LightingDesign     |
| `BestDesignersSection` | Construction, InteriorDesign, LightingDesign  |
| `ExploreSection`    | Construction, InteriorDesign, LightingDesign     |
| `SOCIAL`            | Navbar & Footer                                  |

---

## Pages summary

### AboutPage.jsx `/about`
- 2-col hero (headline + tall photo)
- Centered pull-quote
- Values section (light gray, image left + 4 values with SVG icons right)
- 2-col photo gallery with captions
- Approach section
- Full-width image
- Team grid (6 members, grayscale → color on hover)
- Awards & Recognition section
- Footer

### PortfolioPage.jsx `/portfolio`
- Page header (h1 + body text, no filter bar)
- 4-column × 2-row project grid (aspect-ratio 3/2.45)
- Clean cards: image + name + location (no overlays)
- Footer

### ServicesPage.jsx `/services`
- 2-col hero
- 4 service sections each: h2 + "Learn more →" left, body paragraphs right
- Full-width image per service
- Project grid per service (3 columns, asymmetric heights)
- Footer

### ConstructionPage.jsx `/services/construction`
### InteriorDesignPage.jsx `/services/interior-design`
### LightingDesignPage.jsx `/services/lighting-design`
Each has identical structure:
- 2-col hero
- Centered pull-quote
- Gray process box: photo left + 5 numbered steps right + "Book a Free Consultation"
- Asymmetric 2-col image pair
- "Our commitment to excellence" 3-col grid with bullet lists
- Full-width image
- "Best interior designers" 2-col
- "Explore the world of Minnaro Interior Design" 3-col project grid
- Footer

### MediaAwardsPage.jsx `/media`
- 2-col hero ("2025 Design Awards Recap" + warm architectural photo)
- Centered pull-quote + 3 award badge logos
- International Awards (gray box: stacked photos left, 6 award categories right)
- Asymmetric 2-col image gallery with captions
- Awards over the years table (year | award name rows)
- "Expanding portfolio" 2-col (serif heading + full-height photo)
- Footer

### ContactPage.jsx `/contact`
- Left col: "Get in touch" heading + body + contact details (GET IN TOUCH + SCOPE OF WORK)
- Right col: background image + floating white form card (5 fields + Send button)
- Form validation + success state
- Footer

---

## Design system

| Token          | Value                      |
|----------------|----------------------------|
| Font (serif)   | DM Serif Display           |
| Font (sans)    | DM Sans 300/400/500        |
| Black          | `#0a0a0a`                  |
| White          | `#ffffff`                  |
| Gray light     | `#f0efeb`                  |
| Gray border    | `#e4e2dc`                  |
| Gray muted     | `#8a8880`                  |
| Accent gold    | `#c8a97e` (value titles)   |
| Ease           | `cubic-bezier(.25,.46,.45,.94)` |

### Scroll reveal
Every page uses `.sr` / `.sr-on` classes with `IntersectionObserver`.
Add `className="sr"` to any element to animate it on scroll.
Use `sr-d1` → `sr-d4` for staggered delays (0.1s steps).

### Image hover zoom
Wrap any `<img>` with a `<div className="iz">` to get smooth scale-on-hover.

---

## Tech stack

| Tool              | Purpose                  |
|-------------------|--------------------------|
| Vite              | Build tool & dev server  |
| React 18          | UI library               |
| React Router v6   | Client-side routing      |
| CSS-in-JS (inline)| Scoped per-component styles |

No Tailwind. No external CSS files. No API calls. No environment variables needed.

---

## Adding images

All images currently use Unsplash URLs for placeholder content.
To replace with real project images:

1. Put your images in `/public/images/`
2. Replace the `src` URLs in each page's data arrays or `<img>` tags
3. Example: `src="/images/bawly-modern-house.jpg"`

---

## Customising content

All text, project names, team members, and awards are hardcoded in each page file.
To update:
- **Projects**: edit the `PROJECTS` array in `PortfolioPage.jsx`
- **Team**: edit the `TEAM` array in `AboutPage.jsx`
- **Awards**: edit the `AWARDS` array in `AboutPage.jsx` and `MediaAwardsPage.jsx`
- **Services**: edit the `SERVICES` array in `ServicesPage.jsx`
- **Contact info**: search for `hello@minnaro.com` across all files

---

© 2009–2026 Minnaro Interiors