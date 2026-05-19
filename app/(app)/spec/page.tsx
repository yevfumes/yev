export const dynamic = "force-dynamic";

const sections = [
  { id: "vision", label: "1. Product Vision" },
  { id: "features", label: "2. Core Features" },
  { id: "ai", label: "3. AI Roadmap" },
  { id: "ux", label: "4. UX Design Direction" },
  { id: "database", label: "5. Database Design" },
  { id: "architecture", label: "6. Technical Architecture" },
  { id: "advanced", label: "7. Advanced Features" },
  { id: "monetization", label: "8. Monetization" },
  { id: "competitive", label: "9. Competitive Analysis" },
  { id: "roadmap", label: "10. Development Roadmap" },
];

export default function SpecPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sticky TOC sidebar */}
      <aside className="hidden lg:block w-56 shrink-0 sticky top-0 h-screen overflow-y-auto border-r bg-card p-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Contents</p>
        <nav className="space-y-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block text-xs text-muted-foreground hover:text-foreground py-1 hover:pl-1 transition-all leading-snug"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 max-w-4xl px-8 py-10 space-y-16">
        {/* Title */}
        <div>
          <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-2">Product Specification</p>
          <h1 className="text-4xl font-serif font-semibold leading-tight">YEVFUMES Platform</h1>
          <p className="text-muted-foreground mt-3 text-base">
            Professional perfumery software for independent perfumers and fragrance houses — combining formula management, raw material sourcing, compliance, and production batching in one cohesive platform.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">v0.1.0</span>
            <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">MVP Complete</span>
            <span className="text-xs text-muted-foreground">Last updated May 2026</span>
          </div>
        </div>

        {/* Section 1: Product Vision */}
        <section id="vision">
          <h2 className="text-2xl font-serif font-semibold text-[hsl(38,55%,42%)] mb-6 pb-2 border-b">1. Product Vision</h2>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            YEVFUMES is purpose-built professional software for the fragrance industry. It combines formula management, raw material sourcing, supplier management, cost calculation, inventory management, IFRA/allergen compliance, production batching, formula versioning, and AI-assisted formulation tools into a single, cohesive platform — replacing scattered spreadsheets, legacy desktop apps, and disconnected tools.
          </p>

          <h3 className="text-base font-semibold mb-4">Core User Personas</h3>
          <div className="grid grid-cols-1 gap-3 mb-8">
            {[
              { role: "Independent Perfumer", desc: "Working solo, formulating for personal brand or commission. Needs fast formula building, cost awareness, and basic compliance. Values simplicity and speed." },
              { role: "Fragrance House Perfumer", desc: "Professional employed at a house. Needs team collaboration, formula secrecy, approval workflows, batch records, and enterprise-grade audit trails." },
              { role: "Indie Brand Owner", desc: "Sources finished fragrances or builds with a perfumer. Needs supplier sourcing, cost control, inventory, COGS calculation, and Shopify sync." },
              { role: "Lab Technician / QC", desc: "Handles production batches, lot tracking, compliance sign-off. Needs barcode scanning, batch worksheets, and QC record keeping." },
              { role: "R&D Chemist", desc: "Needs GC/MS data integration, stability tracking, technical material data, and scientific formula analysis tools." },
            ].map(({ role, desc }) => (
              <div key={role} className="p-4 rounded-lg border bg-card">
                <p className="font-medium text-sm mb-1">{role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-base font-semibold mb-4">Key Differentiators</h3>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              "Purpose-built for perfumery — not generic ERP adapted",
              "Live formula compliance checking against IFRA 2023",
              "Real-time cost calculation with material pricing",
              "Ingredient-level allergen tracking (EU 26 allergens)",
              "Note pyramid visualization with drag-and-drop",
              "Material search by odor descriptor, CAS number, or family",
              "Formula versioning with diff view and rollback",
              "Supplier-linked material pricing and sourcing",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                <span className="text-primary mt-0.5">✦</span>
                <span className="text-xs text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold mb-3">MVP Features (Complete)</h3>
              <ul className="space-y-1.5">
                {["Formula editor with versioning", "Material database with search", "Inventory tracking", "Cost calculation engine", "IFRA compliance checker", "Supplier management"].map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-3">Advanced Features (Roadmap)</h3>
              <ul className="space-y-1.5">
                {["AI substitution suggestions", "Team collaboration", "Batch scheduling", "GC/MS integration", "Shopify sync", "Olfactory wheel visualization"].map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Core Features */}
        <section id="features">
          <h2 className="text-2xl font-serif font-semibold text-[hsl(38,55%,42%)] mb-6 pb-2 border-b">2. Core Features</h2>

          <div className="space-y-6">
            {[
              {
                title: "Formula Management",
                desc: "The heart of the platform. Create and manage fragrance formulas with full ingredient breakdowns, percentage-based composition, note pyramid assignment, and multi-version history. Every formula change creates a new version, preserving the complete evolution of the scent.",
                bullets: ["Unlimited formulas and versions", "Drag-and-drop ingredient ordering", "Auto-calculated percentages and weights", "Note pyramid: top/middle/base/fixative", "Version compare and rollback", "Formula scaling to any batch size"],
              },
              {
                title: "Raw Material Database",
                desc: "Comprehensive database of fragrance raw materials including synthetics, essential oils, absolutes, isolates, and bases. Each material carries olfactory data, regulatory data, and inventory linkage.",
                bullets: ["CAS number and FEMA number tracking", "Odor descriptor and family tagging", "IFRA restriction data per category", "EU allergen concentration data", "Supplier linkage with pricing", "Default dilution tracking"],
              },
              {
                title: "Supplier & Sourcing",
                desc: "Manage relationships with fragrance chemical suppliers. Link materials to multiple suppliers with per-supplier pricing, MOQ, and lead times. Identify preferred suppliers for each material.",
                bullets: ["Multi-supplier per material", "Preferred supplier flagging", "Price comparison across suppliers", "Contact details and notes", "Lead time tracking"],
              },
              {
                title: "Inventory Management",
                desc: "Real-time stock tracking for all raw materials. Receive stock from suppliers, record usage from production batches, and get alerts when materials fall below reorder thresholds.",
                bullets: ["Gram-level stock tracking", "Lot-based inventory with expiry dates", "Low stock and out-of-stock alerts", "Transaction history (receive/use/adjust/waste/sample)", "Estimated stock value calculation"],
              },
              {
                title: "Costing Engine",
                desc: "Automatic cost calculation for every formula based on current material pricing. Understand your true COGS at any batch size, compare costs across formula versions, and identify cost-reduction opportunities.",
                bullets: ["Cost per kg of concentrate", "Batch cost at any target weight", "Ingredient cost breakdown", "Version-to-version cost comparison", "Multi-currency support"],
              },
              {
                title: "Regulatory & Compliance",
                desc: "Built-in IFRA 50th Amendment 2023 compliance checking. Check every formula against the correct IFRA category and instantly see which ingredients exceed limits. EU allergen declaration tracking included.",
                bullets: ["IFRA categories 1-11 checked", "Per-ingredient limit vs. actual", "EU 26 allergen declaration", "Compliance status on formula dashboard", "Restriction type: prohibited vs. restricted"],
              },
              {
                title: "Production Batches",
                desc: "Track production runs from draft to completion. Create batch records linked to formula versions, track status through production workflow, and maintain QC records.",
                bullets: ["Batch number auto-generation", "Status workflow: draft → in progress → completed", "QC hold and rejection states", "Formula version snapshot at time of batch", "Notes and production instructions"],
              },
            ].map(({ title, desc, bullets }) => (
              <div key={title} className="p-5 rounded-xl border">
                <h3 className="font-semibold text-base mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{desc}</p>
                <div className="grid grid-cols-2 gap-1">
                  {bullets.map((b) => (
                    <div key={b} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: AI Roadmap */}
        <section id="ai">
          <h2 className="text-2xl font-serif font-semibold text-[hsl(38,55%,42%)] mb-6 pb-2 border-b">3. AI Roadmap</h2>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            YEVFUMES is designed from the ground up to incorporate AI assistance into the perfumery workflow. These features leverage Claude (Anthropic) via API to bring intelligent automation to formula creation, compliance, and optimization.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Substitution Engine",
                status: "Planned Q4 2025",
                desc: "When a material is out of stock, IFRA-restricted, or too costly, the AI suggests structurally and olfactorily similar alternatives. Uses CAS family relationships, odor descriptor matching, and formula context to rank substitutions by fit.",
              },
              {
                title: "Scent Profile Prediction",
                status: "Planned Q4 2025",
                desc: "Analyze the ingredient composition of a formula and predict the overall scent profile — top/middle/base characteristics, olfactory family classification, longevity and sillage estimates — before the formula is blended.",
              },
              {
                title: "Accord Generation from Brief",
                status: "Planned 2026",
                desc: "Input a creative brief (\"warm woody oriental with citrus opening\") and the AI generates a starting accord with ingredient suggestions, proportions, and rationale. A starting point for the perfumer, not a replacement.",
              },
              {
                title: "Cost Optimization",
                status: "Planned 2026",
                desc: "Given a target cost per kg and a current formula, the AI suggests cheaper alternative materials that maintain the desired scent profile. Ranks suggestions by cost reduction vs. scent deviation tradeoff.",
              },
              {
                title: "Stability Prediction",
                status: "Research",
                desc: "Based on ingredient combinations and known chemistry, predict potential stability issues: color change, phase separation, oxidation risk, material incompatibility. Flag before formulation.",
              },
              {
                title: "Customer Preference Learning",
                status: "Research",
                desc: "Over time, learn from formula evaluations and customer feedback to build a preference model. Suggest formulas for new clients based on stated preferences and past ratings.",
              },
            ].map(({ title, status, desc }) => (
              <div key={title} className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-sm">{title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    status.includes("Planned") ? "bg-amber-50 text-amber-700 border border-amber-200" :
                    "bg-muted text-muted-foreground border border-border"
                  }`}>{status}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: UX Design */}
        <section id="ux">
          <h2 className="text-2xl font-serif font-semibold text-[hsl(38,55%,42%)] mb-6 pb-2 border-b">4. UX Design Direction</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3">Color Palette</h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { name: "Background", hex: "#F7F4EF", bg: "bg-[#F7F4EF] border" },
                  { name: "Gold Accent", hex: "#C49A3C", bg: "bg-[#C49A3C]" },
                  { name: "Charcoal", hex: "#1A1512", bg: "bg-[#1A1512]" },
                  { name: "Muted Border", hex: "#E5E0D8", bg: "bg-[#E5E0D8]" },
                  { name: "Success", hex: "#16A34A", bg: "bg-emerald-600" },
                  { name: "Warning", hex: "#D97706", bg: "bg-amber-600" },
                ].map(({ name, hex, bg }) => (
                  <div key={name} className="text-center">
                    <div className={`w-14 h-14 rounded-lg ${bg} mb-1.5`} />
                    <p className="text-xs font-medium">{name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{hex}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Typography</h3>
              <div className="space-y-2 p-4 rounded-lg border">
                <p className="font-serif text-2xl">Headings — Serif (Playfair Display)</p>
                <p className="text-sm">UI Text — Sans-serif (Inter) for clean interface elements</p>
                <p className="font-mono text-sm">Numbers & Formulas — Monospace for tabular data</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Information Architecture</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "Sidebar Navigation", desc: "Persistent left sidebar with primary navigation. Icon + label format. Active state with gold accent." },
                  { title: "Full-height Formula Editor", desc: "Formula pages use full available height with panel-based detail views. Right panel expands for compliance, cost, evaluations." },
                  { title: "Panel-based Details", desc: "Tabbed detail panels appear alongside tables/lists. No full-page navigations for simple detail views." },
                  { title: "Progressive Disclosure", desc: "Tables show minimal columns. Expanding rows or clicking through reveals full detail without page reload." },
                ].map(({ title, desc }) => (
                  <div key={title} className="p-3 rounded-lg border bg-card">
                    <p className="font-medium text-xs mb-1">{title}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Design Inspiration</h3>
              <div className="p-4 rounded-lg bg-muted/40 border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Bloomberg Terminal</strong> — precision, data density, professional seriousness. Every piece of data has a home.
                  <br /><br />
                  <strong className="text-foreground">Notion</strong> — simplicity of information structure, clean whitespace, progressive complexity.
                  <br /><br />
                  <strong className="text-foreground">Luxury Brand Aesthetic</strong> — off-white paper tones, gold accents, serif headings. The platform should feel as refined as the products it helps create.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Responsive Approach</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { device: "Desktop (1440+)", access: "Full editing, all panels visible" },
                  { device: "Tablet (768–1440)", access: "Full editing, panels collapse to tabs" },
                  { device: "Mobile (<768)", access: "Read-only browsing, simplified views" },
                ].map(({ device, access }) => (
                  <div key={device} className="p-3 rounded-lg border text-center">
                    <p className="text-xs font-medium">{device}</p>
                    <p className="text-xs text-muted-foreground mt-1">{access}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Database Design */}
        <section id="database">
          <h2 className="text-2xl font-serif font-semibold text-[hsl(38,55%,42%)] mb-6 pb-2 border-b">5. Database Design</h2>

          <p className="text-muted-foreground mb-6">
            Built on SQLite (development) with a migration path to PostgreSQL (production). Uses Drizzle ORM for type-safe queries. All IDs are nanoid strings for URL-safety and distribution compatibility.
          </p>

          <div className="space-y-4">
            {[
              {
                table: "materials",
                desc: "Core raw material records — the backbone of the platform",
                cols: ["id, name, inci_name, cas_number, fema_number", "material_type, physical_form, note_position", "odor_descriptors, olfactory_family, default_dilution", "cost_per_kg, stock_grams, reorder_threshold_grams", "storage_location, is_restricted, notes"],
              },
              {
                table: "formulas",
                desc: "Formula definitions with metadata and current version pointer",
                cols: ["id, name, formula_type, description", "ifra_category, target_concentration_pct", "olfactory_family, odor_descriptors, season", "current_version_id, status, is_secret"],
              },
              {
                table: "formula_versions",
                desc: "Immutable version snapshots — every save creates a new version",
                cols: ["id, formula_id, version_number, version_label", "batch_size_grams, total_cost_per_kg, is_compliant", "notes, created_at"],
              },
              {
                table: "formula_ingredients",
                desc: "Ingredient lines within a formula version",
                cols: ["id, version_id, formula_id, material_id", "material_name_raw, percentage, dilution_pct, grams", "sort_order, note_position, cost_per_kg_override"],
              },
              {
                table: "material_allergens",
                desc: "EU allergen concentrations per material",
                cols: ["id, material_id, allergen_name", "concentration_pct, is_eu_regulated"],
              },
              {
                table: "ifra_limits",
                desc: "IFRA 50th Amendment limits per material per category",
                cols: ["id, material_id, category (1-11)", "limit_pct, restriction_type, notes"],
              },
              {
                table: "suppliers",
                desc: "Raw material suppliers and their contact details",
                cols: ["id, name, country, website", "email, phone, notes, is_preferred"],
              },
              {
                table: "supplier_materials",
                desc: "Link table connecting suppliers to materials with pricing",
                cols: ["id, supplier_id, material_id", "supplier_code, cost_per_kg, currency", "moq_kg, lead_time_days, is_preferred"],
              },
              {
                table: "inventory_lots",
                desc: "Individual inventory lots with lot numbers and expiry",
                cols: ["id, material_id, supplier_id, lot_number", "quantity_received_grams, quantity_remaining_grams", "cost_per_kg, received_date, expiry_date"],
              },
              {
                table: "inventory_transactions",
                desc: "Full transaction ledger for stock movements",
                cols: ["id, material_id, lot_id", "transaction_type (receive/use/adjust/waste/sample)", "quantity_grams, reference_type, reference_id, notes"],
              },
              {
                table: "batches",
                desc: "Production batch records",
                cols: ["id, batch_number, formula_id, version_id", "quantity_grams, status, produced_date, notes"],
              },
            ].map(({ table, desc, cols }) => (
              <div key={table} className="rounded-lg border overflow-hidden">
                <div className="bg-muted/40 px-4 py-2.5 flex items-center gap-3">
                  <code className="text-xs font-mono font-semibold text-primary">{table}</code>
                  <span className="text-xs text-muted-foreground">{desc}</span>
                </div>
                <div className="px-4 py-3">
                  <div className="grid grid-cols-1 gap-0.5">
                    {cols.map((c) => (
                      <code key={c} className="text-xs font-mono text-muted-foreground">{c}</code>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Technical Architecture */}
        <section id="architecture">
          <h2 className="text-2xl font-serif font-semibold text-[hsl(38,55%,42%)] mb-6 pb-2 border-b">6. Technical Architecture</h2>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { layer: "Frontend", stack: "Next.js 14 App Router, React 18, TypeScript 5" },
              { layer: "Styling", stack: "Tailwind CSS 3, Radix UI primitives, shadcn/ui components" },
              { layer: "Database (Dev)", stack: "SQLite via better-sqlite3 + Drizzle ORM" },
              { layer: "Database (Prod)", stack: "PostgreSQL (Neon / Supabase) + Drizzle ORM" },
              { layer: "Search (Current)", stack: "Client-side filtering for real-time search" },
              { layer: "Search (Prod)", stack: "PostgreSQL full-text search / Meilisearch" },
              { layer: "Auth", stack: "NextAuth.js (planned) — team/org multi-tenant" },
              { layer: "File Storage", stack: "Local (dev) → S3-compatible (prod) for SDS files" },
              { layer: "Deployment", stack: "Vercel / Railway / self-hosted Docker" },
              { layer: "AI Integration", stack: "Anthropic Claude API for substitution & accord generation" },
            ].map(({ layer, stack }) => (
              <div key={layer} className="p-3 rounded-lg border">
                <p className="text-xs font-semibold text-muted-foreground mb-0.5">{layer}</p>
                <p className="text-xs">{stack}</p>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-semibold mb-3">Key Architectural Decisions</h3>
          <div className="space-y-3">
            {[
              {
                decision: "SQLite → PostgreSQL migration path",
                rationale: "SQLite provides zero-config development and works well for single-user deployments. The schema and ORM are designed to work with PostgreSQL for production multi-user deployments with minimal migration effort.",
              },
              {
                decision: "Server Components with selective Client Components",
                rationale: "Data-heavy pages (formulas list, materials, inventory) use React Server Components for instant data loading without client-side fetching boilerplate. Interactive components (formula editor, dialogs) are isolated client components.",
              },
              {
                decision: "Nanoid for all primary keys",
                rationale: "URL-safe, collision-resistant IDs that work across distributed systems. Enables offline-first ID generation and future sync capabilities without sequential integer ID conflicts.",
              },
              {
                decision: "Drizzle ORM for type safety",
                rationale: "Full TypeScript inference from schema to query results. Lightweight runtime, SQL-close query builder, and excellent migration tooling. No magic — you always know what SQL is being generated.",
              },
            ].map(({ decision, rationale }) => (
              <div key={decision} className="p-4 rounded-lg border">
                <p className="font-medium text-sm mb-1">{decision}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{rationale}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Advanced Features */}
        <section id="advanced">
          <h2 className="text-2xl font-serif font-semibold text-[hsl(38,55%,42%)] mb-6 pb-2 border-b">7. Advanced Features Roadmap</h2>

          <div className="grid grid-cols-1 gap-3">
            {[
              { feature: "Lab Mode", phase: "Phase 2", desc: "Restricted view for production staff — can see batch worksheets and record completions, but cannot access formula compositions or pricing." },
              { feature: "Barcode Scanning", phase: "Phase 2", desc: "Scan lot numbers via device camera for fast inventory receiving and batch picking. Works on tablet and mobile." },
              { feature: "Formula Secrecy", phase: "Phase 2", desc: "Encrypted formula storage for confidential formulas. Watermarked PDF exports. Granular access control per formula." },
              { feature: "Team Collaboration", phase: "Phase 2", desc: "Shared workspaces with role-based access. Comments and @mentions on formulas. Activity feed." },
              { feature: "Approval Workflows", phase: "Phase 2", desc: "Draft → Review → Approved → Archived status flow with required approver sign-off and audit trail." },
              { feature: "Shopify Integration", phase: "Phase 3", desc: "Sync product formulas to Shopify store products. Auto-populate ingredient lists for INCI declarations on product pages." },
              { feature: "Sample Tracking", phase: "Phase 3", desc: "Track samples sent to clients. Record feedback, iterate on formulas, and close the loop between client and perfumer." },
              { feature: "Olfactory Wheel", phase: "Phase 3", desc: "Interactive D3.js visualization showing the olfactory profile of any formula as a wheel — proportional sectors for each fragrance family." },
              { feature: "GC/MS Integration", phase: "Phase 4", desc: "Import gas chromatography data, automatically map peaks to ingredients, and verify formula composition against analytical results." },
              { feature: "Customer Testing Database", phase: "Phase 4", desc: "Blind panel testing records, preference scoring, and statistical analysis of customer responses to formula variations." },
            ].map(({ feature, phase, desc }) => (
              <div key={feature} className="flex items-start gap-4 p-4 rounded-lg border">
                <div className="shrink-0 text-right">
                  <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded text-muted-foreground">{phase}</span>
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">{feature}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Monetization */}
        <section id="monetization">
          <h2 className="text-2xl font-serif font-semibold text-[hsl(38,55%,42%)] mb-6 pb-2 border-b">8. Monetization</h2>

          <h3 className="text-sm font-semibold mb-4">Pricing Tiers</h3>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              {
                name: "Indie",
                price: "$0/mo",
                color: "border-border",
                features: ["1 user", "50 formulas", "100 materials", "Community support", "Basic compliance"],
              },
              {
                name: "Studio",
                price: "$29/mo",
                color: "border-primary",
                features: ["1 user", "Unlimited formulas & materials", "Full IFRA compliance", "Supplier management", "PDF export", "Priority support"],
                highlight: true,
              },
              {
                name: "Professional",
                price: "$79/mo",
                color: "border-border",
                features: ["3 users", "Everything in Studio", "Team features", "Batch production", "API access", "Version history"],
              },
              {
                name: "Enterprise",
                price: "$299/mo",
                color: "border-border",
                features: ["Unlimited users", "White-label option", "Custom integrations", "SLA support", "On-premise option", "SSO / SAML"],
              },
            ].map(({ name, price, color, features, highlight }) => (
              <div key={name} className={`p-5 rounded-xl border-2 ${color} ${highlight ? "bg-primary/5" : ""}`}>
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold">{name}</p>
                  {highlight && <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">Popular</span>}
                </div>
                <p className="text-2xl font-mono font-semibold mb-4">{price}</p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-semibold mb-4">Additional Revenue Streams</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { stream: "Supplier Network", desc: "Preferred supplier listing fees — suppliers pay to be featured and receive inquiries from perfumers." },
              { stream: "Material Database", desc: "Sell pre-populated IFRA material datasets with full allergen and restriction data — saves hours of data entry." },
              { stream: "API Access", desc: "For fragrance tech companies building tools, compliance checkers, or product management platforms on top." },
              { stream: "Consulting & Onboarding", desc: "Setup, data migration, and onboarding packages for fragrance houses transitioning from legacy systems." },
            ].map(({ stream, desc }) => (
              <div key={stream} className="p-4 rounded-lg border">
                <p className="font-medium text-sm mb-1">{stream}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: Competitive Analysis */}
        <section id="competitive">
          <h2 className="text-2xl font-serif font-semibold text-[hsl(38,55%,42%)] mb-6 pb-2 border-b">9. Competitive Analysis</h2>

          <div className="rounded-xl border overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-muted/40">
                <tr>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground">Product</th>
                  <th className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground">Type</th>
                  <th className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground">Weaknesses</th>
                  <th className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground">YEVFUMES Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  {
                    product: "Perfumer's Workbook",
                    type: "Desktop app",
                    weak: "Desktop-only, dated UI, no cloud sync, no collaboration",
                    adv: "Cloud-native SaaS, modern UI, team features",
                  },
                  {
                    product: "Fragrantica",
                    type: "Consumer site",
                    weak: "Not a professional tool — consumer reviews, no formula management",
                    adv: "Professional formulation tools, not consumer-focused",
                  },
                  {
                    product: "Generic ERP (SAP/Odoo)",
                    type: "Enterprise ERP",
                    weak: "Not industry-specific, steep learning curve, expensive customization",
                    adv: "Purpose-built for perfumery, affordable, ready to use",
                  },
                  {
                    product: "Spreadsheets",
                    type: "DIY",
                    weak: "No compliance, no real-time calculation, no collaboration, error-prone",
                    adv: "Real-time compliance, automated calculations, structured data",
                  },
                ].map(({ product, type, weak, adv }) => (
                  <tr key={product} className="hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium text-sm">{product}</td>
                    <td className="py-3 px-3 text-xs text-muted-foreground">{type}</td>
                    <td className="py-3 px-3 text-xs text-muted-foreground">{weak}</td>
                    <td className="py-3 px-3 text-xs text-emerald-700 font-medium">{adv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="font-semibold mb-3 text-primary">YEVFUMES Positioning</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              YEVFUMES occupies the gap between consumer-grade tools (spreadsheets, Fragrantica) and enterprise ERP systems. It's specifically designed for the fragrance professional — with real-time IFRA compliance, ingredient-level allergen tracking, and a modern SaaS model that scales from a solo perfumer at $29/month to a full fragrance house at $299/month. No other tool offers this combination of affordability, industry specificity, and modern UX.
            </p>
          </div>
        </section>

        {/* Section 10: Development Roadmap */}
        <section id="roadmap">
          <h2 className="text-2xl font-serif font-semibold text-[hsl(38,55%,42%)] mb-6 pb-2 border-b">10. Development Roadmap</h2>

          <div className="space-y-6">
            {[
              {
                phase: "Phase 1 — MVP",
                period: "Complete",
                color: "border-l-emerald-500",
                status: "emerald",
                items: [
                  "Formula editor with versioning and note pyramid",
                  "Raw material database with search and filtering",
                  "Inventory tracking with stock levels",
                  "Cost calculation engine (per-ingredient, per-batch)",
                  "IFRA 50th Amendment compliance checker",
                  "Supplier management with material linking",
                  "Production batch records",
                  "Add Material / Supplier dialog flows",
                  "Inventory stock adjustments",
                  "Settings and Platform Spec pages",
                ],
              },
              {
                phase: "Phase 2",
                period: "Q3 2025",
                color: "border-l-amber-400",
                status: "amber",
                items: [
                  "User authentication with NextAuth.js",
                  "Team workspaces with role-based access",
                  "File attachments (SDS safety data sheets)",
                  "Formula PDF export with INCI declaration",
                  "Advanced cost modeling (overhead, labor)",
                  "Approval workflows for formulas",
                  "Formula secrecy and access control",
                ],
              },
              {
                phase: "Phase 3",
                period: "Q4 2025",
                color: "border-l-blue-400",
                status: "blue",
                items: [
                  "AI substitution engine (Claude API)",
                  "Accord library with accord generator",
                  "Mobile-optimized read views",
                  "REST API v1 for third-party integrations",
                  "Shopify product sync integration",
                  "Barcode scanning for inventory",
                  "Sample tracking and client feedback loop",
                ],
              },
              {
                phase: "Phase 4",
                period: "2026",
                color: "border-l-muted-foreground",
                status: "grey",
                items: [
                  "GC/MS data import and chromatography mapping",
                  "Multi-tenant SaaS with org management",
                  "White-label enterprise option",
                  "Advanced analytics and formula performance reporting",
                  "Olfactory wheel D3.js visualization",
                  "Customer testing database with panel scoring",
                  "COSMOS and Ecocert compliance modules",
                ],
              },
            ].map(({ phase, period, color, items }) => (
              <div key={phase} className={`pl-5 border-l-4 ${color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-semibold">{phase}</h3>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{period}</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {items.map((item) => (
                    <div key={item} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="shrink-0 mt-0.5">→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="pt-8 border-t text-center">
          <p className="text-xs text-muted-foreground">
            YEVFUMES Platform Specification — v0.1.0 — Built with Next.js 14, Drizzle ORM, SQLite, Tailwind CSS
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © 2026 YEVFUMES. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
