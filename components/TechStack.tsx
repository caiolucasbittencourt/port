"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import {
  TECHNOLOGIES,
  formatTechName,
  isInvertedIcon,
} from "@/lib/data/tech-stack";

export default function TechStack() {
  const [isOpen, setIsOpen] = useState(false);

  // scroll block
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* main */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        onClick={() => setIsOpen(true)}
        className="hover-card group relative col-span-12 mx-auto mt-4 w-full max-w-[calc(100vw-2rem)] cursor-pointer overflow-hidden rounded-xl p-8"
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

      {/* modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 shadow-2xl"
            >
              {/* close buttons */}
              <div className="sticky top-0 z-10 mb-2 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer rounded-full border border-white/5 bg-white/5 p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* grid */}
              <div className="grid grid-cols-3 gap-4 pt-2 sm:grid-cols-4 md:grid-cols-5">
                {TECHNOLOGIES.map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="relative h-12 w-12">
                      <Image
                        src={`/${tech}`}
                        alt={tech}
                        fill
                        className={`object-contain drop-shadow-lg ${
                          isInvertedIcon(tech) ? "invert" : ""
                        }`}
                      />
                    </div>
                    <span className="text-center text-xs font-medium text-gray-300 sm:text-sm">
                      {formatTechName(tech)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
