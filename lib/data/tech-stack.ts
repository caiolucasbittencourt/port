// Technologies displayed in TechStack component
export const TECHNOLOGIES = [
  "HTML.svg",
  "CSS.svg",
  "javascript.svg",
  "typescript.svg",
  "react.svg",
  "nextjs.png",
  "angularjs.svg",
  "tailwindcss.svg",
  "nodejs.png",
  "expressjs.png",
  "nestjs.svg",
  "graphQL.svg",
  "mongodb.svg",
  "postgreSQL.svg",
  "mySQL.svg",
  "prisma.png",
  "firebase.svg",
  "supabase.svg",
  "docker.svg",
  "vercel.svg",
  "aws.svg",
  "git.svg",
  "githubdark.svg",
  "vite.svg",
  "jest.svg",
  "figma.svg",
] as const;

// Icons that need invert filter on dark background
export const INVERTED_TECH_ICONS = [
  "expressjs.png",
  "githubdark.svg",
  "mySQL.svg",
  "graphQL.svg",
  "nextjs.png",
  "prisma.png",
];

// Format tech name for display
export const formatTechName = (filename: string): string => {
  const name = filename.split(".")[0];

  const exceptions: Record<string, string> = {
    githubdark: "GitHub",
    javascript: "JavaScript",
    typescript: "TypeScript",
    tailwindcss: "Tailwind CSS",
    mongodb: "MongoDB",
    postgreSQL: "PostgreSQL",
    mySQL: "MySQL",
    graphQL: "GraphQL",
    HTML: "HTML",
    CSS: "CSS",
    Jest: "Jest",
  };

  if (exceptions[name]) return exceptions[name];

  return name.charAt(0).toUpperCase() + name.slice(1).replace("js", ".js");
};

// Check if icon needs invert filter
export const isInvertedIcon = (techName: string): boolean =>
  INVERTED_TECH_ICONS.some((t) => techName.includes(t));
