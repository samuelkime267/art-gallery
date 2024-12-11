"use client";

import { useMemo } from "react";
import fragmentShader from "../shaders/fragment.glsl";
import vertexShader from "../shaders/vertex.glsl";
import fieldImg from "@/assets/imgs/field.jpg";
import { useTexture } from "@react-three/drei";

type ImagesProps = {
  PlPosX: number;
  PlPosY: number;
  PlPosZ: number;
};

export default function Images({ PlPosX, PlPosY, PlPosZ }: ImagesProps) {
  const texture = useTexture(fieldImg.src);

  const uniforms = useMemo(() => {
    return {
      uTexture: { value: texture },
    };
  }, [texture]);
  return (
    <>
      <group position={[PlPosX, PlPosY, PlPosZ]}>
        <mesh>
          <shaderMaterial
            uniforms={uniforms}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
          />
          <planeGeometry args={[1, 1]} />
          {/* <meshBasicMaterial color={"red"} /> */}
        </mesh>
        <mesh position={[0, -0.58, 0]}>
          <boxGeometry args={[1.2, 0.1, 0.1]} />
          <meshBasicMaterial color={"black"} />
        </mesh>
      </group>
    </>
  );
}
