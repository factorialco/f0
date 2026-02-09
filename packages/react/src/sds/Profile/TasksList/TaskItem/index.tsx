import { useMemo } from "react"

import { Calendar, Completed, DottedCircle, InProgressTask } from "@/icons/app"
import { WidgetSimpleListItem } from "@/experimental/Widgets/Content/ListItems/WidgetSimpleListItem"

export type TaskStatus = "done" | "in-progress" | "todo"
export interface Task {
  id: number | string
  text: string
  badge?: { text: string; isPastDue?: boolean }
  counter?: number
}

export type TaskItemProps = {
  task: Task
  status: TaskStatus
  onClick?: (task: Task) => void
  hideIcon?: boolean
}

const iconMap = {
  done: Completed,
  "in-progress": InProgressTask,
  todo: DottedCircle,
}

const iconColorMap = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon",
}

export function TaskItem({
  task,
  status,
  onClick,
  hideIcon = false,
}: TaskItemProps) {
  const handleOnClick = () => {
    onClick?.(task)
  }

  const icon = useMemo(() => {
    if (hideIcon) return
    return iconMap[status]
  }, [status, hideIcon])

  return (
    <WidgetSimpleListItem
      id={task.id}
      title={task.text}
      icon={icon}
      iconClassName={iconColorMap[status]}
      alert={
        task.badge?.isPastDue
          ? {
              text: task.badge.text,
              level: "critical",
            }
          : undefined
      }
      rawTag={
        task.badge && !task.badge.isPastDue
          ? {
              text: task.badge.text,
              icon: Calendar,
            }
          : undefined
      }
      count={task.counter}
      onClick={handleOnClick}
    />
  )
}
