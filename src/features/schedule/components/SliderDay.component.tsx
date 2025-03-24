import React from 'react'

interface ISliderDay {
  dayOfWeek: string;
  dayOfMonth: string | number;
  className?: string;
  key?: React.Key;
}

const SliderDay = ({ className, key, dayOfWeek, dayOfMonth }: ISliderDay) => {
  return (
    <div className={className} key={key}>
      <p className="text-lightblack text-lg">{dayOfWeek}</p>
      <p className="text-4xl font-bold">{dayOfMonth}</p>
    </div>
  )
}

export default SliderDay