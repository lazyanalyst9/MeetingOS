import { demoSummary } from "@/lib/demo-data";

export default function MeetingDetailPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <section className="card p-6 lg:col-span-2">
        <h1 className="text-2xl font-semibold">Q3 Product Launch Sync</h1>
        <button className="mt-4 rounded-lg border border-brand-500 px-4 py-2 text-brand-500">Catch Me Up</button>
        <p className="mt-3 text-slate-300">{demoSummary.catchMeUp}</p>
        <h2 className="mt-6 text-lg font-semibold">Executive Summary</h2>
        <p className="mt-2 text-slate-200">{demoSummary.executiveSummary}</p>
        <h2 className="mt-6 text-lg font-semibold">Final Decisions</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">{demoSummary.finalDecisions.map((x) => <li key={x}>{x}</li>)}</ul>
      </section>
      <aside className="card p-6">
        <h2 className="text-lg font-semibold">Meeting Agent</h2>
        <div className="mt-4 space-y-2 text-sm text-slate-300">
          <p className="rounded-lg bg-slate-800 p-3">What are my action items?</p>
          <p className="rounded-lg bg-brand-500/20 p-3">You own 1 item: Finalize launch FAQ by May 15.</p>
        </div>
      </aside>
      <section className="card p-6 lg:col-span-3">
        <h2 className="text-lg font-semibold">Follow-up Assistant</h2>
        <div className="mt-4 flex gap-2"><button className="rounded-lg bg-slate-800 px-3 py-2">Professional</button><button className="rounded-lg bg-slate-800 px-3 py-2">Friendly</button><button className="rounded-lg bg-slate-800 px-3 py-2">Executive</button><button className="rounded-lg bg-slate-800 px-3 py-2">Short</button></div>
        <textarea className="mt-3 h-40 w-full rounded-xl border border-slate-700 bg-slate-950 p-4" defaultValue={demoSummary.followUpEmailDraft} />
      </section>
    </div>
  );
}
