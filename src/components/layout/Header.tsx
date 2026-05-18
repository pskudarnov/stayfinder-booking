"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/search", label: "Направления" },
  { href: "/search", label: "Жильё" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--outline)] bg-[color:color-mix(in_srgb,var(--surface)_86%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-[var(--primary)]">
          <span aria-hidden className="text-lg">⛰</span>
          <span className="font-[Playfair_Display] text-2xl font-semibold leading-none">StayFinder</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Переключить меню"
          aria-expanded={open}
          className="rounded-lg border border-[var(--outline)] bg-[var(--surface)] p-2 text-[var(--primary)] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-[var(--outline)] bg-[var(--surface)] p-4 md:hidden" aria-label="Мобильная навигация">
          <div className="flex flex-col gap-1 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-[var(--text-muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--primary)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
