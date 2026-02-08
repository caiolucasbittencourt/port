"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// social media
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/caiolucasbittencourt/",
    icon: "/linkedin.png",
    color: "#0077b5",
  },
  {
    name: "GitHub",
    url: "https://github.com/caiolucasbittencourt",
    icon: "/githubdark.svg",
    invert: true,
  },
  {
    name: "Discord",
    url: "https://discord.gg/programador",
    icon: "/discord.svg",
    color: "#5865F2",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5599996513294",
    icon: "/whatsapp.png",
    color: "#25D366",
  },
];

// technologies
const techs = [
  "html.svg",
  "css.svg",
  "javascript.svg",
  "typescript.svg",
  "react.svg",
  "nextjs.png",
  "vuejs.svg",
  "nuxtjs.svg",
  "angularjs.svg",
  "tailwindcss.svg",
  "nodejs.png",
  "expressjs.png",
  "graphql.svg",
  "postgresql.svg",
  "mysql.svg",
  "mongodb.svg",
  "git.svg",
  "vite.png",
  "figma.svg",
];

export default function Hero() {
  return (
    <section className="space-y-4">
      {/* Grid */}
      <div className="grid grid-cols-12 gap-4">
        {socialLinks.map((link, index) => (
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
              className="hover-card flex items-center justify-center rounded-xl p-6 group h-full relative overflow-hidden hover:!border-[var(--hover-color)] transition-colors duration-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: link.color || "#ffffff" }}
              />
              <div className="relative h-10 w-10">
                <Image
                  src={link.icon}
                  alt={link.name}
                  fill
                  className={`object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 ${link.invert ? "invert" : ""}`}
                />
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-12 hover-card rounded-xl p-8 text-justify"
        >
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Oi, meu nome é <span className="text-white font-medium">Caio</span>!
            Eu sou brasileiro, graduando em{" "}
            <span className="text-white font-medium">
              Análise e Desenvolvimento de Sistemas
            </span>{" "}
            e{" "}
            <span className="text-white font-medium">
              Desenvolvedor Full Stack
            </span>{" "}
            focado na construção de aplicações web completas, escaláveis e de
            alto desempenho.
            <br />
            <br />
            Domino o ecossistema{" "}
            <span className="text-white font-medium">
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
