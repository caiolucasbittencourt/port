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
      { name: "Angular", icon: "angularjs.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss.svg" },
    ],
  },
  {
    title: "Back-end",
    description: "Ambientes de execução, frameworks e arquitetura de APIs",
    technologies: [
      { name: "Node.js", icon: "nodejs.png" },
      { name: "Express.js", icon: "expressjs.png" },
      { name: "NestJS", icon: "nestjs.svg" },
      { name: "GraphQL", icon: "graphQL.svg" },
    ],
  },
  {
    title: "Banco de Dados",
    description: "Banco de dados, ORM e plataformas BaaS",
    technologies: [
      { name: "PostgreSQL", icon: "postgreSQL.svg" },
      { name: "MySQL", icon: "mySQL.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "Prisma", icon: "prisma.png" },
      { name: "Firebase", icon: "firebase.svg" },
      { name: "Supabase", icon: "supabase.svg" },
    ],
  },
  {
    title: "Ferramentas",
    description: "Ferramentas de desenvolvimento, colaboração e deploy",
    technologies: [
      { name: "Git", icon: "git.svg" },
      { name: "GitHub", icon: "githubdark.svg" },
      { name: "Vite", icon: "vite.svg" },
      { name: "Jest", icon: "jest.svg" },
      { name: "Docker", icon: "docker.svg" },
      { name: "AWS", icon: "aws.svg" },
      { name: "Vercel", icon: "vercel.svg" },
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
  "prisma.png",
];

// Check if icon needs invert filter
export const isInvertedIcon = (techIcon: string): boolean =>
  INVERTED_TECH_ICONS.some((t) => techIcon.includes(t));
