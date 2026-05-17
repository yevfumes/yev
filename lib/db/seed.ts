import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import { nanoid } from "nanoid";
import path from "path";

const DB_PATH = process.env.DATABASE_URL || path.join(process.cwd(), "yevfumes.db");
const sqlite = new Database(DB_PATH);
sqlite.pragma("journal_mode = WAL");
sqlite.pragma("foreign_keys = ON");
const db = drizzle(sqlite, { schema });

async function seed() {
  console.log("🌱 Seeding database...");

  // ── Suppliers ──────────────────────────────────────────────────────────────
  const supplierIds = {
    givaudan: nanoid(),
    firmenich: nanoid(),
    iff: nanoid(),
    symrise: nanoid(),
    pa: nanoid(),
    scentAndSearch: nanoid(),
  };

  await db.insert(schema.suppliers).values([
    { id: supplierIds.givaudan, name: "Givaudan", country: "Switzerland", website: "https://givaudan.com", is_preferred: true },
    { id: supplierIds.firmenich, name: "Firmenich", country: "Switzerland", website: "https://firmenich.com" },
    { id: supplierIds.iff, name: "IFF", country: "USA", website: "https://iff.com" },
    { id: supplierIds.symrise, name: "Symrise", country: "Germany", website: "https://symrise.com" },
    { id: supplierIds.pa, name: "The Perfumer's Apprentice", country: "USA", website: "https://perfumersapprentice.com", is_preferred: true },
    { id: supplierIds.scentAndSearch, name: "Scent & Search", country: "UK" },
  ]).onConflictDoNothing();

  // ── Materials ──────────────────────────────────────────────────────────────
  const mats: (typeof schema.materials.$inferInsert)[] = [
    {
      id: nanoid(), name: "Iso E Super", cas_number: "54464-57-2",
      material_type: "synthetic", note_position: "base",
      odor_descriptors: "woody,cedarwood,smoky,dry", olfactory_family: "woody",
      odor_intensity: 7, odor_longevity: 9,
      default_dilution: 100, cost_per_kg: 45,
      stock_grams: 500, reorder_threshold_grams: 50,
      notes: "Terpin ether. Haiku note, boosts other materials. IFRA unrestricted.",
    },
    {
      id: nanoid(), name: "Linalool", cas_number: "78-70-6",
      material_type: "synthetic", note_position: "top",
      odor_descriptors: "floral,lavender,light,fresh", olfactory_family: "floral",
      odor_intensity: 5, odor_longevity: 4,
      default_dilution: 100, cost_per_kg: 18,
      stock_grams: 1000, reorder_threshold_grams: 100,
      is_restricted: true,
    },
    {
      id: nanoid(), name: "Hedione", cas_number: "24851-98-7",
      material_type: "synthetic", note_position: "middle",
      odor_descriptors: "jasmine,fresh,transparent,radiant", olfactory_family: "floral",
      odor_intensity: 3, odor_longevity: 7,
      default_dilution: 100, cost_per_kg: 55,
      stock_grams: 300, reorder_threshold_grams: 50,
    },
    {
      id: nanoid(), name: "Galaxolide", cas_number: "1222-05-5",
      material_type: "synthetic", note_position: "base",
      odor_descriptors: "musk,clean,powdery,warm", olfactory_family: "musk",
      odor_intensity: 6, odor_longevity: 10,
      default_dilution: 50, cost_per_kg: 32,
      stock_grams: 200, reorder_threshold_grams: 30,
      notes: "50% in IPM. Very tenacious musk.",
      is_restricted: true,
    },
    {
      id: nanoid(), name: "Bergamot Essential Oil", cas_number: "8007-75-8",
      material_type: "essential_oil", note_position: "top",
      odor_descriptors: "citrus,bergamot,fresh,green,floral", olfactory_family: "fresh",
      odor_intensity: 7, odor_longevity: 3,
      default_dilution: 100, cost_per_kg: 85,
      stock_grams: 150, reorder_threshold_grams: 20,
      is_restricted: true,
    },
    {
      id: nanoid(), name: "Ambrette Seed Absolute", cas_number: "8015-62-1",
      material_type: "absolute", note_position: "base",
      odor_descriptors: "musky,floral,sweet,animalic,pear", olfactory_family: "oriental",
      odor_intensity: 5, odor_longevity: 9,
      default_dilution: 100, cost_per_kg: 620,
      stock_grams: 25, reorder_threshold_grams: 5,
    },
    {
      id: nanoid(), name: "Rose Otto Bulgaria", cas_number: "8007-01-0",
      material_type: "essential_oil", note_position: "middle",
      odor_descriptors: "rose,floral,honey,wax,green", olfactory_family: "floral",
      odor_intensity: 8, odor_longevity: 7,
      default_dilution: 100, cost_per_kg: 8500,
      stock_grams: 10, reorder_threshold_grams: 2,
      notes: "Bulgarian steam-distilled. Use sparingly.",
    },
    {
      id: nanoid(), name: "Sandalwood Mysore 10%", cas_number: "8006-87-9",
      material_type: "essential_oil", note_position: "base",
      odor_descriptors: "sandalwood,creamy,milky,woody,soft", olfactory_family: "woody",
      odor_intensity: 4, odor_longevity: 10,
      default_dilution: 10, cost_per_kg: 180,
      stock_grams: 100, reorder_threshold_grams: 15,
      notes: "10% dilution in DPG.",
    },
    {
      id: nanoid(), name: "Vetiver Haiti", cas_number: "8016-96-4",
      material_type: "essential_oil", note_position: "base",
      odor_descriptors: "vetiver,earthy,smoky,woody,green,dry", olfactory_family: "woody",
      odor_intensity: 9, odor_longevity: 10,
      default_dilution: 100, cost_per_kg: 125,
      stock_grams: 80, reorder_threshold_grams: 10,
    },
    {
      id: nanoid(), name: "Cetalox", cas_number: "3687-45-4",
      material_type: "synthetic", note_position: "base",
      odor_descriptors: "ambergris,musky,clean,fresh,woody", olfactory_family: "woody",
      odor_intensity: 4, odor_longevity: 10,
      default_dilution: 100, cost_per_kg: 75,
      stock_grams: 200, reorder_threshold_grams: 25,
    },
    {
      id: nanoid(), name: "Dihydromyrcenol", cas_number: "18479-58-8",
      material_type: "synthetic", note_position: "top",
      odor_descriptors: "fresh,lime,citrus,clean,aquatic", olfactory_family: "fresh",
      odor_intensity: 8, odor_longevity: 4,
      default_dilution: 100, cost_per_kg: 15,
      stock_grams: 500, reorder_threshold_grams: 100,
    },
    {
      id: nanoid(), name: "Ethylene Brassylate", cas_number: "105-95-3",
      material_type: "synthetic", note_position: "base",
      odor_descriptors: "musk,macrocyclic,clean,powdery,sweet", olfactory_family: "musk",
      odor_intensity: 5, odor_longevity: 10,
      default_dilution: 100, cost_per_kg: 50,
      stock_grams: 150, reorder_threshold_grams: 20,
    },
    {
      id: nanoid(), name: "Patchouli Dark", cas_number: "8014-09-3",
      material_type: "essential_oil", note_position: "base",
      odor_descriptors: "patchouli,earthy,dark,woody,sweet,balsamic", olfactory_family: "woody",
      odor_intensity: 9, odor_longevity: 10,
      default_dilution: 100, cost_per_kg: 95,
      stock_grams: 120, reorder_threshold_grams: 15,
    },
    {
      id: nanoid(), name: "Coumarin", cas_number: "91-64-5",
      material_type: "synthetic", note_position: "base",
      odor_descriptors: "coumarin,hay,sweet,tonka,warm", olfactory_family: "oriental",
      odor_intensity: 6, odor_longevity: 8,
      default_dilution: 100, cost_per_kg: 22,
      stock_grams: 250, reorder_threshold_grams: 30,
      is_restricted: true,
    },
    {
      id: nanoid(), name: "Benzyl Acetate", cas_number: "140-11-4",
      material_type: "synthetic", note_position: "middle",
      odor_descriptors: "jasmine,floral,fresh,fruity,sweet", olfactory_family: "floral",
      odor_intensity: 7, odor_longevity: 5,
      default_dilution: 100, cost_per_kg: 12,
      stock_grams: 400, reorder_threshold_grams: 50,
      is_restricted: true,
    },
    {
      id: nanoid(), name: "Musks T", cas_number: "81-15-2",
      material_type: "synthetic", note_position: "base",
      odor_descriptors: "musk,nitro-musk,warm,sweet,powdery", olfactory_family: "musk",
      odor_intensity: 7, odor_longevity: 10,
      default_dilution: 100, cost_per_kg: 28,
      stock_grams: 0, reorder_threshold_grams: 50,
      is_restricted: true,
      notes: "Restricted in EU cosmetics. Check application type.",
    },
  ];

  const insertedMats = await db.insert(schema.materials).values(mats).returning();
  console.log(`  ✓ ${insertedMats.length} materials`);

  // ── IFRA Limits ────────────────────────────────────────────────────────────
  const linaloolMat = insertedMats.find((m) => m.name === "Linalool");
  const bergamotMat = insertedMats.find((m) => m.name === "Bergamot Essential Oil");
  const coumMat = insertedMats.find((m) => m.name === "Coumarin");
  const galaxMat = insertedMats.find((m) => m.name === "Galaxolide");
  const benzylAcMat = insertedMats.find((m) => m.name === "Benzyl Acetate");

  const ifraEntries: (typeof schema.ifraLimits.$inferInsert)[] = [];

  if (linaloolMat) {
    // Linalool is restricted in most categories
    for (let cat = 1; cat <= 11; cat++) {
      const limits: Record<number, number> = { 1: 0.5, 2: 2.0, 3: 0.4, 4: 7.6, 5: 2.5, 6: 0.2, 7: 2.3, 8: 6.8, 9: 10.4, 10: 10.9, 11: 68.75 };
      ifraEntries.push({ material_id: linaloolMat.id, category: cat, limit_pct: limits[cat] ?? 10 });
    }
  }

  if (bergamotMat) {
    for (let cat = 1; cat <= 11; cat++) {
      const limits: Record<number, number> = { 1: 0.1, 2: 0.3, 3: 0.1, 4: 1.2, 5: 0.6, 6: 0.1, 7: 0.5, 8: 1.0, 9: 1.5, 10: 2.0, 11: 15.0 };
      ifraEntries.push({ material_id: bergamotMat.id, category: cat, limit_pct: limits[cat] ?? 5 });
    }
  }

  if (coumMat) {
    for (let cat = 1; cat <= 11; cat++) {
      const limits: Record<number, number> = { 1: 0.1, 2: 0.6, 3: 0.08, 4: 1.0, 5: 0.5, 6: 0.06, 7: 0.4, 8: 0.9, 9: 1.2, 10: 1.7, 11: 20.0 };
      ifraEntries.push({ material_id: coumMat.id, category: cat, limit_pct: limits[cat] ?? 2, restriction_type: "restricted" });
    }
  }

  if (galaxMat) {
    for (let cat = 1; cat <= 11; cat++) {
      const limits: Record<number, number> = { 1: 0.2, 2: 0.5, 3: 0.2, 4: 2.5, 5: 0.5, 6: 0.1, 7: 0.5, 8: 1.2, 9: 2.0, 10: 3.5, 11: 5.0 };
      ifraEntries.push({ material_id: galaxMat.id, category: cat, limit_pct: limits[cat] ?? 3 });
    }
  }

  if (benzylAcMat) {
    for (let cat = 1; cat <= 11; cat++) {
      const limits: Record<number, number> = { 1: 0.5, 2: 2.0, 3: 0.3, 4: 5.5, 5: 2.0, 6: 0.1, 7: 2.0, 8: 5.0, 9: 7.0, 10: 10.0, 11: 35.0 };
      ifraEntries.push({ material_id: benzylAcMat.id, category: cat, limit_pct: limits[cat] ?? 10 });
    }
  }

  if (ifraEntries.length > 0) {
    await db.insert(schema.ifraLimits).values(ifraEntries).onConflictDoNothing();
  }

  // ── Allergens ──────────────────────────────────────────────────────────────
  const allergenEntries: (typeof schema.materialAllergens.$inferInsert)[] = [];

  if (linaloolMat) {
    allergenEntries.push({ material_id: linaloolMat.id, allergen_name: "Linalool", concentration_pct: 99.5, is_eu_regulated: true });
  }
  if (bergamotMat) {
    allergenEntries.push({ material_id: bergamotMat.id, allergen_name: "Linalool", concentration_pct: 12.0, is_eu_regulated: true });
    allergenEntries.push({ material_id: bergamotMat.id, allergen_name: "Limonene", concentration_pct: 30.0, is_eu_regulated: true });
    allergenEntries.push({ material_id: bergamotMat.id, allergen_name: "Bergapten (5-MOP)", concentration_pct: 0.3, is_eu_regulated: true });
  }
  if (benzylAcMat) {
    allergenEntries.push({ material_id: benzylAcMat.id, allergen_name: "Benzyl Acetate", concentration_pct: 98.0, is_eu_regulated: false });
  }

  if (allergenEntries.length > 0) {
    await db.insert(schema.materialAllergens).values(allergenEntries).onConflictDoNothing();
  }

  // ── Sample Formula ─────────────────────────────────────────────────────────
  const formulaId = nanoid();
  const versionId = nanoid();

  await db.insert(schema.formulas).values({
    id: formulaId,
    name: "Nuit Ambrée No.1",
    formula_type: "concentrate",
    description: "An oriental woody amber. Deep ambergris and soft musks with a sheer bergamot opening.",
    ifra_category: 4,
    olfactory_family: "oriental",
    odor_descriptors: "amber,woody,musky,citrus",
    status: "development",
    current_version_id: versionId,
  });

  await db.insert(schema.formulaVersions).values({
    id: versionId,
    formula_id: formulaId,
    version_number: "1.0",
    version_label: "Initial creation",
    batch_size_grams: 100,
    notes: "First trial. Needs more sillage.",
  });

  // Map material names to their IDs
  const matMap = new Map(insertedMats.map((m) => [m.name, m.id]));

  const ingredients: (typeof schema.formulaIngredients.$inferInsert)[] = [
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Bergamot Essential Oil"),
      material_name_raw: "Bergamot Essential Oil",
      percentage: 8.0, dilution_pct: 100, note_position: "top", sort_order: 0,
    },
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Dihydromyrcenol"),
      material_name_raw: "Dihydromyrcenol",
      percentage: 5.0, dilution_pct: 100, note_position: "top", sort_order: 1,
    },
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Hedione"),
      material_name_raw: "Hedione",
      percentage: 15.0, dilution_pct: 100, note_position: "middle", sort_order: 2,
    },
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Iso E Super"),
      material_name_raw: "Iso E Super",
      percentage: 20.0, dilution_pct: 100, note_position: "base", sort_order: 3,
    },
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Cetalox"),
      material_name_raw: "Cetalox",
      percentage: 12.0, dilution_pct: 100, note_position: "base", sort_order: 4,
    },
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Galaxolide"),
      material_name_raw: "Galaxolide 50% IPM",
      percentage: 10.0, dilution_pct: 50, note_position: "base", sort_order: 5,
    },
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Ethylene Brassylate"),
      material_name_raw: "Ethylene Brassylate",
      percentage: 8.0, dilution_pct: 100, note_position: "base", sort_order: 6,
    },
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Ambrette Seed Absolute"),
      material_name_raw: "Ambrette Seed Absolute",
      percentage: 2.0, dilution_pct: 100, note_position: "base", sort_order: 7,
    },
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Patchouli Dark"),
      material_name_raw: "Patchouli Dark",
      percentage: 5.0, dilution_pct: 100, note_position: "base", sort_order: 8,
    },
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Linalool"),
      material_name_raw: "Linalool",
      percentage: 5.0, dilution_pct: 100, note_position: "top", sort_order: 9,
    },
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Coumarin"),
      material_name_raw: "Coumarin",
      percentage: 6.0, dilution_pct: 100, note_position: "base", sort_order: 10,
    },
    {
      version_id: versionId, formula_id: formulaId,
      material_id: matMap.get("Sandalwood Mysore 10%"),
      material_name_raw: "Sandalwood Mysore 10%",
      percentage: 4.0, dilution_pct: 10, note_position: "base", sort_order: 11,
    },
  ];

  await db.insert(schema.formulaIngredients).values(ingredients);

  await db.insert(schema.formulaEvaluations).values({
    formula_id: formulaId,
    version_id: versionId,
    evaluator_name: "Studio",
    rating: 7,
    notes: "Promising opening. Bergamot needs more projection. The ambergris accord is excellent. Consider adding more hedione or a floral middle.",
    attributes: "longevity,balance",
  });

  console.log(`  ✓ Sample formula: Nuit Ambrée No.1`);
  console.log("✅ Seed complete.");
}

seed().catch(console.error).finally(() => sqlite.close());
