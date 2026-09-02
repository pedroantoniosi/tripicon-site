"use client";

import { useState } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Container from "@/components/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full max-w-350 fixed mx-auto z-[9] rounded-full top-5 left-1/2 -translate-x-1/2 bg-white text-black shadow-2xl">
        <nav>
          <Container className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <button
                className="rounded-2xl text-2xl
                          font-bold text-black  px-2 py-1 transition-all duration-300 hover:bg-white/15 active:scale-95"
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
              className="max-lg:flex px-2 items-center justify-center rounded-2xl border border-white/15 bg-black/20 backdrop-blur-md shadow-lg transition-all
                        duration-300 hover:bg-white/15 hover:border-white/25 hover:scale-105 active:scale-95 min-lg:hidden"
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
          </Container>
        </nav>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
