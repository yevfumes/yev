import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { eq, desc, asc } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  
  const versions = await db.query.formulaVersions.findMany({
    where: eq(schema.formulaVersions.formula_id, params.id),
    orderBy: [desc(schema.formulaVersions.created_at)],
  });
  return NextResponse.json(versions);
}

// POST — fork current version into a new version
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  
  const { from_version_id, version_label, bump = "minor" } = await req.json();

  // Get source version
  const source = await db.query.formulaVersions.findFirst({
    where: eq(schema.formulaVersions.id, from_version_id),
    with: { ingredients: true },
  });
  if (!source) return NextResponse.json({ error: "Source version not found" }, { status: 404 });

  // Bump version number
  const [major, minor] = source.version_number.split(".").map(Number);
  const newVersionNum =
    bump === "major" ? `${major + 1}.0` : `${major}.${minor + 1}`;

  const newVersionId = nanoid();
  await db.insert(schema.formulaVersions).values({
    id: newVersionId,
    formula_id: params.id,
    version_number: newVersionNum,
    version_label: version_label || `Fork of ${source.version_number}`,
    batch_size_grams: source.batch_size_grams,
  });

  // Copy all ingredients
  if (source.ingredients.length > 0) {
    await db.insert(schema.formulaIngredients).values(
      source.ingredients.map((ing) => ({
        ...ing,
        id: nanoid(),
        version_id: newVersionId,
      }))
    );
  }

  // Set new version as current
  await db
    .update(schema.formulas)
    .set({ current_version_id: newVersionId, updated_at: new Date() })
    .where(eq(schema.formulas.id, params.id));

  return NextResponse.json({ version_id: newVersionId, version_number: newVersionNum }, { status: 201 });
}
