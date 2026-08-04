import Link from "next/link";
import type { ClassListing } from "@/lib/marketing/classes";

export function ClassCard({ item }: { item: ClassListing }) {
  return (
    <div className="flex h-full flex-col border border-ink/15 p-7">
      <p className="font-sans text-xs uppercase tracking-wide2 text-clay-dark">
        {item.date} &middot; {item.location}
      </p>
      <h3 className="mt-3 font-serif text-2xl text-ink">{item.name}</h3>
      <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ink/65">
        {item.description}
      </p>
      <dl className="mt-6 grid grid-cols-2 gap-y-2 font-sans text-sm text-ink/70">
        <dt className="text-ink/45">Duration</dt>
        <dd>{item.duration}</dd>
        <dt className="text-ink/45">Level</dt>
        <dd>{item.skillLevel}</dd>
        <dt className="text-ink/45">Price</dt>
        <dd>{item.price}</dd>
        <dt className="text-ink/45">Spaces</dt>
        <dd>{item.spacesAvailable} available</dd>
      </dl>
      <Link
        href={item.bookingHref}
        className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-center font-sans text-sm font-medium uppercase tracking-wide2 text-ivory transition-colors hover:bg-clay-dark"
      >
        Book Your Place
      </Link>
    </div>
  );
}
