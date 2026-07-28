import { ReactNode } from "react"

import { IconType } from "@/components/F0Icon"
import { DataAttributes } from "@/global.types"
import { WithDataTestIdProps } from "@/lib/data-testid"
import { Localized } from "@/lib/localized"

export const audioPlayerSizes = ["sm", "md"] as const
export type F0AudioPlayerSize = (typeof audioPlayerSizes)[number]

export interface AudioPlayerMenuAction {
  label: string
  icon?: IconType
  onClick: () => void
  critical?: boolean
}

/**
 * @deprecated Prefer the structured `content` prop
 * ({@link AudioPlayerContent}). The raw tab array is still honoured for now for
 * backward compatibility, but will be removed in a future release.
 */
export interface AudioPlayerDetailTab {
  /** Stable value used to identify the tab. */
  value: string
  /** Visible (already translated) tab label, e.g. "Summary". */
  label: string
  /** Tab panel content, rendered inside a scrollable area. */
  content: ReactNode
}

/**
 * Structured detail content for {@link F0AudioPlayerCardProps.content}.
 *
 * Pass a `summary` and/or a `transcription` string and the card builds the
 * tabbed "View detail" panel for you, with labels pulled from translations
 * (`audioPlayer.summary` / `audioPlayer.transcription`) — you no longer wire up
 * the tabs yourself as with the deprecated `details` array.
 *
 * A transcription is what makes an audio-only recording accessible
 * (WCAG 2.1 SC 1.2.1, Audio-only). When you omit `transcription`, the card
 * still tries to derive one from the audio file's own text tracks; if none can
 * be passed or derived, the recording is flagged in the accessibility checks.
 *
 * Both fields are localizable — pass a per-locale list
 * (`[{ locale, label?, value }]`) to offer several languages, and a language
 * selector appears in the detail panel (a single selection drives both tabs).
 */
export interface AudioPlayerContent {
  /**
   * Plain-text summary of the recording, shown in the "Summary" tab.
   * Localizable.
   */
  summary?: Localized<string>
  /**
   * Plain-text transcription of the recording, shown in the "Transcription"
   * tab. Line breaks are preserved. When omitted, the card attempts to derive
   * a transcription from the audio file's embedded/attached text tracks.
   * Localizable.
   */
  transcription?: Localized<string>
}

export interface F0AudioPlayerProps
  extends WithDataTestIdProps, DataAttributes {
  /**
   * The audio source. Either a URL string, or a function that lazily resolves
   * the URL the first time playback is requested. Use the function form for
   * on-demand credentials (e.g. presigned URLs) so the URL is only fetched on
   * user intent.
   *
   * Localizable — pass a per-locale list of dubbed recordings to offer
   * selectable audio languages; a language selector then appears (in the card's
   * kebab menu, or inline on the bare player).
   */
  src: Localized<string | (() => Promise<string>)>

  /**
   * Initial language for localized content — the audio `src` and, on the card,
   * the detail `content` (summary/transcription). Matched against the provided
   * locales exactly or by primary subtag, then the viewer's browser language,
   * then the first provided. Only relevant when more than one language is given.
   */
  defaultLanguage?: string

  /**
   * Known total duration in seconds. Lets the player show the total time and an
   * active seek bar before the audio loads (e.g. with `preload="none"`).
   * Superseded by the real duration once metadata loads.
   */
  duration?: number

  /**
   * How much of the audio to preload.
   * @default "metadata" ("none" when `src` is a function)
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
   * Structured detail content revealed by a "View detail" toggle in the header:
   * a `summary` and/or a `transcription`. The card renders the tabs with
   * translated labels. Providing a `transcription` (or shipping one in the
   * audio file) keeps the recording accessible. Takes precedence over the
   * deprecated `details` prop when both are set.
   */
  content?: AudioPlayerContent

  /**
   * Tabbed detail content revealed by a "View detail" toggle in the header
   * (e.g. a Summary and a Transcript tab). When omitted or empty, no toggle and
   * no panel are rendered and the card behaves like a plain recording player.
   *
   * @deprecated Use the structured {@link F0AudioPlayerCardProps.content} prop
   * instead (`{ summary, transcription }`). This raw tab array is still
   * honoured for backward compatibility but will be removed in a future
   * release.
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
