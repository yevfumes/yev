import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  company: z.string().trim().optional(),
  website: z.string().trim().optional(),
  country: z.string().trim().optional(),
  brand_status: z.enum(["existing_brand", "new_brand", "individual"], {
    errorMap: () => ({ message: "Please select an option" }),
  }),
  project_type: z.enum(
    ["personal_fragrance", "brand_range", "single_product", "gift_or_bespoke", "other"],
    { errorMap: () => ({ message: "Please select a project type" }) }
  ),
  project_type_other: z.string().trim().optional(),
  number_of_fragrances: z.string().trim().optional(),
  fragrance_direction: z.string().trim().optional(),
  creative_brief: z
    .string()
    .trim()
    .min(20, "Please share a little more detail (at least 20 characters)"),
  reference_fragrances: z.string().trim().optional(),
  target_customer: z.string().trim().optional(),
  launch_date: z.string().trim().optional(),
  budget: z.string().trim().optional(),
  production_quantity: z.string().trim().optional(),
  support_needed: z.enum(["development_only", "development_and_support"], {
    errorMap: () => ({ message: "Please select an option" }),
  }),
  support_needed_detail: z.string().trim().optional(),
  additional_info: z.string().trim().optional(),
  // honeypot — must stay empty
  website_url_confirm: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const classInterestSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  location: z.string().trim().optional(),
  experience_level: z.enum(["beginner", "some_experience", "experienced"], {
    errorMap: () => ({ message: "Please select your experience level" }),
  }),
  learning_goals: z.string().trim().optional(),
  preferred_format: z.enum(["in_person", "online", "either"], {
    errorMap: () => ({ message: "Please select a preferred format" }),
  }),
  website_url_confirm: z.string().max(0).optional().or(z.literal("")),
});

export type ClassInterestInput = z.infer<typeof classInterestSchema>;
