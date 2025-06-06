import { DAYS_OF_WEEK, Day } from "../features/schedule/types/Date.type"

export const formatDate = (date: Date) => {
  let month = "" + (date.getMonth() + 1);
  let day = "" + date.getDate();
  const year = date.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("-");
}

export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}
export const getDaysInMonthString = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const days = [];

  while (date.getMonth() === month) {
    days.push(formatDate(new Date(date)));
    date.setDate(date.getDate() + 1);
  }
  return days;
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

export const get42Days = (
  firstDayOfMonth: number,
  prevMonthDays: number,
  month: number,
  year: number,
  daysInMonth: number,
): Day[] => {
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
  return days
}
