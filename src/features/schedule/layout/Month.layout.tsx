import React from 'react'
import DayOfMonthComponent from '../components/DayOfMonth.component';
import { Day } from '../types/Date.type';

const render = (days: Day[], today: Date) => {
  const rows = [];
  for (let i = 0; i < days.length; i += 7) {
    rows.push(
      <div key={i} className="grid justify-between grid-cols-7 gap-2 pr-5">
        {
          days.slice(i, i + 7).map((day, index) => (
            <DayOfMonthComponent day={day} today={today} key={index}/>
          ))
        }
      </div>
      )
  }
  return rows;
}  

const MonthLayout = ({days, today} : {  days: Day[], today: Date}) => {
  return (
    <>
      <div className="w-[5rem] opacity-100 h-fit">
              
      </div>
      <div className="w-[calc(100%-4rem)] flex flex-col gap-[0.25rem] mt-[1rem] ">
        {render(days, today)}
      </div>
    </>
  )
}

export default MonthLayout