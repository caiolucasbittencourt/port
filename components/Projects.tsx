"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "My Bookshelf",
    desc: "Estante de livros virtual.",
    url: "https://github.com/caiolucasbittencourt/mybookshelf",
    stack: ["react.svg", "javascript.svg", "vite.png", "tailwindcss.svg"],
  },
  {
    title: "TCG",
    desc: "Jogo de cartas online.",
    url: "https://www.yugiohrpgonline.com/login",
    stack: ["react.svg", "typescript.svg", "tailwindcss.svg"],
  },
  {
    title: "Portfólio",
    desc: "Meu portfólio pessoal",
    url: "https://github.com/caiolucasbittencourt/port",
    stack: ["nextjs.png", "react.svg", "typescript.svg", "tailwindcss.svg"],
  },
];

export default function Projects() {
  return (
    <section className="grid grid-cols-12 gap-4 mt-4">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="col-span-12 md:col-span-4"
        >
          <Link
            href={project.url}
            target="_blank"
            className="hover-card block h-full rounded-xl p-8 relative group hover:-translate-y-1 transition-transform"
          >
            <h3 className="mb-2 font-bold text-lg text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="mb-6 text-sm text-gray-500 leading-relaxed">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.stack.map((tech, i) => (
                <div key={i} className="relative h-5 w-5">
                  <Image
                    src={`/${tech}`}
                    alt="tech"
                    fill
                    className={`object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all ${
                      ["nextjs.png"].includes(tech) ? "invert" : ""
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
