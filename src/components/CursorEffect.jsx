import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const TRAIL_LENGTH = 12

export default function CursorEffect() {
  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)
  const springX = useSpring(cursorX, { stiffness: 100, damping: 15, mass: 0.4 })
  const springY = useSpring(cursorY, { stiffness: 100, damping: 15, mass: 0.4 })

  const [trail, setTrail] = useState(() => Array.from({ length: TRAIL_LENGTH }, () => ({ x: -200, y: -200 })))
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const posRef = useRef({ x: -200, y: -200 })

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const onDown = () => setClicking(true)
    const onUp   = () => setClicking(false)

    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    const bindHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    bindHover()

    const observer = new MutationObserver(bindHover)
    observer.observe(document.body, { childList: true, subtree: true })

    // Trail update loop
    let raf
    const positions = Array.from({ length: TRAIL_LENGTH }, () => ({ x: -200, y: -200 }))
    const updateTrail = () => {
      positions.unshift({ ...posRef.current })
      positions.pop()
      setTrail([...positions])
      raf = requestAnimationFrame(updateTrail)
    }
    raf = requestAnimationFrame(updateTrail)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Particle trail */}
      {trail.map((pos, i) => {
        const age = i / TRAIL_LENGTH
        const size = (1 - age) * (hovering ? 10 : 5)
        const opacity = (1 - age) * 0.5
        return (
          <div
            key={i}
            style={{
              position: 'fixed',
              left: pos.x,
              top: pos.y,
              width: size,
              height: size,
              borderRadius: '50%',
              background: i % 3 === 0 ? '#C8A96E' : i % 3 === 1 ? '#1A3CFF' : '#C8A96E',
              opacity,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 99998,
              transition: 'none',
            }}
          />
        )
      })}

      {/* Ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: springX,
          top: springY,
          x: '-50%',
          y: '-50%',
          width: hovering ? 52 : clicking ? 20 : 36,
          height: hovering ? 52 : clicking ? 20 : 36,
          borderRadius: '50%',
          border: `1.5px solid ${hovering ? 'rgba(200,169,110,0.9)' : 'rgba(200,169,110,0.6)'}`,
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
          mixBlendMode: 'difference',
        }}
      />

      {/* Dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: cursorX,
          top: cursorY,
          x: '-50%',
          y: '-50%',
          width: clicking ? 3 : 5,
          height: clicking ? 3 : 5,
          borderRadius: '50%',
          background: '#C8A96E',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.1s, height 0.1s',
        }}
      />
    </>
  )
}
