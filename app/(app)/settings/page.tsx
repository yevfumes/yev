"use client";
import { useState } from "react";
import { Settings, FlaskConical, ShieldCheck, Info, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function SettingsPage() {
  const [studioName, setStudioName] = useState("My Perfume Studio");
  const [currency, setCurrency] = useState("USD");
  const [defaultBatchSize, setDefaultBatchSize] = useState("100");
  const [defaultIFRACategory, setDefaultIFRACategory] = useState("4");
  const [defaultDilution, setDefaultDilution] = useState("100");

  function handleSave() {
    toast.success("Changes saved to session (demo mode)");
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-semibold">Settings</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Configure your studio preferences</p>
      </div>

      <div className="space-y-6">
        {/* Studio Settings */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <Settings className="h-4 w-4 text-muted-foreground" />
              Studio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Studio Name</label>
              <Input value={studioName} onChange={(e) => setStudioName(e.target.value)} placeholder="My Perfume Studio" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Default Currency</label>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD — US Dollar</SelectItem>
                    <SelectItem value="EUR">EUR — Euro</SelectItem>
                    <SelectItem value="GBP">GBP — British Pound</SelectItem>
                    <SelectItem value="CHF">CHF — Swiss Franc</SelectItem>
                    <SelectItem value="JPY">JPY — Japanese Yen</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Default Batch Size (grams)</label>
                <Input type="number" value={defaultBatchSize} onChange={(e) => setDefaultBatchSize(e.target.value)} min={1} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formula Defaults */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-muted-foreground" />
              Formula Defaults
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Default IFRA Category</label>
                <Select value={defaultIFRACategory} onValueChange={setDefaultIFRACategory}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 11 }, (_, i) => i + 1).map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        Category {n}
                        {n === 1 && " — Lip products"}
                        {n === 4 && " — Fine fragrance"}
                        {n === 7 && " — Body lotion"}
                        {n === 11 && " — Household products"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Default Dilution (%)</label>
                <Input type="number" value={defaultDilution} onChange={(e) => setDefaultDilution(e.target.value)} min={1} max={100} />
                <p className="text-xs text-muted-foreground">Applied to new materials</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regulatory */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
              Regulatory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-muted/50">
              <div>
                <p className="text-sm font-medium">IFRA Standard</p>
                <p className="text-xs text-muted-foreground mt-0.5">International Fragrance Association limits used for compliance checking</p>
              </div>
              <span className="text-xs font-mono font-semibold bg-background border rounded-md px-2 py-1">
                50th Amendment 2023
              </span>
            </div>
            <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>EU Allergen Regulations:</strong> EU Cosmetics Regulation (EC) No 1223/2009 requires declaration of 26 fragrance allergens above 0.001% in leave-on and 0.01% in rinse-off products. YEVFUMES tracks these automatically per formula.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <Info className="h-4 w-4 text-muted-foreground" />
              About
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <span className="text-muted-foreground">Version</span>
              <span className="font-mono">v0.1.0</span>
              <span className="text-muted-foreground">Stack</span>
              <span className="text-xs text-muted-foreground">Next.js 14, Drizzle ORM, SQLite, Tailwind CSS</span>
              <span className="text-muted-foreground">Platform Spec</span>
              <a href="/spec" className="text-primary text-xs underline underline-offset-2 hover:opacity-80">
                View product specification →
              </a>
            </div>
            <Separator />
            <p className="text-xs text-muted-foreground leading-relaxed">
              YEVFUMES is professional perfumery software for independent perfumers and fragrance houses. Built for real-world formula management, compliance, and production workflows.
            </p>
          </CardContent>
        </Card>

        {/* Save button */}
        <div className="flex justify-end pt-2">
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
