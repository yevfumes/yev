export type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-ink/10 border-t border-ink/10">
      {items.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg text-ink marker:content-none sm:text-xl">
            {item.question}
            <span
              aria-hidden="true"
              className="relative mt-1 h-4 w-4 shrink-0 text-clay-dark"
            >
              <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-200 group-open:rotate-90" />
            </span>
          </summary>
          <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-ink/65 sm:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
