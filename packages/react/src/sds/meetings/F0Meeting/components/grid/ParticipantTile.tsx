import { memo } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { Desktop, MicrophoneNegative, PushPin, PushPinSolid } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { type F0MeetingTile } from "../../layout/tiles"
import { ConnectionQualityBars } from "./ConnectionQualityBars"
import { SpeakingIndicator } from "./SpeakingIndicator"
import { TileVideo } from "./TileVideo"

export type ParticipantTileProps = {
  tile: F0MeetingTile
  /** Compact tiles drop the chip text and the hover controls. */
  compact?: boolean
  isFocused?: boolean
  canFocus?: boolean
  onToggleFocus?: (key: string) => void
}

const ParticipantTileBase = ({
  tile,
  compact = false,
  isFocused = false,
  canFocus = false,
  onToggleFocus,
}: ParticipantTileProps) => {
  const i18n = useI18n()
  const { participant, track, kind } = tile
  const isScreenShare = kind === "screenShare"
  const hasVideo = Boolean(track && track.live && !track.muted)
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
        "group relative h-full w-full overflow-hidden rounded-lg",
        // Letterboxed video sits on black whatever the theme is — the bands
        // read as part of the shared screen rather than as a gap in the UI.
        hasVideo && isContained
          ? "bg-f1-background-inverse"
          : "bg-f1-background-secondary",
        !hasVideo && "border border-solid border-f1-border-secondary"
      )}
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
        <div className="flex h-full w-full items-center justify-center">
          {participant.avatar ? (
            <F0Avatar
              avatar={participant.avatar}
              size={compact ? "md" : "xl"}
            />
          ) : null}
        </div>
      )}

      {/* Over video the chip has to fight arbitrary imagery, so it goes dark
          with light text whatever the theme is. Over the avatar placeholder
          there is no imagery to fight and the same treatment reads as a dark
          smudge, so it follows the surface instead. Its children inherit the
          colour from here. */}
      <div
        className={cn(
          "absolute left-2 top-2 flex items-center gap-1.5 overflow-hidden rounded-md px-2 py-1",
          // Room for the pin control in the opposite corner, so a long name
          // runs out of space before it runs under the button.
          canFocus ? "max-w-[calc(100%-3rem)]" : "max-w-[calc(100%-1rem)]",
          hasVideo
            ? "bg-f1-background-inverse/80 text-f1-foreground-inverse"
            : "text-f1-foreground",
          compact && "left-1 top-1 px-1.5 py-0.5"
        )}
      >
        {!compact && (
          // `min-w-0` is what lets the truncation actually happen: a flex child
          // will not shrink below its content width without it, so a long name
          // would spill out of the chip instead of ellipsing.
          <span className="min-w-0 truncate text-sm font-medium">
            {isScreenShare ? `${label} · ${i18n.meeting.sharingScreen}` : label}
          </span>
        )}
        {isScreenShare ? (
          <F0Icon icon={Desktop} size="sm" />
        ) : isMuted ? (
          <F0Icon icon={MicrophoneNegative} size="sm" />
        ) : (
          <SpeakingIndicator participantId={participant.id} compact={compact} />
        )}
      </div>

      <div
        className={cn(
          "absolute bottom-2 right-2",
          // Same rule as the chip: the bars are drawn in `currentColor`.
          hasVideo
            ? "text-f1-foreground-inverse"
            : "text-f1-foreground-secondary"
        )}
      >
        <ConnectionQualityBars
          participantId={participant.id}
          label={i18n.meeting.weakConnection}
        />
      </div>

      {canFocus && (
        // Present on thumbnails too, so moving the spotlight is one click on
        // the person you want rather than unpinning the current one first.
        <button
          type="button"
          onClick={() => onToggleFocus?.(tile.key)}
          aria-pressed={isFocused}
          className={cn(
            "absolute flex items-center justify-center rounded-md bg-f1-background/90 text-f1-foreground transition-opacity duration-150 ease-out",
            compact ? "right-1 top-1 h-6 w-6" : "right-2 top-2 h-7 w-7",
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
    previous.tile.participant.preventCrop ===
      next.tile.participant.preventCrop &&
    previous.compact === next.compact &&
    previous.isFocused === next.isFocused &&
    previous.canFocus === next.canFocus &&
    previous.onToggleFocus === next.onToggleFocus
)
