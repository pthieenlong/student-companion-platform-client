import { TaskType } from "../types/Date.type"
import { useDraggable } from "@dnd-kit/core"
const EventComponent = ({ task }: { task: TaskType }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  })
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        backgroundColor: `#f0f0f0`,
      }
    : undefined
  return (
    <div
      className={`h-[3rem] w-[25rem] cursor-grab rounded-lg bg-green-500 shadow-lg hover:shadow-md`}
      style={style}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      onClick={() => {
        console.log("on edit event")
      }}
    >
      <p className="text-black">{task.title}</p>
      <p className="text-black">{task.description}</p>
    </div>
  )
}

export default EventComponent
