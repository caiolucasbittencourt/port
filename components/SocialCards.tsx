"use client";

import Image from "next/image";
import Link from "next/link";
import { SOCIAL_CARDS } from "@/lib/constants";

export default function SocialCards() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {SOCIAL_CARDS.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            style={{ "--hover-color": link.color } as React.CSSProperties}
            className="hover-card group relative flex h-full items-center justify-center overflow-hidden rounded-xl p-6 transition-colors duration-300 hover:border-(--hover-color)!"
          >
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
              style={{ backgroundColor: link.color || "#ffffff" }}
            />
            <div className="relative h-10 w-10">
              <Image
                src={link.icon}
                alt={link.name}
                fill
                className={`object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 ${link.invert ? "invert" : ""}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
