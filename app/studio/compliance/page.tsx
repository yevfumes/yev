export const dynamic = "force-dynamic";
import { db, schema } from "@/lib/db";
import { desc } from "drizzle-orm";
import { Shield, CheckCircle, AlertTriangle, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IFRA_CATEGORY_LABELS } from "@/lib/formula/compliance";
import { calculateFormula } from "@/lib/formula/calculator";
import { runFullCompliance } from "@/lib/formula/compliance";

async function getComplianceData() {
  
  const formulas = await db.query.formulas.findMany({
    with: {
      versions: {
        orderBy: [desc(schema.formulaVersions.created_at)],
        limit: 1,
        with: {
          ingredients: { with: { material: { with: { allergens: true, ifraLimits: true } } } },
        },
      },
    },
    orderBy: [desc(schema.formulas.updated_at)],
  });

  const allMaterials = await db.query.materials.findMany({
    with: { allergens: true, ifraLimits: true },
  });

  return { formulas, allMaterials };
}

export default async function CompliancePage() {
  const { formulas, allMaterials } = await getComplianceData();

  const ifraLimits = allMaterials.flatMap((m) =>
    (m.ifraLimits ?? []).map((l) => ({ material_id: m.id, category: l.category, limit_pct: l.limit_pct }))
  );
  const allergenData = allMaterials.flatMap((m) =>
    (m.allergens ?? []).map((a) => ({ material_id: m.id, allergen_name: a.allergen_name, concentration_pct: a.concentration_pct, is_eu_regulated: a.is_eu_regulated ?? true }))
  );

  const complianceResults = formulas.map((formula) => {
    const version = formula.versions[0];
    if (!version) return { formula, compliant: null, violations: [] };

    const ingredients = version.ingredients.map((i) => ({
      id: i.id,
      material_id: i.material_id,
      material_name: i.material_name_raw || i.material?.name || "Unknown",
      percentage: i.percentage,
      dilution_pct: i.dilution_pct,
      cost_per_kg: i.material?.cost_per_kg ?? null,
      note_position: i.note_position,
    }));

    const calc = calculateFormula(ingredients, version.batch_size_grams);
    const compIngredients = calc.ingredients
      .filter((i) => i.material_id)
      .map((i) => ({ material_id: i.material_id!, material_name: i.material_name, actual_pct: i.actual_pct }));

    const result = runFullCompliance(compIngredients, ifraLimits, allergenData, formula.ifra_category ?? 4);
    return { formula, compliant: result.is_compliant, violations: result.violations, allergens: result.allergens };
  });

  const compliantCount = complianceResults.filter((r) => r.compliant === true).length;
  const violatingCount = complianceResults.filter((r) => r.compliant === false).length;

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-semibold">Compliance</h1>
        <p className="text-sm text-muted-foreground mt-0.5">IFRA and allergen status across all formulas</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="border-emerald-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50"><CheckCircle className="h-4 w-4 text-emerald-600" /></div>
            <div>
              <p className="text-xl font-semibold">{compliantCount}</p>
              <p className="text-xs text-muted-foreground">Compliant</p>
            </div>
          </CardContent>
        </Card>
        <Card className={violatingCount > 0 ? "border-red-200" : ""}>
          <CardContent className="p-4 flex items-center gap-3">
            <div className={`p-2 rounded-lg ${violatingCount > 0 ? "bg-red-50" : "bg-muted"}`}>
              <AlertTriangle className={`h-4 w-4 ${violatingCount > 0 ? "text-red-600" : "text-muted-foreground"}`} />
            </div>
            <div>
              <p className="text-xl font-semibold">{violatingCount}</p>
              <p className="text-xs text-muted-foreground">Violations</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-muted"><FlaskConical className="h-4 w-4 text-muted-foreground" /></div>
            <div>
              <p className="text-xl font-semibold">{formulas.length}</p>
              <p className="text-xs text-muted-foreground">Total Formulas</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Formula compliance table */}
      <div className="rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground">Formula</th>
              <th className="text-left py-2.5 px-3 text-xs font-semibold text-muted-foreground w-40">IFRA Category</th>
              <th className="text-center py-2.5 px-3 text-xs font-semibold text-muted-foreground w-28">IFRA Status</th>
              <th className="text-right py-2.5 px-3 text-xs font-semibold text-muted-foreground w-24">Allergens</th>
              <th className="py-2.5 px-3 text-xs font-semibold text-muted-foreground w-28">Violations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {complianceResults.map(({ formula, compliant, violations, allergens }) => (
              <tr key={formula.id} className="hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4">
                  <p className="font-medium text-sm">{formula.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">{formula.formula_type}</p>
                </td>
                <td className="py-3 px-3">
                  <span className="text-xs text-muted-foreground">
                    {IFRA_CATEGORY_LABELS[formula.ifra_category ?? 4] ?? `Cat. ${formula.ifra_category}`}
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  {compliant === null ? (
                    <span className="text-xs text-muted-foreground">No data</span>
                  ) : compliant ? (
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle className="h-3 w-3" />Pass
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                      <AlertTriangle className="h-3 w-3" />Fail
                    </span>
                  )}
                </td>
                <td className="py-3 px-3 text-right">
                  <span className="text-xs tabular-nums">
                    {(allergens ?? []).filter((a) => a.requires_declaration_leave_on).length || "—"}
                  </span>
                </td>
                <td className="py-3 px-3">
                  {violations && violations.length > 0 ? (
                    <span className="text-xs text-red-600">{violations.map((v) => v.material_name).join(", ")}</span>
                  ) : (
                    <span className="text-xs text-muted-foreground">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
