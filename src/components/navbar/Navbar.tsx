"use client";

import { useState } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="fixed 
      top-0 
      left-0 
      z-50 w-full"
      >
        <nav
          className="
        mx-auto 
        flex 
        h-20 
        max-w-7xl 
        items-center 
        justify-between 
        px-6"
        >
          {/* Logo */}
          <Link href="/">
            <button
              className="
      rounded-2xl
      border border-white/15
      bg-black/20
      backdrop-blur-md
      px-2
      py-1
      text-2xl
      font-bold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:bg-white/15
      hover:border-white/25
      hover:scale-[1.02]
      active:scale-95
    "
            >
              TripIcon
            </button>
          </Link>

          {/* Desktop */}
          <DesktopMenu />

          {/* Mobile Button */}
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setIsOpen(true)}
            className="
    flex
    px-2
    items-center
    justify-center
    rounded-2xl
    border
    border-white/15
    bg-black/20
    backdrop-blur-md
    shadow-lg
    transition-all
    duration-300
    hover:bg-white/15
    hover:border-white/25
    hover:scale-105
    active:scale-95
    lg:hidden
  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
