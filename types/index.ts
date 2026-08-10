export type Category='Career'|'Work'|'Learning'|'Personal'|'Finance'|'Health'|'Other'
export interface Task { id:string; text:string; category:Category }
export interface DailyLog { date:string; wakeUpCompleted:boolean; calories:number; healthyEating:boolean; noSweets:boolean|null; selfTimeMinutes:number; sleptOnTime:boolean; productiveTasks:Task[]; steps:number; gym:boolean; bhajans:boolean; waterLiters:number; noJunkFood:boolean; notes:string; mood:string; weight?:number }
export interface Settings { challengeStartDate:string; wakeTime:string; sleepTime:string; caloriesTarget:number; stepsTarget:number; waterMinimum:number; selfTimeTarget:number; weeklyGymTarget:number; reminders:string[]; theme:'dark'|'light' }
export interface AppData { onboarded:boolean; settings:Settings; logs:Record<string,DailyLog> }
