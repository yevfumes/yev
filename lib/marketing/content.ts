import type { ProcessStep } from "@/components/marketing/process-steps";
import type { FaqItem } from "@/components/marketing/faq";

export const consultationSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Book Your Session",
    description:
      "Choose and pay for a formulation consultation. You'll get a confirmation with everything you need to prepare.",
  },
  {
    number: "02",
    title: "Share Some Context",
    description:
      "Ahead of the session, send over what you're working on — a formula, a brief, a technical question, or a direction you're stuck on.",
  },
  {
    number: "03",
    title: "Your Consultation",
    description:
      "A focused, one-to-one working session, reviewing your formula or brief and working through it together in real time.",
  },
  {
    number: "04",
    title: "Follow-Up Notes",
    description:
      "You'll come away with clear, practical next steps you can act on — material and structure guidance, adjustments to try, and direction on where to take it from here.",
  },
];

// Product handle for the paid Formulation Consultation, sold via Shopify.
export const consultationCheckoutUrl =
  "https://www.yevfumes.com/products/formulation-consultation";

export const startTimeline: ProcessStep[] = [
  {
    number: "01",
    title: "Get in Touch",
    description:
      "Submit a project enquiry with your idea, brand or brief — as much or as little detail as you have at this stage.",
  },
  {
    number: "02",
    title: "Introductory Conversation",
    description:
      "If it looks like a good fit, we'll arrange a conversation to talk through the brief, direction and scope in more depth.",
  },
  {
    number: "03",
    title: "Scope & Timeline Agreed",
    description:
      "Once we're aligned on the project, we'll agree the scope, approach and timeline before development begins.",
  },
  {
    number: "04",
    title: "Development Begins",
    description:
      "Formula development starts at the bench, moving into discovery and structured experimentation.",
  },
  {
    number: "05",
    title: "Ongoing Collaboration",
    description:
      "You'll stay closely involved through evaluation and refinement, reviewing samples and sharing feedback until the fragrance is complete.",
  },
];

export const whoWeWorkWith = [
  {
    title: "Fragrance & Beauty Brands",
    description:
      "Established brands developing a new fragrance, extending a range, or bringing formulation in-house alongside a dedicated perfumer.",
  },
  {
    title: "Founders Launching a Brand",
    description:
      "Founders building a fragrance brand from the ground up, from a first hero scent to a wider signature collection.",
  },
  {
    title: "Individuals",
    description:
      "People who want a personal fragrance developed around them — a scent that belongs to them alone, or as a considered gift.",
  },
  {
    title: "Other Creative Projects",
    description:
      "Studios, hospitality and retail spaces, and creative projects where scent is part of a wider concept or identity.",
  },
];

export const classTopics = [
  "Understanding fragrance raw materials",
  "Naturals vs. aroma chemicals",
  "Top, heart and base structures",
  "Building accords",
  "Formula construction",
  "Evaluating fragrance on blotters",
  "Creating a fragrance from scratch",
  "Understanding how professional perfumers work",
];

export const brandStatusOptions = [
  { value: "existing_brand", label: "Existing brand" },
  { value: "new_brand", label: "Launching a new brand" },
  { value: "individual", label: "Individual" },
];

export const projectTypeOptions = [
  { value: "personal_fragrance", label: "Personal fragrance" },
  { value: "brand_range", label: "Brand fragrance / range" },
  { value: "single_product", label: "Single hero product" },
  { value: "gift_or_bespoke", label: "Gift / bespoke one-off" },
  { value: "other", label: "Other" },
];

export const numberOfFragrancesOptions = [
  { value: "1", label: "1" },
  { value: "2-3", label: "2–3" },
  { value: "4-6", label: "4–6" },
  { value: "7+", label: "7+" },
  { value: "not_sure", label: "Not sure yet" },
];

export const supportNeededOptions = [
  { value: "development_only", label: "Fragrance development only" },
  {
    value: "development_and_support",
    label: "Development plus additional support",
  },
];

export const experienceLevelOptions = [
  { value: "beginner", label: "Beginner" },
  { value: "some_experience", label: "Some experience" },
  { value: "experienced", label: "Experienced" },
];

export const preferredFormatOptions = [
  { value: "in_person", label: "In-person" },
  { value: "online", label: "Online" },
  { value: "either", label: "Either" },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "Do I need a finished brief to start a project?",
    answer:
      "No. Some clients arrive with a detailed creative brief, others with a single reference, a feeling or a rough idea. Part of the discovery stage is shaping that starting point into a clear olfactory direction.",
  },
  {
    question: "Do you work with individuals as well as brands?",
    answer:
      "Yes. The studio works with fragrance and beauty brands, founders launching something new, and individuals who want a personal fragrance developed for them.",
  },
  {
    question: "Where are you based, and do you work internationally?",
    answer:
      "The studio is based in the UK and works with clients internationally. Discovery, evaluation and refinement are handled remotely where needed, with samples sent for evaluation at each stage.",
  },
  {
    question: "How do the perfumery classes work?",
    answer:
      "Classes are practical, small-group sessions covering fragrance materials, structure and formulation. Dates aren't scheduled yet — register your interest to be notified as soon as they're announced.",
  },
  {
    question: "How do I book a formulation consultation?",
    answer:
      "Formulation consultations are booked and paid for directly — head to the Formulation Consultation page and follow the booking link. After payment, you'll be asked to share some context ahead of your session.",
  },
  {
    question: "What can I bring to a consultation?",
    answer:
      "A formula you're troubleshooting, a brief you're trying to turn into a workable structure, or a specific technical question — consultations are flexible to whatever stage you're at.",
  },
];
