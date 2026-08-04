import {
  sqliteTable,
  text,
  integer,
  real,
  index,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { nanoid } from "nanoid";

// ─── Materials ────────────────────────────────────────────────────────────────

export const materials = sqliteTable(
  "materials",
  {
    id: text("id").primaryKey().$defaultFn(() => nanoid()),
    name: text("name").notNull(),
    inci_name: text("inci_name"),
    cas_number: text("cas_number"),
    fema_number: text("fema_number"),
    // natural | synthetic | isolate | absolute | essential_oil | base | accord
    material_type: text("material_type").notNull().default("synthetic"),
    // solid | liquid | semi-solid
    physical_form: text("physical_form").default("liquid"),
    // top | middle | base | bridge
    note_position: text("note_position"),
    // comma-separated descriptors e.g. "floral,musky,woody"
    odor_descriptors: text("odor_descriptors"),
    odor_intensity: integer("odor_intensity"), // 1-10
    odor_longevity: integer("odor_longevity"), // 1-10
    // olfactory family: floral | woody | oriental | fresh | fougere | chypre | gourmand
    olfactory_family: text("olfactory_family"),
    // dilution % as stored — e.g. if it's a 10% dilution, store 10
    default_dilution: real("default_dilution").notNull().default(100),
    flash_point: real("flash_point"), // celsius
    // price per kg in default currency
    cost_per_kg: real("cost_per_kg"),
    supplier_id: text("supplier_id"),
    // stock in grams
    stock_grams: real("stock_grams").notNull().default(0),
    reorder_threshold_grams: real("reorder_threshold_grams"),
    storage_location: text("storage_location"),
    notes: text("notes"),
    is_restricted: integer("is_restricted", { mode: "boolean" }).default(false),
    created_at: integer("created_at", { mode: "timestamp" })
      .$defaultFn(() => new Date()),
    updated_at: integer("updated_at", { mode: "timestamp" })
      .$defaultFn(() => new Date()),
  },
  (t) => ({
    nameIdx: index("materials_name_idx").on(t.name),
    casIdx: index("materials_cas_idx").on(t.cas_number),
    typeIdx: index("materials_type_idx").on(t.material_type),
  })
);

export const materialAllergens = sqliteTable("material_allergens", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  material_id: text("material_id").notNull().references(() => materials.id, { onDelete: "cascade" }),
  allergen_name: text("allergen_name").notNull(), // e.g. "Linalool", "Limonene"
  // % of allergen in the material (not in the formula)
  concentration_pct: real("concentration_pct").notNull(),
  is_eu_regulated: integer("is_eu_regulated", { mode: "boolean" }).default(true),
});

// IFRA 2023 limits per material per category
export const ifraLimits = sqliteTable(
  "ifra_limits",
  {
    id: text("id").primaryKey().$defaultFn(() => nanoid()),
    material_id: text("material_id").notNull().references(() => materials.id, { onDelete: "cascade" }),
    // IFRA category 1-11
    category: integer("category").notNull(),
    // max % in finished product
    limit_pct: real("limit_pct").notNull(),
    // prohibited | restricted | restricted_and_sensitizer
    restriction_type: text("restriction_type").default("restricted"),
    notes: text("notes"),
  },
  (t) => ({
    materialCategoryIdx: uniqueIndex("ifra_material_category_idx").on(t.material_id, t.category),
  })
);

// ─── Suppliers ────────────────────────────────────────────────────────────────

export const suppliers = sqliteTable("suppliers", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  name: text("name").notNull(),
  country: text("country"),
  website: text("website"),
  email: text("email"),
  phone: text("phone"),
  notes: text("notes"),
  is_preferred: integer("is_preferred", { mode: "boolean" }).default(false),
  created_at: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const supplierMaterials = sqliteTable(
  "supplier_materials",
  {
    id: text("id").primaryKey().$defaultFn(() => nanoid()),
    supplier_id: text("supplier_id").notNull().references(() => suppliers.id, { onDelete: "cascade" }),
    material_id: text("material_id").notNull().references(() => materials.id, { onDelete: "cascade" }),
    supplier_code: text("supplier_code"),
    cost_per_kg: real("cost_per_kg"),
    currency: text("currency").default("USD"),
    moq_kg: real("moq_kg"),
    lead_time_days: integer("lead_time_days"),
    is_preferred: integer("is_preferred", { mode: "boolean" }).default(false),
    last_updated: integer("last_updated", { mode: "timestamp" }).$defaultFn(() => new Date()),
  },
  (t) => ({
    uniqueSupplierMaterial: uniqueIndex("supplier_material_unique_idx").on(t.supplier_id, t.material_id),
  })
);

// ─── Formulas ─────────────────────────────────────────────────────────────────

export const formulas = sqliteTable("formulas", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  name: text("name").notNull(),
  // concentrate | finished_product | accord | base | raw_blend
  formula_type: text("formula_type").notNull().default("concentrate"),
  description: text("description"),
  // 1-11, for IFRA category check
  ifra_category: integer("ifra_category").default(4),
  // % concentration in finished product if this is a concentrate being used in FP
  target_concentration_pct: real("target_concentration_pct"),
  // olfactory profile tags
  olfactory_family: text("olfactory_family"),
  odor_descriptors: text("odor_descriptors"),
  // top | middle | base season intent
  season: text("season"),
  // current active version id
  current_version_id: text("current_version_id"),
  status: text("status").notNull().default("draft"), // draft | development | approved | archived
  is_secret: integer("is_secret", { mode: "boolean" }).default(false),
  created_at: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  updated_at: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const formulaVersions = sqliteTable("formula_versions", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  formula_id: text("formula_id").notNull().references(() => formulas.id, { onDelete: "cascade" }),
  version_number: text("version_number").notNull(), // "1.0", "1.1", "2.0"
  version_label: text("version_label"), // e.g. "Initial", "After panel test", "Cost reduction"
  // total batch weight in grams this version was designed for
  batch_size_grams: real("batch_size_grams").notNull().default(100),
  // calculated fields (stored for fast read)
  total_cost_per_kg: real("total_cost_per_kg"),
  is_compliant: integer("is_compliant", { mode: "boolean" }),
  notes: text("notes"),
  created_at: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const formulaIngredients = sqliteTable(
  "formula_ingredients",
  {
    id: text("id").primaryKey().$defaultFn(() => nanoid()),
    version_id: text("version_id").notNull().references(() => formulaVersions.id, { onDelete: "cascade" }),
    formula_id: text("formula_id").notNull(),
    material_id: text("material_id").references(() => materials.id, { onDelete: "set null" }),
    // used when material is not in DB yet
    material_name_raw: text("material_name_raw"),
    // % in the formula concentrate (what you weigh)
    percentage: real("percentage").notNull(),
    // dilution % of the material as used here (can override material's default)
    dilution_pct: real("dilution_pct").notNull().default(100),
    // grams in the design batch (calculated from percentage * batch_size)
    grams: real("grams"),
    // display order
    sort_order: integer("sort_order").notNull().default(0),
    // top | middle | base | fixative | solvent
    note_position: text("note_position"),
    // override cost per kg for this ingredient in this formula
    cost_per_kg_override: real("cost_per_kg_override"),
    notes: text("notes"),
  },
  (t) => ({
    versionIdx: index("fi_version_idx").on(t.version_id),
    materialIdx: index("fi_material_idx").on(t.material_id),
  })
);

// ─── Formula Notes & Evaluations ─────────────────────────────────────────────

export const formulaEvaluations = sqliteTable("formula_evaluations", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  formula_id: text("formula_id").notNull().references(() => formulas.id, { onDelete: "cascade" }),
  version_id: text("version_id").references(() => formulaVersions.id, { onDelete: "set null" }),
  evaluator_name: text("evaluator_name"),
  // overall rating 1-10
  rating: integer("rating"),
  // comma-separated tags: longevity,sillage,balance,uniqueness
  attributes: text("attributes"),
  // free text
  notes: text("notes").notNull(),
  eval_date: integer("eval_date", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ─── Accords ─────────────────────────────────────────────────────────────────

export const accords = sqliteTable("accords", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  name: text("name").notNull(),
  description: text("description"),
  olfactory_family: text("olfactory_family"),
  odor_descriptors: text("odor_descriptors"),
  // JSON array of {material_id, material_name, percentage, dilution_pct}
  ingredients_json: text("ingredients_json").notNull().default("[]"),
  created_at: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ─── Inventory ────────────────────────────────────────────────────────────────

export const inventoryLots = sqliteTable("inventory_lots", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  material_id: text("material_id").notNull().references(() => materials.id, { onDelete: "cascade" }),
  lot_number: text("lot_number"),
  supplier_id: text("supplier_id").references(() => suppliers.id, { onDelete: "set null" }),
  // grams received
  quantity_received_grams: real("quantity_received_grams").notNull(),
  // grams remaining
  quantity_remaining_grams: real("quantity_remaining_grams").notNull(),
  cost_per_kg: real("cost_per_kg"),
  received_date: integer("received_date", { mode: "timestamp" }).$defaultFn(() => new Date()),
  expiry_date: integer("expiry_date", { mode: "timestamp" }),
  storage_location: text("storage_location"),
  notes: text("notes"),
});

export const inventoryTransactions = sqliteTable("inventory_transactions", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  material_id: text("material_id").notNull().references(() => materials.id),
  lot_id: text("lot_id").references(() => inventoryLots.id, { onDelete: "set null" }),
  // receive | use | adjust | waste | sample
  transaction_type: text("transaction_type").notNull(),
  quantity_grams: real("quantity_grams").notNull(), // positive = in, negative = out
  reference_type: text("reference_type"), // formula | batch | purchase_order | manual
  reference_id: text("reference_id"),
  notes: text("notes"),
  created_at: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ─── Production Batches ───────────────────────────────────────────────────────

export const batches = sqliteTable("batches", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  batch_number: text("batch_number").notNull(),
  formula_id: text("formula_id").notNull().references(() => formulas.id),
  version_id: text("version_id").references(() => formulaVersions.id, { onDelete: "set null" }),
  // actual grams produced
  quantity_grams: real("quantity_grams").notNull(),
  // draft | in_progress | completed | qc_hold | rejected
  status: text("status").notNull().default("draft"),
  produced_date: integer("produced_date", { mode: "timestamp" }),
  notes: text("notes"),
  created_at: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ─── Marketing site: fragrance development enquiries ─────────────────────────

export const projectEnquiries = sqliteTable("project_enquiries", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  website: text("website"),
  country: text("country"),
  // existing_brand | new_brand | individual
  brand_status: text("brand_status"),
  // personal_fragrance | brand_range | single_product | gift_or_bespoke | other
  project_type: text("project_type"),
  number_of_fragrances: text("number_of_fragrances"),
  fragrance_direction: text("fragrance_direction"),
  creative_brief: text("creative_brief").notNull(),
  reference_fragrances: text("reference_fragrances"),
  target_customer: text("target_customer"),
  launch_date: text("launch_date"),
  budget: text("budget"),
  production_quantity: text("production_quantity"),
  // development_only | development_and_support
  support_needed: text("support_needed"),
  additional_info: text("additional_info"),
  // new | reviewed | replied | archived
  status: text("status").notNull().default("new"),
  created_at: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ─── Marketing site: perfumery class waiting list ─────────────────────────────

export const classInterest = sqliteTable("class_interest", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  location: text("location"),
  // beginner | some_experience | experienced
  experience_level: text("experience_level"),
  learning_goals: text("learning_goals"),
  // in_person | online | either
  preferred_format: text("preferred_format"),
  status: text("status").notNull().default("new"),
  created_at: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ─── Relations ────────────────────────────────────────────────────────────────

export const materialsRelations = relations(materials, ({ many, one }) => ({
  allergens: many(materialAllergens),
  ifraLimits: many(ifraLimits),
  supplierLinks: many(supplierMaterials),
  formulaIngredients: many(formulaIngredients),
  inventoryLots: many(inventoryLots),
}));

export const formulasRelations = relations(formulas, ({ many, one }) => ({
  versions: many(formulaVersions),
  evaluations: many(formulaEvaluations),
}));

export const formulaVersionsRelations = relations(formulaVersions, ({ one, many }) => ({
  formula: one(formulas, { fields: [formulaVersions.formula_id], references: [formulas.id] }),
  ingredients: many(formulaIngredients),
}));

export const formulaIngredientsRelations = relations(formulaIngredients, ({ one }) => ({
  material: one(materials, { fields: [formulaIngredients.material_id], references: [materials.id] }),
  version: one(formulaVersions, { fields: [formulaIngredients.version_id], references: [formulaVersions.id] }),
}));

export const materialAllergenRelations = relations(materialAllergens, ({ one }) => ({
  material: one(materials, { fields: [materialAllergens.material_id], references: [materials.id] }),
}));

export const ifraLimitsRelations = relations(ifraLimits, ({ one }) => ({
  material: one(materials, { fields: [ifraLimits.material_id], references: [materials.id] }),
}));

export const suppliersRelations = relations(suppliers, ({ many }) => ({
  supplierMaterials: many(supplierMaterials),
}));

export const supplierMaterialsRelations = relations(supplierMaterials, ({ one }) => ({
  supplier: one(suppliers, { fields: [supplierMaterials.supplier_id], references: [suppliers.id] }),
  material: one(materials, { fields: [supplierMaterials.material_id], references: [materials.id] }),
}));

export const inventoryLotsRelations = relations(inventoryLots, ({ one, many }) => ({
  material: one(materials, { fields: [inventoryLots.material_id], references: [materials.id] }),
  transactions: many(inventoryTransactions),
}));

export const inventoryTransactionsRelations = relations(inventoryTransactions, ({ one }) => ({
  lot: one(inventoryLots, { fields: [inventoryTransactions.lot_id], references: [inventoryLots.id] }),
}));

export const formulaEvaluationsRelations = relations(formulaEvaluations, ({ one }) => ({
  formula: one(formulas, { fields: [formulaEvaluations.formula_id], references: [formulas.id] }),
  version: one(formulaVersions, { fields: [formulaEvaluations.version_id], references: [formulaVersions.id] }),
}));
