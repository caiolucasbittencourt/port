import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={`w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-white focus:ring-1 focus:ring-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${error ? "border-red-500/50 focus:ring-red-500" : ""} ${className} `}
          {...props}
        />
        {error && (
          <span className="mt-1 block text-xs text-red-400">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
