"use client";

import { Canvas } from "@react-three/fiber";
import { AnimatedPoints } from "./AnimatedPoints";

export default function BackgroundAnimation() {
  return (
    <Canvas
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      <AnimatedPoints />
    </Canvas>
  );
}
