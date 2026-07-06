import { ReactNode } from "react"

import { IconType } from "@/components/F0Icon"
import { DataAttributes } from "@/global.types"
import { WithDataTestIdProps } from "@/lib/data-testid"

export const audioPlayerSizes = ["sm", "md"] as const
export type F0AudioPlayerSize = (typeof audioPlayerSizes)[number]

export interface AudioPlayerMenuAction {
  label: string
  icon?: IconType
  onClick: () => void
  critical?: boolean
}

export interface AudioPlayerDetailTab {
  /** Stable value used to identify the tab. */
  value: string
  /** Visible (already translated) tab label, e.g. "Summary". */
  label: string
  /** Tab panel content, rendered inside a scrollable area. */
  content: ReactNode
}

export interface F0AudioPlayerProps
  extends WithDataTestIdProps, DataAttributes {
  /**
   * The audio source URL.
   */
  src: string

  /**
   * How much of the audio to preload.
   * @default "metadata"
   */
  preload?: "none" | "metadata" | "auto"

  /**
   * Start playing as soon as the audio is ready.
   * @default false
   */
  autoPlay?: boolean

  /**
   * Controlled playing state. Pair with `onPlayingChange`.
   */
  playing?: boolean

  /**
   * Initial playing state when uncontrolled.
   * @default false
   */
  defaultPlaying?: boolean

  /**
   * Fired when the playing state changes (play or pause).
   */
  onPlayingChange?: (playing: boolean) => void

  /**
   * Playback rates offered in the speed menu. Pass an empty array to hide the
   * speed options.
   * @default [1, 1.5, 2]
   */
  playbackRates?: number[]

  /**
   * Fired when playback starts.
   */
  onPlay?: () => void

  /**
   * Fired when playback pauses.
   */
  onPause?: () => void

  /**
   * Fired when the user seeks, with the target position in seconds.
   */
  onSeek?: (seconds: number) => void

  /**
   * Fired on every time update, with the current position in seconds.
   */
  onTimeUpdate?: (seconds: number) => void

  /**
   * Fired when playback reaches the end.
   */
  onEnded?: () => void

  /**
   * Fired when the audio fails to load or play.
   */
  onError?: (error: MediaError | null) => void

  /**
   * Disables all controls.
   * @default false
   */
  disabled?: boolean

  /**
   * Accessible label for the player region.
   */
  ariaLabel?: string

  /**
   * The size of the player.
   * @default "md"
   */
  size?: F0AudioPlayerSize

  className?: string
}

export interface F0AudioPlayerCardProps extends F0AudioPlayerProps {
  /**
   * The title shown in the card header (e.g. "AI Call with Alex Williams").
   */
  title: string

  /**
   * An optional subtitle shown under the title (e.g. "May 9, 2025 - 10:00am").
   */
  subtitle?: string

  /**
   * Extra actions appended to the kebab menu below the playback-speed options
   * (after a separator) — e.g. a download or copy-link action. The kebab itself
   * is always rendered by the card.
   */
  actions?: AudioPlayerMenuAction[]

  /**
   * Tabbed detail content revealed by a "View detail" toggle in the header
   * (e.g. a Summary and a Transcript tab). When omitted or empty, no toggle and
   * no panel are rendered and the card behaves like a plain recording player.
   */
  details?: AudioPlayerDetailTab[]

  /**
   * Controlled expanded state of the detail panel. Pair with
   * `onExpandedChange`.
   */
  expanded?: boolean

  /**
   * Initial expanded state of the detail panel when uncontrolled.
   * @default false
   */
  defaultExpanded?: boolean

  /**
   * Fired when the detail panel expands or collapses.
   */
  onExpandedChange?: (expanded: boolean) => void

  /**
   * Max height (in pixels) of the scrollable detail area before it scrolls.
   * @default 200
   */
  detailsMaxHeight?: number
}
