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
  consultationTopics,
} from "@/lib/marketing/content";

export const metadata: Metadata = {
  title: "Perfumery Consultations — Get Unstuck With Your Formula",
  description:
    "One-to-one educational perfumery consultations for independent perfumers who are already experimenting, learning or formulating. You remain the perfumer — we guide, you create.",
  alternates: { canonical: "/consultations" },
};

export default function ConsultationsPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow className="mb-6">Consultations</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Get Unstuck With Your Formula.
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              One-to-one perfumery consultations for people who are already
              experimenting, learning or formulating. You remain the
              perfumer — we guide, you create.
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
              alt="A bench set up with raw materials and formulation notes, used during perfumery consultations"
              aspect="aspect-[4/5]"
              variant="b"
            />
          </Reveal>
        </Container>
      </section>

      {/* WHAT TO BRING */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Where to Start"
            title="Bring Whatever You're Working On"
            description="These aren't scent-development sessions where you hand over a brief and receive a finished fragrance. They're educational consultations — for people already at the bench, working through a formula, a question, or a direction they're stuck on."
          />
        </Container>
      </section>

      {/* TOPICS */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Common Topics" title="What a Session Can Cover" />
          <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {consultationTopics.map((topic, i) => (
              <Reveal key={topic} delay={i * 30}>
                <li className="flex items-baseline gap-4 border-b border-ink/10 pb-5 font-sans text-ink">
                  <span className="font-serif text-sm text-clay-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {topic}
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="How It Works" title="Booking to Session" />
          <div className="mt-12">
            <ProcessSteps steps={consultationSteps} />
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
            Consultations are booked and paid for directly — you&apos;ll be
            asked to share some context ahead of your session.
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
