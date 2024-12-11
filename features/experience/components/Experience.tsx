"use client";

import { useGLTF } from "@react-three/drei";
import useLeva from "@/hooks/useLeva";
import Lights from "./Lights";
import Images from "./Images";
import useCameraAnimation from "@/hooks/useCameraAnimation";
import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  const isOrbit = false;
  const { scene } = useGLTF("/round-gallery.glb");
  const { GaPosX, GaPosY, GaPosZ, ...values } = useLeva();
  useCameraAnimation();

  return (
    <>
      {isOrbit && <OrbitControls />}
      <Lights {...values} />
      <group position={[GaPosX, GaPosY, GaPosZ]}>
        <primitive object={scene} />
      </group>
      <Images {...values} />
    </>
  );
}
