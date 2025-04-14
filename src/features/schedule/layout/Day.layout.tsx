import React from "react"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import TimelineComponent from "../components/Timeline.component"
import { Tasks, TaskType, Timeline, Timelines } from "../types/Date.type"
import useModal from "../hooks/useModal.hook"
import ModalComponent from "../components/Modal.component"

const DayLayout = () => {
  const { isShowing, toggle } = useModal()
  const [tasks, setTasks] = React.useState(Tasks)
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over) return
    const taskID = active.id as string
    const newTime = over.data?.current?.time as TaskType["time"]
    setTasks(() => {
      return tasks.map((task) => {
        return task.id === Number(taskID) ? { ...task, time: newTime } : task
      })
    })
  }

  return (
    <>
      <div className="mt-[0.2rem] h-fit w-[5rem]">
        {Timelines.map((timeline: Timeline, index) => {
          return (
            <div className="flex h-[5rem] justify-center" key={index}>
              {timeline.time}
            </div>
          )
        })}
      </div>
      <div className="relative mt-[1rem] flex w-[calc(100%-4rem)] flex-col gap-[0.25rem]">
        <DndContext onDragEnd={handleDragEnd}>
          <div className="max-h-100% w-full pr-5">
            {Timelines.map((timeline: Timeline) => {
              return (
                <TimelineComponent
                  tasks={tasks.filter((task) => task.time === timeline.time)}
                  timeline={timeline}
                  key={timeline.id}
                  onClick={toggle}
                />
              )
            })}
          </div>
          <ModalComponent isShowing={isShowing} hide={toggle} />
        </DndContext>
      </div>
    </>
  )
}

export default DayLayout
