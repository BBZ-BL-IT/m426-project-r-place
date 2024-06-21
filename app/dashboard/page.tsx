import Editor from "@/app/components/Editor";
import Footer from "@/app/components/Footer";
import { PixelType } from "@/app/lib/definitions";
import { fetchPixels } from "@/app/lib/getdata";
import { createClient } from "@/app/lib/supabase/server";
import { redirect } from "next/navigation";
import Header from "@/app/components/Header";

export default async function DashboardPage() {
  const supabase = createClient();
  const pixelData: PixelType[] = await fetchPixels();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <Header tooltip="Home" link="/" imageSource="/images/home.svg" />

      <div className="animate-in flex max-w-4xl flex-1 flex-col gap-20 px-3 opacity-0">
        <main className="flex flex-1 flex-col gap-6">
          <Editor pixelData={pixelData} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
