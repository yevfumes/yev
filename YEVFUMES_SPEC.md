# YEVFUMES — Professional Perfumery Platform
## Complete Product Specification & Technical Architecture

**Version:** 1.0.0  
**Status:** Draft for Engineering & Design  
**Last Updated:** 2026-05-17  

---

# TABLE OF CONTENTS

1. [Product Vision](#section-1-product-vision)
2. [Core Features — Detailed Spec](#section-2-core-features)
3. [AI Features Roadmap](#section-3-ai-features-roadmap)
4. [UX / UI Design Specification](#section-4-ux-ui-design-specification)
5. [Database Schema](#section-5-database-schema)
6. [Technical Architecture](#section-6-technical-architecture)
7. [Advanced Features Brainstorm](#section-7-advanced-features-brainstorm)
8. [Monetization](#section-8-monetization)
9. [Deliverables Summary](#section-9-deliverables-summary)

---

# SECTION 1: PRODUCT VISION

## What YEVFUMES Does

YEVFUMES is a professional-grade SaaS platform purpose-built for the global fragrance industry. It unifies formula management, raw material intelligence, regulatory compliance, inventory control, and cost engineering into a single coherent workspace — replacing the constellation of spreadsheets, disconnected tools, and institutional memory that currently governs how perfumers and fragrance houses operate. Think Bloomberg Terminal for perfumers: dense with data, built for speed, ruthlessly functional, and trusted with mission-critical work.

The platform serves the full spectrum of the fragrance industry: independent perfumers hand-crafting niche releases, mid-sized fragrance houses managing hundreds of SKUs, contract manufacturers juggling multiple client briefs simultaneously, and enterprise R&D teams navigating increasingly complex global regulatory environments. YEVFUMES is not a hobbyist tool with professional branding — it is engineered for the demands of commercial fragrance development, where a single costing error can destroy a product launch margin, a missed IFRA limit can trigger a recall, and formula IP represents years of competitive advantage.

At its core, YEVFUMES solves three compounding problems the industry has never properly solved together: (1) the formula as a living document that evolves through versions, evaluations, and scaling decisions; (2) the raw material as a richly-attributed object with safety, sourcing, and cost dimensions that must be live and queryable; and (3) compliance as a first-class workflow that happens inline, not as a downstream audit. The result is a platform where a perfumer can open a formula, see its current IFRA compliance status across all 11 product categories, understand the exact cost per kilogram, check stock availability for a production batch, and generate a purchase order — all without leaving the formula view.

---

## Core User Personas

### Persona 1: The Independent Perfumer (Indie Creator)

| Attribute | Detail |
|-----------|--------|
| **Role** | Solo fragrance creator, typically running a small direct-to-consumer brand or selling to small retailers |
| **Company size** | 1–5 people |
| **Technical sophistication** | Medium — comfortable with spreadsheets, allergic to complexity |
| **Primary device** | MacBook Pro at the bench, iPhone for inventory |

**Pain Points:**
- Formulas live in Excel files named `final_v3_ACTUAL_final.xlsx`
- No systematic version history — revisions are copy-paste nightmares
- IFRA compliance is checked manually using PDFs, if at all
- Cost calculations are fragile and break when supplier prices change
- No visibility into which stock is running low until they're reformulating at the bench
- Reordering is reactive, not planned

**Key Workflows:**
1. Create new formula → iterate through evaluations → lock version for production
2. Scale formula from 10g test batch to 500g production batch
3. Check IFRA compliance before submission to customers/retailers
4. Order raw materials when stock drops below threshold

**Success Metrics:**
- Time to check IFRA compliance: < 30 seconds
- Zero missed reorder points leading to production stoppages
- Formula revision history 100% captured without manual effort
- Cost per bottle calculated accurately within 5 minutes of formula change

---

### Persona 2: Fragrance House R&D Perfumer

| Attribute | Detail |
|-----------|--------|
| **Role** | Staff perfumer at a mid-to-large fragrance house, developing briefs for B2B customers |
| **Company size** | 50–500 people |
| **Technical sophistication** | High domain expertise, moderate technical literacy |
| **Primary device** | Desktop workstation in the lab |

**Pain Points:**
- Managing 200+ active formula versions across 30+ active briefs simultaneously
- Brief requirements (IFRA category, price target, regulatory market) change after development begins
- Collaboration with junior perfumers lacks a proper handoff workflow
- Customer-specific formula access controls are handled via email and honor system
- Presenting formula options to clients requires manual PDF generation
- Accord library is a personal spreadsheet, not shared institutional knowledge

**Key Workflows:**
1. Receive brief → create formula → iterate with team → submit to customer for evaluation
2. Manage accord library — save proprietary accords, retrieve by olfactory character
3. Adapt formula for a new regulatory market (e.g., reformat for China CSAR)
4. Clone a successful formula and modify for a derivative brief

**Success Metrics:**
- Brief-to-submission cycle time reduced by 30%
- Zero compliance violations in submitted formulas
- Accord reuse rate measurable and increasing quarter-over-quarter
- Team knowledge captured in shared material notes, not individual heads

---

### Persona 3: Contract Manufacturer

| Attribute | Detail |
|-----------|--------|
| **Role** | Operations lead at a contract manufacturer producing finished fragrances for multiple brand clients |
| **Company size** | 20–200 people |
| **Technical sophistication** | Medium-high, operationally focused |
| **Primary device** | Desktop + tablet on the production floor |

**Pain Points:**
- Multiple clients, each with their own formula formats and documentation requirements
- Batch records are paper-based or in disconnected systems
- Ingredient substitutions (due to stock-outs) are tracked informally and create compliance risk
- Purchase planning is done from memory and gut feel, not data
- Ingredient costs vary by batch size — bulk pricing tiers are not modeled

**Key Workflows:**
1. Receive client formula → validate materials in stock → plan production batch
2. Generate batch record with actual lot numbers used
3. Auto-generate purchase list for upcoming production schedule
4. Track batch costs against target margin

**Success Metrics:**
- Purchase order generation time from production schedule: < 15 minutes
- Batch record completeness: 100% (no missing lot numbers)
- Ingredient substitution events tracked and client-notified
- Cost variance per batch tracked and trending toward target

---

### Persona 4: Regulatory Affairs Officer

| Attribute | Detail |
|-----------|--------|
| **Role** | Manages compliance for a fragrance house — IFRA, EU cosmetics regulation, regional restrictions |
| **Company size** | 50–1000 people |
| **Technical sophistication** | High in regulatory domain, moderate technically |
| **Primary device** | Desktop |

**Pain Points:**
- IFRA amendment updates require re-auditing every formula manually
- Allergen calculations are done in spreadsheets that drift from the actual formula
- SDS documents are stored in a network drive with no link to materials in formulas
- When IFRA publishes a new amendment, there is no way to know which formulas are affected
- China CSAR, US restrictions, and EU regulations each require different documentation

**Key Workflows:**
1. When IFRA amendment is published → identify all affected formulas → flag for reformulation
2. Generate allergen declaration for a formula destined for EU market
3. Review formula submitted for approval → sign off on compliance
4. Maintain SDS document library linked to materials

**Success Metrics:**
- Time to identify all formulas affected by new IFRA amendment: < 1 hour (vs. days currently)
- Zero allergen declaration errors in products shipped to EU
- 100% of materials have current SDS on file
- Compliance sign-off workflow fully audited and timestamped

---

### Persona 5: Lab Manager

| Attribute | Detail |
|-----------|--------|
| **Role** | Manages the physical lab — stock, equipment, orders, bench organization |
| **Company size** | 10–200 people |
| **Technical sophistication** | Medium — pragmatic, needs things to just work |
| **Primary device** | iPad on the bench, desktop for reports |

**Pain Points:**
- Inventory is tracked in a combination of paper logs and spreadsheets
- Lot number tracking is inconsistent — traceability is a problem for audits
- Expiry dates are tracked manually; materials expire without warning
- Low stock discovered at the bench during production, not before
- Receiving new materials takes too long because data entry is manual

**Key Workflows:**
1. Receive shipment → log materials → assign lot numbers → update stock
2. Check stock before production run to identify shortfalls
3. Generate reorder list from low-stock alerts
4. Conduct stock audit / reconciliation

**Success Metrics:**
- Receiving time per material: < 2 minutes (with barcode scan)
- Zero production stoppages due to undiscovered low stock
- Expiry alerts issued 60 and 30 days before expiry date
- Full lot number traceability for any production batch

---

## Main Workflows (End-to-End)

### Workflow 1: New Formula Development
```
Brief received → Create formula (name, type, target category)
→ Add ingredients from material database
→ Adjust percentages (auto-calculates dilution, cost, IFRA status)
→ Save v1.0 → Evaluate (add tasting notes, ratings)
→ Revise (save as v1.1, v1.2...)
→ Scale for production batch
→ Run IFRA compliance check
→ Lock formula version
→ Export compliance documentation
→ Submit to client or approve for production
```

### Workflow 2: Production Batch
```
Select formula version → Enter target batch weight
→ System calculates ingredient quantities
→ Check stock availability (auto-flag shortfalls)
→ Generate batch record with lot number assignments
→ Lab produces batch → Record actual quantities used
→ System deducts from inventory
→ Batch record archived with full audit trail
```

### Workflow 3: Regulatory Review
```
Formula created/modified → IFRA check runs automatically
→ Compliance badge updated (green/amber/red per category)
→ Allergen totals calculated
→ If EU: flag allergens > 0.01% (leave-on) or > 0.1% (rinse-off)
→ Regulatory officer reviews flagged items
→ Approve or request reformulation
→ Export: IFRA compliance sheet + allergen declaration
```

### Workflow 4: Inventory Replenishment
```
Low-stock alert triggered (quantity < reorder point)
→ System identifies affected formulas
→ User reviews recommended order quantities
→ System suggests optimal supplier (price + lead time)
→ Purchase order generated
→ PO sent to supplier
→ Goods received → Inventory updated with lot + expiry
```

---

## Key Differentiators vs. Competitors

| Feature | YEVFUMES | Perfumer's Apprentice | FragranceCreator | Generic ERP (SAP/Odoo) | Spreadsheets |
|---------|----------|----------------------|------------------|----------------------|--------------|
| Formula versioning | Full semantic versioning + diff | Basic | Limited | None | Manual |
| IFRA compliance | Real-time, all 11 categories | Partial | Partial | None | Manual |
| Accord library | First-class feature | No | No | No | No |
| Nested dilution math | Yes | No | Partial | No | Manual |
| AI suggestions | Roadmap | No | No | No | No |
| Multi-tenant/team | Yes | No | No | Yes | No |
| Material database depth | Comprehensive + custom | Basic | Basic | Generic | Custom |
| Inventory + traceability | Yes | No | No | Yes | No |
| UX quality | World-class | Outdated | Basic | Poor | N/A |
| Pricing | SaaS tiers | One-time | Subscription | Enterprise | Free |

---

## MVP Feature Set (v1.0) vs. Advanced Features (v2/v3)

### v1.0 — MVP (Ships in Phase 2)
- Formula editor with versioning (semantic), ingredient management, scale calculator
- Raw material database (up to 5,000 materials), with IFRA limits and allergen data
- IFRA compliance check (all 11 categories, real-time)
- Allergen calculation (EU 26 allergens)
- Inventory management (stock levels, lot tracking, low-stock alerts)
- Basic costing engine (cost per kg of formula)
- Supplier profiles + material-supplier price links
- SDS document upload and linking
- Formula PDF export
- User auth + single organization
- Role-based access (owner, editor, viewer)

### v2.0 — Post-MVP
- Multi-tenant organizations with team collaboration
- Accord library (save and reuse sub-formulas)
- Purchase order generation
- Batch production tracking
- Evaluation log with ratings and time-stamps
- Finished product costing (with alcohol, packaging)
- AI Phase 1: smart search, duplicate detection, substitution suggestions
- Barcode scanning (mobile inventory intake)
- Formula diff/comparison view
- Regional restriction flags (EU, US, China)

### v3.0 — Advanced
- AI Phase 2: scent profile prediction, cost optimization
- AI Phase 3: generative accord suggestions, stability prediction
- GC/MS import
- Stability testing module
- Sample tracking
- Customer testing database
- ERP integrations (SAP, NetSuite, Shopify)
- White-label / OEM support
- Approval workflows
- Advanced reporting and analytics

---

# SECTION 2: CORE FEATURES — DETAILED SPEC

## 2A: Formula Management Engine

### Formula Types

The system supports five formula types, each with specific behaviors:

| Type | Description | Special Behaviors |
|------|-------------|-------------------|
| `concentrate` | The pure fragrance compound before dilution | IFRA limits calculated at concentrate level; acts as parent for finished products |
| `finished_product` | Ready-to-sell product (EDP, EDT, body lotion, candle, etc.) | Requires IFRA product category assignment; allergen declaration generated at this level |
| `accord` | A sub-formula representing a thematic scent block (e.g., "Rose Heart", "Woody Base") | Can be embedded in other formulas; treated as a single ingredient with internal breakdown accessible |
| `base` | A purchased or pre-made base (e.g., ISO E Super base, Ambroxan in DPG) | Similar to accord but typically sourced, not self-made |
| `raw` | A single raw material formula (used for dilutions — e.g., 10% Iris Absolute in IPM) | Contains exactly one active ingredient plus diluent; used to track diluted stock |

### Formula Record Schema

```
formula_id          UUID PRIMARY KEY
org_id              UUID FK → organizations
name                VARCHAR(255) NOT NULL
type                ENUM (concentrate, finished_product, accord, base, raw)
status              ENUM (draft, in_review, approved, archived, deprecated)
ifra_category       INTEGER (1–11, nullable — required for finished_product)
description         TEXT
brief_notes         TEXT
created_by          UUID FK → users
created_at          TIMESTAMPTZ
updated_at          TIMESTAMPTZ
is_public           BOOLEAN DEFAULT false
tags                JSONB (array of tag IDs)
```

### Formula Versioning System

Formulas use semantic versioning: `MAJOR.MINOR` (e.g., `1.0`, `1.3`, `2.0`).

**Version increment rules:**
- `MINOR` increments when: ingredient percentages adjusted, notes added, tags changed
- `MAJOR` increments when: ingredient list changes structurally (ingredient added or removed), formula type changes, or user explicitly bumps major version
- Version `1.0` is created automatically when a formula is first saved
- All versions are immutable once saved — editing creates a new version
- A "working draft" state exists before a version is committed

**Version record schema:**
```
formula_version_id  UUID PRIMARY KEY
formula_id          UUID FK → formulas
version_string      VARCHAR(20) NOT NULL  -- e.g. "1.3"
major               INTEGER NOT NULL
minor               INTEGER NOT NULL
is_locked           BOOLEAN DEFAULT false
lock_reason         TEXT
locked_by           UUID FK → users
locked_at           TIMESTAMPTZ
change_summary      TEXT  -- human-readable summary of changes
created_by          UUID FK → users
created_at          TIMESTAMPTZ
```

**Version states:**
- `draft` — can be freely edited
- `submitted` — sent for review, edit-locked
- `approved` — locked, production-ready
- `deprecated` — superseded by newer version, archived but readable

### Formula Editor Mechanics

The editor is a single-page interactive workspace. All calculations are real-time.

**Ingredient row fields:**

| Field | Type | Behavior |
|-------|------|----------|
| `material_id` | FK | Searchable dropdown — type to search material database |
| `raw_percent` | DECIMAL(8,5) | The percentage of this ingredient in the formula concentrate |
| `dilution_percent` | DECIMAL(5,2) | If material is a diluted solution (e.g., 10% in IPM), enter dilution here |
| `active_percent` | COMPUTED | `raw_percent × (dilution_percent / 100)` — the actual active material % |
| `grams` | COMPUTED | `raw_percent / 100 × batch_weight_grams` |
| `cost_per_gram` | COMPUTED | From current supplier price |
| `line_cost` | COMPUTED | `grams × cost_per_gram` |
| `ifra_limit` | FETCHED | From `ifra_limits` table for assigned category |
| `ifra_status` | COMPUTED | `active_percent` vs `ifra_limit` → ok / warning / violation |
| `allergen_flags` | FETCHED | List of allergens contributed by this material |
| `sort_order` | INTEGER | Drag to reorder |
| `odor_segment` | ENUM | top / heart / base / (unassigned) |
| `notes` | TEXT | Per-ingredient note |

**Auto-percent calculation:**
- Total of all `raw_percent` values must equal 100%
- System shows running total and delta in real time
- "Normalize" button: scales all percentages proportionally to sum to 100%
- "Lock ingredient" option: keeps one ingredient's % fixed while others are normalized around it

**Dilution math:**
- If an ingredient is an accord (type=`accord`), the system can display the accord's internal breakdown
- Accord percentages are "folded in" for IFRA and allergen calculations — the system traverses the accord tree recursively
- Maximum accord nesting depth: 3 levels
- Circular references are detected and blocked at save time

### Scale Calculator

**Inputs:**
- `batch_weight` (grams or kg)
- OR `scale_factor` (multiplier, e.g., 10×)
- `unit` (g, kg, oz, lb)

**Outputs:**
- Per-ingredient quantity in selected unit
- Total batch cost
- Batch record (formatted for lab use)

**Finished product scale:**
For a finished product (e.g., EDP at 20% concentration in ethanol):
```
concentrate_weight = target_volume_ml × density × (concentration_pct / 100)
ethanol_weight     = target_volume_ml × density × (1 - concentration_pct / 100)
```
System stores alcohol density as configurable constant (default: 0.789 g/mL for 96% ethanol).

### Diff / Comparison View

Two formula versions can be placed side-by-side:

- Ingredients present in A but not B: highlighted red (removed)
- Ingredients present in B but not A: highlighted green (added)
- Ingredients present in both with changed %: highlighted amber (changed), delta shown
- Cost delta, IFRA compliance delta, allergen delta shown at top of diff view
- Diff can be exported as PDF for client communication or regulatory record

### Cloning and Forking

- **Clone:** Creates an exact copy of a formula (new `formula_id`, new name, version resets to `1.0`). Preserves all versions of the source in the clone's history as a reference link but starts fresh.
- **Fork:** Creates a new formula starting from a specific version of an existing formula. Records `forked_from_formula_id` and `forked_from_version`. Useful for derivative briefs.
- Forked formulas show a "fork badge" in the UI and a clickable link back to the source.

### Accord Library

Accords are formulas of type `accord`. They function as:
1. **Standalone compositions** — can be viewed, edited, versioned in their own right
2. **Reusable ingredients** — can be added to any formula as a single ingredient row
3. **Shared institutional knowledge** — org-level accords visible to all team members

When an accord is used in a formula:
- Its `raw_percent` in the parent formula is the percentage of the accord concentrate
- IFRA calculations traverse into the accord (full breakdown, not just the accord %)
- Cost is calculated from the accord's own ingredient costs
- Updating an accord version does NOT automatically update formulas that use it — each formula pins to a specific accord version. System notifies when a newer accord version is available.

### Odor Profile Tagging

Each formula can be tagged with:
- `odor_family`: PRIMARY (Floral, Oriental, Woody, Fresh, Fougère, Chypre, Gourmand, Aquatic, Leather, Aromatic) — from IFRA/Fragrance Wheel standard
- `odor_subfamilies`: ARRAY (up to 3)
- `descriptors`: ARRAY of free-text descriptors (e.g., "smoky", "honeyed", "ozonic") — drawn from a controlled vocabulary of ~300 terms, plus custom
- `top_notes`: ARRAY of material IDs or descriptor strings
- `heart_notes`: ARRAY
- `base_notes`: ARRAY
- `longevity_rating`: INTEGER 1–10 (user-assigned)
- `sillage_rating`: INTEGER 1–10 (user-assigned)
- `season`: ARRAY ENUM (spring, summer, autumn, winter)
- `gender_positioning`: ENUM (masculine, feminine, unisex, androgynous)
- `occasion`: ARRAY ENUM (daytime, evening, office, sport, formal, casual)

### Evaluation Log

Per formula version, users can log evaluations:

```
evaluation_id       UUID PK
formula_version_id  UUID FK
evaluator_id        UUID FK → users
evaluated_at        TIMESTAMPTZ
strip_type          ENUM (mouillette, skin, cold, warm)
elapsed_hours       DECIMAL(4,1)  -- time after application
overall_rating      INTEGER 1–10
longevity_rating    INTEGER 1–10
sillage_rating      INTEGER 1–10
balance_rating      INTEGER 1–10
notes               TEXT
tags                JSONB  -- e.g., ["too sharp on top", "needs more base weight"]
```

Evaluations are immutable once saved (append-only log). The evaluation panel in the UI shows a timeline view — each evaluation as a card on a horizontal timeline, color-coded by rating.

### Formula Export

| Format | Contents | Use Case |
|--------|----------|----------|
| PDF (client) | Name, version, IFRA category, IFRA compliance table, allergen totals. NO ingredient names or percentages | Client submission |
| PDF (internal) | Full formula with ingredient names, %, costs, lot numbers | Internal production |
| Excel (.xlsx) | Full formula data, version history tab, evaluation log tab | External analysis |
| CSV | Ingredient list with %, for import to other systems | Data exchange |
| YEVFUMES format (.yev) | Proprietary JSON — full formula with all metadata | Backup, migration |

### Formula Permissions

| Permission Level | Read | Edit | Clone | Export (full) | Export (client) | Delete | Share |
|-----------------|------|------|-------|---------------|-----------------|--------|-------|
| `owner` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `editor` | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| `viewer` | ✓ | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| `no_access` | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |

Formula-level permissions override organization defaults. A formula can be marked `secret` — only explicitly granted users can see it, regardless of org membership.

---

## 2B: Raw Material Database

### Material Record Schema

```sql
-- Core material record
CREATE TABLE raw_materials (
  material_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID REFERENCES organizations(org_id),  -- NULL = global/shared material
  name                VARCHAR(255) NOT NULL,
  inci_name           VARCHAR(255),
  cas_number          VARCHAR(50),
  fema_number         VARCHAR(20),
  einecs_number       VARCHAR(30),
  type                VARCHAR(50) NOT NULL,  -- natural, synthetic, isolate, blend, carrier, solvent
  subtype             VARCHAR(50),  -- essential_oil, absolute, co2_extract, tincture, etc.
  origin_country      VARCHAR(100),
  botanical_name      VARCHAR(255),  -- for naturals
  extraction_method   VARCHAR(100),  -- steam_distillation, cold_press, solvent, co2, enfleurage
  is_natural_complex  BOOLEAN DEFAULT false,
  is_active           BOOLEAN DEFAULT true,
  is_global           BOOLEAN DEFAULT false,  -- in YEVFUMES shared database
  description         TEXT,
  internal_notes      TEXT,
  created_by          UUID REFERENCES users(user_id),
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);
```

### Material Properties

```sql
CREATE TABLE material_properties (
  property_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  appearance          VARCHAR(100),   -- clear liquid, white crystalline, pale yellow, etc.
  color_index         VARCHAR(20),    -- e.g. "pale yellow", hex approximate
  flash_point_celsius DECIMAL(6,2),
  flash_point_method  VARCHAR(50),    -- ASTM D93, Pensky-Martens, etc.
  boiling_point_celsius DECIMAL(6,2),
  melting_point_celsius DECIMAL(6,2),
  specific_gravity    DECIMAL(6,4),
  refractive_index    DECIMAL(6,4),
  optical_rotation    VARCHAR(50),
  solubility_in_alcohol VARCHAR(100), -- e.g. "1 part in 3 parts 80% ethanol"
  solubility_in_water VARCHAR(100),
  solubility_notes    TEXT,
  viscosity_cps       DECIMAL(10,2),  -- centipoise at 20°C
  vapor_pressure_pa   DECIMAL(10,2),
  log_kow             DECIMAL(5,2),   -- octanol-water partition coefficient
  skin_sensitization  VARCHAR(50),    -- not sensitizer, weak, moderate, strong
  phototoxic          BOOLEAN,
  phototoxicity_notes TEXT,
  updated_at          TIMESTAMPTZ DEFAULT now()
);
```

### Odor Profile

```sql
CREATE TABLE material_odor_profiles (
  profile_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  primary_family      VARCHAR(50),    -- Floral, Woody, Oriental, Fresh, etc.
  secondary_family    VARCHAR(50),
  descriptors         TEXT[],         -- array: ['rose', 'geranium', 'green', 'powdery']
  intensity           INTEGER CHECK (intensity BETWEEN 1 AND 10),
  longevity           INTEGER CHECK (longevity BETWEEN 1 AND 10),
  odor_threshold_ppb  DECIMAL(12,6),  -- detection threshold in ppb
  volatility          VARCHAR(20),    -- top, top-heart, heart, heart-base, base
  tenacity            INTEGER CHECK (tenacity BETWEEN 1 AND 10),
  diffusion           INTEGER CHECK (diffusion BETWEEN 1 AND 10),
  character_notes     TEXT,           -- expert tasting note
  wheel_x             DECIMAL(5,3),   -- position on olfactory wheel (normalized -1 to 1)
  wheel_y             DECIMAL(5,3),
  updated_at          TIMESTAMPTZ DEFAULT now()
);
```

### IFRA Limits

```sql
CREATE TABLE ifra_limits (
  limit_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  material_id         UUID REFERENCES raw_materials(material_id),
  cas_number          VARCHAR(50),    -- can reference by CAS without material record
  amendment           VARCHAR(20) NOT NULL,  -- e.g. "51st", "49th"
  amendment_date      DATE NOT NULL,
  category_1          DECIMAL(8,4),   -- % in finished product
  category_2          DECIMAL(8,4),
  category_3          DECIMAL(8,4),
  category_4          DECIMAL(8,4),
  category_5a         DECIMAL(8,4),
  category_5b         DECIMAL(8,4),
  category_5c         DECIMAL(8,4),
  category_5d         DECIMAL(8,4),
  category_6          DECIMAL(8,4),
  category_7a         DECIMAL(8,4),
  category_7b         DECIMAL(8,4),
  category_8a         DECIMAL(8,4),
  category_8b         DECIMAL(8,4),
  category_9          DECIMAL(8,4),
  category_10a        DECIMAL(8,4),
  category_10b        DECIMAL(8,4),
  category_11a        DECIMAL(8,4),
  category_11b        DECIMAL(8,4),
  prohibited          BOOLEAN DEFAULT false,
  restricted          BOOLEAN DEFAULT false,
  restriction_note    TEXT,
  source_document     VARCHAR(255),
  created_at          TIMESTAMPTZ DEFAULT now()
);
```

**IFRA Categories Reference:**

| Category | Description |
|----------|-------------|
| 1 | Lip products (lipstick, lip balm) |
| 2 | Deodorant/antiperspirant |
| 3 | Eye products |
| 4 | Fine fragrance (EDP, EDT, EDC, solid perfume) |
| 5A | Body lotion/cream, face cream (leave-on) |
| 5B | Face mask |
| 5C | Hand cream |
| 5D | Baby lotion |
| 6 | Mouthwash, toothpaste |
| 7A | Rinse-off hair products |
| 7B | Leave-on hair products |
| 8A | Rinse-off body wash |
| 8B | Intimate wipes |
| 9 | Rinse-off face wash |
| 10A | Household products (fabric softener) |
| 10B | Household products (air freshener) |
| 11A | Candle (when burning) |
| 11B | Other home (reed diffuser, wax melt) |

### Allergen Data

```sql
CREATE TABLE material_allergens (
  allergen_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  allergen_name       VARCHAR(100) NOT NULL,  -- INCI name
  cas_number          VARCHAR(50),
  eu_annex_iii        BOOLEAN DEFAULT false,  -- EU 26 allergens list
  eu_extended         BOOLEAN DEFAULT false,  -- Extended list (82 allergens)
  natural_occurrence  BOOLEAN DEFAULT false,  -- occurs naturally in material
  added               BOOLEAN DEFAULT false,  -- added as separate ingredient
  percentage          DECIMAL(8,5),           -- % in this material (if known)
  percentage_source   VARCHAR(100),           -- supplier spec, literature, GC/MS
  leave_on_threshold  DECIMAL(8,5) DEFAULT 0.01,  -- % threshold in finished product
  rinse_off_threshold DECIMAL(8,5) DEFAULT 0.10,
  updated_at          TIMESTAMPTZ DEFAULT now()
);
```

**EU 26 Allergens (Annex III) tracked by default:**
Amyl cinnamal, Amylcinnamyl alcohol, Benzyl alcohol, Benzyl salicylate, Cinnamyl alcohol, Cinnamal, Citral, Coumarin, Eugenol, Geraniol, Hydroxycitronellal, Hydroxymethylpentylcyclohexenecarboxaldehyde (HICC), Isoeugenol, Lilial (butylphenyl methylpropional), d-Limonene, Linalool, Methyl heptine carbonate, 3-Methyl-4-(2,6,6-trimethyl-2-cyclohexen-1-yl)but-3-en-2-one (alpha-isomethyl ionone), Oak moss, Tree moss, Cinnamyl benzoate, Farnesol, 2-(4-tert-Butylbenzyl)propionaldehyde, Benzyl benzoate, Benzyl cinnamate, Anise alcohol.

### Supplier Links

A material can be linked to multiple suppliers. Each link stores:
- `supplier_id`
- `supplier_material_code` — the supplier's own SKU for this material
- `min_order_quantity` and `min_order_unit`
- `lead_time_days`
- `price_per_kg` (current)
- `price_effective_date`
- `price_currency` (ISO 4217)
- `price_tier_breaks` (JSONB array of `{min_qty_kg, price_per_kg}`)
- `certificate_of_analysis_url`
- `is_preferred` (boolean — one preferred supplier per material)
- `is_active`

### Physical Stock Linkage

The material record links to the inventory module via `material_id`. The UI surfaces:
- Current stock quantity (sum of active lot quantities)
- Stock unit (g, kg, mL, L)
- Lots in stock (count)
- Earliest expiry date
- Last received date

### Substitution Suggestions

When a material is out of stock or not available, the system can suggest substitutes based on:
1. **Manual substitutions:** Org-defined substitution pairs stored in `material_substitutions` table
2. **AI-assisted (v2+):** Embedding similarity on odor descriptor vectors — materials with closest cosine similarity in odor space
3. **CAS group substitutions:** Materials sharing key chemical components

---

## 2C: Supplier & Sourcing System

### Supplier Profile

```sql
CREATE TABLE suppliers (
  supplier_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id),
  company_name        VARCHAR(255) NOT NULL,
  trading_name        VARCHAR(255),
  website_url         VARCHAR(500),
  country             VARCHAR(100),
  address_line1       VARCHAR(255),
  address_line2       VARCHAR(255),
  city                VARCHAR(100),
  postal_code         VARCHAR(20),
  phone               VARCHAR(50),
  primary_contact_name    VARCHAR(255),
  primary_contact_email   VARCHAR(255),
  primary_contact_phone   VARCHAR(50),
  account_number      VARCHAR(100),   -- our account ID with them
  payment_terms       VARCHAR(100),   -- e.g. "Net 30", "Prepayment"
  payment_currency    VARCHAR(10),    -- ISO 4217
  moq_policy          TEXT,
  lead_time_standard  INTEGER,        -- days
  lead_time_express   INTEGER,        -- days
  shipping_methods    TEXT[],
  certifications      TEXT[],         -- ISO, Ecocert, organic, etc.
  quality_rating      DECIMAL(3,2),   -- 1.00–5.00, aggregated from quality events
  reliability_rating  DECIMAL(3,2),   -- 1.00–5.00, on-time delivery %
  notes               TEXT,
  is_active           BOOLEAN DEFAULT true,
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);
```

### Price History

```sql
CREATE TABLE supplier_material_prices (
  price_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  supplier_id         UUID NOT NULL REFERENCES suppliers(supplier_id),
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  supplier_sku        VARCHAR(100),
  price_per_unit      DECIMAL(12,4) NOT NULL,
  unit                VARCHAR(20) NOT NULL,   -- kg, L, g, oz
  currency            VARCHAR(10) NOT NULL,
  valid_from          DATE NOT NULL,
  valid_to            DATE,                   -- NULL = current price
  moq_quantity        DECIMAL(10,3),
  moq_unit            VARCHAR(20),
  tier_breaks         JSONB,                  -- [{min_qty: 1, price: 50.00}, {min_qty: 5, price: 45.00}]
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT now()
);
```

### Price Comparison Matrix

The UI provides a price comparison matrix view for any material:
- Rows: suppliers
- Columns: quantity tiers (100g, 500g, 1kg, 5kg, 25kg)
- Values: price per kg at each tier (normalized to same unit)
- Highlights cheapest option per tier in green
- Shows last price update date; stale prices (> 90 days) shown in amber

### Purchase List Generation

From a production schedule (list of formulas + batch sizes), the system:
1. Calculates total required quantity for each material
2. Subtracts current available stock
3. Adds safety stock buffer (configurable per material, default 20%)
4. Suggests optimal supplier for each material (lowest cost at required quantity)
5. Generates draft purchase order(s) grouped by supplier
6. User can adjust quantities, swap suppliers, split orders
7. Exports as PDF purchase order or sends via email

### Sourcing Optimization

Algorithm:
```
For each required material:
  1. Check stock across all lots (FIFO by expiry date)
  2. net_required = max(0, total_required - available_stock)
  3. If net_required > 0:
     a. Get all active supplier_material_prices for this material
     b. For each supplier, find price at the quantity bracket that covers net_required
     c. Apply currency conversion to base currency
     d. Rank by total_cost (price × net_required)
     e. Flag preferred supplier
     f. Add to purchase list for cheapest (or preferred, if within 5% of cheapest)
```

### Supplier Quality Ratings

Events that affect quality ratings:
- `quality_event` type: `correct_spec` (+), `wrong_spec` (-), `adulterated` (--), `late_delivery` (-), `on_time` (+), `early_delivery` (+)
- Rating is a weighted rolling average of last 24 months of events
- Displayed on supplier profile as 5-star rating with event log

---

## 2D: Inventory Management

### Stock Records

```sql
CREATE TABLE inventory_lots (
  lot_id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id),
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  lot_number          VARCHAR(100) NOT NULL,   -- supplier's lot/batch number
  internal_lot_ref    VARCHAR(100),            -- our internal reference
  supplier_id         UUID REFERENCES suppliers(supplier_id),
  purchase_order_id   UUID REFERENCES purchase_orders(po_id),
  received_date       DATE NOT NULL,
  expiry_date         DATE,
  manufacture_date    DATE,
  initial_quantity    DECIMAL(12,4) NOT NULL,
  current_quantity    DECIMAL(12,4) NOT NULL,
  unit                VARCHAR(20) NOT NULL,    -- g, kg, mL, L
  location            VARCHAR(100),            -- physical storage location
  storage_conditions  VARCHAR(100),            -- cool/dark, refrigerated, etc.
  coa_document_id     UUID,                    -- FK to documents table
  status              VARCHAR(50) DEFAULT 'active', -- active, quarantine, disposed, consumed
  notes               TEXT,
  created_by          UUID REFERENCES users(user_id),
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);
```

### Inventory Transactions

Every stock movement is recorded as an immutable transaction:

```sql
CREATE TABLE inventory_transactions (
  transaction_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id),
  lot_id              UUID NOT NULL REFERENCES inventory_lots(lot_id),
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  transaction_type    VARCHAR(50) NOT NULL,  -- intake, deduction, adjustment, waste, transfer
  quantity_delta      DECIMAL(12,4) NOT NULL,  -- positive = stock in, negative = stock out
  unit                VARCHAR(20) NOT NULL,
  quantity_after      DECIMAL(12,4) NOT NULL,
  reference_type      VARCHAR(50),  -- batch_production, formula_test, adjustment, purchase_order
  reference_id        UUID,         -- FK to the referencing record
  performed_by        UUID REFERENCES users(user_id),
  transaction_date    TIMESTAMPTZ NOT NULL DEFAULT now(),
  notes               TEXT
);
```

### Intake Workflow

1. User opens "Receive Delivery" screen
2. Scans or enters purchase order number (auto-fills supplier and expected materials)
3. For each material received:
   - Enter lot number from supplier CoA
   - Confirm received quantity
   - Set expiry date
   - Assign storage location
   - Upload CoA (photo or file)
4. System creates `inventory_lots` record and `inventory_transactions` (type: `intake`)
5. Stock available immediately in the system

**Mobile intake:** Full barcode/QR scan support. Scan the material's barcode → material record auto-looked up → fill in lot-specific fields only.

### Deduction Workflow

**Manual deduction:** User opens material record → "Deduct Stock" → enter quantity, reason, reference.

**Auto-deduction from batch:** When a batch production record is marked "complete":
- System matches each ingredient to a lot (FIFO by expiry date)
- If multiple lots needed for one ingredient, splits across lots
- Creates deduction transactions for each lot used
- Records exact lot numbers in the batch record

### Formula Consumption Simulation

Before starting a batch, the system shows:

```
Batch: Rose EDP 500mL × 50 bottles
───────────────────────────────────────────────────────
Ingredient       Required    In Stock    Status    Lots Available
───────────────────────────────────────────────────────
Rose Absolute    125.0g      450.2g      ✓ OK      LOT-2024-0312
Sandalwood EO    87.5g       32.0g       ✗ SHORT   LOT-2024-0118
Bergamot FCF     62.5g       850.0g      ✓ OK      LOT-2024-0401
Linalool         45.0g       0.0g        ✗ NO STOCK —
...
───────────────────────────────────────────────────────
```

Shortfalls trigger an option to auto-generate purchase orders for the missing materials.

### Reorder Points

Per material, configurable:
- `reorder_point_quantity` — trigger quantity
- `reorder_point_unit`
- `reorder_quantity` — how much to order
- `lead_time_buffer_days` — safety days on top of supplier lead time

Alert triggers:
- **Low stock:** current quantity ≤ reorder point → amber alert
- **Critical stock:** current quantity ≤ 25% of reorder point → red alert
- **Out of stock:** current quantity = 0 → critical alert
- **Expiring soon:** expiry date within 60 days → amber; within 30 days → red
- **Expired:** expiry date passed → critical, lot auto-quarantined

---

## 2E: Costing Engine

### Per-Ingredient Cost Calculation

For each formula ingredient:

```
ingredient_cost_per_kg = price_per_kg_from_preferred_supplier × (1 / dilution_factor)
```

If diluted:
```
effective_cost_per_kg_active = price_per_kg_of_diluted_material / (dilution_percent / 100)
```

For an accord used as ingredient:
```
accord_cost_per_kg = SUM(each_accord_ingredient_active_pct × its_cost_per_kg)
```

### Formula Cost Per Kg

```
formula_cost_per_kg = SUM(
  ingredient.active_percent / 100 × ingredient.cost_per_kg_active
)
```

This represents the cost of 1 kg of the pure concentrate.

### Finished Product Cost Per Bottle

Inputs:
- `concentrate_percent` — e.g., 20% (EDP)
- `volume_ml` — e.g., 50mL
- `alcohol_cost_per_kg` — configurable
- `bottle_cost` — from packaging table
- `cap_cost`
- `box_cost`
- `label_cost`
- `filling_overhead_per_unit` — filling cost
- `other_overhead` — optional fixed per-unit allocation

```
concentrate_g     = volume_ml × 0.85 × (concentrate_percent / 100)  
  -- using ~0.85 g/mL for ethanol solution density

alcohol_g         = volume_ml × 0.85 × (1 - concentrate_percent / 100)

concentrate_cost  = concentrate_g / 1000 × formula_cost_per_kg
alcohol_cost      = alcohol_g / 1000 × alcohol_cost_per_kg

total_material_cost = concentrate_cost + alcohol_cost
packaging_cost      = bottle + cap + box + label
cogs_per_bottle     = total_material_cost + packaging_cost + filling_overhead + other_overhead
```

### Margin Projections

| Field | Value |
|-------|-------|
| COGS per bottle | Calculated |
| Target wholesale price | User input |
| Target retail price | User input |
| Gross margin (wholesale) | `(wholesale - cogs) / wholesale × 100%` |
| Gross margin (retail) | `(retail - cogs) / retail × 100%` |
| Breakeven units | `fixed_costs / (wholesale - cogs)` |

### Cost Comparison Between Versions

The costing engine can compare two formula versions:
- Table showing cost delta per ingredient
- Total formula cost delta (absolute and %)
- Finished product COGS delta
- Margin impact

### Bulk Pricing Tiers

Price breaks from `supplier_material_prices.tier_breaks` are applied automatically based on batch size. The costing engine uses:
- If `batch_weight_kg` falls into a supplier's tier break → use that tier price
- UI shows cost curve: a simple line chart of cost-per-bottle vs. batch size (100 bottles to 10,000)

---

## 2F: Regulatory & Compliance

### IFRA 2023 Compliance Engine

IFRA compliance is calculated as follows:

For each ingredient in a formula:
1. Look up the ingredient's IFRA limit for the formula's assigned product category
2. Calculate the ingredient's `active_percent` in the finished product (accounting for dilution in concentrate, and concentrate % in finished product)
3. If `active_percent > ifra_limit` → `VIOLATION`
4. If `active_percent > ifra_limit × 0.9` → `WARNING` (within 10% of limit)
5. Otherwise → `OK`

For accords embedded in formula:
- Traverse accord tree recursively
- IFRA limits checked at the individual component level, not at the accord level

For natural complex materials (e.g., bergamot oil, which contains limonene):
- System maintains a `natural_complex_components` table linking the natural material to its constituent sensitizers
- Each sensitizer's contribution is calculated: `natural_material_pct × sensitizer_concentration_in_natural`
- Cumulative allergen loads are summed across all sources

**IFRA prohibited materials:**
- Materials on the IFRA prohibited list are flagged regardless of quantity
- These are stored with `prohibited = true` in `ifra_limits`
- Adding a prohibited material to any formula triggers an immediate blocking warning

**Amendment tracking:**
- The system stores multiple amendments (current + 2 previous) in `ifra_limits`
- User can run compliance check against current or a prior amendment
- When a new amendment is published, system automatically re-checks all approved formulas and flags newly non-compliant ones

### Allergen Calculation

Total allergen load per formula (for EU labeling):

```
For each allergen in allergen_library:
  total_pct = SUM(
    FOR each formula ingredient that contains this allergen:
      ingredient.active_percent_in_product × allergen.percentage_in_material
  )
  
  IF total_pct > leave_on_threshold AND product_type = leave_on:
    → must be declared on label
  IF total_pct > rinse_off_threshold AND product_type = rinse_off:
    → must be declared on label
```

Results shown as a sortable table in the allergen declaration panel.

**Extended allergen list (82 allergens):** Available as premium feature. Includes the 26 mandatory EU allergens plus the SCCS proposed extended list.

### Compliance Status per Formula

Each formula version has a `compliance_status` object:
```json
{
  "ifra_category": 4,
  "overall_status": "violation",
  "checked_at": "2026-05-17T10:30:00Z",
  "amendment": "51st",
  "ingredient_results": [
    {
      "material_id": "...",
      "material_name": "Oakmoss Absolute",
      "active_percent": 0.42,
      "ifra_limit": 0.10,
      "status": "violation",
      "overage_factor": 4.2
    }
  ],
  "allergen_results": [
    {
      "allergen": "Eugenol",
      "total_percent": 0.087,
      "threshold": 0.01,
      "must_declare": true
    }
  ]
}
```

### SDS Document Management

```sql
CREATE TABLE regulatory_documents (
  document_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id),
  material_id         UUID REFERENCES raw_materials(material_id),
  formula_id          UUID REFERENCES formulas(formula_id),
  document_type       VARCHAR(50) NOT NULL, -- SDS, CoA, IFRA_cert, spec_sheet, allergen_decl
  document_name       VARCHAR(255) NOT NULL,
  file_url            VARCHAR(1000) NOT NULL,   -- Cloudflare R2 URL
  file_size_bytes     INTEGER,
  mime_type           VARCHAR(100),
  supplier_id         UUID REFERENCES suppliers(supplier_id),
  issued_date         DATE,
  expiry_date         DATE,
  version             VARCHAR(50),
  is_current          BOOLEAN DEFAULT true,
  uploaded_by         UUID REFERENCES users(user_id),
  uploaded_at         TIMESTAMPTZ DEFAULT now(),
  notes               TEXT
);
```

SDS documents are mandatory for all materials flagged as hazardous. The system:
- Warns when an SDS is missing for a hazardous material
- Warns when an SDS is older than 3 years
- Allows bulk download of all SDS documents for a formula (ZIP archive)

### Export Documents

| Export Type | Contents | Format |
|-------------|----------|--------|
| IFRA Compliance Sheet | Material list, IFRA limits, actual %, status per ingredient, overall compliance | PDF |
| Allergen Declaration | Allergen name, % in finished product, declaration required Y/N, threshold applied | PDF |
| Ingredient Declaration | INCI names, % ranges (as required by EU cosmetics regulation), preservatives | PDF |
| Full Regulatory Dossier | All above combined + formula metadata | PDF |
| Fragrance Ingredient Transparency | EU FITI format (voluntary) | PDF |

### Regional Restriction Flags

```sql
CREATE TABLE regional_restrictions (
  restriction_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  region              VARCHAR(50) NOT NULL,   -- EU, US, China, Japan, Australia
  restriction_type    VARCHAR(50) NOT NULL,   -- prohibited, restricted, declaration_required
  limit_percent       DECIMAL(8,5),
  product_categories  TEXT[],                 -- which product types this applies to
  regulation_ref      VARCHAR(255),           -- e.g. "EU Regulation 1223/2009 Annex II"
  effective_date      DATE,
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT now()
);
```

Regions supported at launch: EU, US (FDA), China (CSAR), UK (post-Brexit CPSR), Japan (Pharmaceutical and Medical Device Act).

When a formula is tagged for a target market, regional restrictions are checked automatically and flagged alongside IFRA compliance.

---

# SECTION 3: AI FEATURES ROADMAP

## Phase 1 (MVP+1): Utility AI

### Smart Search
- **What it does:** Full-text + semantic search over materials and formulas. Type "smoky woody leather" and get materials matching that olfactory profile, even if those exact words don't appear in the name.
- **Implementation:** Embed all material descriptors and formula odor profiles using `text-embedding-3-small`. Store vectors in `pgvector` column on `raw_materials` and `formulas`. At query time, embed the query string and do ANN search with `cosine` distance.
- **Data requirements:** ~5,000 material records with odor descriptors populated.
- **Infrastructure:** pgvector extension on Postgres. No separate vector DB needed at Phase 1 scale.

### Duplicate Detection
- **What it does:** When creating or importing a formula, flags near-duplicate formulas already in the org's library. Prevents accidental redundancy.
- **Implementation:** Hash the sorted (material_id, active_percent) ingredient list. Exact duplicates caught by hash match. Near-duplicates (> 85% ingredient overlap by weight) caught by Jaccard similarity on ingredient sets.
- **Trigger:** Runs on formula save. Async background job, results surfaced as non-blocking suggestion.

### Basic Substitution Suggestions
- **What it does:** When a material is unavailable (out of stock or on backorder), suggests alternatives based on odor similarity.
- **Implementation:** For each material, pre-compute top-10 nearest neighbors by embedding similarity. Filter to materials that are in stock. Surface in UI as "Similar materials in stock."
- **Data requirements:** Embeddings for all materials. Inventory data.

---

## Phase 2: Predictive AI

### Scent Profile Prediction from Formula Composition
- **What it does:** Given a formula's ingredient list and percentages, predict the likely olfactory character (e.g., "This formula will read as floral-woody with a prominent amber drydown"). Helps perfumers evaluate on paper before bench time.
- **Implementation:** Fine-tune or prompt-engineer Claude claude-sonnet-4-6 with a RAG context of: (a) the formula's ingredient list with descriptors, (b) known formulas with evaluated scent profiles as few-shot examples. The model synthesizes a predicted profile narrative + suggested descriptor tags.
- **Accuracy caveat:** Clearly labeled "AI prediction — not a substitute for evaluation." Accuracy improves as users log evaluations (training signal).

### Cost Optimization Suggestions
- **What it does:** After a formula cost calculation, AI reviews the expensive ingredients and suggests cost-reduction paths: substitute materials, reduce percentages of high-cost items, or source from alternative suppliers.
- **Implementation:** Structured prompt to Claude with: formula, cost breakdown, ingredient price data, available substitutes. Returns ranked suggestions with estimated cost savings and predicted olfactory impact.
- **User value:** Helps hit price target on a brief without starting from scratch.

---

## Phase 3: Generative AI

### Generative Accord Suggestions
- **What it does:** Given a brief ("create a rose accord that reads as powdery and modern"), the system generates a starting accord formula with suggested ingredient ratios.
- **Implementation:** RAG over the org's existing accord library + global formula embeddings. Claude generates a suggested accord as structured JSON (ingredient list + percentages). User imports the suggestion directly into the accord editor as a starting point.
- **Key constraint:** Generated accords are clearly marked "AI Draft" and cannot be directly used in approved formulas without user review and explicit save.

### Stability Prediction
- **What it does:** Predicts which ingredient combinations are likely to cause stability issues (discoloration, phase separation, degradation over time) based on known chemical interactions.
- **Implementation:** Curated knowledge base of known incompatibilities (embedded), plus Claude reasoning over the formula's ingredient list. Returns flagged interactions with confidence and literature reference.

### Customer Preference Matching
- **What it does:** Given a customer's historical evaluation scores on previous samples, predict how they will rate new formula submissions. Helps prioritize which formulas to submit first.
- **Implementation:** Embed evaluation notes and scores per customer. Build preference profile. Score new formulas against preference profile.

---

## AI Architecture

### Embedding Model
- **Model:** `text-embedding-3-small` (OpenAI) or equivalent via Anthropic (when available)
- **What gets embedded:** Material odor descriptor strings, formula evaluation notes, formula scent profile descriptions, brief texts
- **Storage:** `pgvector` column (`VECTOR(1536)`) on relevant tables
- **Index:** `ivfflat` index with `lists = 100` for ANN search at 5k–100k record scale

### RAG Over Formula Database
- **Retrieval:** For any AI query involving formulas, retrieve top-K similar formulas from pgvector search
- **Context construction:** Inject retrieved formulas as structured JSON context into Claude prompt
- **Prompt structure:**
  ```
  System: You are a professional perfumer's assistant with expertise in fragrance formulation.
  
  Context formulas (retrieved by similarity):
  <formula_context>
  [JSON array of similar formulas with ingredient lists and evaluation notes]
  </formula_context>
  
  User query: [task-specific prompt]
  ```
- **Model:** Claude claude-sonnet-4-6 (Anthropic) for all generative tasks
- **Token budget:** ~8k tokens context per request; retrieved context limited to top-3 formulas

### Fine-Tuned Models (Phase 3)
- As evaluation data accumulates, fine-tune a smaller model on the task of predicting scent profiles from ingredient lists
- Training data: formula ingredient lists → evaluation notes (from user-logged evaluations)
- Minimum training set: 500 formula-evaluation pairs
- Hosted on Anthropic fine-tuning API or HuggingFace inference endpoint

### Data Flywheel Strategy

```
User creates formula
    ↓
User logs evaluation (rating + notes)
    ↓
Data stored with formula + evaluation pair
    ↓
AI model uses this as training signal
    ↓
Better predictions → more useful AI
    ↓
More users adopt AI features → more evaluations logged
    ↓  (flywheel complete)
```

**Flywheel accelerators:**
- Prompt users to log evaluations after 24h, 48h, and 1 week from formula save
- Gamification: "Evaluation streak" badge visible on profile
- AI features gated on minimum evaluation count (e.g., "Log 10 evaluations to unlock AI predictions")
- Network effects: Org-level models improve as team members all log evaluations

**Data governance:**
- Customer formula data is NEVER used to train shared/global models without explicit opt-in
- All AI training uses anonymized, aggregated data only
- GDPR-compliant data deletion cascade covers AI training data

---

# SECTION 4: UX / UI DESIGN SPECIFICATION

## Information Architecture

### Full Sitemap

```
YEVFUMES
├── / (Dashboard — home)
├── /formulas
│   ├── /formulas/new
│   ├── /formulas/:id
│   │   ├── /formulas/:id/edit (Formula Editor)
│   │   ├── /formulas/:id/versions
│   │   ├── /formulas/:id/versions/:version
│   │   ├── /formulas/:id/compare?a=1.0&b=1.3
│   │   ├── /formulas/:id/costing
│   │   ├── /formulas/:id/compliance
│   │   ├── /formulas/:id/evaluations
│   │   └── /formulas/:id/export
│   └── /formulas/search
├── /accords
│   ├── /accords/new
│   ├── /accords/:id
│   └── /accords/search
├── /materials
│   ├── /materials/new
│   ├── /materials/:id
│   │   ├── /materials/:id/edit
│   │   ├── /materials/:id/suppliers
│   │   ├── /materials/:id/safety
│   │   └── /materials/:id/stock
│   └── /materials/search
├── /inventory
│   ├── /inventory/overview
│   ├── /inventory/receive (intake flow)
│   ├── /inventory/lots
│   ├── /inventory/lots/:lot_id
│   ├── /inventory/alerts
│   └── /inventory/transactions
├── /suppliers
│   ├── /suppliers/new
│   ├── /suppliers/:id
│   │   ├── /suppliers/:id/materials
│   │   ├── /suppliers/:id/orders
│   │   └── /suppliers/:id/quality
│   └── /suppliers/search
├── /costing
│   ├── /costing/dashboard
│   └── /costing/scenarios
├── /compliance
│   ├── /compliance/dashboard
│   ├── /compliance/ifra
│   └── /compliance/documents
├── /purchasing
│   ├── /purchasing/orders
│   ├── /purchasing/orders/new
│   └── /purchasing/orders/:id
├── /settings
│   ├── /settings/organization
│   ├── /settings/team
│   ├── /settings/materials (org material database)
│   ├── /settings/ifra (amendment settings)
│   ├── /settings/integrations
│   └── /settings/billing
└── /account
    ├── /account/profile
    └── /account/preferences
```

---

## Dashboard Design

### Home Dashboard Layout

The home dashboard is a grid of data cards. Desktop layout (1280px+) is a 12-column grid. Layout:

```
┌─────────────────────────────────────────────────────────────────┐
│  YEVFUMES            [Search...]          [+New Formula]  [👤]   │
├──────────┬──────────────────────────────────────────────────────┤
│          │                                                       │
│  Nav     │  Good morning, Maya.                                  │
│          │                                                       │
│  Formulas│  ┌──────────────┐ ┌──────────────┐ ┌─────────────┐  │
│  Accords │  │ Active       │ │ Compliance   │ │ Low Stock   │  │
│  Materials  │ Formulas     │ │ Alerts       │ │ Alerts      │  │
│  Inventory  │    47        │ │     3        │ │     8       │  │
│  Suppliers  │ ↑2 this week │ │  2 violation │ │  3 critical │  │
│  Costing │  └──────────────┘ └──────────────┘ └─────────────┘  │
│  Compliance │                                                    │
│  Purchasing │  Recent Formulas                    [View All →]  │
│          │  ┌──────────────────────────────────────────────┐   │
│  Settings│  │ Rose Chypre v2.1      Draft   Edited 2h ago  │   │
│          │  │ Amber Woods v1.0      Approved Edited 1d ago  │   │
│          │  │ Bergamot EDT v3.2     Review  Edited 3d ago   │   │
│          │  │ Oud Intense v1.4      Draft   Edited 5d ago   │   │
│          │  └──────────────────────────────────────────────┘   │
│          │                                                       │
│          │  ┌─────────────────────┐  ┌────────────────────────┐ │
│          │  │ Compliance Overview │  │ Inventory Health       │ │
│          │  │ ● 44 OK             │  │ ● 127 materials        │ │
│          │  │ ▲ 3 warnings        │  │ ▲ 8 low stock          │ │
│          │  │ ✗ 3 violations      │  │ ✗ 3 critical           │ │
│          │  │ [View Violations →] │  │ ● 5 expiring soon      │ │
│          │  └─────────────────────┘  └────────────────────────┘ │
└──────────┴──────────────────────────────────────────────────────┘
```

### Dashboard Widgets

| Widget | Data | Update frequency |
|--------|------|-----------------|
| Active Formulas count | Count of non-archived formulas | Real-time |
| Compliance Alerts | Count of violations + warnings | On formula save |
| Low Stock Alerts | Materials below reorder point | Every 15 min |
| Recent Formulas | Last 5 modified formulas | Real-time |
| Compliance Overview | Donut chart: OK/warning/violation | On formula save |
| Inventory Health | Stock status summary | Every 15 min |
| Recent Evaluations | Last 3 evaluations logged | Real-time |
| Pending Tasks | Assigned review tasks (v2) | Real-time |

---

## Formula Editor UX

### Layout

The formula editor is a full-width, content-dense workspace. Three-panel layout on desktop (1280px+):

```
┌─────────────────────────────────────────────────────────────────────┐
│ ← Formulas  │  Rose Chypre    [v2.1 ▾]  [Draft]  [Save]  [...]     │
├─────────────────────────────────┬───────────┬────────────────────────┤
│  FORMULA EDITOR (main)          │ VERSIONS  │  EVALUATION LOG        │
│                                 │           │                        │
│  ┌───┬───────────────────────────┬────┬─────┬──────┬──────┬────┐    │
│  │ ⠿ │ Ingredient                │ %  │  g  │$/kg  │ $    │IFRA│    │
│  ├───┼───────────────────────────┼────┼─────┼──────┼──────┼────┤    │
│  │   TOP NOTES                   │    │     │      │      │    │    │
│  ├───┼───────────────────────────┼────┼─────┼──────┼──────┼────┤    │
│  │ ⠿ │ Bergamot FCF              │8.0 │ 8.0 │24.50 │ 0.20 │ ✓ │    │
│  │ ⠿ │ Pink Pepper CO2           │2.5 │ 2.5 │187.00│ 0.47 │ ✓ │    │
│  ├───┼───────────────────────────┼────┼─────┼──────┼──────┼────┤    │
│  │   HEART NOTES                 │    │     │      │      │    │    │
│  ├───┼───────────────────────────┼────┼─────┼──────┼──────┼────┤    │
│  │ ⠿ │ Rose Absolute             │12.0│12.0 │2840.0│34.08 │ ✓ │    │
│  │ ⠿ │ [Rose Heart Accord ▾]     │20.0│20.0 │48.20 │ 9.64 │ ▲ │    │
│  │ ⠿ │ Geranium Bourbon EO       │5.0 │ 5.0 │65.00 │ 3.25 │ ✓ │    │
│  ├───┼───────────────────────────┼────┼─────┼──────┼──────┼────┤    │
│  │   BASE NOTES                  │    │     │      │      │    │    │
│  ├───┼───────────────────────────┼────┼─────┼──────┼──────┼────┤    │
│  │ ⠿ │ Ambroxan                  │6.0 │ 6.0 │285.00│17.10 │ ✓ │    │
│  │ ⠿ │ Sandalwood EO             │8.0 │ 8.0 │980.00│78.40 │ ✗ │    │
│  └───┴───────────────────────────┴────┴─────┴──────┴──────┴────┘    │
│                                                                      │
│  [+ Add Ingredient]   Total: 98.5% [!]   Cost/kg: $247.83           │
│                                                                      │
│  [IFRA: ✗ VIOLATION — Cat. 4]  [Allergens: 3 to declare]  [Cost ▾]  │
└─────────────────────────────────┴───────────┴────────────────────────┘
```

### Formula Editor Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + Enter` | Save version |
| `Cmd/Ctrl + /` | Focus ingredient search |
| `↑` / `↓` | Navigate ingredient rows |
| `Tab` | Move to next field in row |
| `Delete` (on row) | Remove ingredient |
| `Cmd/Ctrl + D` | Duplicate selected row |
| `Cmd/Ctrl + Shift + N` | Normalize percentages to 100% |
| `Cmd/Ctrl + Shift + S` | Open scale calculator |
| `Cmd/Ctrl + Shift + C` | Open compliance panel |
| `Cmd/Ctrl + Z` | Undo (in-session only) |
| `?` | Show keyboard shortcut help |

### Ingredient Search UX

Triggered by clicking any ingredient name cell or pressing `Cmd+/`:
- Inline search dropdown (not a modal)
- Shows material name, type badge (natural/synthetic), odor family, current stock status
- Fuzzy search: "bergmot" finds "Bergamot FCF"
- Filter pills: Natural | Synthetic | In Stock | Allergen-free
- Keyboard navigable (↑↓ arrows, Enter to select)
- "Add new material" option at bottom of dropdown

### Real-Time Calculations

Every keystroke in the `%` field triggers:
1. Recalculate `grams` (if batch weight set)
2. Recalculate `line_cost`
3. Recalculate total cost/kg
4. Update IFRA status badge for that ingredient
5. Update overall compliance badge
6. Recalculate allergen totals

All calculations run client-side (no server round-trip for each keystroke). Only on save does the server persist the state.

### Version History Panel (Right Sidebar)

```
VERSION HISTORY
─────────────────
● v2.1  [CURRENT]
  Draft · 2h ago · You
  
○ v2.0  
  Approved · 3d ago · Maya T.
  "Reformulated base"
  
○ v1.3
  Approved · 12d ago · Maya T.
  "Reduced oakmoss to comply"

○ v1.2
  Deprecated · 20d ago

[Compare v2.1 vs v2.0]
[View full history]
```

Clicking any version loads it in read-only mode. "Restore this version" creates a new MINOR version from that version's data.

### Evaluation Log Panel

```
EVALUATIONS — v2.1
─────────────────────────
[+ Log Evaluation]

  May 17 · 48h · Maya T.
  ★★★★☆ · Strip
  "Beautiful top, rose is natural
   and airy. Base needs more
   weight — ambroxan reading 
   too synthetic."
  Tags: top-heavy, base-thin

  May 15 · 0h · Maya T.
  ★★★☆☆ · Cold strip
  "Sharp bergamot, rose bud
   just emerging. Promising."

[View All (7)]
```

### Compliance Badge Design

The compliance badge appears at the bottom of the formula editor and as an icon in formula list views:

- **Green:** `● IFRA OK — Cat. 4` — all ingredients within limits
- **Amber:** `▲ IFRA WARNING — Cat. 4` — one or more ingredients within 10% of limit
- **Red:** `✗ IFRA VIOLATION — Cat. 4` — one or more ingredients exceed limit
- **Grey:** `○ Not Checked` — no IFRA category assigned

Clicking the badge opens the full compliance panel showing per-ingredient status.

---

## Material Search UX

### Search Bar
- Persistent in the `/materials` route
- Searches: name, INCI name, CAS number, descriptor tags, synonyms
- Results appear as you type (300ms debounce)
- Powered by Typesense for sub-50ms response times

### Filter Panel (Left sidebar)

```
FILTERS
──────────────
Type
  ☐ Natural
  ☐ Synthetic  
  ☐ Isolate
  ☐ Carrier/Solvent

Odor Family
  ☐ Floral
  ☐ Woody
  ☐ Oriental
  ☐ Fresh
  ☐ Fougère
  [more...]

Availability
  ☐ In Stock
  ☐ Out of Stock

IFRA Status
  ☐ Unrestricted
  ☐ Restricted (Cat. 4)
  ☐ Prohibited

Allergen Status  
  ☐ No allergens
  ☐ Has EU allergens
  ☐ Contains Linalool
  [...]

Supplier
  ☐ Supplier A
  ☐ Givaudan
  ☐ Firmenich
  [...]

Price Range
  $____/kg to $____/kg
```

### Results Display

Toggle between list view and card view.

**Card view:** 3-column grid. Each card:
- Material name (large)
- Type badge (color-coded: green=natural, blue=synthetic, purple=isolate)
- Top 3 odor descriptors as chips
- Volatility indicator (T / H / B)
- Stock indicator (green dot = in stock, red = out)
- Price (from preferred supplier, per kg)
- IFRA status chip (if restricted/prohibited)
- [Add to Formula] quick-action button (visible on hover)

### Odor Wheel Visualization

Available on `/materials/search` as an overlay toggle. An interactive SVG fragrance wheel:
- 12 sectors (Floral, Woody, Oriental, Musky, Leather, Animalic, Green, Aquatic, Citrus, Aromatic, Gourmand, Spicy)
- Materials plotted as dots on the wheel
- Dot size = intensity; dot color = type (natural/synthetic)
- Click on a dot → opens material detail panel
- Click on a sector → filters material list to that family
- Hover over dot → tooltip with name, top descriptors, price

---

## Inventory Dashboard

```
INVENTORY HEALTH                              Last updated: 2 min ago

┌─────────────────┬──────────────────┬──────────────────────────────┐
│  IN STOCK       │  LOW STOCK       │  CRITICAL / NO STOCK          │
│  119 materials  │  8 materials     │  3 materials                  │
│                 │  Reorder soon    │  Production blocked           │
└─────────────────┴──────────────────┴──────────────────────────────┘

EXPIRY ALERTS
─────────────────────────────────────────────────────
▲ Oakmoss Absolute (LOT-2024-0102)    Expires in 28 days
▲ Civet Tincture (LOT-2023-1205)      Expires in 45 days  
● Bergamot FCF (LOT-2024-0301)        Expires in 58 days

LOW STOCK
─────────────────────────────────────────────────────
Material              Stock    Reorder Pt   Supplier
────────────────────────────────────────────────────
Ambroxan              50g      200g         Symrise    [Order]
Hedione HC            25g      100g         Firmenich  [Order]
Rose Absolute         10g      50g          Biolandes  [Order]
[View All 8]

RECENT TRANSACTIONS (last 24h)
─────────────────────────────────────────────────────
→ Received: Linalool 1kg LOT-2026-0515 from Bedoukian
→ Deducted: Bergamot FCF 45g for Batch #B-2026-047
→ Received: Patchouli EO 500g LOT-2026-0514 from Robertet
```

---

## Design Direction

### Color Palette

```
Primary Colors
──────────────
--color-brand-900:    #0A0A0F   (near-black, primary text)
--color-brand-800:    #14141E   (header backgrounds, nav)
--color-brand-700:    #1E1E2E   (card backgrounds, dark mode surface)
--color-brand-600:    #2A2A40   (borders, dividers in dark mode)
--color-brand-500:    #4A4A72   (secondary text, muted)
--color-brand-400:    #7B7BAA   (tertiary text, placeholders)
--color-brand-300:    #A8A8CC   (icons, inactive states)
--color-brand-200:    #D4D4E8   (light borders, light mode dividers)
--color-brand-100:    #EEEEF5   (light mode card backgrounds)
--color-brand-50:     #F7F7FB   (light mode page background)

Accent (Gold — the "perfumer's gold")
──────────────────────────────────────
--color-accent-700:   #7A5C00
--color-accent-600:   #A07800
--color-accent-500:   #C49A00
--color-accent-400:   #D4B000   (primary accent)
--color-accent-300:   #E8CC44
--color-accent-200:   #F0DC7C
--color-accent-100:   #F8F0C0

Semantic Colors
───────────────
--color-success:      #16A34A   (green — OK, compliant)
--color-success-bg:   #DCFCE7
--color-warning:      #CA8A04   (amber — warning, approaching limit)
--color-warning-bg:   #FEF9C3
--color-danger:       #DC2626   (red — violation, critical)
--color-danger-bg:    #FEE2E2
--color-info:         #2563EB   (blue — informational)
--color-info-bg:      #DBEAFE

Neutral (Light Mode)
─────────────────────
--color-white:        #FFFFFF
--color-gray-50:      #F9FAFB
--color-gray-100:     #F3F4F6
--color-gray-200:     #E5E7EB
--color-gray-300:     #D1D5DB
--color-gray-400:     #9CA3AF
--color-gray-500:     #6B7280
--color-gray-600:     #4B5563
--color-gray-700:     #374151
--color-gray-800:     #1F2937
--color-gray-900:     #111827
```

### Typography Stack

```
Primary Font: "Inter"         (UI, body text, data tables)
  - Source: Google Fonts / Bunny Fonts
  - Weights used: 400, 500, 600, 700
  - Usage: All UI text, labels, inputs, navigation

Secondary Font: "DM Serif Display"   (headings, brand moments)
  - Source: Google Fonts
  - Weights used: 400 (regular), 400 italic
  - Usage: Page titles, marketing copy, formula names (hero)

Monospace Font: "JetBrains Mono"    (data, percentages, CAS numbers)
  - Source: Google Fonts
  - Weights used: 400, 500
  - Usage: Ingredient percentages, CAS numbers, lot numbers, code blocks

Type Scale (using rem, base 16px):
  --text-xs:     0.75rem   (12px)  — captions, badges
  --text-sm:     0.875rem  (14px)  — secondary text, table cells
  --text-base:   1rem      (16px)  — body text, inputs
  --text-lg:     1.125rem  (18px)  — card titles, section headers
  --text-xl:     1.25rem   (20px)  — page sub-headings
  --text-2xl:    1.5rem    (24px)  — page headings
  --text-3xl:    1.875rem  (30px)  — dashboard hero numbers
  --text-4xl:    2.25rem   (36px)  — marketing/onboarding

Line Heights:
  --leading-tight:    1.25
  --leading-snug:     1.375
  --leading-normal:   1.5
  --leading-relaxed:  1.625
```

### Component Style Guide

**Cards:**
```css
.card {
  background: var(--color-white);        /* light mode */
  border: 1px solid var(--color-gray-200);
  border-radius: 8px;
  padding: 20px 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
}

/* Dark mode */
.dark .card {
  background: var(--color-brand-700);
  border-color: var(--color-brand-600);
}
```

**Inputs:**
```css
.input {
  height: 36px;
  padding: 0 12px;
  border: 1px solid var(--color-gray-300);
  border-radius: 6px;
  font-size: var(--text-sm);
  font-family: 'Inter', sans-serif;
  background: var(--color-white);
  transition: border-color 0.15s, box-shadow 0.15s;
}
.input:focus {
  border-color: var(--color-brand-500);
  box-shadow: 0 0 0 3px rgba(74, 74, 114, 0.12);
  outline: none;
}
```

**Percentage inputs** (in formula editor) use monospace font, right-aligned, 72px wide, with subtle right-border highlight when focused.

**Badges:**
```
Status badges: pill shape (border-radius: 999px), 
  padding: 2px 10px, font-size: text-xs, font-weight: 600
  
  Green (OK):       bg #DCFCE7, text #15803D, border #16A34A20
  Amber (Warning):  bg #FEF9C3, text #A16207, border #CA8A0420
  Red (Violation):  bg #FEE2E2, text #B91C1C, border #DC262620
  Blue (Info):      bg #DBEAFE, text #1D4ED8, border #2563EB20
  Gray (Draft):     bg #F3F4F6, text #6B7280, border #D1D5DB
  Purple (Accord):  bg #F3E8FF, text #7E22CE, border #9333EA20
```

**Tables:**
```
Table style: borderless rows, subtle hover (#F9FAFB), 
sticky header, sortable columns with sort indicator.
Row height: 44px (standard), 36px (compact mode).
First column: font-weight 500, not truncated.
Numeric columns: right-aligned, monospace font.
Action columns: right-aligned, visible on row hover only.
```

### Aesthetic Direction

YEVFUMES visual language is **luxury-minimal with terminal precision**:
- Aesop: restrained, typographic, considered negative space
- Bloomberg Terminal: information density, keyboard-first, trusts the user
- Linear.app: smooth interactions, beautiful data, zero chrome

**Anti-patterns to avoid:**
- No rounded-2xl everything, no drop-shadow-xl, no gradient hero sections
- No stock photography, no abstract blobs
- No loading spinners on actions that take < 200ms
- No confirmation modals for reversible actions

**Motion principles:**
- Transitions: 150ms ease-out (UI state changes), 250ms ease-in-out (panel slides)
- No animations that delay information access
- Formula rows: fade-in 80ms on add, slide-out 120ms on remove
- Page transitions: instant (no animated route transitions in the editor)

### Dark Mode

Full dark mode support via CSS custom properties.

Dark mode activates via:
1. System preference (`prefers-color-scheme: dark`)
2. User toggle in account settings (persisted to DB)

Dark mode surface hierarchy:
```
Page background:    #0A0A0F
Sidebar:            #111118
Card surface:       #14141E
Card elevated:      #1A1A28
Input background:   #0E0E18
Border:             #2A2A40
```

Accent gold remains the same in dark mode (it reads well on dark).
Semantic colors slightly adjusted for dark mode legibility:
- Success text on dark: `#22C55E` (brighter green)
- Warning text on dark: `#EAB308`
- Danger text on dark: `#EF4444`

### Mobile vs. Desktop

**Desktop (1024px+):** Primary interaction surface.
- Full formula editor (three-panel layout)
- Material search with filter sidebar
- Inventory overview with data tables
- Costing engine with charts

**Tablet (768–1023px):**
- Formula editor collapses to two-panel (editor + compliance/cost tab strip)
- Material search: filter panel collapses to filter drawer
- Inventory: full functionality

**Mobile (< 768px):** Optimized for lab floor use cases.
- **Inventory intake:** Full-featured. Barcode scan, lot entry, expiry date. This is the primary mobile use case.
- **Quick material lookup:** Search material database, see stock and IFRA status.
- **Formula viewer:** Read-only view of formula and compliance status.
- **NOT supported on mobile:** Formula editor, costing, compliance report generation.
- **PWA install:** "Add to Home Screen" prompt. Service worker caches material database and recent formulas for offline viewing.

---

# SECTION 5: DATABASE SCHEMA

## Full PostgreSQL Schema

```sql
-- ============================================================
-- MULTI-TENANCY: Organizations & Users
-- ============================================================

CREATE TABLE organizations (
  org_id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name                VARCHAR(255) NOT NULL,
  slug                VARCHAR(100) NOT NULL UNIQUE,
  plan                VARCHAR(50) NOT NULL DEFAULT 'starter',  -- starter, professional, studio, enterprise
  plan_started_at     TIMESTAMPTZ,
  plan_expires_at     TIMESTAMPTZ,
  max_users           INTEGER DEFAULT 1,
  max_formulas        INTEGER DEFAULT 50,
  max_materials       INTEGER DEFAULT 500,
  settings            JSONB DEFAULT '{}',   -- org-level config
  billing_email       VARCHAR(255),
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_organizations_slug ON organizations(slug);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE users (
  user_id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  email               VARCHAR(255) NOT NULL UNIQUE,
  full_name           VARCHAR(255) NOT NULL,
  display_name        VARCHAR(100),
  role                VARCHAR(50) NOT NULL DEFAULT 'member',  -- owner, admin, member, viewer
  avatar_url          VARCHAR(500),
  auth_provider_id    VARCHAR(255),   -- Clerk/Supabase user ID
  preferences         JSONB DEFAULT '{}',   -- theme, notifications, etc.
  last_login_at       TIMESTAMPTZ,
  is_active           BOOLEAN DEFAULT true,
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_users_org_id ON users(org_id);
CREATE INDEX idx_users_email ON users(email);

-- ============================================================
-- TAGS (polymorphic tagging system)
-- ============================================================

CREATE TABLE tags (
  tag_id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  name                VARCHAR(100) NOT NULL,
  color               VARCHAR(7),    -- hex color e.g. #D4B000
  category            VARCHAR(50),   -- odor_family, season, occasion, project, custom
  UNIQUE (org_id, name)
);

CREATE INDEX idx_tags_org_id ON tags(org_id);

-- ============================================================
-- RAW MATERIALS
-- ============================================================

CREATE TABLE raw_materials (
  material_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID REFERENCES organizations(org_id) ON DELETE CASCADE,
  -- NULL org_id = global shared material in YEVFUMES database
  name                VARCHAR(255) NOT NULL,
  inci_name           VARCHAR(255),
  cas_number          VARCHAR(50),
  fema_number         VARCHAR(20),
  einecs_number       VARCHAR(30),
  type                VARCHAR(50) NOT NULL CHECK (type IN (
                        'natural', 'synthetic', 'isolate', 'blend', 
                        'carrier', 'solvent', 'aroma_chemical')),
  subtype             VARCHAR(50),   -- essential_oil, absolute, co2_extract, tincture, resinoid
  origin_country      VARCHAR(100),
  botanical_name      VARCHAR(255),
  extraction_method   VARCHAR(100),
  is_natural_complex  BOOLEAN DEFAULT false,  -- e.g. bergamot oil (contains many components)
  is_active           BOOLEAN DEFAULT true,
  is_global           BOOLEAN DEFAULT false,  -- in YEVFUMES shared catalog
  description         TEXT,
  internal_notes      TEXT,
  odor_embedding      vector(1536),           -- pgvector for semantic search
  created_by          UUID REFERENCES users(user_id),
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_raw_materials_org_id ON raw_materials(org_id);
CREATE INDEX idx_raw_materials_cas ON raw_materials(cas_number);
CREATE INDEX idx_raw_materials_inci ON raw_materials(inci_name);
CREATE INDEX idx_raw_materials_type ON raw_materials(type);
CREATE INDEX idx_raw_materials_embedding ON raw_materials 
  USING ivfflat (odor_embedding vector_cosine_ops) WITH (lists = 100);
-- Full-text search index
CREATE INDEX idx_raw_materials_fts ON raw_materials 
  USING GIN (to_tsvector('english', coalesce(name,'') || ' ' || coalesce(inci_name,'') || ' ' || coalesce(cas_number,'')));

-- ──────────────────────────────────────────────────────────────

CREATE TABLE material_properties (
  property_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id) ON DELETE CASCADE,
  appearance          VARCHAR(100),
  color_description   VARCHAR(100),
  flash_point_celsius DECIMAL(6,2),
  flash_point_method  VARCHAR(50),
  boiling_point_celsius DECIMAL(6,2),
  melting_point_celsius DECIMAL(6,2),
  specific_gravity    DECIMAL(6,4),
  refractive_index    DECIMAL(6,4),
  optical_rotation    VARCHAR(50),
  solubility_alcohol  VARCHAR(100),
  solubility_water    VARCHAR(100),
  solubility_notes    TEXT,
  viscosity_cps       DECIMAL(10,2),
  vapor_pressure_pa   DECIMAL(10,2),
  log_kow             DECIMAL(5,2),
  skin_sensitization  VARCHAR(50),  -- none, weak, moderate, strong
  phototoxic          BOOLEAN DEFAULT false,
  phototoxicity_limit_percent DECIMAL(8,5),
  regulatory_status   JSONB,  -- {"EU": "compliant", "US": "restricted", ...}
  updated_at          TIMESTAMPTZ DEFAULT now(),
  UNIQUE (material_id)
);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE material_odor_profiles (
  profile_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id) ON DELETE CASCADE,
  primary_family      VARCHAR(50),
  secondary_family    VARCHAR(50),
  descriptors         TEXT[] DEFAULT '{}',
  intensity           SMALLINT CHECK (intensity BETWEEN 1 AND 10),
  longevity           SMALLINT CHECK (longevity BETWEEN 1 AND 10),
  tenacity            SMALLINT CHECK (tenacity BETWEEN 1 AND 10),
  diffusion           SMALLINT CHECK (diffusion BETWEEN 1 AND 10),
  volatility          VARCHAR(20) CHECK (volatility IN ('top', 'top-heart', 'heart', 'heart-base', 'base')),
  odor_threshold_ppb  DECIMAL(12,6),
  character_notes     TEXT,
  wheel_x             DECIMAL(5,3),
  wheel_y             DECIMAL(5,3),
  updated_at          TIMESTAMPTZ DEFAULT now(),
  UNIQUE (material_id)
);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE material_allergens (
  allergen_entry_id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id) ON DELETE CASCADE,
  allergen_name       VARCHAR(100) NOT NULL,
  cas_number          VARCHAR(50),
  eu_annex_iii        BOOLEAN DEFAULT false,
  eu_extended_list    BOOLEAN DEFAULT false,
  sccs_list           BOOLEAN DEFAULT false,
  percentage          DECIMAL(8,5),         -- % concentration in this material
  percentage_min      DECIMAL(8,5),         -- range if variable
  percentage_max      DECIMAL(8,5),
  percentage_source   VARCHAR(100),
  natural_occurrence  BOOLEAN DEFAULT false,
  added_ingredient    BOOLEAN DEFAULT false,
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_material_allergens_material ON material_allergens(material_id);
CREATE INDEX idx_material_allergens_eu ON material_allergens(eu_annex_iii) WHERE eu_annex_iii = true;

-- ──────────────────────────────────────────────────────────────

CREATE TABLE material_tags (
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id) ON DELETE CASCADE,
  tag_id              UUID NOT NULL REFERENCES tags(tag_id) ON DELETE CASCADE,
  PRIMARY KEY (material_id, tag_id)
);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE material_substitutions (
  substitution_id     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  substitute_id       UUID NOT NULL REFERENCES raw_materials(material_id),
  similarity_score    DECIMAL(4,3),   -- 0.000 to 1.000
  notes               TEXT,
  created_by          UUID REFERENCES users(user_id),
  created_at          TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- IFRA LIMITS
-- ============================================================

CREATE TABLE ifra_amendments (
  amendment_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code                VARCHAR(20) NOT NULL UNIQUE,   -- e.g. "51st"
  published_date      DATE NOT NULL,
  effective_date      DATE NOT NULL,
  is_current          BOOLEAN DEFAULT false,
  document_url        VARCHAR(500),
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT now()
);

CREATE UNIQUE INDEX idx_ifra_amendments_current ON ifra_amendments(is_current) WHERE is_current = true;

-- ──────────────────────────────────────────────────────────────

CREATE TABLE ifra_limits (
  limit_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  amendment_id        UUID NOT NULL REFERENCES ifra_amendments(amendment_id),
  material_id         UUID REFERENCES raw_materials(material_id),  -- may be NULL if matched by CAS
  cas_number          VARCHAR(50),
  material_name       VARCHAR(255),   -- as named in IFRA document
  prohibited          BOOLEAN DEFAULT false,
  restricted          BOOLEAN DEFAULT false,
  -- Category limits (% in finished product)
  -- Categories matching IFRA 51st Amendment structure
  cat_1               DECIMAL(10,5),  -- Lip products
  cat_2               DECIMAL(10,5),  -- Deodorant, antiperspirant
  cat_3               DECIMAL(10,5),  -- Eye products
  cat_4               DECIMAL(10,5),  -- Fine fragrance
  cat_5a              DECIMAL(10,5),  -- Body lotion/cream (leave-on)
  cat_5b              DECIMAL(10,5),  -- Face mask
  cat_5c              DECIMAL(10,5),  -- Hand cream
  cat_5d              DECIMAL(10,5),  -- Baby lotion
  cat_6               DECIMAL(10,5),  -- Mouthwash/toothpaste
  cat_7a              DECIMAL(10,5),  -- Rinse-off hair
  cat_7b              DECIMAL(10,5),  -- Leave-on hair
  cat_8a              DECIMAL(10,5),  -- Rinse-off body wash
  cat_8b              DECIMAL(10,5),  -- Intimate wipes
  cat_9               DECIMAL(10,5),  -- Rinse-off face wash
  cat_10a             DECIMAL(10,5),  -- Household (fabric softener)
  cat_10b             DECIMAL(10,5),  -- Household (air freshener)
  cat_11a             DECIMAL(10,5),  -- Candle (burning)
  cat_11b             DECIMAL(10,5),  -- Other home (diffuser)
  restriction_note    TEXT,
  source_document     VARCHAR(255),
  created_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_ifra_limits_amendment ON ifra_limits(amendment_id);
CREATE INDEX idx_ifra_limits_material ON ifra_limits(material_id);
CREATE INDEX idx_ifra_limits_cas ON ifra_limits(cas_number);

-- ============================================================
-- ALLERGEN LIBRARY
-- ============================================================

CREATE TABLE allergen_library (
  allergen_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name                VARCHAR(100) NOT NULL UNIQUE,
  inci_name           VARCHAR(100),
  cas_number          VARCHAR(50),
  iupac_name          TEXT,
  eu_annex_iii        BOOLEAN DEFAULT false,
  eu_extended_list    BOOLEAN DEFAULT false,
  sccs_opinion        VARCHAR(100),
  leave_on_threshold  DECIMAL(8,5) DEFAULT 0.01,   -- % in finished product
  rinse_off_threshold DECIMAL(8,5) DEFAULT 0.10,
  baby_threshold      DECIMAL(8,5) DEFAULT 0.001,
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- SUPPLIERS
-- ============================================================

CREATE TABLE suppliers (
  supplier_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  company_name        VARCHAR(255) NOT NULL,
  trading_name        VARCHAR(255),
  website_url         VARCHAR(500),
  country             VARCHAR(100),
  city                VARCHAR(100),
  address             TEXT,
  primary_contact_name  VARCHAR(255),
  primary_contact_email VARCHAR(255),
  primary_contact_phone VARCHAR(50),
  account_number      VARCHAR(100),
  payment_terms       VARCHAR(100),
  payment_currency    CHAR(3),
  lead_time_days      INTEGER,
  lead_time_express_days INTEGER,
  certifications      TEXT[],
  quality_score       DECIMAL(3,2) DEFAULT 5.00,
  reliability_score   DECIMAL(3,2) DEFAULT 5.00,
  notes               TEXT,
  is_active           BOOLEAN DEFAULT true,
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_suppliers_org_id ON suppliers(org_id);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE supplier_materials (
  sm_id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  supplier_id         UUID NOT NULL REFERENCES suppliers(supplier_id) ON DELETE CASCADE,
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  supplier_sku        VARCHAR(100),
  supplier_name_for_material VARCHAR(255),  -- how supplier calls it
  is_preferred        BOOLEAN DEFAULT false,
  is_active           BOOLEAN DEFAULT true,
  moq_quantity        DECIMAL(10,3),
  moq_unit            VARCHAR(20),
  lead_time_days      INTEGER,
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT now(),
  UNIQUE (supplier_id, material_id)
);

CREATE INDEX idx_supplier_materials_supplier ON supplier_materials(supplier_id);
CREATE INDEX idx_supplier_materials_material ON supplier_materials(material_id);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE supplier_material_prices (
  price_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sm_id               UUID NOT NULL REFERENCES supplier_materials(sm_id) ON DELETE CASCADE,
  price_per_unit      DECIMAL(12,4) NOT NULL,
  unit                VARCHAR(20) NOT NULL,
  price_per_kg        DECIMAL(12,4),         -- normalized to kg for comparison
  currency            CHAR(3) NOT NULL,
  valid_from          DATE NOT NULL,
  valid_to            DATE,                   -- NULL means current
  tier_breaks         JSONB,
  -- e.g. [{"min_qty_kg": 1, "price_per_kg": 50.00}, {"min_qty_kg": 5, "price_per_kg": 45.00}]
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_supplier_prices_sm ON supplier_material_prices(sm_id);
CREATE INDEX idx_supplier_prices_current ON supplier_material_prices(sm_id, valid_from) 
  WHERE valid_to IS NULL;

-- ============================================================
-- FORMULAS & VERSIONING
-- ============================================================

CREATE TABLE formulas (
  formula_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  name                VARCHAR(255) NOT NULL,
  type                VARCHAR(50) NOT NULL CHECK (type IN (
                        'concentrate', 'finished_product', 'accord', 'base', 'raw')),
  ifra_category       VARCHAR(10),   -- e.g. '4', '5a', '11a' — NULL unless finished_product
  target_markets      TEXT[],        -- ['EU', 'US', 'China']
  description         TEXT,
  brief_notes         TEXT,
  current_version_id  UUID,          -- FK to formula_versions (set after first version created)
  is_secret           BOOLEAN DEFAULT false,
  forked_from_formula_id UUID REFERENCES formulas(formula_id),
  forked_from_version VARCHAR(20),
  created_by          UUID NOT NULL REFERENCES users(user_id),
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now(),
  archived_at         TIMESTAMPTZ,
  formula_embedding   vector(1536)   -- pgvector for semantic search
);

CREATE INDEX idx_formulas_org_id ON formulas(org_id);
CREATE INDEX idx_formulas_type ON formulas(type);
CREATE INDEX idx_formulas_created_by ON formulas(created_by);
CREATE INDEX idx_formulas_embedding ON formulas 
  USING ivfflat (formula_embedding vector_cosine_ops) WITH (lists = 100);

-- ──────────────────────────────────────────────────────────────
-- Formula versions: immutable snapshots
-- ──────────────────────────────────────────────────────────────

CREATE TABLE formula_versions (
  version_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  formula_id          UUID NOT NULL REFERENCES formulas(formula_id) ON DELETE CASCADE,
  version_string      VARCHAR(20) NOT NULL,  -- "1.0", "1.3", "2.0"
  major               SMALLINT NOT NULL,
  minor               SMALLINT NOT NULL,
  status              VARCHAR(30) NOT NULL DEFAULT 'draft' 
                        CHECK (status IN ('draft', 'submitted', 'approved', 'deprecated', 'archived')),
  is_locked           BOOLEAN DEFAULT false,
  lock_reason         TEXT,
  locked_by           UUID REFERENCES users(user_id),
  locked_at           TIMESTAMPTZ,
  change_summary      TEXT,           -- human-readable description of changes
  batch_weight_g      DECIMAL(12,4) DEFAULT 100,   -- default batch size for this version
  batch_unit          VARCHAR(10) DEFAULT 'g',
  total_cost_per_kg   DECIMAL(12,4),  -- cached computed value
  compliance_snapshot JSONB,          -- cached compliance check result
  compliance_checked_at TIMESTAMPTZ,
  created_by          UUID NOT NULL REFERENCES users(user_id),
  created_at          TIMESTAMPTZ DEFAULT now(),
  UNIQUE (formula_id, major, minor)
);

CREATE INDEX idx_formula_versions_formula ON formula_versions(formula_id);
CREATE INDEX idx_formula_versions_status ON formula_versions(status);

-- ──────────────────────────────────────────────────────────────
-- Formula ingredients (belong to a specific version)
-- ──────────────────────────────────────────────────────────────

CREATE TABLE formula_ingredients (
  ingredient_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  version_id          UUID NOT NULL REFERENCES formula_versions(version_id) ON DELETE CASCADE,
  material_id         UUID REFERENCES raw_materials(material_id),
  accord_version_id   UUID REFERENCES formula_versions(version_id),  -- if ingredient is an accord
  -- Exactly one of material_id or accord_version_id must be non-NULL
  raw_percent         DECIMAL(10,6) NOT NULL,  -- % in the concentrate
  dilution_percent    DECIMAL(7,4) DEFAULT 100.00,  -- if material is pre-diluted
  active_percent      DECIMAL(10,6) GENERATED ALWAYS AS 
                        (raw_percent * dilution_percent / 100) STORED,
  sort_order          SMALLINT DEFAULT 0,
  odor_segment        VARCHAR(20) CHECK (odor_segment IN ('top', 'heart', 'base', 'unassigned')),
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT now(),
  CONSTRAINT chk_ingredient_source CHECK (
    (material_id IS NOT NULL AND accord_version_id IS NULL) OR
    (material_id IS NULL AND accord_version_id IS NOT NULL)
  )
);

CREATE INDEX idx_formula_ingredients_version ON formula_ingredients(version_id);
CREATE INDEX idx_formula_ingredients_material ON formula_ingredients(material_id);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE formula_evaluations (
  evaluation_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  version_id          UUID NOT NULL REFERENCES formula_versions(version_id),
  evaluator_id        UUID NOT NULL REFERENCES users(user_id),
  evaluated_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  hours_after_application DECIMAL(5,1),
  strip_type          VARCHAR(30) CHECK (strip_type IN ('mouillette', 'skin', 'cold_strip', 'warm_strip', 'blotter')),
  overall_rating      SMALLINT CHECK (overall_rating BETWEEN 1 AND 10),
  longevity_rating    SMALLINT CHECK (longevity_rating BETWEEN 1 AND 10),
  sillage_rating      SMALLINT CHECK (sillage_rating BETWEEN 1 AND 10),
  balance_rating      SMALLINT CHECK (balance_rating BETWEEN 1 AND 10),
  notes               TEXT NOT NULL,
  descriptor_tags     TEXT[],
  is_private          BOOLEAN DEFAULT false
);

CREATE INDEX idx_evaluations_version ON formula_evaluations(version_id);
CREATE INDEX idx_evaluations_evaluator ON formula_evaluations(evaluator_id);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE formula_tags (
  formula_id          UUID NOT NULL REFERENCES formulas(formula_id) ON DELETE CASCADE,
  tag_id              UUID NOT NULL REFERENCES tags(tag_id) ON DELETE CASCADE,
  PRIMARY KEY (formula_id, tag_id)
);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE formula_permissions (
  permission_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  formula_id          UUID NOT NULL REFERENCES formulas(formula_id) ON DELETE CASCADE,
  user_id             UUID REFERENCES users(user_id),
  role_id             VARCHAR(50),            -- for org-role-based permissions
  permission_level    VARCHAR(20) NOT NULL CHECK (
                        permission_level IN ('owner', 'editor', 'viewer', 'no_access')),
  granted_by          UUID REFERENCES users(user_id),
  granted_at          TIMESTAMPTZ DEFAULT now(),
  UNIQUE (formula_id, user_id)
);

-- ============================================================
-- INVENTORY
-- ============================================================

CREATE TABLE inventory_lots (
  lot_id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  lot_number          VARCHAR(100) NOT NULL,
  internal_lot_ref    VARCHAR(100),
  supplier_id         UUID REFERENCES suppliers(supplier_id),
  purchase_order_id   UUID,                   -- FK set after PO table created
  received_date       DATE NOT NULL,
  expiry_date         DATE,
  manufacture_date    DATE,
  initial_quantity    DECIMAL(12,4) NOT NULL,
  current_quantity    DECIMAL(12,4) NOT NULL CHECK (current_quantity >= 0),
  unit                VARCHAR(20) NOT NULL,
  location            VARCHAR(100),
  storage_conditions  VARCHAR(100),
  cost_per_unit       DECIMAL(12,4),          -- actual cost paid for this lot
  coa_document_id     UUID,
  status              VARCHAR(30) DEFAULT 'active' 
                        CHECK (status IN ('active', 'quarantine', 'disposed', 'consumed', 'returned')),
  notes               TEXT,
  created_by          UUID REFERENCES users(user_id),
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_inventory_lots_org ON inventory_lots(org_id);
CREATE INDEX idx_inventory_lots_material ON inventory_lots(material_id);
CREATE INDEX idx_inventory_lots_status ON inventory_lots(status);
CREATE INDEX idx_inventory_lots_expiry ON inventory_lots(expiry_date) WHERE expiry_date IS NOT NULL;

-- ──────────────────────────────────────────────────────────────

CREATE TABLE inventory_transactions (
  transaction_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id),
  lot_id              UUID NOT NULL REFERENCES inventory_lots(lot_id),
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  transaction_type    VARCHAR(30) NOT NULL CHECK (transaction_type IN (
                        'intake', 'deduction', 'adjustment', 'waste', 'transfer', 
                        'return', 'sample_out', 'expired_disposal')),
  quantity_delta      DECIMAL(12,4) NOT NULL,
  unit                VARCHAR(20) NOT NULL,
  quantity_after      DECIMAL(12,4) NOT NULL,
  reference_type      VARCHAR(50),   -- batch_production, formula_test, manual, purchase_order
  reference_id        UUID,
  performed_by        UUID REFERENCES users(user_id),
  transaction_date    TIMESTAMPTZ NOT NULL DEFAULT now(),
  notes               TEXT
);

CREATE INDEX idx_inv_transactions_org ON inventory_transactions(org_id);
CREATE INDEX idx_inv_transactions_lot ON inventory_transactions(lot_id);
CREATE INDEX idx_inv_transactions_material ON inventory_transactions(material_id);
CREATE INDEX idx_inv_transactions_date ON inventory_transactions(transaction_date DESC);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE material_reorder_settings (
  setting_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  reorder_point_qty   DECIMAL(12,4) NOT NULL,
  reorder_point_unit  VARCHAR(20) NOT NULL,
  reorder_quantity    DECIMAL(12,4),
  reorder_unit        VARCHAR(20),
  preferred_supplier_id UUID REFERENCES suppliers(supplier_id),
  lead_time_buffer_days INTEGER DEFAULT 7,
  is_active           BOOLEAN DEFAULT true,
  UNIQUE (org_id, material_id)
);

-- ============================================================
-- BATCHES (Production Records)
-- ============================================================

CREATE TABLE batches (
  batch_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  formula_id          UUID NOT NULL REFERENCES formulas(formula_id),
  version_id          UUID NOT NULL REFERENCES formula_versions(version_id),
  batch_number        VARCHAR(100) NOT NULL,
  status              VARCHAR(30) DEFAULT 'planned' 
                        CHECK (status IN ('planned', 'in_progress', 'completed', 'failed', 'quarantine')),
  target_quantity     DECIMAL(12,4) NOT NULL,
  actual_quantity     DECIMAL(12,4),
  unit                VARCHAR(20) NOT NULL,
  planned_date        DATE,
  started_at          TIMESTAMPTZ,
  completed_at        TIMESTAMPTZ,
  batch_notes         TEXT,
  qc_passed           BOOLEAN,
  qc_notes            TEXT,
  produced_by         UUID REFERENCES users(user_id),
  approved_by         UUID REFERENCES users(user_id),
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_batches_org ON batches(org_id);
CREATE INDEX idx_batches_formula ON batches(formula_id);
CREATE INDEX idx_batches_version ON batches(version_id);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE batch_ingredients (
  batch_ingredient_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  batch_id            UUID NOT NULL REFERENCES batches(batch_id) ON DELETE CASCADE,
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  lot_id              UUID REFERENCES inventory_lots(lot_id),
  formula_ingredient_id UUID REFERENCES formula_ingredients(ingredient_id),
  planned_quantity    DECIMAL(12,4) NOT NULL,
  actual_quantity     DECIMAL(12,4),
  unit                VARCHAR(20) NOT NULL,
  notes               TEXT
);

CREATE INDEX idx_batch_ingredients_batch ON batch_ingredients(batch_id);
CREATE INDEX idx_batch_ingredients_lot ON batch_ingredients(lot_id);

-- ============================================================
-- PURCHASE ORDERS
-- ============================================================

CREATE TABLE purchase_orders (
  po_id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  supplier_id         UUID NOT NULL REFERENCES suppliers(supplier_id),
  po_number           VARCHAR(100) NOT NULL,
  status              VARCHAR(30) DEFAULT 'draft' 
                        CHECK (status IN ('draft', 'submitted', 'confirmed', 'partial', 'received', 'cancelled')),
  currency            CHAR(3) NOT NULL,
  total_amount        DECIMAL(14,4),
  ordered_date        DATE,
  expected_date       DATE,
  received_date       DATE,
  shipping_method     VARCHAR(100),
  tracking_number     VARCHAR(100),
  notes               TEXT,
  created_by          UUID REFERENCES users(user_id),
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_po_org ON purchase_orders(org_id);
CREATE INDEX idx_po_supplier ON purchase_orders(supplier_id);

-- ──────────────────────────────────────────────────────────────

CREATE TABLE purchase_order_items (
  poi_id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  po_id               UUID NOT NULL REFERENCES purchase_orders(po_id) ON DELETE CASCADE,
  material_id         UUID NOT NULL REFERENCES raw_materials(material_id),
  supplier_sku        VARCHAR(100),
  quantity_ordered    DECIMAL(12,4) NOT NULL,
  unit                VARCHAR(20) NOT NULL,
  unit_price          DECIMAL(12,4) NOT NULL,
  currency            CHAR(3) NOT NULL,
  line_total          DECIMAL(14,4) GENERATED ALWAYS AS (quantity_ordered * unit_price) STORED,
  quantity_received   DECIMAL(12,4) DEFAULT 0,
  notes               TEXT
);

CREATE INDEX idx_poi_po ON purchase_order_items(po_id);
CREATE INDEX idx_poi_material ON purchase_order_items(material_id);

-- Add FK back to purchase_orders from inventory_lots
ALTER TABLE inventory_lots 
  ADD CONSTRAINT fk_inventory_lots_po 
  FOREIGN KEY (purchase_order_id) REFERENCES purchase_orders(po_id);

-- ============================================================
-- REGULATORY DOCUMENTS
-- ============================================================

CREATE TABLE regulatory_documents (
  document_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  material_id         UUID REFERENCES raw_materials(material_id),
  formula_id          UUID REFERENCES formulas(formula_id),
  supplier_id         UUID REFERENCES suppliers(supplier_id),
  document_type       VARCHAR(50) NOT NULL CHECK (document_type IN (
                        'SDS', 'CoA', 'IFRA_certificate', 'spec_sheet', 
                        'allergen_declaration', 'stability_report', 
                        'toxicology_report', 'reach_registration', 'other')),
  document_name       VARCHAR(255) NOT NULL,
  file_url            VARCHAR(1000) NOT NULL,
  file_key            VARCHAR(500),   -- R2/S3 object key
  file_size_bytes     INTEGER,
  mime_type           VARCHAR(100),
  issued_date         DATE,
  expiry_date         DATE,
  version             VARCHAR(50),
  is_current          BOOLEAN DEFAULT true,
  uploaded_by         UUID REFERENCES users(user_id),
  uploaded_at         TIMESTAMPTZ DEFAULT now(),
  notes               TEXT
);

CREATE INDEX idx_reg_docs_org ON regulatory_documents(org_id);
CREATE INDEX idx_reg_docs_material ON regulatory_documents(material_id);
CREATE INDEX idx_reg_docs_formula ON regulatory_documents(formula_id);
CREATE INDEX idx_reg_docs_type ON regulatory_documents(document_type);

-- ============================================================
-- AUDIT LOG
-- ============================================================

CREATE TABLE audit_log (
  log_id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id              UUID NOT NULL REFERENCES organizations(org_id),
  user_id             UUID REFERENCES users(user_id),
  action              VARCHAR(100) NOT NULL,   -- create, update, delete, view, export, login
  resource_type       VARCHAR(50) NOT NULL,    -- formula, material, inventory_lot, batch, etc.
  resource_id         UUID,
  old_values          JSONB,
  new_values          JSONB,
  ip_address          INET,
  user_agent          TEXT,
  created_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_audit_log_org ON audit_log(org_id);
CREATE INDEX idx_audit_log_resource ON audit_log(resource_type, resource_id);
CREATE INDEX idx_audit_log_user ON audit_log(user_id);
CREATE INDEX idx_audit_log_created ON audit_log(created_at DESC);

-- Partition audit_log by month for performance at scale
-- (implement as range partition on created_at in production)
```

---

# SECTION 6: TECHNICAL ARCHITECTURE

## Recommended Stack

### Frontend
```
Framework:        Next.js 14 (App Router, React Server Components)
Language:         TypeScript 5.x (strict mode)
Styling:          Tailwind CSS 3.x
Components:       shadcn/ui (Radix UI primitives, fully customized)
State:            Zustand (client state), TanStack Query v5 (server state)
Tables:           TanStack Table v8
Forms:            React Hook Form + Zod validation
Charts:           Recharts (cost curves, radar charts for odor profiles)
DnD:              @dnd-kit/core (ingredient reordering)
Virtualization:   TanStack Virtual (large ingredient lists, material search)
Icons:            Lucide React
Date/Time:        date-fns
PDF Generation:   @react-pdf/renderer (client-side PDF export)
```

### Backend
```
Runtime:          Node.js 20 LTS
Framework:        Hono (lightweight, edge-compatible, faster than Fastify for API routes)
Language:         TypeScript 5.x
ORM:              Drizzle ORM (type-safe, fast, SQL-first)
Validation:       Zod (shared with frontend via monorepo)
API Docs:         @hono/zod-openapi + Scalar (OpenAPI 3.1 docs)
Background Jobs:  BullMQ + Redis
File Processing:  Sharp (image processing for CoA thumbnails)
Email:            Resend
PDF Generation:   Puppeteer (server-side for complex layouts)
```

### Database & Storage
```
Primary DB:       PostgreSQL 16 (Supabase or Neon for hosted)
Vector Search:    pgvector extension (embeddings, semantic search)
Cache/Sessions:   Redis 7 (Upstash for serverless-compatible managed Redis)
Search:           Typesense (self-hosted on Railway, or Typesense Cloud)
File Storage:     Cloudflare R2 (S3-compatible, no egress fees)
```

### Auth
```
Provider:         Clerk (multi-tenant org support, SAML/SSO for Enterprise tier)
Strategy:         JWT tokens, org_id claim on every request
Session:          Clerk handles, synced to users table via webhook
```

### AI
```
LLM:              Anthropic Claude claude-sonnet-4-6 (via Anthropic API)
Embeddings:       OpenAI text-embedding-3-small (1536 dims) or Voyage AI
Vector Store:     pgvector (on primary Postgres)
AI Framework:     Anthropic SDK (TypeScript), no LangChain dependency
```

### Infrastructure
```
Frontend:         Vercel (Edge Network, ISR for material database pages)
Backend API:      Railway (autoscale containers, managed deploys)
Database:         Neon (serverless Postgres, branching for dev/staging)
Redis:            Upstash (per-request billing, edge-compatible)
Search:           Typesense Cloud or self-hosted on Railway
CDN/R2:           Cloudflare (R2 + CDN for document/file serving)
```

### Monitoring & Analytics
```
Error tracking:   Sentry (frontend + backend)
Analytics:        PostHog (product analytics, feature flags, session recording)
APM:              Vercel Analytics (frontend), Railway metrics (backend)
Uptime:           Better Uptime (status page + alerts)
Logging:          Axiom or Logtail (structured logs from backend)
```

---

## Monorepo Structure

```
yevfumes/
├── apps/
│   ├── web/                    # Next.js 14 frontend
│   │   ├── app/                # App Router pages
│   │   │   ├── (auth)/         # Login, signup
│   │   │   ├── (dashboard)/    # Protected routes
│   │   │   │   ├── page.tsx    # Home dashboard
│   │   │   │   ├── formulas/
│   │   │   │   ├── materials/
│   │   │   │   ├── inventory/
│   │   │   │   ├── suppliers/
│   │   │   │   └── ...
│   │   ├── components/         # UI components
│   │   └── lib/                # Client utilities
│   │
│   └── api/                    # Hono backend
│       ├── src/
│       │   ├── routes/         # Route handlers
│       │   ├── services/       # Business logic
│       │   ├── jobs/           # BullMQ job handlers
│       │   └── middleware/     # Auth, rate limiting, logging
│       └── Dockerfile
│
├── packages/
│   ├── db/                     # Drizzle schema + migrations
│   │   ├── schema/             # Table definitions
│   │   ├── migrations/         # SQL migrations
│   │   └── index.ts            # DB client export
│   │
│   ├── types/                  # Shared TypeScript types
│   ├── validators/             # Shared Zod schemas
│   ├── formula-engine/         # Pure calculation functions
│   │   ├── scale.ts
│   │   ├── cost.ts
│   │   ├── ifra.ts
│   │   ├── allergens.ts
│   │   └── dilution.ts
│   │
│   └── ui/                     # shadcn/ui component library (customized)
│
├── turbo.json                  # Turborepo config
├── pnpm-workspace.yaml
└── package.json
```

---

## API Architecture

### Design Principles
- REST API with consistent resource naming
- OpenAPI 3.1 spec (auto-generated from Zod schemas via @hono/zod-openapi)
- All responses: `{ data: T, meta?: Meta, error?: ApiError }`
- Pagination: cursor-based (not offset) for large collections
- Versioning: URL prefix `/api/v1/...`
- Auth: Bearer JWT (from Clerk) on all protected routes
- Rate limiting: per-org, per-endpoint (Redis token bucket)

### Authentication Middleware

```typescript
// Every request to /api/v1/* passes through:
app.use('/api/v1/*', async (c, next) => {
  const auth = getAuth(c)  // Clerk auth
  if (!auth?.userId) return c.json({ error: 'Unauthorized' }, 401)
  
  const user = await db.query.users.findFirst({
    where: eq(users.authProviderId, auth.userId)
  })
  if (!user) return c.json({ error: 'User not found' }, 404)
  
  c.set('user', user)
  c.set('orgId', user.orgId)
  await next()
})
```

### Key API Endpoints

```
# Formulas
GET    /api/v1/formulas                     # List formulas (paginated, filtered)
POST   /api/v1/formulas                     # Create formula
GET    /api/v1/formulas/:id                 # Get formula with current version
PATCH  /api/v1/formulas/:id                 # Update formula metadata
DELETE /api/v1/formulas/:id                 # Soft-delete formula

GET    /api/v1/formulas/:id/versions        # List all versions
POST   /api/v1/formulas/:id/versions        # Save new version (creates minor or major bump)
GET    /api/v1/formulas/:id/versions/:ver   # Get specific version with ingredients
POST   /api/v1/formulas/:id/versions/:ver/lock    # Lock a version
POST   /api/v1/formulas/:id/clone           # Clone formula
POST   /api/v1/formulas/:id/fork            # Fork formula

# Formula Operations
POST   /api/v1/formulas/:id/versions/:ver/scale       # Scale calculation
POST   /api/v1/formulas/:id/versions/:ver/compliance  # IFRA + allergen check
POST   /api/v1/formulas/:id/versions/:ver/cost        # Cost calculation
POST   /api/v1/formulas/:id/versions/:ver/export      # Export (PDF/Excel)
GET    /api/v1/formulas/:id/versions/:ver/diff?compare_to=1.0  # Diff

# Evaluations
POST   /api/v1/formulas/:id/versions/:ver/evaluations
GET    /api/v1/formulas/:id/versions/:ver/evaluations

# Materials
GET    /api/v1/materials                    # List/search materials
POST   /api/v1/materials                    # Create material
GET    /api/v1/materials/:id                # Get material detail
PATCH  /api/v1/materials/:id                # Update material
GET    /api/v1/materials/:id/suppliers      # Get suppliers for material
GET    /api/v1/materials/:id/stock          # Get stock summary
GET    /api/v1/materials/:id/ifra           # Get IFRA limits for material
GET    /api/v1/materials/:id/allergens      # Get allergen data

# Inventory
GET    /api/v1/inventory/lots               # List lots
POST   /api/v1/inventory/lots               # Create lot (intake)
GET    /api/v1/inventory/lots/:id
PATCH  /api/v1/inventory/lots/:id
POST   /api/v1/inventory/lots/:id/deduct    # Manual deduction
GET    /api/v1/inventory/alerts             # Low stock + expiry alerts
POST   /api/v1/inventory/simulate           # Formula consumption simulation

# Suppliers
GET    /api/v1/suppliers
POST   /api/v1/suppliers
GET    /api/v1/suppliers/:id
PATCH  /api/v1/suppliers/:id
GET    /api/v1/suppliers/:id/materials      # Materials from this supplier
GET    /api/v1/suppliers/:id/orders

# Purchase Orders
GET    /api/v1/purchase-orders
POST   /api/v1/purchase-orders
GET    /api/v1/purchase-orders/:id
PATCH  /api/v1/purchase-orders/:id
POST   /api/v1/purchase-orders/generate     # Generate from formula requirements
POST   /api/v1/purchase-orders/:id/receive  # Mark as received + create inventory lots

# Compliance
POST   /api/v1/compliance/ifra-check        # Ad-hoc IFRA check
POST   /api/v1/compliance/allergen-calc     # Allergen calculation
GET    /api/v1/compliance/ifra-limits/:cas  # Get IFRA limits by CAS number
GET    /api/v1/compliance/dashboard         # Org-wide compliance status

# AI (Phase 1+)
POST   /api/v1/ai/search                    # Semantic material/formula search
POST   /api/v1/ai/suggest-substitutes       # Material substitution suggestions
POST   /api/v1/ai/predict-profile           # Scent profile prediction (Phase 2)
```

### Webhook System

```typescript
// Outbound webhooks for integrations
interface WebhookEvent {
  event_type: WebhookEventType
  org_id: string
  payload: Record<string, unknown>
  timestamp: string
  signature: string  // HMAC-SHA256
}

type WebhookEventType = 
  | 'formula.version.saved'
  | 'formula.approved'
  | 'inventory.low_stock'
  | 'inventory.lot_received'
  | 'compliance.violation_detected'
  | 'purchase_order.created'
  | 'purchase_order.received'
  | 'batch.completed'
```

---

## Multi-Tenancy Approach

### Row-Level Security (RLS) Strategy

All tables with `org_id` use PostgreSQL Row Level Security:

```sql
-- Enable RLS on all tenant tables
ALTER TABLE formulas ENABLE ROW LEVEL SECURITY;
ALTER TABLE raw_materials ENABLE ROW LEVEL SECURITY;
-- ... (all org-scoped tables)

-- RLS Policy: users can only see their org's data
CREATE POLICY "org_isolation" ON formulas
  FOR ALL
  USING (org_id = current_setting('app.current_org_id')::uuid);

-- Backend sets org context on each connection:
-- SET app.current_org_id = 'org-uuid-here'
```

**Implementation in Drizzle:**
```typescript
// Middleware sets org context on every query
export async function withOrgContext<T>(
  orgId: string, 
  fn: (db: typeof database) => Promise<T>
): Promise<T> {
  return database.transaction(async (tx) => {
    await tx.execute(sql`SET LOCAL app.current_org_id = ${orgId}`)
    return fn(tx)
  })
}
```

### Global vs. Org-Scoped Materials

- Materials with `org_id = NULL` are global (YEVFUMES shared catalog)
- RLS policy for materials allows reading global records:
  ```sql
  CREATE POLICY "materials_access" ON raw_materials
    FOR SELECT
    USING (org_id IS NULL OR org_id = current_setting('app.current_org_id')::uuid);
  ```
- Orgs can create custom materials (`org_id = their_org_id`)
- Orgs can "adopt" a global material (links supplier + custom notes without copying)

---

## Formula Calculation Engine

The calculation engine is a pure TypeScript module in `packages/formula-engine/`. Zero side effects. All functions are pure — they take input, return output, never touch the database.

### Core Types

```typescript
// packages/formula-engine/types.ts

export interface FormulaIngredient {
  ingredient_id: string
  material_id: string | null
  accord_id: string | null
  raw_percent: number          // % in concentrate
  dilution_percent: number     // default 100 (neat)
  active_percent: number       // computed: raw_percent * dilution_percent / 100
  cost_per_kg_active: number   // cost per kg of active material
  ifra_limits: IFRALimits | null
  allergens: AllergenContribution[]
  odor_segment: 'top' | 'heart' | 'base' | 'unassigned'
}

export interface ScaleInput {
  ingredients: FormulaIngredient[]
  target_weight_g: number
  unit: 'g' | 'kg' | 'oz' | 'lb'
}

export interface ScaleResult {
  ingredients: Array<FormulaIngredient & {
    quantity: number
    quantity_unit: string
    line_cost: number
  }>
  total_weight: number
  total_cost: number
  cost_per_kg: number
}

export interface IFRACheckInput {
  ingredients: FormulaIngredient[]
  concentrate_percent: number   // % of concentrate in finished product (e.g. 20 for EDP)
  ifra_category: string         // '4', '5a', '11b', etc.
  amendment: IFRAAmendment
}

export interface IFRACheckResult {
  overall_status: 'ok' | 'warning' | 'violation'
  ingredient_results: Array<{
    material_id: string
    material_name: string
    active_percent_in_product: number
    ifra_limit: number | null
    status: 'ok' | 'warning' | 'violation' | 'prohibited' | 'no_limit'
    overage_factor: number | null
  }>
}

export interface CostInput {
  formula_ingredients: FormulaIngredient[]
  // For finished product
  concentrate_percent?: number
  volume_ml?: number
  alcohol_cost_per_kg?: number
  packaging?: PackagingCosts
  overhead_per_unit?: number
}

export interface CostResult {
  cost_per_kg_concentrate: number
  // If finished product inputs provided:
  concentrate_g_per_bottle?: number
  alcohol_g_per_bottle?: number
  material_cost_per_bottle?: number
  packaging_cost_per_bottle?: number
  total_cogs_per_bottle?: number
  ingredient_breakdown: Array<{
    material_id: string
    active_percent: number
    cost_per_kg: number
    cost_contribution_per_kg_formula: number
    percentage_of_formula_cost: number
  }>
}
```

### Scale Function

```typescript
// packages/formula-engine/scale.ts
export function scaleFormula(input: ScaleInput): ScaleResult {
  const total_weight_g = convertToGrams(input.target_weight_g, input.unit)
  
  const scaled = input.ingredients.map(ing => {
    const quantity_g = (ing.raw_percent / 100) * total_weight_g
    const quantity = convertFromGrams(quantity_g, input.unit)
    const line_cost = (quantity_g / 1000) * ing.cost_per_kg_active
    
    return { ...ing, quantity, quantity_unit: input.unit, line_cost }
  })
  
  const total_cost = scaled.reduce((sum, ing) => sum + ing.line_cost, 0)
  const cost_per_kg = (total_cost / total_weight_g) * 1000
  
  return {
    ingredients: scaled,
    total_weight: input.target_weight_g,
    total_cost,
    cost_per_kg
  }
}
```

### IFRA Check Function

```typescript
// packages/formula-engine/ifra.ts
export function checkIFRA(input: IFRACheckInput): IFRACheckResult {
  const results = input.ingredients.flatMap(ing => {
    // Resolve accord ingredients recursively (max depth 3)
    return resolveIngredients(ing, input.amendment)
  })
  
  const ingredient_results = results.map(resolved => {
    const active_pct_in_product = 
      (resolved.active_percent / 100) * (input.concentrate_percent / 100) * 100
    
    const limit = getLimitForCategory(resolved.ifra_limits, input.ifra_category)
    
    if (resolved.ifra_limits?.prohibited) {
      return { ...resolved, status: 'prohibited', active_percent_in_product: active_pct_in_product, ifra_limit: 0, overage_factor: null }
    }
    if (limit === null) {
      return { ...resolved, status: 'no_limit', active_percent_in_product: active_pct_in_product, ifra_limit: null, overage_factor: null }
    }
    
    const overage_factor = active_pct_in_product / limit
    const status = 
      overage_factor > 1 ? 'violation' :
      overage_factor > 0.9 ? 'warning' : 'ok'
    
    return { ...resolved, status, active_percent_in_product: active_pct_in_product, ifra_limit: limit, overage_factor }
  })
  
  const overall_status = 
    ingredient_results.some(r => r.status === 'violation' || r.status === 'prohibited') ? 'violation' :
    ingredient_results.some(r => r.status === 'warning') ? 'warning' : 'ok'
  
  return { overall_status, ingredient_results }
}
```

### Allergen Calculation Function

```typescript
// packages/formula-engine/allergens.ts
export function calculateAllergens(
  ingredients: FormulaIngredient[],
  concentrate_percent: number,
  product_type: 'leave_on' | 'rinse_off',
  allergen_library: AllergenDefinition[]
): AllergenResult[] {
  const totals = new Map<string, number>()
  
  for (const ing of ingredients) {
    const pct_in_product = (ing.active_percent / 100) * (concentrate_percent / 100)
    
    for (const allergen of ing.allergens) {
      const allergen_pct_in_product = pct_in_product * (allergen.percentage / 100)
      totals.set(
        allergen.name, 
        (totals.get(allergen.name) ?? 0) + allergen_pct_in_product
      )
    }
  }
  
  return allergen_library
    .filter(a => totals.has(a.name))
    .map(a => {
      const total_pct = (totals.get(a.name) ?? 0) * 100
      const threshold = product_type === 'leave_on' ? a.leave_on_threshold : a.rinse_off_threshold
      return {
        allergen: a.name,
        total_percent: total_pct,
        threshold,
        must_declare: total_pct > threshold,
        eu_annex_iii: a.eu_annex_iii
      }
    })
    .sort((a, b) => b.total_percent - a.total_percent)
}
```

---

## Scalability

### Caching Strategy

```
Redis cache keys and TTLs:

user_session:{clerk_user_id}           → 15 min (session data)
org:{org_id}:settings                  → 60 min (org config)
material:{material_id}                 → 30 min (material detail)
material:{material_id}:ifra            → 24 hr (IFRA limits — rarely change)
material:{material_id}:allergens       → 24 hr (allergen data — rarely change)
ifra:amendment:current                 → 24 hr (current amendment version)
org:{org_id}:inventory:summary         → 15 min (stock levels summary)
org:{org_id}:compliance:dashboard      → 30 min (compliance overview stats)
formula:{formula_id}:version:{ver}:cost → 60 min (cost calc — invalidate on price change)
search:materials:{query_hash}          → 5 min (search results)
```

Cache invalidation triggers:
- Material updated → invalidate `material:{id}`, `material:{id}:ifra`, `material:{id}:allergens`
- Inventory transaction → invalidate `org:{id}:inventory:summary`
- Supplier price updated → invalidate `formula:*:cost` for all formulas using that material

### Database Indexing Strategy

Key composite indexes beyond those in the schema:

```sql
-- Formula list view: sorted by updated_at, filtered by org
CREATE INDEX idx_formulas_org_updated ON formulas(org_id, updated_at DESC) 
  WHERE archived_at IS NULL;

-- Inventory stock check: sum quantities by material
CREATE INDEX idx_lots_material_active ON inventory_lots(org_id, material_id, current_quantity)
  WHERE status = 'active';

-- Compliance check: find IFRA limits for a set of CAS numbers quickly
CREATE INDEX idx_ifra_limits_amendment_cas ON ifra_limits(amendment_id, cas_number)
  WHERE cas_number IS NOT NULL;

-- Formula ingredients: quick lookup of all formulas using a material
CREATE INDEX idx_fi_material_version ON formula_ingredients(material_id, version_id);
```

### Search Indexing Pipeline

Typesense collection for materials:
```json
{
  "name": "materials",
  "fields": [
    {"name": "name", "type": "string", "weight": 10},
    {"name": "inci_name", "type": "string", "weight": 5},
    {"name": "cas_number", "type": "string"},
    {"name": "type", "type": "string", "facet": true},
    {"name": "primary_family", "type": "string", "facet": true},
    {"name": "descriptors", "type": "string[]", "facet": true},
    {"name": "in_stock", "type": "bool", "facet": true},
    {"name": "is_restricted", "type": "bool", "facet": true},
    {"name": "is_prohibited", "type": "bool", "facet": true},
    {"name": "price_per_kg", "type": "float", "facet": true}
  ],
  "default_sorting_field": "name"
}
```

Sync pipeline:
1. On material create/update → push to Typesense via BullMQ job (async, < 500ms delay)
2. Full re-index: nightly job syncs all materials to Typesense (handles missed events)
3. Org-specific filtering: Typesense query always includes `filter_by: "org_id:=<id> || is_global:=true"`

---

# SECTION 7: ADVANCED FEATURES BRAINSTORM

| Feature | Description | User Value | Complexity | Phase |
|---------|-------------|------------|------------|-------|
| **Lab Mode** | Minimalist full-screen interface: just ingredient list, percentages, and batch weight. Hides nav, costs, compliance badges. Keyboard-only optimized. | Reduces cognitive load during bench work; perfumers want focus, not dashboards | Low | v2.0 |
| **Barcode / QR Scanning** | Scan material barcodes (GS1, QR) during inventory intake using device camera. Auto-fills material lookup. Print QR labels for internal lots. | Cuts intake time per material from 2 min to 30 sec; eliminates data entry errors | Med | v2.0 |
| **Formula Access Controls** | Per-formula permissions (read/edit/clone/export) per user or per role. "Secret formula" flag — only named users can view. | IP protection for proprietary formulas; controlled sharing with clients | Low | v2.0 |
| **Team Collaboration** | @mention users in evaluation notes and formula comments. Change notifications via email/in-app. "Who's working on this" presence indicator. | Reduces back-and-forth in async fragrance house environments | Med | v2.0 |
| **Approval Workflows** | Configurable review chain: perfumer submits → regulatory reviews → lab manager approves → formula marked "production-ready". Each step timestamped and logged. | Enforces QA process; creates audit trail for ISO/GMP compliance | Med | v2.1 |
| **ERP Integrations** | Bidirectional sync with SAP and NetSuite: push purchase orders, receive inventory updates, sync material master data. Via REST API connectors. | Eliminates double-entry for companies already using ERP; fits into existing workflows | High | v3.0 |
| **Shopify Integration** | Link formulas to Shopify product variants. When a formula changes, flag linked products. Sync inventory levels. Optionally show formula version on product page (for transparency brands). | Useful for DTC brands; reduces mismatch between what they make and what they sell | Med | v2.1 |
| **Sample Tracking** | Record which samples were sent to whom, when, and in what format (EDP 50mL, 2mL vial, etc.). Log evaluations returned by each recipient. Track sample lifecycle. | Closes the feedback loop on samples sent to clients and evaluators | Med | v2.1 |
| **Customer Testing Database** | Structured panel testing records: evaluator profiles, scoring rubrics, blind vs. identified tests, aggregate scoring with statistics. | Used by fragrance houses doing consumer research; brings rigor to informal evaluation processes | High | v3.0 |
| **Olfactory Wheel Visualization** | Interactive SVG/Canvas fragrance wheel (based on Michael Edwards Fragrance Wheel). Drag-drop to assign formula family. Click sectors to browse materials. Visualize formula's scent "fingerprint" as a radar polygon. | Spatial navigation for perfumers who think in olfactory families; better than tags alone | Med | v2.0 |
| **GC/MS Import** | Parse chromatography report files (CSV from common instruments: Agilent, Shimadzu). Map detected compounds to material database. Highlight undeclared allergens found by GC/MS vs. declared in formula. | Critical for QC; lets labs verify raw material authenticity and formula compliance | High | v3.0 |
| **Batch Production Tracking** | Full batch record: weigh-out with planned vs. actual quantities, lot number assignments, in-process checks, QC pass/fail, batch disposition. Printable batch record PDF. | GMP compliance; full lot traceability for regulatory audits | Med | v2.0 |
| **Stability Testing Module** | Track formula samples stored under defined conditions (25°C/60%RH, 40°C/75%RH, refrigerated). Log observations at defined time points (1M, 3M, 6M, 12M). Flag formulas passing/failing stability. | Needed for product development sign-off; replaces paper-based stability logs | Med | v3.0 |
| **White-Label / OEM** | Allow fragrance houses to offer YEVFUMES as their own branded platform to clients. Custom subdomain, logo, and color scheme. Separate data tenant per end-client. | New revenue stream; differentiator for fragrance houses offering value-added services | High | v3.0+ |
| **Mobile Barcode-Based Lab Mode** | Mobile PWA optimized for bench: scan formula QR code → shows scaled ingredient list → check off each ingredient as weighed → logs batch. | Replaces printed batch sheets; real-time logging from lab bench | Med | v2.0 |
| **Cost Alert System** | When supplier prices change, automatically recalculate affected formula costs and alert if a formula's COGS moves by > X% from target. | Proactive margin management; especially important for finished goods with tight margins | Low | v2.0 |
| **Fragrance Pyramid Builder** | Visual drag-and-drop builder for constructing top/heart/base pyramid. Materials positioned by volatility. See pyramid fill as you add ingredients. | Intuitive onboarding for junior perfumers; visual alternative to ingredient table | Low-Med | v2.1 |

---

# SECTION 8: MONETIZATION

## SaaS Tiers

### Tier 1: Starter — $29/month (billed annually: $290/year)
**Target:** Solo indie perfumer, hobbyist turning professional

| Feature | Limit |
|---------|-------|
| Users | 1 |
| Formulas | 100 |
| Formula versions per formula | 20 |
| Materials (custom) | 500 |
| Global material database access | Yes (read-only) |
| IFRA compliance check | Yes (Cat. 4 only) |
| Allergen calculation | Yes (EU 26) |
| Inventory management | Yes |
| Costing engine | Basic (concentrate cost only) |
| Supplier profiles | 5 |
| SDS document storage | 1 GB |
| PDF export | Yes (watermarked) |
| API access | No |
| AI features | No |
| Support | Community / email (48h SLA) |

### Tier 2: Professional — $79/month (billed annually: $790/year)
**Target:** Indie brand, serious independent perfumer

| Feature | Limit |
|---------|-------|
| Users | 3 |
| Formulas | Unlimited |
| Formula versions per formula | Unlimited |
| Materials (custom) | 2,000 |
| Global material database access | Yes (read + suggest edits) |
| IFRA compliance check | All 11 categories + 19 sub-categories |
| Allergen calculation | EU 26 + Extended 82 |
| Accord library | Yes, unlimited |
| Inventory management | Yes, with lot tracking |
| Costing engine | Full (finished product + packaging) |
| Supplier profiles | Unlimited |
| Purchase order generation | Yes |
| SDS document storage | 10 GB |
| PDF export | Yes (unbranded) |
| Formula diff/compare | Yes |
| API access | Read-only, 1,000 req/day |
| AI features | Phase 1 (smart search, substitutions) |
| Support | Email (24h SLA) |

### Tier 3: Studio — $249/month (billed annually: $2,490/year)
**Target:** Small fragrance house, indie lab with a team

| Feature | Limit |
|---------|-------|
| Users | 10 |
| Formulas | Unlimited |
| Materials | Unlimited |
| Global material database | Full read/write contribution |
| IFRA compliance | Full + regional restrictions (EU, US, China, UK, Japan) |
| Allergen calculation | Full |
| Batch production tracking | Yes |
| Approval workflows | Yes (configurable) |
| Team collaboration | Yes (@mentions, comments, notifications) |
| Sample tracking | Yes |
| Costing engine | Full + bulk pricing tiers + overhead |
| Inventory | Full with barcode scanning |
| SDS document storage | 50 GB |
| Export | All formats (PDF, Excel, YEVFUMES, CSV) |
| API access | Full read/write, 10,000 req/day |
| Webhooks | Yes |
| AI features | Phase 1 + Phase 2 (scent prediction, cost optimization) |
| SSO | Optional add-on |
| Support | Priority email + monthly call |

### Tier 4: Enterprise — Custom pricing (starts ~$1,500/month)
**Target:** Large fragrance house, CMO, multi-brand group

| Feature | Limit |
|---------|-------|
| Users | Unlimited |
| Organizations | Multi-org / multi-brand support |
| All Studio features | Yes |
| White-glove onboarding | Yes (dedicated implementation manager) |
| Custom material database | Yes (private database populated by YEVFUMES team) |
| ERP integrations | SAP, NetSuite (custom implementation) |
| Shopify integration | Yes |
| GC/MS import | Yes |
| Stability testing module | Yes |
| Customer testing database | Yes |
| AI features | All phases including custom fine-tuning |
| SLA | 99.9% uptime SLA |
| Data residency | EU or US option |
| SSO / SAML | Included |
| API | Unlimited with dedicated rate limit |
| Support | Dedicated CSM, 4h SLA, phone |
| Security review | Annual pen test results available |
| Custom contract | MSA, DPA, custom terms |

---

## Additional Revenue Streams

### API Access Pricing (Add-on for Professional+)
- **Read-only API:** Included in Professional at 1k req/day
- **Full API bundles:** 50,000 req/month = $49/month; 250,000 = $149/month; unlimited = $499/month
- **Use case:** Fragrance brands embedding formula data into their own ERP or website

### Supplier Marketplace (v2+)
- YEVFUMES maintains a curated directory of verified suppliers
- Suppliers pay to be listed as "Preferred Partners": $299/month listing fee
- Take rate on verified introductions: 1–2% of first order value (tracked via referral code)
- Estimated TAM: ~200 key fragrance ingredient suppliers globally

### Premium Material Database
- The YEVFUMES Global Material Database (shared across all orgs) contains ~5,000 materials at launch
- **Premium content:** Curated, verified IFRA data, GC/MS profiles, full allergen composition with % ranges, supplier mappings
- Sold as add-on: $29/month for Starter, included in Professional+
- Content sourced from: IFRA public data, literature, partner supplier specs, contributor network

### Consulting & Onboarding Services
- **Standard onboarding:** $500 one-time — data migration (up to 100 formulas from Excel), material database setup
- **Premium onboarding:** $2,500 — full team training, custom material database population, workflow configuration
- **Regulatory audit:** $1,500 — run IFRA compliance check across entire formula library, produce exception report
- **Ongoing consulting:** $150/hour for fragrance regulatory advisory (via network of regulatory consultants)

### White-Label Licensing (v3+)
- Fragrance houses license YEVFUMES to offer as a white-label tool to their brand clients
- Pricing: $5,000/month platform fee + $50/client org/month
- Estimated target: 10–20 fragrance houses globally who offer "client portal" services

---

## Unit Economics Targets

### Assumptions (Year 2 projections)

| Metric | Value |
|--------|-------|
| Starter ARPU | $29/month |
| Professional ARPU | $79/month |
| Studio ARPU | $249/month |
| Enterprise ARPU | $2,000/month (blended) |
| Churn (annual) | 8% Starter, 6% Professional, 4% Studio, 2% Enterprise |
| Customer Acquisition Cost | $150 (Starter/Pro via content/PLG), $800 (Studio via outbound), $5,000 (Enterprise) |
| LTV:CAC target | > 3:1 all tiers |
| Gross margin target | 78% (SaaS software) |

### Revenue Mix Target (End of Year 2)

| Tier | % of Customers | % of MRR |
|------|---------------|---------|
| Starter | 50% | 10% |
| Professional | 30% | 20% |
| Studio | 15% | 30% |
| Enterprise | 5% | 40% |

### PLG (Product-Led Growth) Strategy
- Starter tier is primary acquisition funnel — generous enough to demonstrate value
- In-app upgrade prompts triggered by: hitting formula limit, trying to use allergen extended list, trying to export without watermark, adding a 4th user
- Free trial: 14 days of Professional features for new signups (no credit card required)
- Referral program: 1 month free for both referrer and referred (Studio+)

---

# SECTION 9: DELIVERABLES SUMMARY

## Recommended MVP Scope (v1.0)

### Build (ship in Phase 1-2):
- [ ] User auth + org creation (Clerk integration)
- [ ] Dashboard (home, formula list, material list, inventory overview)
- [ ] Formula editor (ingredients, %, versioning minor/major, status)
- [ ] Material database (create, edit, IFRA data, allergen data)
- [ ] Global material catalog (~1,000 materials pre-loaded at launch)
- [ ] IFRA compliance check (real-time in editor, all categories)
- [ ] Allergen calculation (EU 26 mandatory)
- [ ] Formula scale calculator
- [ ] Inventory management (lots, intake, manual deduction, low-stock alerts)
- [ ] Supplier profiles (basic — name, contact, lead time)
- [ ] Material-supplier price links
- [ ] Basic costing engine (cost per kg of concentrate)
- [ ] SDS document upload and linking
- [ ] Formula PDF export (client-safe version)
- [ ] Role-based access (owner, editor, viewer)
- [ ] Typesense search for materials
- [ ] Starter and Professional tier billing (Stripe)

### Defer to v2.0:
- Accord library
- Purchase order generation
- Batch production tracking
- Evaluation log
- Formula diff/compare view
- Finished product costing (with alcohol + packaging)
- Team collaboration (@mentions, comments)
- Approval workflows
- AI features (all phases)
- Regional restriction flags (China, UK, Japan)
- Barcode scanning
- Mobile PWA
- Webhooks + API access

---

## Development Roadmap

### Phase 1: Foundation (Months 1–3)
**Goal:** Working skeleton, database, auth, basic formula CRUD

**M1:**
- Monorepo setup (Turborepo, pnpm, TypeScript)
- Database schema implementation (Drizzle + Neon)
- Clerk auth integration (user + org)
- API skeleton (Hono, OpenAPI, middleware)
- Next.js app skeleton (layout, nav, auth guards)

**M2:**
- Formula CRUD API + UI (create, edit, list, detail)
- Material database (create, edit, IFRA data entry)
- Basic formula editor (ingredients, % calculation)
- Formula versioning (minor/major version save)
- Formula calculation engine (pure functions, unit-tested)

**M3:**
- IFRA compliance engine (all categories, real-time in editor)
- Allergen calculation (EU 26)
- Material search (Typesense integration)
- Global material catalog data import (1,000 materials)
- PDF export (formula + compliance)

**M3 Milestone:** Internal alpha — core formula workflow functional

---

### Phase 2: Core Workflows (Months 4–6)
**Goal:** Feature-complete MVP, ready for paying beta customers

**M4:**
- Inventory management (lots, intake workflow, transactions)
- Low-stock alerts + expiry alerts
- Supplier profiles + material-supplier links
- Price management (per-supplier prices)
- Basic costing engine (cost per kg)

**M5:**
- Formula scale calculator (full UI)
- Batch weight calculator
- Finished product cost (with alcohol, basic packaging)
- Dashboard (home dashboard with all widgets)
- SDS document upload (Cloudflare R2 integration)
- Formula PDF export (polished, two versions: client + internal)

**M6:**
- Billing integration (Stripe, Starter + Professional tiers)
- Onboarding flow (new org wizard: add first materials, first formula)
- Email notifications (Resend: low stock, expiry, welcome)
- Error tracking (Sentry) + analytics (PostHog)
- Performance optimization (query analysis, caching layer)
- Security review (auth flows, RLS policies, API authorization)

**M6 Milestone:** Public beta launch — first 50 paying customers

---

### Phase 3: Advanced Features (Months 7–9)
**Goal:** Unlock Studio tier features, drive upgrade revenue

**M7:**
- Accord library (create, version, embed in formulas)
- Formula diff/comparison view
- Evaluation log (timeline UI, ratings, notes)
- Team collaboration (multiple users per org)
- Formula permissions (per-formula, not just org role)

**M8:**
- Purchase order generation (from formula requirements)
- Inventory simulation (formula consumption preview)
- Sourcing optimization (cheapest supplier path)
- Batch production tracking (batch records, actual vs. planned)
- Regional restriction flags (EU, US, China)

**M9:**
- Studio tier features + billing
- Approval workflows (configurable review chain)
- Barcode scanning (mobile PWA)
- Shopify integration (basic formula-product link)
- Allergen extended list (82 allergens)
- Data export (Excel, YEVFUMES format)
- Webhook system

**M9 Milestone:** Studio tier launch — targeting fragrance house customers

---

### Phase 4: AI + Integrations (Months 10–12)
**Goal:** AI differentiation, enterprise readiness

**M10:**
- AI Phase 1: semantic material search (pgvector embeddings)
- AI Phase 1: duplicate formula detection
- AI Phase 1: substitution suggestions
- Olfactory wheel visualization (SVG, interactive)

**M11:**
- AI Phase 2: scent profile prediction (Claude + RAG)
- AI Phase 2: cost optimization suggestions
- Sample tracking module
- GC/MS import (basic CSV parsing)

**M12:**
- Enterprise tier (multi-org, SSO/SAML, dedicated support)
- ERP integration framework (SAP connector, phase 1)
- Stability testing module
- White-label foundation (custom subdomain + branding)
- SOC 2 Type I audit preparation

**M12 Milestone:** Enterprise launch, target 5 enterprise customers

---

## API Examples

### 1. Create Formula

**Request:**
```http
POST /api/v1/formulas
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Rose Chypre Concentrate",
  "type": "concentrate",
  "description": "Modern chypre with rose heart, oakmoss accord",
  "brief_notes": "Brief: feminine, daytime, 20% in EDP"
}
```

**Response:**
```json
{
  "data": {
    "formula_id": "f1a2b3c4-d5e6-7890-abcd-ef1234567890",
    "org_id": "org-uuid",
    "name": "Rose Chypre Concentrate",
    "type": "concentrate",
    "status": "draft",
    "current_version_id": null,
    "created_by": "user-uuid",
    "created_at": "2026-05-17T10:00:00Z",
    "updated_at": "2026-05-17T10:00:00Z"
  }
}
```

---

### 2. Scale Formula

**Request:**
```http
POST /api/v1/formulas/f1a2b3c4/versions/1.2/scale
Authorization: Bearer <token>
Content-Type: application/json

{
  "target_weight": 500,
  "unit": "g"
}
```

**Response:**
```json
{
  "data": {
    "formula_id": "f1a2b3c4-...",
    "version": "1.2",
    "target_weight": 500,
    "unit": "g",
    "total_cost": 127.43,
    "cost_per_kg": 254.86,
    "scaled_ingredients": [
      {
        "material_id": "mat-bergamot-uuid",
        "material_name": "Bergamot FCF",
        "raw_percent": 8.0,
        "quantity_g": 40.0,
        "cost_per_kg_active": 24.50,
        "line_cost": 0.98
      },
      {
        "material_id": "mat-rose-abs-uuid",
        "material_name": "Rose Absolute",
        "raw_percent": 12.0,
        "quantity_g": 60.0,
        "cost_per_kg_active": 2840.00,
        "line_cost": 170.40
      }
    ]
  }
}
```

---

### 3. IFRA Compliance Check

**Request:**
```http
POST /api/v1/formulas/f1a2b3c4/versions/1.2/compliance
Authorization: Bearer <token>
Content-Type: application/json

{
  "ifra_category": "4",
  "concentrate_percent": 20,
  "amendment": "current"
}
```

**Response:**
```json
{
  "data": {
    "formula_id": "f1a2b3c4-...",
    "version": "1.2",
    "ifra_category": "4",
    "amendment": "51st",
    "checked_at": "2026-05-17T10:05:00Z",
    "overall_status": "warning",
    "ingredient_results": [
      {
        "material_id": "mat-bergamot-uuid",
        "material_name": "Bergamot FCF",
        "active_percent_in_formula": 8.0,
        "active_percent_in_product": 1.6,
        "ifra_limit": 10.0,
        "status": "ok",
        "overage_factor": 0.16
      },
      {
        "material_id": "mat-oakmoss-uuid",
        "material_name": "Oakmoss Absolute",
        "active_percent_in_formula": 0.5,
        "active_percent_in_product": 0.1,
        "ifra_limit": 0.1,
        "status": "warning",
        "overage_factor": 1.0
      }
    ],
    "allergen_results": [
      {
        "allergen": "Linalool",
        "total_percent_in_product": 0.42,
        "threshold": 0.01,
        "must_declare": true,
        "eu_annex_iii": true
      }
    ]
  }
}
```

---

### 4. Cost Calculation

**Request:**
```http
POST /api/v1/formulas/f1a2b3c4/versions/1.2/cost
Authorization: Bearer <token>
Content-Type: application/json

{
  "concentrate_percent": 20,
  "volume_ml": 50,
  "alcohol_cost_per_kg": 3.20,
  "packaging": {
    "bottle_cost": 4.50,
    "cap_cost": 0.80,
    "box_cost": 1.20,
    "label_cost": 0.35
  },
  "filling_overhead_per_unit": 1.50
}
```

**Response:**
```json
{
  "data": {
    "formula_id": "f1a2b3c4-...",
    "version": "1.2",
    "cost_per_kg_concentrate": 254.86,
    "concentrate_g_per_bottle": 8.49,
    "alcohol_g_per_bottle": 33.96,
    "concentrate_cost_per_bottle": 2.16,
    "alcohol_cost_per_bottle": 0.11,
    "packaging_cost_per_bottle": 6.85,
    "filling_overhead_per_bottle": 1.50,
    "total_cogs_per_bottle": 10.62,
    "ingredient_breakdown": [
      {
        "material_name": "Rose Absolute",
        "active_percent": 12.0,
        "cost_per_kg": 2840.0,
        "cost_per_kg_formula_contribution": 340.80,
        "percentage_of_formula_cost": 66.7
      }
    ]
  }
}
```

---

### 5. Generate Purchase List

**Request:**
```http
POST /api/v1/purchase-orders/generate
Authorization: Bearer <token>
Content-Type: application/json

{
  "formula_requirements": [
    {
      "formula_id": "f1a2b3c4-...",
      "version": "1.2",
      "batch_weight_kg": 2.0
    },
    {
      "formula_id": "f5e6d7c8-...",
      "version": "3.0",
      "batch_weight_kg": 5.0
    }
  ],
  "safety_stock_buffer_percent": 20,
  "optimize_for": "cost"
}
```

**Response:**
```json
{
  "data": {
    "generated_at": "2026-05-17T10:10:00Z",
    "purchase_orders_draft": [
      {
        "supplier_id": "sup-robertet-uuid",
        "supplier_name": "Robertet SA",
        "currency": "EUR",
        "estimated_total": 487.20,
        "items": [
          {
            "material_id": "mat-rose-abs-uuid",
            "material_name": "Rose Absolute",
            "required_g": 360,
            "in_stock_g": 10,
            "net_order_g": 350,
            "with_buffer_g": 420,
            "order_quantity_kg": 0.5,
            "unit_price_per_kg": 2840.0,
            "line_total": 1420.0,
            "supplier_sku": "ROB-ROSABS-25KG"
          }
        ]
      }
    ],
    "materials_already_in_stock": [
      {
        "material_name": "Bergamot FCF",
        "required_g": 560,
        "in_stock_g": 850,
        "status": "sufficient"
      }
    ]
  }
}
```

---

## User Flow Diagrams

### Flow 1: Create New Formula From Scratch

```
START
  │
  ▼
[Dashboard] → Click "+ New Formula"
  │
  ▼
[Create Formula Modal]
  Enter: Name, Type (concentrate), 
         IFRA Category (if finished product)
  Click: "Create Formula"
  │
  ▼
[Formula Editor — empty v1.0 draft]
  │
  ├─ Click "+Add Ingredient"
  │     │
  │     ▼
  │   [Ingredient Search Dropdown]
  │   Type ingredient name → select from results
  │   Row added at bottom of formula
  │
  ├─ Enter % in % column
  │   → grams auto-computed (if batch weight set)
  │   → cost auto-computed
  │   → IFRA status badge updates
  │
  ├─ Repeat for all ingredients
  │
  ├─ Check total % (must reach 100%)
  │   If not: "Normalize" to auto-scale
  │
  ├─ Check compliance badge (bottom bar)
  │   If violation: click to see which ingredients
  │   Adjust percentages or swap materials
  │
  ├─ Click "Save Version"
  │   → Modal: "Save as v1.0 — add change note (optional)"
  │   → Click "Save"
  │   → Version 1.0 created, immutable
  │
  ▼
[Formula Saved — v1.0]
  │
  ├─ Add evaluation notes (side panel)
  ├─ Export PDF
  ├─ Continue editing → creates v1.1 on next save
  │
END
```

---

### Flow 2: Scale Formula for Production Batch

```
[Formula Detail — v2.1 Approved]
  │
  ├─ Click "Scale" button (or Cmd+Shift+S)
  │
  ▼
[Scale Calculator Panel / Modal]
  │
  ├─ Input: Target batch weight = 500g
  ├─ Unit: g (or kg, oz, lb)
  │
  ▼
[Scaled Ingredient Table shown]
  Ingredient | % | Grams | Cost
  ──────────────────────────────
  Bergamot   |8% | 40.0g | $0.98
  Rose Abs   |12%| 60.0g | $170.40
  ...
  Total      |100%|500g  | $127.43
  ──────────────────────────────
  Cost/kg: $254.86
  │
  ├─ "Check Stock" button
  │     │
  │     ▼
  │   Stock simulation:
  │   Bergamot FCF: 40g needed, 850g in stock ✓
  │   Rose Absolute: 60g needed, 10g in stock ✗ SHORTFALL
  │     │
  │     ├─ "Generate Purchase Order for Shortfalls"
  │     │   → pre-fills PO with Rose Absolute 50g + buffer
  │     │
  │     └─ Proceed anyway (note recorded)
  │
  ├─ "Export Batch Sheet" → PDF with gram quantities
  ├─ "Create Batch Record" → Opens batch production form
  │
END
```

---

### Flow 3: Check IFRA Compliance

```
[Formula Editor or Formula Detail]
  │
  ├─ Compliance badge visible at bottom: "✗ IFRA VIOLATION — Cat. 4"
  │   Click badge OR click "Compliance" tab
  │
  ▼
[Compliance Panel]
  │
  ├─ Select IFRA Category: Fine Fragrance (Cat. 4)
  ├─ Enter Concentrate %: 20%
  ├─ Amendment: 51st (current) [toggle to compare previous]
  │
  ▼
[Results Table]
  Ingredient         | % in Product | Limit  | Status
  ──────────────────────────────────────────────────
  Bergamot FCF       |   1.60%      | 10.00% | ✓ OK
  Oakmoss Absolute   |   0.10%      |  0.10% | ▲ AT LIMIT
  Iso E Super        |   2.40%      | none   | — No limit
  Linalool (natural) |   0.42%      | 0.50%  | ✓ OK
  ──────────────────────────────────────────────────
  Overall: ▲ WARNING (1 ingredient at limit)
  
  ALLERGEN DECLARATION (Cat. 4, Leave-on, EU)
  ──────────────────────────────────────────────
  Linalool            0.42%   > 0.01% threshold   DECLARE ✓
  Limonene            0.23%   > 0.01% threshold   DECLARE ✓
  Eugenol             0.008%  < 0.01% threshold   not required
  │
  ├─ "Export IFRA Compliance Sheet" → PDF
  ├─ "Export Allergen Declaration" → PDF
  ├─ "View Restricted Ingredients" → filtered list
  │
  └─ If violation: Inline link to each violating ingredient
     Click ingredient → opens material detail with IFRA data
     Suggestion: "Reduce to ≤ X% to comply"
     
END
```

---

### Flow 4: Generate Purchase List

```
[Purchasing → New Purchase Order]
  OR [Inventory → Stock Simulation → Shortfalls → Generate PO]
  │
  ▼
[Purchase List Generator]
  │
  ├─ Add formulas/batches to plan:
  │   [+ Add Formula] → search, select formula + version + batch size
  │   Repeat for each planned batch
  │
  ▼
[System calculates requirements]
  Total material needed across all batches:
  Material           | Needed  | In Stock | Net Order
  ──────────────────────────────────────────────────
  Bergamot FCF       | 560g    | 850g     | 0 (in stock)
  Rose Absolute      | 360g    | 10g      | 350g (+ 20% buffer = 420g)
  Ambroxan           | 180g    | 50g      | 130g (+ 20% buffer = 156g)
  Sandalwood EO      | 240g    | 0g       | 240g (+ 20% buffer = 288g)
  │
  ├─ Review and adjust quantities
  ├─ System suggests suppliers (cheapest at that quantity)
  │
  ▼
[Draft Purchase Orders grouped by supplier]
  PO #1 → Robertet SA:  Rose Absolute 500g    €1,420
  PO #2 → Symrise:      Ambroxan 200g         $    89
                        Sandalwood EO 300g    $   294
  │
  ├─ Review line items, adjust suppliers
  ├─ "Send POs" → generates PDF POs + optional email
  │
  ▼
[POs created in system — status: "submitted"]
  
  When goods arrive → Inventory → Receive Delivery → match to PO
  
END
```

---

### Flow 5: Receive Inventory

```
[Inventory → Receive Delivery]
  OR [Mobile: tap "Receive" from home]
  │
  ▼
[Receive Delivery Screen]
  │
  ├─ Option A: Scan barcode on delivery note / PO
  │   → Auto-fills supplier and expected materials
  │
  ├─ Option B: Select PO from dropdown
  │
  ├─ Option C: Ad-hoc receipt (no PO)
  │
  ▼
[For each material in delivery]
  │
  ├─ Material: [auto-filled or search]
  ├─ Lot Number: [enter from CoA]  [or scan barcode]
  ├─ Quantity received: [enter]  [unit]
  ├─ Expiry date: [enter or scan]
  ├─ Storage location: [dropdown or free text]
  ├─ Upload CoA: [camera or file upload]
  │
  ├─ [+ Add Another Material]
  │
  ▼
[Review & Confirm]
  Material           | Lot          | Qty     | Expiry
  ──────────────────────────────────────────────────
  Rose Absolute      | LOT-R-26-044 | 500g    | 2028-12-31
  Ambroxan           | LOT-S-26-101 | 200g    | 2029-06-30
  │
  Click "Confirm Receipt"
  │
  ▼
[System actions]
  → Creates inventory_lots records
  → Creates inventory_transactions (type: intake)
  → Updates lot current_quantity
  → Clears low-stock alerts for received materials
  → Updates PO status to "received" (or "partial")
  → Sends confirmation notification to lab manager
  │
  ▼
[Success] "2 materials received. Stock updated."
  
  [View updated stock levels]
  
END
```

---

## Competitive Analysis

| Dimension | YEVFUMES | Perfumer's Apprentice | FragranceCreator.com | Generic ERP (SAP/Odoo) | Spreadsheets |
|-----------|----------|----------------------|----------------------|------------------------|--------------|
| **Formula Management** | ★★★★★ Versioned, accord library, diff | ★★★☆☆ Basic CRUD | ★★★☆☆ Basic formula | ★★☆☆☆ BOM only, no perfumery context | ★★☆☆☆ Manual, error-prone |
| **IFRA Compliance** | ★★★★★ Real-time, all categories, all amendments | ★★★☆☆ Partial, outdated | ★★★☆☆ Limited categories | ★☆☆☆☆ None | ★☆☆☆☆ Manual |
| **Allergen Calculation** | ★★★★★ EU 26 + extended, auto-calc | ★★☆☆☆ Basic | ★★☆☆☆ Basic | ★☆☆☆☆ None | ★☆☆☆☆ Manual |
| **Costing Engine** | ★★★★★ Full: concentrate + finished product + packaging | ★★★☆☆ Basic per-ingredient | ★★★☆☆ Basic | ★★★★☆ Full but generic | ★★★☆☆ Manual, fragile |
| **Inventory Management** | ★★★★★ Lot tracking, expiry, barcode | ★★☆☆☆ Basic | ★★☆☆☆ Basic | ★★★★★ Full but complex | ★★☆☆☆ Manual |
| **AI Features** | ★★★★☆ Roadmap (Phase 1–3) | ★☆☆☆☆ None | ★☆☆☆☆ None | ★☆☆☆☆ None | ★☆☆☆☆ None |
| **UX Quality** | ★★★★★ World-class, keyboard-first | ★★☆☆☆ Dated, functional | ★★★☆☆ Clean but basic | ★★☆☆☆ Dense, complex | N/A |
| **Multi-tenant / Team** | ★★★★★ Full multi-org, RLS | ★☆☆☆☆ Single user | ★★★☆☆ Basic team | ★★★★★ Full | ★☆☆☆☆ Manual sharing |
| **Supplier Management** | ★★★★☆ Profiles, prices, comparison | ★★☆☆☆ Basic | ★★☆☆☆ Basic | ★★★★★ Full procurement | ★★☆☆☆ Separate sheets |
| **Pricing** | $29–$2000+/mo SaaS | ~$80 one-time | $15–$50/mo | $50k+/yr implementation | Free |
| **Perfumery Domain Depth** | ★★★★★ Built for perfumers | ★★★★☆ Strong | ★★★☆☆ Good | ★★☆☆☆ Generic | ★★☆☆☆ User-built |
| **Mobile** | ★★★★☆ PWA, inventory intake | ★★☆☆☆ Responsive only | ★★★☆☆ Responsive | ★★★☆☆ Fiori app | N/A |

**Key competitive insight:** No existing solution combines (1) professional formula management with (2) real-time IFRA compliance and (3) full inventory/costing in one coherent UX built specifically for the fragrance industry. YEVFUMES wins on domain specificity + UX quality + compliance depth.

---

## Risk Analysis

### Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| IFRA data accuracy — errors in limit database cause compliance violations shipped to customers | Medium | Critical | Source from official IFRA XML feed; build validation layer; include disclaimer; allow regulatory officer override |
| Formula calculation bugs (dilution math errors) at scale | Low | High | Pure function architecture with comprehensive unit tests (target 100% coverage of calculation engine); property-based testing with fast-check |
| Database performance degradation as formula/material count grows | Low | Medium | Aggressive indexing strategy; query analysis with EXPLAIN in staging; implement read replicas at 10k+ formulas |
| pgvector ANN search accuracy at scale (Phase 2) | Low | Medium | Test with representative dataset before launch; fallback to keyword search if similarity threshold not met |
| Multi-tenant data isolation failure (RLS bypass) | Very Low | Critical | RLS policy test suite; penetration testing; never use superuser in app queries; org_id validation in every API route |

### Market Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| TAM too small — professional perfumers unwilling to pay for software | Medium | High | Validated by Perfumer's Apprentice ($80 one-time has thousands of customers); upgrade path to fragrance houses with much higher WTP |
| Enterprise fragrance houses have existing ERP + don't switch | High | Medium | Don't displace ERP — integrate with it (SAP connector); position as specialist layer on top of ERP |
| IFRA updates outpace our database maintenance | Medium | Medium | Subscribe to IFRA XML feed; set up automated import pipeline; SLA to update within 30 days of new amendment |
| Low-cost competitor copies core feature set | Medium | Low | Defensible moats: material database quality, AI flywheel, brand trust in compliance-critical industry |
| Fragrance house uses YEVFUMES to train their own AI and leaves | Low | Low | Data in YEVFUMES is most valuable inside the platform (connected to inventory, compliance, costing) |

### Regulatory Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| EU Cosmetics Regulation changes allergen thresholds — our calculations become wrong | Medium | High | Architecture allows threshold update per allergen without code change; subscribe to EU Official Journal alerts |
| YEVFUMES compliance output used as sole basis for product launch, leading to customer regulatory violation | Medium | Critical | Clear terms of service: platform is a decision-support tool, not a regulatory submission system; all exports include "Verify with qualified regulatory professional" disclaimer |
| China CSAR requirements (requires pre-approval for new fragrances) not correctly implemented | Medium | Medium | China CSAR is Phase 2; explicitly not supported in v1; flag when user sets China as target market |
| GDPR / data protection issues with formula data (trade secrets) | Low | High | EU data residency option for Enterprise; SOC 2 Type II roadmap; explicit data processing agreement; no AI training on customer data without opt-in |

---

*End of YEVFUMES Product Specification v1.0.0*

---

**Document prepared by:** YEVFUMES Product Team  
**For:** Engineering, Design, Regulatory Advisory  
**Classification:** Internal — Confidential  
**Next review:** Prior to Phase 1 engineering kickoff  
