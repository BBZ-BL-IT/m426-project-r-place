import Canvas from "@/app/components/Canvas";
import AuthButton from "@/app/components/AuthButton";

export default async function Index() {
  const pixelData = [
    { color: "#1da1f2", x: 34, y: 25 },
    { color: "#1da1f2", x: 35, y: 24 },
    { color: "#1da1f2", x: 36, y: 24 },
    { color: "#1da1f2", x: 37, y: 25 },
    { color: "#1da1f2", x: 38, y: 26 },
    { color: "#1da1f2", x: 38, y: 27 },
    { color: "#1da1f2", x: 37, y: 28 },
    { color: "#1da1f2", x: 36, y: 29 },
    { color: "#1da1f2", x: 35, y: 30 },
    { color: "#1da1f2", x: 34, y: 31 },
    { color: "#ef1515", x: 33, y: 32 },
    { color: "#ef1515", x: 33, y: 26 },
    { color: "#ef1515", x: 32, y: 25 },
    { color: "#ef1515", x: 31, y: 24 },
    { color: "#ef1515", x: 30, y: 24 },
    { color: "#ef1515", x: 29, y: 25 },
    { color: "#ef1515", x: 28, y: 26 },
    { color: "#ef1515", x: 28, y: 27 },
    { color: "#ef1515", x: 29, y: 28 },
    { color: "#ef1515", x: 30, y: 29 },
    { color: "#ef1515", x: 31, y: 30 },
    { color: "#ef1515", x: 32, y: 31 },
  ];
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm">
          <AuthButton />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3 mb">
        <main className="flex-1 flex flex-col gap-6">
          <Canvas pixelData={pixelData} />
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
