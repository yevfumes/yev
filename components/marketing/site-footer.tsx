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
              A practical perfumery education platform — formulas, live
              classes, consultations, community and new raw materials for
              independent perfumers.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-wide2 text-ink/40">
              Platform
            </p>
            <ul className="mt-4 space-y-3 font-sans text-sm text-ink/70">
              <li>
                <Link href="/learn" className="hover:text-ink">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/formula-library" className="hover:text-ink">
                  Formula Library
                </Link>
              </li>
              <li>
                <Link href="/materials" className="hover:text-ink">
                  Materials
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
              Get Started
            </p>
            <ul className="mt-4 space-y-3 font-sans text-sm text-ink/70">
              <li>
                <Link href="/waitlist" className="hover:text-ink">
                  Join Early Access
                </Link>
              </li>
              <li>
                <Link href="/consultations" className="hover:text-ink">
                  Book a Consultation
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
          <p>Perfumery Education for Independent Perfumers, UK</p>
        </div>
      </Container>
    </footer>
  );
}
