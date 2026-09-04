"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  classInterestSchema,
  type ClassInterestInput,
} from "@/lib/marketing/schemas";
import {
  experienceLevelOptions,
  preferredFormatOptions,
} from "@/lib/marketing/content";
import {
  FieldWrap,
  TInput,
  TTextarea,
  RadioCardGroup,
} from "@/components/marketing/form-fields";
import { PhoneInput } from "@/components/marketing/phone-input";
import { MButton } from "@/components/marketing/button";

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ClassInterestInput>({
    resolver: zodResolver(classInterestSchema),
  });

  async function onSubmit(data: ClassInterestInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/class-interest", {
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
          You&apos;re on the waitlist
        </p>
        <p className="mx-auto mt-4 font-sans text-ink/65">
          Thank you for joining early access. You&apos;ll be the first to
          hear as the platform, formulas and new bases become available.
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
        <FieldWrap label="Name" htmlFor="wl-name" required error={errors.name}>
          <TInput id="wl-name" register={register("name")} error={errors.name} autoComplete="name" />
        </FieldWrap>
        <FieldWrap label="Email" htmlFor="wl-email" required error={errors.email}>
          <TInput id="wl-email" type="email" register={register("email")} error={errors.email} autoComplete="email" />
        </FieldWrap>
        <FieldWrap label="Phone number" htmlFor="wl-phone" required error={errors.phone}>
          <PhoneInput<ClassInterestInput> id="wl-phone" name="phone" control={control} error={errors.phone} />
        </FieldWrap>
        <FieldWrap label="Location" htmlFor="wl-location">
          <TInput id="wl-location" register={register("location")} placeholder="City, country" />
        </FieldWrap>
      </div>

      <FieldWrap
        label="Perfumery experience"
        htmlFor="experience_level"
        required
        error={errors.experience_level}
      >
        <RadioCardGroup name="experience_level" register={register("experience_level")} options={experienceLevelOptions} columns={3} />
      </FieldWrap>

      <FieldWrap label="What would you like to learn or work on?" htmlFor="learning_goals">
        <TTextarea id="learning_goals" register={register("learning_goals")} rows={3} />
      </FieldWrap>

      <FieldWrap
        label="How would you like to learn?"
        htmlFor="preferred_format"
        required
        error={errors.preferred_format}
      >
        <RadioCardGroup name="preferred_format" register={register("preferred_format")} options={preferredFormatOptions} columns={3} />
      </FieldWrap>

      {status === "error" && (
        <p className="font-sans text-sm text-red-700" role="alert">
          Something went wrong. Please try again, or email
          studio@yevfumes.com directly.
        </p>
      )}

      <MButton type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Join Early Access"}
      </MButton>
    </form>
  );
}
