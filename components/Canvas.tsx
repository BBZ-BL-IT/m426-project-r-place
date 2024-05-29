import Pixel from "@/components/Pixel";
import { Tooltip } from "@nextui-org/tooltip";

export default function Canvas({ pixelData }: { pixelData: any[] }) {
  const style = {
    width: "512px",
    height: "512px",
    backgroundColor: "white",
  };
  return (
    <Tooltip content="Log in to edit canvas!">
      <div className="relative" style={style}>
        {pixelData.map((pixel, index) => (
          <Pixel key={index} color={pixel.color} x={pixel.x} y={pixel.y} />
        ))}
      </div>
    </Tooltip>
  );
}
