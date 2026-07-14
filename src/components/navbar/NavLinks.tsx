"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface NavLinksProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "Sobre",
    href: "/about",
  },
  {
    name: "Contato",
    href: "/contact",
  },
];

const plans = [
  {
    name: "Basic",
    href: "/explore/basic",
  },
  {
    name: "Family",
    href: "/explore/family",
  },
  {
    name: "Premium",
    href: "/explore/premium",
  },
];

export default function NavLinks({
  mobile = false,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();
  const [plansOpen, setPlansOpen] = useState(false);

  const isPlansActive = pathname.startsWith("/plans");

  return (
    <ul className={`flex ${mobile ? "flex-col gap-6" : "items-center gap-8"}`}>
      {links.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className={`relative font-medium transition-colors duration-300 hover:text-primary ${
                isActive ? "text-orange-300" : "text-white md:text-black"
              }`}
            >
              {link.name}

              {!mobile && (
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              )}
            </Link>
          </li>
        );
      })}

      {/* Dropdown Planos */}
      <li
        className="relative"
        onMouseEnter={() => !mobile && setPlansOpen(true)}
        onMouseLeave={() => !mobile && setPlansOpen(false)}
      >
        <button
          type="button"
          onClick={() => mobile && setPlansOpen((prev) => !prev)}
          className={`flex items-center gap-1 font-medium transition-colors duration-300 hover:text-primary ${
            isPlansActive ? "text-orange-300" : "text-white md:text-black"
          }`}
        >
          Planos
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              plansOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <ul
          className={`${
            mobile
              ? `mt-4 ml-4 flex flex-col gap-3 overflow-hidden transition-all duration-300 ${
                  plansOpen ? "max-h-40" : "max-h-0"
                }`
              : `absolute left-0 top-full mt-3 w-48 rounded-lg bg-zinc-900 border border-zinc-800 shadow-xl transition-all duration-200 ${
                  plansOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-2"
                }`
          }`}
        >
          {plans.map((plan) => {
            const active = pathname === plan.href;

            return (
              <li key={plan.href}>
                <Link
                  href={plan.href}
                  onClick={() => {
                    setPlansOpen(false);
                    onNavigate?.();
                  }}
                  className={`block px-4 py-3 transition-colors hover:bg-zinc-800 hover:text-primary ${
                    active ? "text-orange-300" : "text-white"
                  }`}
                >
                  {plan.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}
