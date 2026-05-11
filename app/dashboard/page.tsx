import Link from "next/link";
import { demoMeetings } from "@/lib/demo-data";

export default function DashboardPage() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-semibold">Meeting Dashboard</h1>
      <div className="grid gap-4">
        {demoMeetings.map((meeting) => (
          <Link href={`/meetings/${meeting.id}`} className="card p-5" key={meeting.id}>
            <div className="flex items-center justify-between"><h2 className="text-xl font-medium">{meeting.title}</h2><span className="badge">{meeting.status}</span></div>
            <p className="mt-2 text-sm text-slate-400">{meeting.meeting_date} • {meeting.duration_minutes} min</p>
            <p className="mt-3 text-slate-200">{meeting.quick_summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
