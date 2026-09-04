import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { Faq } from "@/components/marketing/faq";
import { Reveal } from "@/components/marketing/reveal";
import { FormulaSnippet } from "@/components/marketing/formula-snippet";
import {
  formulaLabSteps,
  consultationCheckoutUrl,
  consultationTopics,
  homeFaqs,
} from "@/lib/marketing/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn Perfumery By Actually Making Perfume",
  description:
    "A practical perfumery education platform for independent perfumers — formulas to test and modify, live classes, consultations, a community, and new perfumery bases to experiment with.",
  alternates: { canonical: "/" },
};

const ecosystem = [
  {
    number: "01",
    title: "Learn",
    description: "10+ hours of structured perfumery education.",
    href: "/learn",
  },
  {
    number: "02",
    title: "Make",
    description:
      "Access formulas and accords designed to be physically blended and tested.",
    href: "/formula-library",
  },
  {
    number: "03",
    title: "Experiment",
    description:
      "Modify formulas, explore raw materials and develop your own style.",
    href: "/formula-library",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "Learn alongside other independent perfumers through community discussions and live classes.",
    href: "/learn",
  },
];

const baseCards = ["Base 01", "Base 02", "Base 03", "Base 04"];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div className="max-w-xl">
            <Eyebrow className="mb-6">For Independent Perfumers</Eyebrow>
            <h1 className="font-serif text-[2.75rem] leading-[1.08] text-ink sm:text-6xl lg:text-[3.75rem]">
              Learn Perfumery By Actually Making Perfume.
            </h1>
            <p className="mt-6 font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              Practical perfumery education, formulas, live classes, raw
              materials and a community built for independent perfumers.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <MButton href="/waitlist" size="lg">
                Join the Waitlist
              </MButton>
              <MButton href="/learn" variant="secondary" size="lg">
                Explore Perfumery
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

      {/* ECOSYSTEM */}
      <section className="border-b border-ink/10">
        <Container className="grid divide-y divide-ink/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {ecosystem.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className={`py-14 px-2 sm:px-8 ${i > 0 ? "sm:border-l sm:border-ink/10" : ""}`}
            >
              <Eyebrow className="mb-4">{item.number}</Eyebrow>
              <h2 className="font-serif text-2xl text-ink">{item.title}</h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink/65">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-wide2 text-ink underline decoration-clay decoration-2 underline-offset-8 transition-colors hover:text-clay-dark"
              >
                Learn more
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* FORMULA LAB */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <SectionHeading
              eyebrow="Formula Lab"
              title="Start. Smell. Change. Compare. Build."
              description="Perfumery becomes much easier to understand when you stop only reading about materials and start smelling what happens when you change them."
            />
            <FormulaSnippet className="lg:mt-1" />
          </div>
          <div className="mt-12">
            <ProcessSteps steps={formulaLabSteps} compact />
          </div>
          <MButton href="/formula-library" variant="secondary" className="mt-10">
            Explore the Formula Library
          </MButton>
        </Container>
      </section>

      {/* MATERIALS IMAGERY */}
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
              title="We give you the tools, structures and knowledge. You create the perfume."
              description="This isn't a service where you send an idea and receive a finished fragrance. It's a place to build real perfumery skill — through education, formulas, materials, feedback and a community of people doing the same thing."
            />
            <MButton href="/about" variant="ghost" className="mt-6">
              Read the full story
            </MButton>
          </Reveal>
        </Container>
      </section>

      {/* BASES TEASER */}
      <section className="border-b border-ink/10 bg-ink py-20 text-ivory lg:py-28">
        <Container>
          <Eyebrow className="mb-4 text-clay-light">Coming Soon</Eyebrow>
          <h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
            Four New Building Blocks for Your Perfume Organ.
          </h2>
          <p className="mt-5 max-w-lg font-sans text-ivory/70">
            We&apos;re developing four original perfumery bases, built for
            experimentation — creative tools you&apos;ll be able to drop
            directly into your own formulas, not finished fragrances.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {baseCards.map((base) => (
              <div
                key={base}
                className="border border-ivory/15 px-4 py-10 text-center"
              >
                <p className="font-serif text-lg text-ivory">{base}</p>
                <p className="mt-2 font-sans text-[11px] uppercase tracking-wide2 text-ivory/45">
                  Coming Soon
                </p>
              </div>
            ))}
          </div>
          <MButton href="/materials" className="mt-10 bg-clay hover:bg-clay-light hover:text-ink">
            Get Early Access
          </MButton>
        </Container>
      </section>

      {/* CONSULTATIONS TEASER */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Consultations"
              title="Get Unstuck With Your Formula."
              description="One-to-one perfumery consultations for people who are already experimenting, learning or formulating. You remain the perfumer — we guide, you create."
            />
            <MButton href={consultationCheckoutUrl} className="mt-8">
              Book a Consultation
            </MButton>
          </Reveal>
          <Reveal>
            <ul className="grid gap-3 font-sans text-sm text-ink/70">
              {consultationTopics.slice(0, 6).map((topic) => (
                <li
                  key={topic}
                  className="border-b border-ink/10 pb-3 last:border-none"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container size="narrow">
          <SectionHeading eyebrow="Questions" title="Frequently Asked" />
          <div className="mt-10">
            <Faq items={homeFaqs} />
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink py-20 text-ivory lg:py-28">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Your Perfumery Lab Is Coming.
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-ivory/70">
            Education, formulas, community, live teaching and new materials
            to experiment with — join early access to be the first in.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <MButton href="/waitlist" size="lg" className="bg-clay hover:bg-clay-light hover:text-ink">
              Join Early Access
            </MButton>
          </div>
        </Container>
      </section>
    </>
  );
}
