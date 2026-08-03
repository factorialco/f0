import type { F0TimelineRowTaskProps } from "../types"

import { TaskDetails } from "./TaskDetails"
import { TaskHeader } from "./TaskHeader"
import { TimelineRowLayout } from "./TimelineRowLayout"

export const TaskRow = ({ props }: { props: F0TimelineRowTaskProps }) => {
  const { status, isLast = false, hideStatus = false } = props

  return (
    <TimelineRowLayout status={status} isLast={isLast} hideStatus={hideStatus}>
      <div className="flex min-h-8 items-center gap-2">
        <TaskHeader props={props} />
      </div>
      {status !== "completed" && <TaskDetails props={props} />}
    </TimelineRowLayout>
  )
}
