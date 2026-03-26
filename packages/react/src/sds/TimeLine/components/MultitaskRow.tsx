import type {
  F0TimelineRowMultitaskProps,
  F0TimelineRowTaskProps,
} from "../types"

import { MultitaskHeader } from "./MultitaskHeader"
import { TaskRow } from "./TaskRow"
import { TimelineRowLayout } from "./TimelineRowLayout"

export const MultitaskRow = ({
  props,
}: {
  props: F0TimelineRowMultitaskProps
}) => {
  const { status, isLast = false, hideStatus = false, expanded, items } = props

  return (
    <TimelineRowLayout status={status} isLast={isLast} hideStatus={hideStatus}>
      <div className="flex min-h-8 items-center gap-2">
        <MultitaskHeader props={props} />
      </div>
      {expanded && (
        <div className="flex flex-col pl-4">
          {items.map((item: F0TimelineRowTaskProps, index: number) => (
            <TaskRow
              key={`${item.title}-${index}`}
              props={{
                ...item,
                hideStatus: true,
                isLast: index === items.length - 1,
              }}
            />
          ))}
        </div>
      )}
    </TimelineRowLayout>
  )
}
