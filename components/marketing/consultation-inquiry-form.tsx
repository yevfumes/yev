"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  consultationInquirySchema,
  type ConsultationInquiryInput,
} from "@/lib/marketing/schemas";
import {
  consultationExperienceOptions,
  hasFormulaOptions,
  improveGoalsOptions,
} from "@/lib/marketing/content";
import {
  FieldWrap,
  TInput,
  TTextarea,
  RadioCardGroup,
  CheckboxCardGroup,
} from "@/components/marketing/form-fields";
import { MButton } from "@/components/marketing/button";

export function ConsultationInquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ConsultationInquiryInput>({
    resolver: zodResolver(consultationInquirySchema),
    defaultValues: { improve_goals: [] },
  });

  const hasFormula = watch("has_formula");

  async function onSubmit(data: ConsultationInquiryInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/consultation-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-ink/15 bg-ivory px-6 py-14 text-center sm:px-12">
        <p className="font-serif text-2xl text-ink sm:text-3xl">
          Thank you for your inquiry
        </p>
        <p className="mx-auto mt-4 max-w-md font-sans text-ink/65">
          Once your inquiry has been reviewed, we&apos;ll contact you with
          the appropriate consultation option.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("website_url_confirm")}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <FieldWrap label="Name" htmlFor="ci-name" required error={errors.name}>
          <TInput id="ci-name" register={register("name")} error={errors.name} autoComplete="name" />
        </FieldWrap>
        <FieldWrap label="Email" htmlFor="ci-email" required error={errors.email}>
          <TInput id="ci-email" type="email" register={register("email")} error={errors.email} autoComplete="email" />
        </FieldWrap>
        <FieldWrap label="Country" htmlFor="ci-country" className="sm:col-span-2">
          <TInput id="ci-country" register={register("country")} autoComplete="country-name" />
        </FieldWrap>
      </div>

      <FieldWrap
        label="Current experience"
        htmlFor="experience_level"
        required
        error={errors.experience_level}
      >
        <RadioCardGroup name="experience_level" register={register("experience_level")} options={consultationExperienceOptions} columns={4} />
      </FieldWrap>

      <FieldWrap
        label="Do you currently have a formula?"
        htmlFor="has_formula"
        required
        error={errors.has_formula}
      >
        <RadioCardGroup name="has_formula" register={register("has_formula")} options={hasFormulaOptions} columns={2} />
      </FieldWrap>

      {hasFormula === "yes" && (
        <FieldWrap label="Approximately how many materials are in the formula?" htmlFor="ci-count">
          <TInput id="ci-count" register={register("material_count")} placeholder="e.g. 12" />
        </FieldWrap>
      )}

      <FieldWrap label="What are you currently trying to improve?" htmlFor="improve_goals">
        <CheckboxCardGroup name="improve_goals" register={register("improve_goals")} options={improveGoalsOptions} columns={3} />
      </FieldWrap>

      <FieldWrap
        label="Tell us about your formula or question"
        htmlFor="ci-formula"
        required
        error={errors.formula_or_question}
      >
        <TTextarea id="ci-formula" register={register("formula_or_question")} error={errors.formula_or_question} rows={5} />
      </FieldWrap>

      <FieldWrap label="What fragrance direction are you trying to achieve?" htmlFor="ci-direction">
        <TTextarea id="ci-direction" register={register("fragrance_direction")} rows={3} />
      </FieldWrap>

      {status === "error" && (
        <p className="font-sans text-sm text-red-700" role="alert">
          Something went wrong. Please try again, or email
          studio@yevfumes.com directly.
        </p>
      )}

      <div>
        <MButton type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "Sending…" : "Submit Consultation Inquiry"}
        </MButton>
        <p className="mt-4 font-sans text-xs text-ink/45">
          Once your inquiry has been reviewed, we&apos;ll contact you with
          the appropriate consultation option.
        </p>
      </div>
    </form>
  );
}
