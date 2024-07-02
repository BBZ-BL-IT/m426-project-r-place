import NavButton from "@/app/components/NavButton";
import AuthButton from "@/app/components/AuthButton";
import { NavButtonProps } from "@/app/lib/definitions";



/**
 * Header component that renders a navigation bar with a navigation button and an authentication button.
 *
 * @param tooltip The text to display inside the tooltip of the navigation button.
 * @param link The URL to navigate to when the navigation button is clicked.
 * @param imageSource The source URL of the image to display on the navigation button.
 * @constructor
 */
export default function Header({
                                   tooltip,
                                   link,
                                   imageSource,
                               }: NavButtonProps): JSX.Element {
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