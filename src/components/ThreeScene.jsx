'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef } from 'react'

function AnimatedBox() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <motion.mesh
      ref={meshRef}
      animate={{ scale: [1, 1.2, 1] }} // Framer Motion animation
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="royalblue" metalness={0.6} roughness={0.2} />
    </motion.mesh>
  )
}

export default function ThreeScene() {
  return (
    <div className="w-[30%] h-48 sm:h-64 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        onCreated={({ gl }) => {
          gl.getContext().canvas.addEventListener('webglcontextlost', (e) => {
            e.preventDefault()
            console.warn('WebGL context lost!')
          })
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />

        <AnimatedBox />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
