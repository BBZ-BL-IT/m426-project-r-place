import NavButton from "@/app/components/NavButton";
import AuthButton from "@/app/components/AuthButton";
import { NavButtonProps } from "@/app/lib/definitions";

/**
 * The header component that displays the navigation buttons and the AuthButton.
 * @param {NavButtonProps} props The properties for the Header component
 * tooltip: The text to display inside the tooltip of the navigation button.
 * link: The URL to navigate to when the navigation button is clicked.
 * imageSource: The source URL of the image to display on the navigation button.
 * @returns {JSX.Element} The rendered Header component
 * @constructor
 */
export default function Header({ tooltip, link, imageSource }: NavButtonProps) {
  return (
    <div className="w-full">
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <NavButton tooltip={tooltip} link={link} imageSource={imageSource} />
          <AuthButton />
        </div>
      </nav>
    </div>
  );
}
