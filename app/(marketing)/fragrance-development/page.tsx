import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { Reveal } from "@/components/marketing/reveal";
import { processSteps, whoWeWorkWith } from "@/lib/marketing/content";

export const metadata: Metadata = {
  title: "Fragrance Development — Bespoke Perfume Formulation",
  description:
    "Custom fragrance development and perfume formulation for brands, founders and individuals. Bring a detailed brief or simply an idea — the studio develops it into a finished fragrance formula.",
  alternates: { canonical: "/fragrance-development" },
};

export default function FragranceDevelopmentPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow className="mb-6">Fragrance Development</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Custom Fragrance Development, from Idea to Finished Formula
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              I develop bespoke fragrances for brands, founders and
              individuals — working directly with you, from the very first
              conversation through to the final formula.
            </p>
            <div className="mt-9">
              <MButton href="/enquire" size="lg">
                Start a Project
              </MButton>
            </div>
          </div>
          <Reveal>
            <VisualBlock
              label="Formula development in progress"
              alt="Perfumer weighing raw materials during formula development"
              aspect="aspect-[4/5]"
              variant="b"
            />
          </Reveal>
        </Container>
      </section>

      {/* WHAT YOU CAN BRING */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Where to Start"
            title="Bring Anything, from a Full Brief to a Single Idea"
            description="Some clients arrive with a detailed creative brief: brand positioning, references, target customer, regulatory market. Others arrive with far less — a feeling, a memory, a single reference fragrance, or a general direction. Both are a valid starting point. Part of the discovery stage is working with whatever you bring and shaping it into a clear olfactory direction to develop against."
          />
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Process"
            title="Five Stages, from Brief to Final Formula"
          />
          <div className="mt-12">
            <ProcessSteps steps={processSteps} />
          </div>
        </Container>
      </section>

      {/* WHO ITS FOR */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Who This Is For" title="Who I Work With" />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {whoWeWorkWith.map((item) => (
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

      {/* MATERIALS STRIP */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-3 gap-4">
            <VisualBlock
              label="Perfumer's organ"
              alt="Perfumer's organ used for formula development"
              aspect="aspect-square"
              variant="a"
            />
            <VisualBlock
              label="Evaluation on blotter"
              alt="Fragrance evaluation on a blotter strip"
              aspect="aspect-square"
              variant="b"
            />
            <VisualBlock
              label="Formula weighing"
              alt="Precise weighing during formula development"
              aspect="aspect-square"
              variant="c"
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-ivory lg:py-28">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-ivory/70">
            Share a brief, a reference, or a rough idea — every enquiry is
            reviewed personally.
          </p>
          <div className="mt-9">
            <MButton href="/enquire" size="lg" className="bg-clay hover:bg-clay-light hover:text-ink">
              Start a Project
            </MButton>
          </div>
        </Container>
      </section>
    </>
  );
}
