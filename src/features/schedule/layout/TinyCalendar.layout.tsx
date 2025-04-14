import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { useReducer } from "react"
import {
  Day,
  ECalendarAction,
  ICalendarAction,
  ICalendarState,
  DAYS_OF_WEEK,
} from "../types/Date.type"
import { getDaysInMonth, getFirstDayOfMonth } from "../../../utils/Date.utils"
const calendarReducer = (state: ICalendarState, action: ICalendarAction) => {
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
    default:
      return state
  }
}

const TinyCalendar = ({ today }: { today: Date }) => {
  const [state, dispatch] = useReducer(calendarReducer, {
    currentDate: new Date(),
  })
  const { currentDate } = state
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month) || 7
  const prevMonthDays = getDaysInMonth(year, month - 1)
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

  const renderDays = (days: Day[]) => {
    const rows = []
    for (let i = 0; i < days.length; i += 7) {
      rows.push(
        <tr key={i}>
          {days.slice(i, i + 7).map((day, index) => (
            <td
              key={index}
              className={`px-[.75rem] py-[0.25rem] text-center hover:cursor-pointer ${day.currentMonth ? "opacity-100" : "opacity-70"} ${day.day === today.getDate() && day.month === today.getMonth() ? "bg-blue rounded-lg text-white" : ""}`}
            >
              {day.day}
            </td>
          ))}
        </tr>,
      )
    }
    return rows
  }

  return (
    <section className="w-[20rem] rounded-2xl px-[1.25rem] py-[0.75rem] shadow-lg">
      <header className="flex justify-between">
        <div className="font-noto-sans flex gap-3 font-semibold">
          <p className="w-20">
            {new Intl.DateTimeFormat("default", { month: "long" }).format(
              state.currentDate,
            )}
          </p>
          <p>{state.currentDate.getFullYear()}</p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              dispatch({ type: ECalendarAction.DECREASE_MONTH })
            }}
            className="flex h-[1.75rem] w-[1.75rem] items-center justify-center rounded-lg bg-black text-white"
          >
            <ChevronLeftIcon width="1rem" />
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: ECalendarAction.INCREASE_MONTH })
            }}
            className="flex h-[1.75rem] w-[1.75rem] items-center justify-center rounded-lg bg-black text-white"
          >
            <ChevronRightIcon width="1rem" />
          </button>
        </div>
      </header>
      <table className="mt-[1rem] w-full">
        <thead>
          <tr>
            {DAYS_OF_WEEK.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderDays(days)}</tbody>
      </table>
    </section>
  )
}

export default TinyCalendar
