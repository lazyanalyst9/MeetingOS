export default function SettingsPage() {
  return (
    <section className="card max-w-2xl p-8">
      <h1 className="mb-6 text-2xl font-semibold">Settings</h1>
      <label className="mb-2 block text-sm">OpenAI API Key</label>
      <input className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3" placeholder="sk-..." />
      <p className="mt-3 text-sm text-slate-400">No key? Demo mode is enabled automatically.</p>
    </section>
  );
}
