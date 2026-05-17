import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { eq } from "drizzle-orm";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  
  const mat = await db.query.materials.findFirst({
    where: eq(schema.materials.id, params.id),
    with: { allergens: true, ifraLimits: true, supplierLinks: { with: { supplier: true } } },
  });
  if (!mat) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(mat);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  
  const body = await req.json();
  const updated = await db
    .update(schema.materials)
    .set({ ...body, updated_at: new Date() })
    .where(eq(schema.materials.id, params.id))
    .returning();
  return NextResponse.json(updated[0]);
}
