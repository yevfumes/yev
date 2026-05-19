export const dynamic = "force-dynamic";
import { db, schema } from "@/lib/db";
import { desc, asc } from "drizzle-orm";
import { BatchesClient } from "@/components/batches/BatchesClient";

export default async function BatchesPage() {
  const [batches, formulas] = await Promise.all([
    db.query.batches.findMany({
      orderBy: [desc(schema.batches.created_at)],
    }),
    db.query.formulas.findMany({
      orderBy: [asc(schema.formulas.name)],
    }),
  ]);

  return <BatchesClient batches={batches} formulas={formulas} />;
}
