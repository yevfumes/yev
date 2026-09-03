import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ivory-soft">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-serif text-2xl text-ink">
              Yevfumes
            </Link>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-ink/60">
              Independent perfumer studio offering paid formulation
              consultations and hands-on perfumery classes.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-wide2 text-ink/40">
              Studio
            </p>
            <ul className="mt-4 space-y-3 font-sans text-sm text-ink/70">
              <li>
                <Link href="/formulation-consultation" className="hover:text-ink">
                  Formulation Consultation
                </Link>
              </li>
              <li>
                <Link href="/perfumery-classes" className="hover:text-ink">
                  Perfumery Classes
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ink">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-wide2 text-ink/40">
              Start a Project
            </p>
            <ul className="mt-4 space-y-3 font-sans text-sm text-ink/70">
              <li>
                <Link href="/enquire" className="hover:text-ink">
                  Project Enquiry
                </Link>
              </li>
              <li>
                <Link href="/perfumery-classes#waiting-list" className="hover:text-ink">
                  Class Waiting List
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-wide2 text-ink/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3 font-sans text-sm text-ink/70">
              <li>
                <a href="mailto:studio@yevfumes.com" className="hover:text-ink">
                  studio@yevfumes.com
                </a>
              </li>
              <li className="text-ink/50">United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-ink/10 pt-8 font-sans text-xs text-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Yevfumes. All rights reserved.</p>
          <p>Independent Perfumer &amp; Formulation Consultation Studio, UK</p>
        </div>
      </Container>
    </footer>
  );
}
