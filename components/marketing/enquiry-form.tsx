"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, type EnquiryInput } from "@/lib/marketing/schemas";
import {
  brandStatusOptions,
  projectTypeOptions,
  numberOfFragrancesOptions,
  supportNeededOptions,
} from "@/lib/marketing/content";
import {
  FieldWrap,
  TInput,
  TTextarea,
  TSelect,
  RadioCardGroup,
} from "@/components/marketing/form-fields";
import { MButton } from "@/components/marketing/button";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      brand_status: undefined,
      project_type: undefined,
      support_needed: undefined,
    },
  });

  const projectType = watch("project_type");
  const supportNeeded = watch("support_needed");

  async function onSubmit(data: EnquiryInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiries", {
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
      <div className="rounded-md border border-ink/15 bg-ivory-soft px-6 py-14 text-center sm:px-12">
        <p className="font-serif text-2xl text-ink sm:text-3xl">
          Thank you for your enquiry
        </p>
        <p className="mx-auto mt-4 max-w-md font-sans text-ink/65">
          Your project brief has been received and will be reviewed
          personally. If it looks like a good fit, you&apos;ll hear back by
          email to arrange a first conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-14">
      {/* honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("website_url_confirm")}
      />

      <fieldset className="space-y-6">
        <legend className="font-serif text-xl text-ink sm:text-2xl">
          About You
        </legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <FieldWrap label="Name" htmlFor="name" required error={errors.name}>
            <TInput id="name" register={register("name")} error={errors.name} autoComplete="name" />
          </FieldWrap>
          <FieldWrap label="Email" htmlFor="email" required error={errors.email}>
            <TInput id="email" type="email" register={register("email")} error={errors.email} autoComplete="email" />
          </FieldWrap>
          <FieldWrap label="Company / Brand" htmlFor="company">
            <TInput id="company" register={register("company")} />
          </FieldWrap>
          <FieldWrap label="Website or social media" htmlFor="website">
            <TInput id="website" register={register("website")} placeholder="yourbrand.com or @handle" />
          </FieldWrap>
          <FieldWrap label="Country" htmlFor="country">
            <TInput id="country" register={register("country")} autoComplete="country-name" />
          </FieldWrap>
        </div>

        <FieldWrap
          label="Are you an existing brand, launching a new brand, or an individual?"
          htmlFor="brand_status"
          required
          error={errors.brand_status}
        >
          <RadioCardGroup name="brand_status" register={register("brand_status")} options={brandStatusOptions} columns={3} />
        </FieldWrap>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-serif text-xl text-ink sm:text-2xl">
          About the Project
        </legend>

        <FieldWrap label="Project type" htmlFor="project_type" required error={errors.project_type}>
          <RadioCardGroup name="project_type" register={register("project_type")} options={projectTypeOptions} columns={3} />
        </FieldWrap>

        {projectType === "other" && (
          <FieldWrap label="Please describe the project" htmlFor="project_type_other">
            <TInput id="project_type_other" register={register("project_type_other")} />
          </FieldWrap>
        )}

        <FieldWrap label="Number of fragrances required" htmlFor="number_of_fragrances">
          <TSelect
            id="number_of_fragrances"
            register={register("number_of_fragrances")}
            options={numberOfFragrancesOptions}
            placeholder="Select an option"
          />
        </FieldWrap>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-serif text-xl text-ink sm:text-2xl">
          Creative Direction
        </legend>

        <FieldWrap
          label="Desired fragrance direction"
          htmlFor="fragrance_direction"
          hint="A few words on the character you're imagining — fresh, warm, floral, woody, unusual, minimal..."
        >
          <TTextarea id="fragrance_direction" register={register("fragrance_direction")} rows={2} />
        </FieldWrap>

        <FieldWrap
          label="Creative brief"
          htmlFor="creative_brief"
          required
          error={errors.creative_brief}
          hint="Tell me about the concept, brand or idea. As much or as little detail as you have."
        >
          <TTextarea id="creative_brief" register={register("creative_brief")} error={errors.creative_brief} rows={5} />
        </FieldWrap>

        <FieldWrap
          label="Reference fragrances, if applicable"
          htmlFor="reference_fragrances"
          hint="Existing fragrances you admire, or that sit near the direction you're after"
        >
          <TTextarea id="reference_fragrances" register={register("reference_fragrances")} rows={2} />
        </FieldWrap>

        <FieldWrap label="Target customer" htmlFor="target_customer">
          <TInput id="target_customer" register={register("target_customer")} placeholder="Who is this fragrance for?" />
        </FieldWrap>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-serif text-xl text-ink sm:text-2xl">
          Practical Details
        </legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <FieldWrap label="Desired launch date" htmlFor="launch_date">
            <TInput id="launch_date" register={register("launch_date")} placeholder="e.g. Spring 2027, or flexible" />
          </FieldWrap>
          <FieldWrap label="Approximate budget" htmlFor="budget">
            <TInput id="budget" register={register("budget")} placeholder="e.g. a figure, a range, or 'please advise'" />
          </FieldWrap>
          <FieldWrap label="Expected production quantity, if known" htmlFor="production_quantity">
            <TInput id="production_quantity" register={register("production_quantity")} placeholder="e.g. units per year" />
          </FieldWrap>
        </div>

        <FieldWrap
          label="Do you need fragrance development only, or additional support?"
          htmlFor="support_needed"
          required
          error={errors.support_needed}
        >
          <RadioCardGroup name="support_needed" register={register("support_needed")} options={supportNeededOptions} columns={2} />
        </FieldWrap>

        {supportNeeded === "development_and_support" && (
          <FieldWrap label="What additional support are you looking for?" htmlFor="support_needed_detail">
            <TTextarea id="support_needed_detail" register={register("support_needed_detail")} rows={2} />
          </FieldWrap>
        )}
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-serif text-xl text-ink sm:text-2xl">
          Anything Else
        </legend>
        <FieldWrap label="Anything else I should know?" htmlFor="additional_info">
          <TTextarea id="additional_info" register={register("additional_info")} rows={3} />
        </FieldWrap>
      </fieldset>

      {status === "error" && (
        <p className="font-sans text-sm text-red-700" role="alert">
          Something went wrong sending your enquiry. Please try again, or
          email studio@yevfumes.com directly.
        </p>
      )}

      <div>
        <MButton type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "Sending…" : "Submit Enquiry"}
        </MButton>
        <p className="mt-4 font-sans text-xs text-ink/45">
          Every enquiry is reviewed personally. You&apos;ll hear back by
          email if the project looks like a good fit.
        </p>
      </div>
    </form>
  );
}
