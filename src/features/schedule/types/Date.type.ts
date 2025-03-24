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
  SELECT_DATE = "SELECT_DATE",
  INCREASE_DAY = "INCREASE_DAY",
  DECREASE_DAY = "DECREASE_DAY",
}
export interface Day {
  day: number
  currentMonth: boolean
  month: number
  year: number
}
export const DAYS_OF_WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}
export const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}
export const getLastDayOfMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0);
}
export const getDayOfWeek = (day: number, month: number, year: number) => {
  return (((new Date(year, month, day)).getDay() + 6) % 7);
}