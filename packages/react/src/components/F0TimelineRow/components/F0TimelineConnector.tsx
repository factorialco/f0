import { cn } from "@/lib/utils"

import type { TimelineRowStatus } from "../types"

interface F0TimelineConnectorProps {
  /** The status determines the connector's color/style */
  status: TimelineRowStatus
}

export const F0TimelineConnector = ({ status }: F0TimelineConnectorProps) => (
  <div
    data-testid="timeline-connector"
    className={cn(
      "mt-1 w-0.5 min-h-2 flex-1",
      status === "completed" && "bg-f1-icon-positive",
      status === "in-progress" && "bg-f1-border-secondary",
      status === "not-started" &&
        "bg-[length:2px_6px] bg-repeat-y bg-[linear-gradient(to_bottom,_hsl(var(--neutral-20))_3px,_transparent_3px)]"
    )}
  />
)
