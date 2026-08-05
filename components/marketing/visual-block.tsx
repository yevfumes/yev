import Image from "next/image";
import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Placeholder for the studio's own photography (perfumer's organ, raw
 * materials, blotters, formula development, etc). Pass `src` once real
 * photography is available — the label/alt stay as the SEO alt-text.
 */
export function VisualBlock({
  label,
  alt,
  src,
  aspect = "aspect-[4/5]",
  variant = "a",
  className,
}: {
  label: string;
  alt: string;
  src?: string;
  aspect?: string;
  variant?: "a" | "b" | "c";
  className?: string;
}) {
  const grainId = `yf-grain-${useId()}`;

  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-sm", aspect, className)}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  const textures: Record<string, string> = {
    a: "bg-[radial-gradient(circle_at_30%_20%,rgba(169,113,77,0.18),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(28,24,21,0.10),transparent_50%)]",
    b: "bg-[linear-gradient(135deg,rgba(28,24,21,0.08)_0%,transparent_35%),radial-gradient(circle_at_70%_30%,rgba(169,113,77,0.14),transparent_55%)]",
    c: "bg-[radial-gradient(circle_at_50%_50%,rgba(169,113,77,0.16),transparent_60%)]",
  };

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex items-end overflow-hidden rounded-sm border border-ink/10 bg-ivory-soft p-2.5",
        aspect,
        className
      )}
    >
      {/* mat frame */}
      <div className={cn("relative h-full w-full overflow-hidden border border-ink/[0.08]", textures[variant])}>
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="0" y1="35%" x2="100%" y2="30%" stroke="#1C1815" strokeOpacity="0.06" />
          <line x1="0" y1="70%" x2="100%" y2="75%" stroke="#1C1815" strokeOpacity="0.06" />
          <circle cx="82%" cy="22%" r="34" fill="none" stroke="#A9714D" strokeOpacity="0.25" />
          <circle cx="18%" cy="80%" r="18" fill="none" stroke="#1C1815" strokeOpacity="0.12" />
        </svg>

        {/* fine grain */}
        <svg className="absolute inset-0 h-full w-full mix-blend-multiply opacity-[0.05]" aria-hidden="true">
          <filter id={grainId}>
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#${grainId})`} />
        </svg>

        {/* corner marks (top only — bottom stays clear of the caption bar) */}
        <span className="pointer-events-none absolute left-2.5 top-2.5 h-2.5 w-2.5 border-l border-t border-clay-dark/40" />
        <span className="pointer-events-none absolute right-2.5 top-2.5 h-2.5 w-2.5 border-r border-t border-clay-dark/40" />

        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-ink/10 bg-ivory/75 px-4 py-3 backdrop-blur-sm">
          <p className="font-sans text-[11px] uppercase tracking-wide2 text-ink/50">{label}</p>
          <p className="mt-0.5 font-sans text-[10px] italic text-ink/30">Photography coming soon</p>
        </div>
      </div>
    </div>
  );
}
