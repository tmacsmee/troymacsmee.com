"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", text: "about" },
  { href: "/projects", text: "projects" },
  { href: "/art", text: "art" },
];

export default function Navigation() {
  return (
    <nav className="flex sm:flex-col gap-4 sm:w-36 relative sm:justify-normal justify-end">
      {links.map((link) => (
        <Navlink key={link.href} href={link.href} text={link.text} />
      ))}
    </nav>
  );
}

function Navlink({ href, text }: { href: string; text: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-xl transition relative",
        isActive ? "text-stone-900" : "text-stone-500 hover:blur-[1px]"
      )}
    >
      {text}
    </Link>
  );
}
