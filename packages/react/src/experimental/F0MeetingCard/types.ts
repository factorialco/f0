import type { CardSecondaryAction } from "@/components/F0Card/components/CardActions"
import { DataAttributes } from "@/global.types"
import { WithDataTestIdProps } from "@/lib/data-testid"

/**
 * Lifecycle of the meeting. It is always **controlled** — only the backend knows
 * whether a meeting really started, ended or is still being summarised, so the
 * card never infers it from the clock. Time-derived presentation (the countdown,
 * the elapsed label, whether Join is actionable) is computed from `startsAt` and
 * `now`.
 */
export const meetingStates = [
  "scheduled",
  "inProgress",
  "summarizing",
  "finished",
  "cancelled",
] as const

export type MeetingState = (typeof meetingStates)[number]

export const attendeesDisplays = ["auto", "avatars", "count"] as const

export type AttendeesDisplay = (typeof attendeesDisplays)[number]

/**
 * A meeting participant. Internal attendees are employees, so they carry a
 * first/last name and an optional picture. External attendees are identified by
 * whatever the invitation exposed — a display name, an email, or both — and
 * always render as initials.
 */
export type MeetingAttendee =
  | {
      type: "internal"
      firstName: string
      lastName: string
      src?: string
      email?: string
    }
  | {
      type: "external"
      name?: string
      email?: string
    }

export interface MeetingJoin {
  /** Called when the Join button is pressed. */
  onJoin?: () => void
  /** Navigates to the meeting room instead of handling the click. */
  href?: string
  /**
   * How many minutes before `startsAt` the meeting can be joined.
   * @default 10
   */
  windowMinutes?: number
  /**
   * Forces the button into its disabled state regardless of the join window —
   * e.g. while the room is still being provisioned.
   */
  disabled?: boolean
  /** Overrides the default "Join" label. */
  label?: string
}

export interface F0MeetingCardProps
  extends WithDataTestIdProps, DataAttributes {
  /** Lifecycle of the meeting. See {@link meetingStates}. */
  state: MeetingState

  /**
   * The meeting title. When omitted, an in-progress meeting falls back to the
   * "Call in progress" headline so the row still says what it is.
   */
  title?: string

  /**
   * Dense layout for embedding the card inline or in a tight list: the headline
   * and the relative time sit on one line (wrapping when they don't fit),
   * attendees shrink to `xs`, and the footer band is dropped so the state travels
   * with the headline. The join button keeps the same emphasis as in the regular
   * layout.
   * @default false
   */
  compact?: boolean

  /** When the meeting starts. Drives the date line, the countdown and the join window. */
  startsAt: Date

  /** When the meeting ends. Only used for the duration label. */
  endsAt?: Date

  /**
   * Reference instant for every time-derived label. Defaults to the current time
   * at render — the card never ticks on its own, so pass a fixed value to keep
   * stories and tests deterministic, and re-render to refresh.
   */
  now?: Date

  /**
   * Known attendees, internal and external. May be a subset of the real
   * invitation list — pass `invitedCount` for the true total.
   */
  attendees?: MeetingAttendee[]

  /** Total number of invited people, when `attendees` is a truncated list. */
  invitedCount?: number

  /** How many attendees are currently in the meeting. Only used while in progress. */
  presentCount?: number

  /**
   * Whether attendees render as stacked avatars or as a plain count.
   * `"auto"` shows avatars while the meeting is in progress (who is in the room
   * matters) and a count otherwise (how many were invited matters).
   * @default "auto"
   */
  attendeesDisplay?: AttendeesDisplay

  /**
   * How many avatars to show before collapsing the rest into a `+N` counter.
   * @default 3
   */
  maxAvatars?: number

  /**
   * Short recap of the meeting. Rendered in full, and only once the meeting is
   * `finished`.
   */
  summary?: string

  /** Join affordance. Only rendered while the meeting is scheduled or in progress. */
  join?: MeetingJoin

  /**
   * Extra footer buttons — e.g. a "Transcript" action whose destination the
   * consumer owns.
   */
  secondaryActions?: CardSecondaryAction[]
}
