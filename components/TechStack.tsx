"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TECHNOLOGIES, isInvertedIcon } from "@/lib/data/tech-stack";

export default function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="hover-card group relative col-span-12 mx-auto mt-4 w-full max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl p-8"
    >
      {/* scroll */}
      <div className="animate-scroll flex w-max gap-8 group-hover:[animation-play-state:paused] md:gap-12">
        {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
          <div
            key={i}
            className="relative h-8 w-8 flex-shrink-0 md:h-10 md:w-10"
          >
            <Image
              src={`/${tech}`}
              alt="Tech icon"
              fill
              className={`object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${
                isInvertedIcon(tech) ? "invert" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
