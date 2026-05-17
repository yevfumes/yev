import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { eq } from "drizzle-orm";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  
  const formula = await db.query.formulas.findFirst({
    where: eq(schema.formulas.id, params.id),
    with: {
      versions: {
        with: { ingredients: { with: { material: true } } },
        orderBy: (v, { desc }) => [desc(v.created_at)],
      },
      evaluations: { orderBy: (e, { desc }) => [desc(e.eval_date)] },
    },
  });

  if (!formula) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(formula);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  
  const body = await req.json();

  const updated = await db
    .update(schema.formulas)
    .set({ ...body, updated_at: new Date() })
    .where(eq(schema.formulas.id, params.id))
    .returning();

  return NextResponse.json(updated[0]);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  
  await db.delete(schema.formulas).where(eq(schema.formulas.id, params.id));
  return new NextResponse(null, { status: 204 });
}
