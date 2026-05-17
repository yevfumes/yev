import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { desc, eq } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function GET() {
  
  const formulas = await db.query.formulas.findMany({
    orderBy: [desc(schema.formulas.updated_at)],
    with: {
      versions: {
        orderBy: [desc(schema.formulaVersions.created_at)],
        limit: 1,
      },
    },
  });
  return NextResponse.json(formulas);
}

export async function POST(req: NextRequest) {
  
  const body = await req.json();

  const formulaId = nanoid();
  const versionId = nanoid();

  const formula = await db
    .insert(schema.formulas)
    .values({
      id: formulaId,
      name: body.name || "Untitled Formula",
      formula_type: body.formula_type || "concentrate",
      description: body.description,
      ifra_category: body.ifra_category ?? 4,
      status: "draft",
      current_version_id: versionId,
    })
    .returning();

  await db.insert(schema.formulaVersions).values({
    id: versionId,
    formula_id: formulaId,
    version_number: "1.0",
    version_label: "Initial",
    batch_size_grams: body.batch_size_grams || 100,
  });

  return NextResponse.json(formula[0], { status: 201 });
}
