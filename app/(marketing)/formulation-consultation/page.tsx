import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { Reveal } from "@/components/marketing/reveal";
import {
  consultationSteps,
  consultationCheckoutUrl,
  whoWeWorkWith,
} from "@/lib/marketing/content";

export const metadata: Metadata = {
  title: "Formulation Consultation — Paid One-to-One Sessions",
  description:
    "Book a paid, one-to-one formulation consultation. Bring a formula you're troubleshooting, a brief, or a technical question, and work through it directly with an independent perfumer.",
  alternates: { canonical: "/formulation-consultation" },
};

export default function FormulationConsultationPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow className="mb-6">Formulation Consultation</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              One-to-One Formulation Consultations
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              A paid, focused working session — bring a formula you&apos;re
              troubleshooting, a brief you&apos;re trying to shape, or a
              technical question, and work through it directly with an
              independent perfumer.
            </p>
            <div className="mt-9">
              <MButton href={consultationCheckoutUrl} size="lg">
                Book a Consultation
              </MButton>
            </div>
          </div>
          <Reveal>
            <VisualBlock
              src="/images/studio/hero-organ.jpg"
              label="Consultation session in progress"
              alt="The Yevfumes studio bench and material shelving used during formulation consultations"
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
            title="Bring Whatever Stage You're At"
            description="Some clients arrive with a formula that isn't quite working and need a second opinion. Others have a brief or a direction they can't quite translate into a structure yet. Both are a valid reason to book a session — consultations are shaped around whatever you bring."
          />
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="How It Works" title="Booking to Session" />
          <div className="mt-12">
            <ProcessSteps steps={consultationSteps} />
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
              src="/images/studio/raw-materials.jpg"
              label="Perfumer's organ"
              alt="Shelving of raw materials used at the Yevfumes studio"
              aspect="aspect-square"
              variant="a"
            />
            <VisualBlock
              src="/images/studio/blotter-strips.jpg"
              label="Evaluation on blotter"
              alt="Fragrance evaluation blotter strips on the studio bench"
              aspect="aspect-square"
              variant="b"
            />
            <VisualBlock
              src="/images/studio/fragrance-samples.jpg"
              label="Formula samples"
              alt="Labelled fragrance sample vials at the Yevfumes studio"
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
            Ready to book your session?
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-ivory/70">
            Formulation consultations are booked and paid for directly —
            you&apos;ll be asked to share some context ahead of your session.
          </p>
          <div className="mt-9">
            <MButton
              href={consultationCheckoutUrl}
              size="lg"
              className="bg-clay hover:bg-clay-light hover:text-ink"
            >
              Book a Consultation
            </MButton>
          </div>
        </Container>
      </section>
    </>
  );
}
