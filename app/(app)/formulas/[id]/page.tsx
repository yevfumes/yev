export const dynamic = "force-dynamic";
import { db, schema } from "@/lib/db";
import { eq, desc, asc } from "drizzle-orm";
import { notFound } from "next/navigation";
import { FormulaEditor } from "@/components/formula-editor/FormulaEditor";

async function getFormula(id: string) {
  
  const formula = await db.query.formulas.findFirst({
    where: eq(schema.formulas.id, id),
    with: {
      versions: {
        orderBy: [desc(schema.formulaVersions.created_at)],
        with: {
          ingredients: {
            with: { material: { with: { allergens: true, ifraLimits: true } } },
            orderBy: [asc(schema.formulaIngredients.sort_order)],
          },
        },
      },
      evaluations: { orderBy: [desc(schema.formulaEvaluations.eval_date)] },
    },
  });

  if (!formula) notFound();

  // Fetch all materials for the ingredient search dropdown
  const materials = await db.query.materials.findMany({
    with: { allergens: true, ifraLimits: true },
    orderBy: [asc(schema.materials.name)],
  });

  return { formula, materials };
}

export default async function FormulaPage({ params }: { params: { id: string } }) {
  const { formula, materials } = await getFormula(params.id);
  return <FormulaEditor formula={formula as any} allMaterials={materials as any} />;
}
