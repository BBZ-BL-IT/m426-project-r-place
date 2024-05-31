"use client";

import Canvas from "@/app/components/Canvas";
import { PixelType } from "@/app/lib/definitions";

export default function Editor({ pixelData }: { pixelData: PixelType[] }) {
  const handlePixelUpdate = (pixel: PixelType) => {
    console.log("Updated Pixel showed in Editor Component:", pixel);
    // Connection to DB --> follows in Sprint 2
  };

  return (
    <Canvas
      pixelData={pixelData}
      showOverlay={true}
      onPixelClick={handlePixelUpdate}
    />
  );
}
