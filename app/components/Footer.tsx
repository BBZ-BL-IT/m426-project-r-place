export default function Footer() {
  return (
    <footer className="flex w-full justify-center border-t border-t-foreground/10 p-8 text-center text-xs">
      <p className="flex w-1/3 flex-row justify-evenly">
        Created by{" "}
        <a
          href="https://github.com/cemmakkaya"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Cem Akkaya
        </a>
        <a
          href="https://github.com/lorenzboss"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Lorenz Boss
        </a>
        <a
          href="https://github.com/levin-fankhauser"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Levin Fankhauser
        </a>
        <a
          href="https://github.com/TobiTopp"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Tobias Topp
        </a>
      </p>
    </footer>
  );
}
