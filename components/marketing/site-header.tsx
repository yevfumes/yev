"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/fragrance-development", label: "Fragrance Development" },
  { href: "/perfumery-classes", label: "Perfumery Classes" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:h-20 lg:px-12">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-ink lg:text-2xl"
          aria-label="Yevfumes — home"
        >
          Yevfumes
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-[13px] uppercase tracking-wide2 text-ink/70 transition-colors hover:text-ink",
                  active && "text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/enquire"
            className="inline-flex items-center rounded-full bg-clay px-6 py-2.5 font-sans text-[13px] font-medium uppercase tracking-wide2 text-ivory transition-colors hover:bg-clay-dark"
          >
            Enquire
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform duration-300",
              open && "translate-y-[6.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-opacity duration-200",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform duration-300",
              open && "-translate-y-[6.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-y-auto bg-ivory transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <nav className="flex flex-col px-6 pt-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-ink/10 py-5 font-serif text-2xl text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-clay px-6 py-4 font-sans text-sm font-medium uppercase tracking-wide2 text-ivory"
          >
            Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
