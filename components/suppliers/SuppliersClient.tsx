"use client";
import { useState } from "react";
import { Globe, Star, ChevronDown, ChevronUp, Plus, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface SupplierMaterialLink {
  id: string;
  supplier_id: string;
  material_id: string;
  cost_per_kg?: number | null;
  currency?: string | null;
  material: {
    id: string;
    name: string;
    material_type: string;
    cas_number?: string | null;
  } | null;
}

interface Supplier {
  id: string;
  name: string;
  country?: string | null;
  website?: string | null;
  email?: string | null;
  phone?: string | null;
  notes?: string | null;
  is_preferred?: boolean | null;
  supplierMaterials: SupplierMaterialLink[];
}

const defaultForm = {
  name: "",
  country: "",
  website: "",
  email: "",
  phone: "",
  notes: "",
  is_preferred: false,
};

export function SuppliersClient({ suppliers: initial }: { suppliers: Supplier[] }) {
  const [suppliers, setSuppliers] = useState(initial);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ ...defaultForm });
  const [saving, setSaving] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const setField = (k: string, v: unknown) => setForm((f) => ({ ...f, [k]: v }));

  function toggleExpand(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) { toast.error("Name is required"); return; }
    setSaving(true);
    try {
      const res = await fetch("/api/suppliers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, country: form.country || null, website: form.website || null, email: form.email || null, phone: form.phone || null, notes: form.notes || null }),
      });
      if (!res.ok) throw new Error("Failed");
      const created = await res.json();
      setSuppliers((prev) => [...prev, { ...created, supplierMaterials: [] }]);
      toast.success("Supplier added");
      setDialogOpen(false);
      setForm({ ...defaultForm });
    } catch {
      toast.error("Failed to add supplier");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-semibold">Suppliers</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{suppliers.length} supplier{suppliers.length !== 1 ? "s" : ""}</p>
        </div>
        <Button size="sm" className="gap-2" onClick={() => setDialogOpen(true)}>
          <Plus className="h-4 w-4" />
          Add Supplier
        </Button>
      </div>

      {suppliers.length === 0 && (
        <div className="text-center py-16 border rounded-xl bg-muted/20">
          <Package className="h-10 w-10 text-muted-foreground/20 mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">No suppliers yet</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-3">
        {suppliers.map((s) => {
          const isExpanded = expanded.has(s.id);
          return (
            <Card key={s.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="p-5">
                <div
                  className="flex items-start justify-between gap-4 cursor-pointer"
                  onClick={() => toggleExpand(s.id)}
                >
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
                        {s.website && (
                          <a
                            href={s.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs text-primary underline"
                          >{s.website}</a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <p className="text-sm font-semibold tabular-nums">{s.supplierMaterials.length}</p>
                      <p className="text-xs text-muted-foreground">material{s.supplierMaterials.length !== 1 ? "s" : ""}</p>
                    </div>
                    {isExpanded
                      ? <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      : <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    }
                  </div>
                </div>

                {/* Expanded material list */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t">
                    {s.notes && (
                      <p className="text-xs text-muted-foreground mb-3 italic">{s.notes}</p>
                    )}
                    {s.supplierMaterials.length === 0 ? (
                      <p className="text-xs text-muted-foreground py-2">No materials linked to this supplier.</p>
                    ) : (
                      <div className="rounded-lg border overflow-hidden">
                        <table className="w-full text-xs">
                          <thead className="bg-muted/40">
                            <tr>
                              <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Material</th>
                              <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Type</th>
                              <th className="text-left py-2 px-3 font-semibold text-muted-foreground">CAS</th>
                              <th className="text-right py-2 px-3 font-semibold text-muted-foreground">Cost/kg</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/50">
                            {s.supplierMaterials.map((sm) => (
                              <tr key={sm.id} className="hover:bg-muted/20">
                                <td className="py-2 px-3 font-medium">{sm.material?.name ?? "—"}</td>
                                <td className="py-2 px-3 text-muted-foreground capitalize">{sm.material?.material_type?.replace("_", " ") ?? "—"}</td>
                                <td className="py-2 px-3 font-mono text-muted-foreground">{sm.material?.cas_number ?? "—"}</td>
                                <td className="py-2 px-3 text-right font-mono">
                                  {sm.cost_per_kg != null ? `${sm.currency ?? "USD"} ${sm.cost_per_kg.toFixed(2)}/kg` : "—"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Add Supplier Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-lg">Add Supplier</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-2">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Name <span className="text-destructive">*</span></label>
              <Input value={form.name} onChange={(e) => setField("name", e.target.value)} placeholder="e.g. Givaudan" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Country</label>
                <Input value={form.country} onChange={(e) => setField("country", e.target.value)} placeholder="France" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Phone</label>
                <Input value={form.phone} onChange={(e) => setField("phone", e.target.value)} placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Website</label>
              <Input value={form.website} onChange={(e) => setField("website", e.target.value)} placeholder="https://givaudan.com" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <Input type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} placeholder="contact@supplier.com" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Notes</label>
              <Textarea value={form.notes} onChange={(e) => setField("notes", e.target.value)} placeholder="Additional notes…" rows={3} />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="is_preferred"
                checked={form.is_preferred}
                onChange={(e) => setField("is_preferred", e.target.checked)}
                className="rounded border-border"
              />
              <label htmlFor="is_preferred" className="text-sm cursor-pointer flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-amber-500" />
                Preferred Supplier
              </label>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button type="submit" disabled={saving}>{saving ? "Saving…" : "Add Supplier"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
