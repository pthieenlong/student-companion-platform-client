/* eslint-disable @typescript-eslint/no-explicit-any */
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
export const MONTHS_OF_YEAR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}
export const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}
export const getLastDayOfMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0)
}
export const getDayOfWeek = (day: number, month: number, year: number) => {
  return (new Date(year, month, day).getDay() + 6) % 7
}
export const getWeek = (
  day: number,
  month: number,
  year: number,
): { day: string; date: number; DateType: Date }[] => {
  const date = new Date(year, month, day) // Tháng trong Date bắt đầu từ 0 (tháng 1 là 0)
  const currentDayIndex = (date.getDay() + 6) % 7
  const currentDate = date.getDate()
  const currentMonth = date.getMonth()
  const currentYear = date.getFullYear()

  const week: { day: string; date: number; DateType: Date }[] = []

  for (let i = 0; i < 7; i++) {
    const diff = i - currentDayIndex
    const weekDate = new Date(currentYear, currentMonth, currentDate + diff)
    week.push({
      day: DAYS_OF_WEEK[i],
      date: weekDate.getDate(),
      DateType: weekDate,
    })
  }

  return week
}

export const get42Days = (firstDayOfMonth: number, prevMonthDays: number, month: number, year: number, daysInMonth: number):Day[] => {
  const days: Day[] = []
  for (let i = firstDayOfMonth - 1; i > 0; i--) {
    days.push({
      day: prevMonthDays - i + 1,
      currentMonth: false,
      month: month - 1,
      year: month === 0 ? year - 1 : year,
    })
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, currentMonth: true, month, year })
  }
  for (let i = 1; days.length < 42; i++) {
    days.push({
      day: i,
      currentMonth: false,
      month: month + 1,
      year: month === 11 ? year + 1 : year,
    })
  }
  return days;
}