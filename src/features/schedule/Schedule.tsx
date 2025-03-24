import { useReducer } from "react"
import {
  ICalendarAction,
  ICalendarState,
  ECalendarAction,
  getDaysInMonth,
  getFirstDayOfMonth,
  Day,
} from "./types/Date.type"
import TinyCalendar from "./layout/TinyCalendar.layout"
import Header from "./layout/Header.layout"
import Slider from "./layout/Slider.layout"

const calendarReducer = (
  state: ICalendarState,
  action: ICalendarAction,
): ICalendarState => {
  const date = state.currentDate
  switch (action.type) {
    case ECalendarAction.INCREASE_MONTH: {
      state.currentDate.setMonth(date.getMonth() + 1)
      return { ...state }
    }
    case ECalendarAction.DECREASE_MONTH: {
      state.currentDate.setMonth(date.getMonth() - 1)
      return { ...state }
    }
    case ECalendarAction.DECREASE_DAY: {
      state.currentDate.setDate(date.getDate() - 1)
      return { ...state }
    }
    case ECalendarAction.INCREASE_DAY: {
      state.currentDate.setDate(date.getDate() + 1)
      return { ...state }
    }
    default:
      return state
  }
}

const Schedule = () => {
  const [state, dispatch] = useReducer(calendarReducer, {
    currentDate: new Date(),
  })

  const { currentDate } = state
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month) || 7
  const prevMonthDays = getDaysInMonth(year, month - 1)

  const today = new Date()

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

  return (
    <div className="relative flex">
      <div className="fixed w-[20rem] bg-[#fff]">
        <TinyCalendar today={today} />
      </div>
      <div className="sticky left-[20rem] h-[100rem] w-[calc(100%-20rem)] px-[1.75rem] py-[1rem]">
        <Header
          today={today}
          month={month}
          year={year}
          prevMonthDays={prevMonthDays}
          firstDayOfMonth={firstDayOfMonth}
          daysInMonth={daysInMonth}
          state={state}
          dispatch={dispatch}
        />
      </div>
    </div>
  )
}

export default Schedule
