import { TaskType, Timeline } from "../types/Date.type"
import { useDroppable } from "@dnd-kit/core"
import EventComponent from "./Event.component"
import { useState } from "react"

type TimelineProps = {
  timeline: Timeline
  tasks: TaskType[]
  onClick?: React.MouseEventHandler<HTMLElement>
}

const TimelineComponent = ({ timeline, tasks, onClick }: TimelineProps) => {
  const { setNodeRef } = useDroppable({
    id: timeline.id,
    data: { time: timeline.time },
  })
  return (
    <div
      key={timeline.id}
      className="grid h-[5rem] w-full grid-cols-7 border-b-1 first:border-t-1 last:border-b-0"
      ref={setNodeRef}
      onClick={onClick}
    >
      {tasks.map((task) => {
        return <EventComponent key={task.id} task={task} />
      })}
    </div>
  )
}

export default TimelineComponent
