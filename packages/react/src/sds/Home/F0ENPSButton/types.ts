import type { ButtonToggleGroupSize } from "@/components/F0ButtonToggleGroup"
import type { Pulse } from "@/lib/mood"

export type F0ENPSButtonProps = {
  /**
   * The face that is answered, or `undefined` while the question is unanswered.
   */
  value?: Pulse

  /**
   * Called with the answered face — or `undefined` when the answer is cleared,
   * which only `required: false` allows. Never called on mount.
   */
  onChange?: (value: Pulse | undefined) => void

  /**
   * Override the copy for one or more faces. A face carries no visible text, so
   * its label is both the accessible name and the tooltip: word it as the answer
   * the person is giving ("Very bad"), never as a number or a position.
   *
   * Defaults to the built-in eNPS scale (`i18n.enps.scale`). Reach for this when
   * the question needs its own wording — a recommendation question answers
   * "Not at all likely", a mood check answers "Terrible".
   */
  labels?: Partial<Record<Pulse, string>>

  /**
   * The size of each face.
   * @default "lg"
   */
  size?: ButtonToggleGroupSize

  /**
   * Whether the five faces stretch to fill the container. A widget's eNPS row
   * usually should — an equal split reads as one scale rather than five buttons.
   * @default true
   */
  fullWidth?: boolean

  /**
   * Whether every face is disabled — a submitted answer, or a question that is
   * closed.
   * @default false
   */
  disabled?: boolean

  /**
   * Whether an answer, once given, can be taken back by pressing it again.
   * @default false
   */
  required?: boolean
}
