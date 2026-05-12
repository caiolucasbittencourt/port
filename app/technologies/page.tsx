"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TECHNOLOGY_CATEGORIES, isInvertedIcon } from "@/lib/data/technologies";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function getTechFallbackLabel(name: string): string {
  const words = name.split(" ").filter(Boolean);
  if (words.length === 1) {
    return name.slice(0, 2).toUpperCase();
  }

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function TechnologyItem({ name, icon }: { name: string; icon: string }) {
  const [hasIconError, setHasIconError] = useState(false);

  return (
    <div className="hover-card group flex items-center gap-3 rounded-lg px-3 py-2 hover:border-white/25 hover:bg-white/4">
      <div className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-black/30">
        {hasIconError ? (
          <span className="text-[10px] font-semibold tracking-wide text-gray-400">
            {getTechFallbackLabel(name)}
          </span>
        ) : (
          <Image
            src={`/${icon.toLowerCase()}`}
            alt={name}
            fill
            sizes="28px"
            onError={() => setHasIconError(true)}
            className={`object-contain p-1 transition-all duration-300 group-hover:scale-105 ${
              isInvertedIcon(icon) ? "invert" : ""
            }`}
          />
        )}
      </div>

      <span className="truncate text-sm text-gray-300 transition-colors group-hover:text-white">
        {name}
      </span>
    </div>
  );
}

export default function TechnologiesPage() {
  return (
    <main className="relative z-10 flex min-h-screen w-full flex-col px-4">
      <div className="grid-bg pointer-events-none fixed inset-0" />

      <Header />

      <div className="mx-auto w-full max-w-4xl grow pt-24 pb-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          {TECHNOLOGY_CATEGORIES.map((category) => (
            <motion.section
              key={category.title}
              variants={itemVariants}
              className="hover-card rounded-xl p-6 sm:p-8"
            >
              <div className="mb-5">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {category.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.technologies.map((tech) => (
                  <TechnologyItem
                    key={`${category.title}-${tech.name}`}
                    name={tech.name}
                    icon={tech.icon}
                  />
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>

        <Footer />
      </div>
    </main>
  );
}
