export type MeetingStatus = "Processing" | "Completed";

export interface Meeting {
  id: string;
  title: string;
  meeting_date: string;
  duration_minutes: number;
  status: MeetingStatus;
  quick_summary: string;
}

export interface ActionItem {
  id: string;
  meeting_id: string;
  owner: string;
  task: string;
  due_date: string;
  priority: "Low" | "Medium" | "High";
  status: "To Do" | "In Progress" | "Done";
}
