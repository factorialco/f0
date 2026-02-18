import { useMemo } from "react"

import {
  Calendar,
  DottedCircle,
  InProgressTask,
} from "../../../../../icons/app"
import { WidgetSimpleListItem } from "../../ListItems/WidgetSimpleListItem"

export type TaskStatus = "in-progress" | "todo"
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

    if (status === "todo") {
      return DottedCircle
    }
    if (status === "in-progress") {
      return InProgressTask
    }
  }, [status, hideIcon])

  return (
    <WidgetSimpleListItem
      id={task.id}
      title={task.text}
      icon={icon}
      iconClassName={status === "todo" ? "text-f1-icon" : "text-f1-icon-info"}
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
