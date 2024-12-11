"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function useCameraAnimation() {
  const { camera } = useThree();

  useEffect(() => {
    window.addEventListener("click", () => {
      console.log(camera.position);
    });

    window.addEventListener("keydown", ({ key }) => {
      const cam = camera.position;
      const duration = 0.3;
      const maxRadius = 18;
      const camStep = 0.5;
      if (key === "w") {
        if (Math.abs(cam.z) > maxRadius) return;
        gsap.to(camera.position, {
          z: cam.z - camStep,
          duration,
        });
      }
      if (key === "s") {
        if (Math.abs(cam.z) > maxRadius) return;
        gsap.to(camera.position, {
          z: cam.z + camStep,
          duration,
        });
      }
      if (key === "a") {
        if (Math.abs(cam.x) > maxRadius) return;
        gsap.to(camera.position, {
          x: cam.x - camStep,
          duration,
        });
      }
      if (key === "d") {
        if (Math.abs(cam.x) > maxRadius) return;
        gsap.to(camera.position, {
          x: cam.x + camStep,
          duration,
        });
      }
    });
  }, [camera]);
}
