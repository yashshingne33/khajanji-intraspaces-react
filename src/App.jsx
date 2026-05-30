import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage    from './pages/HomePage'
import PageView    from './pages/PageView'
import BlogPost    from './pages/BlogPost'
import Archive     from './pages/Archive'
import SearchPage  from './pages/SearchPage'
import AuthorPage  from './pages/AuthorPage'
import NotFound    from './pages/NotFound'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ServicesPage from './pages/ServicesPage'
import ConstructionPage from './pages/ConstructionPage'
import InteriorDesignPage from './pages/InteriorDesignPage'
import LightingDesignPage from './pages/LightingDesignPage'
import ContactPage from './pages/ContactPage'

// 1. Sabse pehle apne Media page component ko yahan import karein
import Media from './pages/Media' // <-- Agar aapka folder structure alag hai toh path sahi kar lein (e.g., './pages/MediaPage')

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} /> 
          <Route path="portfolio/:id" element={<ProjectDetailPage />} /> 
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/construction" element={<ConstructionPage />} />
          <Route path="services/interior-design" element={<InteriorDesignPage />} />
          <Route path="services/lighting-design" element={<LightingDesignPage />} />
          <Route path="contact" element={<ContactPage />} />
          
          {/* 2. Media Route ko exact yahan add kiya hai (Dynamic Slugs se upar) */}
          <Route path="media" element={<Media />} />

          <Route path="blog"        element={<Archive />} />
          <Route path="blog/:slug"  element={<BlogPost />} />
          <Route path="author/:name" element={<AuthorPage />} />
          <Route path="search"      element={<SearchPage />} />
          
          {/* Yeh dynamic routes humesha last mein hone chahiye */}
          <Route path=":slug"       element={<PageView />} />
          <Route path="*"           element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}