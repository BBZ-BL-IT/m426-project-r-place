import { PixelType } from "@/app/lib/definitions";

export default function Pixel({ pixel }: { pixel: PixelType }) {
  const style = {
    left: `${pixel.x * 8}px`,
    top: `${pixel.y * 8}px`,
    backgroundColor: pixel.color,
  };

  return <div className="absolute h-2 w-2" style={style}></div>;
}
