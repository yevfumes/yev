export const dynamic = "force-dynamic";
import { db, schema } from "@/lib/db";
import { asc } from "drizzle-orm";
import { Users, Globe, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function SuppliersPage() {
  
  const suppliers = await db.query.suppliers.findMany({
    orderBy: [asc(schema.suppliers.name)],
    with: { supplierMaterials: { with: { material: true } } },
  });

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-semibold">Suppliers</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{suppliers.length} supplier{suppliers.length !== 1 ? "s" : ""}</p>
        </div>
        <Button size="sm">Add Supplier</Button>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {suppliers.map((s) => (
          <Card key={s.id} className="hover:shadow-sm transition-shadow">
            <CardContent className="p-5 flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground shrink-0">
                  {s.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm">{s.name}</h3>
                    {s.is_preferred && (
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-0.5">
                    {s.country && (
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Globe className="h-3 w-3" />{s.country}
                      </span>
                    )}
                    {s.email && (
                      <span className="text-xs text-muted-foreground">{s.email}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-semibold tabular-nums">{s.supplierMaterials.length}</p>
                <p className="text-xs text-muted-foreground">material{s.supplierMaterials.length !== 1 ? "s" : ""}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
