import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, minimumFractionDigits: 2 }).format(amount);
}

export function formatWeight(grams: number): string {
  if (grams >= 1000) return `${(grams / 1000).toFixed(2)} kg`;
  return `${grams.toFixed(1)} g`;
}

export function formatPct(n: number, decimals = 2): string {
  return `${n.toFixed(decimals)}%`;
}

export function round(n: number, d = 4): number {
  return Math.round(n * Math.pow(10, d)) / Math.pow(10, d);
}

export const NOTE_COLORS: Record<string, string> = {
  top: "text-amber-600 bg-amber-50 border-amber-200",
  middle: "text-rose-600 bg-rose-50 border-rose-200",
  base: "text-violet-600 bg-violet-50 border-violet-200",
  fixative: "text-stone-600 bg-stone-50 border-stone-200",
  solvent: "text-slate-600 bg-slate-50 border-slate-200",
};

export const FORMULA_TYPE_LABELS: Record<string, string> = {
  concentrate: "Concentrate",
  finished_product: "Finished Product",
  accord: "Accord",
  base: "Base",
  raw_blend: "Raw Blend",
};

export const STATUS_COLORS: Record<string, string> = {
  draft: "text-muted-foreground bg-muted",
  development: "text-amber-700 bg-amber-50 border border-amber-200",
  approved: "text-emerald-700 bg-emerald-50 border border-emerald-200",
  archived: "text-slate-500 bg-slate-50 border border-slate-200",
};
