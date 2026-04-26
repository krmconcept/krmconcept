import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorEffect() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springX = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.5 })
  const springY = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.5 })

  const isHovering = useRef(false)
  const scaleRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const onEnter = () => {
      isHovering.current = true
      if (scaleRef.current) scaleRef.current.style.transform = 'translate(-50%, -50%) scale(2.2)'
    }

    const onLeave = () => {
      isHovering.current = false
      if (scaleRef.current) scaleRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    document.addEventListener('mousemove', move)

    const clickables = document.querySelectorAll('a, button, [role="button"], input, select, textarea, label')
    clickables.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const observer = new MutationObserver(() => {
      const newClickables = document.querySelectorAll('a, button, [role="button"]')
      newClickables.forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Ring */}
      <motion.div
        ref={scaleRef}
        style={{
          position: 'fixed',
          left: springX,
          top: springY,
          x: '-50%',
          y: '-50%',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(200, 169, 110, 0.7)',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
          transition: 'transform 0.2s ease',
        }}
      />
      {/* Dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: dotX,
          top: dotY,
          x: '-50%',
          y: '-50%',
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: '#C8A96E',
          pointerEvents: 'none',
          zIndex: 99999,
        }}
      />
    </>
  )
}
