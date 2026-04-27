import { useState } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CursorEffect from './components/CursorEffect'
import GrainOverlay from './components/GrainOverlay'
import LoadingScreen from './components/LoadingScreen'
import ScanLines from './components/ScanLines'

import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'
import StudioPage from './pages/StudioPage'
import ContactPage from './pages/ContactPage'
import {
  MentionsLegalesPage,
  CGVPage,
  ConfidentialitePage,
  CookiesPage,
} from './pages/LegalPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const pageVariants = {
  initial: { opacity: 0, y: 18, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit:    { opacity: 0, y: -8, filter: 'blur(2px)' },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/conditions-generales-de-vente" element={<CGVPage />} />
          <Route path="/politique-de-confidentialite" element={<ConfidentialitePage />} />
          <Route path="/politique-des-cookies" element={<CookiesPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <HashRouter>
          <ScrollToTop />
          <CursorEffect />
          <GrainOverlay />
          <ScanLines />
          <Navigation />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </HashRouter>
      )}
    </>
  )
}
