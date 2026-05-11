import { NextResponse } from "next/server";
import { isDemoMode, openai } from "@/lib/openai";

export async function POST(req: Request) {
  const { question, context } = await req.json();
  if (isDemoMode || !openai) return NextResponse.json({ answer: "Based on the meeting, scope and owners are now locked. Your top action item is the FAQ by May 15." });
  const res = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: `Answer using only this meeting context:\n${context}\nQuestion:${question}`
  });
  return NextResponse.json({ answer: res.output_text });
}
