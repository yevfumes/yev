export const dynamic = "force-dynamic";
import { db, schema } from "@/lib/db";
import { desc, lte, sql } from "drizzle-orm";
import Link from "next/link";
import { FlaskConical, Beaker, AlertTriangle, TrendingUp, Plus, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatWeight, STATUS_COLORS } from "@/lib/utils";

async function getDashboardData() {
  

  const formulas = await db.query.formulas.findMany({
    orderBy: [desc(schema.formulas.updated_at)],
    limit: 6,
    with: { versions: { limit: 1, orderBy: [desc(schema.formulaVersions.created_at)] } },
  });

  const allMaterials = await db.query.materials.findMany();
  const totalMaterials = allMaterials.length;
  const lowStock = allMaterials.filter(
    (m) => m.reorder_threshold_grams != null && m.stock_grams <= m.reorder_threshold_grams
  );

  const totalFormulas = await db.query.formulas.findMany();

  return { formulas, totalMaterials, lowStock, totalCount: totalFormulas.length };
}

export default async function DashboardPage() {
  const { formulas, totalMaterials, lowStock, totalCount } = await getDashboardData();

  const stats = [
    { label: "Formulas", value: totalCount, icon: FlaskConical, href: "/formulas" },
    { label: "Materials", value: totalMaterials, icon: Beaker, href: "/materials" },
    { label: "Low Stock", value: lowStock.length, icon: AlertTriangle, href: "/inventory", alert: lowStock.length > 0 },
  ];

  return (
    <div className="p-8 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-semibold text-foreground">Studio</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Your perfumery workspace</p>
        </div>
        <Link href="/studio/formulas/new">
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            New Formula
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon, href, alert }) => (
          <Link key={label} href={href}>
            <Card className={`hover:shadow-md transition-shadow cursor-pointer ${alert ? "border-amber-200" : ""}`}>
              <CardContent className="p-5 flex items-center gap-4">
                <div className={`p-2.5 rounded-lg ${alert ? "bg-amber-50" : "bg-muted"}`}>
                  <Icon className={`h-5 w-5 ${alert ? "text-amber-600" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <p className="text-2xl font-semibold tabular-nums">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Recent Formulas */}
        <div className="col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-foreground">Recent Formulas</h2>
            <Link href="/studio/formulas" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
              All formulas <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="space-y-2">
            {formulas.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <FlaskConical className="h-8 w-8 text-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">No formulas yet.</p>
                  <Link href="/studio/formulas/new">
                    <Button variant="link" size="sm" className="mt-1">Create your first formula</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              formulas.map((f) => (
                <Link key={f.id} href={`/formulas/${f.id}`}>
                  <Card className="hover:shadow-sm transition-shadow cursor-pointer">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                          <FlaskConical className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{f.name}</p>
                          <p className="text-xs text-muted-foreground capitalize">{f.formula_type} · v{f.versions[0]?.version_number ?? "–"}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${STATUS_COLORS[f.status]}`}>
                          {f.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-foreground">Stock Alerts</h2>
          </div>
          <Card>
            <CardContent className="p-0">
              {lowStock.length === 0 ? (
                <div className="p-6 text-center">
                  <div className="status-dot-green mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">All materials in stock</p>
                </div>
              ) : (
                <div className="divide-y">
                  {lowStock.slice(0, 6).map((m) => (
                    <Link key={m.id} href={`/materials/${m.id}`}>
                      <div className="px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors">
                        <div>
                          <p className="text-xs font-medium">{m.name}</p>
                          <p className="text-xs text-muted-foreground">{formatWeight(m.stock_grams)} remaining</p>
                        </div>
                        <div className="status-dot-amber" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
