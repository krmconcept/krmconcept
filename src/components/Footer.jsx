import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

const navLinks = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/studio', label: 'Studio' },
  { to: '/contact', label: 'Contact' },
]

const legalLinks = [
  { to: '/mentions-legales', label: 'Mentions légales' },
  { to: '/conditions-generales-de-vente', label: 'CGV' },
  { to: '/politique-de-confidentialite', label: 'Confidentialité' },
  { to: '/politique-des-cookies', label: 'Cookies' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>KRM</span>
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent-primary)' }}>Concept</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Studio indépendant · Bruxelles · Depuis 2023
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:contact@krmconcept.com"
                className="flex items-center gap-2 text-sm transition-colors hover:text-accent"
                style={{ color: 'var(--text-muted)' }}
              >
                <Mail size={13} />
                contact@krmconcept.com
              </a>
              <a
                href="tel:+32483440669"
                className="flex items-center gap-2 text-sm transition-colors hover:text-accent"
                style={{ color: 'var(--text-muted)' }}
              >
                <Phone size={13} />
                +32 483 44 06 69
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--accent-primary)' }}>Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--accent-primary)' }}>Légal</p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono"
          style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)', letterSpacing: '0.05em' }}
        >
          <span>© 2025 KRM Concept — Tous droits réservés</span>
          <span className="hidden md:block" style={{ color: 'var(--border)' }}>·</span>
          <span>contact@krmconcept.com · +32 483 44 06 69</span>
        </div>
      </div>
    </footer>
  )
}
