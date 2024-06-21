import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import NavButton from "@/app/components/NavButton";
import AuthButton from "@/app/components/AuthButton";
import { NavButtonProps } from "@/app/lib/definitions";

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
