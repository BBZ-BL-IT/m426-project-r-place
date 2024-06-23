import AuthButton from "@/app/components/AuthButton";
import Canvas from "@/app/components/Canvas";
import Footer from "@/app/components/Footer";
import NavButton from "@/app/components/NavButton";
import { PixelType } from "@/app/lib/definitions";
import { fetchPixels } from "@/app/lib/getdata";

export default async function Index() {
  const pixelData: PixelType[] = await fetchPixels();

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <NavButton
            tooltip="Dashboard"
            link="/dashboard"
            imageSource="/images/dashboard.svg"
          />
          <AuthButton />
        </div>
      </nav>

      <div className="animate-in mb flex max-w-4xl flex-1 flex-col gap-20 px-3 opacity-0">
        <main className="flex flex-1 flex-col gap-6">
          <Canvas pixelData={pixelData} showOverlay={false} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
