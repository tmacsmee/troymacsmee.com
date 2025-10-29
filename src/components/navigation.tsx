"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-4 w-24">
      <Navlink href="/" text="about" />
      <Navlink href="/projects" text="projects" />
      <Navlink href="/art" text="art" />
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
        "text-xl transition",
        isActive ? "text-stone-900" : "text-stone-500 hover:blur-[1px]"
      )}
    >
      {text}
    </Link>
  );
}
