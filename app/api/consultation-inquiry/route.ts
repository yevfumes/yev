import { NextResponse } from "next/server";
import { db, schema } from "@/lib/db";
import { consultationInquirySchema } from "@/lib/marketing/schemas";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = consultationInquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  if (parsed.data.website_url_confirm) {
    return NextResponse.json({ ok: true });
  }

  const { website_url_confirm, improve_goals, ...rest } = parsed.data;

  await db.insert(schema.consultationInquiries).values({
    ...rest,
    improve_goals: improve_goals.join(","),
  });

  return NextResponse.json({ ok: true });
}
