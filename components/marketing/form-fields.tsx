import { cn } from "@/lib/utils";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

export function FieldWrap({
  label,
  htmlFor,
  required,
  error,
  hint,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: FieldError;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="font-sans text-sm font-medium text-ink"
      >
        {label}
        {required && <span className="ml-1 text-clay-dark">*</span>}
        {!required && (
          <span className="ml-2 font-normal text-ink/40">(optional)</span>
        )}
      </label>
      {hint && <p className="-mt-1 font-sans text-xs text-ink/45">{hint}</p>}
      {children}
      {error && (
        <p className="font-sans text-xs text-red-700" role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
}

export const inputBase =
  "w-full rounded-md border border-ink/20 bg-ivory px-4 py-3.5 font-sans text-base text-ink placeholder:text-ink/35 transition-colors focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay";

export function TInput({
  id,
  register,
  error,
  ...props
}: {
  id: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      id={id}
      {...register}
      {...props}
      className={cn(inputBase, error && "border-red-400", props.className)}
    />
  );
}

export function TTextarea({
  id,
  register,
  error,
  rows = 4,
  ...props
}: {
  id: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      id={id}
      rows={rows}
      {...register}
      {...props}
      className={cn(inputBase, "resize-y", error && "border-red-400", props.className)}
    />
  );
}

export function TSelect({
  id,
  register,
  error,
  options,
  placeholder,
  ...props
}: {
  id: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  options: { value: string; label: string }[];
  placeholder?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      id={id}
      {...register}
      {...props}
      defaultValue=""
      className={cn(inputBase, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%231C1815%22><path d=%22M5.5 7.5l4.5 4.5 4.5-4.5%22 stroke=%22%231C1815%22 stroke-width=%221.3%22 fill=%22none%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10", error && "border-red-400", props.className)}
    >
      <option value="" disabled>
        {placeholder ?? "Select an option"}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export function RadioCardGroup({
  name,
  register,
  options,
  columns = 3,
}: {
  name: string;
  register: UseFormRegisterReturn;
  options: { value: string; label: string; description?: string }[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid gap-3",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {options.map((opt) => {
        const id = `${name}-${opt.value}`;
        return (
          <div key={opt.value}>
            <input
              type="radio"
              id={id}
              value={opt.value}
              {...register}
              className="peer sr-only"
            />
            <label
              htmlFor={id}
              className="flex min-h-[3.25rem] cursor-pointer flex-col justify-center rounded-md border border-ink/20 bg-ivory px-4 py-3 text-center font-sans text-sm text-ink/75 transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-ivory peer-focus-visible:ring-2 peer-focus-visible:ring-clay hover:border-ink/50"
            >
              <span className="font-medium">{opt.label}</span>
              {opt.description && (
                <span className="mt-0.5 text-xs opacity-70">
                  {opt.description}
                </span>
              )}
            </label>
          </div>
        );
      })}
    </div>
  );
}
