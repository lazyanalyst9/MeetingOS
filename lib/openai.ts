import OpenAI from "openai";
import { demoSummary, demoTranscript } from "@/lib/demo-data";

const apiKey = process.env.OPENAI_API_KEY;

export const isDemoMode = !apiKey;

export const openai = apiKey ? new OpenAI({ apiKey }) : null;

export async function transcribeAudio(file: File) {
  if (isDemoMode || !openai) return demoTranscript;
  const transcription = await openai.audio.transcriptions.create({
    model: "gpt-4o-mini-transcribe",
    file
  });
  return transcription.text;
}

export async function generateMeetingSummary(transcript: string) {
  if (isDemoMode || !openai) return demoSummary;

  const prompt = `Return strict JSON with keys: executiveSummary, keyDiscussionPoints, finalDecisions, actionItems(owner,task,due_date,priority,status), risksAndBlockers, questionsRaised, followUpEmailDraft, suggestedNextMeetingAgenda, catchMeUp.\nTranscript:${transcript}`;
  const res = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
    text: { format: { type: "json_object" } }
  });
  return JSON.parse(res.output_text);
}
