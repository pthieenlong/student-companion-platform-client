import { useEffect, useReducer, useState } from "react"
import {
  ICalendarAction,
  ICalendarState,
  ECalendarAction,
  getDaysInMonth,
  getFirstDayOfMonth,
  EScheduleView,
  Day,
  get42Days,
} from "./types/Date.type"
import TinyCalendar from "./layout/TinyCalendar.layout"
import Header from "./layout/Header.layout"
import Slider from "./layout/Slider.layout"
import ScheduleLayout from "./layout/Schedule.layout"

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
    case ECalendarAction.INCREASE_WEEK: {
      state.currentDate.setDate(date.getDate() + 7)
      return { ...state }
    }
    case ECalendarAction.DECREASE_WEEK: {
      state.currentDate.setDate(date.getDate() - 7)
      return { ...state }
    }
    case ECalendarAction.SET_DAY: {
      state.currentDate.setDate(action.date?.getDate() as number);
      return { ...state }
    }
    default:
      return state
  }
}

const Schedule = () => {
  const today = new Date()
  const [state, dispatch] = useReducer(calendarReducer, {
    currentDate: new Date(),
  })
  const { currentDate } = state
  const [view, setView] = useState(EScheduleView.WEEK);
   
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month) || 7
  const prevMonthDays = getDaysInMonth(year, month - 1)

  const days = get42Days(firstDayOfMonth, prevMonthDays, month, year, daysInMonth);
  
  return (
    <div className="relative flex">
      <div className="fixed w-[20rem] bg-[#fff]">
        <TinyCalendar today={today} />
      </div>
      <ScheduleLayout
         today={today}
         month={month}
         year={year}
         days={days}
         prevMonthDays={prevMonthDays}
         firstDayOfMonth={firstDayOfMonth}
         daysInMonth={daysInMonth}
         state={state}
         dispatch={dispatch}
         view={view}
         setView={setView}
         currentDate={currentDate}
      />
    </div>
  )
}

export default Schedule
