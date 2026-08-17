import { cn } from "@/lib/utils"

import { useF0MeetingRoster } from "../../providers/F0MeetingProvider"
import { useMeetingSurface } from "../../providers/MeetingSurfaceProvider"
import { MeetingModeSwitch } from "./MeetingModeSwitch"
import { MeetingTimer } from "./MeetingTimer"

/**
 * The window's title bar. It is also the drag surface, so anything interactive
 * inside carries `data-f0-no-drag` to opt out of starting a gesture.
 */
export const MeetingHeader = ({ extra }: { extra?: React.ReactNode }) => {
  const { room, participants } = useF0MeetingRoster()
  const { effectiveMode } = useMeetingSurface()

  const isMinimized = effectiveMode === "minimized"
  const isFullscreen = effectiveMode === "fullscreen"
  const people = participants.filter(
    (participant) => !participant.isAgent
  ).length

  return (
    <>
      <span
        className={cn(
          "shrink-0 rounded-full bg-f1-icon-positive",
          isFullscreen ? "h-2.5 w-2.5" : "h-2 w-2"
        )}
        aria-hidden
      />

      <span
        className={cn(
          "flex min-w-0 items-baseline gap-2 text-f1-foreground",
          isFullscreen ? "gap-3 text-lg" : "text-sm"
        )}
      >
        <span className="truncate font-medium">{room.title}</span>
        {!isMinimized && (
          <span className="shrink-0 text-f1-foreground-secondary">
            {people}
          </span>
        )}
        <span className="shrink-0 text-f1-foreground-secondary">
          <MeetingTimer startedAt={room.startedAt} />
        </span>
      </span>

      <div className="ml-auto flex shrink-0 items-center gap-1" data-f0-no-drag>
        {extra}
        <MeetingModeSwitch />
      </div>
    </>
  )
}
