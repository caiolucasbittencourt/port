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
];

// Icons that need invert filter on dark background
export const INVERTED_ICONS = ["nextjs.png", "expressjs.png"];
