import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { Reveal } from "@/components/marketing/reveal";
import { BaseCard } from "@/components/marketing/base-card";

export const metadata: Metadata = {
  title: "Learn Perfumery. Build Your Own Formulas.",
  description:
    "Education, formulas, consultations and creative tools for independent perfumers. A practical perfumery learning platform — you create, we help you get there.",
  alternates: { canonical: "/" },
};

const pillars = [
  {
    eyebrow: "Learn",
    title: "Perfumery Learning",
    description: "Structured education, live classes, formulas and community.",
    cta: "Register Interest",
    href: "/perfumery-learning",
  },
  {
    eyebrow: "Ask",
    title: "Formula Consultations",
    description:
      "One-to-one guidance for independent perfumers working on their own formulas.",
    cta: "Submit an Inquiry",
    href: "/formula-consultations",
  },
  {
    eyebrow: "Experiment",
    title: "Formulas",
    description: "Structures and accords designed to be built, tested and modified.",
    cta: "Explore Formulas",
    href: "/formulas",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div className="max-w-xl">
            <Eyebrow className="mb-6">For Independent Perfumers</Eyebrow>
            <h1 className="font-serif text-[2.75rem] leading-[1.08] text-ink sm:text-6xl lg:text-[3.75rem]">
              Learn Perfumery. Build Your Own Formulas.
            </h1>
            <p className="mt-6 font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              Education, formulas, consultations and creative tools for
              independent perfumers.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <MButton href="/perfumery-learning" size="lg">
                Explore Perfumery Learning
              </MButton>
              <MButton href="/formula-consultations" variant="secondary" size="lg">
                Formula Consultations
              </MButton>
            </div>
          </div>

          <Reveal>
            <VisualBlock
              src="/images/studio/hero-organ.jpg"
              label="A working perfume organ"
              alt="Shelving of amber and clear glass raw material bottles beside a bench set up for formulation"
              aspect="aspect-[4/5] lg:aspect-[5/6]"
              variant="a"
            />
          </Reveal>
        </Container>
      </section>

      {/* THREE PILLARS */}
      <section className="border-b border-ink/10">
        <Container className="grid divide-y divide-ink/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 60} className="py-16 lg:py-24 lg:px-12">
              <Eyebrow className="mb-4">{pillar.eyebrow}</Eyebrow>
              <h2 className="font-serif text-2xl text-ink sm:text-3xl">{pillar.title}</h2>
              <p className="mt-4 max-w-xs font-sans text-sm text-ink/65 sm:text-base">
                {pillar.description}
              </p>
              <MButton href={pillar.href} variant="ghost" className="mt-6">
                {pillar.cta}
              </MButton>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <VisualBlock
              src="/images/studio/at-bench.jpg"
              label="At the bench"
              alt="Test tubes, sample vials and formula notes laid out on a formulation bench"
              aspect="aspect-[4/5]"
              variant="b"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="The Philosophy"
              title="We Don't Create the Perfume for You."
              description="This is a platform for people who want to become better perfumers themselves. We provide the knowledge, formulas, materials, feedback and live education — you provide the experimentation and creativity."
            />
            <MButton href="/about" variant="ghost" className="mt-6">
              Read the full story
            </MButton>
          </Reveal>
        </Container>
      </section>

      {/* BASES TEASER */}
      <section className="border-b border-ink/10 bg-ink py-24 text-ivory lg:py-32">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow className="mb-4 justify-center text-clay-light">
              Something New Is Entering the Organ
            </Eyebrow>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Four New Building Blocks.
            </h2>
            <p className="mx-auto mt-5 max-w-md font-sans text-ivory/60">
              We&apos;re developing four original perfumery bases designed
              for independent perfumers to experiment with inside their own
              formulas. Build around them. Modify them. Push them somewhere
              new.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4">
            <BaseCard variant="mineral" label="Base 01" />
            <BaseCard variant="botanical" label="Base 02" />
            <BaseCard variant="resin" label="Base 03" />
            <BaseCard variant="smoke" label="Base 04" />
          </div>

          <div className="mt-14 text-center">
            <p className="font-sans text-xs uppercase tracking-wide2 text-ivory/40">
              More will be revealed soon
            </p>
            <MButton
              href="/perfumery-learning"
              size="lg"
              className="mt-6 bg-clay hover:bg-clay-light hover:text-ink"
            >
              Register Interest
            </MButton>
          </div>
        </Container>
      </section>
    </>
  );
}
