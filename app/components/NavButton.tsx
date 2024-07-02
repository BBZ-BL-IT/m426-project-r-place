import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import { NavButtonProps } from "@/app/lib/definitions";

/**
 * The navigation button component that displays a tooltip and navigates to a link.
 * @param {NavButtonProps} props The properties for the NavButton component
 * tooltip: The text to display inside the tooltip of the navigation button.
 * link: The URL to navigate to when the navigation button is clicked.
 * imageSource: The source URL of the image to display on the navigation button.
 * @returns {JSX.Element} The rendered NavButton component
 * @constructor
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
