import React from "react";
type HeaderProps = {
  content: string;
  className?: string;
};

export default function Header({ content, className }: HeaderProps) {
  return (
    <h2 className={`py-4 text-xl font-bold  md:text-3xl ${className}`}>
      {content}
    </h2>
  );
}
