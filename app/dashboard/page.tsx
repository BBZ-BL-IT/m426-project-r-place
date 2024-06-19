import AuthButton from "@/app/components/AuthButton";
import Editor from "@/app/components/Editor";
import NavButton from "@/app/components/NavButton";
import { PixelType } from "@/app/lib/definitions";
import { fetchPixels } from "@/app/lib/getdata";
import { createClient } from "@/app/lib/supabase/server";
import { redirect } from "next/navigation";

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
      <div className="w-full">
        <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
          <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
            <NavButton tooltip="Home" link="/" imageSource="/images/home.svg" />
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="animate-in flex max-w-4xl flex-1 flex-col gap-20 px-3 opacity-0">
        <main className="flex flex-1 flex-col gap-6">
          <Editor pixelData={pixelData} />
        </main>
      </div>

      <footer className="flex w-full justify-center border-t border-t-foreground/10 p-8 text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
