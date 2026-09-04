import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { WaitlistForm } from "@/components/marketing/waitlist-form";
import { waitlistFeatures } from "@/lib/marketing/content";

export const metadata: Metadata = {
  title: "Join Early Access — Your Perfumery Lab Is Coming",
  description:
    "Join early access for a complete learning environment for independent perfumers — education, formulas, community, live teaching and new perfumery bases to experiment with.",
  alternates: { canonical: "/waitlist" },
};

export default function WaitlistPage() {
  return (
    <section className="py-14 lg:py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow className="mb-6">Early Access</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
              Your Perfumery Lab Is Coming.
            </h1>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              A complete learning environment for independent perfumers —
              combining education, formulas, community, live teaching and
              new materials to experiment with.
            </p>

            <ul className="mt-10 space-y-3 font-sans text-sm text-ink/70">
              {waitlistFeatures.map((feature) => (
                <li key={feature} className="flex items-baseline gap-3 border-b border-ink/10 pb-3">
                  <span className="text-clay-dark">—</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-2 border-clay pl-5">
              <p className="font-sans text-xs uppercase tracking-wide2 text-clay-dark">Plus</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink/70">
                Be among the first to test four new perfumery bases
                currently in development.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading title="Join Early Access" className="mb-8" />
            <WaitlistForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
