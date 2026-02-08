import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caio Bittencourt | Desenvolvedor Full Stack",
  description: "Portfólio de Caio Bittencourt, Desenvolvedor Full Stack.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#050505] text-gray-300 overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
