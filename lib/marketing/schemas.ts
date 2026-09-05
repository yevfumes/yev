import { z } from "zod";

// Backs the Perfumery Learning "Register My Interest" inquiry form.
export const perfumeryLearningInquirySchema = z.object({
  first_name: z.string().trim().min(1, "Please enter your first name"),
  last_name: z.string().trim().min(1, "Please enter your last name"),
  email: z.string().trim().email("Please enter a valid email address"),
  country: z.string().trim().optional(),
  experience_level: z.enum(
    [
      "completely_new",
      "beginner",
      "intermediate",
      "experienced_hobbyist",
      "independent_perfumer",
      "brand_owner",
    ],
    { errorMap: () => ({ message: "Please select your current experience" }) }
  ),
  what_to_learn: z.string().trim().min(1, "Please share what you'd like to learn"),
  struggling_with: z.string().trim().optional(),
  website_url_confirm: z.string().max(0).optional().or(z.literal("")),
});

export type PerfumeryLearningInquiryInput = z.infer<typeof perfumeryLearningInquirySchema>;

// Backs the Formula Consultations inquiry form.
export const consultationInquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  country: z.string().trim().optional(),
  experience_level: z.enum(
    ["beginner", "intermediate", "independent_perfumer", "brand_owner"],
    { errorMap: () => ({ message: "Please select your current experience" }) }
  ),
  has_formula: z.enum(["yes", "no"], {
    errorMap: () => ({ message: "Please let us know if you have a formula" }),
  }),
  material_count: z.string().trim().optional(),
  improve_goals: z.array(z.string()).optional().default([]),
  formula_or_question: z
    .string()
    .trim()
    .min(10, "Please share a little more detail (at least 10 characters)"),
  fragrance_direction: z.string().trim().optional(),
  website_url_confirm: z.string().max(0).optional().or(z.literal("")),
});

export type ConsultationInquiryInput = z.infer<typeof consultationInquirySchema>;
