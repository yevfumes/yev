import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { Reveal } from "@/components/marketing/reveal";
import { ClassCard } from "@/components/marketing/class-card";
import { ClassInterestForm } from "@/components/marketing/class-interest-form";
import { classTopics } from "@/lib/marketing/content";
import { upcomingClasses } from "@/lib/marketing/classes";

export const metadata: Metadata = {
  title: "Perfumery Classes & Workshops UK — Learn Perfumery",
  description:
    "Hands-on perfumery classes and workshops exploring fragrance raw materials, formulation and perfume creation. Register your interest to join the waiting list.",
  alternates: { canonical: "/perfumery-classes" },
};

export default function PerfumeryClassesPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow className="mb-6">Perfumery Classes</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Learn Perfumery Through Materials
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              Practical sessions designed to introduce you to fragrance
              materials, scent construction and formulation — taught
              hands-on, at the bench.
            </p>
            <div className="mt-9">
              <MButton href="#waiting-list" size="lg">
                Register Your Interest
              </MButton>
            </div>
          </div>
          <Reveal>
            <VisualBlock
              label="Materials laid out for class"
              alt="Fragrance raw materials and blotters arranged for a perfumery class"
              aspect="aspect-[4/5]"
              variant="c"
            />
          </Reveal>
        </Container>
      </section>

      {/* TOPICS */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="What You'll Cover"
            title="From Raw Material to Finished Accord"
            description="Classes are built around direct experience of materials rather than theory alone — smelling, comparing and building with real fragrance ingredients."
          />
          <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {classTopics.map((topic, i) => (
              <Reveal key={topic} delay={i * 40}>
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

      {/* UPCOMING CLASSES */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Schedule" title="Upcoming Classes" />

          {upcomingClasses.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingClasses.map((item) => (
                <ClassCard key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <div className="mt-12 border border-dashed border-ink/25 p-10 text-center sm:p-14">
              <p className="font-serif text-2xl text-ink sm:text-3xl">
                No classes are scheduled yet
              </p>
              <p className="mx-auto mt-4 max-w-md font-sans text-ink/65">
                Dates for the first perfumery classes are still being
                finalised. Register your interest below and you&apos;ll be
                the first to know when they&apos;re announced.
              </p>
              <MButton href="#waiting-list" className="mt-8">
                Register Your Interest
              </MButton>
            </div>
          )}
        </Container>
      </section>

      {/* WAITING LIST FORM */}
      <section id="waiting-list" className="scroll-mt-20 py-20 lg:py-28">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Waiting List"
            title="Register Your Interest"
            description="Leave your details and be notified as soon as class dates and locations are confirmed."
          />
          <div className="mt-10">
            <ClassInterestForm />
          </div>
        </Container>
      </section>
    </>
  );
}
