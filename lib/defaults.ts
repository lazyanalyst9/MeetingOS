import { AppData } from '@/types'; import { localDate } from './date'
export const defaults=():AppData=>({onboarded:false,settings:{challengeStartDate:localDate(),wakeTime:'07:00',sleepTime:'23:30',caloriesTarget:2000,stepsTarget:10000,waterMinimum:3,selfTimeTarget:30,weeklyGymTarget:5,reminders:['07:00','11:00','15:00','19:00','22:30'],theme:'dark'},logs:{}})
