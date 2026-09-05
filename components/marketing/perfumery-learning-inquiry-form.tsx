"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  perfumeryLearningInquirySchema,
  type PerfumeryLearningInquiryInput,
} from "@/lib/marketing/schemas";
import { perfumeryLearningExperienceOptions } from "@/lib/marketing/content";
import {
  FieldWrap,
  TInput,
  TTextarea,
  RadioCardGroup,
} from "@/components/marketing/form-fields";
import { MButton } from "@/components/marketing/button";

export function PerfumeryLearningInquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PerfumeryLearningInquiryInput>({
    resolver: zodResolver(perfumeryLearningInquirySchema),
  });

  async function onSubmit(data: PerfumeryLearningInquiryInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/perfumery-learning-inquiry", {
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
        <p className="font-serif text-2xl text-ink sm:text-3xl">Thank you</p>
        <p className="mx-auto mt-4 max-w-md font-sans text-ink/65">
          We&apos;ll be in touch with more information about the platform
          and early access.
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
        <FieldWrap label="First name" htmlFor="pl-first-name" required error={errors.first_name}>
          <TInput id="pl-first-name" register={register("first_name")} error={errors.first_name} autoComplete="given-name" />
        </FieldWrap>
        <FieldWrap label="Last name" htmlFor="pl-last-name" required error={errors.last_name}>
          <TInput id="pl-last-name" register={register("last_name")} error={errors.last_name} autoComplete="family-name" />
        </FieldWrap>
        <FieldWrap label="Email" htmlFor="pl-email" required error={errors.email}>
          <TInput id="pl-email" type="email" register={register("email")} error={errors.email} autoComplete="email" />
        </FieldWrap>
        <FieldWrap label="Country" htmlFor="pl-country">
          <TInput id="pl-country" register={register("country")} autoComplete="country-name" />
        </FieldWrap>
      </div>

      <FieldWrap
        label="Current experience"
        htmlFor="experience_level"
        required
        error={errors.experience_level}
      >
        <RadioCardGroup name="experience_level" register={register("experience_level")} options={perfumeryLearningExperienceOptions} columns={3} />
      </FieldWrap>

      <FieldWrap
        label="What would you most like to learn?"
        htmlFor="pl-what"
        required
        error={errors.what_to_learn}
      >
        <TTextarea id="pl-what" register={register("what_to_learn")} error={errors.what_to_learn} rows={4} />
      </FieldWrap>

      <FieldWrap label="What are you currently struggling with in perfumery?" htmlFor="pl-struggling">
        <TTextarea id="pl-struggling" register={register("struggling_with")} rows={3} />
      </FieldWrap>

      {status === "error" && (
        <p className="font-sans text-sm text-red-700" role="alert">
          Something went wrong. Please try again, or email
          studio@yevfumes.com directly.
        </p>
      )}

      <MButton type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Register My Interest"}
      </MButton>
    </form>
  );
}
