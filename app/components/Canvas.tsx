"use client";

import Overlay from "@/app/components/Overlay";
import Pixel from "@/app/components/Pixel";
import { PixelType } from "@/app/lib/definitions";
import { Tooltip } from "@nextui-org/tooltip";

interface CanvasProps {
  pixelData: PixelType[];
  showOverlay: boolean;
}

export default function Canvas({ pixelData, showOverlay }: CanvasProps) {
  const style = {
    width: "512px",
    height: "512px",
    backgroundColor: "white",
  };

  const handlePixelClick = (pixel: PixelType) => {
    // Will follow in Sprint 2
    console.log("Pixel clicked:", "X:", pixel.x, "Y:", pixel.y);
  };

  const canvasContent = (
    <div className="relative" style={style}>
      {pixelData.map((pixel) => (
        <Pixel key={pixel.id} pixel={pixel} />
      ))}
      {showOverlay && <Overlay onPixelClick={handlePixelClick} />}
    </div>
  );

  return showOverlay ? (
    canvasContent
  ) : (
    <Tooltip content="Log in or go to Dashboard to edit pixels!">
      {canvasContent}
    </Tooltip>
  );
}
