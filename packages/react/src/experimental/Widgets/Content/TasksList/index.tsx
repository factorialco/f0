import { Task, TaskItem, TaskStatus } from "./TaskItem"

interface TasksList {
  todo?: (Task | string)[]
  inProgress?: (Task | string)[]
  done?: (Task | string)[]
}

export interface TasksListProps {
  tasks: TasksList
  maxTasksToShow?: number
  onClickTask?: (task: Task) => void
  emptyMessage?: string
  hideIcons?: boolean
}

export function TasksList({
  tasks,
  onClickTask,
  hideIcons = false,
  maxTasksToShow = 5,
  emptyMessage = "No tasks assigned",
}: TasksListProps) {
  const taskTypes: {
    key: "todo" | "inProgress" | "done"
    status: TaskStatus
  }[] = [
    { key: "todo", status: "todo" },
    { key: "inProgress", status: "in-progress" },
    { key: "done", status: "done" },
  ]

  const tasksToRender = taskTypes.flatMap(({ key, status }) =>
    (tasks[key] || [])
      .map((task) =>
        typeof task === "string"
          ? {
              id: task,
              text: task,
            }
          : task
      )
      .map(({ id, text, badge, counter }) => ({
        id,
        text,
        badge,
        counter,
        status: status,
      }))
  )

  const isEmpty = !tasksToRender.length

  return (
    <div className="flex flex-col gap-0">
      {isEmpty ? (
        <p className="pl-2 font-medium">{emptyMessage}</p>
      ) : (
        tasksToRender
          .slice(0, maxTasksToShow)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              status={task.status}
              hideIcon={hideIcons}
              onClick={onClickTask}
            />
          ))
      )}
    </div>
  )
}
