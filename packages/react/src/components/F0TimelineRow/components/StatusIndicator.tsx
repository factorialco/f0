import { F0Icon } from "@/components/F0Icon"
import CheckCircle from "@/icons/app/CheckCircle"
import CircleDashed from "@/icons/app/CircleDashed"
import ProgressClock from "@/icons/app/ProgressClock"

import type { TimelineRowStatus } from "../types"
import { IconContainer } from "./IconContainer"

const statusIcons = {
  completed: <F0Icon icon={CheckCircle} size="lg" color="positive" />,
  "in-progress": <F0Icon icon={ProgressClock} size="md" color="warning" />,
  "not-started": <F0Icon icon={CircleDashed} size="lg" color="secondary" />,
}

export const StatusIndicator = ({ status }: { status: TimelineRowStatus }) => (
  <IconContainer
    status={status}
    aria-hidden
    data-testid={`timeline-status-${status}`}
  >
    {statusIcons[status]}
  </IconContainer>
)
