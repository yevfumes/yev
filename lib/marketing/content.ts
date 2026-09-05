import type { ProcessStep } from "@/components/marketing/process-steps";

// ─── Perfumery Learning ──────────────────────────────────────────────────────

export const learnTopics: { category: string; items: string[] }[] = [
  {
    category: "Foundations",
    items: [
      "Perfumery fundamentals",
      "Top, heart & base concepts",
      "Perfume architecture",
      "Building a perfume organ",
    ],
  },
  {
    category: "Materials",
    items: [
      "Naturals and synthetics",
      "Raw material families",
      "Beginner raw material lists",
      "Sourcing materials",
      "Supplier recommendations",
    ],
  },
  {
    category: "At the Bench",
    items: [
      "Equipment",
      "Dilution and weighing",
      "Solvents",
      "Scent strips",
      "Material evaluation",
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

export const perfumeryLearningFeatures = [
  "10+ hours of structured perfumery content",
  "Beginner through intermediate education",
  "Complete equipment guidance",
  "Raw material education — naturals and synthetics",
  "Dilution and weighing",
  "Formula construction & accord building",
  "Formula modification & material evaluation",
  "Longevity, diffusion & molecular weight",
  "Building a perfume organ",
  "Supplier recommendations",
  "Formula and accord libraries",
  "Live classes and community discussions",
];

export const perfumeryLearningExperienceOptions = [
  { value: "completely_new", label: "Completely new" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "experienced_hobbyist", label: "Experienced hobbyist" },
  { value: "independent_perfumer", label: "Independent perfumer" },
  { value: "brand_owner", label: "Fragrance brand owner" },
];

// ─── Formula Consultations ───────────────────────────────────────────────────

export const consultationTopics = [
  "Formula review",
  "Structure and balance",
  "Material choices",
  "Ingredient substitutions",
  "Accord building",
  "Diffusion",
  "Longevity",
  "Overpowering materials",
  "Flat or unfinished formulas",
  "Raw material questions",
  "Formula organisation",
  "Perfume structure",
  "General formulation questions",
];

export const consultationExperienceOptions = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "independent_perfumer", label: "Independent perfumer" },
  { value: "brand_owner", label: "Brand owner / founder" },
];

export const hasFormulaOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

export const improveGoalsOptions = [
  { value: "longevity", label: "Longevity" },
  { value: "diffusion", label: "Diffusion" },
  { value: "balance", label: "Balance" },
  { value: "structure", label: "Structure" },
  { value: "drydown", label: "Drydown" },
  { value: "opening", label: "Opening" },
  { value: "material_selection", label: "Material selection" },
  { value: "accord_building", label: "Accord building" },
  { value: "formula_simplification", label: "Formula simplification" },
  { value: "other", label: "Something else" },
];

// ─── Formulas ────────────────────────────────────────────────────────────────

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
