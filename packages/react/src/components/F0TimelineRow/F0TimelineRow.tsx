import { forwardRef, useId } from "react"

import type {
  F0TimelineRowMultitaskProps,
  F0TimelineRowProps,
  F0TimelineRowTaskProps,
} from "./types"

import { F0TimelineConnector } from "./components/F0TimelineConnector"
import { MultitaskHeader } from "./components/MultitaskHeader"
import { StatusIndicator } from "./components/StatusIndicator"
import { TaskDetails } from "./components/TaskDetails"
import { TaskHeader } from "./components/TaskHeader"

export const F0TimelineRow = forwardRef<HTMLDivElement, F0TimelineRowProps>(
  (props, ref) => {
    const { status, isLast = false, hideStatus = false } = props
    const isMultitask = "items" in props
    const contentId = useId()

    return (
      <div ref={ref} className="flex gap-4">
        {/* Status indicator + vertical connector */}
        {!hideStatus && (
          <div className="flex flex-col items-center">
            <StatusIndicator status={status} />
            {!isLast && <F0TimelineConnector status={status} />}
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 pb-5">
          <div className="flex min-h-7 items-center gap-2">
            {isMultitask ? (
              <MultitaskHeader
                props={props as F0TimelineRowMultitaskProps}
                contentId={contentId}
              />
            ) : (
              <TaskHeader props={props as F0TimelineRowTaskProps} />
            )}
          </div>

          {!isMultitask && status !== "completed" && (
            <TaskDetails props={props as F0TimelineRowTaskProps} />
          )}

          {isMultitask && (props as F0TimelineRowMultitaskProps).expanded && (
            <div id={contentId} className="flex flex-col pl-4">
              {(props as F0TimelineRowMultitaskProps).items.map(
                (item, index) => (
                  <F0TimelineRow
                    key={`${item.title}-${index}`}
                    {...item}
                    hideStatus
                    isLast={
                      index ===
                      (props as F0TimelineRowMultitaskProps).items.length - 1
                    }
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)

F0TimelineRow.displayName = "F0TimelineRow"
