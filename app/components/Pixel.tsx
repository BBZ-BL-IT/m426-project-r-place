import { PixelType } from "@/app/lib/definitions";

/**
 * Renders a single pixel on the canvas.
 * @param pixel The pixel object to render.
 * @returns {JSX.Element} The rendered Pixel component
 */
export default function Pixel({ pixel }: { pixel: PixelType }) {
  /**
   * Inline style object for positioning and coloring the pixel
   */
  const style = {
    left: `${pixel.x * 8}px`,
    top: `${pixel.y * 8}px`,
    backgroundColor: pixel.color,
  };

  /**
   * Return a div element representing the pixel
   */
  return <div className="absolute h-2 w-2" style={style}></div>;
}
