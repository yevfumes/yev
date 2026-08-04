import Image from "next/image";
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
        "relative flex items-end overflow-hidden rounded-sm border border-ink/10 bg-ivory-soft",
        textures[variant],
        aspect,
        className
      )}
    >
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
      <p className="relative z-10 w-full border-t border-ink/10 bg-ivory/70 px-4 py-3 font-sans text-[11px] uppercase tracking-wide2 text-ink/45 backdrop-blur-sm">
        {label}
      </p>
    </div>
  );
}
