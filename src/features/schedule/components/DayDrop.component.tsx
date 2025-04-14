import { TaskType } from "../types/Date.type"
import EventComponent from "./Event.component"
import { useDroppable } from "@dnd-kit/core"

const DayDropComponent = ({ tasks }: { tasks: TaskType[] }) => {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  })
  return (
    <div className="max-h-100% absolute z-20" ref={setNodeRef}>
      {tasks.map((task) => (
        <EventComponent key={task.id} task={task} />
      ))}
    </div>
  )
}

export default DayDropComponent
