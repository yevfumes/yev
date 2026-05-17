"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FlaskConical } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const FORMULA_TYPES = [
  { value: "concentrate", label: "Concentrate", desc: "Pure fragrance concentrate" },
  { value: "finished_product", label: "Finished Product", desc: "Ready-to-sell formula with alcohol/carriers" },
  { value: "accord", label: "Accord", desc: "Reusable sub-formula / building block" },
  { value: "base", label: "Base", desc: "Functional base formula" },
];

const IFRA_CATEGORIES = [
  { value: 1, label: "Cat. 1 – Toys / Children's products" },
  { value: 2, label: "Cat. 2 – Deodorant / Antiperspirant" },
  { value: 3, label: "Cat. 3 – Eye / Oral / Mucous membranes" },
  { value: 4, label: "Cat. 4 – Fine Fragrance" },
  { value: 5, label: "Cat. 5 – Body Lotion / Cream / Oil" },
  { value: 6, label: "Cat. 6 – Face cream / Mask" },
  { value: 7, label: "Cat. 7 – Hair products (leave-on)" },
  { value: 8, label: "Cat. 8 – Rinse-off / Body wash" },
  { value: 9, label: "Cat. 9 – Bar soap" },
  { value: 10, label: "Cat. 10 – Household cleaning" },
  { value: 11, label: "Cat. 11 – Candle / Diffuser" },
];

export default function NewFormulaPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    formula_type: "concentrate",
    description: "",
    ifra_category: 4,
    batch_size_grams: 100,
    olfactory_family: "",
  });

  async function handleCreate() {
    if (!form.name.trim()) return toast.error("Formula name is required");
    setLoading(true);
    try {
      const res = await fetch("/api/formulas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      toast.success(`Formula created: ${data.name}`);
      router.push(`/formulas/${data.id}`);
    } catch {
      toast.error("Failed to create formula");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 max-w-2xl">
      <Link href="/formulas" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" />
        Formulas
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <FlaskConical className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-serif font-semibold">New Formula</h1>
          <p className="text-sm text-muted-foreground">Set up your formula properties</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Formula Name <span className="text-destructive">*</span></label>
          <Input
            placeholder="e.g. Nuit Ambrée No.2, Bergamot Accord..."
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && handleCreate()}
            autoFocus
          />
        </div>

        {/* Type */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Formula Type</label>
          <div className="grid grid-cols-2 gap-2">
            {FORMULA_TYPES.map((t) => (
              <button
                key={t.value}
                onClick={() => setForm({ ...form, formula_type: t.value })}
                className={`text-left px-4 py-3 rounded-lg border transition-all ${
                  form.formula_type === t.value
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border bg-card hover:border-primary/30 text-muted-foreground"
                }`}
              >
                <p className="text-sm font-medium">{t.label}</p>
                <p className="text-xs opacity-70 mt-0.5">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Description <span className="text-muted-foreground font-normal">(optional)</span></label>
          <Textarea
            placeholder="Brief description of the scent, inspiration, or brief..."
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Batch Size */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Design Batch Size (g)</label>
            <Input
              type="number"
              value={form.batch_size_grams}
              onChange={(e) => setForm({ ...form, batch_size_grams: Number(e.target.value) })}
              min={1}
            />
            <p className="text-xs text-muted-foreground">The batch size formula percentages are calculated for</p>
          </div>

          {/* IFRA Category */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium">IFRA Category</label>
            <select
              value={form.ifra_category}
              onChange={(e) => setForm({ ...form, ifra_category: Number(e.target.value) })}
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {IFRA_CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Olfactory family */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Olfactory Family <span className="text-muted-foreground font-normal">(optional)</span></label>
          <div className="flex flex-wrap gap-2">
            {["floral", "woody", "oriental", "fresh", "fougere", "chypre", "gourmand", "aromatic", "aquatic"].map((f) => (
              <button
                key={f}
                onClick={() => setForm({ ...form, olfactory_family: form.olfactory_family === f ? "" : f })}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all capitalize ${
                  form.olfactory_family === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <Button onClick={handleCreate} disabled={loading} className="min-w-32">
            {loading ? "Creating..." : "Create Formula"}
          </Button>
          <Link href="/formulas">
            <Button variant="ghost">Cancel</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
