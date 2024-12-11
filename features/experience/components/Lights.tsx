"use client";

type LightsProps = {
  DLPosY: number;
  DLPosZ: number;
  DLPosX: number;
  DLColor: string;
  DLIntensity: number;
  ALColor: string;
  ALIntensity: number;
};

export default function Lights({
  DLColor,
  DLIntensity,
  DLPosX,
  DLPosY,
  DLPosZ,
  ALColor,
  ALIntensity,
}: LightsProps) {
  return (
    <>
      <ambientLight intensity={ALIntensity} args={[ALColor]} />
      <directionalLight
        args={[DLColor, DLIntensity]}
        position={[DLPosX, DLPosY, DLPosZ]}
      />
    </>
  );
}
