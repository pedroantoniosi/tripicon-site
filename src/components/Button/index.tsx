import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`cursor-pointer bg-orange-300 text-white bg-primary rounded-full py-1 px-2 font-semibold hover:bg-netural-200 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
