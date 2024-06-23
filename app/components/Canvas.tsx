"use client";

import Overlay from "@/app/components/Overlay";
import Pixel from "@/app/components/Pixel";
import { CanvasProps, PixelType } from "@/app/lib/definitions";
import { Tooltip } from "@nextui-org/tooltip";

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
      className="container relative border border-black [box-shadow:0_0_100px_rgba(0,_0,_0,_0.2)] dark:border-white dark:[box-shadow:0_0_100px_rgba(255,_255,_255,_0.3)]"
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
