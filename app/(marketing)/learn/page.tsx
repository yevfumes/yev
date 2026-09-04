import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { Reveal } from "@/components/marketing/reveal";
import {
  learnTopics,
  formulaLabSteps,
  liveClassIdeas,
  communityAreas,
  communityExamplePost,
} from "@/lib/marketing/content";

export const metadata: Metadata = {
  title: "Learn Perfumery — Practical Education for Independent Perfumers",
  description:
    "10+ hours of practical perfumery education covering materials, formula construction, evaluation and troubleshooting — built for people who want to actually make perfume.",
  alternates: { canonical: "/learn" },
};

export default function LearnPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow className="mb-6">The Learning Platform</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              A Learning Platform for Independent Perfumers
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              10+ hours of practical perfumery education — covering
              everything from raw materials to formula construction, built
              for people who want to actually make perfume.
            </p>
            <div className="mt-9">
              <MButton href="/waitlist" size="lg">
                Join Early Access
              </MButton>
            </div>
          </div>
          <Reveal>
            <VisualBlock
              src="/images/studio/materials-wide.jpg"
              label="Materials laid out for study"
              alt="Raw perfumery materials and evaluation blotters arranged on a bench"
              aspect="aspect-[4/3]"
              variant="c"
            />
          </Reveal>
        </Container>
      </section>

      {/* 10+ HOURS OF CONTENT */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="10+ Hours of Content"
            title="Everything Connects Back to Making Perfume"
            description="Not academic theory for its own sake — every topic is taught in a way that ties directly back to what you're building at the bench."
          />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {learnTopics.map((group, i) => (
              <Reveal key={group.category} delay={i * 50}>
                <h3 className="font-serif text-xl text-ink">{group.category}</h3>
                <ul className="mt-4 space-y-2.5 font-sans text-sm text-ink/65">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-ink/10 pb-2.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FORMULA LAB */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Formula Lab"
            title="Watch. Blend. Smell. Modify. Compare. Repeat."
            description="Perfumery becomes much easier to understand when you stop only reading about materials and start smelling what happens when you change them."
          />
          <div className="mt-12">
            <ProcessSteps steps={formulaLabSteps} />
          </div>
          <MButton href="/formula-library" variant="secondary" className="mt-10">
            Explore the Formula Library
          </MButton>
        </Container>
      </section>

      {/* LIVE CLASSES */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <SectionHeading
            eyebrow="Live Classes"
            title="Practical Sessions, Taught Live"
            description="Live, practical sessions that reinforce experimentation over theory. No classes are scheduled yet — join the waitlist to hear first."
          />
          <ul className="grid gap-3 font-sans text-sm text-ink/70">
            {liveClassIdeas.map((idea) => (
              <li key={idea} className="border-b border-ink/10 pb-3 last:border-none">
                {idea}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* COMMUNITY */}
      <section className="border-b border-ink/10 bg-ink py-20 text-ivory lg:py-28">
        <Container>
          <Eyebrow className="mb-4 text-clay-light">Community</Eyebrow>
          <h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
            An Active Laboratory, Not a Generic Chat Server
          </h2>
          <p className="mt-5 max-w-lg font-sans text-ivory/70">
            A space to share formulas, ask beginner questions, discuss
            substitutions, and post what happened when you changed
            something — built for people actually formulating, not just
            talking about it.
          </p>
          <div className="mt-12 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {communityAreas.map((area) => (
              <p key={area} className="border-b border-ivory/15 pb-3 font-sans text-sm text-ivory/75">
                {area}
              </p>
            ))}
          </div>
          <div className="mt-12 max-w-lg border-l-2 border-clay pl-6 font-serif text-lg italic text-ivory/90">
            &ldquo;{communityExamplePost}&rdquo;
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Your Perfumery Lab Is Coming.
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-ink/65">
            Join early access to be the first in as education, formulas,
            live classes and community go live.
          </p>
          <div className="mt-9">
            <MButton href="/waitlist" size="lg">
              Join Early Access
            </MButton>
          </div>
        </Container>
      </section>
    </>
  );
}
