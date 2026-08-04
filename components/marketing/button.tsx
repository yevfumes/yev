import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-ink text-ivory hover:bg-clay-dark",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-ink hover:text-ivory",
  ghost: "bg-transparent text-ink hover:text-clay-dark underline underline-offset-4 decoration-ink/30 hover:decoration-clay-dark",
};

const sizes = {
  default: "text-sm px-6 py-3",
  lg: "text-base px-8 py-4",
};

export function MButton(props: ButtonAsLink | ButtonAsButton) {
  const { children, className, variant = "primary", size = "default" } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", disabled } = props as ButtonAsButton;
  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
