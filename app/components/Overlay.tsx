import { PixelType } from "@/app/lib/definitions";
import { useState } from "react";

interface OverlayProps {
  onPixelClick: (pixel: PixelType) => void;
}

export default function Overlay({ onPixelClick }: OverlayProps) {
  const [hoveredPixel, setHoveredPixel] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleMouseEnter = (x: number, y: number) => {
    setHoveredPixel({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredPixel(null);
  };

  const handleClick = (x: number, y: number) => {
    onPixelClick({ id: 0, x, y, color: "" });
  };

  const grid = [];
  for (let y = 0; y < 64; y++) {
    for (let x = 0; x < 64; x++) {
      const isHovered =
        hoveredPixel && hoveredPixel.x === x && hoveredPixel.y === y;
      grid.push(
        <div
          key={`${x}-${y}`}
          className={`absolute w-2 h-2 border ${isHovered ? "bg-gray-400" : ""}`}
          style={{ left: `${x * 8}px`, top: `${y * 8}px` }}
          onMouseEnter={() => handleMouseEnter(x, y)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(x, y)}
        />,
      );
    }
  }

  return <div className="absolute inset-0">{grid}</div>;
}
