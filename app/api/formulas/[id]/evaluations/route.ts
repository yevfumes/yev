import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { eq, desc } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  
  const evals = await db.query.formulaEvaluations.findMany({
    where: eq(schema.formulaEvaluations.formula_id, params.id),
    orderBy: [desc(schema.formulaEvaluations.eval_date)],
  });
  return NextResponse.json(evals);
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  
  const body = await req.json();

  const ev = await db.insert(schema.formulaEvaluations).values({
    id: nanoid(),
    formula_id: params.id,
    version_id: body.version_id ?? null,
    evaluator_name: body.evaluator_name ?? null,
    rating: body.rating ?? null,
    notes: body.notes,
    attributes: body.attributes ?? null,
    eval_date: new Date(),
  }).returning();

  return NextResponse.json(ev[0], { status: 201 });
}
