"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { Plus, Trash2, GripVertical, ChevronDown, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, NOTE_COLORS } from "@/lib/utils";
import type { IngredientInput, FormulaResult } from "@/lib/formula/calculator";
import { nanoid } from "nanoid";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Material {
  id: string;
  name: string;
  default_dilution: number;
  cost_per_kg?: number | null;
  note_position?: string | null;
  material_type: string;
  olfactory_family?: string | null;
  stock_grams: number;
  ifraLimits?: { category: number; limit_pct: number }[];
}

interface Props {
  ingredients: IngredientInput[];
  onChange: (updated: IngredientInput[]) => void;
  batchSize: number;
  calcResult: FormulaResult;
  allMaterials: Material[];
  ifraCategory: number;
}

const NOTE_POSITIONS = ["top", "middle", "base", "fixative", "solvent"];

function MaterialSearch({
  value,
  onSelect,
  materials,
  inputRef,
}: {
  value: string;
  onSelect: (mat: Material | null, name: string) => void;
  materials: Material[];
  inputRef?: React.RefObject<HTMLInputElement>;
}) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = query.length > 0
    ? materials.filter((m) => m.name.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : [];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        onSelect(null, query);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [query, onSelect]);

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Escape") { setOpen(false); onSelect(null, query); }
          if (e.key === "Enter" && filtered.length > 0) {
            onSelect(filtered[0], filtered[0].name);
            setQuery(filtered[0].name);
            setOpen(false);
          }
          if (e.key === "Tab") {
            if (filtered.length > 0) {
              onSelect(filtered[0], filtered[0].name);
              setQuery(filtered[0].name);
            }
            setOpen(false);
          }
        }}
        placeholder="Search or type material name..."
        className="ingredient-input w-full"
      />
      {open && filtered.length > 0 && (
        <div className="absolute top-full left-0 z-50 mt-1 w-72 bg-popover border rounded-lg shadow-lg overflow-hidden">
          {filtered.map((mat) => (
            <button
              key={mat.id}
              onMouseDown={(e) => {
                e.preventDefault();
                onSelect(mat, mat.name);
                setQuery(mat.name);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-muted transition-colors flex items-center justify-between gap-2"
            >
              <div>
                <span className="text-xs font-medium">{mat.name}</span>
                {mat.olfactory_family && (
                  <span className="text-xs text-muted-foreground ml-1.5 capitalize">{mat.olfactory_family}</span>
                )}
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {mat.note_position && (
                  <span className={cn("text-xs px-1.5 py-0.5 rounded border capitalize", NOTE_COLORS[mat.note_position] ?? "")}>
                    {mat.note_position}
                  </span>
                )}
                {mat.stock_grams === 0 && (
                  <span className="text-xs text-destructive">No stock</span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SortableRow({
  ing,
  calcIng,
  allMaterials,
  ifraCategory,
  onUpdate,
  onRemove,
  isLast,
}: {
  ing: IngredientInput;
  calcIng: any;
  allMaterials: Material[];
  ifraCategory: number;
  onUpdate: (id: string, field: string, value: any) => void;
  onRemove: (id: string) => void;
  isLast: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: ing.id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  const matRef = useRef<HTMLInputElement>(null);

  // Check IFRA violation
  const mat = allMaterials.find((m) => m.id === ing.material_id);
  const ifraLimit = mat?.ifraLimits?.find((l) => l.category === ifraCategory);
  const ifraViolation = ifraLimit && calcIng && calcIng.actual_pct > ifraLimit.limit_pct;

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className={cn(
        "formula-row-hover group",
        isDragging && "opacity-50 bg-muted"
      )}
    >
      {/* Drag handle */}
      <td className="w-6 pl-2">
        <button
          {...attributes}
          {...listeners}
          className="opacity-0 group-hover:opacity-40 hover:!opacity-70 cursor-grab active:cursor-grabbing transition-opacity"
        >
          <GripVertical className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </td>

      {/* Material name */}
      <td className="py-1 px-2 min-w-0 w-56">
        <MaterialSearch
          value={ing.material_name}
          inputRef={matRef}
          materials={allMaterials}
          onSelect={(mat, name) => {
            if (mat) {
              onUpdate(ing.id, "_material_select", mat);
            } else {
              onUpdate(ing.id, "material_name", name);
            }
          }}
        />
      </td>

      {/* Note position */}
      <td className="py-1 px-1 w-20">
        <select
          value={ing.note_position ?? ""}
          onChange={(e) => onUpdate(ing.id, "note_position", e.target.value || null)}
          className={cn(
            "text-xs rounded border-0 bg-transparent focus:outline-none w-full py-0.5 capitalize",
            ing.note_position ? NOTE_COLORS[ing.note_position] : "text-muted-foreground"
          )}
        >
          <option value="">—</option>
          {NOTE_POSITIONS.map((p) => (
            <option key={p} value={p} className="bg-background text-foreground capitalize">{p}</option>
          ))}
        </select>
      </td>

      {/* % in formula */}
      <td className="py-1 px-1 w-20">
        <div className="flex items-center gap-0.5">
          <input
            type="number"
            value={ing.percentage === 0 ? "" : ing.percentage}
            onChange={(e) => onUpdate(ing.id, "percentage", Number(e.target.value) || 0)}
            onKeyDown={(e) => {
              if (e.key === "Tab" && isLast && !e.shiftKey) {
                e.preventDefault();
                // Signal to add new row
                const event = new CustomEvent("add-ingredient-row");
                document.dispatchEvent(event);
              }
            }}
            className="ingredient-input text-right w-12"
            min={0}
            max={100}
            step={0.1}
            placeholder="0"
          />
          <span className="text-xs text-muted-foreground">%</span>
        </div>
      </td>

      {/* Dilution % */}
      <td className="py-1 px-1 w-20">
        <div className="flex items-center gap-0.5">
          <input
            type="number"
            value={ing.dilution_pct}
            onChange={(e) => onUpdate(ing.id, "dilution_pct", Number(e.target.value) || 100)}
            className="ingredient-input text-right w-12"
            min={0.1}
            max={100}
            step={1}
          />
          <span className="text-xs text-muted-foreground">%</span>
        </div>
      </td>

      {/* Actual % */}
      <td className="py-1 px-2 w-20 text-right">
        <span className="text-xs font-mono tabular-nums text-muted-foreground">
          {calcIng ? calcIng.actual_pct.toFixed(3) : "—"}%
        </span>
      </td>

      {/* Grams */}
      <td className="py-1 px-2 w-20 text-right">
        <span className="text-xs font-mono tabular-nums">
          {calcIng ? calcIng.grams.toFixed(2) : "—"}g
        </span>
      </td>

      {/* Cost contrib */}
      <td className="py-1 px-2 w-24 text-right">
        <span className="text-xs font-mono tabular-nums text-muted-foreground">
          {calcIng?.cost_contribution > 0 ? `$${calcIng.cost_contribution.toFixed(2)}` : "—"}
        </span>
      </td>

      {/* IFRA flag */}
      <td className="py-1 px-2 w-8 text-center">
        {ifraViolation && (
          <span title={`Exceeds IFRA Cat.${ifraCategory} limit (${ifraLimit!.limit_pct}%)`}>
            <AlertTriangle className="h-3.5 w-3.5 text-destructive inline" />
          </span>
        )}
      </td>

      {/* Delete */}
      <td className="py-1 pr-3 w-8 text-right">
        <button
          onClick={() => onRemove(ing.id)}
          className="opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-opacity text-destructive"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </td>
    </tr>
  );
}

export function IngredientTable({ ingredients, onChange, batchSize, calcResult, allMaterials, ifraCategory }: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const calcMap = new Map(calcResult.ingredients.map((r) => [r.id, r]));

  const addRow = useCallback(() => {
    const newIng: IngredientInput = {
      id: nanoid(),
      material_id: null,
      material_name: "",
      percentage: 0,
      dilution_pct: 100,
      cost_per_kg: null,
      note_position: null,
    };
    onChange([...ingredients, newIng]);
  }, [ingredients, onChange]);

  // Allow Tab from last row to trigger add row
  useEffect(() => {
    const handler = () => addRow();
    document.addEventListener("add-ingredient-row", handler);
    return () => document.removeEventListener("add-ingredient-row", handler);
  }, [addRow]);

  const updateField = useCallback((id: string, field: string, value: any) => {
    onChange(
      ingredients.map((ing) => {
        if (ing.id !== id) return ing;
        if (field === "_material_select") {
          const mat = value as Material;
          return {
            ...ing,
            material_id: mat.id,
            material_name: mat.name,
            dilution_pct: mat.default_dilution,
            cost_per_kg: mat.cost_per_kg ?? null,
            note_position: ing.note_position ?? mat.note_position ?? null,
          };
        }
        return { ...ing, [field]: value };
      })
    );
  }, [ingredients, onChange]);

  const removeRow = useCallback((id: string) => {
    onChange(ingredients.filter((i) => i.id !== id));
  }, [ingredients, onChange]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIdx = ingredients.findIndex((i) => i.id === active.id);
      const newIdx = ingredients.findIndex((i) => i.id === over.id);
      onChange(arrayMove(ingredients, oldIdx, newIdx));
    }
  }

  const totalPct = calcResult.total_pct;
  const isBalanced = calcResult.is_balanced;

  // Group by note position for display
  const groups = {
    top: ingredients.filter((i) => i.note_position === "top"),
    middle: ingredients.filter((i) => i.note_position === "middle"),
    base: ingredients.filter((i) => ["base", "fixative"].includes(i.note_position ?? "")),
    other: ingredients.filter((i) => !i.note_position || i.note_position === "solvent"),
  };

  return (
    <div className="min-h-full">
      {/* Table */}
      <div className="px-4 pt-2">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="w-6" />
                <th className="text-left py-2 px-2 text-xs font-medium text-muted-foreground w-56">Material</th>
                <th className="text-left py-2 px-1 text-xs font-medium text-muted-foreground w-20">Note</th>
                <th className="text-right py-2 px-1 text-xs font-medium text-muted-foreground w-20">%</th>
                <th className="text-right py-2 px-1 text-xs font-medium text-muted-foreground w-20">Dilution</th>
                <th className="text-right py-2 px-2 text-xs font-medium text-muted-foreground w-20">Actual %</th>
                <th className="text-right py-2 px-2 text-xs font-medium text-muted-foreground w-20">Grams</th>
                <th className="text-right py-2 px-2 text-xs font-medium text-muted-foreground w-24">Cost/kg</th>
                <th className="w-8" />
                <th className="w-8" />
              </tr>
            </thead>
            <SortableContext items={ingredients.map((i) => i.id)} strategy={verticalListSortingStrategy}>
              <tbody className="divide-y divide-border/50">
                {ingredients.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="py-12 text-center text-muted-foreground text-sm">
                      No ingredients yet. Click "Add Ingredient" to start.
                    </td>
                  </tr>
                ) : (
                  ingredients.map((ing, idx) => (
                    <SortableRow
                      key={ing.id}
                      ing={ing}
                      calcIng={calcMap.get(ing.id)}
                      allMaterials={allMaterials}
                      ifraCategory={ifraCategory}
                      onUpdate={updateField}
                      onRemove={removeRow}
                      isLast={idx === ingredients.length - 1}
                    />
                  ))
                )}
              </tbody>
            </SortableContext>

            {/* Totals row */}
            {ingredients.length > 0 && (
              <tfoot>
                <tr className="border-t-2 border-border">
                  <td colSpan={3} className="py-2 px-2 text-xs font-semibold text-muted-foreground">
                    TOTAL · {ingredients.length} ingredient{ingredients.length !== 1 ? "s" : ""}
                  </td>
                  <td className="py-2 px-1 text-right">
                    <span className={cn(
                      "text-sm font-semibold tabular-nums font-mono",
                      isBalanced ? "text-emerald-600" : "text-amber-600"
                    )}>
                      {totalPct.toFixed(2)}%
                    </span>
                  </td>
                  <td />
                  <td className="py-2 px-2 text-right text-xs font-mono tabular-nums text-muted-foreground">
                    {calcResult.total_actual_pct.toFixed(3)}%
                  </td>
                  <td className="py-2 px-2 text-right text-xs font-mono tabular-nums">
                    {batchSize.toFixed(1)}g
                  </td>
                  <td className="py-2 px-2 text-right text-xs font-mono font-semibold tabular-nums">
                    {calcResult.cost_per_kg > 0 ? `$${calcResult.cost_per_kg.toFixed(2)}/kg` : "—"}
                  </td>
                  <td colSpan={2} />
                </tr>
              </tfoot>
            )}
          </table>
        </DndContext>
      </div>

      {/* Add ingredient button */}
      <div className="px-6 py-4">
        <Button variant="outline" size="sm" onClick={addRow} className="gap-2 text-xs">
          <Plus className="h-3.5 w-3.5" />
          Add Ingredient
        </Button>
        <span className="ml-3 text-xs text-muted-foreground">or press Tab from the last row</span>
      </div>

      {/* Balance warning */}
      {ingredients.length > 0 && !isBalanced && (
        <div className="mx-6 mb-4 px-4 py-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 text-xs flex items-center gap-2">
          <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
          Formula totals {totalPct.toFixed(2)}% — should be 100%. Adjust ingredient percentages.
        </div>
      )}

      {/* Note distribution visual */}
      {ingredients.some((i) => i.note_position) && (
        <div className="mx-6 mb-6">
          <p className="text-xs font-medium text-muted-foreground mb-2">Pyramid</p>
          <div className="grid grid-cols-3 gap-2">
            {(["top", "middle", "base"] as const).map((pos) => {
              const pct = ingredients
                .filter((i) => i.note_position === pos)
                .reduce((s, i) => s + i.percentage, 0);
              return (
                <div key={pos} className={cn("rounded-lg border px-3 py-2 text-center", NOTE_COLORS[pos])}>
                  <p className="text-xs font-semibold capitalize">{pos}</p>
                  <p className="text-sm font-mono tabular-nums mt-0.5">{pct.toFixed(1)}%</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
