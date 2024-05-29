export default function Pixel({
  color,
  x,
  y,
}: {
  color: string;
  x: number;
  y: number;
}) {
  const style = {
    left: `${x * 8}px`,
    top: `${y * 8}px`,
    backgroundColor: color,
  };
  return <div className="absolute w-2 h-2" style={style}></div>;
}
