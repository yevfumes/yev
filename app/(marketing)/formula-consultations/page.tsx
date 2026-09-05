import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { Reveal } from "@/components/marketing/reveal";
import { ConsultationInquiryForm } from "@/components/marketing/consultation-inquiry-form";
import { consultationTopics } from "@/lib/marketing/content";

export const metadata: Metadata = {
  title: "Formula Consultations — Get Another Perspective On Your Formula",
  description:
    "One-to-one consultations for independent perfumers who want practical guidance, feedback and help understanding their compositions. Submit an inquiry.",
  alternates: { canonical: "/formula-consultations" },
};

export default function FormulaConsultationsPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow className="mb-6">Formula Consultations</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Get Another Perspective On Your Formula.
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              One-to-one consultations for independent perfumers who want
              practical guidance, feedback and help understanding their
              compositions.
            </p>
          </div>
          <Reveal>
            <VisualBlock
              src="/images/studio/hero-organ.jpg"
              label="A bench set up for formula review"
              alt="Shelving of amber and clear glass raw material bottles beside a formulation bench"
              aspect="aspect-[4/5]"
              variant="b"
            />
          </Reveal>
        </Container>
      </section>

      {/* POSITIONING */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container size="narrow">
          <SectionHeading
            eyebrow="How This Works"
            title="You Create. We Help You Understand What to Change."
            description="This isn't scent development. We don't take your concept away and develop a fragrance for you. The consultation is collaborative and educational — you remain the perfumer throughout."
          />
        </Container>
      </section>

      {/* TOPICS */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="What a Consultation Can Cover" title="Practical Guidance, Not Guesswork" />
          <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* INQUIRY FORM */}
      <section className="py-20 lg:py-28">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Submit an Inquiry"
            title="Tell Us About Your Formula"
            description="Let us know what you need before the consultation — this isn't a 'buy a call' page. Once we've reviewed your inquiry, we'll be in touch with the right option."
          />
          <div className="mt-14">
            <ConsultationInquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
