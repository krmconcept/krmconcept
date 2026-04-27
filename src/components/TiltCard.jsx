import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '', style = {}, maxTilt = 12, glare = true }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rx = useSpring(useTransform(y, [-1, 1], [maxTilt, -maxTilt]), { stiffness: 300, damping: 30 })
  const ry = useSpring(useTransform(x, [-1, 1], [-maxTilt, maxTilt]), { stiffness: 300, damping: 30 })

  const glareX = useTransform(x, [-1, 1], ['0%', '100%'])
  const glareY = useTransform(y, [-1, 1], ['0%', '100%'])
  const glareOpacity = useMotionValue(0)
  const glareOpacitySpring = useSpring(glareOpacity, { stiffness: 200, damping: 30 })

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width)  * 2 - 1
    const ny = ((e.clientY - rect.top)  / rect.height) * 2 - 1
    x.set(nx)
    y.set(ny)
    glareOpacity.set(0.07)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
    glareOpacity.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        ...style,
        rotateX: rx,
        rotateY: ry,
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
      {glare && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-inherit"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(200,169,110,0.15) 0%, transparent 60%)`
            ),
            opacity: glareOpacitySpring,
            zIndex: 10,
          }}
        />
      )}
    </motion.div>
  )
}
