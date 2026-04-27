import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import SEOHead from '../components/SEOHead'
import TextScramble from '../components/TextScramble'
import TiltCard from '../components/TiltCard'
import MagneticButton from '../components/MagneticButton'

const categories = ['Tout', 'Site vitrine', 'Site connecté', 'SaaS', 'Refonte']

const projects = [
  { id: 1, name: 'Coach BXL', category: 'Site connecté', initials: 'CB', color: '#0a0a18', accent: '#C8A96E', desc: 'Site de coaching sportif avec prise de RDV en ligne et programme personnalisé.', year: '2024', tags: ['RDV', 'WhatsApp', 'Responsive'] },
  { id: 2, name: 'Heating Assistance', category: 'Site vitrine', initials: 'HA', color: '#180a00', accent: '#FF6B35', desc: 'Plombier chauffagiste bruxellois. Site vitrine avec devis rapide intégré.', year: '2024', tags: ['Vitrine', 'SEO', 'CTA'] },
  { id: 3, name: 'KRM Clean', category: 'Site vitrine', initials: 'KC', color: '#021002', accent: '#4CAF50', desc: 'Services de nettoyage professionnel. Design épuré, formulaire de devis.', year: '2024', tags: ['Vitrine', 'Formulaire', 'SEO'] },
  { id: 4, name: 'Anis Toitures', category: 'Site connecté', initials: 'AT', color: '#0e0618', accent: '#9C27B0', desc: 'Couvreur à Bruxelles. Site connecté avec galerie photos et devis en ligne.', year: '2023', tags: ['Galerie', 'Devis', 'Mobile'] },
  { id: 5, name: 'Elyra', category: 'SaaS', initials: 'EL', color: '#001212', accent: '#00BCD4', desc: 'Plateforme SaaS de gestion RH pour PME. Interface admin sur mesure.', year: '2024', tags: ['Auth', 'Dashboard', 'Export PDF'] },
  { id: 6, name: 'DNI', category: 'Refonte', initials: 'DN', color: '#120600', accent: '#FF9800', desc: 'Refonte complète d\'un site institutionnel. Performance +200%, UX repensée.', year: '2023', tags: ['Refonte', 'Perf', 'UX'] },
  { id: 7, name: 'Coach Senior', category: 'Site vitrine', initials: 'CS', color: '#06041a', accent: '#3F51B5', desc: 'Coaching de dirigeants senior. Identité premium, conversion optimisée.', year: '2024', tags: ['Premium', 'SEO', 'CTA'] },
  { id: 8, name: 'Studio MKT', category: 'Site connecté', initials: 'SM', color: '#12000a', accent: '#E91E63', desc: 'Agence de marketing digital. Portfolio interactif et formulaire multi-étapes.', year: '2024', tags: ['Portfolio', 'Formulaire', 'Anim'] },
]

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard maxTilt={8} className="w-full">
        <div
          className="portfolio-card relative overflow-hidden"
          style={{
            background: project.color,
            border: '1px solid var(--border)',
            aspectRatio: '4/3',
            transition: 'border-color 0.3s ease',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${project.accent}18 1px, transparent 1px), linear-gradient(90deg, ${project.accent}18 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />
          {/* Radial glow */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse at center, ${project.accent}20 0%, transparent 65%)`,
              opacity: hovered ? 1.5 : 0.7,
            }}
          />
          {/* Initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display font-bold select-none transition-all duration-500"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                color: project.accent,
                opacity: hovered ? 0.15 : 0.3,
                transform: hovered ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              {project.initials}
            </span>
          </div>

          {/* Scan line on hover */}
          <motion.div
            className="absolute left-0 right-0 h-px pointer-events-none"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }}
            animate={hovered ? { top: ['0%', '100%'] } : { top: '0%' }}
            transition={{ duration: 1.5, repeat: hovered ? Infinity : 0, ease: 'linear' }}
          />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-6"
            style={{ background: `linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.6) 50%, transparent 100%)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="font-mono text-xs tracking-widest uppercase block mb-1" style={{ color: project.accent }}>
                  {project.category} · {project.year}
                </span>
                <h3 className="font-display text-2xl font-medium" style={{ color: 'var(--text-primary)' }}>
                  {project.name}
                </h3>
              </div>
              <div className="w-8 h-8 flex items-center justify-center" style={{ border: `1px solid ${project.accent}60` }}>
                <ArrowUpRight size={14} style={{ color: project.accent }} />
              </div>
            </div>
            <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="font-mono text-[10px] px-2 py-0.5 tracking-wider" style={{ border: `1px solid ${project.accent}30`, color: project.accent, background: `${project.accent}08` }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Category corner badge (always visible) */}
          <div className="absolute top-4 left-4">
            <span className="font-mono text-[10px] px-2 py-1 tracking-widest uppercase" style={{ background: 'rgba(5,5,5,0.8)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
              {project.category}
            </span>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Tout')
  const filtered = activeFilter === 'Tout' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <>
      <SEOHead
        title="Portfolio — KRM Concept | 8 projets livrés"
        description="Découvrez les projets web réalisés par KRM Concept : sites vitrines, sites connectés, solutions SaaS et refontes pour des entreprises belges."
      />
      <div className="pt-[70px]">
        {/* Header */}
        <section className="py-24 relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(200,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="watermark-k absolute right-0 top-1/2 -translate-y-1/2 select-none">K</div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <ScrollReveal variant="fadeUp">
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-primary)' }}>
                <TextScramble text="// PORTFOLIO — 8 PROJETS" duration={900} />
              </p>
              <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', color: 'var(--text-primary)', lineHeight: 0.92 }}>
                Ce qu'on a{' '}
                <span className="italic" style={{ color: 'var(--accent-primary)' }}>façonné.</span>
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Sticky filters */}
        <section className="py-8 sticky top-[70px] z-40" style={{ background: 'rgba(5,5,5,0.96)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(20px)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="relative font-mono text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200 overflow-hidden"
                  style={{
                    border: `1px solid ${activeFilter === cat ? 'var(--accent-primary)' : 'var(--border)'}`,
                    color: activeFilter === cat ? '#050505' : 'var(--text-muted)',
                    background: activeFilter === cat ? 'var(--accent-primary)' : 'transparent',
                  }}
                >
                  {cat}
                </button>
              ))}
              <span className="ml-auto font-mono text-xs self-center" style={{ color: 'var(--text-muted)' }}>
                {filtered.length} / {projects.length}
              </span>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map(project => <ProjectCard key={project.id} project={project} />)}
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
              <p className="mb-8" style={{ color: 'var(--text-muted)' }}>Parlons de ce que vous voulez construire.</p>
              <MagneticButton className="inline-block">
                <a href="#/contact" className="btn-gold">Démarrer un projet <ArrowUpRight size={16} /></a>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  )
}
