import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/marketing/container";
import { SectionHeading, Eyebrow } from "@/components/marketing/section-heading";
import { EnquiryForm } from "@/components/marketing/enquiry-form";

export const metadata: Metadata = {
  title: "Start a Project — Fragrance Development Enquiry",
  description:
    "Submit a fragrance development project enquiry. Share your brief, idea or reference and hear back once it has been reviewed personally.",
  alternates: { canonical: "/enquire" },
};

export default function EnquirePage() {
  return (
    <section className="py-14 lg:py-20">
      <Container size="narrow">
        <Eyebrow className="mb-6">Project Enquiry</Eyebrow>
        <SectionHeading
          title="Start a Fragrance Development Project"
          description="Tell me about your idea, brand or brief. The more detail you can share, the better — but a rough idea is a perfectly good place to start."
        />
        <p className="mt-4 font-sans text-sm text-ink/50">
          Looking to join a perfumery class instead?{" "}
          <Link href="/perfumery-classes#waiting-list" className="underline underline-offset-4 hover:text-ink">
            Register your interest here
          </Link>
          .
        </p>

        <div className="mt-14">
          <EnquiryForm />
        </div>
      </Container>
    </section>
  );
}
