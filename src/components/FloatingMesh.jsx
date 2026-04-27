import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Wireframe } from '@react-three/drei'
import * as THREE from 'three'

function IcoMesh({ mouseRef }) {
  const meshRef  = useRef()
  const outerRef = useRef()
  const { size } = useThree()

  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.4, 1), [])
  const geo2 = useMemo(() => new THREE.IcosahedronGeometry(1.9, 1), [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const mx = (mouseRef.current.x / size.width  - 0.5) * 0.4
    const my = (mouseRef.current.y / size.height - 0.5) * 0.4

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.18 + mx
      meshRef.current.rotation.x = t * 0.09 + my
    }
    if (outerRef.current) {
      outerRef.current.rotation.y = -t * 0.1 - mx * 0.6
      outerRef.current.rotation.x = -t * 0.06 - my * 0.6
      const s = 1 + Math.sin(t * 0.7) * 0.04
      outerRef.current.scale.set(s, s, s)
    }
  })

  return (
    <group>
      {/* Inner */}
      <mesh ref={meshRef} geometry={geo}>
        <meshBasicMaterial color="#C8A96E" transparent opacity={0} wireframe={false} />
        <Wireframe
          simplify={false}
          stroke="#C8A96E"
          backfaceStroke="rgba(200,169,110,0.15)"
          thickness={0.008}
          opacity={0.55}
          transparent
        />
      </mesh>
      {/* Outer ghost */}
      <mesh ref={outerRef} geometry={geo2}>
        <meshBasicMaterial color="#1A3CFF" transparent opacity={0} wireframe={false} />
        <Wireframe
          simplify={false}
          stroke="#1A3CFF"
          backfaceStroke="rgba(26,60,255,0.05)"
          thickness={0.005}
          opacity={0.22}
          transparent
        />
      </mesh>
    </group>
  )
}

function Particles() {
  const count = 120
  const ref = useRef()

  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
      spd[i] = 0.2 + Math.random() * 0.5
    }
    return { positions: pos, speeds: spd }
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!ref.current) return
    const pos = ref.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(t * speeds[i] + i) * 0.002
    }
    ref.current.geometry.attributes.position.needsUpdate = true
    ref.current.rotation.y = t * 0.05
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#C8A96E" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export default function FloatingMesh({ mouseRef }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.2} />
      <IcoMesh mouseRef={mouseRef} />
      <Particles />
    </Canvas>
  )
}
