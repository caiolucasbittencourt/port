"use client";

import Image from "next/image";
import Link from "next/link";
import { SOCIAL_CARDS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-4 w-full max-w-4xl pb-8">
      <div className="flex items-center justify-between pt-4">
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Caio Bittencourt
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {SOCIAL_CARDS.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              className="relative h-5 w-5 opacity-50 transition-opacity hover:opacity-100"
            >
              <Image
                src={social.icon}
                alt={social.name}
                fill
                className={`object-contain ${social.invert ? "invert" : ""}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
