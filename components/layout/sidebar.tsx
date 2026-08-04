"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FlaskConical,
  Package,
  Boxes,
  BarChart3,
  ShieldCheck,
  Users,
  Settings,
  Beaker,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/studio", icon: BarChart3, label: "Dashboard" },
  { href: "/studio/formulas", icon: FlaskConical, label: "Formulas" },
  { href: "/studio/materials", icon: Beaker, label: "Materials" },
  { href: "/studio/inventory", icon: Boxes, label: "Inventory" },
  { href: "/studio/suppliers", icon: Users, label: "Suppliers" },
  { href: "/studio/compliance", icon: ShieldCheck, label: "Compliance" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r bg-card flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="h-14 flex items-center px-5 border-b">
        <Link
          href="/studio"
          className="font-serif text-lg font-semibold tracking-wide text-foreground"
        >
          yev<span className="text-primary">fumes</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
        {nav.map(({ href, icon: Icon, label }) => {
          const active =
            href === "/studio"
              ? pathname === "/studio"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-2 py-3 border-t">
        <Link
          href="/studio/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
        <div className="mt-3 px-3">
          <p className="text-xs text-muted-foreground/60">v0.1.0 — Studio</p>
        </div>
      </div>
    </aside>
  );
}
