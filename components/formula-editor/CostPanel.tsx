"use client";
import { useState } from "react";
import { DollarSign, Info } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import { calculateFinishedProductCost } from "@/lib/formula/calculator";
import type { FormulaResult } from "@/lib/formula/calculator";

interface Props {
  calcResult: FormulaResult;
  ifraCategory: number;
}

export function CostPanel({ calcResult, ifraCategory }: Props) {
  const [concentrationPct, setConcentrationPct] = useState(20);
  const [alcoholCostPerKg, setAlcoholCostPerKg] = useState(3.5);
  const [packagingCost, setPackagingCost] = useState(4.5);
  const [bottleSizeMl, setBottleSizeMl] = useState(50);
  const [targetMargin, setTargetMargin] = useState(70);

  const costPerKgConcentrate = calcResult.cost_per_kg;
  const hasCosting = costPerKgConcentrate > 0;

  const fp = hasCosting
    ? calculateFinishedProductCost(
        costPerKgConcentrate,
        concentrationPct,
        alcoholCostPerKg,
        packagingCost,
        bottleSizeMl
      )
    : null;

  const retailPrice = fp
    ? fp.costPerBottle / (1 - targetMargin / 100)
    : null;

  const topIngredients = [...calcResult.ingredients]
    .filter((i) => i.cost_contribution > 0)
    .sort((a, b) => b.cost_contribution - a.cost_contribution)
    .slice(0, 5);

  return (
    <div className="p-4 space-y-5">
      {/* Concentrate cost */}
      <div className="rounded-lg border bg-muted/30 p-3 text-center">
        <p className="text-xs text-muted-foreground">Concentrate Cost</p>
        <p className="text-2xl font-semibold tabular-nums mt-1">
          {hasCosting ? `$${costPerKgConcentrate.toFixed(2)}` : "—"}
        </p>
        <p className="text-xs text-muted-foreground">per kg</p>
      </div>

      {/* Top cost drivers */}
      {topIngredients.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Cost Drivers</p>
          <div className="space-y-1.5">
            {topIngredients.map((ing) => {
              const share = costPerKgConcentrate > 0 ? (ing.cost_contribution / costPerKgConcentrate) * 100 : 0;
              return (
                <div key={ing.id}>
                  <div className="flex items-center justify-between text-xs mb-0.5">
                    <span className="truncate max-w-[140px]">{ing.material_name}</span>
                    <span className="font-mono tabular-nums text-muted-foreground">${ing.cost_contribution.toFixed(2)}</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary/60 rounded-full"
                      style={{ width: `${Math.min(share, 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Finished product calculator */}
      <div className="space-y-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Finished Product</p>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Concentration %</label>
            <input
              type="number"
              value={concentrationPct}
              onChange={(e) => setConcentrationPct(Number(e.target.value))}
              className="w-full text-xs border border-input rounded-md px-2 py-1.5 bg-background focus:outline-none focus:ring-1 focus:ring-ring font-mono"
              min={1} max={100} step={1}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Bottle size (ml)</label>
            <input
              type="number"
              value={bottleSizeMl}
              onChange={(e) => setBottleSizeMl(Number(e.target.value))}
              className="w-full text-xs border border-input rounded-md px-2 py-1.5 bg-background focus:outline-none focus:ring-1 focus:ring-ring font-mono"
              min={1} step={5}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Alcohol $/kg</label>
            <input
              type="number"
              value={alcoholCostPerKg}
              onChange={(e) => setAlcoholCostPerKg(Number(e.target.value))}
              className="w-full text-xs border border-input rounded-md px-2 py-1.5 bg-background focus:outline-none focus:ring-1 focus:ring-ring font-mono"
              min={0} step={0.1}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Packaging $/unit</label>
            <input
              type="number"
              value={packagingCost}
              onChange={(e) => setPackagingCost(Number(e.target.value))}
              className="w-full text-xs border border-input rounded-md px-2 py-1.5 bg-background focus:outline-none focus:ring-1 focus:ring-ring font-mono"
              min={0} step={0.5}
            />
          </div>
        </div>

        {fp && (
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50">
              <span className="text-xs">COGS / bottle</span>
              <span className="text-sm font-semibold font-mono">${fp.costPerBottle.toFixed(2)}</span>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Target margin %</label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={0} max={95} step={5}
                  value={targetMargin}
                  onChange={(e) => setTargetMargin(Number(e.target.value))}
                  className="flex-1 h-1 accent-primary"
                />
                <span className="text-xs font-mono w-8">{targetMargin}%</span>
              </div>
            </div>

            {retailPrice && (
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-primary/8 border border-primary/20">
                <span className="text-xs font-medium">Suggested retail</span>
                <span className="text-base font-bold font-mono text-primary">${retailPrice.toFixed(2)}</span>
              </div>
            )}

            {/* COGS breakdown */}
            <div className="rounded-lg border p-3 space-y-1.5 text-xs">
              <p className="font-medium text-muted-foreground">COGS Breakdown</p>
              {[
                { label: "Fragrance concentrate", value: fp.cogsBreakdown.concentrate },
                { label: "Alcohol / carrier", value: fp.cogsBreakdown.alcohol },
                { label: "Packaging", value: fp.cogsBreakdown.packaging },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-mono">${value.toFixed(2)}/kg</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {!hasCosting && (
          <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-2.5">
            <Info className="h-3.5 w-3.5 text-muted-foreground mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground">
              Add materials with cost/kg to see cost calculations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
