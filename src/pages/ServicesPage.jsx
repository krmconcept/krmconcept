import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import MagneticButton from '../components/MagneticButton'
import SEOHead from '../components/SEOHead'
import TextScramble from '../components/TextScramble'
import TiltCard from '../components/TiltCard'

const oneTime = [
  {
    name: 'Site vitrine',
    price: '790€',
    sub: 'Paiement unique',
    featured: false,
    features: [
      "Jusqu'à 5 pages sur mesure",
      'Design responsive (mobile + desktop)',
      'SEO de base optimisé',
      'CTA appel / email',
      'Pages légales incluses',
      'Mise en ligne + domaine (1 an)',
      'Livraison 7–14 jours',
    ],
  },
  {
    name: 'Site connecté',
    price: '1 290€',
    sub: 'Paiement unique',
    badge: 'Le plus demandé',
    featured: true,
    features: [
      'Tout du forfait Vitrine',
      'Prise de RDV en ligne',
      'Formulaires devis multi-étapes',
      'Intégration WhatsApp Business',
      'CTA conversion optimisés',
      'Notifications email automatiques',
      'Livraison 14–21 jours',
    ],
  },
  {
    name: 'Solution SaaS',
    price: 'Sur devis',
    sub: 'Analyse préalable gratuite',
    featured: false,
    features: [
      'Analyse métier approfondie',
      'Base de données sécurisée',
      'Auth + gestion des rôles',
      'Interface admin sur mesure',
      'Export données + PDF',
      'Formation incluse',
      'Maintenance 3 mois offerte',
    ],
  },
]

const monthly = [
  {
    name: 'Essentielle',
    price: '99€',
    sub: '/ mois',
    featured: false,
    features: [
      'Site vitrine 4 pages',
      'Design responsive',
      'Hébergement + domaine inclus',
      'Maintenance & sécurité',
      'Support email',
    ],
  },
  {
    name: 'Connectée',
    price: '149€',
    sub: '/ mois',
    badge: 'Recommandée',
    featured: true,
    features: [
      'Tout de la formule Essentielle',
      'Formulaires connectés (devis, RDV)',
      'WhatsApp & CTA optimisés',
      'Support téléphonique prioritaire',
      'Mise à jour mensuelle incluse',
    ],
  },
]

const faqs = [
  {
    q: 'Combien de temps prend la création d\'un site ?',
    a: 'Un site vitrine est livré en 7 à 14 jours. Un site connecté en 14 à 21 jours. Les délais sont précisés dans le devis et respectés.',
  },
  {
    q: 'Pourquoi pas WordPress ?',
    a: 'WordPress est lent, sécurisé à maintenir, et souvent surchargé de plugins inutiles. Je développe sur mesure avec des technologies modernes (React, Vite) pour des sites rapides, sécurisés et parfaitement maîtrisés.',
  },
  {
    q: 'L\'hébergement est-il inclus ?',
    a: 'Oui. Pour les forfaits uniques, le domaine et l\'hébergement la première année sont inclus. Pour les abonnements, hébergement et domaine sont inclus chaque mois.',
  },
  {
    q: 'Que se passe-t-il après la livraison ?',
    a: 'Je reste disponible après livraison pour les questions. Une formation est incluse pour vous montrer comment gérer votre contenu. Les interventions techniques ultérieures sont facturées séparément ou couvertes par l\'abonnement.',
  },
  {
    q: 'Travaillez-vous avec des clients hors Belgique ?',
    a: 'Oui, tout à fait. Je travaille à distance pour des clients en France, Luxembourg, et au-delà. L\'essentiel se passe par appel vidéo et échanges email.',
  },
  {
    q: 'Le prix du devis est-il vraiment définitif ?',
    a: 'Absolument. Le devis que vous recevez sous 48h est le prix final. Zéro frais cachés, zéro surprises en cours de route.',
  },
]

function PricingCard({ plan }) {
  return (
    <TiltCard maxTilt={7} className="h-full">
    <div className={`pricing-card p-8 flex flex-col h-full ${plan.featured ? 'featured' : ''}`} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated corner accent */}
      {plan.featured && (
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, rgba(200,169,110,0.15), transparent 70%)' }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
      {/* Scan line on featured */}
      {plan.featured && (
        <motion.div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.4), transparent)' }}
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {plan.badge && (
        <div className="mb-6">
          <span
            className="font-mono text-xs tracking-widest uppercase px-3 py-1"
            style={{ background: 'rgba(200,169,110,0.1)', color: 'var(--accent-primary)', border: '1px solid rgba(200,169,110,0.3)' }}
          >
            {plan.badge}
          </span>
        </div>
      )}
      {!plan.badge && <div className="mb-6 h-[26px]" />}

      <h3 className="font-display text-3xl font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
        {plan.name}
      </h3>
      <div className="flex items-end gap-2 mb-2">
        <span
          className="font-display font-bold"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: plan.featured ? 'var(--accent-primary)' : 'var(--text-primary)', lineHeight: 1 }}
        >
          {plan.price}
        </span>
      </div>
      <p className="font-mono text-xs tracking-widest mb-8" style={{ color: 'var(--text-muted)' }}>
        {plan.sub}
      </p>

      <ul className="flex flex-col gap-3 flex-1 mb-10">
        {plan.features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
            <Check size={14} className="shrink-0 mt-0.5" style={{ color: 'var(--accent-primary)' }} />
            {feat}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={plan.featured ? 'btn-gold w-full justify-center' : 'btn-ghost w-full justify-center'}
      >
        Démarrer <ArrowRight size={15} />
      </Link>
    </div>
    </TiltCard>
  )
}

function Accordion({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="accordion-item">
      <button
        className="accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span style={{ color: 'var(--text-primary)', fontFamily: 'Syne, sans-serif', fontWeight: 500 }}>
          {faq.q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={18} style={{ color: 'var(--text-muted)' }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-6 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServicesPage() {
  const [tab, setTab] = useState('onetime')
  const plans = tab === 'onetime' ? oneTime : monthly

  return (
    <>
      <SEOHead
        title="Services & Tarifs — KRM Concept | Sites web sur mesure Bruxelles"
        description="Découvrez les formules KRM Concept : site vitrine 790€, site connecté 1290€, solution SaaS sur devis. Forfaits uniques ou abonnements mensuels."
      />

      <div className="pt-[70px]">
        {/* Header */}
        <section className="py-24 relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="watermark-k absolute right-0 top-1/2 -translate-y-1/2 select-none">K</div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <ScrollReveal variant="fadeUp">
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-primary)' }}>
                <TextScramble text="// SERVICES & TARIFS" duration={900} />
              </p>
              <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', color: 'var(--text-primary)', lineHeight: 0.95 }}>
                Des sites web{' '}
                <span className="italic" style={{ color: 'var(--accent-primary)' }}>qui travaillent pour vous.</span>
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Toggle */}
        <section className="py-12" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <ScrollReveal variant="fadeUp">
              <div
                className="inline-flex p-1 gap-1"
                style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
                role="tablist"
              >
                {[
                  { key: 'onetime', label: 'Forfait unique' },
                  { key: 'monthly', label: 'Abonnement mensuel' },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={tab === key}
                    onClick={() => setTab(key)}
                    className="relative px-6 py-3 font-mono text-xs tracking-widest uppercase transition-colors"
                    style={{ color: tab === key ? '#050505' : 'var(--text-muted)' }}
                  >
                    {tab === key && (
                      <motion.div
                        layoutId="tab-bg"
                        className="absolute inset-0"
                        style={{ background: 'var(--accent-primary)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`grid gap-6 ${tab === 'onetime' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'}`}
              >
                {plans.map((plan, i) => (
                  <PricingCard key={i} plan={plan} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Content creation note */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div
                className="mt-8 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
              >
                <div>
                  <h3 className="font-display text-xl mb-1" style={{ color: 'var(--text-primary)' }}>
                    Création de contenu
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Carrousels Instagram, visuels produits, direction artistique, captions — Sur devis
                  </p>
                </div>
                <Link to="/contact" className="btn-ghost shrink-0">
                  Demander un devis →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <ScrollReveal variant="fadeUp">
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-primary)' }}>
                Questions fréquentes
              </p>
              <h2 className="font-display italic mb-16" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}>
                Tout ce que vous voulez savoir
              </h2>
            </ScrollReveal>

            <div>
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} variant="fadeUp" delay={i * 0.05}>
                  <Accordion faq={faq} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
          <ScrollReveal variant="fadeUp">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
              <h2 className="font-display italic mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text-primary)' }}>
                Prêt à démarrer ?
              </h2>
              <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
                Devis sous 48h. Prix fixe. Zéro surprise.
              </p>
              <MagneticButton>
                <Link to="/contact" className="btn-gold">
                  Demander un devis gratuit <ArrowRight size={16} />
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  )
}
