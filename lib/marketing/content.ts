import type { ProcessStep } from "@/components/marketing/process-steps";
import type { FaqItem } from "@/components/marketing/faq";

// ─── Consultations ───────────────────────────────────────────────────────────

export const consultationSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Book Your Session",
    description:
      "Choose and pay for a consultation. You'll get a confirmation with everything you need to prepare.",
  },
  {
    number: "02",
    title: "Share Some Context",
    description:
      "Ahead of the session, send over your formula, a question, or the direction you're stuck on.",
  },
  {
    number: "03",
    title: "Your Consultation",
    description:
      "A focused, one-to-one session working through your formula or question together in real time.",
  },
  {
    number: "04",
    title: "Follow-Up Notes",
    description:
      "You'll come away with clear, practical next steps to try at the bench yourself.",
  },
];

export const consultationTopics = [
  "Review my formula with me",
  "Explain why my perfume feels flat",
  "Help me understand a material",
  "Help me choose raw materials",
  "Help me build an accord",
  "Explain why something is overpowering",
  "Help me improve diffusion",
  "Discuss substitutions",
  "Help me understand perfume structure",
  "Help me organise my perfume organ",
  "Help me start learning perfumery",
];

// Product handle for the paid consultation, sold via Shopify.
export const consultationCheckoutUrl =
  "https://www.yevfumes.com/products/formulation-consultation";

// ─── Learn ───────────────────────────────────────────────────────────────────

export const learnTopics: { category: string; items: string[] }[] = [
  {
    category: "Foundations",
    items: [
      "Perfumery fundamentals",
      "Top, heart & base concepts",
      "Perfume architecture",
    ],
  },
  {
    category: "Materials",
    items: [
      "Naturals",
      "Aroma chemicals",
      "Raw material families",
      "Beginner raw material lists",
      "Sourcing materials",
    ],
  },
  {
    category: "At the Bench",
    items: [
      "Equipment",
      "Dilution",
      "Weighing",
      "Solvents",
      "Scent strips",
      "Evaluation",
    ],
  },
  {
    category: "Building Formulas",
    items: [
      "Building accords",
      "Bases",
      "Formula construction",
      "Formula modification",
    ],
  },
  {
    category: "Performance",
    items: [
      "Diffusion",
      "Longevity",
      "Molecular weight",
      "Material interactions",
    ],
  },
  {
    category: "Practical & Troubleshooting",
    items: [
      "Evaluating trials",
      "Fixing common formulation problems",
      "Regulations & documentation basics",
    ],
  },
];

export const formulaLabSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Start",
    description: "Blend the original formula exactly as written.",
  },
  {
    number: "02",
    title: "Smell",
    description: "Evaluate it on a scent strip, and on skin.",
  },
  {
    number: "03",
    title: "Change",
    description: "Alter one material — increase it, reduce it, or swap it out.",
  },
  {
    number: "04",
    title: "Compare",
    description: "Evaluate the difference against the original.",
  },
  {
    number: "05",
    title: "Build",
    description: "Turn the structure into something completely your own.",
  },
];

export const liveClassIdeas = [
  "Build a perfume formula live",
  "Build an accord live",
  "Modify a formula live",
  "Material comparison sessions",
  "Formula troubleshooting",
  "Student formula reviews",
  "Raw material demonstrations",
  "Building around a new base",
  "Turning a simple accord into a perfume",
];

export const communityAreas = [
  "Formula sharing",
  "Formula feedback",
  "Accord experiments",
  "Raw material discussions",
  "Supplier recommendations",
  "Student experiments",
  "Material substitutions",
  "Beginner questions",
  "Advanced formulation discussion",
  "New material discoveries",
];

export const communityExamplePost =
  "I made this formula and increased Hedione from 15% to 25%. Here's what changed.";

// ─── Formula Library ─────────────────────────────────────────────────────────

export const formulaCategories = [
  "Complete Structures",
  "Accords",
  "Bases",
  "Floral",
  "Woody",
  "Musk",
  "Amber",
  "Gourmand",
  "Citrus",
  "Fresh",
  "Green",
  "Fruity",
  "Experimental",
];

export const formulaIncludes = [
  "Full percentages",
  "Formula purpose",
  "Material explanations",
  "What each material contributes",
  "Possible substitutions",
  "Modification ideas",
  "Materials to increase or reduce",
  "Suggested experiments",
  "Variations",
];

// ─── Materials / Bases ───────────────────────────────────────────────────────

export const baseUses = [
  "Add 5% to a formula",
  "Build a fragrance around one",
  "Combine two together",
  "Modify them with naturals",
  "Push them toward a completely different olfactory direction",
  "Use them as teaching materials",
];

// ─── Who this is for ─────────────────────────────────────────────────────────

export const audience = [
  {
    title: "Beginner Perfumers",
    description:
      "Just starting out and want a structured, practical way in — not just theory.",
  },
  {
    title: "Independent & Hobbyist Perfumers",
    description:
      "Formulating on your own and looking for structure, feedback and a community of people doing the same.",
  },
  {
    title: "Small Brand Founders",
    description:
      "Founders who formulate themselves and want to sharpen their skills, not outsource them.",
  },
  {
    title: "Material & Structure Explorers",
    description:
      "Learning aroma chemicals and naturals, and experimenting with accords and perfume structures.",
  },
];

// ─── Waitlist ────────────────────────────────────────────────────────────────

export const waitlistFeatures = [
  "10+ hours of practical education",
  "Growing formula library",
  "Accord library",
  "Live classes",
  "Independent perfumer community",
  "Material guides",
  "Supplier guides",
  "Formula experiments",
  "Four upcoming perfumery bases",
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
    question: "Do I need any experience to start?",
    answer:
      "No. The education is built to take you from the fundamentals through to confidently modifying and building your own formulas, whatever level you're starting from.",
  },
  {
    question: "Are the formulas finished perfumes I can sell?",
    answer:
      "No — they're starting points, designed to be blended, evaluated, modified and rebalanced. The goal is to understand how materials interact, not to hand you a finished product.",
  },
  {
    question: "What are the four new bases?",
    answer:
      "Four original perfumery bases currently in development, designed as raw materials you can drop directly into your own formulas — not finished fragrances or fragrance oils. More details soon.",
  },
  {
    question: "How do consultations work?",
    answer:
      "One-to-one sessions for people already experimenting or formulating — bring a formula, a question, or something you're stuck on. You remain the perfumer; we guide, you create.",
  },
  {
    question: "When does the platform launch?",
    answer:
      "Join the waitlist to be notified as soon as it opens, and to get early access ahead of the general public.",
  },
];
