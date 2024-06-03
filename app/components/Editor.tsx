"use client";

import Canvas from "@/app/components/Canvas";
import { PixelType } from "@/app/lib/definitions";
import { hsvaToHex } from "@/node_modules/@uiw/color-convert";
import Colorful from "@/node_modules/@uiw/react-color-colorful";
import { useState } from "react";

export default function Editor({ pixelData }: { pixelData: PixelType[] }) {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });

  const handlePixelUpdate = (pixel: PixelType) => {
    console.log(
      "Pixel Values:",
      "x:",
      pixel.x,
      "y:",
      pixel.y,
      "color:",
      hsvaToHex(hsva),
    );
    // Connection to DB --> follows in Sprint 2
  };

  return (
    <div className="flex flex-row">
      <Canvas
        pixelData={pixelData}
        showOverlay={true}
        onPixelClick={handlePixelUpdate}
      />
      <div className="content-center ml-40">
        <Colorful
          color={hsva}
          disableAlpha={true}
          onChange={(color) => {
            setHsva(color.hsva);
          }}
        />
      </div>
    </div>
  );
}
