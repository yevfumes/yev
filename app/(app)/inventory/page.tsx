export const dynamic = "force-dynamic";
import { db, schema } from "@/lib/db";
import { asc, desc } from "drizzle-orm";
import { InventoryClient } from "@/components/inventory/InventoryClient";

async function getInventory() {
  const materials = await db.query.materials.findMany({
    orderBy: [asc(schema.materials.name)],
    with: { inventoryLots: { orderBy: [desc(schema.inventoryLots.received_date)] } },
  });
  return materials;
}

export default async function InventoryPage() {
  const materials = await getInventory();
  return <InventoryClient materials={materials} />;
}
