import { Tooltip } from "@/node_modules/@nextui-org/tooltip";
import Link from "@/node_modules/next/link";

interface NavButtonProps {
  tooltip: string;
  link: string;
  imageSource: string;
}

export default function NavButton({
  tooltip,
  link,
  imageSource,
}: NavButtonProps) {
  return (
    <Tooltip content={tooltip} placement="right">
      <Link className="h-9 w-9 rounded bg-gray-200 p-1 dark:invert" href={link}>
        <img src={imageSource} alt="dashboard" />
      </Link>
    </Tooltip>
  );
}
