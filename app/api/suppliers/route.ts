import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { asc } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function GET() {
  const suppliers = await db.query.suppliers.findMany({
    orderBy: [asc(schema.suppliers.name)],
    with: { supplierMaterials: { with: { material: true } } },
  });
  return NextResponse.json(suppliers);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const s = await db.insert(schema.suppliers).values({ id: nanoid(), ...body }).returning();
  return NextResponse.json(s[0], { status: 201 });
}
