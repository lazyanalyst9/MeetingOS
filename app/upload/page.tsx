"use client";
import { useState } from "react";

const steps = ["Uploading audio", "Transcribing meeting", "Generating summary", "Building action items"];

export default function UploadPage() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  async function handleUpload() {
    setLoading(true);
    for (let i = 0; i < steps.length; i += 1) {
      setStep(i);
      await new Promise((r) => setTimeout(r, 700));
    }
    setLoading(false);
  }

  return (
    <section className="card max-w-2xl p-8">
      <h1 className="mb-2 text-2xl font-semibold">Upload Meeting Audio</h1>
      <p className="mb-6 text-slate-300">Supported formats: .mp3, .wav, .m4a</p>
      <input type="file" accept=".mp3,.wav,.m4a" className="mb-5 w-full rounded-xl border border-dashed border-slate-700 p-8" />
      <button onClick={handleUpload} className="rounded-xl bg-brand-500 px-6 py-3">Process Meeting</button>
      {loading && <p className="mt-4 text-brand-500">{steps[step]}...</p>}
    </section>
  );
}
