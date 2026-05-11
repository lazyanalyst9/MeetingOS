import { demoTasks } from "@/lib/demo-data";

const columns = ["To Do", "In Progress", "Done"] as const;

export default function ActionItemsPage() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-semibold">Action Item Board</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {columns.map((col) => (
          <div className="card p-4" key={col}>
            <h2 className="mb-3 font-medium">{col}</h2>
            <div className="space-y-3">
              {demoTasks.filter((t) => t.status === col).map((t) => (
                <article key={t.id} className="rounded-xl border border-slate-700 p-3">
                  <p className="font-medium">{t.task}</p>
                  <p className="text-sm text-slate-400">Owner: {t.owner}</p>
                  <p className="text-sm text-slate-400">Due: {t.due_date} • {t.priority}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
