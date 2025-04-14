export interface IScheduleComponent {
  today: Date
  month: number
  year: number
  daysInMonth: number
  firstDayOfMonth: number
  prevMonthDays: number
  state: ICalendarState
  dispatch: React.ActionDispatch<[action: ICalendarAction]>
  view: EScheduleView
}
export enum EScheduleView {
  WEEK = "WEEK",
  MONTH = "MONTH",
  DAY = "DAY",
  YEAR = "YEAR",
}
export interface Timeline {
  id: number // Changed from string to number
  time: string
}
export const Timelines: Timeline[] = [
  { id: 0, time: "00.00" },
  { id: 1, time: "01.00" },
  { id: 2, time: "02.00" },
  { id: 3, time: "03.00" },
  { id: 4, time: "04.00" },
  { id: 5, time: "05.00" },
  { id: 6, time: "06.00" },
  { id: 7, time: "07.00" },
  { id: 8, time: "08.00" },
  { id: 9, time: "09.00" },
  { id: 10, time: "10.00" },
  { id: 11, time: "11.00" },
  { id: 12, time: "12.00" },
  { id: 13, time: "13.00" },
  { id: 14, time: "14.00" },
  { id: 15, time: "15.00" },
  { id: 16, time: "16.00" },
  { id: 17, time: "17.00" },
  { id: 18, time: "18.00" },
  { id: 19, time: "19.00" },
  { id: 20, time: "20.00" },
  { id: 21, time: "21.00" },
  { id: 22, time: "22.00" },
  { id: 23, time: "23.00" },
]
export interface ICalendarState {
  currentDate: Date
  selectedDate?: Date
  error?: string
}
export interface ICalendarAction {
  type: string
  date?: Date
}
export enum ECalendarAction {
  INCREASE_MONTH = "INCREASE_MONTH",
  DECREASE_MONTH = "DECREASE_MONTH",
  INCREASE_DAY = "INCREASE_DAY",
  DECREASE_DAY = "DECREASE_DAY",
  INCREASE_WEEK = "INCREASE_WEEK",
  DECREASE_WEEK = "DECREASE_WEEK",
  SELECT_DATE = "SELECT_DATE",
  SET_DAY = "SET_DAY",
}
export interface Day {
  day: number
  currentMonth: boolean
  month: number
  year: number
}
export const DAYS_OF_WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
export const MONTHS_OF_YEAR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]


export const DragEventTypes = {
  SCHEDULE_DRAG: "SCHEDULE_DRAG",
}
export type TaskType = {
  id: number
  title: string
  description: string
  time: string
  start?: Date
  end?: Date
}

export const Tasks: TaskType[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    time: "00.00",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    time: "01.00",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    time: "02.00",
  },
]
