"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, INVERTED_ICONS } from "@/lib/data/projects";

export default function Projects() {
  return (
    <section className="mt-4 grid grid-cols-12 gap-4">
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="col-span-12 md:col-span-4"
        >
          <Link
            href={project.url}
            target="_blank"
            className="hover-card group relative block h-full rounded-xl p-8 transition-transform hover:-translate-y-1"
          >
            <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-white">
              {project.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              {project.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-3">
              {project.stack.map((tech, i) => (
                <div key={i} className="relative h-5 w-5">
                  <Image
                    src={`/${tech}`}
                    alt="tech"
                    fill
                    className={`object-contain opacity-60 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 ${
                      INVERTED_ICONS.includes(tech) ? "invert" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
