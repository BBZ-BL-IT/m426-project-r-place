"use client";

import Canvas from "@/app/components/Canvas";
import { PixelType } from "@/app/lib/definitions";
import { useState } from "react";
import { CirclePicker } from "react-color";
import AdminComponent from "@/app/components/AdminComponent";

export default function Editor({ pixelData }: { pixelData: PixelType[] }) {
  const [hex, setHex] = useState("#000000");

  const colors = [
    "#e6194b",
    "#800000",
    "#f58231",
    "#911eb4",
    "#f032e6",
    "#e6beff",
    "#fabebe",
    "#46f0f0",
    "#008080",
    "#4363d8",
    "#000075",
    "#aaffc3",
    "#3cb44b",
    "#bcf60c",
    "#ffe119",
    "#808000",
    "#9a6324",
    "#fffac8",
    "#ffd8b1",
    "#808080",
    "#ffffff",
    "#000000",
  ];

  const handlePixelUpdate = (pixel: PixelType) => {
    console.log("Pixel Values:", "x:", pixel.x, "y:", pixel.y, "color:", hex);
    // Connection to DB --> follows in Sprint 2
  };

  return (
    <div className="flex flex-row">
      <Canvas
        pixelData={pixelData}
        showOverlay={true}
        onPixelClick={handlePixelUpdate}
      />
      <div className="ml-20 content-center">
        <CirclePicker
          className="rounded-2xl bg-gray-200 pl-5 pt-5 dark:bg-gray-700"
          colors={colors}
          color={hex}
          circleSize={32}
          onChange={(color) => {
            setHex(color.hex);
          }}
        />
        <AdminComponent />
      </div>
    </div>
  );
}
