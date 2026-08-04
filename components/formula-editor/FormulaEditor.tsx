"use client";
import { useState, useCallback, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { IngredientTable } from "./IngredientTable";
import { CompliancePanel } from "./CompliancePanel";
import { CostPanel } from "./CostPanel";
import { EvaluationsPanel } from "./EvaluationsPanel";
import { VersionHistory } from "./VersionHistory";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Save, FlaskConical, GitBranch, Clock, Scale, ChevronDown, Shield, DollarSign, Star, ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { calculateFormula } from "@/lib/formula/calculator";
import { cn, STATUS_COLORS, FORMULA_TYPE_LABELS } from "@/lib/utils";
import type { IngredientInput } from "@/lib/formula/calculator";

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
  allergens?: any[];
  ifraLimits?: any[];
}

interface Ingredient {
  id: string;
  material_id?: string | null;
  material_name_raw?: string | null;
  material?: Material | null;
  percentage: number;
  dilution_pct: number;
  note_position?: string | null;
  sort_order: number;
  cost_per_kg_override?: number | null;
  notes?: string | null;
}

interface Version {
  id: string;
  version_number: string;
  version_label?: string | null;
  batch_size_grams: number;
  notes?: string | null;
  created_at?: Date | null;
  ingredients: Ingredient[];
}

interface Formula {
  id: string;
  name: string;
  formula_type: string;
  description?: string | null;
  olfactory_family?: string | null;
  odor_descriptors?: string | null;
  ifra_category?: number | null;
  status: string;
  current_version_id?: string | null;
  versions: Version[];
  evaluations?: any[];
}

function ingredientToInput(ing: Ingredient): IngredientInput {
  return {
    id: ing.id,
    material_id: ing.material_id,
    material_name: ing.material_name_raw || ing.material?.name || "Unknown",
    percentage: ing.percentage,
    dilution_pct: ing.dilution_pct,
    cost_per_kg: ing.cost_per_kg_override ?? ing.material?.cost_per_kg ?? null,
    note_position: ing.note_position,
  };
}

export function FormulaEditor({ formula, allMaterials }: { formula: Formula; allMaterials: Material[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Active version
  const initialVersion = formula.versions.find((v) => v.id === formula.current_version_id)
    ?? formula.versions[0];

  const [activeVersion, setActiveVersion] = useState<Version>(initialVersion);
  const [ingredients, setIngredients] = useState<IngredientInput[]>(
    initialVersion?.ingredients.map(ingredientToInput) ?? []
  );
  const [batchSize, setBatchSize] = useState(initialVersion?.batch_size_grams ?? 100);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Live calculation
  const calc = calculateFormula(ingredients, batchSize);

  const handleIngredientsChange = useCallback((updated: IngredientInput[]) => {
    setIngredients(updated);
    setIsDirty(true);
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`/api/formulas/${formula.id}/ingredients`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          version_id: activeVersion.id,
          ingredients: ingredients.map((ing, i) => ({
            ...ing,
            sort_order: i,
            material_name_raw: ing.material_name,
          })),
        }),
      });
      if (!res.ok) throw new Error();
      toast.success("Formula saved");
      setIsDirty(false);
      startTransition(() => router.refresh());
    } catch {
      toast.error("Save failed");
    } finally {
      setIsSaving(false);
    }
  };

  const handleForkVersion = async () => {
    const label = prompt("Label for new version (e.g. 'After panel test'):");
    if (label === null) return;
    try {
      const res = await fetch(`/api/formulas/${formula.id}/versions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from_version_id: activeVersion.id, version_label: label, bump: "minor" }),
      });
      if (!res.ok) throw new Error();
      toast.success("New version created");
      router.refresh();
    } catch {
      toast.error("Failed to create version");
    }
  };

  const handleStatusChange = async (status: string) => {
    try {
      await fetch(`/api/formulas/${formula.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      toast.success(`Status → ${status}`);
      startTransition(() => router.refresh());
    } catch {
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Top Bar */}
      <header className="border-b bg-card/80 backdrop-blur shrink-0">
        <div className="flex items-center justify-between px-6 h-14 gap-4">
          {/* Left: breadcrumb + name */}
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/studio/formulas" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div className="h-4 w-px bg-border" />
            <FlaskConical className="h-4 w-4 text-primary shrink-0" />
            <h1 className="font-semibold text-sm truncate">{formula.name}</h1>
            <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium capitalize shrink-0", STATUS_COLORS[formula.status])}>
              {formula.status}
            </span>
            {formula.olfactory_family && (
              <Badge variant="muted" className="shrink-0 text-xs capitalize">{formula.olfactory_family}</Badge>
            )}
          </div>

          {/* Center: version selector */}
          <div className="flex items-center gap-2 shrink-0">
            <select
              value={activeVersion?.id}
              onChange={(e) => {
                const v = formula.versions.find((v) => v.id === e.target.value);
                if (v) {
                  setActiveVersion(v);
                  setIngredients(v.ingredients.map(ingredientToInput));
                  setBatchSize(v.batch_size_grams);
                  setIsDirty(false);
                }
              }}
              className="text-xs border border-input rounded-md px-2 py-1.5 bg-background focus:outline-none focus:ring-1 focus:ring-ring"
            >
              {formula.versions.map((v) => (
                <option key={v.id} value={v.id}>
                  v{v.version_number}{v.version_label ? ` — ${v.version_label}` : ""}
                </option>
              ))}
            </select>
            <Button variant="outline" size="icon-sm" onClick={handleForkVersion} title="Fork version">
              <GitBranch className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-2 shrink-0">
            {isDirty && (
              <span className="text-xs text-amber-600 font-medium">Unsaved changes</span>
            )}
            <Button
              variant={isDirty ? "default" : "outline"}
              size="sm"
              onClick={handleSave}
              disabled={isSaving}
              className="gap-1.5"
            >
              <Save className="h-3.5 w-3.5" />
              {isSaving ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>

        {/* IFRA / type sub-bar */}
        <div className="flex items-center gap-4 px-6 h-8 border-t bg-muted/30 text-xs text-muted-foreground">
          <span>{FORMULA_TYPE_LABELS[formula.formula_type]}</span>
          <span className="h-3 w-px bg-border" />
          <span>IFRA Cat. {formula.ifra_category ?? 4}</span>
          <span className="h-3 w-px bg-border" />
          <span>
            Batch:{" "}
            <input
              type="number"
              value={batchSize}
              onChange={(e) => { setBatchSize(Number(e.target.value)); setIsDirty(true); }}
              className="w-16 bg-transparent border-b border-dashed border-muted-foreground/40 focus:outline-none focus:border-primary text-center ml-1"
              min={0.1}
              step={10}
            />
            {" "}g
          </span>
          <span className="h-3 w-px bg-border" />
          <span className={cn("font-medium", Math.abs(calc.total_pct - 100) < 0.01 ? "text-emerald-600" : "text-amber-600")}>
            {calc.total_pct.toFixed(2)}% total
          </span>
        </div>
      </header>

      {/* Main 3-panel layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* CENTER: Ingredient Table */}
        <div className="flex-1 overflow-auto">
          <IngredientTable
            ingredients={ingredients}
            onChange={handleIngredientsChange}
            batchSize={batchSize}
            calcResult={calc}
            allMaterials={allMaterials}
            ifraCategory={formula.ifra_category ?? 4}
          />
        </div>

        {/* RIGHT: Panels */}
        <div className="w-80 shrink-0 border-l bg-card overflow-auto">
          <Tabs defaultValue="compliance">
            <div className="px-4 pt-3 pb-0">
              <TabsList className="w-full grid grid-cols-3 h-8">
                <TabsTrigger value="compliance" className="text-xs gap-1">
                  <Shield className="h-3 w-3" />IFRA
                </TabsTrigger>
                <TabsTrigger value="cost" className="text-xs gap-1">
                  <DollarSign className="h-3 w-3" />Cost
                </TabsTrigger>
                <TabsTrigger value="notes" className="text-xs gap-1">
                  <Star className="h-3 w-3" />Eval
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="compliance" className="mt-0">
              <CompliancePanel
                ingredients={ingredients}
                calcResult={calc}
                ifraCategory={formula.ifra_category ?? 4}
                allMaterials={allMaterials}
              />
            </TabsContent>

            <TabsContent value="cost" className="mt-0">
              <CostPanel
                calcResult={calc}
                ifraCategory={formula.ifra_category ?? 4}
              />
            </TabsContent>

            <TabsContent value="notes" className="mt-0">
              <EvaluationsPanel
                formulaId={formula.id}
                versionId={activeVersion.id}
                evaluations={formula.evaluations ?? []}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
