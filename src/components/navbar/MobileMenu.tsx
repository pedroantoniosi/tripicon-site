"use client";

import { useEffect } from "react";

import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "max-md:hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed top-0 right-0 z-50
          h-screen w-[320px] max-w-[85vw]
          bg-neutral-900
          shadow-2xl
          transition-transform duration-300 ease-in-out
          flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 p-6">
          <h2 className="text-xl font-bold text-white">Menu</h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
          >
            Close
          </button>
        </div>

        {/* Navegação */}
        <div className="flex-1 p-6">
          <NavLinks mobile onNavigate={onClose} />
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-800 p-6">
          <p className="text-sm text-neutral-500">© TripIcon</p>
        </div>
      </aside>
    </>
  );
}
