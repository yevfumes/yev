import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { audience } from "@/lib/marketing/content";
import { Reveal } from "@/components/marketing/reveal";

export const metadata: Metadata = {
  title: "About — Perfumer, Independent Formulator & Perfumery Educator",
  description:
    "Yev is a perfumer, independent formulator and perfumery educator, building a practical platform for independent perfumers to learn, test and build.",
  alternates: { canonical: "/about" },
};

const loop = ["Watch", "Blend", "Smell", "Modify", "Compare", "Repeat"];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container size="narrow" className="pb-16 pt-14 text-center lg:pb-24 lg:pt-20">
          <Eyebrow className="mb-6">About</Eyebrow>
          <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Perfumer. Independent Formulator. Perfumery Educator.
          </h1>
          <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
            I&apos;m Yev. Perfumery is often taught as something mysterious.
            I want to make it practical — a skill you build yourself, at
            the bench, not something you outsource.
          </p>
        </Container>
      </section>

      {/* MISSION */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <SectionHeading eyebrow="The Mission" title="Learning by Doing" />
          <div className="space-y-5 font-sans text-base leading-relaxed text-ink/70">
            <p>
              This platform isn&apos;t built to develop your fragrance for
              you. It&apos;s built to give independent perfumers —
              beginners, hobbyists, small brand founders and everyone in
              between — the knowledge, formulas, materials, feedback and
              community to become better perfumers themselves.
            </p>
            <p>
              Students shouldn&apos;t just watch videos. Real progress
              comes from actually blending, smelling and changing things —
              and seeing what happens when you do.
            </p>
            <p>
              The platform gives enough structure to progress without
              removing the creativity and experimentation that makes
              perfumery interesting in the first place.
            </p>
          </div>
        </Container>
      </section>

      {/* THE LOOP */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="How It Works" title="The Learning Loop" />
          <div className="mt-12 flex flex-wrap gap-4">
            {loop.map((step, i) => (
              <Reveal key={step} delay={i * 60} className="flex items-center gap-4">
                <span className="border border-ink/15 bg-ivory px-6 py-4 font-serif text-lg text-ink">
                  {step}
                </span>
                {i < loop.length - 1 && (
                  <span className="font-serif text-xl text-ink/30">&rarr;</span>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* AUDIENCE */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Who This Is For" title="Built for Independent Perfumers" />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {audience.map((item) => (
              <Reveal key={item.title}>
                <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink/65 sm:text-base">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Ready to start learning?
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-ink/65">
            Join early access to be the first in as the platform, formulas
            and new bases go live.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <MButton href="/waitlist" size="lg">
              Join Early Access
            </MButton>
            <MButton href="/consultations" variant="secondary" size="lg">
              Book a Consultation
            </MButton>
          </div>
        </Container>
      </section>
    </>
  );
}
