import { NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { enquirySchema } from "@/lib/marketing/schemas";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Honeypot: bots that fill this field get a fake success, no write.
  if (parsed.data.website_url_confirm) {
    return NextResponse.json({ ok: true });
  }

  const { website_url_confirm, project_type_other, ...rest } = parsed.data;

  await db.insert(schema.projectEnquiries).values({
    ...rest,
    fragrance_direction:
      rest.project_type === "other" && project_type_other
        ? `[Other: ${project_type_other}] ${rest.fragrance_direction ?? ""}`.trim()
        : rest.fragrance_direction,
  });

  return NextResponse.json({ ok: true });
}
