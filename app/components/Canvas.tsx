import Pixel from "@/app/components/Pixel";
import { Tooltip } from "@nextui-org/tooltip";
import { PixelType } from "@/app/lib/definitions";

export default function Canvas({ pixelData }: { pixelData: PixelType[] }) {
  const style = {
    width: "512px",
    height: "512px",
    backgroundColor: "white",
  };

  return (
    <Tooltip content="Log in to edit canvas!">
      <div className="relative" style={style}>
        {pixelData.map((pixel) => (
          <Pixel key={pixel.id} pixel={pixel} />
        ))}
      </div>
    </Tooltip>
  );
}
