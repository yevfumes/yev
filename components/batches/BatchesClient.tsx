"use client";
import { useState } from "react";
import { Factory, Plus, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Batch {
  id: string;
  batch_number: string;
  formula_id: string;
  version_id?: string | null;
  quantity_grams: number;
  status: string;
  produced_date?: Date | null;
  notes?: string | null;
  created_at?: Date | null;
}

interface Formula {
  id: string;
  name: string;
  formula_type: string;
  status: string;
  current_version_id?: string | null;
}

const STATUS_CONFIG: Record<string, { label: string; classes: string }> = {
  draft: { label: "Draft", classes: "bg-muted text-muted-foreground border border-border" },
  in_progress: { label: "In Progress", classes: "bg-amber-50 text-amber-700 border border-amber-200" },
  completed: { label: "Completed", classes: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  qc_hold: { label: "QC Hold", classes: "bg-orange-50 text-orange-700 border border-orange-200" },
  rejected: { label: "Rejected", classes: "bg-red-50 text-red-700 border border-red-200" },
};

export function BatchesClient({ batches: initial, formulas }: { batches: Batch[]; formulas: Formula[] }) {
  const [batches, setBatches] = useState(initial);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formulaId, setFormulaId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  const formulaMap = new Map(formulas.map((f) => [f.id, f]));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formulaId) { toast.error("Select a formula"); return; }
    const qty = parseFloat(quantity);
    if (isNaN(qty) || qty <= 0) { toast.error("Enter a valid quantity"); return; }
    setSaving(true);
    try {
      const res = await fetch("/api/batches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formula_id: formulaId, quantity_grams: qty, notes: notes || null }),
      });
      if (!res.ok) throw new Error("Failed");
      const created = await res.json();
      setBatches((prev) => [created, ...prev]);
      toast.success(`Batch ${created.batch_number} created`);
      setDialogOpen(false);
      setFormulaId("");
      setQuantity("");
      setNotes("");
    } catch {
      toast.error("Failed to create batch");
    } finally {
      setSaving(false);
    }
  }

  async function updateStatus(batchId: string, status: string) {
    try {
      const res = await fetch(`/api/batches/${batchId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed");
      setBatches((prev) => prev.map((b) => b.id === batchId ? { ...b, status } : b));
      toast.success("Status updated");
    } catch {
      toast.error("Failed to update status");
    }
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-semibold">Production Batches</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{batches.length} batch{batches.length !== 1 ? "es" : ""}</p>
        </div>
        <Button size="sm" className="gap-2" onClick={() => setDialogOpen(true)}>
          <Plus className="h-4 w-4" />
          New Batch
        </Button>
      </div>

      {batches.length === 0 ? (
        <div className="text-center py-20 border rounded-xl bg-muted/20">
          <Factory className="h-12 w-12 text-muted-foreground/20 mx-auto mb-3" />
          <p className="text-sm font-medium text-muted-foreground">No batches yet</p>
          <p className="text-xs text-muted-foreground/70 mt-1">Create your first production batch above</p>
        </div>
      ) : (
        <div className="rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr>
                <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground">Batch</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-muted-foreground">Formula</th>
                <th className="text-right py-2.5 px-3 text-xs font-semibold text-muted-foreground w-28">Quantity</th>
                <th className="text-center py-2.5 px-3 text-xs font-semibold text-muted-foreground w-32">Status</th>
                <th className="text-right py-2.5 px-3 text-xs font-semibold text-muted-foreground w-36">Created</th>
                <th className="py-2.5 px-3 w-36 text-xs font-semibold text-muted-foreground"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {batches.map((b) => {
                const formula = formulaMap.get(b.formula_id);
                const statusCfg = STATUS_CONFIG[b.status] ?? STATUS_CONFIG.draft;
                return (
                  <tr key={b.id} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <p className="font-mono text-sm font-medium">{b.batch_number}</p>
                      {b.notes && (
                        <p className="text-xs text-muted-foreground truncate max-w-xs mt-0.5">{b.notes}</p>
                      )}
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1.5">
                        <FlaskConical className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                        <span className="text-sm">{formula?.name ?? <span className="text-muted-foreground italic">Unknown</span>}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="font-mono text-sm tabular-nums">{b.quantity_grams}g</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className={cn("inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium", statusCfg.classes)}>
                        {statusCfg.label}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="text-xs text-muted-foreground">
                        {b.created_at ? new Date(b.created_at).toLocaleDateString() : "—"}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <Select value={b.status} onValueChange={(v) => updateStatus(b.id, v)}>
                        <SelectTrigger className="h-7 text-xs w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                            <SelectItem key={key} value={key} className="text-xs">{cfg.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* New Batch Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-lg">New Production Batch</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-2">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Formula <span className="text-destructive">*</span></label>
              <Select value={formulaId} onValueChange={setFormulaId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select formula…" />
                </SelectTrigger>
                <SelectContent>
                  {formulas.map((f) => (
                    <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Quantity (grams) <span className="text-destructive">*</span></label>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="1000"
                min={0}
                step={0.1}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Notes</label>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Batch notes, special instructions…" rows={3} />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button type="submit" disabled={saving}>{saving ? "Creating…" : "Create Batch"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
