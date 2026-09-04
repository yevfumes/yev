import { cn } from "@/lib/utils";

const defaultLines: [string, string][] = [
  ["Iso E Super", "20.00"],
  ["Hedione", "15.00"],
  ["Ambroxan", "8.00"],
  ["Bergamot", "6.00"],
];

// Purely decorative — reinforces the "actually making perfume" feel.
// Not a real, tested formula.
export function FormulaSnippet({
  lines = defaultLines,
  className,
}: {
  lines?: [string, string][];
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "select-none border border-ink/10 bg-ivory-soft/60 px-5 py-4 font-mono text-[11px] uppercase tracking-wide text-ink/40",
        className
      )}
    >
      {lines.map(([material, pct]) => (
        <div key={material} className="flex justify-between gap-6 py-0.5">
          <span>{material}</span>
          <span>{pct}</span>
        </div>
      ))}
    </div>
  );
}
