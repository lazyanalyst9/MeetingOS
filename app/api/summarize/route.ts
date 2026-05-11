import { NextResponse } from "next/server";
import { generateMeetingSummary } from "@/lib/openai";

export async function POST(req: Request) {
  const { transcript } = await req.json();
  const summary = await generateMeetingSummary(transcript);
  return NextResponse.json(summary);
}
