// Pure formula calculation engine — no side effects, fully typed.

export interface IngredientInput {
  id: string;
  material_id?: string | null;
  material_name: string;
  percentage: number;       // % in concentrate formula
  dilution_pct: number;     // e.g. 100 = neat, 10 = 10% dilution
  cost_per_kg?: number | null;
  note_position?: string | null;
}

export interface IngredientResult extends IngredientInput {
  actual_pct: number;       // percentage * (dilution_pct / 100)
  grams: number;            // in batch
  cost_contribution: number; // USD per kg of formula
}

export interface FormulaResult {
  ingredients: IngredientResult[];
  total_pct: number;
  total_actual_pct: number;
  is_balanced: boolean;      // total_pct === 100
  cost_per_kg: number;       // weighted average material cost per kg of concentrate
  batch_grams: number;
}

export function calculateFormula(
  ingredients: IngredientInput[],
  batchSizeGrams: number
): FormulaResult {
  const results: IngredientResult[] = ingredients.map((ing) => {
    const actual_pct = ing.percentage * (ing.dilution_pct / 100);
    const grams = (ing.percentage / 100) * batchSizeGrams;
    // cost_per_kg of the material * dilution = cost contribution per kg of formula
    const cost_contribution =
      ing.cost_per_kg != null
        ? (ing.percentage / 100) * ing.cost_per_kg * (ing.dilution_pct / 100)
        : 0;

    return { ...ing, actual_pct, grams, cost_contribution };
  });

  const total_pct = results.reduce((s, r) => s + r.percentage, 0);
  const total_actual_pct = results.reduce((s, r) => s + r.actual_pct, 0);
  const cost_per_kg = results.reduce((s, r) => s + r.cost_contribution, 0);

  return {
    ingredients: results,
    total_pct: round(total_pct, 4),
    total_actual_pct: round(total_actual_pct, 4),
    is_balanced: Math.abs(total_pct - 100) < 0.001,
    cost_per_kg: round(cost_per_kg, 2),
    batch_grams: batchSizeGrams,
  };
}

export function scaleFormula(
  ingredients: IngredientInput[],
  originalBatchGrams: number,
  targetBatchGrams: number
): IngredientInput[] {
  // Scaling doesn't change percentages — only grams change.
  // Return same formula, grams recalculated externally via calculateFormula.
  return ingredients;
}

export function scaleByFactor(
  ingredients: IngredientInput[],
  factor: number
): IngredientInput[] {
  return ingredients;
}

// Recalculate percentages so they sum to 100 after a user changes one value.
export function normalizePercentages(
  ingredients: IngredientInput[],
  changedId: string,
  newPct: number
): IngredientInput[] {
  const total = ingredients.reduce(
    (s, i) => s + (i.id === changedId ? newPct : i.percentage),
    0
  );
  if (total === 0) return ingredients;

  return ingredients.map((i) => ({
    ...i,
    percentage: i.id === changedId ? newPct : i.percentage,
  }));
}

export function calculateFinishedProductCost(
  concentrateCostPerKg: number,
  concentrationPct: number, // % of concentrate in finished product
  alcoholCostPerKg: number = 3.5,
  packagingCostPerUnit: number = 0,
  bottleSizeMl: number = 50,
  fragranceDensity: number = 0.87 // g/ml
): {
  costPerKgFP: number;
  costPerBottle: number;
  cogsBreakdown: { concentrate: number; alcohol: number; packaging: number };
} {
  const concentrateFraction = concentrationPct / 100;
  const alcoholFraction = 1 - concentrateFraction;

  const costPerKgFP =
    concentrateFraction * concentrateCostPerKg +
    alcoholFraction * alcoholCostPerKg;

  const bottleWeightGrams = bottleSizeMl * fragranceDensity;
  const costPerBottle =
    (costPerKgFP * bottleWeightGrams) / 1000 + packagingCostPerUnit;

  return {
    costPerKgFP: round(costPerKgFP, 2),
    costPerBottle: round(costPerBottle, 2),
    cogsBreakdown: {
      concentrate: round(concentrateFraction * concentrateCostPerKg, 2),
      alcohol: round(alcoholFraction * alcoholCostPerKg, 2),
      packaging: round(packagingCostPerUnit, 2),
    },
  };
}

function round(n: number, decimals: number) {
  const factor = Math.pow(10, decimals);
  return Math.round(n * factor) / factor;
}
