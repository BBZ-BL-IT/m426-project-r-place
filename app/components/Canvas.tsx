"use client";

import Overlay from "@/app/components/Overlay";
import Pixel from "@/app/components/Pixel";
import { PixelType } from "@/app/lib/definitions";
import { Tooltip } from "@nextui-org/tooltip";

interface CanvasProps {
  pixelData: PixelType[];
  showOverlay: boolean;
  onPixelClick?: (pixel: PixelType) => void;
}

export default function Canvas({
  pixelData,
  showOverlay,
  onPixelClick,
}: CanvasProps) {
  const style = {
    width: "512px",
    height: "512px",
    backgroundColor: "white",
    paddingLeft: "512px",
    paddingBottom: "512px",
  };

  const handlePixelClick = (pixel: PixelType) => {
    if (onPixelClick) {
      onPixelClick(pixel);
    }
  };

  const canvasContent = (
    <div
      className="relative shadow-2xl border border-black dark:border-white dark:shadow-md dark:shadow-white container"
      style={style}
    >
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
