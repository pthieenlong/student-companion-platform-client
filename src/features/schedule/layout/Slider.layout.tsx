import { CalendarDaysIcon } from "@heroicons/react/24/outline"
import { DAYS_OF_WEEK, getDayOfWeek, ICalendarAction, ICalendarState, splitMonthIntoWeeks } from "../types/Date.type"
import React from "react"
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
}: {
  today: Date
  month: number
  year: number
  daysInMonth: number
  firstDayOfMonth: number
  prevMonthDays: number
  state: ICalendarState
  dispatch: React.ActionDispatch<[action: ICalendarAction]>
}) => {
  const daysArray = [
    {
      dayOfWeek: "Monday",
      dayOfMonth: 16,
    },
    {
      dayOfWeek: "Tuesday",
      dayOfMonth: 17,
    },
    {
      dayOfWeek: "Wednesday",
      dayOfMonth: 18,
    },
    {
      dayOfWeek: "Thursday",
      dayOfMonth: 19,
    },
    {
      dayOfWeek: "Friday",
      dayOfMonth: 20,
    },
    {
      dayOfWeek: "Saturday",
      dayOfMonth: 21,
    },
    {
      dayOfWeek: "Sunday",
      dayOfMonth: 22,
    },
  ]

  return (
    <div className="mt-[1rem] flex h-[7rem] w-full">
      <div className="flex h-full w-[5rem] items-center justify-center">
        <CalendarDaysIcon width="2rem" />
      </div>
      <div className="[&_div]:bg-lightgrey flex w-[calc(100%-4rem)] justify-between [&_div]:flex [&_div]:w-[calc(100%/7-1rem)] [&_div]:flex-col [&_div]:items-center [&_div]:justify-center [&_div]:rounded-xl [&_div]:px-[1rem]">
        {daysArray.map((day, index) => (
          <SliderDay key={index} dayOfWeek={day.dayOfWeek} dayOfMonth={day.dayOfMonth}/>
        ))}
      </div>
    </div>
  )
}

export default Slider
