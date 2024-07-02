import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import { NavButtonProps } from "@/app/lib/definitions";

/**
 * NavButton component that renders a navigation button with a tooltip.
 *
 * @param tooltip - The text to display inside the tooltip.
 * @param link - The URL to navigate to when the button is clicked.
 * @param imageSource - The source URL of the image to display on the button.
 */
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
