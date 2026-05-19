"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Beaker, Plus, Search, AlertTriangle, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cn, formatWeight, NOTE_COLORS } from "@/lib/utils";

interface Material {
  id: string;
  name: string;
  cas_number?: string | null;
  material_type: string;
  note_position?: string | null;
  odor_descriptors?: string | null;
  olfactory_family?: string | null;
  default_dilution: number;
  cost_per_kg?: number | null;
  stock_grams: number;
  reorder_threshold_grams?: number | null;
  is_restricted?: boolean | null;
  allergens?: { allergen_name: string; concentration_pct: number }[];
  ifraLimits?: { category: number; limit_pct: number }[];
}

const TYPE_LABELS: Record<string, string> = {
  synthetic: "Synthetic",
  essential_oil: "Essential Oil",
  absolute: "Absolute",
  isolate: "Isolate",
  natural: "Natural",
  base: "Base",
  accord: "Accord",
};

const FAMILIES = ["floral", "woody", "oriental", "fresh", "fougere", "chypre", "gourmand", "aromatic", "aquatic", "musk"];
const TYPES = ["synthetic", "essential_oil", "absolute", "isolate"];
const MATERIAL_TYPES = ["synthetic", "essential_oil", "absolute", "isolate", "natural", "base", "accord"];
const NOTE_POSITIONS = ["top", "middle", "base", "fixative", "solvent"];

interface AddMaterialForm {
  name: string;
  cas_number: string;
  fema_number: string;
  material_type: string;
  note_position: string;
  olfactory_family: string;
  odor_descriptors: string;
  default_dilution: string;
  cost_per_kg: string;
  stock_grams: string;
  reorder_threshold_grams: string;
  storage_location: string;
  notes: string;
}

const defaultForm: AddMaterialForm = {
  name: "",
  cas_number: "",
  fema_number: "",
  material_type: "synthetic",
  note_position: "",
  olfactory_family: "",
  odor_descriptors: "",
  default_dilution: "100",
  cost_per_kg: "",
  stock_grams: "0",
  reorder_threshold_grams: "",
  storage_location: "",
  notes: "",
};

export function MaterialsClient({ materials }: { materials: Material[] }) {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [familyFilter, setFamilyFilter] = useState("");
  const [lowStockOnly, setLowStockOnly] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [form, setForm] = useState<AddMaterialForm>(defaultForm);
  const [saving, setSaving] = useState(false);

  function setField(field: keyof AddMaterialForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleAddMaterial(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Material name is required");
      return;
    }
    setSaving(true);
    try {
      const payload: Record<string, unknown> = {
        name: form.name.trim(),
        material_type: form.material_type || "synthetic",
        default_dilution: parseFloat(form.default_dilution) || 100,
        stock_grams: parseFloat(form.stock_grams) || 0,
      };
      if (form.cas_number) payload.cas_number = form.cas_number;
      if (form.fema_number) payload.fema_number = form.fema_number;
      if (form.note_position) payload.note_position = form.note_position;
      if (form.olfactory_family) payload.olfactory_family = form.olfactory_family;
      if (form.odor_descriptors) payload.odor_descriptors = form.odor_descriptors;
      if (form.cost_per_kg) payload.cost_per_kg = parseFloat(form.cost_per_kg);
      if (form.reorder_threshold_grams) payload.reorder_threshold_grams = parseFloat(form.reorder_threshold_grams);
      if (form.storage_location) payload.storage_location = form.storage_location;
      if (form.notes) payload.notes = form.notes;

      const res = await fetch("/api/materials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to add material");
      toast.success("Material added");
      setAddOpen(false);
      setForm(defaultForm);
      window.location.reload();
    } catch {
      toast.error("Failed to add material");
    } finally {
      setSaving(false);
    }
  }

  const filtered = useMemo(() => {
    let results = materials;
    if (query) {
      const q = query.toLowerCase();
      results = results.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.cas_number?.toLowerCase().includes(q) ||
          m.odor_descriptors?.toLowerCase().includes(q) ||
          m.olfactory_family?.toLowerCase().includes(q)
      );
    }
    if (typeFilter) results = results.filter((m) => m.material_type === typeFilter);
    if (familyFilter) results = results.filter((m) => m.olfactory_family === familyFilter);
    if (lowStockOnly) results = results.filter((m) =>
      m.reorder_threshold_grams != null && m.stock_grams <= m.reorder_threshold_grams
    );
    return results;
  }, [materials, query, typeFilter, familyFilter, lowStockOnly]);

  const lowStockCount = materials.filter(
    (m) => m.reorder_threshold_grams != null && m.stock_grams <= m.reorder_threshold_grams
  ).length;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-serif font-semibold">Materials</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{materials.length} in database</p>
        </div>
        <Button size="sm" className="gap-2" onClick={() => setAddOpen(true)}>
          <Plus className="h-4 w-4" />
          Add Material
        </Button>
      </div>

      {/* Add Material Dialog */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif">Add Material</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddMaterial} className="space-y-4 py-2">
            {/* Name */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Name *</label>
              <Input
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                placeholder="e.g. Iso E Super"
                required
              />
            </div>

            {/* CAS / FEMA */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">CAS Number</label>
                <Input
                  value={form.cas_number}
                  onChange={(e) => setField("cas_number", e.target.value)}
                  placeholder="e.g. 54464-57-2"
                  className="font-mono"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">FEMA Number</label>
                <Input
                  value={form.fema_number}
                  onChange={(e) => setField("fema_number", e.target.value)}
                  placeholder="e.g. 3440"
                  className="font-mono"
                />
              </div>
            </div>

            {/* Type + Note Position */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Material Type</label>
                <Select value={form.material_type} onValueChange={(v) => setField("material_type", v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {MATERIAL_TYPES.map((t) => (
                      <SelectItem key={t} value={t} className="capitalize">
                        {TYPE_LABELS[t] ?? t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Note Position</label>
                <Select value={form.note_position || "_none"} onValueChange={(v) => setField("note_position", v === "_none" ? "" : v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="_none">None</SelectItem>
                    {NOTE_POSITIONS.map((p) => (
                      <SelectItem key={p} value={p} className="capitalize">{p}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Olfactory Family */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Olfactory Family</label>
              <div className="flex flex-wrap gap-1.5">
                {FAMILIES.map((f) => (
                  <button
                    type="button"
                    key={f}
                    onClick={() => setField("olfactory_family", form.olfactory_family === f ? "" : f)}
                    className={cn(
                      "text-xs px-2.5 py-1 rounded-full border transition-all capitalize",
                      form.olfactory_family === f
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary/40"
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Odor descriptors */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Odor Descriptors</label>
              <Input
                value={form.odor_descriptors}
                onChange={(e) => setField("odor_descriptors", e.target.value)}
                placeholder="e.g. woody, cedar, smoky (comma-separated)"
              />
            </div>

            {/* Numbers row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Dilution %</label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={form.default_dilution}
                  onChange={(e) => setField("default_dilution", e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Cost/kg ($)</label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.cost_per_kg}
                  onChange={(e) => setField("cost_per_kg", e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Stock (g)</label>
                <Input
                  type="number"
                  min="0"
                  step="0.1"
                  value={form.stock_grams}
                  onChange={(e) => setField("stock_grams", e.target.value)}
                />
              </div>
            </div>

            {/* Reorder + Location */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Reorder Threshold (g)</label>
                <Input
                  type="number"
                  min="0"
                  step="0.1"
                  value={form.reorder_threshold_grams}
                  onChange={(e) => setField("reorder_threshold_grams", e.target.value)}
                  placeholder="e.g. 50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Storage Location</label>
                <Input
                  value={form.storage_location}
                  onChange={(e) => setField("storage_location", e.target.value)}
                  placeholder="e.g. Shelf A3"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Notes</label>
              <Textarea
                value={form.notes}
                onChange={(e) => setField("notes", e.target.value)}
                placeholder="Any additional notes…"
                rows={3}
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setAddOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? "Adding…" : "Add Material"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Search + Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative flex-1 min-w-64 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search materials, CAS, descriptors..."
            className="pl-9 h-8 text-sm"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Type filter */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(typeFilter === t ? "" : t)}
              className={cn(
                "text-xs px-2.5 py-1 rounded-full border transition-all capitalize",
                typeFilter === t
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-foreground/40"
              )}
            >
              {TYPE_LABELS[t] ?? t}
            </button>
          ))}
        </div>

        {/* Low stock toggle */}
        {lowStockCount > 0 && (
          <button
            onClick={() => setLowStockOnly(!lowStockOnly)}
            className={cn(
              "flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-all",
              lowStockOnly
                ? "bg-amber-500 text-white border-amber-500"
                : "border-amber-300 text-amber-700 hover:bg-amber-50"
            )}
          >
            <AlertTriangle className="h-3 w-3" />
            {lowStockCount} low stock
          </button>
        )}

        {/* Result count */}
        {(query || typeFilter || familyFilter || lowStockOnly) && (
          <span className="text-xs text-muted-foreground">{filtered.length} results</span>
        )}
      </div>

      {/* Olfactory family filter row */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {FAMILIES.map((f) => (
          <button
            key={f}
            onClick={() => setFamilyFilter(familyFilter === f ? "" : f)}
            className={cn(
              "text-xs px-2.5 py-1 rounded-full border transition-all capitalize",
              familyFilter === f
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:border-primary/30"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Materials table */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 border rounded-xl bg-muted/20">
          <Beaker className="h-10 w-10 text-muted-foreground/20 mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">No materials found</p>
        </div>
      ) : (
        <div className="rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr>
                <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground">Material</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-muted-foreground w-28">Type</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-muted-foreground w-24">Note</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-muted-foreground w-32">Odor Family</th>
                <th className="text-right py-2.5 px-3 text-xs font-semibold text-muted-foreground w-24">Dilution</th>
                <th className="text-right py-2.5 px-3 text-xs font-semibold text-muted-foreground w-24">Stock</th>
                <th className="text-right py-2.5 px-3 text-xs font-semibold text-muted-foreground w-24">Cost/kg</th>
                <th className="py-2.5 px-3 w-20 text-center text-xs font-semibold text-muted-foreground">Flags</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filtered.map((m) => {
                const lowStock = m.reorder_threshold_grams != null && m.stock_grams <= m.reorder_threshold_grams;
                const hasAllergens = (m.allergens?.length ?? 0) > 0;
                return (
                  <tr key={m.id} className="hover:bg-muted/30 transition-colors cursor-pointer">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-sm">{m.name}</p>
                        {m.cas_number && (
                          <p className="text-xs text-muted-foreground font-mono">{m.cas_number}</p>
                        )}
                        {m.odor_descriptors && (
                          <p className="text-xs text-muted-foreground/70 truncate max-w-xs mt-0.5">
                            {m.odor_descriptors}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="text-xs capitalize text-muted-foreground">
                        {TYPE_LABELS[m.material_type] ?? m.material_type}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      {m.note_position && (
                        <span className={cn("text-xs px-2 py-0.5 rounded-full border capitalize", NOTE_COLORS[m.note_position] ?? "")}>
                          {m.note_position}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3">
                      {m.olfactory_family && (
                        <span className="text-xs text-muted-foreground capitalize">{m.olfactory_family}</span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="text-xs font-mono tabular-nums text-muted-foreground">
                        {m.default_dilution === 100 ? "Neat" : `${m.default_dilution}%`}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className={cn("text-xs font-mono tabular-nums", lowStock ? "text-amber-600 font-medium" : "")}>
                        {formatWeight(m.stock_grams)}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="text-xs font-mono tabular-nums">
                        {m.cost_per_kg != null ? `$${m.cost_per_kg.toFixed(0)}/kg` : "—"}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center justify-center gap-1.5">
                        {lowStock && (
                          <span title="Low stock">
                            <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                          </span>
                        )}
                        {m.is_restricted && (
                          <span title="IFRA restricted">
                            <Shield className="h-3.5 w-3.5 text-blue-500" />
                          </span>
                        )}
                        {hasAllergens && (
                          <span title={`${m.allergens!.length} allergen(s)`} className="text-xs text-rose-500 font-medium">
                            A
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
