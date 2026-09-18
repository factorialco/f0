import { forwardRef } from "react"

import { IndicatorsList } from "~/packages/react/experimental/Widgets/Content/IndicatorsList"
import { TasksList } from "~/packages/react/experimental/Widgets/Content/TasksList"
import { Widget } from "~/packages/react/experimental/Widgets/Widget"

export interface TasksInsightData {
  title: string
  inProgressTasks: string[]
  todoTasks: string[]
  overdueLabel: string
  overdueTasksCount: string
  dueLabel: string
  dueTasksCount: string
  noDueLabel: string
  noDueTasksCount: string
  linkUrl: string
  linkTitle: string
  handleNavigate: () => void
  buttonLabel?: string
}

export interface TasksInsightProps {
  data: TasksInsightData
}

export const TasksInsight = forwardRef<HTMLDivElement, TasksInsightProps>(
  function TasksInsight({ data }, ref) {
    const {
      title = "Tasks",
      inProgressTasks,
      dueTasksCount,
      noDueTasksCount,
      overdueTasksCount,
      todoTasks,
      linkUrl,
      linkTitle,
      buttonLabel,
      overdueLabel,
      dueLabel,
      noDueLabel,
      handleNavigate,
    } = data

    const taskCategories = [
      {
        label: overdueLabel,
        content: overdueTasksCount,
      },
      {
        label: dueLabel,
        content: dueTasksCount,
      },
      {
        label: noDueLabel,
        content: noDueTasksCount,
      },
    ]

    return (
      <Widget
        ref={ref}
        header={{
          title,
          link: { title: linkTitle, url: linkUrl },
        }}
        action={
          buttonLabel
            ? { label: buttonLabel, onClick: handleNavigate }
            : undefined
        }
      >
        <IndicatorsList items={taskCategories} />
        <div className="-mx-2">
          <TasksList
            tasks={{
              inProgress: inProgressTasks.map((task) => ({
                id: 1,
                text: task,
              })),
              todo: todoTasks.map((task) => ({
                id: 2,
                text: task,
              })),
            }}
            emptyMessage="No tasks assigned"
          />
        </div>
      </Widget>
    )
  }
)
