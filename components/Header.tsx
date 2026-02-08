"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050505]/60 border-b border-white/5 py-2"
          : "border-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-4xl flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 transition-all duration-300 group-hover:border-white">
            <Image
              src="/me.png"
              alt="Caio Bittencourt"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-lg tracking-tight text-white transition-colors group-hover:text-gray-300">
            Caio Bittencourt
          </span>
        </Link>

        <a
          href="/Caio Lucas Bittencourt - Desenvolvedor Full Stack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium bg-white/5 text-white border border-white/10 px-5 py-2 rounded-full hover:bg-white/10 hover:border-white/50 transition-all shadow-lg shadow-black/20"
        >
          View CV
        </a>
      </div>
    </header>
  );
}
