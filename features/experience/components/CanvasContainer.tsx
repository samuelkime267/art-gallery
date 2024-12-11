"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Stats } from "@react-three/drei";
import { Leva } from "leva";

export default function CanvasContainer() {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <Leva collapsed />
      <Canvas
        dpr={1}
        camera={{
          position: [0, 0, 0],
          rotation: [-Math.PI * 0.01, 0, 0],
          fov: 60,
          near: 0.001,
          far: 100,
        }}
      >
        <Stats />
        <Experience />
      </Canvas>
    </div>
  );
}
