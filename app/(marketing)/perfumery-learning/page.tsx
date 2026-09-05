import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { Reveal } from "@/components/marketing/reveal";
import { PerfumeryLearningInquiryForm } from "@/components/marketing/perfumery-learning-inquiry-form";
import {
  learnTopics,
  formulaLabSteps,
  liveClassIdeas,
  communityAreas,
  communityExamplePost,
} from "@/lib/marketing/content";

export const metadata: Metadata = {
  title: "Perfumery Learning — Learn Perfumery By Actually Making Perfume",
  description:
    "A practical learning platform for independent perfumers — combining structured education, formulas, live classes, community and hands-on experimentation. Register your interest.",
  alternates: { canonical: "/perfumery-learning" },
};

export default function PerfumeryLearningPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow className="mb-6">Perfumery Learning</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Learn Perfumery By Actually Making Perfume.
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              A practical learning platform for independent perfumers —
              combining structured education, formulas, live classes,
              community and hands-on experimentation.
            </p>
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

      {/* WHAT'S INCLUDED */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="10+ Hours of Content"
            title="Everything Connects Back to Making Perfume"
            description="Not academic theory for its own sake — every topic ties directly back to what you're building at the bench."
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
        </Container>
      </section>

      {/* LIVE CLASSES */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <SectionHeading
            eyebrow="Live Classes"
            title="Practical Sessions, Taught Live"
            description="Live, practical sessions that reinforce experimentation over theory."
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
            something.
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

      {/* INQUIRY FORM */}
      <section className="py-20 lg:py-28">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Early Access"
            title="Interested in Joining?"
            description="The platform is currently being prepared. Submit your details below to register your interest and receive updates before launch."
          />
          <div className="mt-14">
            <PerfumeryLearningInquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
