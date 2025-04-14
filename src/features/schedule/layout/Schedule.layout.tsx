import { JSX } from "react"
import { IScheduleComponent, Day, EScheduleView } from "../types/Date.type"
import Header from "./Header.layout"
import Slider from "./Slider.layout"
import MonthLayout from "./Month.layout"
import DayLayout from "./Day.layout"
import WeekLayout from "./Week.layout"

const ScheduleLayout = ({
  today,
  month,
  year,
  days,
  daysInMonth,
  firstDayOfMonth,
  prevMonthDays,
  state,
  dispatch,
  currentDate,
  view,
  setView,
}: IScheduleComponent & {
  setView: React.Dispatch<React.SetStateAction<EScheduleView>>
  currentDate: Date
  days: Day[]
}) => {
  let calendarView: React.JSX.Element = <></>

  switch (view) {
    case EScheduleView.MONTH:
      calendarView = <MonthLayout days={days} today={today} />
      break
    case EScheduleView.WEEK:
      calendarView = <WeekLayout />
      break
    default:
      calendarView = <DayLayout />
      break
  }

  return (
    <>
      <div className="relative left-[20rem] w-[calc(100%-20rem)] px-[1.75rem] py-[1rem]">
        <div className=""></div>
        <Header
          today={today}
          month={month}
          year={year}
          prevMonthDays={prevMonthDays}
          firstDayOfMonth={firstDayOfMonth}
          daysInMonth={daysInMonth}
          state={state}
          dispatch={dispatch}
          view={view}
          setView={setView}
        />
        <Slider
          currentDate={currentDate}
          today={today}
          month={month}
          year={year}
          prevMonthDays={prevMonthDays}
          firstDayOfMonth={firstDayOfMonth}
          daysInMonth={daysInMonth}
          state={state}
          dispatch={dispatch}
          view={view}
        />
        <div
          className={`mt-[1rem] flex h-[42rem] max-h-screen w-full overflow-y-auto rounded-lg shadow-lg`}
          style={{ scrollbarWidth: "none" }}
        >
          {calendarView}
        </div>
      </div>
    </>
  )
}

export default ScheduleLayout
