import { NextResponse } from "next/server";
import { transcribeAudio } from "@/lib/openai";

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "Missing file" }, { status: 400 });
  const transcript = await transcribeAudio(file);
  return NextResponse.json({ transcript });
}
