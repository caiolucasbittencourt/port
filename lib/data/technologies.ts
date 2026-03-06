// Technologies organized by category
export interface Technology {
  name: string;
  icon: string;
}

export interface TechnologyCategory {
  title: string;
  description: string;
  technologies: Technology[];
}

export const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
  {
    title: "Front-end",
    description:
      "Tecnologias para construção de interfaces modernas e responsivas",
    technologies: [
      { name: "HTML", icon: "HTML.svg" },
      { name: "CSS", icon: "CSS.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "React", icon: "react.svg" },
      { name: "Next.js", icon: "nextjs.png" },
      { name: "Vue.js", icon: "vuejs.svg" },
      { name: "Nuxt.js", icon: "nuxtjs.svg" },
      { name: "Angular", icon: "angularjs.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss.svg" },
    ],
  },
  {
    title: "Back-end",
    description: "Tecnologias para desenvolvimento de APIs e servidores",
    technologies: [
      { name: "Node.js", icon: "nodejs.png" },
      { name: "Express.js", icon: "expressjs.png" },
      { name: "GraphQL", icon: "graphQL.svg" },
    ],
  },
  {
    title: "Banco de Dados",
    description: "Sistemas de gerenciamento de banco de dados",
    technologies: [
      { name: "PostgreSQL", icon: "postgreSQL.svg" },
      { name: "MySQL", icon: "mySQL.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
    ],
  },
  {
    title: "Ferramentas & DevOps",
    description: "Ferramentas de desenvolvimento e produtividade",
    technologies: [
      { name: "Git", icon: "git.svg" },
      { name: "Vite", icon: "vite.png" },
      { name: "Jest", icon: "Jest.svg" },
      { name: "Figma", icon: "figma.svg" },
    ],
  },
];

// Icons that need invert filter on dark background
export const INVERTED_TECH_ICONS = [
  "expressjs.png",
  "githubdark.svg",
  "mySQL.svg",
  "graphQL.svg",
  "nextjs.png",
];

// Check if icon needs invert filter
export const isInvertedIcon = (techIcon: string): boolean =>
  INVERTED_TECH_ICONS.some((t) => techIcon.includes(t));
