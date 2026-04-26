import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import MagneticButton from '../components/MagneticButton'
import SEOHead from '../components/SEOHead'

const values = [
  {
    num: '01',
    title: 'Sur mesure',
    desc: 'Chaque site est conçu depuis zéro pour vous. Aucun template, aucun raccourci. Votre identité, vos besoins, vos clients.',
  },
  {
    num: '02',
    title: 'Transparent',
    desc: 'Devis = prix final. Les délais annoncés sont respectés. Pas de jargon technique pour justifier une facture plus salée.',
  },
  {
    num: '03',
    title: 'Rapide',
    desc: 'Un site vitrine en 7 jours. Un site connecté en 14 à 21 jours. Parce que chaque jour sans site, c\'est une opportunité perdue.',
  },
  {
    num: '04',
    title: 'Disponible',
    desc: 'Vous parlez directement à celui qui fait le travail. Pas de chef de projet, pas de ticket support. Un vrai interlocuteur.',
  },
]

const comparisons = [
  { label: 'Interlocuteur', krm: 'Karim — 1 personne', agence: 'Chef de projet + développeur + designer' },
  { label: 'Délai', krm: '7 à 21 jours', agence: '3 à 6 mois' },
  { label: 'Budget', krm: 'Transparent, fixe dès le devis', agence: 'Variable, devis en plusieurs phases' },
  { label: 'Templates', krm: 'Zéro — 100% sur mesure', agence: 'Souvent basé sur un CMS générique' },
  { label: 'Après livraison', krm: 'Disponible directement', agence: 'Ticket support, délais d\'attente' },
]

export default function StudioPage() {
  return (
    <>
      <SEOHead
        title="Studio — KRM Concept | Un studio, une personne"
        description="KRM Concept est un studio web indépendant fondé à Bruxelles en 2023 par Karim. Pas d'équipe en sous-traitance — une personne qui conçoit, développe et livre."
      />

      <div className="pt-[70px]">
        {/* Header */}
        <section className="py-24 relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="watermark-k absolute right-0 top-1/2 -translate-y-1/2 select-none">K</div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <ScrollReveal variant="fadeUp">
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-primary)' }}>
                Studio
              </p>
              <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', color: 'var(--text-primary)', lineHeight: 0.95 }}>
                Un studio,{' '}
                <span className="italic block" style={{ color: 'var(--accent-primary)' }}>une personne.</span>
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Bio */}
        <section className="py-24" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal variant="slideLeft">
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--accent-primary)' }}>
                    Karim — Fondateur
                  </p>
                  <h2 className="font-display italic mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}>
                    Le développeur qui vous répond, c'est aussi celui qui code votre site.
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                    Pas d'équipe en sous-traitance. Quand vous parlez à KRM Concept, vous parlez à la personne qui va
                    concevoir, développer et livrer votre site. Pas de chef de projet qui transmet votre brief à quelqu'un
                    d'autre. Pas de prestataire offshore. Juste moi.
                  </p>
                  <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                    KRM Concept a été fondé en 2023 à Bruxelles avec une conviction simple : les TPE et PME belges méritent
                    des sites web qui <em style={{ color: 'var(--text-primary)' }}>fonctionnent vraiment</em>, sans avoir à
                    payer les frais structurels d'une agence.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8" style={{ background: 'var(--accent-primary)' }} />
                    <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      Bruxelles · Depuis 2023 · 8 projets livrés
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slideRight">
                <div
                  className="relative p-12 flex items-center justify-center"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    aspectRatio: '1',
                    maxWidth: '420px',
                  }}
                >
                  {/* Visual placeholder */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(200,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.3) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }}
                  />
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div
                      className="font-display font-bold mb-4"
                      style={{ fontSize: '8rem', color: 'var(--accent-primary)', opacity: 0.3, lineHeight: 1 }}
                    >
                      K
                    </div>
                    <div className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      KRM CONCEPT
                    </div>
                    <div className="font-mono text-xs tracking-widest mt-1" style={{ color: 'var(--border)' }}>
                      BRUXELLES · DEPUIS 2023
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
          <div className="watermark-k absolute -left-20 bottom-0 select-none">K</div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <ScrollReveal variant="fadeUp">
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-primary)' }}>
                Valeurs
              </p>
              <h2 className="font-display italic mb-16" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}>
                Ce qui guide chaque projet
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((val, i) => (
                <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                  <div
                    className="p-8 transition-all duration-300"
                    style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-mono text-xs" style={{ color: 'var(--accent-primary)' }}>{val.num}</span>
                      <h3 className="font-display text-2xl font-medium" style={{ color: 'var(--text-primary)' }}>
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {val.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* KRM vs Agences */}
        <section className="py-24" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <ScrollReveal variant="fadeUp">
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-primary)' }}>
                Pourquoi KRM ?
              </p>
              <h2 className="font-display italic mb-16" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}>
                KRM Concept vs les agences classiques
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', overflow: 'hidden' }}>
                {/* Header row */}
                <div
                  className="grid grid-cols-3 py-4 px-6"
                  style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-secondary)' }}
                >
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Critère</span>
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent-primary)' }}>KRM Concept</span>
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Agence classique</span>
                </div>
                {comparisons.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 py-5 px-6 text-sm"
                    style={{ borderBottom: i < comparisons.length - 1 ? '1px solid var(--border)' : 'none' }}
                  >
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{row.label}</span>
                    <span style={{ color: 'var(--text-primary)' }}>{row.krm}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{row.agence}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <ScrollReveal variant="fadeUp">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
              <h2 className="font-display italic mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text-primary)' }}>
                Parlons de votre projet.
              </h2>
              <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
                Premier échange sans engagement. Réponse sous 24h.
              </p>
              <MagneticButton>
                <Link to="/contact" className="btn-gold">
                  Me contacter <ArrowRight size={16} />
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  )
}
