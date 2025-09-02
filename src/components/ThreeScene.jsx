"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function AnimatedBox() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; 
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="royalblue" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-48 sm:h-64 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Light */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />

        {/* Animated Box */}
        <AnimatedBox />

        {/* Controls */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
