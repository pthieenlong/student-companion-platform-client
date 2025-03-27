import React from "react"
import { EScheduleView } from "../types/Date.type"

interface ISliderDay {
  dayOfWeek: string
  dayOfMonth?: string | number
  view: string
  className?: string
  onClick?: React.MouseEventHandler
}

const SliderDay = ({
  className,
  dayOfWeek,
  view,
  dayOfMonth,
  onClick,
}: ISliderDay) => {
  switch (view) {
    case EScheduleView.MONTH:
      return (
        <div className={className} onClick={onClick}>
          <p className={`text-4xl font-bold`}>{dayOfWeek}</p>
        </div>
      )
    default: {
      return (
        <div className={className} onClick={onClick}>
          <p className={`text-lg}`}>{dayOfWeek}</p>
          <p className={`text-4xl font-bold`}>{dayOfMonth}</p>
        </div>
      )
    }
  }
}

export default SliderDay
