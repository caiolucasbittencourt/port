import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "Sherlock Holmes API",
    description:
      "API REST gratuita para citações, casos e personagens de Sherlock Holmes das obras em domínio público de Sir Arthur Conan Doyle.",
    url: "https://sherlockholmes-api.vercel.app/",
    stack: ["nodejs.png", "expressjs.png", "typescript.svg"],
  },
  {
    title: "Nox UI",
    description:
      "Uma coleção de componentes de interface de usuário (UI) de copiar e colar para React.",
    url: "https://github.com/caiolucasbittencourt/nox-ui",
    stack: ["nextjs.png", "react.svg", "typescript.svg", "tailwindcss.svg"],
  },
  {
    title: "Bookstore API",
    description:
      "Uma API REST construída com Node.js, Express e Mongoose. Este projeto serve como back-end para um sistema de livraria.",
    url: "https://github.com/caiolucasbittencourt/bookstore-api-express",
    stack: ["nodejs.png", "expressjs.png", "mongodb.svg", "jest.svg"],
  },
  {
    title: "Tesla Semi",
    description:
      "Projeto que une design (UX/UI) e desenvolvimento front-end. Uma proposta conceitual para o site do Tesla Semi, construída com Tailwind CSS.",
    url: "https://tesla-semi-rust.vercel.app/",
    stack: [""],
  },
  {
    title: "My Bookshelf",
    description:
      "Projeto pessoal construído para ser uma estante de livros virtual. Uma exploração de interações e animações com Framer Motion e design responsivo com Tailwind CSS.",
    url: "https://github.com/caiolucasbittencourt/mybookshelf",
    stack: [""],
  },
  {
    title: "DEVagas",
    description: "Newsletter de vagas de tecnologia.",
    url: "https://github.com/caiolucasbittencourt/devagas",
    stack: [""],
  },
  {
    title: "F1 API",
    description:
      "API para consultar informações do campeonato de Fórmula 1, com dados de equipes, pilotos e circuitos.",
    url: "https://github.com/caiolucasbittencourt/f1-api-fastify",
    stack: [""],
  },
  {
    title: "Masterclass Valorant Pro",
    description:
      "Landing page para uma campanha de captação de leads de uma masterclass de Valorant.",
    url: "https://github.com/caiolucasbittencourt/masterclass-valorant-pro",
    stack: [""],
  },
  {
    title: "Laboracin",
    description:
      "Site institucional para um laboratório de análises clínicas, desenvolvida para ser moderna e totalmente responsiva.",
    url: "https://github.com/caiolucasbittencourt/laboracin",
    stack: [""],
  },
  {
    title: "Portfólio Pessoal",
    description: "Este é meu portfólio pessoal.",
    url: "https://github.com/caiolucasbittencourt/port",
    stack: [""],
  },
];

// Icons that need invert filter on dark background
export const INVERTED_ICONS = ["nextjs.png", "expressjs.png"];
