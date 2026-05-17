import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { eq, asc } from "drizzle-orm";
import { nanoid } from "nanoid";

// GET /api/formulas/[id]/ingredients?version_id=xxx
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  
  const versionId = req.nextUrl.searchParams.get("version_id");
  if (!versionId) return NextResponse.json({ error: "version_id required" }, { status: 400 });

  const ingredients = await db.query.formulaIngredients.findMany({
    where: eq(schema.formulaIngredients.version_id, versionId),
    with: { material: true },
    orderBy: [asc(schema.formulaIngredients.sort_order)],
  });
  return NextResponse.json(ingredients);
}

// POST — add an ingredient to a version
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  
  const body = await req.json();

  const ingredient = await db
    .insert(schema.formulaIngredients)
    .values({
      id: nanoid(),
      version_id: body.version_id,
      formula_id: params.id,
      material_id: body.material_id ?? null,
      material_name_raw: body.material_name_raw || body.material_name,
      percentage: body.percentage ?? 0,
      dilution_pct: body.dilution_pct ?? 100,
      note_position: body.note_position ?? null,
      sort_order: body.sort_order ?? 99,
    })
    .returning();

  return NextResponse.json(ingredient[0], { status: 201 });
}

// PUT — replace all ingredients for a version (bulk save)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  
  const { version_id, ingredients } = await req.json();

  // Delete existing
  await db
    .delete(schema.formulaIngredients)
    .where(eq(schema.formulaIngredients.version_id, version_id));

  if (ingredients?.length > 0) {
    await db.insert(schema.formulaIngredients).values(
      ingredients.map((ing: any, i: number) => ({
        id: ing.id || nanoid(),
        version_id,
        formula_id: params.id,
        material_id: ing.material_id ?? null,
        material_name_raw: ing.material_name_raw || ing.material_name,
        percentage: ing.percentage ?? 0,
        dilution_pct: ing.dilution_pct ?? 100,
        note_position: ing.note_position ?? null,
        cost_per_kg_override: ing.cost_per_kg_override ?? null,
        sort_order: i,
        notes: ing.notes ?? null,
      }))
    );
  }

  // Update version cache
  await db
    .update(schema.formulaVersions)
    .set({ total_cost_per_kg: null })
    .where(eq(schema.formulaVersions.id, version_id));

  return NextResponse.json({ ok: true });
}
