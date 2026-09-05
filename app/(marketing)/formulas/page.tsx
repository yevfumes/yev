import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { MButton } from "@/components/marketing/button";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { VisualBlock } from "@/components/marketing/visual-block";
import { FormulaSnippet } from "@/components/marketing/formula-snippet";
import { formulaCategories, formulaIncludes } from "@/lib/marketing/content";

export const metadata: Metadata = {
  title: "Formulas — Designed to Be Experimented With",
  description:
    "Educational perfume structures and accords for independent perfumers to try, blend, study and modify. Not finished commercial perfumes — learning tools and creative starting points.",
  alternates: { canonical: "/formulas" },
};

export default function FormulasPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow className="mb-6">Formulas</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Formulas Designed to Be Experimented With.
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/65 sm:text-lg">
              Make it. Smell it. Change it. These are learning tools and
              creative starting points for independent perfumers to try,
              blend, study and modify — not finished commercial perfumes.
            </p>
            <div className="mt-9">
              <MButton href="/perfumery-learning" size="lg">
                Register Interest
              </MButton>
            </div>
          </div>
          <VisualBlock
            src="/images/studio/blotter-strips.jpg"
            label="Evaluating a formula on blotter"
            alt="Fragrance evaluation blotter strips in a glass beaker on the bench"
            aspect="aspect-square"
            variant="b"
          />
        </Container>
      </section>

      {/* WHAT YOU DO WITH THEM */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="What You'll Do With Them" title="Made to Be Worked On" />
          <div className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Try",
              "Blend",
              "Study",
              "Modify",
              "Rebuild",
              "Test different materials",
              "Understand perfume structure",
              "Build new perfumes from them",
            ].map((item) => (
              <p key={item} className="border-b border-ink/10 pb-4 font-sans text-ink/75">
                {item}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* CATEGORIES */}
      <section className="border-b border-ink/10 bg-ivory-soft py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="A Growing Library" title="Structures, Accords & Bases" />
          <div className="mt-12 flex flex-wrap gap-3">
            {formulaCategories.map((cat) => (
              <span
                key={cat}
                className="border border-ink/15 px-5 py-2.5 font-sans text-sm text-ink/75"
              >
                {cat}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT EACH FORMULA INCLUDES */}
      <section className="border-b border-ink/10 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <SectionHeading
            eyebrow="Coming to Each Formula"
            title="Built to Be Practical"
            description="As the library grows, every formula will eventually include:"
          />
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <ul className="space-y-3 font-sans text-sm text-ink/70">
              {formulaIncludes.slice(0, 5).map((item) => (
                <li key={item} className="border-b border-ink/10 pb-3">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-3 font-sans text-sm text-ink/70">
              {formulaIncludes.slice(5).map((item) => (
                <li key={item} className="border-b border-ink/10 pb-3">
                  {item}
                </li>
              ))}
            </ul>
            <FormulaSnippet
              className="sm:col-span-2"
              lines={[
                ["Ethyl Maltol", "3.00"],
                ["Sandalwood (synth.)", "12.00"],
                ["Vanillin", "5.00"],
                ["Musk Ketone", "10.00"],
              ]}
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-ivory lg:py-28">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Make It. Smell It. Change It.
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-ivory/70">
            Register your interest to be notified as the formula library
            opens.
          </p>
          <div className="mt-9">
            <MButton href="/perfumery-learning" size="lg" className="bg-clay hover:bg-clay-light hover:text-ink">
              Register Interest
            </MButton>
          </div>
        </Container>
      </section>
    </>
  );
}
