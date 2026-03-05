import type { ButtonVariant } from "@/types";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  default: "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/50",
  primary:
    "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30 hover:border-blue-500/60 text-blue-400",
  danger:
    "bg-red-500/10 hover:bg-red-500/20 border-red-500/30 hover:border-red-500/60 text-red-400",
};

export default function Button({
  children,
  onClick,
  variant = "default",
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` ${variantStyles[variant]} cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium text-white transition-all disabled:cursor-not-allowed disabled:opacity-50 ${className} `}
    >
      {children}
    </button>
  );
}
