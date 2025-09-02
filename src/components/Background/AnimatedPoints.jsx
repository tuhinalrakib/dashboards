"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export function AnimatedPoints() {
  const pointsRef = useRef();

  const points = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 500; i++) {
      temp.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ));
    }
    return temp;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.001;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <Points ref={pointsRef} positions={points} stride={3} frustumCulled>
        <PointMaterial color="white" size={0.05} sizeAttenuation />
      </Points>
    </>
  );
}
