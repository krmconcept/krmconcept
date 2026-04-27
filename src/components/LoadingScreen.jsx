import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('loading') // loading | reveal | done

  useEffect(() => {
    const steps = [
      { target: 30, delay: 100 },
      { target: 60, delay: 300 },
      { target: 85, delay: 500 },
      { target: 100, delay: 800 },
    ]

    let current = 0
    const timers = []

    steps.forEach(({ target, delay }) => {
      const t = setTimeout(() => {
        const interval = setInterval(() => {
          current += 1
          setProgress(current)
          if (current >= target) clearInterval(interval)
        }, 12)
        timers.push(interval)
      }, delay)
      timers.push(t)
    })

    const done = setTimeout(() => {
      setPhase('reveal')
      setTimeout(() => {
        setPhase('done')
        onComplete()
      }, 900)
    }, 2200)

    timers.push(done)
    return () => timers.forEach(clearTimeout)
  }, [])

  if (phase === 'done') return null

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[100000] flex flex-col items-center justify-center"
        style={{ background: '#030303' }}
      >
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(200,169,110,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          }}
        />

        {/* KRM Logo reveal */}
        <motion.div
          className="relative z-10 text-center mb-16"
          animate={phase === 'reveal' ? { y: -20, opacity: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="font-display font-bold tracking-tight block"
              style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', color: 'transparent', WebkitTextStroke: '1px rgba(200,169,110,0.6)', lineHeight: 1 }}
            >
              KRM
            </span>
            <motion.span
              className="font-mono text-xs tracking-[0.4em] uppercase block mt-2"
              style={{ color: 'var(--accent-primary)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Concept
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <div className="relative z-10 w-48">
          <div
            className="h-px w-full mb-3"
            style={{ background: 'rgba(200,169,110,0.15)' }}
          >
            <motion.div
              className="h-full"
              style={{ background: 'linear-gradient(90deg, var(--accent-primary), rgba(26,60,255,0.8))', originX: 0 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <div
            className="font-mono text-xs text-center tabular-nums"
            style={{ color: 'var(--text-muted)' }}
          >
            {String(progress).padStart(3, '0')}%
          </div>
        </div>

        {/* Corner accents */}
        {[
          'top-8 left-8 border-l border-t',
          'top-8 right-8 border-r border-t',
          'bottom-8 left-8 border-l border-b',
          'bottom-8 right-8 border-r border-b',
        ].map((cls, i) => (
          <motion.div
            key={i}
            className={`absolute w-6 h-6 ${cls}`}
            style={{ borderColor: 'rgba(200,169,110,0.3)' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.05 }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
