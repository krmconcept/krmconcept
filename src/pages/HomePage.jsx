import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Ticker from '../components/Ticker'
import ScrollReveal from '../components/ScrollReveal'
import CountUp from '../components/CountUp'
import MagneticButton from '../components/MagneticButton'
import SEOHead from '../components/SEOHead'

const services = [
  {
    num: '01',
    title: 'Site vitrine',
    desc: 'Jusqu\'à 5 pages sur mesure. Design responsive, SEO de base, mise en ligne + domaine inclus.',
    price: 'À partir de 790€',
    delay: 0,
  },
  {
    num: '02',
    title: 'Site connecté',
    desc: 'Tout du vitrine + prise de RDV en ligne, formulaires devis, intégration WhatsApp Business, notifications email.',
    price: 'À partir de 1 290€',
    badge: 'Le plus demandé',
    delay: 0.05,
  },
  {
    num: '03',
    title: 'Solution SaaS',
    desc: 'Base de données sécurisée, auth + rôles, interface admin sur mesure, export données + PDF.',
    price: 'Sur devis',
    delay: 0.1,
  },
  {
    num: '04',
    title: 'Création de contenu',
    desc: 'Carrousels Instagram, visuels produits, direction artistique, captions.',
    price: 'Sur devis',
    delay: 0.15,
  },
]

const steps = [
  { num: '01', title: 'Découverte', desc: 'Un appel de 30 min. Je comprends votre activité, vos clients, vos enjeux réels.' },
  { num: '02', title: 'Devis', desc: 'Sous 48h. Prix fixe, délais précis, aucun frais caché.' },
  { num: '03', title: 'Conception', desc: 'Maquette + retours illimités. On itère jusqu\'à ce que vous disiez "c\'est ça".' },
  { num: '04', title: 'Livraison', desc: 'Mise en ligne sous 7 à 21 jours. Formation incluse. Disponible après livraison.' },
]

const stats = [
  { value: 8, suffix: '', label: 'Projets livrés' },
  { value: 7, suffix: 'j', label: 'Délai moyen vitrine' },
  { value: 0, suffix: '€', label: 'Frais cachés' },
  { value: 100, suffix: '%', label: 'Sur mesure' },
]

export default function HomePage() {
  const lineRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lineRef.current) lineRef.current.classList.add('gold-line-active')
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <SEOHead
        title="KRM Concept — Studio web indépendant à Bruxelles | Sites sur mesure"
        description="Sites web sur mesure, solutions SaaS et création de contenu pour les entreprises belges. Design premium, livraison rapide, zéro template."
      />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'KRM Concept',
        description: 'Studio web indépendant à Bruxelles',
        url: 'https://krmconcept.com',
        email: 'contact@krmconcept.com',
        telephone: '+32483440669',
        address: { '@type': 'PostalAddress', addressLocality: 'Bruxelles', addressCountry: 'BE' },
        founder: { '@type': 'Person', name: 'Karim' },
        foundingDate: '2023',
      })}} />

      {/* ───────────── HERO ───────────── */}
      <section className="relative min-h-screen flex flex-col justify-between pt-[70px] overflow-hidden">
        {/* Orbs */}
        <motion.div
          className="glow-gold absolute"
          style={{ top: '-10%', left: '-10%', zIndex: 0 }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="glow-blue absolute"
          style={{ top: '15%', right: '-5%', zIndex: 0 }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Watermark */}
        <div className="watermark-k absolute right-0 top-1/2 -translate-y-1/2 select-none" style={{ zIndex: 0 }}>
          K
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col justify-center py-20">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-10"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--accent-primary)' }}
            />
            <span
              className="font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: 'var(--accent-primary)' }}
            >
              Studio web · Bruxelles
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-8">
            <motion.h1
              className="font-display leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', color: 'var(--text-primary)' }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Sites web,
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <span
                className="font-display italic leading-[0.9] tracking-tight"
                style={{
                  fontSize: 'clamp(3.5rem, 11vw, 13rem)',
                  color: 'var(--accent-primary)',
                  display: 'block',
                }}
              >
                façonnés
              </span>
            </motion.div>
            <motion.h1
              className="font-display leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', color: 'var(--text-primary)' }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              main.
            </motion.h1>
          </div>

          {/* Gold line */}
          <motion.div
            className="gold-line mb-10"
            style={{ width: 0 }}
            animate={{ width: '40%' }}
            transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Sub */}
          <motion.p
            className="text-base md:text-lg leading-relaxed mb-12 max-w-lg"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Pas de templates recyclés. Pas de solutions digitales. Juste des sites pensés sur mesure
            pour convertir vos visiteurs en clients — livrés vite, sans la facture d'agence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <MagneticButton>
              <Link to="/contact" className="btn-gold">
                Parlons de votre projet <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/portfolio" className="btn-ghost">
                Voir le portfolio
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Coordinates */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span
            className="font-mono text-xs tracking-[0.2em]"
            style={{ color: 'var(--text-muted)' }}
          >
            BXL · 50.8466°N · 4.3528°E
          </span>
        </motion.div>
      </section>

      {/* ───────────── TICKER ───────────── */}
      <Ticker />

      {/* ───────────── MANIFESTE ───────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="watermark-k absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 select-none opacity-50">
          K
        </div>
        <ScrollReveal variant="fadeIn" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-12"
            style={{ color: 'var(--accent-primary)' }}
          >
            Manifeste
          </p>
          <blockquote
            className="font-display italic leading-tight"
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 4rem)',
              color: 'var(--text-primary)',
              maxWidth: '900px',
            }}
          >
            "La plupart des sites web en Belgique sont des brochures numériques. Je fabrique des outils qui{' '}
            <span style={{ color: 'var(--accent-primary)' }}>travaillent pour vous</span> — 24h/24, sans relâche, sans excuse."
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
            <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
              Karim — Fondateur, KRM Concept
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* ───────────── SERVICES ───────────── */}
      <section className="py-24 relative" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-primary)' }}>
                  Services
                </p>
                <h2 className="font-display italic" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text-primary)' }}>
                  Ce que je construis
                </h2>
              </div>
              <Link
                to="/services"
                className="flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                Voir les tarifs <ArrowUpRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div>
            {services.map((s, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={s.delay}>
                <div
                  className="service-row flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 group"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <span
                    className="font-mono text-xs tracking-widest shrink-0"
                    style={{ color: 'var(--text-muted)', width: '2.5rem' }}
                  >
                    {s.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="font-display text-2xl md:text-3xl font-medium transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {s.title}
                      </h3>
                      {s.badge && (
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded-sm"
                          style={{
                            background: 'rgba(200, 169, 110, 0.1)',
                            color: 'var(--accent-primary)',
                            border: '1px solid rgba(200, 169, 110, 0.3)',
                          }}
                        >
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {s.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span
                      className="font-mono text-sm font-medium"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {s.price}
                    </span>
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                      style={{ color: 'var(--text-muted)' }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PROCESSUS ───────────── */}
      <section className="py-28 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <div className="watermark-k absolute -right-20 bottom-0 select-none">K</div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fadeUp">
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-primary)' }}>
              Comment ça marche
            </p>
            <h2
              className="font-display italic mb-16"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text-primary)' }}
            >
              Le processus
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                <div
                  className="relative p-8 h-full"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  {/* Watermark number */}
                  <div
                    className="absolute top-4 right-6 font-display font-bold select-none"
                    style={{ fontSize: '5rem', color: 'rgba(200,169,110,0.04)', lineHeight: 1 }}
                  >
                    {step.num}
                  </div>
                  <div
                    className="font-mono text-xs tracking-widest mb-6"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    {step.num}
                  </div>
                  <h3
                    className="font-display text-2xl font-medium mb-3"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── STATS ───────────── */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} variant="scale" delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div
                    className="font-display font-bold mb-2"
                    style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--text-primary)', lineHeight: 1 }}
                  >
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CTA FINAL ───────────── */}
      <section className="py-32 relative overflow-hidden">
        <motion.div
          className="glow-gold absolute"
          style={{ bottom: '-100px', left: '50%', transform: 'translateX(-50%)', opacity: 0.6 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal variant="clipUp">
            <h2
              className="font-display italic mb-8"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', color: 'var(--text-primary)', lineHeight: 0.95 }}
            >
              On en parle ?
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <p className="text-base mb-12 max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Réponse sous 24h garantie. Premier échange sans engagement.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <MagneticButton>
                <Link to="/contact" className="btn-gold text-base px-10 py-5">
                  Démarrer un projet <ArrowRight size={18} />
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeIn" delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:contact@krmconcept.com"
                className="font-mono text-sm transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                contact@krmconcept.com
              </a>
              <span style={{ color: 'var(--border)' }} className="hidden sm:block">·</span>
              <a
                href="tel:+32483440669"
                className="font-mono text-sm transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                +32 483 44 06 69
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
