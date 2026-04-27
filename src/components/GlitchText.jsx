import { useEffect, useRef } from 'react'

export default function GlitchText({ children, className = '', style = {}, intensity = 1 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeout
    const glitch = () => {
      el.setAttribute('data-text', el.textContent)
      el.classList.add('glitching')
      setTimeout(() => el.classList.remove('glitching'), 300 * intensity)
      timeout = setTimeout(glitch, 3000 + Math.random() * 4000)
    }

    timeout = setTimeout(glitch, 1000 + Math.random() * 2000)
    return () => clearTimeout(timeout)
  }, [intensity])

  return (
    <span
      ref={ref}
      className={`glitch-text ${className}`}
      data-text={typeof children === 'string' ? children : ''}
      style={style}
    >
      {children}
    </span>
  )
}
