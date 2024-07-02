import { PixelType } from "@/app/lib/definitions";

/**
 *
 * Pixel component to render a single pixel on the screen.
 * @param pixel The pixel data to be rendered.
 *
 * @returns The JSX element representing the pixel.
 */

export default function Pixel({ pixel }: { pixel: PixelType }): JSX.Element {
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
