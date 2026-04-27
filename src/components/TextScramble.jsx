import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

function scramble(target, progress) {
  return target
    .split('')
    .map((char, i) => {
      if (char === ' ') return ' '
      if (i < Math.floor(progress * target.length)) return char
      return CHARS[Math.floor(Math.random() * CHARS.length)]
    })
    .join('')
}

export default function TextScramble({
  text,
  className = '',
  style = {},
  tag: Tag = 'span',
  delay = 0,
  duration = 1200,
  trigger = true,
}) {
  const [display, setDisplay] = useState(text)
  const [done, setDone] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const started = useRef(false)

  useEffect(() => {
    if ((!isInView && trigger) || started.current) return
    started.current = true

    const startTime = performance.now() + delay
    let raf

    const tick = (now) => {
      if (now < startTime) { raf = requestAnimationFrame(tick); return }
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      setDisplay(scramble(text, progress))

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setDisplay(text)
        setDone(true)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, trigger])

  return (
    <Tag ref={ref} className={className} style={{ ...style, fontVariantNumeric: 'tabular-nums' }}>
      {display}
    </Tag>
  )
}
