import { WithDataTestIdProps } from "@/lib/data-testid"

export const starRatingSizes = ["sm", "md", "lg"] as const
export type StarRatingSize = (typeof starRatingSizes)[number]

export interface F0StarRatingProps extends WithDataTestIdProps {
  /** Controlled rating. `null` (or omitted) means unrated. */
  value?: number | null
  /** Uncontrolled initial rating. Ignored when `value` is provided. */
  defaultValue?: number | null
  /** Number of stars in the scale. Defaults to 5. */
  max?: number
  /**
   * Allow half-star (x.5) values when interacting. Read-only mode always
   * renders fractional values regardless of this flag.
   */
  allowHalf?: boolean
  /** Called with the new rating, or `null` when the rating is cleared. */
  onChange?: (value: number | null) => void
  /** Render a non-interactive summary (e.g. an average score). */
  readOnly?: boolean
  /** Render non-interactive and visually muted. */
  disabled?: boolean
  /** Prevent clearing the rating by re-selecting the active star. */
  required?: boolean
  /** Visual size of the stars. Defaults to `md`. */
  size?: StarRatingSize
  /** Accessible name for the control. Falls back to a localized default. */
  ariaLabel?: string
  /** Id of an external element labelling the control. Overrides `ariaLabel`. */
  ariaLabelledBy?: string
}
