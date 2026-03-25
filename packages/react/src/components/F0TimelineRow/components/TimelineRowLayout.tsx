import type { ReactNode } from "react"

import type { TimelineRowStatus } from "../types"

import { F0TimelineConnector } from "./F0TimelineConnector"
import { StatusIndicator } from "./StatusIndicator"

export const TimelineRowLayout = ({
  status,
  isLast,
  hideStatus,
  children,
}: {
  status: TimelineRowStatus
  isLast: boolean
  hideStatus: boolean
  children: ReactNode
}) => (
  <div className="flex gap-4">
    {!hideStatus && (
      <div className="flex flex-col items-center">
        <StatusIndicator status={status} />
        {!isLast && <F0TimelineConnector status={status} />}
      </div>
    )}
    <div className="flex flex-1 flex-col gap-3 pb-5">{children}</div>
  </div>
)
