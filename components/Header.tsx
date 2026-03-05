"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Block scroll when modal is open
  useEffect(() => {
    if (isPhotoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPhotoOpen]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 px-4 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-[#050505]/60 py-2 backdrop-blur-xl"
            : "border-transparent py-4"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPhotoOpen(true)}
              className="relative h-10 w-10 cursor-pointer overflow-hidden rounded-full border border-white/10 transition-all duration-300 hover:scale-105 hover:border-white"
            >
              <Image
                src="/me.png"
                alt="Caio Bittencourt"
                fill
                className="object-cover"
              />
            </button>
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-white transition-colors hover:text-gray-300"
            >
              {SITE_CONFIG.shortName}
            </Link>
          </div>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-black/20 transition-all hover:border-white/50 hover:bg-white/10"
          >
            View CV
          </a>
        </div>
      </header>

      {/* Photo Modal */}
      <AnimatePresence>
        {isPhotoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              {/* Close button */}
              <button
                onClick={() => setIsPhotoOpen(false)}
                className="absolute -top-3 -right-3 z-10 cursor-pointer rounded-full border border-white/20 bg-[#0A0A0A] p-2 text-gray-400 transition-colors hover:border-white/40 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Photo */}
              <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:h-56 sm:w-56">
                <Image
                  src="/me.png"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
