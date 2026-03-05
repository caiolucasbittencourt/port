"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_CARDS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="space-y-4">
      {/* Grid */}
      <div className="grid grid-cols-12 gap-4">
        {SOCIAL_CARDS.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="col-span-6 md:col-span-3"
          >
            <Link
              href={link.url}
              target="_blank"
              style={{ "--hover-color": link.color } as React.CSSProperties}
              className="hover-card group relative flex h-full items-center justify-center overflow-hidden rounded-xl p-6 transition-colors duration-300 hover:!border-[var(--hover-color)]"
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
          </motion.div>
        ))}

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="hover-card col-span-12 rounded-xl p-8 text-justify"
        >
          <p className="text-lg leading-relaxed font-light text-gray-500 md:text-xl">
            Oi, meu nome é <span className="font-medium text-white">Caio</span>!
            Eu sou graduando em{" "}
            <span className="font-medium text-white">
              Análise e Desenvolvimento de Sistemas
            </span>{" "}
            e{" "}
            <span className="font-medium text-white">
              Desenvolvedor Full Stack
            </span>{" "}
            focado na construção de aplicações web completas, escaláveis e de
            alto desempenho.
            <br />
            <br />
            Domino o ecossistema{" "}
            <span className="font-medium text-white">
              JavaScript/TypeScript
            </span>{" "}
            combinando interfaces modernas com lógica robusta do lado do
            servidor e bancos de dados relacionais.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
