import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { like, or, asc, desc } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function GET(req: NextRequest) {
  
  const q = req.nextUrl.searchParams.get("q")?.trim();
  const type = req.nextUrl.searchParams.get("type");
  const family = req.nextUrl.searchParams.get("family");
  const lowStock = req.nextUrl.searchParams.get("low_stock") === "1";

  const materials = await db.query.materials.findMany({
    with: { allergens: true, ifraLimits: true },
    orderBy: [asc(schema.materials.name)],
  });

  let filtered = materials;

  if (q) {
    const lower = q.toLowerCase();
    filtered = filtered.filter(
      (m) =>
        m.name.toLowerCase().includes(lower) ||
        m.cas_number?.toLowerCase().includes(lower) ||
        m.odor_descriptors?.toLowerCase().includes(lower) ||
        m.olfactory_family?.toLowerCase().includes(lower)
    );
  }
  if (type) filtered = filtered.filter((m) => m.material_type === type);
  if (family) filtered = filtered.filter((m) => m.olfactory_family === family);
  if (lowStock)
    filtered = filtered.filter(
      (m) =>
        m.reorder_threshold_grams != null &&
        m.stock_grams <= m.reorder_threshold_grams
    );

  return NextResponse.json(filtered);
}

export async function POST(req: NextRequest) {
  
  const body = await req.json();

  const mat = await db
    .insert(schema.materials)
    .values({ id: nanoid(), ...body })
    .returning();

  return NextResponse.json(mat[0], { status: 201 });
}
