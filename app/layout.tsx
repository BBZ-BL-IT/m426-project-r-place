import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "r/Place",
  description: "A school project to recreate r/Place",
};

/**
 * Root layout for the application
 * @param {React.ReactNode} children The children to render
 * @returns {JSX.Element} JSX.Element - The rendered layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="flex min-h-screen flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
