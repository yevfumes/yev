"use client";
import { useMemo } from "react";
import { Shield, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { runFullCompliance } from "@/lib/formula/compliance";
import type { IngredientInput, FormulaResult } from "@/lib/formula/calculator";
import { IFRA_CATEGORY_LABELS } from "@/lib/formula/compliance";

interface Material {
  id: string;
  name: string;
  allergens?: { allergen_name: string; concentration_pct: number; is_eu_regulated: boolean }[];
  ifraLimits?: { category: number; limit_pct: number; restriction_type?: string | null }[];
}

interface Props {
  ingredients: IngredientInput[];
  calcResult: FormulaResult;
  ifraCategory: number;
  allMaterials: Material[];
}

export function CompliancePanel({ ingredients, calcResult, ifraCategory, allMaterials }: Props) {
  const result = useMemo(() => {
    const matMap = new Map(allMaterials.map((m) => [m.id, m]));

    const compIngredients = calcResult.ingredients
      .filter((i) => i.material_id)
      .map((i) => ({
        material_id: i.material_id!,
        material_name: i.material_name,
        actual_pct: i.actual_pct,
      }));

    const ifraLimits = allMaterials.flatMap((m) =>
      (m.ifraLimits ?? []).map((l) => ({
        material_id: m.id,
        category: l.category,
        limit_pct: l.limit_pct,
        restriction_type: l.restriction_type ?? undefined,
      }))
    );

    const allergenData = allMaterials.flatMap((m) =>
      (m.allergens ?? []).map((a) => ({
        material_id: m.id,
        allergen_name: a.allergen_name,
        concentration_pct: a.concentration_pct,
        is_eu_regulated: a.is_eu_regulated ?? true,
      }))
    );

    return runFullCompliance(compIngredients, ifraLimits, allergenData, ifraCategory);
  }, [ingredients, calcResult, ifraCategory, allMaterials]);

  const allDeclarableAllergens = result.allergens.filter(
    (a) => a.requires_declaration_leave_on
  );

  return (
    <div className="p-4 space-y-4">
      {/* Status badge */}
      <div className={cn(
        "flex items-center gap-2 px-3 py-2.5 rounded-lg border",
        result.is_compliant
          ? "bg-emerald-50 border-emerald-200 text-emerald-700"
          : "bg-red-50 border-red-200 text-red-700"
      )}>
        {result.is_compliant ? (
          <CheckCircle className="h-4 w-4 shrink-0" />
        ) : (
          <AlertTriangle className="h-4 w-4 shrink-0" />
        )}
        <div>
          <p className="text-xs font-semibold">
            {result.is_compliant ? "IFRA Compliant" : `${result.violations.length} Violation${result.violations.length > 1 ? "s" : ""}`}
          </p>
          <p className="text-xs opacity-75">{IFRA_CATEGORY_LABELS[ifraCategory] ?? `Category ${ifraCategory}`}</p>
        </div>
      </div>

      {/* Violations */}
      {result.violations.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Violations</p>
          {result.violations.map((v) => (
            <div key={v.material_id} className="rounded-lg border border-red-200 bg-red-50/50 p-3">
              <p className="text-xs font-medium text-red-800">{v.material_name}</p>
              <div className="mt-1 flex items-center justify-between">
                <p className="text-xs text-red-600">
                  {v.actual_pct.toFixed(3)}% used · {v.limit_pct}% limit
                </p>
                <span className="text-xs font-mono text-red-700 font-semibold">
                  +{v.excess_pct.toFixed(3)}%
                </span>
              </div>
              {/* Visual bar */}
              <div className="mt-1.5 h-1 bg-red-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 rounded-full"
                  style={{ width: `${Math.min((v.actual_pct / (v.limit_pct * 1.5)) * 100, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Allergens */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Allergens</p>
          {result.allergens.length > 0 && (
            <span className="text-xs text-muted-foreground">{result.allergens.length} detected</span>
          )}
        </div>

        {result.allergens.length === 0 ? (
          <p className="text-xs text-muted-foreground">No allergen data available for current materials.</p>
        ) : (
          <div className="space-y-1">
            {result.allergens.map((a) => (
              <div
                key={a.allergen_name}
                className={cn(
                  "flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs",
                  a.requires_declaration_leave_on
                    ? "bg-amber-50 border border-amber-200 text-amber-800"
                    : "bg-muted/50 text-muted-foreground"
                )}
              >
                <span className="font-medium">{a.allergen_name}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono tabular-nums">{a.total_pct.toFixed(4)}%</span>
                  {a.requires_declaration_leave_on && (
                    <span className="text-amber-600" title="Requires EU declaration (leave-on)">
                      <Info className="h-3 w-3" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* EU Declaration count */}
      {allDeclarableAllergens.length > 0 && (
        <div className="rounded-lg border bg-muted/30 p-3">
          <p className="text-xs font-medium">{allDeclarableAllergens.length} allergen{allDeclarableAllergens.length > 1 ? "s" : ""} require EU declaration</p>
          <p className="text-xs text-muted-foreground mt-0.5">≥0.001% in leave-on products</p>
        </div>
      )}

      {ingredients.filter((i) => !i.material_id).length > 0 && (
        <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-2.5">
          <Info className="h-3.5 w-3.5 text-muted-foreground mt-0.5 shrink-0" />
          <p className="text-xs text-muted-foreground">
            {ingredients.filter((i) => !i.material_id).length} ingredient{ingredients.filter((i) => !i.material_id).length > 1 ? "s" : ""} not matched to database — IFRA/allergen data unavailable.
          </p>
        </div>
      )}
    </div>
  );
}
