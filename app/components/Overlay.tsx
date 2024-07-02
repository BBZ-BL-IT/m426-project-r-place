import { OverlayProps } from "@/app/lib/definitions";
import { useState } from "react";

/**
 * Renders an overlay grid for interacting with individual pixels.
 * @param onPixelClick Callback function when a pixel is clicked.
 * @returns {JSX.Element} The rendered Overlay component.
 * @constructor
 */
export default function Overlay({ onPixelClick }: OverlayProps) {
  const [hoveredPixel, setHoveredPixel] = useState<{
    x: number;
    y: number;
  } | null>(null);

  /**
   * Handles mouse enter event on a pixel.
   * @param x The x-coordinate of the pixel.
   * @param y The y-coordinate of the pixel.
   */
  const handleMouseEnter = (x: number, y: number): void => {
    setHoveredPixel({ x, y });
  };

  /** Handles mouse leave event on a pixel. */
  const handleMouseLeave = (): void => {
    setHoveredPixel(null);
  };

  /**
   * Handles click event on a pixel.
   * @param x The x-coordinate of the clicked pixel.
   * @param y The y-coordinate of the clicked pixel.
   */
  const handleClick = (x: number, y: number): void => {
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
          className={`absolute h-2 w-2 border-l border-t border-gray-200 ${isHovered ? "bg-gray-400" : ""}`}
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
