export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export function ProcessSteps({
  steps,
  compact = false,
}: {
  steps: ProcessStep[];
  compact?: boolean;
}) {
  return (
    <ol className="divide-y divide-ink/10 border-t border-ink/10">
      {steps.map((step) => (
        <li
          key={step.number}
          className="grid grid-cols-[3.5rem_1fr] gap-x-6 py-8 sm:grid-cols-[5rem_1fr] sm:gap-x-10 sm:py-10"
        >
          <span className="font-serif text-2xl text-clay-dark sm:text-3xl">
            {step.number}
          </span>
          <div>
            <h3
              className={
                compact
                  ? "font-serif text-lg text-ink sm:text-xl"
                  : "font-serif text-xl text-ink sm:text-2xl"
              }
            >
              {step.title}
            </h3>
            <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-ink/65 sm:text-base">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
