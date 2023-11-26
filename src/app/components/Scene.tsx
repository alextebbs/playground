"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Wireframe } from "@react-three/drei";

interface SceneProps {
  behind?: boolean;
  isErrorPage?: boolean;
}

interface RingProps extends SceneProps {}

const Ring: React.FC<RingProps> = (props) => {
  const { isErrorPage } = props;

  const meshRef = useRef<THREE.Group>(null);
  const innerMeshRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const scrollY = window.scrollY;

    console.log(scrollY);

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y += 0.05 * delta;
    }

    if (meshRef.current) {
      meshRef.current.rotation.y = scrollY * 0.005;
    }
  });

  return (
    <group rotation={[0, 0, 0]} ref={meshRef}>
      <group rotation={[0, -4, 0]} ref={innerMeshRef}>
        <group rotation={[-6.8, 0, 0]}>
          <mesh>
            {isErrorPage ? (
              <torusKnotGeometry args={[320, 40, 120, 6]} />
            ) : (
              <torusGeometry args={[420, 40, 10, 40]} />
            )}
            <meshBasicMaterial color="#000" />
            <Wireframe
              thickness={0.025}
              stroke={isErrorPage ? "#f00" : "#0f0"}
              // simplify={true}
              squeeze={true}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
};

export const Scene: React.FC<SceneProps> = (props) => {
  const { behind, isErrorPage = false } = props;

  return (
    <Canvas
      orthographic
      gl={{ antialias: true }}
      linear={true}
      flat={true}
      legacy={true}
      camera={{
        near: !behind ? 0 : 500,
        far: !behind ? 500 : 1000,
        position: [0, 0, -500],
      }}
    >
      <Ring isErrorPage={isErrorPage} />
    </Canvas>
  );
};
