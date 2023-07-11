"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Wireframe } from "@react-three/drei";

interface SceneProps {
  behind?: boolean;
}

interface RingProps extends SceneProps {}

const Ring: React.FC<RingProps> = (props) => {
  const meshRef = useRef<THREE.Group>(null);

  const args = [420, 40, 10, 30];

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05 * delta;
    }
  });

  return (
    <group rotation={[0, -4, 0]} ref={meshRef}>
      <group rotation={[-0.5, 0, 0]}>
        <mesh>
          <torusGeometry args={[...args]} />
          <meshBasicMaterial color="#000" />
          <Wireframe thickness={0.0075} stroke={"#0f0"} />
        </mesh>
      </group>
    </group>
  );
};

export const Scene: React.FC<SceneProps> = (props) => {
  const { behind } = props;

  return (
    <Canvas
      orthographic
      gl={{ antialias: true }}
      camera={{
        near: !behind ? 0 : 500,
        far: !behind ? 500 : 1000,
        position: [0, 0, -500],
      }}
    >
      <Ring behind={behind} />
    </Canvas>
  );
};
