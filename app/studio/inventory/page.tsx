export const dynamic = "force-dynamic";
import { db, schema } from "@/lib/db";
import { asc, desc } from "drizzle-orm";
import Link from "next/link";
import { Boxes, AlertTriangle, TrendingDown, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatWeight } from "@/lib/utils";
import { cn } from "@/lib/utils";

async function getInventory() {
  
  const materials = await db.query.materials.findMany({
    orderBy: [asc(schema.materials.name)],
    with: { inventoryLots: { orderBy: [desc(schema.inventoryLots.received_date)] } },
  });
  return materials;
}

export default async function InventoryPage() {
  const materials = await getInventory();
  const lowStock = materials.filter(
    (m) => m.reorder_threshold_grams != null && m.stock_grams <= m.reorder_threshold_grams
  );
  const outOfStock = materials.filter((m) => m.stock_grams === 0);
  const totalValue = materials.reduce((s, m) => s + (m.stock_grams / 1000) * (m.cost_per_kg ?? 0), 0);

  return (
    <div className="p-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-semibold">Inventory</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Stock levels across all materials</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Materials", value: materials.length, icon: Package },
          { label: "Low Stock", value: lowStock.length, icon: AlertTriangle, alert: lowStock.length > 0 },
          { label: "Out of Stock", value: outOfStock.length, icon: TrendingDown, alert: outOfStock.length > 0 },
          { label: "Est. Value", value: `$${totalValue.toFixed(0)}`, icon: Boxes },
        ].map(({ label, value, icon: Icon, alert }) => (
          <Card key={label} className={alert ? "border-amber-200" : ""}>
            <CardContent className="p-4 flex items-center gap-3">
              <div className={cn("p-2 rounded-lg", alert ? "bg-amber-50" : "bg-muted")}>
                <Icon className={cn("h-4 w-4", alert ? "text-amber-600" : "text-muted-foreground")} />
              </div>
              <div>
                <p className="text-xl font-semibold tabular-nums">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alerts */}
      {lowStock.length > 0 && (
        <div className="mb-6 p-4 rounded-xl border border-amber-200 bg-amber-50">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <h2 className="text-sm font-semibold text-amber-800">Reorder Required</h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {lowStock.map((m) => (
              <div key={m.id} className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
                <span className="text-xs font-medium">{m.name}</span>
                <span className="text-xs text-amber-700 font-mono">{formatWeight(m.stock_grams)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Full inventory table */}
      <div className="rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground">Material</th>
              <th className="text-right py-2.5 px-3 text-xs font-semibold text-muted-foreground w-28">Stock</th>
              <th className="text-right py-2.5 px-3 text-xs font-semibold text-muted-foreground w-28">Reorder At</th>
              <th className="text-left py-2.5 px-3 text-xs font-semibold text-muted-foreground w-32">Location</th>
              <th className="text-right py-2.5 px-3 text-xs font-semibold text-muted-foreground w-28">Est. Value</th>
              <th className="text-center py-2.5 px-3 text-xs font-semibold text-muted-foreground w-24">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {materials.map((m) => {
              const isLow = m.reorder_threshold_grams != null && m.stock_grams <= m.reorder_threshold_grams;
              const isEmpty = m.stock_grams === 0;
              const value = (m.stock_grams / 1000) * (m.cost_per_kg ?? 0);

              return (
                <tr key={m.id} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4">
                    <p className="font-medium text-sm">{m.name}</p>
                    {m.material_type && (
                      <p className="text-xs text-muted-foreground capitalize">{m.material_type.replace("_", " ")}</p>
                    )}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className={cn(
                      "text-sm font-mono tabular-nums font-semibold",
                      isEmpty ? "text-destructive" : isLow ? "text-amber-600" : "text-foreground"
                    )}>
                      {formatWeight(m.stock_grams)}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className="text-xs font-mono tabular-nums text-muted-foreground">
                      {m.reorder_threshold_grams != null ? formatWeight(m.reorder_threshold_grams) : "—"}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="text-xs text-muted-foreground">{m.storage_location || "—"}</span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className="text-xs font-mono tabular-nums text-muted-foreground">
                      {value > 0 ? `$${value.toFixed(2)}` : "—"}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className={cn(
                      "inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium",
                      isEmpty
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : isLow
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    )}>
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        isEmpty ? "bg-red-500" : isLow ? "bg-amber-500" : "bg-emerald-500"
                      )} />
                      {isEmpty ? "Empty" : isLow ? "Low" : "OK"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
