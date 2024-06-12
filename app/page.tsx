import AuthButton from "@/app/components/AuthButton";
import Canvas from "@/app/components/Canvas";
import { PixelType } from "@/app/lib/definitions";
import { fetchPixels } from "@/app/lib/getdata";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";

export default async function Index() {
  const pixelData: PixelType[] = await fetchPixels();

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <Tooltip content="Dashboard" placement="right">
            <Link href="/dashboard">
              <img
                className="h-5 w-5 dark:invert"
                src="/images/home.svg"
                alt="dashboard"
              />
            </Link>
          </Tooltip>

          <AuthButton />
        </div>
      </nav>

      <div className="animate-in mb flex max-w-4xl flex-1 flex-col gap-20 px-3 opacity-0">
        <main className="flex flex-1 flex-col gap-6">
          <Canvas pixelData={pixelData} showOverlay={false} />
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
