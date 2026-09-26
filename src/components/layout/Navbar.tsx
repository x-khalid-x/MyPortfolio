import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
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
  const location = useLocation();
  const onHome = location.pathname === "/";
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermeture clavier (Escape) et clic/tap en dehors du menu mobile.
  // Écouteurs attachés uniquement pendant que le menu est ouvert.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || triggerRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav
        aria-label="Navigation principale"
        className="relative mx-auto flex max-w-4xl items-center justify-between rounded-full border border-card-border bg-card/80 px-5 py-2.5 shadow-lg shadow-black/[0.03] backdrop-blur-md"
      >
        <Link to="/#top" className="text-base font-semibold tracking-tight">
          Khalid<span className="gradient-text">.</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) =>
            onHome ? (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  to={`/${link.href}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
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
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex size-9 items-center justify-center rounded-full border border-card-border text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div
            ref={menuRef}
            id="mobile-menu"
            className="absolute inset-x-0 top-full mt-2 rounded-3xl border border-card-border bg-card p-4 shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) =>
                onHome ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      to={`/${link.href}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
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
