// IFRA and allergen compliance engine

export interface IfraLimit {
  material_id: string;
  category: number;
  limit_pct: number;
  restriction_type?: string;
}

export interface AllergenData {
  material_id: string;
  allergen_name: string;
  concentration_pct: number;
  is_eu_regulated: boolean;
}

export interface ComplianceIngredient {
  material_id: string;
  material_name: string;
  actual_pct: number; // % in finished product (concentrate_pct * conc_in_FP / 100)
}

export interface IfraViolation {
  material_id: string;
  material_name: string;
  actual_pct: number;
  limit_pct: number;
  category: number;
  excess_pct: number;
}

export interface AllergenSummary {
  allergen_name: string;
  total_pct: number;
  is_eu_regulated: boolean;
  // EU declaration thresholds: leave-on 0.001%, rinse-off 0.01%
  requires_declaration_leave_on: boolean;
  requires_declaration_rinse_off: boolean;
}

export interface ComplianceResult {
  ifra_category: number;
  is_compliant: boolean;
  violations: IfraViolation[];
  allergens: AllergenSummary[];
  total_allergen_pct: number;
}

export const IFRA_CATEGORY_LABELS: Record<number, string> = {
  1: "Cat. 1 – Toys / Children's",
  2: "Cat. 2 – Deodorant / Antiperspirant",
  3: "Cat. 3 – Eye / Oral / Mucous",
  4: "Cat. 4 – Fine Fragrance",
  5: "Cat. 5 – Body Lotion / Cream / Oil",
  6: "Cat. 6 – Face Cream",
  7: "Cat. 7 – Hair Products",
  8: "Cat. 8 – Rinse-off / Body Wash",
  9: "Cat. 9 – Soap Bar",
  10: "Cat. 10 – Household Cleaning",
  11: "Cat. 11 – Candle / Diffuser",
};

export function checkIfraCompliance(
  ingredients: ComplianceIngredient[],
  ifraLimits: IfraLimit[],
  ifraCategory: number
): { isCompliant: boolean; violations: IfraViolation[] } {
  const violations: IfraViolation[] = [];

  for (const ing of ingredients) {
    const limit = ifraLimits.find(
      (l) => l.material_id === ing.material_id && l.category === ifraCategory
    );
    if (!limit) continue;

    if (ing.actual_pct > limit.limit_pct) {
      violations.push({
        material_id: ing.material_id,
        material_name: ing.material_name,
        actual_pct: ing.actual_pct,
        limit_pct: limit.limit_pct,
        category: ifraCategory,
        excess_pct: ing.actual_pct - limit.limit_pct,
      });
    }
  }

  return { isCompliant: violations.length === 0, violations };
}

export function calculateAllergens(
  ingredients: ComplianceIngredient[],
  allergenData: AllergenData[]
): AllergenSummary[] {
  const allergenMap = new Map<string, { total: number; regulated: boolean }>();

  for (const ing of ingredients) {
    const ingAllergens = allergenData.filter(
      (a) => a.material_id === ing.material_id
    );
    for (const a of ingAllergens) {
      const contribution = (ing.actual_pct / 100) * a.concentration_pct;
      const existing = allergenMap.get(a.allergen_name);
      if (existing) {
        existing.total += contribution;
      } else {
        allergenMap.set(a.allergen_name, {
          total: contribution,
          regulated: a.is_eu_regulated,
        });
      }
    }
  }

  return Array.from(allergenMap.entries())
    .map(([name, data]) => ({
      allergen_name: name,
      total_pct: Math.round(data.total * 10000) / 10000,
      is_eu_regulated: data.regulated,
      requires_declaration_leave_on: data.total >= 0.001,
      requires_declaration_rinse_off: data.total >= 0.01,
    }))
    .sort((a, b) => b.total_pct - a.total_pct);
}

export function runFullCompliance(
  ingredients: ComplianceIngredient[],
  ifraLimits: IfraLimit[],
  allergenData: AllergenData[],
  ifraCategory: number
): ComplianceResult {
  const { isCompliant, violations } = checkIfraCompliance(
    ingredients,
    ifraLimits,
    ifraCategory
  );
  const allergens = calculateAllergens(ingredients, allergenData);
  const totalAllergenPct = allergens.reduce((s, a) => s + a.total_pct, 0);

  return {
    ifra_category: ifraCategory,
    is_compliant: isCompliant,
    violations,
    allergens,
    total_allergen_pct: Math.round(totalAllergenPct * 10000) / 10000,
  };
}
