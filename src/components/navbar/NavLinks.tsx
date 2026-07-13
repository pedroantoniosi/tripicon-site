"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    name: "Planos",
    href: "/#plans",
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

export default function NavLinks({
  mobile = false,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();

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
              className={`
    relative
    font-medium
    transition-colors
    duration-300
    hover:text-primary
    ${isActive ? "text-orange-300" : "text-white"}
  `}
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
    </ul>
  );
}
