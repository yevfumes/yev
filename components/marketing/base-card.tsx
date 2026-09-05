"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type BaseVariant = "mineral" | "botanical" | "resin" | "smoke";

const variants: Record<
  BaseVariant,
  { gradient: string; grain: number }
> = {
  // dark mineral / wet stone / silver reflections
  mineral: {
    gradient:
      "radial-gradient(120% 100% at 20% 10%, #6b7278 0%, #383d42 32%, #16181b 68%, #050607 100%)",
    grain: 0.05,
  },
  // soft blurred botanical shapes through frosted glass
  botanical: {
    gradient:
      "radial-gradient(90% 80% at 75% 20%, #7c8f74 0%, #45543f 38%, #232c20 66%, #0c0f0a 100%)",
    grain: 0.045,
  },
  // warm resin-like liquid, amber light, deep shadows
  resin: {
    gradient:
      "radial-gradient(100% 90% at 30% 80%, #b8752f 0%, #6e3c17 35%, #331a0a 65%, #0d0704 100%)",
    grain: 0.055,
  },
  // cold smoke / translucent liquid / metallic blue-grey
  smoke: {
    gradient:
      "radial-gradient(110% 90% at 70% 70%, #5c6b78 0%, #37434e 34%, #1a2128 66%, #060809 100%)",
    grain: 0.05,
  },
};

export function BaseCard({
  variant,
  label,
  className,
}: {
  variant: BaseVariant;
  label: string;
  className?: string;
}) {
  const filterId = useId();
  const v = variants[variant];

  return (
    <div
      className={cn(
        "group relative aspect-[4/5] overflow-hidden rounded-sm",
        className
      )}
    >
      <div
        className="absolute inset-0 scale-105 transition-transform [transition-duration:1400ms] ease-out group-hover:scale-[1.12]"
        style={{ background: v.gradient }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.35] mix-blend-overlay">
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed="7"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} opacity={v.grain * 10} />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <p className="font-serif text-lg tracking-wide text-ivory/90">{label}</p>
        <p className="mt-1.5 font-sans text-[10px] uppercase tracking-wide2 text-ivory/40">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
