import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "py-1 px-3 bg-zinc-800 rounded-lg text-white hover:bg-zinc-200 hover:text-black",

  secondary:
    "py-1 px-2 rounded-full bg-primary hover:bg-zinc-700 hover:text-white",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`cursor-pointer font-semibold transition ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
