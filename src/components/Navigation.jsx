import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import MagneticButton from './MagneticButton'

const links = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/studio', label: 'Studio' },
  { to: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="KRM Concept — Accueil">
            <span
              className="font-display text-2xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              KRM
            </span>
            <span
              className="font-mono text-xs tracking-[0.3em] uppercase transition-colors duration-200"
              style={{ color: 'var(--accent-primary)' }}
            >
              Concept
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${location.pathname === to ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
            <MagneticButton>
              <Link to="/contact" className="btn-gold ml-4" style={{ fontSize: '0.75rem', padding: '0.7rem 1.5rem' }}>
                Parlons projet
              </Link>
            </MagneticButton>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 p-2"
              style={{ color: 'var(--text-muted)' }}
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col items-center gap-10" aria-label="Menu mobile">
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={to}
                    className="font-display text-5xl font-light italic"
                    style={{ color: location.pathname === to ? 'var(--accent-primary)' : 'var(--text-primary)' }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
              >
                <Link to="/contact" className="btn-gold mt-4">
                  Parlons projet →
                </Link>
              </motion.div>
            </nav>

            <div
              className="absolute bottom-8 font-mono text-xs"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.15em' }}
            >
              contact@krmconcept.com
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
