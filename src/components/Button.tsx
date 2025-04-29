
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "rounded-full font-medium transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    secondary: "bg-transparent border border-foreground text-foreground hover:bg-foreground/10",
  };
  
  const sizeClasses = {
    sm: "text-sm px-4 py-1.5",
    md: "px-6 py-2",
    lg: "text-lg px-8 py-3",
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
