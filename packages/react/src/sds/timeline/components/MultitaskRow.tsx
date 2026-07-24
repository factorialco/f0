import type {
  F0TimelineRowMultitaskProps,
  F0TimelineRowMultitaskItemProps,
  F0TimelineRowNestedtaskProps,
} from "../types"

import { MultitaskHeader } from "./MultitaskHeader"
import { NestedtaskRow } from "./NestedtaskRow"
import { TaskRow } from "./TaskRow"
import { TimelineRowLayout } from "./TimelineRowLayout"

const isNestedtaskItem = (
  item: F0TimelineRowMultitaskItemProps
): item is F0TimelineRowNestedtaskProps =>
  "icon" in item &&
  item.icon !== undefined &&
  ("items" in item || "content" in item)

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
          {items.map((item, index: number) =>
            isNestedtaskItem(item) ? (
              <NestedtaskRow
                key={`${item.title}-${index}`}
                props={{
                  ...item,
                  hideStatus: true,
                  isLast: index === items.length - 1,
                }}
              />
            ) : (
              <TaskRow
                key={`${item.title}-${index}`}
                props={{
                  ...item,
                  hideStatus: true,
                  isLast: index === items.length - 1,
                }}
              />
            )
          )}
        </div>
      )}
    </TimelineRowLayout>
  )
}
