"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/content";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#journey", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav
        aria-label="Navigation principale"
        className="relative mx-auto flex max-w-4xl items-center justify-between rounded-full border border-card-border bg-card/80 px-5 py-2.5 shadow-lg shadow-black/[0.03] backdrop-blur-md"
      >
        <Link href="#top" className="text-base font-semibold tracking-tight">
          Khalid<span className="gradient-text">.</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={profile.cvUrl}
            download={profile.cvFileName}
            className="inline-flex items-center gap-2 rounded-full gradient-bg px-4 py-2 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Download size={16} />
            CV
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-full border border-card-border text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-full mt-2 rounded-3xl border border-card-border bg-card p-4 shadow-lg md:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={profile.cvUrl}
                  download={profile.cvFileName}
                  className="inline-flex items-center gap-2 rounded-full gradient-bg px-4 py-2 text-sm font-medium text-white"
                >
                  <Download size={16} />
                  Télécharger le CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
