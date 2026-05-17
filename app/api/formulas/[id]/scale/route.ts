import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { eq, asc } from "drizzle-orm";
import { calculateFormula } from "@/lib/formula/calculator";

// POST /api/formulas/[id]/scale
// Body: { version_id, target_grams }
// Returns ingredient rows with grams scaled to target
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  
  const { version_id, target_grams } = await req.json();

  const ingredients = await db.query.formulaIngredients.findMany({
    where: eq(schema.formulaIngredients.version_id, version_id),
    with: { material: true },
    orderBy: [asc(schema.formulaIngredients.sort_order)],
  });

  const result = calculateFormula(
    ingredients.map((i) => ({
      id: i.id,
      material_id: i.material_id,
      material_name: i.material_name_raw || i.material?.name || "Unknown",
      percentage: i.percentage,
      dilution_pct: i.dilution_pct,
      cost_per_kg: i.cost_per_kg_override ?? i.material?.cost_per_kg ?? null,
      note_position: i.note_position,
    })),
    target_grams
  );

  return NextResponse.json(result);
}
