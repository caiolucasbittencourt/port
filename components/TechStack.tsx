"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

// technologies
const techs = [
  "HTML.svg",
  "CSS.svg",
  "javaScript.svg",
  "typeScript.svg",
  "react.svg",
  "nextjs.png",
  "vuejs.svg",
  "nuxtjs.svg",
  "angularjs.svg",
  "tailwindCSS.svg",
  "nodejs.png",
  "expressjs.png",
  "graphQL.svg",
  "postgreSQL.svg",
  "mySQL.svg",
  "mongoDB.svg",
  "git.svg",
  "vite.png",
  "Jest.svg",
  "figma.svg",
];

const formatName = (filename: string) => {
  const name = filename.split(".")[0];
  if (name === "githubdark") return "GitHub";
  return name.charAt(0).toUpperCase() + name.slice(1).replace("js", ".js");
};

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

  const isInvertIcon = (techName: string) =>
    [
      "expressjs.png",
      "githubdark.svg",
      "mySQL.svg",
      "graphQL.svg",
      "nextjs.png",
    ].some((t) => techName.includes(t));

  return (
    <>
      {/* main */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onClick={() => setIsOpen(true)}
        className="col-span-12 hover-card rounded-xl p-8 overflow-hidden group mt-4 w-full max-w-[calc(100vw-2rem)] mx-auto cursor-pointer relative"
      >
        {/* scroll */}
        <div className="flex w-max gap-8 md:gap-12 animate-scroll group-hover:[animation-play-state:paused]">
          {[...techs, ...techs].map((tech, i) => (
            <div
              key={i}
              className="relative h-8 w-8 md:h-10 md:w-10 flex-shrink-0"
            >
              <Image
                src={`/${tech}`}
                alt="Tech icon"
                fill
                className={`object-contain transition-all duration-300 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 ${
                  isInvertIcon(tech) ? "invert" : ""
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              {/* close buttons */}
              <div className="flex justify-end mb-2 sticky top-0 z-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white border border-white/5 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 pt-2">
                {techs.map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="relative h-12 w-12">
                      <Image
                        src={`/${tech}`}
                        alt={tech}
                        fill
                        className={`object-contain drop-shadow-lg ${
                          isInvertIcon(tech) ? "invert" : ""
                        }`}
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 font-medium text-center">
                      {formatName(tech)}
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
