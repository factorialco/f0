import { DataAttributes } from "@/global.types"
import { WithDataTestIdProps } from "@/lib/data-testid"
import { InputFieldStatus } from "@/ui/InputField/types"

export const sliderTooltipModes = ["always", "onHover", "never"] as const
export type F0SliderTooltipMode = (typeof sliderTooltipModes)[number]

export interface F0SliderProps extends WithDataTestIdProps, DataAttributes {
  label: string
  ariaLabel?: string
  hideLabel?: boolean
  hint?: string
  status?: InputFieldStatus
  required?: boolean
  disabled?: boolean
  name?: string

  value?: number
  defaultValue?: number
  onChange?: (value: number) => void

  /**
   * Fires once when the user commits a value: on pointer release after a drag,
   * and on each discrete keyboard step. Use this — not `onChange` — to trigger
   * expensive side effects such as mutations, so dragging does not fire one
   * call per intermediate value.
   */
  onValueCommit?: (value: number) => void

  min: number
  max: number
  step?: number

  minLabel?: string
  maxLabel?: string

  /**
   * Format the value for the floating tooltip. Receives the raw numeric value
   * and must return the full localised string. The whole string is built by
   * the consumer (instead of e.g. a `unit` prop concatenated by the component)
   * so locales can reorder the phrase around the number — for example RTL
   * languages or locales where the unit precedes the value.
   */
  formatValue?: (value: number) => string

  /**
   * When to show the floating value tooltip above the thumb.
   * - `"always"`: visible at all times.
   * - `"onHover"`: visible while the slider is hovered, focused or being
   *   dragged. Default.
   * - `"never"`: never rendered.
   */
  showTooltip?: F0SliderTooltipMode
}
