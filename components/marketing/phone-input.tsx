"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  useController,
  type Control,
  type FieldError,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { inputBase } from "@/components/marketing/form-fields";
import { countries, defaultCountryIso2, flagEmoji, type Country } from "@/lib/marketing/countries";

const defaultCountry =
  countries.find((c) => c.iso2 === defaultCountryIso2) ?? countries[0];

export function PhoneInput<TFieldValues extends FieldValues>({
  id,
  name,
  control,
  error,
}: {
  id: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  error?: FieldError;
}) {
  const { field } = useController({ name, control });

  const [country, setCountry] = useState<Country>(defaultCountry);
  const [national, setNational] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    if (open) searchRef.current?.focus();
  }, [open]);

  useEffect(() => {
    field.onChange(national.trim() ? `${country.dial} ${national.trim()}` : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, national]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dial.replace("+", "").includes(q.replace("+", ""))
    );
  }, [query]);

  return (
    <div ref={wrapRef} className="relative flex gap-2">
      <div className="relative shrink-0">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={cn(
            inputBase,
            "flex w-[112px] items-center gap-1.5 px-3",
            error && "border-red-400"
          )}
        >
          <span className="text-lg leading-none">{flagEmoji(country.iso2)}</span>
          <span className="text-sm text-ink/80">{country.dial}</span>
          <svg
            className="ml-auto h-3.5 w-3.5 text-ink/40"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.5 7.5l4.5 4.5 4.5-4.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute left-0 top-[calc(100%+6px)] z-30 w-72 overflow-hidden rounded-md border border-ink/15 bg-ivory shadow-lg">
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country or code"
              className="w-full border-b border-ink/10 bg-ivory px-3 py-2.5 font-sans text-sm text-ink placeholder:text-ink/35 focus:outline-none"
            />
            <ul role="listbox" className="max-h-56 overflow-y-auto py-1">
              {filtered.length === 0 && (
                <li className="px-3 py-2.5 font-sans text-sm text-ink/45">
                  No matches
                </li>
              )}
              {filtered.map((c) => (
                <li key={c.iso2}>
                  <button
                    type="button"
                    onClick={() => {
                      setCountry(c);
                      setOpen(false);
                      setQuery("");
                    }}
                    className={cn(
                      "flex w-full items-center gap-2.5 px-3 py-2 text-left font-sans text-sm transition-colors hover:bg-ivory-soft",
                      c.iso2 === country.iso2 ? "bg-ivory-soft text-ink" : "text-ink/75"
                    )}
                  >
                    <span className="text-base leading-none">{flagEmoji(c.iso2)}</span>
                    <span className="flex-1">{c.name}</span>
                    <span className="text-ink/45">{c.dial}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <input
        id={id}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        value={national}
        onChange={(e) => setNational(e.target.value)}
        onBlur={field.onBlur}
        placeholder="7911 123456"
        className={cn(inputBase, "flex-1", error && "border-red-400")}
      />
    </div>
  );
}
