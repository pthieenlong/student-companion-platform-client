import { CalendarDaysIcon } from "@heroicons/react/24/outline"
import {
  ECalendarAction,
  EScheduleView,
  IScheduleComponent,
} from "../types/Date.type"
import * as DateUtils from "../../../utils/Date.utils"
import SliderDay from "../components/SliderDay.component"

const Slider = ({
  today,
  month,
  year,
  daysInMonth,
  firstDayOfMonth,
  prevMonthDays,
  state,
  dispatch,
  view,
  currentDate,
}: IScheduleComponent & { currentDate: Date }) => {
  const thisWeek = DateUtils.getWeek(
    currentDate.getDate(),
    currentDate.getMonth(),
    currentDate.getFullYear(),
  )

  const render = (view: EScheduleView) => {
    switch (view) {
      case EScheduleView.WEEK:
        return thisWeek.map((day, index) => (
          <SliderDay
            key={index}
            dayOfWeek={day.day}
            dayOfMonth={day.date}
            view={view}
            onClick={() => {
              dispatch({ type: ECalendarAction.SET_DAY, date: day.DateType })
            }}
            className={`hover:cursor-pointer ${day.date === currentDate.getDate() ? "bg-black [&_p]:text-white" : "[&_p]:text-lightblack bg-lightgrey"}`}
          />
        ))
      case EScheduleView.DAY:
        return (
          <SliderDay
            dayOfWeek={
              new Intl.DateTimeFormat("default", { month: "long" }).format(
                state.currentDate,
              ) + ""
            }
            dayOfMonth={currentDate.getDate() + ""}
            view={view}
            className={`bg-lightgrey [&_p]:text-ligthblack w-full hover:cursor-pointer`}
          />
        )
      case EScheduleView.MONTH:
        return thisWeek.map((day, index) => (
          <SliderDay
            key={index}
            dayOfWeek={day.day}
            view={view}
            onClick={() => {
              dispatch({ type: ECalendarAction.SET_DAY, date: day.DateType })
            }}
            className={`[&_p]:text-lightblack bg-lightgrey hover:cursor-pointer`}
          />
        ))
      default:
        break
    }
  }

  return (
    <div className="mt-[1rem] flex h-[7rem] w-full">
      <div className="flex h-full w-[5rem] items-center justify-center">
        <CalendarDaysIcon width="2rem" />
      </div>
      <div
        className={`w-[calc(100%-4rem)] justify-between gap-2 pr-5 [&_div]:flex [&_div]:w-[calc(100%/)] [&_div]:flex-col [&_div]:items-center [&_div]:justify-center [&_div]:rounded-xl [&_div]:px-[1rem] ${view === EScheduleView.DAY ? "w-full [&_div]:h-full" : "grid grid-cols-7"}`}
      >
        {render(view)}
      </div>
    </div>
  )
}

export default Slider
