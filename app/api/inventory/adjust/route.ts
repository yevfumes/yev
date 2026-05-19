import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { material_id, transaction_type, quantity_grams, notes, lot_number, cost_per_kg, expiry_date } = body;

  // Record transaction
  await db.insert(schema.inventoryTransactions).values({
    id: nanoid(),
    material_id,
    transaction_type,
    quantity_grams,
    reference_type: "manual",
    notes,
  });

  // Update material stock
  const mat = await db.query.materials.findFirst({ where: (m, { eq }) => eq(m.id, material_id) });
  if (!mat) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const newStock = Math.max(0, mat.stock_grams + quantity_grams);
  await db.update(schema.materials).set({ stock_grams: newStock, updated_at: new Date() }).where(eq(schema.materials.id, material_id));

  // If receive type, create a lot
  if (transaction_type === "receive" && quantity_grams > 0) {
    await db.insert(schema.inventoryLots).values({
      id: nanoid(),
      material_id,
      lot_number: lot_number || null,
      quantity_received_grams: quantity_grams,
      quantity_remaining_grams: quantity_grams,
      cost_per_kg: cost_per_kg || null,
      expiry_date: expiry_date ? new Date(expiry_date) : null,
    });
  }

  return NextResponse.json({ success: true, new_stock: newStock });
}
