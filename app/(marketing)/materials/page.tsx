import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { Reveal } from "@/components/marketing/reveal";
import { baseUses } from "@/lib/marketing/content";

export const metadata: Metadata = {
  title: "Materials — Four New Perfumery Bases, Coming Soon",
  description:
    "We're developing four original perfumery bases for independent perfumers — professional-style building blocks designed to drop directly into your own formulas.",
  alternates: { canonical: "/materials" },
};

const baseCards = ["Base 01", "Base 02", "Base 03", "Base 04"];

export default function MaterialsPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow className="mb-6">Materials — Coming Soon</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              New Materials Are Coming.
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              We are currently developing four perfumery bases designed to
              drop directly into your own formulas. Built for
              experimentation. Created for perfumers, not consumers.
            </p>
            <div className="mt-9">
              <MButton href="/waitlist" size="lg">
                Get Early Access
              </MButton>
            </div>
          </div>
          <Reveal>
            <VisualBlock
              src="/images/studio/raw-materials.jpg"
              label="Raw materials on the shelf"
              alt="Shelves of raw perfumery materials in amber and clear glass bottles"
              aspect="aspect-square"
              variant="a"
            />
          </Reveal>
        </Container>
      </section>

      {/* WHAT THEY ARE */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Building Blocks, Not Finished Perfumes"
            title="Four Original Perfumery Bases"
            description="Four original perfumery bases are currently being developed as part of the platform — designed to be purchased as raw materials and used directly inside your own perfume formulas. They aren't finished perfumes, fragrance oils, or clone oils. They're professional-style compound bases intended for use as building blocks inside your own compositions."
          />
        </Container>
      </section>

      {/* CARDS */}
      <section className="border-b border-ink/10 bg-ink py-20 text-ivory lg:py-28">
        <Container>
          <Eyebrow className="mb-4 text-clay-light">Coming Soon</Eyebrow>
          <h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
            Four New Building Blocks for Your Perfume Organ.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {baseCards.map((base) => (
              <div key={base} className="border border-ivory/15 px-4 py-14 text-center">
                <p className="font-serif text-xl text-ivory">{base}</p>
                <p className="mt-3 font-sans text-[11px] uppercase tracking-wide2 text-ivory/45">
                  Coming Soon
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* USES */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Possible Uses"
            title="Use Them as Foundations, Modifiers or Building Blocks"
          />
          <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {baseUses.map((use, i) => (
              <li
                key={use}
                className="flex items-baseline gap-4 border-b border-ink/10 pb-5 font-sans text-ink"
              >
                <span className="font-serif text-sm text-clay-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {use}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ivory-soft py-20 lg:py-28">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Be Among the First to Test Them
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-ink/65">
            Join the waitlist to get early access as the four bases and the
            rest of the platform become available.
          </p>
          <div className="mt-9">
            <MButton href="/waitlist" size="lg">
              Join the Waitlist
            </MButton>
          </div>
        </Container>
      </section>
    </>
  );
}
