"use client";
import { useState } from "react";
import { AlertTriangle, TrendingDown, Package, Boxes, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { cn, formatWeight } from "@/lib/utils";

interface Material {
  id: string;
  name: string;
  material_type: string;
  stock_grams: number;
  reorder_threshold_grams?: number | null;
  storage_location?: string | null;
  cost_per_kg?: number | null;
}

const TRANSACTION_TYPES = ["receive", "use", "adjust", "waste", "sample"];

export function InventoryClient({ materials: initial }: { materials: Material[] }) {
  const [materials, setMaterials] = useState(initial);
  const [adjustTarget, setAdjustTarget] = useState<Material | null>(null);
  const [txType, setTxType] = useState("receive");
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");
  const [lotNumber, setLotNumber] = useState("");
  const [costPerKg, setCostPerKg] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [saving, setSaving] = useState(false);

  const lowStock = materials.filter(
    (m) => m.reorder_threshold_grams != null && m.stock_grams <= m.reorder_threshold_grams
  );
  const outOfStock = materials.filter((m) => m.stock_grams === 0);
  const totalValue = materials.reduce((s, m) => s + (m.stock_grams / 1000) * (m.cost_per_kg ?? 0), 0);

  function openAdjust(m: Material) {
    setAdjustTarget(m);
    setTxType("receive");
    setQuantity("");
    setNotes("");
    setLotNumber("");
    setCostPerKg("");
    setExpiryDate("");
  }

  async function handleAdjust(e: React.FormEvent) {
    e.preventDefault();
    if (!adjustTarget) return;
    const qty = parseFloat(quantity);
    if (isNaN(qty) || qty === 0) { toast.error("Enter a non-zero quantity"); return; }

    setSaving(true);
    try {
      const payload: Record<string, unknown> = {
        material_id: adjustTarget.id,
        transaction_type: txType,
        quantity_grams: qty,
        notes: notes || null,
      };
      if (txType === "receive") {
        payload.lot_number = lotNumber || null;
        payload.cost_per_kg = costPerKg ? parseFloat(costPerKg) : null;
        payload.expiry_date = expiryDate || null;
      }

      const res = await fetch("/api/inventory/adjust", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setMaterials((prev) =>
        prev.map((m) => m.id === adjustTarget.id ? { ...m, stock_grams: data.new_stock } : m)
      );
      toast.success(`Stock updated — new total: ${formatWeight(data.new_stock)}`);
      setAdjustTarget(null);
    } catch {
      toast.error("Failed to adjust stock");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="p-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-semibold">Inventory</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Stock levels across all materials</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Materials", value: materials.length, icon: Package, alert: false },
          { label: "Low Stock", value: lowStock.length, icon: AlertTriangle, alert: lowStock.length > 0 },
          { label: "Out of Stock", value: outOfStock.length, icon: TrendingDown, alert: outOfStock.length > 0 },
          { label: "Est. Value", value: `$${totalValue.toFixed(0)}`, icon: Boxes, alert: false },
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
              <th className="py-2.5 px-3 text-xs font-semibold text-muted-foreground w-28"></th>
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
                  <td className="py-3 px-3 text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 text-xs gap-1.5"
                      onClick={() => openAdjust(m)}
                    >
                      <SlidersHorizontal className="h-3 w-3" />
                      Adjust
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Adjust Stock Dialog */}
      <Dialog open={!!adjustTarget} onOpenChange={(open) => { if (!open) setAdjustTarget(null); }}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-lg">
              Adjust Stock — {adjustTarget?.name}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAdjust} className="space-y-4 py-2">
            {/* Current stock */}
            {adjustTarget && (
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 text-sm">
                <span className="text-muted-foreground">Current stock</span>
                <span className="font-mono font-semibold">{formatWeight(adjustTarget.stock_grams)}</span>
              </div>
            )}

            {/* Transaction type */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Transaction Type</label>
              <Select value={txType} onValueChange={setTxType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TRANSACTION_TYPES.map((t) => (
                    <SelectItem key={t} value={t} className="capitalize">{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">
                Quantity (grams) — {txType === "receive" ? "positive to add" : "positive = add, negative = remove"}
              </label>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder={txType === "receive" ? "500" : "-100"}
                step="0.1"
              />
            </div>

            {/* Receive-specific fields */}
            {txType === "receive" && (
              <div className="space-y-3 pt-1 border-t">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide pt-1">Lot Details</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Lot Number</label>
                    <Input value={lotNumber} onChange={(e) => setLotNumber(e.target.value)} placeholder="LOT-2024-001" className="font-mono" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Cost per kg ($)</label>
                    <Input type="number" value={costPerKg} onChange={(e) => setCostPerKg(e.target.value)} placeholder="0.00" min={0} />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Expiry Date</label>
                  <Input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                </div>
              </div>
            )}

            {/* Notes */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Notes</label>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Reason for adjustment…" rows={2} />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setAdjustTarget(null)}>Cancel</Button>
              <Button type="submit" disabled={saving}>{saving ? "Saving…" : "Apply Adjustment"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
