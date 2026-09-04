import { z } from "zod";

// Backs the sitewide "Join Early Access" waitlist form.
export const classInterestSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().min(1, "Please enter your phone number"),
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
