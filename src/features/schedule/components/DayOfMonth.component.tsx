import React from 'react'
import { Day, MONTHS_OF_YEAR } from '../types/Date.type'

const DayOfMonthComponent = ({day, today} : {
  day: Day,
  today: Date
}) => {
  return (
    <div className={`h-[6.5rem] flex justify-center items-center border-lightblack border-1 rounded-2xl font-noto-sans text-xl hover:cursor-pointer ${day.day === today.getDate() && day.month === today.getMonth() ? 'bg-blue text-lightgrey' : ''} ${!day.currentMonth ? 'text-gray-500' : ''}`}>
      <p>{day.day === 1 ? MONTHS_OF_YEAR[day.month] : ''} {day.day}</p>
    </div>
  )
}

export default DayOfMonthComponent