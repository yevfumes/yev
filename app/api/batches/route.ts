import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { desc } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function GET() {
  const batches = await db.query.batches.findMany({
    orderBy: [desc(schema.batches.created_at)],
  });
  return NextResponse.json(batches);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const formula = await db.query.formulas.findFirst({ where: (f, { eq }) => eq(f.id, body.formula_id) });
  const batchNum = `B-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`;
  const b = await db.insert(schema.batches).values({
    id: nanoid(),
    batch_number: batchNum,
    formula_id: body.formula_id,
    version_id: formula?.current_version_id ?? null,
    quantity_grams: body.quantity_grams,
    status: "draft",
    notes: body.notes,
  }).returning();
  return NextResponse.json(b[0], { status: 201 });
}
