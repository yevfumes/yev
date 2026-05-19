export const dynamic = "force-dynamic";
import { db, schema } from "@/lib/db";
import { asc } from "drizzle-orm";
import { SuppliersClient } from "@/components/suppliers/SuppliersClient";

export default async function SuppliersPage() {
  const suppliers = await db.query.suppliers.findMany({
    orderBy: [asc(schema.suppliers.name)],
    with: { supplierMaterials: { with: { material: true } } },
  });

  return <SuppliersClient suppliers={suppliers} />;
}
