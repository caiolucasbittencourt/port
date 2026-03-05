interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  interactive = false,
  onClick,
}: CardProps) {
  const baseStyles = "hover-card rounded-xl";
  const interactiveStyles = interactive
    ? "hover:-translate-y-1 transition-transform cursor-pointer"
    : "";

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${interactiveStyles} ${className}`}
    >
      {children}
    </div>
  );
}
