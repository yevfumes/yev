"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, Plus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { format } from "date-fns";

interface Evaluation {
  id: string;
  evaluator_name?: string | null;
  rating?: number | null;
  notes: string;
  attributes?: string | null;
  eval_date?: Date | null;
  version_id?: string | null;
}

interface Props {
  formulaId: string;
  versionId: string;
  evaluations: Evaluation[];
}

const ATTRIBUTE_TAGS = ["longevity", "sillage", "balance", "uniqueness", "complexity", "naturalness"];

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={cn(
            "text-sm transition-colors",
            n <= value ? "text-amber-400" : "text-muted-foreground/20"
          )}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export function EvaluationsPanel({ formulaId, versionId, evaluations }: Props) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    notes: "",
    rating: 0,
    evaluator_name: "",
    attributes: [] as string[],
  });

  async function submit() {
    if (!form.notes.trim()) return toast.error("Notes required");
    setLoading(true);
    try {
      const res = await fetch(`/api/formulas/${formulaId}/evaluations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, version_id: versionId, attributes: form.attributes.join(",") }),
      });
      if (!res.ok) throw new Error();
      toast.success("Evaluation saved");
      setForm({ notes: "", rating: 0, evaluator_name: "", attributes: [] });
      setShowForm(false);
      router.refresh();
    } catch {
      toast.error("Failed to save");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Evaluations · {evaluations.length}
        </p>
        <Button size="icon-sm" variant="outline" onClick={() => setShowForm(!showForm)}>
          <Plus className="h-3.5 w-3.5" />
        </Button>
      </div>

      {/* Add form */}
      {showForm && (
        <div className="rounded-lg border p-3 space-y-3 animate-fade-in">
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Rating (1–10)</label>
            <StarRating value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Evaluator</label>
            <input
              type="text"
              value={form.evaluator_name}
              onChange={(e) => setForm({ ...form, evaluator_name: e.target.value })}
              placeholder="Your name..."
              className="w-full text-xs border border-input rounded-md px-2 py-1.5 bg-background focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Notes</label>
            <Textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Observations, impressions, what to change..."
              rows={4}
              className="text-xs resize-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Attributes</label>
            <div className="flex flex-wrap gap-1">
              {ATTRIBUTE_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setForm({
                    ...form,
                    attributes: form.attributes.includes(tag)
                      ? form.attributes.filter((a) => a !== tag)
                      : [...form.attributes, tag],
                  })}
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full border transition-all capitalize",
                    form.attributes.includes(tag)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" onClick={submit} disabled={loading} className="text-xs">
              {loading ? "Saving..." : "Save Evaluation"}
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setShowForm(false)} className="text-xs">
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Evaluation list */}
      {evaluations.length === 0 && !showForm ? (
        <div className="text-center py-8">
          <Star className="h-6 w-6 text-muted-foreground/20 mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">No evaluations yet</p>
          <Button size="sm" variant="link" className="text-xs mt-1" onClick={() => setShowForm(true)}>
            Add first evaluation
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {evaluations.map((ev) => (
            <div key={ev.id} className="rounded-lg border p-3 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">{ev.evaluator_name || "Anonymous"}</span>
                  {ev.rating != null && (
                    <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded-full font-mono">
                      {ev.rating}/10
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {ev.eval_date ? format(new Date(ev.eval_date), "MMM d, yyyy") : "—"}
                </div>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed">{ev.notes}</p>
              {ev.attributes && (
                <div className="flex flex-wrap gap-1">
                  {ev.attributes.split(",").filter(Boolean).map((attr) => (
                    <span key={attr} className="text-xs px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground capitalize">
                      {attr}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
