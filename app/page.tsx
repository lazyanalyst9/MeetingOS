import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid gap-8 py-16 text-center">
      <p className="badge mx-auto">AI Meeting Intelligence</p>
      <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight">Turn every meeting into decisions, tasks, and follow-ups automatically.</h1>
      <p className="mx-auto max-w-3xl text-lg text-slate-300">MeetingOS listens, summarizes, extracts action items, and becomes an AI agent you can ask anything about your meetings.</p>
      <div>
        <Link href="/signup" className="rounded-xl bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-700">Start your first meeting recap</Link>
      </div>
    </section>
  );
}
