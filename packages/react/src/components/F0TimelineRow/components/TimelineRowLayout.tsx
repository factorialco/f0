import type { ReactNode } from "react"

import type { TimelineRowStatus } from "../types"

import { F0TimelineConnector } from "./F0TimelineConnector"
import { F0Icon } from "@/components/F0Icon"
import CheckCircle from "@/icons/app/CheckCircle"
import { DottedCircle, PartiallyCompleted } from "@/icons/app"

const statusIcons = {
  completed: <F0Icon icon={CheckCircle} color="positive" size="lg" />,
  "in-progress": <F0Icon icon={PartiallyCompleted} size="lg" color="warning" />,
  "not-started": <F0Icon icon={DottedCircle} size="lg" color="secondary" />,
}

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
        <div className="h-8 flex flex-col justify-center">
          {statusIcons[status]}
        </div>
        {!isLast && <F0TimelineConnector status={status} />}
      </div>
    )}
    <div className="flex flex-1 flex-col gap-3 pb-5">{children}</div>
  </div>
)
