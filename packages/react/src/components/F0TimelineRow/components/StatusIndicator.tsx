import { F0Icon } from "@/components/F0Icon"
import CheckCircle from "@/icons/app/CheckCircle"
import CircleDashed from "@/icons/app/CircleDashed"
import ProgressClock from "@/icons/app/ProgressClock"

import type { TimelineRowStatus } from "../types"

const CompletedIcon = () => (
  <F0Icon icon={CheckCircle} size="lg" color="positive" />
)

const InProgressIcon = () => (
  <F0Icon icon={ProgressClock} size="md" color="warning" />
)

const NotStartedIcon = () => (
  <F0Icon icon={CircleDashed} size="lg" color="secondary" />
)

export const StatusIndicator = ({ status }: { status: TimelineRowStatus }) => {
  if (status === "completed") {
    return (
      <div
        className="flex h-7 w-7 items-center justify-center"
        aria-hidden
        data-testid={`timeline-status-${status}`}
      >
        <CompletedIcon />
      </div>
    )
  }

  if (status === "in-progress") {
    return (
      <div
        className="flex h-7 w-7 items-center justify-center"
        aria-hidden
        data-testid={`timeline-status-${status}`}
      >
        <InProgressIcon />
      </div>
    )
  }

  return (
    <div
      className="flex h-7 w-7 items-center justify-center"
      aria-hidden
      data-testid={`timeline-status-${status}`}
    >
      <NotStartedIcon />
    </div>
  )
}
