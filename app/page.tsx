import AuthButton from "@/app/components/AuthButton";
import Canvas from "@/app/components/Canvas";
import { PixelType } from "@/app/lib/definitions";
import { fetchPixels } from "@/app/lib/getdata";
import { Home } from "@/node_modules/@mui/icons-material";
import { redirect } from "@/node_modules/next/navigation";
import { Tooltip } from "@nextui-org/tooltip";

export default async function Index() {
  const pixelData: PixelType[] = await fetchPixels();

  const redirectToDashboard = async () => {
    "use server";

    return redirect("/dashboard");
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <form action={redirectToDashboard}>
            <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
              <Home className="text-white" />
            </button>
          </form>
          <AuthButton />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3 mb">
        <main className="flex-1 flex flex-col gap-6">
          <Tooltip content="Log in to edit pixels!">
            <Canvas pixelData={pixelData} />
          </Tooltip>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
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
