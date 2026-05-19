import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { eq } from "drizzle-orm";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const updated = await db.update(schema.batches).set(body).where(eq(schema.batches.id, params.id)).returning();
  return NextResponse.json(updated[0]);
}
