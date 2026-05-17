"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Beaker, Plus, Search, AlertTriangle, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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

export function MaterialsClient({ materials }: { materials: Material[] }) {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [familyFilter, setFamilyFilter] = useState("");
  const [lowStockOnly, setLowStockOnly] = useState(false);

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
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Material
        </Button>
      </div>

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
