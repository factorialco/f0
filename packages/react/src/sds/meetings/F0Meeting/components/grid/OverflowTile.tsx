import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { MicrophoneNegative, VideoRecorderNegative } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

import { type F0MeetingTile } from "../../layout/tiles"

const hasLiveCamera = (tile: F0MeetingTile): boolean =>
  Boolean(tile.track && tile.track.live && !tile.track.muted)

const isMuted = (tile: F0MeetingTile): boolean =>
  !tile.participant.tracks.some(
    (track) => track.kind === "microphone" && !track.muted
  )

/**
 * The "+N" cell.
 *
 * It is not a fixed slot: the solver decides how many people overflow from the
 * space actually available, so a small window degrades to a handful of readable
 * faces plus this chip instead of a mosaic of thumbnails. Hovering (or focusing
 * it with the keyboard) reveals exactly who is behind the number — a bare count
 * tells you a call is bigger than the screen and nothing else.
 */
export const OverflowTile = ({
  tiles,
  compact = false,
}: {
  tiles: F0MeetingTile[]
  compact?: boolean
}) => {
  const i18n = useI18n()

  if (tiles.length === 0) return null

  return (
    <HoverCard openDelay={120} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div className="bg-f1-background rounded-lg h-full w-full flex">
          <button
            type="button"
            className={cn(
              "border border-solid border-f1-border-secondary",
              "flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-lg",
              "bg-f1-background-secondary transition-colors duration-150 ease-out",
              "hover:bg-f1-background-secondary-hover focus-visible:bg-f1-background-secondary-hover",
              focusRing()
            )}
            data-testid="meeting-overflow-tile"
          >
            <span
              className={cn(
                "font-medium tabular-nums text-f1-foreground",
                compact ? "text-lg" : "text-2xl"
              )}
            >
              +{tiles.length}
            </span>
            {!compact && (
              <span className="sr-only">
                {i18n.t("meeting.morePeople", { count: String(tiles.length) })}
              </span>
            )}
          </button>
        </div>
      </HoverCardTrigger>

      <HoverCardContent
        align="center"
        side="top"
        className="w-64 border-none bg-f1-background p-2 text-f1-foreground"
      >
        <p className="px-1 pb-1 text-sm font-medium text-f1-foreground-secondary">
          {i18n.t("meeting.morePeople", { count: String(tiles.length) })}
        </p>
        {/* Long tails scroll instead of growing a card taller than the room. */}
        <ul className="max-h-64 list-none overflow-y-auto p-0">
          {tiles.map((tile) => (
            <li
              key={tile.key}
              className="flex items-center gap-2 rounded-md px-1 py-1"
            >
              {tile.participant.avatar && (
                <F0Avatar avatar={tile.participant.avatar} size="xs" />
              )}
              <span className="min-w-0 flex-1 truncate text-sm">
                {tile.participant.name}
              </span>
              {isMuted(tile) && (
                <F0Icon icon={MicrophoneNegative} size="sm" color="secondary" />
              )}
              {!hasLiveCamera(tile) && (
                <F0Icon
                  icon={VideoRecorderNegative}
                  size="sm"
                  color="secondary"
                />
              )}
            </li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  )
}
