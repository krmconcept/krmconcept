import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Clock, CheckCircle } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import MagneticButton from '../components/MagneticButton'
import SEOHead from '../components/SEOHead'

const projectTypes = [
  'Site vitrine',
  'Site connecté',
  'Solution SaaS',
  'Création de contenu',
  'Refonte',
  'Autre',
]

const budgets = [
  'Moins de 500€',
  '500€ – 1 000€',
  '1 000€ – 2 000€',
  '2 000€ – 5 000€',
  'Plus de 5 000€',
  'Abonnement mensuel',
  'Je ne sais pas encore',
]

const inputStyle = {
  width: '100%',
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  color: 'var(--text-primary)',
  fontFamily: 'Syne, sans-serif',
  fontSize: '0.9375rem',
  padding: '1rem 1.25rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}

function FormInput({ label, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
        {label} {required && <span style={{ color: 'var(--accent-primary)' }}>*</span>}
      </label>
      {children}
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', phone: '',
    projectType: '', budget: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.prenom.trim()) e.prenom = 'Prénom requis'
    if (!form.nom.trim()) e.nom = 'Nom requis'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide'
    if (!form.projectType) e.projectType = 'Sélectionnez un type de projet'
    if (!form.message.trim() || form.message.trim().length < 20) e.message = 'Message trop court (20 caractères min)'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      const firstErr = document.querySelector('[aria-invalid="true"]')
      firstErr?.focus()
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const focusStyle = { borderColor: 'rgba(200,169,110,0.5)' }

  return (
    <>
      <SEOHead
        title="Contact — KRM Concept | Parlons de votre projet"
        description="Contactez KRM Concept pour discuter de votre projet web. Réponse sous 24h garantie. Devis gratuit sous 48h."
      />

      <div className="pt-[70px]">
        {/* Header */}
        <section className="py-24 relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="watermark-k absolute right-0 top-1/2 -translate-y-1/2 select-none">K</div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <ScrollReveal variant="fadeUp">
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-primary)' }}>
                Contact
              </p>
              <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', color: 'var(--text-primary)', lineHeight: 0.95 }}>
                On en{' '}
                <span className="italic" style={{ color: 'var(--accent-primary)' }}>parle ?</span>
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Form */}
              <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-24 gap-6"
                      style={{ border: '1px solid rgba(200,169,110,0.3)', background: 'rgba(200,169,110,0.03)' }}
                    >
                      <CheckCircle size={48} style={{ color: 'var(--accent-primary)' }} />
                      <h2 className="font-display italic text-4xl" style={{ color: 'var(--text-primary)' }}>
                        Message envoyé !
                      </h2>
                      <p className="text-base max-w-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        Merci pour votre message. Je vous réponds sous 24h avec une première analyse de votre projet.
                      </p>
                      <div
                        className="font-mono text-xs tracking-widest px-4 py-2"
                        style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                      >
                        contact@krmconcept.com · +32 483 44 06 69
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      className="flex flex-col gap-6"
                    >
                      {/* Name row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormInput label="Prénom" required>
                          <input
                            type="text"
                            value={form.prenom}
                            onChange={handleChange('prenom')}
                            aria-invalid={!!errors.prenom}
                            aria-describedby={errors.prenom ? 'err-prenom' : undefined}
                            style={inputStyle}
                            onFocus={e => Object.assign(e.target.style, focusStyle)}
                            onBlur={e => e.target.style.borderColor = errors.prenom ? '#ef4444' : 'var(--border)'}
                            placeholder="Karim"
                          />
                          {errors.prenom && <span id="err-prenom" className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.prenom}</span>}
                        </FormInput>
                        <FormInput label="Nom" required>
                          <input
                            type="text"
                            value={form.nom}
                            onChange={handleChange('nom')}
                            aria-invalid={!!errors.nom}
                            style={inputStyle}
                            onFocus={e => Object.assign(e.target.style, focusStyle)}
                            onBlur={e => e.target.style.borderColor = errors.nom ? '#ef4444' : 'var(--border)'}
                            placeholder="Dupont"
                          />
                          {errors.nom && <span className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.nom}</span>}
                        </FormInput>
                      </div>

                      {/* Email + Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormInput label="Email" required>
                          <input
                            type="email"
                            value={form.email}
                            onChange={handleChange('email')}
                            aria-invalid={!!errors.email}
                            style={inputStyle}
                            onFocus={e => Object.assign(e.target.style, focusStyle)}
                            onBlur={e => e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border)'}
                            placeholder="vous@exemple.com"
                          />
                          {errors.email && <span className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.email}</span>}
                        </FormInput>
                        <FormInput label="Téléphone">
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={handleChange('phone')}
                            style={inputStyle}
                            onFocus={e => Object.assign(e.target.style, focusStyle)}
                            onBlur={e => e.target.style.borderColor = 'var(--border)'}
                            placeholder="+32 4XX XX XX XX"
                          />
                        </FormInput>
                      </div>

                      {/* Project type */}
                      <FormInput label="Type de projet" required>
                        <select
                          value={form.projectType}
                          onChange={handleChange('projectType')}
                          aria-invalid={!!errors.projectType}
                          style={{ ...inputStyle, appearance: 'none' }}
                          onFocus={e => Object.assign(e.target.style, focusStyle)}
                          onBlur={e => e.target.style.borderColor = errors.projectType ? '#ef4444' : 'var(--border)'}
                        >
                          <option value="" disabled>Sélectionnez un type...</option>
                          {projectTypes.map(t => <option key={t} value={t} style={{ background: '#111' }}>{t}</option>)}
                        </select>
                        {errors.projectType && <span className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.projectType}</span>}
                      </FormInput>

                      {/* Budget */}
                      <FormInput label="Budget estimé">
                        <select
                          value={form.budget}
                          onChange={handleChange('budget')}
                          style={{ ...inputStyle, appearance: 'none' }}
                          onFocus={e => Object.assign(e.target.style, focusStyle)}
                          onBlur={e => e.target.style.borderColor = 'var(--border)'}
                        >
                          <option value="" disabled>Sélectionnez une fourchette...</option>
                          {budgets.map(b => <option key={b} value={b} style={{ background: '#111' }}>{b}</option>)}
                        </select>
                      </FormInput>

                      {/* Message */}
                      <FormInput label="Votre message" required>
                        <textarea
                          value={form.message}
                          onChange={handleChange('message')}
                          aria-invalid={!!errors.message}
                          rows={6}
                          style={{ ...inputStyle, resize: 'vertical', minHeight: '160px' }}
                          onFocus={e => Object.assign(e.target.style, focusStyle)}
                          onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border)'}
                          placeholder="Décrivez votre projet, vos objectifs, votre activité..."
                        />
                        {errors.message && <span className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.message}</span>}
                      </FormInput>

                      <MagneticButton className="self-start">
                        <button
                          type="submit"
                          className="btn-gold"
                          disabled={loading}
                          style={{ opacity: loading ? 0.7 : 1 }}
                        >
                          {loading ? (
                            <span className="flex items-center gap-3">
                              <span
                                className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                                style={{ animation: 'spin 0.7s linear infinite' }}
                              />
                              Envoi en cours...
                            </span>
                          ) : 'Envoyer le message →'}
                        </button>
                      </MagneticButton>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Info panel */}
              <ScrollReveal variant="slideRight" delay={0.1}>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--accent-primary)' }}>
                      Informations
                    </p>
                    <div className="flex flex-col gap-5">
                      <a
                        href="mailto:contact@krmconcept.com"
                        className="flex items-start gap-4 group"
                      >
                        <Mail size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--accent-primary)' }} />
                        <div>
                          <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--text-muted)' }}>Email</p>
                          <p
                            className="text-sm transition-colors"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            contact@krmconcept.com
                          </p>
                        </div>
                      </a>
                      <a
                        href="tel:+32483440669"
                        className="flex items-start gap-4 group"
                      >
                        <Phone size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--accent-primary)' }} />
                        <div>
                          <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--text-muted)' }}>Téléphone</p>
                          <p className="text-sm" style={{ color: 'var(--text-primary)' }}>+32 483 44 06 69</p>
                        </div>
                      </a>
                      <div className="flex items-start gap-4">
                        <Clock size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--accent-primary)' }} />
                        <div>
                          <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--text-muted)' }}>Délai de réponse</p>
                          <p className="text-sm" style={{ color: 'var(--text-primary)' }}>Réponse sous 24h garantie</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="p-6"
                    style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
                  >
                    <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--accent-primary)' }}>
                      Ce qui se passe ensuite
                    </p>
                    <ol className="flex flex-col gap-3">
                      {[
                        'Je lis votre message le jour même',
                        'Je vous réponds sous 24h avec une première analyse',
                        'On fixe un appel de 30 min pour aller plus loin',
                        'Vous recevez un devis sous 48h — prix fixe',
                      ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                          <span
                            className="font-mono text-xs shrink-0 mt-0.5"
                            style={{ color: 'var(--accent-primary)' }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  )
}
