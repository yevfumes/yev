"use client";
import { useState } from "react";
import { Globe, Star, Plus, ChevronDown, ChevronRight, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface SupplierMaterial {
  id: string;
  material_id: string;
  cost_per_kg?: number | null;
  supplier_code?: string | null;
  lead_time_days?: number | null;
  material: {
    id: string;
    name: string;
    material_type: string;
    stock_grams: number;
  };
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
  supplierMaterials: SupplierMaterial[];
}

interface AddSupplierForm {
  name: string;
  country: string;
  website: string;
  email: string;
  phone: string;
  notes: string;
  is_preferred: boolean;
}

const defaultForm: AddSupplierForm = {
  name: "",
  country: "",
  website: "",
  email: "",
  phone: "",
  notes: "",
  is_preferred: false,
};

export function SuppliersClient({ suppliers: initialSuppliers }: { suppliers: Supplier[] }) {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [addOpen, setAddOpen] = useState(false);
  const [form, setForm] = useState<AddSupplierForm>(defaultForm);
  const [saving, setSaving] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function setField<K extends keyof AddSupplierForm>(field: K, value: AddSupplierForm[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleAddSupplier(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Supplier name is required");
      return;
    }
    setSaving(true);
    try {
      const payload: Record<string, unknown> = { name: form.name.trim(), is_preferred: form.is_preferred };
      if (form.country) payload.country = form.country;
      if (form.website) payload.website = form.website;
      if (form.email) payload.email = form.email;
      if (form.phone) payload.phone = form.phone;
      if (form.notes) payload.notes = form.notes;

      const res = await fetch("/api/suppliers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to add supplier");
      const newSupplier = await res.json();
      setSuppliers((prev) => [...prev, { ...newSupplier, supplierMaterials: [] }]);
      toast.success("Supplier added");
      setAddOpen(false);
      setForm(defaultForm);
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
          <p className="text-sm text-muted-foreground mt-0.5">
            {suppliers.length} supplier{suppliers.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Button size="sm" className="gap-2" onClick={() => setAddOpen(true)}>
          <Plus className="h-4 w-4" />
          Add Supplier
        </Button>
      </div>

      {suppliers.length === 0 ? (
        <div className="text-center py-16 border rounded-xl bg-muted/20">
          <p className="text-sm text-muted-foreground">No suppliers yet. Add your first supplier.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {suppliers.map((s) => {
            const isExpanded = expandedId === s.id;
            return (
              <Card key={s.id} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-0">
                  <button
                    className="w-full text-left p-5 flex items-start justify-between gap-4"
                    onClick={() => setExpandedId(isExpanded ? null : s.id)}
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
                              <Globe className="h-3 w-3" />
                              {s.country}
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
                              className="text-xs text-primary hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {s.website.replace(/^https?:\/\//, "")}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right">
                        <p className="text-sm font-semibold tabular-nums">{s.supplierMaterials.length}</p>
                        <p className="text-xs text-muted-foreground">material{s.supplierMaterials.length !== 1 ? "s" : ""}</p>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {/* Expanded materials */}
                  {isExpanded && (
                    <div className="border-t bg-muted/20 px-5 py-4">
                      {s.supplierMaterials.length === 0 ? (
                        <p className="text-xs text-muted-foreground py-2">No materials linked to this supplier.</p>
                      ) : (
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                            Materials
                          </p>
                          <div className="grid grid-cols-1 gap-2">
                            {s.supplierMaterials.map((sm) => (
                              <div
                                key={sm.id}
                                className="flex items-center justify-between bg-background rounded-lg px-3 py-2 border border-border/60"
                              >
                                <div className="flex items-center gap-2">
                                  <Package className="h-3.5 w-3.5 text-muted-foreground" />
                                  <span className="text-sm font-medium">{sm.material.name}</span>
                                  <span className="text-xs text-muted-foreground capitalize">
                                    {sm.material.material_type.replace("_", " ")}
                                  </span>
                                  {sm.supplier_code && (
                                    <span className="text-xs font-mono text-muted-foreground/60">
                                      #{sm.supplier_code}
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                  {sm.cost_per_kg != null && (
                                    <span className="font-mono">${sm.cost_per_kg.toFixed(0)}/kg</span>
                                  )}
                                  {sm.lead_time_days != null && (
                                    <span>{sm.lead_time_days}d lead</span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {s.notes && (
                        <p className="text-xs text-muted-foreground mt-3 italic">{s.notes}</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Add Supplier Dialog */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif">Add Supplier</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddSupplier} className="space-y-4 py-2">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Name *</label>
              <Input
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                placeholder="e.g. Symrise, Givaudan…"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Country</label>
                <Input
                  value={form.country}
                  onChange={(e) => setField("country", e.target.value)}
                  placeholder="e.g. USA, France…"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Phone</label>
                <Input
                  value={form.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  placeholder="+1 555…"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder="sales@supplier.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Website</label>
              <Input
                value={form.website}
                onChange={(e) => setField("website", e.target.value)}
                placeholder="https://…"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Notes</label>
              <Textarea
                value={form.notes}
                onChange={(e) => setField("notes", e.target.value)}
                placeholder="Any notes about this supplier…"
                rows={3}
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.is_preferred}
                onChange={(e) => setField("is_preferred", e.target.checked)}
                className="rounded border-border"
              />
              <span className="text-sm">Mark as preferred supplier</span>
            </label>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setAddOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? "Adding…" : "Add Supplier"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
