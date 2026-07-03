"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/data";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Nav() {
  const [active, setActive] = useState<string>(sectionIds[0]);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b-0 shadow-none" : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="glass-btn flex h-10 w-10 items-center justify-center rounded-2xl font-display text-xs font-bold tracking-tight">
            SW
          </span>
          <span className="hidden font-display text-sm font-bold tracking-tight text-foreground sm:inline">
            Siew Wei En
          </span>
        </a>

        <ul className="hidden items-center gap-8 min-[600px]:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative text-xs font-semibold uppercase tracking-widest transition-colors",
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-accent transition-opacity",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 min-[600px]:flex">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download
            className="glass-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-transform hover:scale-[1.03]"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-3 min-[600px]:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="glass border-t-0 min-[600px]:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm font-semibold uppercase tracking-widest text-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={profile.resumeUrl}
                download
                className="glass-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-widest"
              >
                <Download size={14} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
