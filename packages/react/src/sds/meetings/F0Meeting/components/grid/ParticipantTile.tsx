import { memo } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { Desktop, MicrophoneNegative, PushPin, PushPinSolid } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { cellRadiusStyle } from "../../layout/constants"
import { type F0MeetingTile } from "../../layout/tiles"
import { ConnectionQualityBars } from "./ConnectionQualityBars"
import { SpeakingIndicator } from "./SpeakingIndicator"
import { TileVideo } from "./TileVideo"

export type ParticipantTileProps = {
  tile: F0MeetingTile
  /** Compact tiles drop the chip text and the hover controls. */
  compact?: boolean
  /**
   * Corner radius in px, scaled to the tile's width by the grid. Omitted, the
   * tile falls back to square corners — always pass it from a laid-out grid.
   */
  radius?: number
  isFocused?: boolean
  canFocus?: boolean
  onToggleFocus?: (key: string) => void
}

const ParticipantTileBase = ({
  tile,
  compact = false,
  radius,
  isFocused = false,
  canFocus = false,
  onToggleFocus,
}: ParticipantTileProps) => {
  const i18n = useI18n()
  const { participant, track, kind } = tile
  const isScreenShare = kind === "screenShare"
  // Someone the call is still waiting for. They publish nothing, so there is
  // no video, no level to meter and no connection to rate — the tile says so
  // and shows none of the instrumentation that would all read as zero.
  const isInvited = participant.presence === "invited"
  const hasVideo = Boolean(track && track.live && !track.muted) && !isInvited
  /** Letterboxed rather than filled — so the bands need a backdrop. */
  const isContained = isScreenShare || Boolean(participant.preventCrop)
  const isMuted = !participant.tracks.some(
    (candidate) => candidate.kind === "microphone" && !candidate.muted
  )

  const label = participant.isLocal
    ? `${participant.name} (${i18n.meeting.you})`
    : participant.name

  return (
    <div
      className={cn(
        "group relative h-full w-full overflow-hidden",
        // In dark mode every cell is the same secondary surface. In light mode
        // a tile with no video keeps a dark plate — an avatar on the light
        // surface reads as a hole in the grid — while one carrying video sits
        // on the surface itself, with the border doing the work instead.
        "dark:bg-f1-background-secondary",
        hasVideo ? "bg-f1-background" : "bg-f1-foreground",
        "border border-solid border-f1-border-secondary"
      )}
      // Scaled to the tile rather than a fixed `rounded-xl`: at 90px wide a
      // 12px radius eats the corners, and the grid stops looking like the same
      // design at a different size. Shared with the overflow chip — see
      // `cellRadiusStyle`.
      style={cellRadiusStyle(radius)}
      data-testid="meeting-participant-tile"
      data-participant-id={participant.id}
    >
      {hasVideo && track ? (
        <TileVideo
          track={track}
          // Tiles take their cell's shape and crop the sides to fill it, so
          // anyone who opted out is letterboxed like a screen share.
          contain={isContained}
          mirrored={participant.isLocal && !isScreenShare}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 px-2">
          {participant.avatar ? (
            // A fixed 40px whatever the tile's size: the placeholder is an
            // identity, not a picture, so scaling it with the cell only makes
            // the thumbnails look like a different component.
            <F0Avatar avatar={participant.avatar} size="lg" />
          ) : null}
          {isInvited && !compact && (
            <span className="max-w-full truncate text-base text-f1-foreground-inverse-secondary">
              {i18n.meeting.waitingToJoin}
            </span>
          )}
        </div>
      )}

      {/* Over video the chip has to fight arbitrary imagery, so it gets a solid
          plate. Over the dark placeholder there is nothing to fight and the
          same plate reads as a smudge, so the text stands on its own. Its
          children inherit the colour from here. */}
      {!isInvited && (
        <div
          className={cn(
            "absolute left-3 top-3 flex items-center gap-1.5 overflow-hidden rounded-lg text-f1-foreground-inverse",
            // Room for the pin control in the opposite corner, so a long name
            // runs out of space before it runs under the button.
            canFocus ? "max-w-[calc(100%-4rem)]" : "max-w-[calc(100%-1.5rem)]",
            hasVideo && "bg-f1-foreground dark:bg-f1-background",
            compact ? "left-1.5 top-1.5 px-2 py-1" : "px-3 py-2"
          )}
        >
          {!compact && (
            // `min-w-0` is what lets the truncation actually happen: a flex
            // child will not shrink below its content width without it, so a
            // long name would spill out of the chip instead of ellipsing.
            <span className="min-w-0 truncate text-base font-medium">
              {isScreenShare
                ? `${label} · ${i18n.meeting.sharingScreen}`
                : label}
            </span>
          )}
          {isScreenShare ? (
            <F0Icon icon={Desktop} size="sm" />
          ) : isMuted ? (
            <F0Icon icon={MicrophoneNegative} size="sm" />
          ) : (
            <SpeakingIndicator
              participantId={participant.id}
              compact={compact}
            />
          )}
        </div>
      )}

      {!isInvited && (
        <div className="absolute bottom-3 right-3 text-f1-foreground-inverse">
          <ConnectionQualityBars
            participantId={participant.id}
            label={i18n.meeting.weakConnection}
          />
        </div>
      )}

      {canFocus && !isInvited && (
        // Present on thumbnails too, so moving the spotlight is one click on
        // the person you want rather than unpinning the current one first.
        <button
          type="button"
          onClick={() => onToggleFocus?.(tile.key)}
          aria-pressed={isFocused}
          className={cn(
            "absolute flex items-center justify-center rounded-md bg-f1-background/90 text-f1-foreground transition-opacity duration-150 ease-out",
            compact ? "right-1.5 top-1.5 h-6 w-6" : "right-3 top-3 h-8 w-8",
            // Always visible while pinned: the affordance that undoes a state
            // cannot itself be hidden behind a hover.
            isFocused
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100",
            focusRing()
          )}
        >
          {/* Solid glyph while pinned, outline when not — the same pair the
              chat uses for its pin action. */}
          <F0Icon icon={isFocused ? PushPinSolid : PushPin} size="sm" />
          <span className="sr-only">
            {isFocused
              ? i18n.meeting.unpinParticipant
              : i18n.meeting.pinParticipant}
          </span>
        </button>
      )}
    </div>
  )
}

/**
 * Memoized on scalar props derived by the grid. It must never read the full
 * runtime: the volatile signals are subscribed to by the leaves inside it, so
 * an audio burst cannot re-render the tile or the `<video>` it owns.
 */
export const ParticipantTile = memo(
  ParticipantTileBase,
  (previous, next) =>
    previous.tile.key === next.tile.key &&
    previous.tile.track?.bindingKey === next.tile.track?.bindingKey &&
    previous.tile.track?.live === next.tile.track?.live &&
    previous.tile.track?.muted === next.tile.track?.muted &&
    previous.tile.participant.name === next.tile.participant.name &&
    previous.tile.participant.avatar === next.tile.participant.avatar &&
    previous.tile.participant.tracks === next.tile.participant.tracks &&
    previous.tile.participant.presence === next.tile.participant.presence &&
    previous.tile.participant.preventCrop ===
      next.tile.participant.preventCrop &&
    previous.compact === next.compact &&
    previous.isFocused === next.isFocused &&
    previous.canFocus === next.canFocus &&
    previous.onToggleFocus === next.onToggleFocus
)
