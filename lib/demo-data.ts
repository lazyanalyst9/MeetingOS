import { ActionItem, Meeting } from "@/lib/types";

export const demoMeetings: Meeting[] = [
  {
    id: "m1",
    title: "Q3 Product Launch Sync",
    meeting_date: "2026-05-09",
    duration_minutes: 52,
    status: "Completed",
    quick_summary: "Aligned launch timeline, locked beta date, and assigned owners for GTM deliverables."
  }
];

export const demoTranscript = `Sarah: Let's lock scope for the Q3 launch...`;

export const demoSummary = {
  executiveSummary: "Team aligned on Q3 launch scope, dates, and accountability. Beta opens June 10.",
  keyDiscussionPoints: ["Launch timeline", "API stability", "Sales enablement"],
  finalDecisions: ["Feature freeze on June 1", "Weekly risk review"],
  actionItems: [
    { owner: "Ava", task: "Finalize launch FAQ", due_date: "2026-05-15", priority: "High", status: "To Do" },
    { owner: "Noah", task: "Ship API load tests", due_date: "2026-05-18", priority: "Medium", status: "In Progress" }
  ],
  risksAndBlockers: ["Dependency on external auth provider"],
  questionsRaised: ["Can we support EU data residency at launch?"],
  followUpEmailDraft: "Subject: Q3 Launch Sync - Decisions and Next Steps...",
  suggestedNextMeetingAgenda: ["Risk burn down", "Enablement readiness", "Beta success metrics"],
  catchMeUp: "So far, the team locked scope and timeline."
};

export const demoTasks: ActionItem[] = demoSummary.actionItems.map((item, index) => ({
  id: `a${index + 1}`,
  meeting_id: "m1",
  owner: item.owner,
  task: item.task,
  due_date: item.due_date,
  priority: item.priority as "Low" | "Medium" | "High",
  status: item.status as "To Do" | "In Progress" | "Done"
}));
