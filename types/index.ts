// Project type
export interface Project {
  title: string;
  description: string;
  url: string;
  stack: string[];
}

// Social link type
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color?: string;
  invert?: boolean;
}

// Form status type
export type FormStatus = "IDLE" | "LOADING" | "SUCCESS" | "ERROR";

// RPG Game types
export type Location =
  | "VILA"
  | "LOJA"
  | "FLORESTA"
  | "BATALHA"
  | "VITORIA"
  | "DERROTA";

export interface Enemy {
  name: string;
  level: number;
  maxHp: number;
  currentHp: number;
}

export interface Weapon {
  name: string;
  power: number;
}

export interface EnemyConfig {
  name: string;
  level: number;
  hp: number;
}

// Button variants
export type ButtonVariant = "default" | "primary" | "danger";

// Status card props
export interface StatusCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  color: string;
  border: string;
  bg: string;
}
