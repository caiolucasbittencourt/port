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
    description: "Linguagens, frameworks e bibliotecas de interface",
    technologies: [
      { name: "HTML", icon: "HTML.svg" },
      { name: "CSS", icon: "CSS.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "React", icon: "react.svg" },
      { name: "Next.js", icon: "nextjs.png" },
      { name: "Tailwind CSS", icon: "tailwindcss.svg" },
    ],
  },
  {
    title: "Back-end",
    description: "Ambientes de execução, frameworks e arquitetura de APIs",
    technologies: [
      { name: "Node.js", icon: "nodejs.png" },
      { name: "Express", icon: "expressjs.png" },
      { name: "NestJS", icon: "nestjs.svg" },
    ],
  },
  {
    title: "Banco de Dados",
    description: "SGBDs e ORMs",
    technologies: [
      { name: "PostgreSQL", icon: "postgreSQL.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "Prisma", icon: "prisma.png" },
    ],
  },
  {
    title: "DevOps e Ferramentas",
    description: "Desenvolvimento, colaboração e deploy",
    technologies: [
      { name: "Git", icon: "git.svg" },
      { name: "GitHub", icon: "githubdark.svg" },
      { name: "Jest", icon: "jest.svg" },
      { name: "Docker", icon: "docker.svg" },
      { name: "AWS", icon: "aws.svg" },
    ],
  },
];

// Icons that need invert filter on dark background
export const INVERTED_TECH_ICONS = [
  "expressjs.png",
  "githubdark.svg",
  "nextjs.png",
  "prisma.png",
];

// Check if icon needs invert filter
export const isInvertedIcon = (techIcon: string): boolean =>
  INVERTED_TECH_ICONS.some((t) => techIcon.includes(t));
