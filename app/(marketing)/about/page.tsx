import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { Reveal } from "@/components/marketing/reveal";

export const metadata: Metadata = {
  title: "About — Independent Perfumer",
  description:
    "Meet Yev, an independent perfumer working directly with brands, founders and individuals on bespoke fragrance development, and teaching hands-on perfumery classes.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow className="mb-6">About</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              An Independent Perfumer, Working Directly with You
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              I&apos;m Yev, the perfumer behind this studio. I develop
              bespoke fragrances for brands, founders and individuals, and
              teach hands-on perfumery classes — with no layers between you
              and the person at the bench.
            </p>
          </div>
          <Reveal>
            <VisualBlock
              label="Portrait"
              alt="Portrait of Yev, independent perfumer"
              aspect="aspect-[4/5]"
              variant="a"
            />
          </Reveal>
        </Container>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <SectionHeading
            eyebrow="How I Work"
            title="A Studio, Not a Fragrance House"
          />
          <div className="space-y-5 font-sans text-base leading-relaxed text-ink/70">
            <p>
              Yevfumes is a small, independent studio. There is no
              account manager, no junior perfumer handling the actual
              formulation, and no committee shaping the final scent — every
              project is developed by me, personally, from the first
              conversation through to the finished formula.
            </p>
            <p>
              That means slower, more considered work than a large
              fragrance house might offer, but a direct line to the person
              actually mixing, evaluating and refining your fragrance at
              every stage.
            </p>
            <p>
              It also means projects stay genuinely bespoke — shaped around
              your brief, your feedback and your olfactory direction,
              rather than adapted from an existing formula library.
            </p>
          </div>
        </Container>
      </section>

      {/* THE CRAFT — imagery */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Craft"
            title="Where the Work Happens"
            description="Formula development happens at the bench — working through raw materials, structure and balance until a concept becomes a finished fragrance."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Reveal>
              <VisualBlock
                label="Studio"
                alt="The perfumery studio workspace"
                aspect="aspect-[3/4]"
                variant="b"
              />
            </Reveal>
            <Reveal delay={80}>
              <VisualBlock
                label="Perfumer's organ"
                alt="Perfumer's organ with raw materials arranged for formulation"
                aspect="aspect-[3/4]"
                variant="a"
              />
            </Reveal>
            <Reveal delay={160}>
              <VisualBlock
                label="Raw materials"
                alt="Close-up of raw perfumery materials"
                aspect="aspect-[3/4]"
                variant="c"
              />
            </Reveal>
            <Reveal delay={240}>
              <VisualBlock
                label="Formula development"
                alt="Formula development notes and weighing equipment"
                aspect="aspect-[3/4]"
                variant="b"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Work directly with the studio
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-ink/65">
            Whether it&apos;s a fragrance development project or a place in
            an upcoming class, every enquiry reaches me personally.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <MButton href="/enquire" size="lg">
              Start a Project
            </MButton>
            <MButton href="/perfumery-classes" variant="secondary" size="lg">
              Explore Classes
            </MButton>
          </div>
        </Container>
      </section>
    </>
  );
}
