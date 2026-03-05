// Site configuration
export const SITE_CONFIG = {
  name: "Caio Lucas Bittencourt",
  shortName: "Caio Bittencourt",
  description: "Desenvolvedor Full Stack",
  email: "caiolucasbittencourt@hotmail.com",
} as const;

// Social media links
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/caiolucasbittencourt/",
  github: "https://github.com/caiolucasbittencourt",
  discord: "https://discord.gg/programador",
  whatsapp: "https://wa.me/5599996513294",
} as const;

// Social cards for Hero section
export const SOCIAL_CARDS: SocialCard[] = [
  {
    name: "LinkedIn",
    url: SOCIAL_LINKS.linkedin,
    icon: "/linkedin.png",
    color: "#0077b5",
  },
  {
    name: "GitHub",
    url: SOCIAL_LINKS.github,
    icon: "/githubdark.svg",
    invert: true,
  },
  {
    name: "Discord",
    url: SOCIAL_LINKS.discord,
    icon: "/discord.svg",
    color: "#5865F2",
  },
  {
    name: "WhatsApp",
    url: SOCIAL_LINKS.whatsapp,
    icon: "/whatsapp.png",
    color: "#25D366",
  },
];

// Social card type
interface SocialCard {
  name: string;
  url: string;
  icon: string;
  color?: string;
  invert?: boolean;
}

// FormSubmit configuration
export const FORM_CONFIG = {
  endpoint: `https://formsubmit.co/ajax/${SITE_CONFIG.email}`,
} as const;
