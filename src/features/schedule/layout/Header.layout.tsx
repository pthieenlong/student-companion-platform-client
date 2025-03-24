import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import {
  ECalendarAction,
  ICalendarAction,
  ICalendarState,
} from "../types/Date.type"

const Header = ({
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
  return (
    <header className="flex w-full justify-between">
      <div className="font-noto-sans w-[20rem] text-3xl">
        <p className="w-fit">
          {new Intl.DateTimeFormat("default", { month: "long" }).format(
            state.currentDate,
          )}
          , {state.currentDate.getFullYear()}
        </p>
      </div>
      <div className="bg-lightgrey [&_button]:font-noto-sans m-auto flex w-[calc(4rem*3+1.75*2)] items-center justify-between gap-x-2 rounded-md px-[.5rem] py-[0.25rem] [&_button]:w-[7rem] [&_button]:text-center [&_button]:text-black">
        <button>Month</button>
        <button className={`rounded-md bg-[#fff] py-[0.25rem]`}>Week</button>
        <button>Day</button>
      </div>
      <div className="ml-auto flex w-[10rem] items-center gap-x-2 font-medium">
        <button
          className="bg-lightgrey rounded-md px-[.25rem] py-[.25rem] text-black hover:cursor-pointer"
          onClick={() => {
            dispatch({ type: ECalendarAction.DECREASE_DAY })
          }}
        >
          <ChevronLeftIcon width="1.5rem" />
        </button>
        <p className="font-noto-sans bg-lightgrey w-[7rem] rounded-md px-[.25rem] py-[.25rem] text-center">
          {`${state.currentDate.getDate() === today.getDate() && state.currentDate.getMonth() === today.getMonth() ? "Today" : `${state.currentDate.getDate()} ${new Intl.DateTimeFormat("default", { month: "short" }).format(state.currentDate)}`}`}
        </p>
        <button
          className="bg-lightgrey rounded-md px-[.25rem] py-[.25rem] text-black hover:cursor-pointer"
          onClick={() => {
            dispatch({ type: ECalendarAction.INCREASE_DAY })
          }}
        >
          <ChevronRightIcon width="1.5rem" />
        </button>
      </div>
    </header>
  )
}

export default Header
