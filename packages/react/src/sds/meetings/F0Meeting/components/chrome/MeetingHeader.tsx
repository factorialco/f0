import { F0Avatar } from "@/components/avatars/F0Avatar"
import { cn } from "@/lib/utils"

import { useF0MeetingRoster } from "../../providers/F0MeetingProvider"
import { useMeetingSurface } from "../../providers/MeetingSurfaceProvider"
import { MeetingModeSwitch } from "./MeetingModeSwitch"
import { MeetingTimer } from "./MeetingTimer"

/**
 * The window's title bar. It is also the drag surface, so anything interactive
 * inside carries `data-f0-no-drag` to opt out of starting a gesture.
 *
 * Two compositions rather than one that scales: full screen leads with the
 * elapsed time because that is the thing you glance at from across a room,
 * while a panel or a floating window leads with the room's identity because
 * there are several of them on screen and you need to know which is which.
 */
export const MeetingHeader = ({ extra }: { extra?: React.ReactNode }) => {
  const { room } = useF0MeetingRoster()
  const { effectiveMode } = useMeetingSurface()

  const isMinimized = effectiveMode === "minimized"
  const isFullscreen = effectiveMode === "fullscreen"

  return (
    <>
      {isFullscreen ? (
        <span className="flex min-w-0 items-center gap-3 text-f1-foreground">
          <span className="shrink-0 font-medium tabular-nums">
            <MeetingTimer startedAt={room.startedAt} />
          </span>
          <span
            aria-hidden
            className="h-5 w-px shrink-0 bg-f1-border-secondary"
          />
          <span className="truncate text-lg font-semibold">{room.title}</span>
        </span>
      ) : (
        <span className="flex min-w-0 items-center gap-2 text-f1-foreground">
          {room.avatar && !isMinimized ? (
            <span className="shrink-0">
              <F0Avatar avatar={room.avatar} size="xs" />
            </span>
          ) : null}
          <span className="truncate text-base font-medium">{room.title}</span>
          {isMinimized && (
            <span className="shrink-0 text-f1-foreground-secondary tabular-nums">
              <MeetingTimer startedAt={room.startedAt} />
            </span>
          )}
        </span>
      )}

      <div
        className={cn("ml-auto flex shrink-0 items-center", "gap-1.5")}
        data-f0-no-drag
      >
        {extra}
        <MeetingModeSwitch />
      </div>
    </>
  )
}
