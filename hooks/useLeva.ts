"use client";

import { useMemo } from "react";
import { useControls, folder } from "leva";

export default function useLeva() {
  const options = useMemo(() => {
    return {
      lights: folder({
        directionalLight: folder({
          DLPosX: { value: 5, min: 0, max: 30, step: 0.1 },
          DLPosY: { value: 15, min: 0, max: 30, step: 0.1 },
          DLPosZ: { value: 5, min: 0, max: 30, step: 0.1 },
          DLColor: "#ffffff",
          DLIntensity: { value: 2.5, min: 0, max: 5, step: 0.01 },
        }),
        ambientLight: folder({
          ALColor: "#ffffff",
          ALIntensity: { value: 1, min: 0, max: 1, step: 0.01 },
        }),
      }),

      objects: folder({
        gallery: folder({
          GaPosX: { value: 0, min: -10, max: 10, step: 0.01 },
          GaPosY: { value: 3.5, min: -10, max: 10, step: 0.01 },
          GaPosZ: { value: 0, min: -10, max: 10, step: 0.01 },
        }),
        plane: folder({
          PlPosX: { value: 0, min: -10, max: 10, step: 0.01 },
          PlPosY: { value: 0.1, min: -10, max: 10, step: 0.01 },
          PlPosZ: { value: -9, min: -10, max: 10, step: 0.01 },
        }),
      }),
    };
  }, []);

  const controlVals = useControls(options);

  return controlVals;
}
