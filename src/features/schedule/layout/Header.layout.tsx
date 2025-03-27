import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import {
  Day,
  ECalendarAction,
  EScheduleView,
  ICalendarAction,
  ICalendarState,
  IScheduleComponent,
  MONTHS_OF_YEAR,
} from "../types/Date.type"


const DateTextComponent = ({view, state, today}:{view: EScheduleView, state: ICalendarState, today: Date}) => {
  switch (view) {
    case EScheduleView.DAY:
      return (<p className="font-noto-sans bg-lightgrey w-[7rem] rounded-md px-[.25rem] py-[.25rem] text-center">
          {`${state.currentDate.getDate() === today.getDate() && state.currentDate.getMonth() === today.getMonth() ? "Today" : `${state.currentDate.getDate()} ${new Intl.DateTimeFormat("default", { month: "short" }).format(state.currentDate)}`}`}
        </p>)
    case EScheduleView.WEEK:
      return (<p className="font-noto-sans bg-lightgrey w-[7rem] rounded-md px-[.25rem] py-[.25rem] text-center">
        {`${state.currentDate.getDate() === today.getDate() && state.currentDate.getMonth() === today.getMonth() ? "Today" : `${state.currentDate.getDate()} ${new Intl.DateTimeFormat("default", { month: "short" }).format(state.currentDate)}`}`}
      </p>)
      break;
    case EScheduleView.MONTH:
      return (<p className="font-noto-sans bg-lightgrey w-[7rem] rounded-md px-[.25rem] py-[.25rem] text-center">
       {new Intl.DateTimeFormat("default", { month: "short" }).format(state.currentDate)}
      </p>)
  }
}

const Header = ({
  today,
  month,
  year,
  daysInMonth,
  firstDayOfMonth,
  prevMonthDays,
  state,
  dispatch,
  view,
  setView,
}: IScheduleComponent & {
  setView: React.Dispatch<React.SetStateAction<EScheduleView>>,
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
        <button
          onClick={() => {
            setView(EScheduleView.MONTH)
          }}
          className={
            view === EScheduleView.MONTH
              ? `rounded-md bg-[#fff] py-[0.25rem]`
              : ""
          }
        >
          Month
        </button>
        <button
          onClick={() => {
            setView(EScheduleView.WEEK)
          }}
          className={
            view === EScheduleView.WEEK
              ? `rounded-md bg-[#fff] py-[0.25rem]`
              : ""
          }
        >
          Week
        </button>
        <button
          onClick={() => {
            setView(EScheduleView.DAY)
          }}
          className={
            view === EScheduleView.DAY
              ? `rounded-md bg-[#fff] py-[0.25rem]`
              : ""
          }
        >
          Day
        </button>
      </div>
      <div className="ml-auto flex w-[10rem] items-center gap-x-2 font-medium">
        <button
          className="bg-lightgrey rounded-md px-[.25rem] py-[.25rem] text-black hover:cursor-pointer"
          onClick={() => {
            switch (view) {
              case EScheduleView.DAY:
                dispatch({ type: ECalendarAction.DECREASE_DAY })
                break;
              case EScheduleView.WEEK:
                dispatch({ type: ECalendarAction.DECREASE_WEEK})
                break;
              case EScheduleView.MONTH:
                dispatch({ type: ECalendarAction.DECREASE_MONTH})
                break;
            }
          }}
        >
          <ChevronLeftIcon width="1.5rem" />
        </button>
        <DateTextComponent view={view} state={state} today={today}/>
        <button
          className="bg-lightgrey rounded-md px-[.25rem] py-[.25rem] text-black hover:cursor-pointer"
          onClick={() => {
            switch (view) {
              case EScheduleView.DAY:
                dispatch({ type: ECalendarAction.INCREASE_DAY })
                break;
              case EScheduleView.WEEK:
                dispatch({ type: ECalendarAction.INCREASE_WEEK})
                break;
              case EScheduleView.MONTH:
                dispatch({ type: ECalendarAction.INCREASE_MONTH})
                break;
            }
          }}
        >
          <ChevronRightIcon width="1.5rem" />
        </button>
      </div>
    </header>
  )
}

export default Header
