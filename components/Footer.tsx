"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-4 w-full max-w-4xl pb-8">
      <div className="flex items-center justify-between pt-4">
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          {"\u00A9"} {new Date().getFullYear()} Caio Bittencourt
        </p>

        <Link
          href="https://indique-um-amigo.hostgator.com.br/caiolucasbittencourt!4c06a1c3d1!a?locale=pt"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 text-xs text-gray-500 transition-colors hover:text-gray-300 sm:text-sm"
        >
          <span className="hidden sm:inline">
            {"Site r\u00E1pido e seguro? V\u00E1 de"}
          </span>
          <span className="relative h-4 w-20 sm:h-5 sm:w-24">
            <Image
              src="/hostgator.svg"
              alt="HostGator"
              fill
              className="object-contain brightness-0 invert transition-[filter] group-hover:brightness-100 group-hover:invert-0"
            />
          </span>
        </Link>
      </div>
    </footer>
  );
}
