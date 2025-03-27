import { CalendarDaysIcon } from "@heroicons/react/24/outline"
import {
  DAYS_OF_WEEK,
  ECalendarAction,
  EScheduleView,
  getDayOfWeek,
  getWeek,
  ICalendarAction,
  ICalendarState,
  IScheduleComponent,
} from "../types/Date.type"
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
  const thisWeek = getWeek(
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
          return (<SliderDay
            dayOfWeek={new Intl.DateTimeFormat("default", { month: "long" }).format(
              state.currentDate,
            ) + "" }
            dayOfMonth={currentDate.getDate() + ""}
            view={view}
            className={`hover:cursor-pointer bg-lightgrey [&_p]:text-ligthblack w-full`}
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
            className={`hover:cursor-pointer [&_p]:text-lightblack bg-lightgrey`}
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
      <div className={`pr-5 w-[calc(100%-4rem)] justify-between [&_div]:flex [&_div]:w-[calc(100%/)] gap-2 [&_div]:flex-col [&_div]:items-center [&_div]:justify-center [&_div]:rounded-xl [&_div]:px-[1rem] ${view === EScheduleView.DAY ? 'w-full [&_div]:h-full ' : 'grid grid-cols-7'}`}>
        {render(view)}
      </div>
    </div>
  )
}

export default Slider
