import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { Faq } from "@/components/marketing/faq";
import { Reveal } from "@/components/marketing/reveal";
import {
  consultationSteps,
  consultationCheckoutUrl,
  whoWeWorkWith,
  homeFaqs,
} from "@/lib/marketing/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Independent Perfumer & Formulation Consultation Studio",
  description:
    "Yevfumes is an independent perfumery studio offering paid, one-to-one formulation consultations for perfumers, brands and founders, plus hands-on perfumery classes in the UK.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div className="max-w-xl">
            <Eyebrow className="mb-6">Independent Perfumer, UK</Eyebrow>
            <h1 className="font-serif text-[2.75rem] leading-[1.08] text-ink sm:text-6xl lg:text-[3.75rem]">
              One-to-One Formulation Consultations
            </h1>
            <p className="mt-6 font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              I work directly with perfumers, brands and founders —
              reviewing formulas, solving problems at the bench, and helping
              translate a brief or idea into a workable structure, through
              paid, focused consultation sessions.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <MButton href={consultationCheckoutUrl} size="lg">
                Book a Consultation
              </MButton>
              <MButton href="/formulation-consultation" variant="secondary" size="lg">
                See What's Covered
              </MButton>
            </div>
          </div>

          <Reveal>
            <VisualBlock
              src="/images/studio/hero-organ.jpg"
              label="Perfumer's organ — studio photography"
              alt="The Yevfumes studio shelving, arranged with amber and clear glass bottles of raw materials, beside the formulation bench"
              aspect="aspect-[4/5] lg:aspect-[5/6]"
              variant="a"
            />
          </Reveal>
        </Container>
      </section>

      {/* TWO PILLARS */}
      <section className="border-b border-ink/10">
        <Container className="grid divide-y divide-ink/10 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          <Reveal className="py-16 lg:py-24 lg:pr-14">
            <Eyebrow className="mb-4">01 — For Perfumers &amp; Brands</Eyebrow>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              Formulation Consultation
            </h2>
            <p className="mt-5 max-w-md font-sans text-ink/65">
              Paid, one-to-one sessions reviewing formulas, troubleshooting
              structure, and working through a brief or technical question
              at the bench.
            </p>
            <Link
              href="/formulation-consultation"
              className="mt-7 inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-wide2 text-ink underline decoration-clay decoration-2 underline-offset-8 transition-colors hover:text-clay-dark"
            >
              See what's covered
            </Link>
          </Reveal>

          <Reveal className="py-16 lg:py-24 lg:pl-14">
            <Eyebrow className="mb-4">02 — For Curious Minds</Eyebrow>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              Perfumery Classes
            </h2>
            <p className="mt-5 max-w-md font-sans text-ink/65">
              Practical workshops exploring fragrance materials,
              formulation and perfume creation — designed for beginners and
              the simply curious.
            </p>
            <Link
              href="/perfumery-classes"
              className="mt-7 inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-wide2 text-ink underline decoration-clay decoration-2 underline-offset-8 transition-colors hover:text-clay-dark"
            >
              Explore the classes
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <VisualBlock
              src="/images/studio/at-bench.jpg"
              label="At the bench"
              alt="The Yevfumes studio bench, with test tubes, sample vials and formula notes laid out beside a laptop"
              aspect="aspect-[4/5]"
              variant="b"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About the Perfumer"
              title="A direct relationship with the person you work with"
              description="Yevfumes is an independent studio — not a large fragrance house. Every consultation and class is run personally, with no account handlers or hidden layers in between."
            />
            <MButton href="/about" variant="ghost" className="mt-6">
              Read the full story
            </MButton>
          </Reveal>
        </Container>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Booking to Session"
            description="A straightforward, four-step process — from booking to a focused working session, with clear next steps to take away."
          />
          <div className="mt-12">
            <ProcessSteps steps={consultationSteps} compact />
          </div>
          <MButton href="/formulation-consultation" variant="secondary" className="mt-10">
            See What's Covered
          </MButton>
        </Container>
      </section>

      {/* MATERIALS / OLFACTORY IMAGERY */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Bench"
            title="Fragrance Is Built from Materials"
            description="Naturals, isolates and aroma chemicals, evaluated on blotter and skin, formulated gram by gram into a finished structure."
          />
          <div className="mt-12">
            <Reveal>
              <VisualBlock
                src="/images/studio/materials-wide.jpg"
                label="Raw materials"
                alt="Shelves of raw perfumery materials in amber and clear glass bottles at the Yevfumes studio"
                aspect="aspect-[4/3]"
                variant="a"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* WHO I WORK WITH */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Clients" title="Who I Work With" />
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

      {/* CLASSES TEASER */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Perfumery Classes"
              title="Learn Perfumery Through Materials"
              description="Practical, small-group sessions exploring fragrance raw materials, structure and formulation — built for beginners and the simply curious. No classes are scheduled yet, but you can register your interest to hear first."
            />
            <MButton href="/perfumery-classes" className="mt-8">
              Register Your Interest
            </MButton>
          </Reveal>
          <Reveal>
            <VisualBlock
              src="/images/studio/raw-materials.jpg"
              label="Materials laid out for a class session"
              alt="The Yevfumes studio bench with fragrance materials and blotters laid out"
              aspect="aspect-[4/3]"
              variant="c"
            />
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
            Working on a formula?
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-ivory/70">
            Whether it&apos;s a formula that isn&apos;t quite working or a
            brief you can&apos;t translate into a structure yet, book a
            session and work through it together.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <MButton href={consultationCheckoutUrl} size="lg" className="bg-clay hover:bg-clay-light hover:text-ink">
              Book a Consultation
            </MButton>
            <MButton
              href="/perfumery-classes"
              variant="secondary"
              size="lg"
              className="border-ivory/25 text-ivory hover:bg-ivory hover:text-ink"
            >
              Join the Class Waiting List
            </MButton>
          </div>
        </Container>
      </section>
    </>
  );
}
