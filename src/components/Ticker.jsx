const items = [
  'Sites vitrines',
  'Sites connectés',
  'Solutions SaaS',
  'Refontes',
  'Création de contenu',
  'Bruxelles',
  'Belgium',
]

export default function Ticker() {
  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div className="ticker-wrap py-4" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 px-8">
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              {item}
            </span>
            <span style={{ color: 'var(--accent-primary)', fontSize: '0.5rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
