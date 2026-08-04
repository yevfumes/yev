import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { startTimeline } from "@/lib/marketing/content";

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
        <Container size="narrow" className="pb-16 pt-14 text-center lg:pb-24 lg:pt-20">
          <Eyebrow className="mb-6">About</Eyebrow>
          <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            An Independent Perfumer, Working Directly with You
          </h1>
          <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
            I&apos;m Yev, the perfumer behind this studio. I develop
            bespoke fragrances for brands, founders and individuals, and
            teach hands-on perfumery classes — with no layers between you
            and the person at the bench.
          </p>
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

      {/* HOW WE START WORKING TOGETHER */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Getting Started"
            title="How We Start Working Together"
            description="From first enquiry to the start of development — what to expect before a project begins."
          />
          <div className="mt-12">
            <ProcessSteps steps={startTimeline} />
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
