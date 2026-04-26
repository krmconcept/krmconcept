import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import SEOHead from '../components/SEOHead'

const categories = ['Tout', 'Site vitrine', 'Site connecté', 'SaaS', 'Refonte']

const projects = [
  {
    id: 1,
    name: 'Coach BXL',
    category: 'Site connecté',
    initials: 'CB',
    color: '#1a1a2e',
    accent: '#C8A96E',
    desc: 'Site de coaching sportif avec prise de RDV en ligne et programme personnalisé.',
    year: '2024',
  },
  {
    id: 2,
    name: 'Heating Assistance',
    category: 'Site vitrine',
    initials: 'HA',
    color: '#1a1005',
    accent: '#FF6B35',
    desc: 'Plombier chauffagiste bruxellois. Site vitrine avec devis rapide intégré.',
    year: '2024',
  },
  {
    id: 3,
    name: 'KRM Clean',
    category: 'Site vitrine',
    initials: 'KC',
    color: '#0a1a0a',
    accent: '#4CAF50',
    desc: 'Services de nettoyage professionnel. Design épuré, formulaire de devis.',
    year: '2024',
  },
  {
    id: 4,
    name: 'Anis Toitures',
    category: 'Site connecté',
    initials: 'AT',
    color: '#100a1a',
    accent: '#9C27B0',
    desc: 'Couvreur à Bruxelles. Site connecté avec galerie photos et devis en ligne.',
    year: '2023',
  },
  {
    id: 5,
    name: 'Elyra',
    category: 'SaaS',
    initials: 'EL',
    color: '#001a1a',
    accent: '#00BCD4',
    desc: 'Plateforme SaaS de gestion RH pour PME. Interface admin sur mesure.',
    year: '2024',
  },
  {
    id: 6,
    name: 'DNI',
    category: 'Refonte',
    initials: 'DN',
    color: '#1a0a00',
    accent: '#FF9800',
    desc: 'Refonte complète d\'un site institutionnel. Performance +200%, UX repensée.',
    year: '2023',
  },
  {
    id: 7,
    name: 'Coach Senior',
    category: 'Site vitrine',
    initials: 'CS',
    color: '#0a0a1a',
    accent: '#3F51B5',
    desc: 'Coaching de dirigeants senior. Identité premium, conversion optimisée.',
    year: '2024',
  },
  {
    id: 8,
    name: 'Studio MKT',
    category: 'Site connecté',
    initials: 'SM',
    color: '#1a0a0a',
    accent: '#E91E63',
    desc: 'Agence de marketing digital. Portfolio interactif et formulaire multi-étapes.',
    year: '2024',
  },
]

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="portfolio-card group"
      style={{
        background: project.color,
        border: '1px solid var(--border)',
        aspectRatio: '4/3',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      {/* Placeholder visual */}
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${project.accent}22 1px, transparent 1px), linear-gradient(90deg, ${project.accent}22 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${project.accent}15 0%, transparent 65%)`,
          }}
        />
        {/* Initials */}
        <span
          className="font-display font-bold relative z-10 select-none"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            color: project.accent,
            opacity: 0.4,
          }}
        >
          {project.initials}
        </span>

        {/* Hover overlay */}
        <div className="overlay">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span
                className="font-mono text-xs tracking-widest uppercase mb-2 block"
                style={{ color: project.accent }}
              >
                {project.category} · {project.year}
              </span>
              <h3 className="font-display text-2xl font-medium" style={{ color: 'var(--text-primary)' }}>
                {project.name}
              </h3>
            </div>
            <ArrowUpRight size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: 4 }} />
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {project.desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Tout')

  const filtered = activeFilter === 'Tout'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <>
      <SEOHead
        title="Portfolio — KRM Concept | 8 projets livrés"
        description="Découvrez les projets web réalisés par KRM Concept : sites vitrines, sites connectés, solutions SaaS et refontes pour des entreprises belges."
      />

      <div className="pt-[70px]">
        {/* Header */}
        <section className="py-24 relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="watermark-k absolute right-0 top-1/2 -translate-y-1/2 select-none">K</div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <ScrollReveal variant="fadeUp">
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-primary)' }}>
                Portfolio — 8 projets
              </p>
              <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', color: 'var(--text-primary)', lineHeight: 0.95 }}>
                Ce qu'on a{' '}
                <span className="italic" style={{ color: 'var(--accent-primary)' }}>façonné.</span>
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Filters */}
        <section className="py-10 sticky top-[70px] z-40" style={{ background: 'rgba(5,5,5,0.95)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(20px)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="font-mono text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200"
                  style={{
                    border: `1px solid ${activeFilter === cat ? 'var(--accent-primary)' : 'var(--border)'}`,
                    color: activeFilter === cat ? 'var(--accent-primary)' : 'var(--text-muted)',
                    background: activeFilter === cat ? 'rgba(200,169,110,0.05)' : 'transparent',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
          <ScrollReveal variant="fadeUp">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
              <h2 className="font-display italic mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text-primary)' }}>
                Votre projet sera le prochain ?
              </h2>
              <p className="mb-8 text-base" style={{ color: 'var(--text-muted)' }}>
                Parlons de ce que vous voulez construire.
              </p>
              <a href="/contact" className="btn-gold">
                Démarrer un projet <ArrowUpRight size={16} />
              </a>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  )
}
