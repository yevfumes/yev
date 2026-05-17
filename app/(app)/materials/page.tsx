export const dynamic = "force-dynamic";
import { db, schema } from "@/lib/db";
import { asc } from "drizzle-orm";
import Link from "next/link";
import { Beaker, Plus, AlertTriangle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatWeight } from "@/lib/utils";
import { MaterialsClient } from "@/components/materials/MaterialsClient";

async function getMaterials() {
  
  return db.query.materials.findMany({
    with: { allergens: true, ifraLimits: true },
    orderBy: [asc(schema.materials.name)],
  });
}

export default async function MaterialsPage() {
  const materials = await getMaterials();
  return <MaterialsClient materials={materials as any} />;
}
