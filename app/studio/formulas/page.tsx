export const dynamic = "force-dynamic";
import { db, schema } from "@/lib/db";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { FlaskConical, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { STATUS_COLORS, FORMULA_TYPE_LABELS } from "@/lib/utils";

async function getFormulas() {
  
  return db.query.formulas.findMany({
    orderBy: [desc(schema.formulas.updated_at)],
    with: {
      versions: {
        orderBy: [desc(schema.formulaVersions.created_at)],
        limit: 1,
      },
    },
  });
}

export default async function FormulasPage() {
  const formulas = await getFormulas();

  const groups = {
    development: formulas.filter((f) => f.status === "development"),
    draft: formulas.filter((f) => f.status === "draft"),
    approved: formulas.filter((f) => f.status === "approved"),
    archived: formulas.filter((f) => f.status === "archived"),
  };

  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-semibold">Formulas</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{formulas.length} formula{formulas.length !== 1 ? "s" : ""}</p>
        </div>
        <Link href="/studio/formulas/new">
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            New Formula
          </Button>
        </Link>
      </div>

      {formulas.length === 0 ? (
        <div className="text-center py-20 border rounded-xl bg-muted/30">
          <FlaskConical className="h-12 w-12 text-muted-foreground/20 mx-auto mb-3" />
          <h3 className="font-medium text-sm mb-1">No formulas yet</h3>
          <p className="text-xs text-muted-foreground mb-4">Create your first formula to get started.</p>
          <Link href="/studio/formulas/new">
            <Button size="sm">Create Formula</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groups)
            .filter(([, items]) => items.length > 0)
            .map(([status, items]) => (
              <div key={status}>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 capitalize">
                  {status} · {items.length}
                </h2>
                <div className="grid grid-cols-1 gap-2">
                  {items.map((f) => {
                    const version = f.versions[0];
                    return (
                      <Link key={f.id} href={`/formulas/${f.id}`}>
                        <div className="group flex items-center gap-4 px-4 py-3.5 rounded-xl border bg-card hover:shadow-sm transition-all hover:border-primary/20 cursor-pointer">
                          <div className="h-9 w-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                            <FlaskConical className="h-4 w-4 text-primary" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm truncate">{f.name}</span>
                              {f.olfactory_family && (
                                <Badge variant="muted" className="text-xs shrink-0">
                                  {f.olfactory_family}
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5 truncate">
                              {FORMULA_TYPE_LABELS[f.formula_type]}
                              {version ? ` · v${version.version_number}` : ""}
                              {version?.batch_size_grams ? ` · ${version.batch_size_grams}g batch` : ""}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            {f.is_secret && (
                              <span className="text-xs text-muted-foreground/60">🔒</span>
                            )}
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${STATUS_COLORS[f.status]}`}>
                              {f.status}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
