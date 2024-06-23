import Canvas from "@/app/components/Canvas";
import Footer from "@/app/components/Footer";
import { PixelType } from "@/app/lib/definitions";
import { fetchPixels } from "@/app/lib/getdata";
import Header from "@/app/components/Header";

export default async function Index() {
  const pixelData: PixelType[] = await fetchPixels();

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <Header
        tooltip="Dashboard"
        link="/dashboard"
        imageSource="/images/dashboard.svg"
      />
      <div className="animate-in mb flex max-w-4xl flex-1 flex-col gap-20 px-3 opacity-0">
        <main className="flex flex-1 flex-col gap-6">
          <Canvas pixelData={pixelData} showOverlay={false} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
